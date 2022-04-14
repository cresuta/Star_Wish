import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { ProductProvider } from "./providers/ProductProvider";
import { UserProfileProvider } from "./providers/UserProfileProvider";
import { MyWishListProvider } from "./providers/MyWishListProvider";

ReactDOM.render(
  <ProductProvider>
    <UserProfileProvider>
      <App />
    </UserProfileProvider>
  </ProductProvider>,
  document.getElementById("root")
);
