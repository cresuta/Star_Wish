import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../providers/ProductProvider";
import { CartProduct } from "./CartProduct";
import { MyWishListContext } from "../../providers/MyWishListProvider";

export const CartList = () => {
  const { myWishListProducts, getAllProductsFromWishListId } = useContext(ProductContext);
  const { myCurrentCart } = useContext(MyWishListContext);

  useEffect(() => {
      getAllProductsFromWishListId(myCurrentCart.id)
  })

    console.log(myWishListProducts)
  return (
    <>
      <div className="search-results">
        {myWishListProducts?.map((p) => (
          <CartProduct key={p.id} product={p} />
        ))}
      </div>
    </>
  );
};
