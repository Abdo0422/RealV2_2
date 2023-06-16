import { usePage, Head,Link } from '@inertiajs/react';
import Categorynav from './Categorynav/Categorynav';
import RandomProduct from './Category/RandomProduct';
import React, { useState, useEffect } from 'react';
import Logo from '../components/Logo'
import { Fragment } from 'react'
import Footer from "./Footer"
import CartIcon from './Category/CartIcon';
import Nav from './Nav'
import { Disclosure, Menu, Transition } from '@headlessui/react'

import { Inertia } from '@inertiajs/inertia';
import './Userpage.css'
import { FaSearchengin } from 'react-icons/fa';

const SearchResults = ({products,query,auth}) => {
    const [categories, setCategories] = useState([]);
    const [isExist,setIsExist] = useState(false);

    useEffect(() => {
      if (products.length > 0) {
      setIsExist(true)
    }
    else {
      setIsExist(false)
    }
    },[products]) 
    
     
  
    
      const handleLogout = (e) => {
          e.preventDefault();
          Inertia.post('/logout');
      }
      
      const [searchl,setSlearch] = useState([])
      const [searchval,setSearchval] = useState("")
  
        const handlevalue = (e) => {
          e.preventDefault;
          setSearchval(e)
  
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
      
      
  
      const handleSearch = (event) => {
          event.preventDefault();
          Inertia.visit(`/search/${searchval}`);
      }
  
  
      const [selectedCategory, setSelectedCategory] = useState(null);
      const [sortOrder, setSortOrder] = useState('');
    
      const handleCategoryClick = (categoryId) => {
        setSelectedCategory(categoryId);
        Inertia.get(`/category/${categoryId}`);
      };
      
  
    
  


    return (
        <>
        <base href="/public"></base>
        <Head title="User">
                <link rel="stylesheet" href="/node_modules/@fortawesome/fontawesome-free/css/all.min.css"/>
            </Head>

    <Nav auth={auth}/>

                

<div className="categories" style={{ marginBottom:"20px" }}>
<Categorynav categories={categories} handleCategoryClick={handleCategoryClick} />
</div>
        <div className="bg-white">
      <div className="mx-auto max-w-2xl  sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-semibold mb-4">Search Results for " <span className="text-indigo-600 font-extrabold">{query}</span> "</h2>
        {
          isExist ? (

          
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id}  href={`/products/${product.id}`} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={"products/"+product.image}
                  alt="img"
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                  id="compact"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700 text-center" id="compact2">{product.title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900 text-center" id="compact2"><span className="colored">{product.price}</span> DH</p>
            </a>
            ))}
            </div>
              ) : (
              <div  className="bg-yellow-400 mt-10 flex justify-center  text-center text-xl font-bold rounded-lg p-5">
              <p>Sorry we couldn't find what you need.</p>
                </div>
            )}

              

      
      </div>
    </div>
    <Footer />
      </>
    );
   
};

export default SearchResults;
