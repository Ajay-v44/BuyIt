import React from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
const ProductDisplay = ({ product }) => {
  return (
    <div className="ProductDisplay">
      <div className="productleft">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>

        <div className="productdisplay-img">
          <img src={product.image} alt="" className="productdisplay-main-img" />
        </div>
      </div>
      <div className="productright">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-price">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore quasi impedit quis tempore voluptatibus laborum quae sapiente neque? Quod nobis esse eum voluptatibus minima eius culpa minus vel hic perspiciatis?
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XLL</div>
          </div>
        </div>
        <button>ADD TO CART</button>
        <p className="productdisplay-right-category"> <span>Category:</span> Women,T-Shirt,Crop Top</p>
        <p className="productdisplay-right-category"> <span>Tags:</span> Modern,Latest</p>

      </div>
    </div>
  );
};

export default ProductDisplay;
