import React, { useState , useEffect , useContext } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Head } from '@inertiajs/react';
import Categorynav from "../Categorynav/Categorynav";
import './ProductDetails.css'
import Loading from '../Loading'
import Product from './Product';
import axios from 'axios';
import Nav from '../Nav'
import '../Loading.css'

import { CartContext } from "./CartContext";
import Footer from "../Footer";


export default function ProductDetails({ relatedProducts  ,cartItems, product , auth }) {
  const {updateCartItemCount} = useContext(CartContext)
  const [quantity, setQuantity] = useState(1);
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  
const handleAddToCart = async () => {
  try {
    if (auth.user) {
      const productId = product.id;

      if (quantity >= 1) {
        const data = {
          quantity: quantity,
        };

        const response = await axios.post(`/cart/add/${productId}`, data);

        if (response.status === 200) {
          console.log('Item added to cart');
          updateCartItemCount(prevCount => prevCount + quantity);
        } else {
          console.error('Error adding item to cart:', response.data);
        }
      } else {
        alert('Invalid quantity');
      }
    } else {
      alert('You must be signed in first.');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
};


const handleLogout = (e) => {
  e.preventDefault();
  Inertia.post('/logout');
} 
    
      
     
    
  return (
  <>
  {isLoading ? (
        <>
          <div className="loading-line" />
          <div className="flex items-center justify-center min-h-screen p-5 bg-gray-100 min-w-screen">
          <Loading />
          </div>
        </>
      ) : (<>
      <base href="/public"></base>
   <Head title="Product Details">
    <link rel="stylesheet" href="/node_modules/@fortawesome/fontawesome-free/css/all.min.css"/>
</Head>
<Nav auth={auth} cartItems={cartItems} />
<div className="categories">
<Categorynav categories={categories} />
</div>
<div className="container mx-auto mt-8">
  <div className="grid grid-cols-12 gap-8" style={{marginTop:"100px"}}>
    <div className="col-span-12 md:col-span-6">
    {isLoading ? (
          <div style={{ marginLeft:'180px',marginTop:"50px"}}>
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
          </div>
        </div>        

      ) : (
        <div id="proimg"><img
            src={"/products/" + product.image}
            alt="productImage"
            className="object-cover object-center group-hover:opacity-75"
            style={{ width: "420px" ,borderRadius:'20px'}}
          /></div>)}

    </div>
    <div className="col-span-12 md:col-span-6">
      <h1 className="text-3xl mb-14">{product.title}</h1>
      <div className="mb-14 flex items-center space-x-4 text-lg font-medium">
        <div id="come"><span style={{color:"#5B06E5",fontWeight:"bolder"}} className="text-md">{(product.price * quantity).toFixed(2)}</span> DH</div>
        <div >|</div>
        <div>
          <label className="font-medium">Quantity:</label>
          <input
            type="number"
            min="1"
            max="10"
            value={quantity}
            onChange={(e) => {
              const newQuantity = parseInt(e.target.value);
              if (newQuantity >= 1) {
                setQuantity(newQuantity);
              }
            }}
            className="border border-gray-400 rounded-lg py-2 px-3 w-20" style={{ width:"80px",height:"40px" }}
          />
        </div>
      </div>
      <div className="mt-4 leading-relaxed">{product.description}</div>
      <div className="mt-8 flex justify-between">
      {auth.user ? (
  product.quantity > 0 ? (
    // Product is available
    <button id="come1"
      className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg"
      onClick={handleAddToCart}
    >
      Add to cart
    </button>
  ) : (
    // Product is sold out
<span
  className="text-red-500 text-4xl font-bold flex items-center justify-center"
  style={{ height: '100px',marginLeft:"300px" }}
  id="sold"
>
  Sold Out
</span>

  )
) : (
  <span className="text-red-500" id="spantext1">
    You must be{" "}
    <a href="/login" id="spantext" className="underline text-blue-500 hover:text-blue-800">
      Login
    </a>{" "}or{" "}
    <a href="/register" id="spantext" className="underline text-blue-500 hover:text-blue-800">
      Register
    </a>{" "}
    first.
  </span>
)}
       {!auth.user && (
    <div>
      <a id='link'
        href="/"
        className="text-blue-500 underline hover:text-blue-700 hover:text-blue-800"
      >
        Back Home
      </a>
    </div>
  )}
      </div>
    </div>
  </div>
  <div className="mt-16 border-t-2 border-gray-300 pt-8" style={{marginTop:"210px" ,marginBottom:"-110px"}}>
    <div className="text-center">
      <h2 className="text-2xl font-semibold mb-4">Similar products</h2>
    </div>
    {relatedProducts.length > 0 ? (
      <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {relatedProducts.map((relatedProduct) => (
            <Product key={relatedProduct.id} product={relatedProduct}/>
          ))}
        </div>
      </div>
    ) : (
      <div className="text-center mt-8">
        <p className="text-lg font-medium">No related products found.</p>
      </div>
    )}
    </div>
</div>
<div  style={{width:"100%",marginTop:"300px" }}><Footer /></div></>
)
}
    </>
  );
}
