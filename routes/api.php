<?php
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\ProductsController;
use Illuminate\Http\Request;
use App\Models\Products;
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::get('/categories', [CategoriesController::class, 'index'])->name('api.categories.index');
Route::get('/products', [ProductsController::class, 'index'])->name('api.products.index');

// Fetching Search Results when the user change the val of the input
Route::get("/Products_Search",function(Request $request) {
    $query = $request->query('q');
    $pros = [];
    if (strlen($query) > 0) {
        $products = Products::where('title','like',$query.'%')->take(5)->get();
        if (count($products) > 0) {

            foreach ($products as $product) {
                array_push($pros,[$product->id,$product->title,$product->image]);
                
            }
    }
    }
    return response()->json($pros);
});



Route::get("/Search",function(Request $request) {
    $query = $request('search');
    $pros = [];
    
        $products = Products::where('title','like',$query.'%')->get();
        if (count($products) > 0) {

            foreach ($products as $product) {
                array_push($pros,[$product->id,$product->title,$product->description,$product->price,$product->image]);
                
            }
    }
    
    return response()->json($pros);
});
Route::get("/AdminSearch",function(Request $request) {
    
    $query = $request->query('o');
    $pros = [];
    if (strlen($query) > 0) {
        $products = Products::where('title','like',$query.'%')->get();
        if (count($products) > 0) {

            foreach ($products as $product) {
                array_push($pros,[$product->id,$product->title,$product->image]);
                
            }
    }
    }
    return response()->json($pros);


    

});


Route::get('/products/random', [ProductsController::class, 'random'])->name('api.products.random');
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

