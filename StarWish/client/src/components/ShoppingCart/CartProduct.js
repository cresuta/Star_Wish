import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { ProductContext } from "../../providers/ProductProvider";
import { MyWishListContext } from "../../providers/MyWishListProvider";

export const CartProduct = ({ product }) => {
  const { deleteProductFromCart, setCartCount, cartCount, updateProductQuatityInCart } =
    useContext(ProductContext);
    const { myCurrentCart } = useContext(MyWishListContext);

  const handleRemoveProductFromCart = () => {
    deleteProductFromCart(product.id);
  };

  const updateCartCountFromShoppingCart = () => {
    if (cartCount > 0) {
      let newClick = cartCount - 1;
      setCartCount(newClick);
    }
  };

  const [shoppingCartProduct, setShoppingCartProduct] = useState({
    quantity: 0,
  });

  const handleShoppingCartProductQtyChange = (e) => {
    const newCartProduct = { ...shoppingCartProduct };
    newCartProduct[e.target.name] = +e.target.value;
    setShoppingCartProduct(newCartProduct);
    updateProductQuatityInCart(product, +e.target.value)
  };



  return (
    <>
      <section className="cart-product-wrapper">
        <div
          className="cart-product-delete"
          onClick={() => {
            updateCartCountFromShoppingCart();
            handleRemoveProductFromCart();
          }}
        >
          <i class="bi bi-x-square"></i>
        </div>
        <div className="cart-product-img-container">
          <img
            src={
              product?.imageUrl
                ? product?.imageUrl
                : "https://images.unsplash.com/photo-1628911774602-74a0cfee9b0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            }
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
          <div className="cart-product-subtitle">
            Brand {product?.condition}
            <span>
              <i class="bi bi-dot"></i>Buy It Now<i class="bi bi-dot"></i>Free
              Shipping
            </span>
          </div>
          <div className="cart-product-details">
            <p className="cart-product-price">${product?.price}</p>
            <div className="cart-product-qty">
              <label>Qty</label>
              <Form.Select
                size="sm"
                name="quantity"
                className="qty-select"
                onChange={handleShoppingCartProductQtyChange}
              >
                <option value={product?.quantity}>{product?.quantity}</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Form.Select>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
