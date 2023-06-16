<?php

namespace App\Console\Commands;

use App\Models\Orders;
use Carbon\Carbon;
use Illuminate\Console\Command;

class UpdateOrderStatus extends Command
{
    protected $signature = 'orders:update-status';
    protected $description = 'Update the status of orders based on the delivery date';

    public function handle()
    {
        // Get the current date and time
        $currentDateTime = Carbon::now();

        // Retrieve the orders with pending status and delivery date <= current date
        $orders = Orders::where('status', 'pending')
            ->whereDate('DeliveryDate', '<=', $currentDateTime->toDateString())
            ->get();

        // Update the status of each order to 'delivered'
        foreach ($orders as $order) {
            $order->status = 'delivered';
            $order->save();
        }

    }
}
