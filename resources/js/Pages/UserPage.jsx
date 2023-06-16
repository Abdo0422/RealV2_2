import { usePage, Head } from '@inertiajs/react';
import Categorynav from './Categorynav/Categorynav';
import RandomProduct from './Category/RandomProduct';
import React, { useState, useEffect } from 'react';
import Loading from './Loading'

import { Inertia } from '@inertiajs/inertia';
import Footer from './Footer'
import './Userpage.css'
import Slider from './Slider'
import Nav from './Nav'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Welcome({ auth }) {
  const [showCookiesPopup, setShowCookiesPopup] = useState(false);
  useEffect(() => {
    const isCookiesAccepted = localStorage.getItem('cookiesAccepted');
    setShowCookiesPopup(!isCookiesAccepted);
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowCookiesPopup(false);
  };
  const [visibleProducts, setVisibleProducts] = useState(4);
  const showMore = 8;

  const handleShowMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + showMore);
  };

  const [categories, setCategories] = useState([]);
  const { products } = usePage().props;
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  
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


    const [selectedCategory, setSelectedCategory] = useState(null);
    const [sortOrder, setSortOrder] = useState('');
  
    const handleCategoryClick = (categoryId) => {
      setSelectedCategory(categoryId);
      Inertia.get(`/category/${categoryId}`);
    };
    

  

    return (
        <>  {isLoading ? (
        <>
          <div className="loading-line" />
          <div className="flex items-center justify-center min-h-screen p-5 bg-gray-100 min-w-screen">
          <Loading />
          </div>
        </>
      ) : (
        <>
        {/* Add your cookies popup here */}
        {showCookiesPopup && (
          <div className={`cookies-modal ${showCookiesPopup ? 'show' : ''}`}>
            <div className="cookies-modal">
              <div className="cookies-modal-content">
                <h2>We use cookies</h2>
                <p>This website uses cookies to ensure you get the best experience on our website.</p>
                <div className="cookies-modal-actions">
                  <button className="btn-accept-cookies" onClick={handleAcceptCookies}>
                    Accept
                  </button>
                  <a href='https://en.wikipedia.org/wiki/HTTP_cookie' className="btn-learn-more" target="_blank" >Learn More</a>
                </div>
              </div>
            </div>
         </div> )}
            <Head title="User">
                <link rel="stylesheet" href="/node_modules/@fortawesome/fontawesome-free/css/all.min.css"/>
            </Head>
      

            
    

{/* -----------------This is the begining of nav section------------------------------------------- */ }



<Nav auth={auth}  />

{/* -----------------This is the end of nav section------------------------------------------- */ }

                
{/* -----------------This is the begining of categorynav section------------------------------------------- */ }

<div className="categories">
<Categorynav categories={categories} handleCategoryClick={handleCategoryClick} />
</div>
{/* -----------------This is the end of categorynav section------------------------------------------- */ }


{/* -----------------This is the begining of herosection------------------------------------------- */ }


  
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-indigo-600 to-indigo-900" style={{marginBottom:'120px'}} id='pro99'>
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="gr font text-4xl font-bold tracking-tight text-white-900 sm:text-6xl">
              Summer styles are finally here.
            </h1>
            <p className="gr mt-4 text-md text-white">
              This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
              if you live or die.
            </p>
          </div>
          <div>
            <div className="mt-10">
              
              <div
                aria-hidden="true"
                className=" pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                
                <img className="bgheroimgs" src="./bgheroimgs.svg" alt="bg" />

                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="card h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                      <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="card-inner"></div>
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                          alt=""
                          className="img-styled h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                          alt=""
                          className="img-styled h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="card h-64 w-44 overflow-hidden rounded-lg">
                      <div className="circle"></div>
                      <div className="circle"></div>
                        <div className="card-inner"></div>
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                          alt=""
                          className="img-styled h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="card h-64 w-44 overflow-hidden rounded-lg">
                      <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="card-inner"></div>
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                          alt=""
                          className="img-styled h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="card h-64 w-44 overflow-hidden rounded-lg">
                      <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="card-inner"></div>
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                          alt=""
                          className=" img-styled h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="img-styled h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                          alt=""
                          className="img-styled h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                          alt=""
                          className="img-styled h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
  href="#pro"
  id='pro6'
  className="inline-block text-indigo-900 rounded-md border border-transparent px-8 py-3 text-center font-medium"
  onClick={(e) => {
    e.preventDefault();
    const element = document.getElementById('pro');
    element.scrollIntoView({ behavior: 'smooth' });
  }}
>
  Browse Products
</a>




            </div>
          </div>
        </div>
      </div>
    </div>

{/* -----------------This is the end of herosection------------------------------------------- */ }
<Slider />


{/* -----------------This is the begining of productslist------------------------------------------- */ }
<div className="bg-products" id="pro">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">All Products</h2>
        {isLoading ? (
          <>
            <strong>Loading...</strong>
            <div
              className="ml-auto inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            ></div>
          </>
        ) : (
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.slice(0, visibleProducts).map((product, index) => (
            <a key={product.id} href={`/products/${product.id}`} className="group" style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-8" id="aspectimg">
                {isLoading ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="animate-pulse bg-gray-300 rounded-lg w-full h-full"></div>
                  </div>
                ) : (
                  <img
                    src={`products/${product.image}`}
                    alt="img"
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                    id="compact"
                  />
                )}
              </div>

              <h3 className="mt-4 text-sm text-gray-700 text-center " id="pretext5">{isLoading ? 'Loading...' : product.title}</h3>
              <p className="mt-1 text-sm font-medium text-gray-900 text-center" id="pretext6">
                {isLoading ? (
                  <div className="animate-pulse bg-gray-300 w-1/3 h-5"></div>
                ) : (
                  <>
                    <span className="colored">{product.price}</span> DH
                  </>
                )}
              </p>
            </a>
          ))}
        </div>
        )}
        {visibleProducts < products.length && (
          <div className="flex justify-end mt-8">
            <button type="button" class="text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-900"
             onClick={handleShowMore}
             id='showmore'
            >
              Show More</button>
          </div>
        )}
      </div>
    </div>

    {/* -----------------This is the begining of productslist------------------------------------------- */ }


            

    <div style={{   marginTop:"-30vh",width:"100%" }}>      
<Footer/></div>
  </>
     )}    
        </>
    );
    }