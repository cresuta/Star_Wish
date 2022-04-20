import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../providers/ProductProvider";
import { MyWishListContext } from "../../providers/MyWishListProvider";
import { MyWishListCard } from "./MyWishListCard";
import { Button } from "react-bootstrap";

export const MyWishLists = () => {
  const { myWishListProducts, getAllProductsFromWishListId } =
    useContext(ProductContext);
  const { myCurrentCart, getAllWishListsByUserId } =
    useContext(MyWishListContext);
  const currentUser = JSON.parse(sessionStorage.getItem("userProfile"));

  useEffect(() => {
    getAllProductsFromWishListId(currentUser.id);
  }, []);

  const subTotal = (shoppingCart) => {
    let sum = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
      sum += shoppingCart[i].price * shoppingCart[i].quantity;
    }
    return sum.toFixed(2);
  };

  return (
    <>
      <div className="wishlist-container">
        <h2 id="Wishlist-heading">Your Wish List</h2>

        <div className="wishlist-subheading">
          <section className="wishlist-subheading-1">
            <span className="subheading-1">Wish Placed</span>
            <span>April 26th, 2022</span>
          </section>
          <section className="wishlist-subheading-2">
            <span className="subheading-1">Placed By</span>
            <span>{currentUser.firstName}</span>
          </section>
          <section className="wishlist-subheading-3">
            <span className="subheading-1">Total</span>
            <span>${subTotal(myWishListProducts)}</span>
          </section>
          <section className="wishlist-subheading-4">
            <span className="subheading-1">Wish List #114-93453-12321</span>
            <a href="" className="share-wishlist-btn">Share Wish List</a>
          </section>
        </div>
      </div>
      <div className="wishlist-results-container">
        {myWishListProducts.map((p) => (
          <MyWishListCard key={p.id} product={p} />
        ))}
      </div>
    </>
  );
};
