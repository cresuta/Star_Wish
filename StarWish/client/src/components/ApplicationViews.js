import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import {
  UserProfileContext,
  UserProfileProvider,
} from "../providers/UserProfileProvider";
import { Dashboard } from "./Dashboard";
import { ProductList } from "./Product/ProductList";
import { ProductProvider } from "../providers/ProductProvider";
import { SearchForm } from "./SearchForm";

export default function ApplicationViews() {
  const { isLoggedIn } = useContext(UserProfileContext);

  if (!isLoggedIn) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  } else {
    return (
      <ProductProvider>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </ProductProvider>
    );
  }
}
