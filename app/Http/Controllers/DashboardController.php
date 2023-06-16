<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Products;
use App\Models\Orders;
use App\Models\User;
class DashboardController extends Controller
{
    public function index()
    {
        $totalProducts = Products::count();
        $totalOrders = Orders::count();
        $totalCustomers = User::where('is_admin', 0)->count();
        $orderPending = Orders::where('status', 'pending')->count();
        $orderDelivered = Orders::where('status', 'delivered')->count();
        $data = [
            'totalProducts' => $totalProducts,
            'totalOrders' => $totalOrders,
            'totalCustomers' => $totalCustomers,
            'orderPending' => $orderPending,
            'orderDelivered' => $orderDelivered,
        ];

        return response()->json($data);
    }
    public function admin()
    {
        if (auth()->user()->is_admin !== 1) {
            abort(403); // Unauthorized access
        }

        return inertia('Dashboard');
    }
}
