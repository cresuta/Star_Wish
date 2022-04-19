import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../providers/ProductProvider";
import { MyWishListContext } from "../../providers/MyWishListProvider";
import { MyWishListCard } from "./MyWishListCard";

export const MyWishLists = () => {
  const { myWishListProducts, getAllProductsFromWishListId } =
    useContext(ProductContext);
  const { myCurrentCart, getAllWishListsByUserId } =
    useContext(MyWishListContext);
  const currentUser = JSON.parse(sessionStorage.getItem("userProfile"));

  useEffect(() => {
    getAllProductsFromWishListId(currentUser.id);
  }, []);

  return (
    <>
      
      <div className="wishlist-results">
      <h2 id="Wishlist-heading">Your Wish List</h2>
      <div className="wishlist-subheading">
        <section className="wishlist-subheading-1">
          <span>Wish Placed</span>
          <span>April 26th, 2022</span>
        </section>
        <section className="wishlist-subheading-1">
          <span>Placed By</span>
          <span>Name</span>
        </section>
        <section className="wishlist-subheading-1">
          <span>Total</span>
          <span>$205.00</span>
        </section>
        <section className="wishlist-subheading-1">
          <span>Wish List #114-9345345-1232123</span>
        </section>
      </div>
        {myWishListProducts.map((p) => (
          <MyWishListCard key={p.id} product={p} />
        ))}
      </div>
    </>
  );
};
