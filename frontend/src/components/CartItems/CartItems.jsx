import React from "react";
import "./CartItem.css";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, cartitem, removeFromCart } = useContext(ShopContext);

  return (
    <div className="CartItems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p> <p>Price</p> <p>Quantity</p> <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartitem[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format">
                <img src={e.image} alt="" className="carticon-product" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">{cartitem[e.id]}</button>
                <p>${e.new_price * cartitem[e.id]}</p>
                <img
                  src={remove_icon}
                  alt=""
                  className="carticon-product-icon"
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                />
              </div>
            </div>
          );
        }
        return null; // Returning null for items where quantity is not greater than 0
      })}
      {all_product.length > 0 && cartitem.filter((count) => count > 0).length === 0 && (
        <p>No items in cart</p>
      )}
    </div>
  );
};

export default CartItems;
