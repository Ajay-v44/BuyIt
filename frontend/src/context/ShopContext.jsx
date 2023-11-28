import React, { createContext, useState } from "react";
import all_product from "../components/Assets/all_product";
import CartItems from "../components/CartItems/CartItems";

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
  const getTotalcartAmount = () => {
    let totalAmount = 0;

    for (const itemId in cartitem) {
      if (cartitem[itemId] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(itemId)
        );
        totalAmount += itemInfo.new_price * cartitem[itemId];
      }
    }

    return totalAmount;
  };
  const getTotalCartItems = () => {
    let totalitems = 0;
    
    for (const item in cartitem) {
      if (cartitem[item] > 0) {
        totalitems += cartitem[item];
      }

    
    }
    return totalitems;
  };
  const contextValue = {
    all_product,
    cartitem,
    addToCart,
    removeFromCart,
    getTotalcartAmount,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
