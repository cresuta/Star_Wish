import React, { useContext } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { ProductContext } from "../providers/ProductProvider";

export const SearchForm = () => {
  const { getAllProducts, searchQuery, setSearchQuery } =
    useContext(ProductContext);

  const handleControlledInputChange = (e) => {
    const userInput = e.target.value;
    console.log(userInput);
    setSearchQuery(userInput);
  };

  const handleClickFetchApi = (e) => {
    e.preventDefault();
    console.log(`Clicked! Searched input: ${searchQuery}`);
    getAllProducts(searchQuery);
  };

  return (
    <>
      <InputGroup className="searchform">
        <img
          src={require("../imgs/app-logo-navbar.png")}
          alt="Star Wish Logo"
          className="app-logo__searchform"
        />
        <FormControl
          placeholder="Search for anything"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          className="form-field form-field-input"
          id="productSearch"
          onChange={handleControlledInputChange}
        />

        <Button
          variant="primary"
          className="form-field search-btn"
          id="button-addon2"
          onClick={handleClickFetchApi}
        >
          Search
        </Button>
      </InputGroup>
    </>
  );
};
