import React, { useContext } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";

export const SearchForm = () => {

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
        />

        <Button
          variant="primary"
          className="form-field search-btn"
          id="button-addon2"
        >
          Search
        </Button>
      </InputGroup>
    </>
  );
};
