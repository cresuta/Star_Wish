import React from "react";

export const MyWishListCard = ({ product }) => {
  return (
    <>
      
      <div className="wishlist-product-wrapper">
        <section></section>
        <section></section>
      </div>
      {/* <section className="product-wrapper">
        <div className="product-img-container">
          <img
            src={
              product?.imageUrl === ""
                ? "https://images.unsplash.com/photo-1628911774602-74a0cfee9b0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                : product?.imageUrl
            }
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
      </section> */}
    </>
  );
};
