<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Mail\ReceiptTermsAndConditions;

class ListenerReceiptTermsAndConditions implements ShouldQueue
{
    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
        \Mail::to($event->mother['email'])
            ->bcc('info@stepup.ae')
            ->send(new ReceiptTermsAndConditions($event->mother, $event->children));
    }
}
