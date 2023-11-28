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
        <p>Title</p> 
        <p>Price</p> 
        <p>Quantity</p> 
        <p>Total</p>
        <p>Remove</p>
     
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartitem[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitems-format-main">
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
              <hr />
            </div>
          );
        }
        return null; 
        
      })}
      <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>cart Totals</h1>

            </div>
            <div className="cartitems-total-item">
                <p>
                   Subtotal 
                </p>
                <p>${0}</p>
            </div>
            <hr />
            <div className="cartitems-total-items">
                <p>Shipping Fee</p>
                <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-tottal-item">
                <h3>
                    Total
                </h3>
                <h3>${0}</h3>
            </div>
            <button>Proceed To Checkout</button>
        </div>
        <div className="cartitems-promocode">
            <p>If you have  a promo code ,Enter it here</p>
            <input type="text" placeholder="promo code" />
            <button>Apply</button>

        </div>
      {all_product.length > 0 && cartitem.filter((count) => count > 0).length === 0 && (
        <p>No items in cart</p>
      )}
    </div>
  );
};

export default CartItems;
