import React, { createContext, useState } from "react";
import all_product from "../components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = [];
  for (let index = 0; index < all_product.length; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartitem, setcartitem] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setcartitem((prev) => {
      const updatedCart = [...prev]; 
      updatedCart[itemId] += 1;
      return updatedCart;
    });
  };

  const removeFromCart = (itemId) => {
    setcartitem((prev) => {
      const updatedCart = [...prev]; 
      updatedCart[itemId] -= 1;
      return updatedCart;
    });
  };

  const contextValue = { all_product, cartitem, addToCart, removeFromCart };
  
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
