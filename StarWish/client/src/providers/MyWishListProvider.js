import React, { useState, createContext } from "react";

export const MyWishListContext = createContext();

export function MyWishListProvider(props) {
  const apiUrl = "https://localhost:5001";

  const [myWishList, setMyWishList] = useState([]);
  const [myCurrentCart, setMyCurrentCart] = useState({});

  //specific wish list 
  const getMyWishListById = (id) => {
    return fetch(`${apiUrl}/api/MyWishList/${id}`)
      .then((res) => res.json())
      .then(setMyWishList);
  };

  const getAllWishListsByUserId = (userId) => {
    return fetch(`${apiUrl}/api/MyWishList/mywishlists?userProfileId=${userId}`)
      .then((res) => res.json())
      .then( resp =>{
          const currentCart = resp.find(x => x.name === "Cart")
          setMyCurrentCart(currentCart)
      })
  };

  return (
    <MyWishListContext.Provider value={{ myWishList, myCurrentCart, getMyWishListById, getAllWishListsByUserId }}>
      {props.children}
    </MyWishListContext.Provider>
  );
}
