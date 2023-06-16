<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Mail\OrderShipped;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Payment;
use Illuminate\Support\Facades\Mail;
use App\Models\Orders;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;
use Omnipay\Omnipay;
class PaymentController extends Controller
{
    private $gateway;

    public function __construct() {
        $this->gateway = Omnipay::create('PayPal_Rest');
        $this->gateway->setClientId(env('PAYPAL_CLIENT_ID'));
        $this->gateway->setSecret(env('PAYPAL_CLIENT_SECRET'));
        $this->gateway->setTestMode(true);
    }
    public function pay(Request $request) {
        try {
            $response = $this->gateway->purchase(array(
                'amount' => $request->amount / 10,
                'currency' => env('PAYPAL_CURRENCY'),
                'returnUrl' => url('success'),
                'cancelUrl' => url('error')
            ))->send();
            if ($response->isRedirect()) {
                
                $response->redirect();
            }
            else {
                $response->getMessage();
            }
        } catch (\Throwable $th) {
            $th->getMessage();
        }
    }
    public function success(Request $request)
    {
        if ($request->input('paymentId') && $request->input('PayerID')) {
            $transaction =  $this->gateway->completePurchase(array(
                'payer_id' => $request->input('PayerID'),
                'transactionReference' => $request->input('paymentId')
            ));
        
            $response = $transaction->send();
            if ($response->isSuccessful()) {
                $arr = $response->getData();
    
                $order = new Orders();
                
                $order->PaymentMethod = "PayPal";
                $order->OrderDate = date('Y-m-d');
                $order->DeliveryDate = date('Y-m-d', strtotime('+10 days'));
                $order->status = "Pending";
                $order->total = $arr['transactions'][0]['amount']['total']*10;
                $order->save();
    
                $payment = new Payment();
                $payment->payment_id = $arr['id'];
                $payment->payer_id = $arr['payer']['payer_info']['payer_id'];
                $payment->payer_email = $arr['payer']['payer_info']['email'];
                $payment->amount = $arr['transactions'][0]['amount']['total'];
                $payment->curreny = env('PAYPAL_CURRENCY');
                $payment->payment_status = $arr['state'];
                $payment->save();
    
                // Fetch data from the carts table and save it to the commande table
                $carts = \App\Models\Cart::all();
                foreach ($carts as $cart) {
                    // Retrieve the user from the users table using the user ID in the cart
                    $user = \App\Models\User::find($cart->user_id);
                    $address = $user->address;
                    \App\Models\Commande::create([
                        'order_id' => $order->id,
                        'product_id' => $cart->product_id,
                        'product_name' => $cart->product->title,
                        'quantity' => $cart->quantity,
                        'price' => $cart->total,
                        'user_name' => $user->name,
                        'address' => $address
                    ]);
                
                    // Reduce the product quantity in the Product table
                    $product = \App\Models\Products::find($cart->product_id);
                    $product->quantity -= $cart->quantity;
                    $product->save();
                }
                
                // Delete the cart items after saving to the commande table
                \App\Models\Cart::truncate();
    
                return redirect('/');
            } else {
                return $response->getMessage();
            }
        } else {
            return "Payment declined!";
            
        }
    }
    
    
    public function error() {
            return redirect('/cart')->with('error', 'User declined the payment!');
    }

    
}