import React, { useState, useEffect, createContext, useContext } from "react";
import { ProductContext } from "./ProductProvider";

export const UserProfileContext = createContext();

export function UserProfileProvider(props) {

  const apiUrl = "https://localhost:5001";

  const userProfile = sessionStorage.getItem("userProfile");
  const [isLoggedIn, setIsLoggedIn] = useState(userProfile != null);
  let { setCartCount } = useContext(ProductContext);

  const login = (userObject) => {
    return fetch(`${apiUrl}/api/userprofile/getbyemail?email=${userObject.email}`)
    .then((r) => r.json())
      .then((userProfile) => {
        if(userProfile.id){
          sessionStorage.setItem("userProfile", JSON.stringify(userProfile));
          setIsLoggedIn(true);
          return userProfile
        }
        else{
          return undefined
        }
      });
  };

  // This logout will clear sessionStorage and "userProfile" will be empty
  const logout = () => {
        sessionStorage.clear()
        // when the user is logged out, we'll set cart count to zero
        setCartCount(0);
        setIsLoggedIn(false);
  };

  const register = (userObject) => {
    return  fetch(`${apiUrl}/api/userprofile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObject),
    })
    .then((response) => response.json())
      .then((savedUserProfile) => {
        sessionStorage.setItem("userProfile", JSON.stringify(savedUserProfile))
        setIsLoggedIn(true);
      });
  };





  return (
    <UserProfileContext.Provider value={{ isLoggedIn, login, logout, register}}>
       {props.children}
    </UserProfileContext.Provider>
  );
}