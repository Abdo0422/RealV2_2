import React, { useContext, useState, useEffect } from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { CartContext } from "./CartContext";
import './CartIcon.css';

const CartIcon = () => {
  const { cartItemCount, updateCartItemCount } = useContext(CartContext);
  const [isCartClicked, setCartClicked] = useState(false);
  const [shouldShowBadge, setShouldShowBadge] = useState(true); // Set initial value to true

  useEffect(() => {
    const pathname = window.location.pathname;
    if (pathname === '/cart') {
      setShouldShowBadge(false);
      updateCartItemCount(0); // Reset cart item count to zero
    } else {
      const storedCartItemCount = localStorage.getItem('cartItemCount');
      if (storedCartItemCount) {
        setShouldShowBadge(true);
      }
    }
  }, [cartItemCount]); // Include cartItemCount as a dependency

  const handleCartClick = () => {
    setCartClicked(true);
    setShouldShowBadge(false);
  };

  const handleAddToCartClick = () => {
    setShouldShowBadge(true);
    updateCartItemCount(cartItemCount + 1);
  };

  return (
    
    <a
    id="cart"
    href="/cart"
    onClick={handleCartClick}
    className='relative right-10'
  
  >
    <IoCartOutline className="h-6 w-6" id='carticon' />
    {shouldShowBadge && (
      <span className="count">
        {cartItemCount}
      </span>
    )}
  </a>
  
  );
};

export default CartIcon;
