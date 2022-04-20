import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../providers/ProductProvider";
import { CartProduct } from "./CartProduct";

export const CartList = () => {
  const { myWishListProducts, getAllProductsFromWishListId } =
    useContext(ProductContext);
  const currentUser = JSON.parse(sessionStorage.getItem("userProfile"));

  useEffect(() => {
    getAllProductsFromWishListId(currentUser.id);
  }, []);

  return (
    <>
      <div className="cart-search-results">
        {myWishListProducts?.map((p) => (
          <CartProduct key={p.id} product={p} />
        ))}
      </div>
    </>
  );
};
