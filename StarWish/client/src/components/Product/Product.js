import React, { useState, useContext, useEffect } from "react";
import { ProductContext } from "../../providers/ProductProvider";
import { Form } from "react-bootstrap";
import { MyWishListContext } from "../../providers/MyWishListProvider";

export const Product = ({ product }) => {
  let { updateCartCount } = useContext(ProductContext);
  const { addProductToCart } = useContext(ProductContext);
  const { myCurrentCart } = useContext(MyWishListContext);

  const [cartProduct, setCartProduct] = useState({
    title: product.title,
    imageUrl:
      product.image?.imageUrl === undefined
        ? ""
        : product.image?.imageUrl,
    price: +product?.price.value,
    quantity: 1,
    condition: product?.condition,
    itemWebUrl: product?.itemWebUrl,
    myWishListId: myCurrentCart.id
  });

  const handleProductQtyChangeBeforeAddToCart = (e) => {
    const newCartProduct = { ...cartProduct };
    newCartProduct[e.target.name] = +e.target.value;
    setCartProduct(newCartProduct);
  };

  const handleStarAddToCart = () => {
    addProductToCart(cartProduct);
  };

  return (
    <Form className="post__form">
      <section className="product-wrapper">
        <div className="product-img-container">
          <img
            src={product.image?.imageUrl}
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
            <p className="product-price">${product?.price.value}</p>
            <p className="product-offer">Buy It Now</p>
            <p className="product-shipping">Free Shipping</p>
          </div>
          <div className="product-qty">
            <label>Quantity:</label>
            <Form.Select
              size="sm"
              name="quantity"
              className="qty-select"
              onChange={handleProductQtyChangeBeforeAddToCart}
            >
              {/* <option value="0">0</option> */}
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Form.Select>
          </div>
        </div>

        <span
          id="star-icon-add-to-cart"
          onClick={() => {
            updateCartCount();
            handleStarAddToCart();
          }}
        >
          <i class="bi bi-star"></i>
        </span>
      </section>
    </Form>
  );
};
