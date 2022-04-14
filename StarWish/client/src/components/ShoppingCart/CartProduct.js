import React from "react";
import { Card } from "react-bootstrap";

export const CartProduct = ({ product }) => {
  return (
    <>
      {/* <Card className="" style={{ width: "18rem" }}>
            <Card.Img className="" variant="top" src="" />
            <Card.Body>
              <Card.Title>{product?.title}</Card.Title>
              <Card.Text>
                Designed and developed both front-end interfaces and back-end
                functionality within the homepage and events section of the app.
              </Card.Text>
            </Card.Body>
          </Card> */}
      <section className="cart-product-wrapper">
        <div className="cart-product-img-container">
          <img
            src={product.image?.imageUrl}
            alt="Hello"
            className="cart-product-img"
          />
        </div>
        <div className="cart-product-info">
          <a
            target="_blank"
            rel="noreferrer"
            className="cart-product-title"
            href={product?.itemWebUrl}
          >
            <h3 className="cart-product-title2">{product?.title}</h3>
          </a>
          <div className="cart-product-subtitle">Brand {product?.condition}</div>
          <div className="cart-product-details">
            <p className="cart-product-price">${product?.price.value}</p>
            <p className="cart-product-offer">Buy It Now</p>
            <p className="cart-product-shipping">Free Shipping</p>
          </div>
          <div className="cart-product-qty">
            <label>Quantity:</label>
          </div>
        </div>
      </section>
    </>
  );
};
