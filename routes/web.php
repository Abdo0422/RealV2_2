<?php
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\StripPaymentController;
use App\Http\Controllers\OrdersController;
use App\Models\Products;
use App\Mail\VerificationMail;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use App\Models\Cart;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\CartController;
use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::post('/user/address', [UserController::class, 'updateAddress'])->name('user.address.update');

Route::fallback(function () {
    return Inertia::render('Category/404page');
});

Route::get('/dashboard-data', [DashboardController::class, 'index']);
Route::get('/dashboard', [DashboardController::class, 'admin'])
    ->name('dashboard')
    ->middleware('auth');
    
Route::get('/', function () {
    $cart = Cart::where('user_id', Auth::id())->with('product')->get();
    $products = Products::all();
    return Inertia::render('UserPage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'products' => $products,
        'cartItems' => $cart,
        'user' => Auth::user(),

    ]);
})
->name('userpage');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth','admin'])->name('dashboard');
Route::get('/Navigation', function () {
    return Inertia::render('ProductList');
})->name('navigation');




Route::middleware('auth','admin')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/Admincategories', [CategoriesController::class, 'view_categories'])
->middleware('admin')
->name('categories.view');

Route::post('/Admincategories/add', [CategoriesController::class, 'add_category'])
->middleware('admin')
->name('categories.add');

Route::get('/Admincategories/relative/{id}', [CategoriesController::class, 'relative_product'])
->middleware('admin')
->name('categories.relative');

Route::delete('/Admincategories/delete/{id}', [CategoriesController::class, 'delete_category'])
->middleware('admin')
->name('categories.delete');

Route::get('/search/{query}', [ProductsController::class, 'searchProducts'])

->name('searchProducts');




Route::get('/form_add_product',[ProductsController::class,'form_add_product'])
->middleware('admin')
->name('product.form_add');

Route::get("/show_products",[ProductsController::class,"show_products"])
->middleware('admin')
->name('products.show');

Route::post("/add_product",[ProductsController::class,"add_product"])
->middleware('admin')
->name('product.add');

Route::delete('/delete_product/{id}',[ProductsController::class,'delete_product'])
->middleware('admin')
->name('product.delete');

Route::get('/form_edit_product/{id}',[ProductsController::class,'form_edit_product'])
->middleware('admin')
->name('product.form_edit');

Route::post('/edit_product/{id}',[ProductsController::class,'edit_product'])
->middleware('admin')
->name('product.edit');

Route::get('/category/{category_id}', [ProductsController::class,'showByCategory'])

->name('category.show');
Route::get('/products/{product_id}', [ProductsController::class,'show'])->where('id', '[0-9]+')

->name('product.show');

Route::get('/view_orders',[OrdersController::class,'view_orders'])->middleware('admin')
->name('order.view');
Route::delete('/delete_order/{id}',[OrdersController::class,'delete_order'])->middleware('admin')
->name('order.delete');
Route::get('/form_edit_order/{id}',[OrdersController::class,'form_edit_order'])->middleware('admin')
->name('order.form_edit');
Route::put('/orders/{id}', [OrdersController::class, 'update'])->name('order.update');
Route::get('/show_your_order',[OrdersController::class,'show_your_order'])->middleware('admin')
->name('order.show');



// Routes for Cart
Route::get('/cart', [CartController::class, 'index'])
->name('cart.index');
Route::post('/cart/add/{id}', [CartController::class, 'add'])
->name('cart.add');
Route::delete('/cart/{id}', [CartController::class, 'remove'])
->name('cart.remove');
Route::post('/cart/{id}/update', [CartController::class, 'updateQuantity'])
->name('cart.updateQuantity');

// PayPal Payment Routes
Route::post('/pay',[PaymentController::class,'pay'])
->name('payment');
Route::get('/success',[PaymentController::class,'success']);
Route::get('/error',[PaymentController::class,'error']);



// Stripe Payment Routes 

Route::post('/session',[StripPaymentController::class,'session'])->name('session');
Route::post('/success',[StripPaymentController::class,'success'])->name('success');


// Mailing Routes 
Route::get('/send',function () {
    Mail::to('hash7046@gmail.com')->send(new VerificationMail());
    return response('sending');
});


require __DIR__.'/auth.php';
