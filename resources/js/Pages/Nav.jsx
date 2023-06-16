import { usePage, Head } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';
import { Fragment } from 'react'

import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Logo from '../components/Logo'
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Inertia } from '@inertiajs/inertia';

import './page.css'
import CartIcon from './Category/CartIcon';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const Nav = ({auth}) => {
  const isAdmin = auth.user?.is_admin; 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalSubmit = (e) => {
    e.preventDefault();
    handleSearch(e);
    setIsModalOpen(false);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handlePhoneIconClick = () => {
    setIsModalOpen(true);
  };

  
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
    
    const mobile = "button block lg:hidden"
    const desktop = "button hidden lg:block"

    const handleSearch = (event) => {
        event.preventDefault();
        Inertia.visit(`/search/${searchval}`);
    }




    return (
        <Disclosure as="nav" id='Disclosure'>
{({ open }) => (
<>
<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
<div className="relative flex h-16 items-center justify-between">
  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
    {/* Mobile menu button*/}
  </div>
  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
    <div className="flex flex-shrink-0 items-center">
        <a id="logo" href={route('userpage')}>
        <Logo classi={mobile} />

        </a>
        <a id="logo" href={route('userpage')}>
            <Logo classi={desktop} />
        </a>
      
    </div>
    <div>
      <div className="hidden sm:ml-6 sm:block">
        <div className="flex space-x-4" style={{ marginTop: "30px" }}>
          <form onSubmit={handleSearch} className="form px-3 py-2 text-sm font-medium">
            <button>
              <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
                <path
                  d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                  stroke="currentColor"
                  strokeWidth="1.333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <input className="input" placeholder="Search by Product" required="" id="search" onChange={(e) => handlevalue(e.target.value)} type="text" />
            <ul className="dropdown-content" style={{zIndex:9999}}>
            { 
                            (searchl.map((product) => (
                              <><li><a href={route('product.show', product[0] )} key={product[0]}><img width="70px" className="rounded-md" src={'/products/'+product[2]}alt="img"/>{product[1]}</a></li></>
                            )))
                            
                          }
                          
                        </ul>

                    </form>
        </div>
      </div>
 {/* Phone Format */}
 <div className="sm:hidden">
        <button onClick={handlePhoneIconClick} style={{ position:"absolute",top:'30%',right:'25%'}}>
          <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search-phone">
            <path
              d="M14.667 18.667A7.333 7.333 0 107.334 4.334a7.333 7.333 0 007.333 14.333zm3.71-2.95l3.9 3.9"
              stroke="currentColor"
              strokeWidth="1.333"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        {isModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"id="modal74">
    <div className="bg-white p-4 rounded-md absolute w-full sm:w-auto sm:max-w-sm"style={{position:'absolute',width:'84%',marginRight:"72px" }} id='37modal'>
      <div style={{ display: 'flex', justifyContent: "flex-end", marginTop: "-10px", marginBottom: '20px' }}>
        <button className="p-2" onClick={handleModalClose}>
          <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="close">
            <path d="M14 2L2 14M2 2l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </button>
      </div>
      <form onSubmit={handleModalSubmit} id='form8' className="form px-3 py-2 text-sm font-medium">
        <button type="submit">
          <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
            <path
              d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
              stroke="currentColor"
              strokeWidth="1.333"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        <input className="input w-full sm:w-auto" placeholder="Search by Product" required="" id="search-modal" onChange={(e) => handlevalue(e.target.value)} type="text" />
        <ul className="dropdown-content" style={{zIndex:9999}}>
          {searchl.map((product) => (
            <li key={product[0]}>
              <a href={route('product.show', product[0])} id="searchtext85">
                <img className="rounded-md" src={'/products/' + product[2]} alt="img" />
                {product[1]}
              </a>
            </li>
          ))}
        </ul>
      </form>
    </div>
  </div>
)}
</div>
    </div>
  </div>

  {auth.user ? (
    <>
      <Menu as="div" className="relative p-20" id="Menu">
  <div id="user" >
    <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
    <svg xmlns="http://www.w3.org/2000/svg" style={{color:"#5B06E5"}} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>

      {auth.user.name}
      <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
    </Menu.Button>
    
      </div>

  <Transition
    as={Fragment}
    enter="transition ease-out duration-100"
    enterFrom="transform opacity-0 scale-95"
    enterTo="transform opacity-100 scale-100"
    leave="transition ease-in duration-75"
    leaveFrom="transform opacity-100 scale-100"
    leaveTo="transform opacity-0 scale-95"
  >
    <Menu.Items className="menu-items absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" id="logsect">
      <div className="py-1">
        <Menu.Item>
          {({ active }) => (
            <form onSubmit={handleLogout}>
              {isAdmin && (
                        <a
                          href={route('dashboard')} // Use your own admin dashboard route here
                          className={classNames(active ? 'hover:bg-gray-200' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          Dashboard
                        </a>
                      )}
                       <a
                href="#"
                onClick={handleLogout}
                className={classNames(active ? 'hover:bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
              >
                Log Out
              </a>
              <input type="hidden" name="_token" value={window.csrf_token} />
            </form>
          )}
        
        </Menu.Item>
      </div>
    </Menu.Items>  
  </Transition>
</Menu>
    </>
    
  ) : (
    <div className="flex mr-20 flex-col sm:flex-row sm:gap-2" >
    <a
    id='reglog'
      href={route('login')}
      className="main-color inline-flex  justify-center gap-x-1 rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mt-7 sm:mb-0 sm:mt-0"
    >
      Log in
    </a>
  
    <a
       id='reglog1'
      href={route('register')}
      className="text-white bg-main-color inline-flex justify-center gap-x-1 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mt-2 sm:mt-0"
    >
      Register
    </a>
    

  </div>
)}<CartIcon/>
</div>  
</div>

<style>
  {
  `
  .bg-main-color {
    background-color:#6200ff ;
  }
  .bg-main-color:hover {
    background-color:#5B06E5 ;
  }

  `
  }
</style>
</>

)}

</Disclosure>
    )
}

export default Nav