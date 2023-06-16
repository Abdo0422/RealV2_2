<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Http\Response;

class CartController extends Controller
{
    public function index()
    {
        $cart = Cart::where('user_id', Auth::id())->with('product')->get();

        return Inertia::render('Category/Cart', [
            'cartItems' => $cart,
            'user' => Auth::user(),
        ]);
    }

    public function add(Request $request, $productId)
    {
        $quantity = $request->input('quantity');
    
        $product = Products::findOrFail($productId);
    
        if ($product->quantity < $quantity) {
            return response()->json(['message' => 'Insufficient quantity'], 400);
        }
    
        $cartItem = Cart::where('user_id', Auth::id())
            ->where('product_id', $productId)
            ->first();
    
        if ($cartItem) {
            $cartItem->quantity += $quantity;
            $cartItem->total = $cartItem->quantity * $product->price;
            $cartItem->save();
        } else {
            $cartItem = new Cart();
            $cartItem->user_id = Auth::id();
            $cartItem->product_id = $productId;
            $cartItem->quantity = $quantity;
            $cartItem->total = $quantity * $product->price;
            $cartItem->save();
        }
    
        // Update the cart item count in the session
        $cartItemCount = Cart::where('user_id', Auth::id())->count();
        $request->session()->put('cartItemCount', $cartItemCount);
    
        // Return a success response or redirect back to the previous page
        return response()->json(['message' => 'Item added to cart']);
    }
    
    public function updateQuantity(Request $request, $id)
    {
        try {
            $cart = Cart::findOrFail($id);
            $previousQuantity = $cart->quantity;
            $newQuantity = $request->input('quantity');
            $difference = $newQuantity - $previousQuantity;
    
            $cart->quantity = $newQuantity;
            $cart->save();
    
            return response()->json(['message' => 'Quantity updated successfully']);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error updating quantity'], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
    
    public function remove($id)
    {
        // Find the cart item by ID for the authenticated user
        $cartItem = Cart::where('user_id', Auth::id())
            ->where('id', $id)
            ->firstOrFail();
    
        // Delete the cart item
        $cartItem->delete();
    
        // Return a JSON response to indicate successful removal
        return response()->json(['message' => 'Item removed from cart']);
    }
    
}
