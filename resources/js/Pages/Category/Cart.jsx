import React, { useState , useEffect } from 'react';
import axios from 'axios';

import './Cart.css';
import '../Loading.css'
import Loading from '../Loading'
import CartLayout from './CartLayout'
import { Head } from '@inertiajs/react';
import Categorynav from '../Categorynav/Categorynav';
import Nav from '../Nav'
import Footer from '../Footer';
import { Inertia } from '@inertiajs/inertia';
import _ from 'lodash';



function Cart({ cartItems , auth  }){
  const [showAddressPopup, setShowAddressPopup] = useState(false);
  const [address, setAddress] = useState('');

  const handleAddressSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/user/address', { address });
      if (response.status === 200) {
        setShowAddressPopup(false);
      }
    } catch (error) {
      console.error('Error submitting address:', error);
    }
  };
  

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  useEffect(() => {
    if (auth.user && !auth.user.address) {
      setShowAddressPopup(true);
    }
  }, [auth.user]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  


  const [updatedCartItems, setUpdatedCartItems] = useState(_.cloneDeep(cartItems));
  const [categories, setCategories] = useState([]);
  const [isCartEmpty,setIsCartEmpty] = useState(true)
  const [isActive,setIsActive] = useState(true)


  function isCCActive() {
    
    setIsActive(false)
    
  }
  function isPayPalActive() {
    
    setIsActive(true)
    
  }
  useEffect(() => {
    if (updatedCartItems.length <= 0) {
    setIsCartEmpty(false)
  }
  else {
    setIsCartEmpty(true)
  }
  },isCartEmpty)
  
  

 
   
    
  
  

   

  
  






const handleCategoryClick = (categoryId) => {
  setSelectedCategory(categoryId);
  Inertia.get(`/category/${categoryId}`);
};


const [isQuantityChanged, setIsQuantityChanged] = useState(false);


const handleQuantityChange = (event, item) => {
  const newQuantity = parseInt(event.target.value);
  const updatedItem = { ...item, quantity: newQuantity };
  const updatedItems = cartItems.map((cartItem) =>
    cartItem.id === item.id ? updatedItem : cartItem
  );
  setUpdatedCartItems(updatedItems);
  setIsQuantityChanged(true);
};


const handleUpdateCart = async () => {
  try {
    await Promise.all(
      updatedCartItems.map((item) =>
        axios.post(`/cart/${item.id}/update`, { quantity: item.quantity })
      )
    );
    setUpdatedCartItems([]);
    setIsQuantityChanged(false);
    window.location.reload(); // Refresh the page to fetch the updated cart items
  } catch (error) {
    console.error('Error updating cart:', error);
  }
};

  const handleRemoveItem = async (item) => {
    try {
      await axios.delete(`/cart/${item.id}`);
      window.location.href = '/cart'; // Navigate to the '/cart' page
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };
  const totalPrice = cartItems.reduce((accumulator, item) => accumulator + Number(item.product.price) * item.quantity, 0);
  const total = totalPrice.toFixed(2)
  
    let totalAll = Number(total*1.1+30).toFixed(2) 
    
    
  
  
    
  
  const totalQty = cartItems.reduce((accumulator, item) => accumulator + Number(item.quantity), 0);
  
  function increaseFloat(value) {
    var intValue = Math.floor(value); // Get the integer part of the float
    var floatValue = value - intValue; // Get the decimal part of the float
  
    if (floatValue >= 0.9) {
      // If the decimal part is greater than or equal to 0.5,
      // round up the integer part to the next greater integer
      intValue = Math.ceil(value);
    }
    return intValue;
  }
  return (
<CartLayout>
{isLoading ? (
        <>
          <div className="loading-line" />
          <div className="flex items-center justify-center min-h-screen p-5 bg-gray-100 min-w-screen">
          <Loading />
          </div>
        </>
      ) : (<>
<Head title="My cart ">
    <link rel="stylesheet" href="/node_modules/@fortawesome/fontawesome-free/css/all.min.css"/>
</Head>

            <Nav auth={auth}/>
<div className="categories" style={{ marginBottom:"20px" }}>
<Categorynav categories={categories} handleCategoryClick={handleCategoryClick} />
</div>    {auth.user ? ( 
<div className="container mx-auto mt-8">
  <div className=" grid grid-cols-12 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="col-span-12 ">
        <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
        <div style={{maxWidth:"60%"}} className="inline border-t-2 border-gray-300">
          
          
            {
              updatedCartItems.length <= 0 ?
              
              <p></p>
               : (
              
                updatedCartItems &&
                  updatedCartItems.map((item) => (
                    <>
                    <div className="mb-5 flex items-center py-4 border-b border-gray-300" key={item.product.id}>
                      <div className="flex items-center flex-grow">
                        <img
                          src={`/products/${item.product.image}`}
                          alt={item.product.title}
                          className="object-cover w-16 h-16 mr-4"
                        />
                        <div>
                          <h2 className="text-lg font-semibold">{item.product.title}</h2>
                          <div className="text-gray-600">{item.product.price} DH</div>
                          <button
                          onClick={() => handleRemoveItem(item)}
                        >
                                              <span className="text-indigo-700 font-medium text-sm">Remove</span>
      
                        </button>
                        </div>
                      </div>
                      <div className="flex items-center">
                        
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(e, item)}
                          className="border border-gray-400 rounded-lg py-2 px-3 w-20 text-center mr-4"
                        />
                        
                      </div>
                      
                    </div><button
          className={`sm:mb-5 bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg ${isQuantityChanged ? '' : 'opacity-50 cursor-not-allowed'}`}
          onClick={handleUpdateCart}
          disabled={!isQuantityChanged}
        >
          Update Cart
        </button>
       </>
                  ))

              )          
            }
  
            
        {
          isCartEmpty ?
        
        (<div className="relative flex flex-col md:flex-row md:justify-end">
    
          <div style={{width:"400px"}} className="relative border bg-white shadow-sm border-gray-300  px-10 py-5 rounded-lg">
          <h1 className="font-semibold text-lg mb-5">Order Summary</h1>
          <hr className="mb-10"/>
          <p className="mb-2 text-md ">Items : <span className="text-indigo-600 text-sm font-bold">{totalQty}</span></p>
          <hr className="mb-2"/>
          <p className="mb-2 text-md ">Subtotal : <span className="text-indigo-600 text-sm font-bold">{total}</span> DH</p>
          <hr className="mb-2"/>
          <p className="mb-2 text-md">Shipping : <span className="text-indigo-600 text-sm font-bold">30</span> DH</p>
          <hr className="mb-2"/>
          <p className="mb-2 text-md">TVA : <span className="text-indigo-600 text-sm font-bold">10</span> %</p>
          <hr className="mb-2"/>
          <p className="mb-2 text-md">Total : <span className="text-indigo-600 text-sm font-bold">{totalAll}</span> DH</p>
          <hr className="mb-2"/>

  
  <div className="flex flex-col ">
  <div className="flex flex-row items-center">
    <div className="checkbox-apple">
  <input className="yep" name="method" id="paypal" type="radio"/>
  <label onClick={isPayPalActive}  htmlFor="paypal"  ></label>
</div>
    <p className="text-sm mr-32 font-bold italic">PayPal</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" preserveAspectRatio="xMidYMid" viewBox="0 0 256 302" id="paypal"><path fill="#27346A" d="M217.168 23.507C203.234 7.625 178.046.816 145.823.816h-93.52A13.393 13.393 0 0 0 39.076 12.11L.136 259.077c-.774 4.87 2.997 9.28 7.933 9.28h57.736l14.5-91.971-.45 2.88c1.033-6.501 6.593-11.296 13.177-11.296h27.436c53.898 0 96.101-21.892 108.429-85.221.366-1.873.683-3.696.957-5.477-1.556-.824-1.556-.824 0 0 3.671-23.407-.025-39.34-12.686-53.765"></path><path fill="#27346A" d="M102.397 68.84a11.737 11.737 0 0 1 5.053-1.14h73.318c8.682 0 16.78.565 24.18 1.756a101.6 101.6 0 0 1 6.177 1.182 89.928 89.928 0 0 1 8.59 2.347c3.638 1.215 7.026 2.63 10.14 4.287 3.67-23.416-.026-39.34-12.687-53.765C203.226 7.625 178.046.816 145.823.816H52.295C45.71.816 40.108 5.61 39.076 12.11L.136 259.068c-.774 4.878 2.997 9.282 7.925 9.282h57.744L95.888 77.58a11.717 11.717 0 0 1 6.509-8.74z"></path><path fill="#2790C3" d="M228.897 82.749c-12.328 63.32-54.53 85.221-108.429 85.221H93.024c-6.584 0-12.145 4.795-13.168 11.296L61.817 293.621c-.674 4.262 2.622 8.124 6.934 8.124h48.67a11.71 11.71 0 0 0 11.563-9.88l.474-2.48 9.173-58.136.591-3.213a11.71 11.71 0 0 1 11.562-9.88h7.284c47.147 0 84.064-19.154 94.852-74.55 4.503-23.15 2.173-42.478-9.739-56.054-3.613-4.112-8.1-7.508-13.327-10.28-.283 1.79-.59 3.604-.957 5.477z"></path><path fill="#1F264F" d="M216.952 72.128a89.928 89.928 0 0 0-5.818-1.49 109.904 109.904 0 0 0-6.177-1.174c-7.408-1.199-15.5-1.765-24.19-1.765h-73.309a11.57 11.57 0 0 0-5.053 1.149 11.683 11.683 0 0 0-6.51 8.74l-15.582 98.798-.45 2.88c1.025-6.501 6.585-11.296 13.17-11.296h27.444c53.898 0 96.1-21.892 108.428-85.221.367-1.873.675-3.688.958-5.477-3.122-1.648-6.501-3.072-10.14-4.279a83.26 83.26 0 0 0-2.77-.865"></path></svg>
  
  </div>
  <div className="flex mb-10 flex-row items-center px-0">
    <div className="checkbox-apple flex">
  <input className="yep" name="method" id="cc"  type="radio" />
  <label onClick={isCCActive} className="cc"  htmlFor="cc"  ></label>
  </div> 
<p className="text-sm  mr-24  font-bold italic">Credit Card</p>
<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" enable-background="new 0 0 48 48" viewBox="0 0 48 48" id="credit-card"><path fill="#FCE38A" d="M15,29.7v2.6c0,0.4-0.3,0.7-0.7,0.7H7.7C7.3,33,7,32.7,7,32.3v-2.6C7,29.3,7.3,29,7.7,29h6.6
		C14.7,29,15,29.3,15,29.7z"></path><path fill="#95E1D3" d="M3,17v18.8C3,37,4,38,5.3,38h37.5c1.2,0,2.3-1,2.3-2.3V17H3z M17,32.3c0,1.5-1.2,2.7-2.7,2.7H7.7
		C6.2,35,5,33.8,5,32.3v-2.6C5,28.2,6.2,27,7.7,27h6.6c1.5,0,2.7,1.2,2.7,2.7V32.3z M17,25H6c-0.5,0-1-0.5-1-1s0.5-1,1-1h11
		c0.5,0,1,0.5,1,1S17.5,25,17,25z M24,21H6c-0.5,0-1-0.5-1-1s0.5-1,1-1h18c0.5,0,1,0.5,1,1S24.5,21,24,21z"></path><path fill="#FCE38A" d="M45,12.3V15H3v-2.8C3,11,4,10,5.3,10h37.5C44,10,45,11,45,12.3z"></path><path fill="#2F4B49" d="M42.8 8H5.3C2.9 8 1 9.9 1 12.3V16c0-.6.4-1 1-1h1v-2.8C3 11 4 10 5.3 10h37.5c1.2 0 2.3 1 2.3 2.3V15h1c.6 0 1 .4 1 1v-3.8C47 9.9 45.1 8 42.8 8zM46 17h-1v18.8c0 1.2-1 2.3-2.3 2.3H5.3C4 38 3 37 3 35.8V17H2c-.6 0-1-.4-1-1v19.8C1 38.1 2.9 40 5.3 40h37.5c2.3 0 4.3-1.9 4.3-4.3V16C47 16.6 46.6 17 46 17z"></path><rect width="42" height="2" x="3" y="15" fill="#2F4B49"></rect><path fill="#2F4B49" d="M2 17h1v-2H2c-.6 0-1 .4-1 1S1.4 17 2 17zM46 15h-1v2h1c.6 0 1-.4 1-1S46.6 15 46 15z"></path><path fill="#FCE38A" d="M8,29v4H7.7C7.3,33,7,32.7,7,32.3v-2.6C7,29.3,7.3,29,7.7,29H8z"></path><path fill="#FFF" d="M8 10v5H3v-2.8C3 11 4 10 5.3 10H8zM8 17v21H5.3C4 38 3 37 3 35.8V17H8z"></path><path fill="#8DC4BC" d="M45,17v18.8c0,1.2-1,2.3-2.3,2.3H41V17H45z"></path><path fill="#E4CE7E" d="M45,12.3V15h-4v-5h1.8C44,10,45,11,45,12.3z"></path><path fill="#2F4B49" d="M7.7 35h6.6c1.5 0 2.7-1.2 2.7-2.7v-2.6c0-1.5-1.2-2.7-2.7-2.7H7.7C6.2 27 5 28.2 5 29.7v2.6C5 33.8 6.2 35 7.7 35zM7 29.7C7 29.3 7.3 29 7.7 29h6.6c.4 0 .7.3.7.7v2.6c0 .4-.3.7-.7.7H7.7C7.3 33 7 32.7 7 32.3V29.7zM6 21h18c.6 0 1-.4 1-1s-.4-1-1-1H6c-.6 0-1 .4-1 1S5.4 21 6 21zM6 25h11c.6 0 1-.4 1-1s-.4-1-1-1H6c-.6 0-1 .4-1 1S5.4 25 6 25z"></path></svg>

</div>

  </div>
  
  {
    isActive ? (
      <div className="checkoutbtns flex">
        <form action={route('payment')} method='post'>
          <input type="hidden" name="amount" value={increaseFloat(totalAll)} /> 
          <button type="submit" className="absolute font-bold font-lg italic rounded-md right-0 bottom-0 w-full  m-auto bg-yellow-400 hover:bg-yellow-500 text-black  py-2 px-4  mt-4 md:mt-0 md:ml-4 text-center"
>Checkout with PayPal</button>
        </form>
        
        </div>
    ) : (
      <form action="/session" method="POST">
        <input type="hidden" name="amount" value={increaseFloat(totalAll)}/>
        <input type="hidden" name="qty" value={totalQty}/> 
        <input type="hidden"  name="_token" value="{csrf_token()}" />
        <button type="submit" className="absolute italic rounded-md  right-0 bottom-0 w-full  m-auto bg-indigo-500 hover:bg-indigo-400 text-white  py-2 px-4  mt-4 md:mt-0 md:ml-4 text-center"
>Checkout with Credit Card</button>
      </form>
    )
  }
      
   
      
    
  
  

  
  </div> 
  {showAddressPopup && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-75">
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md relative" id='locmodal'>
      <div className="mb-4">
        <img
          src="/map.jpg"
          alt="Map"
          className="mx-auto h-32 w-32 rounded-full mb-4"
        />
        <h3 className="text-lg font-semibold mb-4 text-purple-500">Where are we shipping?</h3>
      </div>
      <form onSubmit={handleAddressSubmit}>
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-300">
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            className="mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm sm:text-sm border-gray-700 rounded-md text-gray-300 bg-gray-700"
            value={address}
            onChange={handleAddressChange}
            placeholder="e.g., 123 Main St, City, Country"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-white bg-purple-500 hover:bg-purple-600 rounded-md"
            onClick={handleAddressSubmit}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
)}


  </div>     
        ) : (
          <p className="bg-indigo-300 text-center text-xl font-bold rounded-lg p-5">Your Cart is Empty.</p>
        )}  
</div>


      </div>
    </div>

        </div>
  ) : (
        <div className="flex items-center justify-center mt-56 min-h-8">
        <div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          
          
          <>
      <a
      id='reglog3'
        href={route('login')}
        className="mt-5 mb-5 main-color inline-flex  w-full justify-center gap-x-1.5 rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        Log in
        
      </a>
      <p className="text-gray-400 mb-5 text-lg font-bold">or&nbsp;
            
          </p>

      <a
       id='reglog3'
        href={route('register')}
        className="text-white mb-5 bg-main-color inline-flex w-full  justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"      >
        Register
      </a>
    </>
    <p className="text-gray-600 text-lg font-bold">To access your Cart.&nbsp;
            
          </p>
        </div>
      </div>
         )}
  
  
   <div style={{width:"100%",marginTop:"600px" }}><Footer /></div>      </>)}
 </CartLayout> );
};

export default Cart;
