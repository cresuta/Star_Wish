import React, { useState, createContext } from "react";

export const MyWishListContext = createContext();

export function MyWishListProvider(props) {
  const apiUrl = "https://localhost:5001";

  const currentUser = JSON.parse(sessionStorage.getItem("userProfile"));
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
          const currentCart = resp.find((x) => x.name === "Cart" && x.userProfileId === currentUser.id ? x : undefined )
          setMyCurrentCart(currentCart)
      })
  };

  const saveWishList = (wishList) => {
    return fetch(`${apiUrl}/api/MyWishList/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(wishList),
    })
    .then(res => res.json())
  }

  return (
    <MyWishListContext.Provider value={{ myWishList, myCurrentCart, getMyWishListById, getAllWishListsByUserId, saveWishList }}>
      {props.children}
    </MyWishListContext.Provider>
  );
}
