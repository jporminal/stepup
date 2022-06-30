<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Mail\Receipt;

class ListenerReceipt implements ShouldQueue
{
    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
        \Mail::to($event->customer['email'], $event->customer['first_name'])
            ->bcc('info@stepup.ae', 'StepUp Academy')
            ->send(new Receipt($event->products, $event->total, $event->last_id));
    }
}
