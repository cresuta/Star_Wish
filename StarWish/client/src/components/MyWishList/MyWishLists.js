import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../providers/ProductProvider";
import { MyWishListContext } from "../../providers/MyWishListProvider";
import { MyWishListCard } from "./MyWishListCard";

export const MyWishLists = () => {
  const { myWishListProducts, getAllProductsFromWishListId } =
    useContext(ProductContext);
  const { myCurrentCart, getAllWishListsByUserId } = useContext(MyWishListContext);
  const currentUser = JSON.parse(sessionStorage.getItem("userProfile"));

  console.log("current user", currentUser.id)
  useEffect(() => {
    getAllProductsFromWishListId(currentUser.id)
  }, []);

  console.log(myCurrentCart.id)
  return (
    <>
      <div className="cart-search-results">
        {myWishListProducts.map((p) => (
          <MyWishListCard key={p.id} product={p} />
        ))}
      </div>
    </>
  );
};
