import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { InertiaLink } from "@inertiajs/inertia-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './Slider.css';

const Slider = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    async function fetchRandomProduct(exclude = "") {
      const response = await axios.get(`/api/products/random?exclude=${exclude}`);
      return response.data;
    }

    async function fetchProducts() {
      const newProducts = [];
    
      for (let i = 0; i < 12; i++) {
        const product = await fetchRandomProduct(); // Remove the exclude parameter
        newProducts.push(product);
      }
    
      setProducts(newProducts);
      setLoading(false);
    }
    

    fetchProducts();
  }, []);

  const getShade = (index) => {
    const colors = [
      "#F5F5F5",
      "#E0E0E0",
      "#CCCCCC",
      "#B3B3B3",
      "#999999",
      "#808080",
      "#666666",
      "#4D4D4D",
      "#333333",
      "#1A1A1A",
      "#000000",
    ];
  
    const colorIndex = index % colors.length;
    const color = colors[colorIndex];
  
    // Check if it's the last two shades
    if (colorIndex >= colors.length - 2) {
      return {
        background: color,
        titleColor: "#FFFFFF", // White color for title
        descriptionColor: "#FFFFFF", // White color for description
      };
    }
  
    return {
      background: color,
      titleColor: "#000000", // Default color for title
      descriptionColor: "#000000", // Default color for description
    };
  };
  
  const handleMouseEnter = (productId) => {
    setHoveredProduct(productId);
    if (swiperRef.current) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
    if (swiperRef.current) {
      swiperRef.current.autoplay.start();
    }
  };

  return (
    <div className="mb-24"id="slider2">
      {isLoading ? (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px'}}>
          <div className="loadere ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
        </div>
      ) : (
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Autoplay, A11y]}
          slidesPerView={4}
          spaceBetween={16} // Added space between slides
          navigation
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
               <div className="grid grid-cols-4 gap-4"> {/* Added a grid container */}
            {products.map((product, index) => (
              <SwiperSlide key={product.id} className="relative items-center">
                <InertiaLink href={`/products/${product.id}`} className="group">
                <div
  className="slider-product"
  style={{
    background: getShade(index).background,
    padding: '20px',
    height: '400px',
    margin: '-10px',
    
  }}
  onMouseEnter={() => handleMouseEnter(product.id)}
  onMouseLeave={handleMouseLeave}
>
<div className="product-image">
  <img
    src={`/products/${product.image}`}
    alt="productImage"
    className={`h-64 w-64 object-cover object-center group-hover:opacity-75 ${
      hoveredProduct === product.id ? 'blur' : ''
    }`}
    style={{ zIndex: hoveredProduct === product.id ? '1' : '0' }}
    id="proimg0"
  />
</div>

{/* Product Details */}
<div
  className="product-details"
  style={{
     opacity: hoveredProduct === product.id ? '1' : '0',
      transition: 'opacity 0.3s ease',
      zIndex: '2',
      position: 'absolute',
      top: '5%',
      left: '1%',
  }}
>
  <h3 className="text-black font-bold font-quicksand text-center" id="protext" style={{ color: getShade(index).titleColor }}>
    {product.title}
  </h3>
  <p className="text-purple-700 font-bold font-quicksand text-center" id="protext">
    ${product.price}
  </p>
  <p className="text-black font-quicksand text-center" id="prodesc" style={{ color: getShade(index).descriptionColor,fontSize:'medium' }}>
    {product.description}
  </p>
</div>

                  </div>
                </InertiaLink>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      )}
    </div>
  );
};

export default Slider;
