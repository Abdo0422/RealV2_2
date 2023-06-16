<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categories;
use App\Models\Products;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class CategoriesController extends Controller
{

    public function view_categories()
{
    $categories = Categories::all();


    return Inertia::render('Admin/Category', [
        'categories' => $categories,
    ]);
}
public function add_category(Request $request): RedirectResponse
{
    $categories = new Categories;

    $categories->name = $request->input("category","z");
    $categories->category_image=$request->input('image');
    $categories->save();

    return redirect(route('categories.view'));
}
public function delete_category($id)
{
    $category = Categories::find($id);
    
    if (!$category) {
        return redirect()->back()->with('error', 'Category not found');
    }
    
    // Get the associated product IDs
    $productIds = Products::where('category_id', $id)->pluck('id');
    
    // Delete the associated products
    Products::whereIn('id', $productIds)->delete();
    
    $category->delete();

    return redirect()->back()->with('success', 'Category and associated products deleted successfully');
}

public function relative_product($id)
    {
        $products = Products::whereHas('category', function($query) use ($id) {
            $query->where('id', $id);
        })->get();

        return Inertia::render('Admin/Relative', [
            'products' => $products,
            
        ]);
    }
public function index()
{
    $categories = Categories::all();
    return response()->json($categories);
}
}


