import React from "react";

export const Product = ({ product }) => {
  return (
    <section className="product-wrapper">
      <div className="product-img-container">
        <img
          src={product?.image.imageUrl}
          alt="Hello"
          className="product-img"
        />
      </div>
      <div className="product-info">
        <a
          target="_blank"
          rel="noreferrer"
          className="product-title"
          href={product?.itemWebUrl}
        >
          <h3 className="product-title2">{product?.title}</h3>
        </a>
        <div className="product-subtitle">Brand {product?.condition}</div>
        <div className="product-details">
          <p className="product-price">${product?.price.value}</p>
          <p className="product-offer">Buy It Now</p>
          <p className="product-shipping">Free Shipping</p>
        </div>
      </div>
      <span id="star-icon-add-to-cart">
        <i class="bi bi-star"></i>
      </span>
    </section>
  );
};
