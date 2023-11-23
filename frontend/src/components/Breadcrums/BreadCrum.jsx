import React from "react";
import "./BreadCrum.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";
const BreadCrum = ({ product }) => {
  console.log("product in BreadCrum:", product);

  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <div className="BreadCrum">
      HOME
      <img src={arrow_icon} alt="" />
      SHOP
      <img src={arrow_icon} alt="" />
      {product.category}
      {product.name}
    </div>
  );
};

export default BreadCrum;
