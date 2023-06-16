import Product from './Product';
import { Head } from '@inertiajs/react';
import Categorynav from '../Categorynav/Categorynav';
import React, { useState,useEffect} from 'react';
import { Fragment } from 'react';
import Loading from '../Loading'
import Logo from '../../components/Logo'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import './ProductList.css'
import moment from 'moment';
import CartIcon from './CartIcon';
import Nav from '../Nav'
import '../Loading.css'
import Footer from '../Footer';
import { Inertia } from '@inertiajs/inertia';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const ProductList = ({ products, selectedCategory,cartItems, handleProductClick,auth }) => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  const [categories, setCategories] = useState([]);
  const [sortOrder, setSortOrder] = useState('null');
  const [filterPrice, setFilterPrice] = useState('all');
  const handleLogout = (e) => {
    e.preventDefault();
    Inertia.post('/logout');
}
  const handleSortChange = (e) => {
    const selectedSortOrder = e.target.value;
    if (selectedSortOrder !== 'null') {
      setSortOrder(selectedSortOrder);
    }
  };
  const [searchl,setSlearch] = useState([])
    const [searchval,setSearchval] = useState("")
    
      const handlevalue = (e) => {
        e.preventDefault;
        setSearchval(e)
      }
      const handleSearch = (event) => {
        event.preventDefault();
        Inertia.visit(`/search/${searchval}`);
    }
      useEffect(() => {
        
      setTimeout(() => {
        axios.get('/api/Products_Search',{
        params : {
          q : searchval
        }
      })
      .then(response => {
        return response.data;
      })
      .then(data => {
        setSlearch(data);
      })
      .catch(error => {
        console.error(error);
      });
      }, 1000);
    },[searchval])

  const handleFilterChange = (event) => {
    setFilterPrice(event.target.value);
  };


  const sortProducts = (products, sortOrder) => {
    if (sortOrder === 'newest') {
      return [...products].sort((a, b) => moment(b.created_at, 'YYYY-MM-DD HH:mm:ss') - moment(a.created_at, 'YYYY-MM-DD HH:mm:ss'));
    } else if (sortOrder === 'oldest') {
      return [...products].sort((a, b) => moment(a.created_at, 'YYYY-MM-DD HH:mm:ss') - moment(b.created_at, 'YYYY-MM-DD HH:mm:ss'));
    } else {
      return products;
    }
  };
  
  
  
  const filterProducts = (products, filterPrice) => {
    if (filterPrice === '100+') {
      return products.filter((product) => product.price >= 100);
    } else if (filterPrice === '100-') {
      return products.filter((product) => product.price < 100);
    } else {
      return products;
    }
  };
  
  

  const sortedProducts = products ? sortProducts(products, sortOrder) : [];
  const filteredProducts = sortedProducts ? filterProducts(sortedProducts, filterPrice) : [];

  const mobile = "button block lg:hidden"
    const desktop = "button hidden  lg:block"

  return (<>
  {isLoading ? (
        <>
          <div className="loading-line"/>
          <div className="flex items-center justify-center min-h-screen p-5 bg-gray-100 min-w-screen">
             
        <Loading />
          </div>
        </>
      ) : (<>
    <Head title="Category Page">
    <link rel="stylesheet" href="/node_modules/@fortawesome/fontawesome-free/css/all.min.css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>
</Head>
<base href="/public"></base>

<Nav auth={auth} cartItems={cartItems} />

<div className="categories" style={{ marginBottom:"50px" }}>
<Categorynav categories={categories} />
</div>
<div id='procol' className="container mx-auto px-4 border-2 border-gray-300 shadow-lg rounded-lg" style={{ paddingTop:"10px",paddingBottom:"20px", marginBottom:"30px" }}>

  {selectedCategory && (
    <div className="flex items-center justify-between mb-4" >
    <div className="text-sm breadcrumbs">
      <ul className="flex">
        <li id='list1'><a href="/">Home</a></li> 
        <li><p className="text-blue-500">{selectedCategory}</p></li> 
      </ul>
    </div>
   <p className="text-lg font-medium mb-4 text-purple-lighter">
  {filteredProducts.length} Products 
  </p>

  </div> )}

  {selectedCategory && (
   <div className="flex justify-end my-4">
      <select
         value={sortOrder}
  onChange={handleSortChange}
        className="border border-gray-500 rounded-md px-3 py-1 bg-white text-gray-700 mr-4"
      >
        <option value="all">Sort by</option>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
      </select>

      <select
        value={filterPrice}
        onChange={handleFilterChange}
        className="border border-gray-500 rounded-md px-3 py-1 bg-white text-gray-700"
      >
        <option value="all">Filter</option>
        <option value="100+">100DH and above</option>
        <option value="100-">Less than 100DH</option>
      </select>
    </div>
  )}

  {selectedCategory && filteredProducts.length > 0 ? (
    <div id='grid1' className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {filteredProducts.map((product) => (
        <Product key={product.id} product={product} handleProductClick={handleProductClick} />
      ))}
    </div>
   ) : (
    <div>No products found.</div>
  )}


</div>
<div  style={{width:"100%",marginTop:"500px" }}><Footer /></div></>)}

</>)}
    
  


export default ProductList;
