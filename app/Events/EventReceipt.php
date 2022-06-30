<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class EventReceipt
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $products;
    public $total;
    public $last_id;
    public $customer;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($products, $total, $last_id, $customer)
    {
        $this->products = $products;
        $this->total = $total;
        $this->last_id = $last_id;
        $this->customer = $customer;
    }
}
