import React from "react";
import { Button } from "react-bootstrap";

export const MyWishListCard = ({ product }) => {
  return (
    <>
      <section className="wishlist-product-wrapper">
        <div className="wishlist-product-img-container">
          <img
            src={
              product?.imageUrl === ""
                ? "https://images.unsplash.com/photo-1628911774602-74a0cfee9b0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                : product?.imageUrl
            }
            alt="Product"
            className="wishlist-product-img"
          />
        </div>
        <div className="wishlist-product-info">
          <h3 className="wishlist-product-title2">{product?.title}</h3>

          <div className="wishlist-product-subtitle">
            Brand {product?.condition}
            <span>
              <i class="bi bi-dot"></i>Buy It Now<i class="bi bi-dot"></i>Free
              Shipping
            </span>
          </div>
          <div className="wishlist-product-details">
            <p className="wishlist-product-price">${product?.price}</p>
          </div>
        </div>
      </section>
      {/* <section className="">
        <Button variant="outline-secondary">Secondary</Button>{" "}
      </section> */}
    </>
  );
};
