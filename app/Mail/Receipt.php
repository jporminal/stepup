<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Receipt extends Mailable
{
    use Queueable, SerializesModels;

    public $products;
    public $total;
    public $last_id;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($products, $total, $last_id)
    {
        $this->products = $products;
        $this->total = $total;
        $this->last_id = $last_id;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('Invoice')
            ->view('email.invoice.form');
    }
}
