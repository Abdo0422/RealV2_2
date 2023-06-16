import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import axios from 'axios';
import './Categorynav.css'

import './Categorynav.css';

export default function Categorynav({ handleCategoryClick }) {
  const [categories, setCategories] = useState([]);
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  useEffect(() => {
    axios
      .get('/api/categories')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
    <div className="flex flex-col ">
      
        <>
          {/* Desktop navigation */}
          <nav className="hidden sm:block" style={{ position:'relative',zIndex:"2" }}>
            <ul className="bg flex justify-center flex-wrap gap-4 sm:gap-8">
              {categories.map((category) => (
                <li
                  key={category.id}
                  className="p-2 sm:p-4 rounded-lg hover:bg-gray-100"
                  
                >
                  <a href={`/category/${category.id}`} className="flex flex-col justify-center items-center">
                    <img src={`/${category.category_image}`} alt={category.name} className="w-4 h-4 mr-2 text-gray-500" id="img1" />
                    <p className="text-sm text-gray-400 text-center">{category.name}</p>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile navigation */}
          <div className="sm:hidden">
            <div className="flex items-center justify-between" >
              <button className="text-gray-500 hover:text-gray-600 focus:outline-none hover:bg-gray-600" onClick={toggleNav}>
                <FaBars className="w-6 h-6"style={{ position:"absolute",top:"20px",left:"20px" }} />
              </button>
            </div>
            <div className={`fixed inset-0 z-50 transition-all ease-in-out duration-500 ${showNav ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="fixed inset-y-0 left-0 max-w-full w-64 bg-white shadow-lg p-4 transform ease-in-out duration-500">
                <button className="text-gray-500 hover:text-gray-600 focus:outline-none" style={{ position:"absolute",top:"20px",left:"115px" }} onClick={toggleNav}>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
            {showNav && (
              <ul className="mt-2" style={{position:"absolute",right:"40px",marginTop:'50px'}}>
                {categories.map((category) => (
                  <li key={category.id} className="py-2 px-4">
                    <a style={{padding:'10px 70px'}} className='text-center hover:bg-purple-600 hover:text-white' href={`/category/${category.id}`}>{category.name}</a>
                  </li>
                ))}
              </ul>
            )}
          </div></div>
</div>

        </>
      
    </div>
    <style>
      {`
      
@media (max-width: 1000px) {
  .hidden{
    width: 800px;
    padding-left: 70px;
  }
  }

  
      `}
    </style>
  </>
  
  
  );
}
