<?php

namespace App\Providers;

use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;
use App\Events\EventContactUs;
use App\Listeners\ListenerContactUs;
use App\Listeners\ListenerContactUsReply;
use App\Events\EventEnrollment;
use App\Listeners\ListenerEnrollment;
use App\Listeners\ListenerSendFormParent;
use App\Listeners\ListenerTermsAndConditions;
use App\Listeners\ListenerCovid;
use App\Events\EventReceipt;
use App\Listeners\ListenerReceipt;
use App\Listeners\ListenerReceiptTermsAndConditions;
use App\Listeners\ListenerReceiptCovid;


class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],

        EventContactUs::class => [
            ListenerContactUs::class,
            ListenerContactUsReply::class
        ],

        EventEnrollment::class => [
            ListenerEnrollment::class,
            ListenerSendFormParent::class,
            ListenerTermsAndConditions::class,
            ListenerCovid::class
        ],

        EventReceipt::class => [
            ListenerReceipt::class,
            ListenerReceiptCovid::class
            // ListenerReceiptTermsAndConditions::class,
        ]
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        //
    }
}
