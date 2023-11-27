import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="DescriptionBox">
      <div className="descritionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An eCommerce website is an online destination where buyers shop for
          goods and sellers offer products and services. It’s the hub of
          information about a company and what they sell. On an eCommerce
          website, you’ll find product listings, eCommerce blog content, company
          history, and contact information.
        </p>
        <p>
          Ecommerce has been around since 1994, when Phil Brandenberger
          purchased the first product online – ‘Ten Summoner’s Tales” by Sting.
          Ecommerce Marketing grew out of the growth of the world wide web in
          the last 1990’s. Amazon started selling books online in 1995 and eBay
          started selling goods through online auctions in 1995.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
