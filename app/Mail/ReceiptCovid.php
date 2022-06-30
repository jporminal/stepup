<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ReceiptCovid extends Mailable
{
    use Queueable, SerializesModels;

    public $mother;
    public $children;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($mother, $children)
    {
        $this->mother = $mother;
        $this->children = $children;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('Invoice')
            ->view('email.invoice.covid');
    }
}
