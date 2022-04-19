import React from "react";

export const MyWishListCard = ({ product }) => {
  return (
    <>
      <section className="product-wrapper">
        <div className="product-img-container">
          <img
            src={product?.image}
            alt="Product"
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
            <p className="product-price">${product?.price}</p>
            <p className="product-offer">Buy It Now</p>
            <p className="product-shipping">Free Shipping</p>
          </div>
        </div>
      </section>
    </>
  );
};
