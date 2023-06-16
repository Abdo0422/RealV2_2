import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const storedCartItemCount = localStorage.getItem('cartItemCount');
    if (storedCartItemCount) {
      setCartItemCount(parseInt(storedCartItemCount));
    }
  }, []);

  const updateCartItemCount = (count) => {
    setCartItemCount(count);
  };

  useEffect(() => {
    localStorage.setItem('cartItemCount', cartItemCount.toString());
  }, [cartItemCount]);

  return (
    <CartContext.Provider value={{ cartItemCount, updateCartItemCount }}>
      {children}
    </CartContext.Provider>
  );
};
