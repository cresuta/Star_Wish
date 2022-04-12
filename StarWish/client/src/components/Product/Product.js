import React from "react";

export const Product = ({ product }) => {
  return (
    <section className="product-wrapper">
      <div className="product-img">
          
      </div>
      <div className="product-info">
          <a target="_blank" href={product.itemWebUrl}><h3 className="product-title">{product.title}</h3></a>
          <div className="product-subtitle">Condition, Brand, Product</div>
          <div className="product-details">
              <p className="product-price">Price</p>
              <p className="product-offer">Buy It Now</p>

          </div>
          <span id="star-icon-add-to-cart"><i class="bi bi-star"></i></span>
      </div>
    </section>
  );
};
