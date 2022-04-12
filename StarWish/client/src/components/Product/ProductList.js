import React, { useContext } from "react";
import { Product } from "./Product";
import { ProductContext } from "../../providers/ProductProvider";

export const ProductList = () => {
  const { products } = useContext(ProductContext);

  return (
    <>
      <div className="search-results">
        {products.map((p) => (
          <Product key={p.id} product={p} />
        ))}
      </div>
    </>
  );
};
