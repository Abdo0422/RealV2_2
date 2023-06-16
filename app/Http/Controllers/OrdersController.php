<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Orders;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;
use App\Models\Commande;
use App\Models\Products;
class OrdersController extends Controller
{
    public function view_orders()
    {
        $orders = Orders::all();
        $commandes = Commande::all(); // Fetch the commandes data from the "commande" table
        return Inertia::render('Admin/View_Orders', [
            'orders' => $orders,
            'commandes' => $commandes // Pass the commandes data to the view
        ]);
    }
    
    public function form_edit_order($id)
    {
        $order = Orders::find($id);
        return Inertia::render('Admin/FormEdit_Order', [
            'order' => $order,
    
        ]);
    }  
     public function update(Request $request, $id)
{
    // Retrieve the order by ID
    $order = Orders::findOrFail($id);

    // Validate and update the order status
    $request->validate([
        'status' => ['required', 'in:pending,delivered'],
    ]);

    $order->status = $request->input('status');
    $order->save();

    return redirect()->back()->with('success', 'Order status updated successfully!');
}
      public function delete_order($id): RedirectResponse
      {
          $order = Orders::find($id);
      
          // Delete the associated command
          $command = Commande::where('order_id', $order->id)->first();
          if ($command) {
              // Delete the command
              $command->delete();
          }
      
          $order->delete();
      
          return redirect()->back()->with("message0", "Order Deleted Successfully ");
      }
      
    public function show_your_order(Request $request)
    {
      $search = Orders::where('name','LIKE','%$search%')->orWhere('id','LIKE','%$search%')->paginate(2);
      return Inertia::render('Admin/Show_Order', [
        'search' => $search,
    ]);
}
public function checkout() {
    return Inertia::render('Checkout', 
    []);
}

}
