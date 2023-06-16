<?php

namespace App\Http\Controllers;
use App\Models\Orders;
use App\Models\Commande;
use App\Models\Cart;
use App\Models\User;
use App\Models\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
class CommandeController extends Controller
{
    /**
     * Store a newly created command in storage.
     */
    public function store(Request $request)
{
    $cartItems = Cart::where('user_id', $request->user()->id)->get();

    foreach ($cartItems as $cartItem) {
        $product = Products::find($cartItem->product_id);

        // Get the user from the users table using the user ID in the cart
        $user = User::find($cartItem->user_id);

        Commande::create([
            'order_id' => $request->user()->id,
            'product_id' => $cartItem->product_id,
            'product_name' => $product->name,
            'quantity' => $cartItem->quantity,
            'price' => $product->price * $cartItem->quantity,
            'user_name' => $user->name,

        ]);
    }

    // Clear the cart after saving the orders
    Cart::where('user_id', $request->user()->id)->delete();

    return response()->json(['message' => 'Orders saved successfully']);
}



}
