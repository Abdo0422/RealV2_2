<?php

namespace App\Http\Controllers;
use App\Models\Products;
use App\Models\Categories;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;

class ProductsController extends Controller
{
    public function form_add_product()
    {
        $categories =Categories::all();
        return Inertia::render('Admin/Form_Product', [
            'categories' => $categories,
        ]);
    }
    public function add_product(Request $request) :RedirectResponse
    {
        $products = new Products;
        $products->category_id=$request->category_id;
        $products->title=$request->title;
        $products->description=$request->description;
        $products->price=$request->price;
        $products->quantity=$request->quantity;
        $filename = $request->file('image')->getClientOriginalName();
        $path = $request->file('image')->storeAs('products', $filename, 'public');
        $products->image = $filename;
        $categories=Categories::find($request->category_id);
        $products->save();
        return redirect(route('products.show'));
    }

    public function show_products()
    {
        $products = Products::all();
        return Inertia::render('Admin/Show_Products', [
            'products' => $products->map(function ($product) {
                return [
                    'id' => $product->id,
                    'image' => $product->image,
                    'title' => $product->title,
                    'description' => $product->description,
                    'price' => $product->price,
                    'quantity' => $product->quantity,
                    'category' => $product->category ? $product->category->name : null,
                ];
            })]);
    }
    public function delete_product($id) : RedirectResponse
    {
        $pro =Products::find($id);
        $pro->delete();
        return redirect()->back()->with("message0","Product Deleted Successfully ");
    }
    public function form_edit_product($id)
    {
      $product =Products::find($id);
      $categories =Categories::all();
        return Inertia::render('Admin/FormEdit_Product', [
        'categories' => $categories,
        'product' => $product

    ]);
    }
    
    public function edit_product(Request $request,$id)
    {
        $categories =Categories::all();
        $categories->name=$request->category_name;
        $products =Products::find($id);
        $products->title=$request->title;
        $products->description=$request->description;
        $products->price=$request->price;
        $products->quantity=$request->quantity;
        if (strlen($request->file('image')) > 0) {
            $filename = $request->file('image')->getClientOriginalName();
            $path = $request->file('image')->storeAs('products', $filename, 'public');
            $products->image = $filename;
        };
        $products->save();
      return redirect(route('products.show'));
    }
    
    public function showByCategory($category_id)
    {
        $products = Products::where('category_id', $category_id)->get();
        $categories = Categories::select('id', 'name')->distinct()->get();
    
        $selectedCategory = Categories::find($category_id)->name;
    
        return Inertia::render('Category/ProductList', [
            'products' => $products,
            'categories' => $categories,
            'selectedCategory' => ucfirst($selectedCategory),
        ]);
    }
    public function show($id,$product="")
    {
        
        $product = Products::findOrFail($id);
        $relatedProducts = Products::where('category_id', $product->category_id)
                            ->where('id', '!=', $product->id)
                            ->inRandomOrder()
                            ->limit(3)
                            ->get();
    
        return inertia('Category/ProductDetails', [
            'product' => $product,
            'relatedProducts' => $relatedProducts,
        ]);
    }
    public function searchProducts($query) {
        $products = Products::where('title', 'like', "$query%")
                            ->orWhere('title', 'like',"%$query")
                            ->orWhere('title', 'like',"%$query%")

                            ->get();

        return Inertia::render('SearchProducts', [
            'query' => $query,
            'products' => $products,
        ]);
    }
    


    public function random()
    {
        $product = Products::inRandomOrder()->first();
        return response()->json($product);
    }
}
