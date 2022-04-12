import { SearchForm } from "./SearchForm";
import { CarouselAds } from "./CarouselAds";
import { ProductContext } from "../providers/ProductProvider";
import { ProductList } from "./Product/ProductList";
import { useContext } from "react";

export const Dashboard = () => {

  const {searchQuery} = useContext(ProductContext);

  if(searchQuery.length === 0) {
    return (
      <>
        <SearchForm />
        <CarouselAds />
      </>
    );
  } else {
    return (
      <>
        <SearchForm />
        <ProductList />
      </>
    );
  }
  
};
