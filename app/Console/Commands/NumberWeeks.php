<?php

namespace App\Console\Commands;

use App\Daterange;
use Illuminate\Console\Command;
use App\Weekday;

class NumberWeeks extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'number:week';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Deduct 1 each day';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $day = date('l');
        $data = Weekday::where('weekname', $day);
        $today = date("Y-m-d");


        //motor city
        $motorCityStartDate = Daterange::where('drid', 188)->first()->value('daterangefrom');
        if ($today >= $motorCityStartDate) {
            $data->decrement('numberofweek', 1);
        }

        //spring souk
        $springSoukStartDate = Daterange::where('drid', 189)->first()->value('daterangefrom');
        if ($today >= $springSoukStartDate) {
            $data->decrement('akoya', 1);
        }

        //victory heights
        $victoryHeightsStartDate = Daterange::where('drid', 192)->first()->value('daterangefrom');
        if ($today >= $victoryHeightsStartDate) {
            $data->decrement('arcadia', 1);
        }

        //repton
        $reptonStartDate = Daterange::where('drid', 191)->first()->value('daterangefrom');
        if ($today >= $reptonStartDate) {
            $data->decrement('upcoming', 1);
        }



        //$data->decrement('numberofweek', 1);
        //$data->decrement('upcoming', 1);
        //$data->decrement('akoya', 1);
        //$data->decrement('arcadia', 1);
        //$data->decrement('other_time_slot', 1);
    }
}
