import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";

export const SearchForm = () => {

  const searchSubmit = (e) => {
    e.preventDefault();
    const userInput = document.querySelector("#productSearch").value;
    console.log(userInput);
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
        />

        <Button
          variant="primary"
          className="form-field search-btn"
          id="button-addon2"
          onClick={searchSubmit}
        >
          Search
        </Button>
      </InputGroup>
    </>
  );
};
