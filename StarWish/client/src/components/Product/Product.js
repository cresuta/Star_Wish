import React, { useState, useContext, useEffect } from "react";
import { ProductContext } from "../../providers/ProductProvider";
import { Form } from "react-bootstrap";

export const Product = ({ product }) => {
  let { updateCartCount } = useContext(ProductContext);

  console.log(product);
  return (
    <section className="product-wrapper">
      <div className="product-img-container">
        <img
          src={product.image?.imageUrl}
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
        <div className="product-qty">
          <label>Quantity:</label>
          <Form.Select size="sm" className="qty-select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Select>
        </div>
      </div>

      <span id="star-icon-add-to-cart" onClick={updateCartCount}>
        <i class="bi bi-star"></i>
      </span>
    </section>
  );
};
