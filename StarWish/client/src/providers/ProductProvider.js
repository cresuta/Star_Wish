import React, { useState } from "react";

export const ProductContext = React.createContext();

export const ProductProvider = (props) => {
  
  const eBayAuthToken = "v^1.1#i^1#p^1#I^3#f^0#r^0#t^H4sIAAAAAAAAAOVYe2xTVRhf94CMOXwAjiDGcpEYxHt77qO93d1W7cbmyh7d1jLHDMJ9nK6Xtvc295y7rcSEWXVgMNE/jBofCSExPv4gEk0MBv5CjUCEKIbI/EMXjBpkSlwCxoXoaTtGNwlsrMYlNk1uzjnf953v+32vcw4YWlT+4HDz8OVKx+LifUNgqNjhYCtA+aKyDUtLileVFYE8Ase+ofuHStMlP9ciORFPSl0QJU0DQedgIm4gKTtZR9mWIZky0pFkyAmIJKxKIX9bq8QxQEpaJjZVM045AxvrKFEQZCDwPOv2ulUeusmscVVm2CTroqZ43LIs8gLkRMVL1hGyYcBAWDZwHcUBjqOBQHMgDHhJYMmfAYLQSzm7oYV00yAkDKB8WXWlLK+Vp+uNVZURghYmQihfwN8UCvoDGxvbw7WuPFm+SRxCWMY2mj5qMDXo7JbjNrzxNihLLYVsVYUIUS5fbofpQiX/VWVuQf0s1F43LyoQEMDciqyJYkGgbDKthIxvrEdmRtfoSJZUggbWcepmiBI0lB1QxZOjdiIisNGZ+XTaclyP6NCqoxrr/Vv8HR2Ur4HMW6bRRRPErMd0FKVD9T20W1PdrFINI7THoymK4GUnN8pJm4R5xk4NpqHpGdCQs93E9ZBoDWdiw+dhQ4iCRtDyR3BGo3w691UM+erejFNzXrRx1Mj4FSYIEM7s8OYemOLG2NIVG8MpCTMXshDVUXIyqWvUzMVsLE6GzyCqo6IYJyWXa2BggBngGdPqc3EAsK6ettaQGoUJmSK0mVzP0es3Z6D1rCkqJJxIl3AqSXQZJLFKFDD6KB/vFThBmMR9ulq+mbP/mMiz2TU9IwqVIZpbgaIGPB5RVIAC+EJkiG8ySF0ZPaAip+iEbMUgTsZlFdIqiTObxK6uSbw7wvHeCKQ1T3WEFqojEVpxax6ajUAIIFQUtdr7f0qU2YZ6CKoWxAWJ9YLFeaveixJif0+n2NLkUUXZlWzvFRN9zW0NvS0tqCWg7WAjm7jqxvqUUDfbbLiu8Q1xnSATJvsXAoBMrhcOhGYTYajNy7yQaiZhhxnX1dTCcjBvaR2yhVP1doqMQzAeJ595mepPJgOFqdgFM3KOxeLW7C5cp/qPutR1rUKZwF1YVmX4EREgJ3WG9KFMrqcY1Uy4TJkcQjLT27JaO2cQXpfIpdgpps+GCBNNNHIOnDWTToo5Q1qaNnuWXMMkRsyehVwyNFvFt7RRtjMzBE29L4rRnPYcnA8oih2PzSvodHJ5WFAhR8zN2a1ruVM/kzWeQf0qY0Fk2ha58DDBzCE4bMagQY4U2DLjcWh1z6+oZIppImFjWYnDhVZVC1BddHlu553StOP4v24X63EDgfOwYH6uU7Mnmm0LrScUuhfO4W7jmv7S4ivK/ti04whIOw4VOxxABDS7AaxfVLK5tOQ2CpFqwiDZ0BRzkNHlCEMKmSFj24JMDKaSsm4VL3LoI1+rf+S98ezbClZOvfKUl7AVeU8+YPW1lTL29qpKjiOeBoAXWIHtBWuvrZayd5cur1x6eHh0x8nzF1/VYqM/Pb+Ou2A3gsopIoejrIgEZJG48/DasV3Rd5orw7vCE0+Ez4xeORELl6f3Hx3hDuILuzuP7xoJvt1dNfTky4vHy397sWrzku/K7rC21y77+NLWTc0rih4+uebP3z+4srv/q4l013j6kq31PGVV3fPWuYujdmzcevzsITnwwpktK16qsYZiP5z/5b7S1kdP7DwQW/XmeDDUcfnekZq179E/fr7cm67xb1+/rIL5tvyu6ODKAzW1/V+s+/Wvdx2nXjvmGfZEl4ztPffNM4/UHrvY8tFAfbC6//3TZ5VA4svn2LY3msoqgvuPws82P7Bny8T+NaevHDzCPlvzSddDVUdef7qz89SqscHe8tXusdDYpQ8n9rzy6YGV329dvGeJY++yO3Nu/BsOCmTNfRMAAA==";
  const apiUrl = "https://localhost:5001";

  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  let [cartCount, setCartCount] = useState(0);
  const [myWishListProducts, setMyWishListProducts] = useState([]);

  const updateCartCount = () => {
    let newClicks = ++cartCount;
    setCartCount(newClicks);
  };

  const getAllProductsFromEbay = (userInput) => {
    return fetch(`https://api.sandbox.ebay.com/buy/browse/v1/item_summary/search?q=${userInput}&limit=15`, {
        headers: {
            "Authorization": `Bearer ${eBayAuthToken}`,
            "Content-Type": "application/json",
            "X-EBAY-C-MARKETPLACE-ID": "EBAY_US",
            "X-EBAY-C-ENDUSERCTX": "affiliateCampaignId=<ePNCampaignId>,affiliateReferenceId=<referenceId></referenceId>"
        },
    })
    .then((res) => res.json())
    .then((data) => {
      setProducts(data.itemSummaries);
    }); 
  };

  const addProductToCart = (product) => {
    return fetch(`${apiUrl}/api/Product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
  }

  const updateProductQuatityInCart = (product, qty) => {
    return fetch(`${apiUrl}/api/Product/${product.id}?qty=${qty}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    })
  }

  const deleteProductFromCart = (id) => {
    return fetch(`${apiUrl}/api/Product/${id}`, {
      method: "DELETE"
    })
  }

  const getProductById = (id) => {
    return fetch(`${apiUrl}/api/Product/${id}`)
    .then((res) => res.json())
  }

  const getAllProductsFromWishListId = (userId) => {
    return fetch(`${apiUrl}/api/MyWishList/mywishlists?userProfileId=${userId}`)
    .then((res) => res.json())
    .then(wishlist => {
      return fetch(`${apiUrl}/api/Product/mywishlistproducts?id=${wishlist[0].id}`)
    })
    .then((res) => res.json())
    .then((data) => {
      setMyWishListProducts(data);
    }); 
  }


  return (
    <ProductContext.Provider value={{products, getAllProductsFromEbay, updateProductQuatityInCart, searchQuery, setSearchQuery, cartCount, setCartCount, updateCartCount, addProductToCart, getProductById, getAllProductsFromWishListId, myWishListProducts, deleteProductFromCart}}>
      {props.children}
    </ProductContext.Provider>
  );
};
