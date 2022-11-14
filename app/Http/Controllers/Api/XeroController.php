<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Sale;
use DateTime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Date;
use XeroPHP\Models\Accounting\Invoice;
use XeroPHP\Models\Accounting\Payment;
use XeroPHP\Models\Accounting\Account;
use XeroPHP\Models\Accounting\LineItem;
use XeroPHP\Models\Accounting\Contact;

class XeroController extends Controller
{
    public $provider;



    public function __construct()
    {
        $client_id = '47BAEF15304E4E4BBB0766CD7755710F'; // 47BAEF15304E4E4BBB0766CD7755710F
        $client_secret = 'tDlnifK8_SsrDOK8sFqXKIVpvbxC3uv2D0M13r1lqXMCe_6G'; // tDlnifK8_SsrDOK8sFqXKIVpvbxC3uv2D0M13r1lqXMCe_6G
        $redirect_uri = 'https://stepup.ae/sams-xero'; // https://stepup.ae/xero_auth

        $this->provider = new \Calcinai\OAuth2\Client\Provider\Xero([
            'clientId'          => $client_id,
            'clientSecret'      => $client_secret,
            'redirectUri'       => $redirect_uri,
        ]);
    }

    public function xero_login()
    {
        // If we don't have an authorization code then get one
        $authUrl = $this->provider->getAuthorizationUrl([
            'scope' => 'offline_access openid email profile accounting.transactions accounting.reports.read accounting.transactions.read'
        ]);

        $_SESSION['oauth2state'] = $this->provider->getState();
        return $authUrl;
        exit;
    }

    public function xero_token($code, $state)
    {
        $token =  $this->provider->getAccessToken('authorization_code', [
            'code' => $code
        ]);

        $tenant = $this->get_tenant($token);

        $owner = $this->get_resource_owner($token);

        return ['token' => $token, 'tenant' => $tenant, 'owner' => $owner];
    }

    public function refresh_token(Request $request)
    {
        $token = $request->token['refresh_token'];

        return $this->ref_token($token);
    }

    public function xero_invoices(Request $request)
    {

        $token = $request->token['access_token'];

        $tenant_id = $request->tenant_id;

        $instance = $this->my_instance($token, $tenant_id);

        return $this->load_invoice($instance);
    }

    public function xero_import(Request $request)
    {
        $token = $request->token['access_token'];
        $tenant_id = $request->tenant_id;
        $xero = $request->xero;

        $instance = $this->my_instance($token, $tenant_id);

        $invoice =  $this->invoice($xero, $instance);

        if ($invoice) {
            $this->update_invoice($xero['transaction']['id'], $invoice->InvoiceID);

            $this->update_accounts($invoice->InvoiceID, $instance, $invoice->InvoiceNumber, $invoice->Total, $xero['transaction']['id']);
        }

        // InvoiceID, Total, InvoiceNumber
    }

    private function update_accounts($invoice_id, $instance, $invoice_number, $amount_due, $id)
    {
        $payment = new Payment($instance);
        $payment->setInvoice($this->set_invoice($invoice_number, $instance));
        $payment->setAccount($this->set_account($invoice_id, $instance));
        $payment->setDate(new DateTime());
        $payment->setAmount($amount_due);
        $payment->setIsReconciled(true);
        $payment->setReference($id);

        $instance->save($payment);
    }

    private function set_invoice($invoice_number, $instance)
    {
        return $instance->loadByGUID(Invoice::class, $invoice_number);
    }

    private function set_account($invoice_id, $instance)
    {
        $account = new Account($instance);
        $account->getGUIDProperty($invoice_id);
        $account->setCode('101');

        return $account;
    }

    private function update_invoice($id, $invoice_id)
    {
        $invoice = Sale::find($id);
        $invoice->xero_invoiceID = $invoice_id;
        $invoice->save();
    }


    private function invoice($item, $instance)
    {
        $date_today = new DateTime();
        $invoice = new Invoice($instance);
        $line_item = new LineItem($instance);

        $invoice->setType('ACCREC');
        $invoice->setDate($date_today);
        $invoice->setDueDate($date_today);
        $invoice->setInvoiceNumber('STEP-ONLINE-AUTH2-' . $item['transaction']['id']);
        $invoice->setReference($item['transaction']['payment_type']);
        $invoice->setCurrencyCode('AED');
        $invoice->setStatus('AUTHORISED');
        $invoice->setLineAmountType('Exclusive');
        $invoice->setContact($this->contacts($item['customer'], $instance));

        foreach ($item['Services'] as $services) {
            $line_item_2 = clone $line_item;
            $price_exlc = $services['unit_price'] / 1.05;
            $total = $services['unit_price'] * $services['quantity'];
            $discount_percentage = ($services['discount'] / $total) * 100;

            $line_item_2->setDescription($services['item']);
            $line_item_2->setQuantity($services['quantity']);
            $line_item_2->setUnitAmount($price_exlc);
            $line_item_2->setAccountCode($services['xero']);
            $line_item_2->setTaxType('TAX002');
            $line_item_2->setDiscountRate($discount_percentage);

            $invoice->addLineItem($line_item_2);
        }

        $invoice->save();

        return $invoice;
    }

    private function ref_token($token)
    {
        return $this->provider->getAccessToken('refresh_token', [
            'refresh_token' => $token
        ]);
    }

    private function get_tenant($token)
    {
        return $this->provider->getTenants($token);
    }

    private function get_resource_owner($token)
    {
        return $this->provider->getResourceOwner($token);
    }

    private function my_instance($access_token, $tenant_id)
    {
        return new \XeroPHP\Application($access_token, $tenant_id);
    }

    private function load_invoice($instance)
    {
        return $instance->load(Invoice::class)
            ->where('Status', Invoice::INVOICE_STATUS_AUTHORISED)
            ->where('Type', Invoice::INVOICE_TYPE_ACCREC)
            ->execute();
    }

    private function line_item($items, $instance)
    {
        $line_item = new LineItem($instance);

        $line_item_2 = '';
        $line_item_2 = clone $line_item;
        foreach ($items['Services'] as $item) {
            $price_exlc = $item['unit_price'] / 1.05;
            $discount_percentage = ($item['discount'] / $item['unit_price']) * 100;

            $line_item_2->setDescription($item['item']);
            $line_item_2->setQuantity($item['quantity']);
            $line_item_2->setUnitAmount($price_exlc);
            $line_item_2->setAccountCode('230');
            $line_item_2->setTaxType('TAX002');
            $line_item_2->setDiscountRate($discount_percentage);
        }
        return $line_item_2;
    }


    private function contacts($item, $instance)
    {
        $contact = new Contact($instance);

        $contact->setContactStatus('ACTIVE');
        $contact->setName($item['motherfirstname'] . ' ' . $item['motherlastname']);
        $contact->setFirstName($item['motherfirstname']);
        $contact->setLastName($item['motherlastname']);
        $contact->setEmailAddress($item['motheremailaddress']);

        return $contact;
    }
}
