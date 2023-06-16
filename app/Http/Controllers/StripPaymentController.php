<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StripPaymentController extends Controller
{
    public function checkout()
    {
        return Inertia::render('Cart',[

        ]);
    }

    public function session(Request $request)
    {
        \Stripe\Stripe::setApiKey(config('stripe.sk'));

        $session = \Stripe\Checkout\Session::create([
            'line_items'  => [
                [
                    'price_data' => [
                        'currency'     => 'mad',
                        'product_data' => [
                            'name' => '',
                        ],
                        'unit_amount'  => $request->amount * 100,
                    ],
                    'quantity'   =>  1,
                ],
            ],
            'mode'        => 'payment',
            'success_url' => route('success'),
            'cancel_url'  => route('cart.index'),
        ]);

        return redirect()->away($session->url);
    }

    public function success()
    {
        return "Yay, It works!!!";
    }
}