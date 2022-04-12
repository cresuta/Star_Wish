import React, { useContext, useEffect } from "react";
import { Product } from "./Product";
import { ProductContext } from "../../providers/ProductProvider";
import { useNavigate } from "react-router-dom";
import { SearchForm } from "../SearchForm";

export const ProductList = () => {
  const { products, getAllProducts } = useContext(ProductContext);

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <SearchForm />
      <div className="search-results">
        {products.map((p) => (
          <Product key={p.id} product={p} />
        ))}
      </div>
    </>
  );
};
