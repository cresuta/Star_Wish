import React, { useState } from "react";

export const ProductContext = React.createContext();

export const ProductProvider = (props) => {
  
  const eBayAuthToken = "v^1.1#i^1#r^0#I^3#f^0#p^1#t^H4sIAAAAAAAAAOVYe2wURRjv9YUNL0kaMQb1PIiRx+7t6/Z6G+7k+pKjT3oFSmMl+5htl+7tLjuztBdCLBUwNlEbIyYWSWqJiqghgmgkEoMmRPhDDRKJYiKEGIn+ARICqCE6u1fKtRJo6RmbuP9sZub7vvm+33yvGaqnuGTR9uXbr870Tcsf7KF68n0+ejpVUly0eFZB/gNFeVQWgW+wZ0FPYW/B+aVQTOmW0ASgZRoQ+LtTugEFbzIacGxDMEWoQcEQUwAKSBaS8bpagSEpwbJNZMqmHvAnKqMBUeHDTIQSGZ5nIixL41njhsxm011nObZMZMOqGg6VhRi8DqEDEgZEooGiAYZiGILiCDrSTLMCwwgMT0b4cGvAvxrYUDMNTEJSgZinruDx2lm63l5VEUJgIywkEEvEq5MN8URlVX3z0mCWrNgwDkkkIgeOHlWYCvCvFnUH3H4b6FELSUeWAYSBYCyzw2ihQvyGMnehvgc1qwBFAlxEosokhaH5nEBZbdopEd1eD3dGUwjVIxWAgTSUvhOiGA1pPZDR8Kgei0hU+t3fSkfUNVUDdjRQVR5fG29sDMQq8LxtGk0ERsxeo8EOIlneQoQUOURLEaASPK9IEldGD2+UkTYM85idKkxD0VzQoL/eROUAaw3GYkNnYYOJGowGO64iV6NsutAIhkyre6iZU3RQh+GeK0hhIPze8M4nMMKNkK1JDgIjEsYueBDhsLEsTQmMXfR8cdh9umE00IGQJQSDXV1dZBdLmnZ7kKEoOthSV5uUO0BKDGBaN9Yz9NqdGQjNM0UGmBNqAkpbWJdu7KtYAaM9EGPLOIbjhnEfrVZs7Ow/JrJsDo6OiFxFiBzmAMWJHBPmQirPqrmIkNiwkwZdPYAkpomUaHcCZOmiDAgZ+5mDfVdTBDakMmyZCgiFj6gEF1FVQgopPEGrAFAASJIcKfs/Bcp4XT0JZBugnPh6zvy8VmuFqfDGlpXhmmpeDotBq741nGpfXlfRWlMDaxLKelpdwUSqytNcdLzRcEvjK3QNI9OM988FAG6s5w6E5SZEQJmUeUnZtECjqWtyemodMGsrjaKN0uVOGo+TQNfxb1Kmxi0rkZuMnTMjJ5gs7s7u3FWq/6hK3dIq6Dru1LLK5YdYgGhpJK5DbqynSdlMBU0RNyHu9DpPa/8YwlsSBSUnTbY7ACKsiYL7wHEzaTiZk7ikKeNnyRRMbMT4WfAlQ3FkdFcbeZWZxGhq7R0ITmjP7smAIjl656ScTsOXhynlctjcjN2akun6Sc94Em6USRtA07HxhYdscJvgZrMTGLilQLap68BePbmk4ibTVMpBoqSDqZZVc5BdNHFi/U5hr+/4v24XzYcoFjfOHD8p22Svo1k31WpCrmvhBO42wdEvLbE876N7fYepXt/H+T4fFaYIejG1sLhgVWHBjADE2YSEoqFIZjepiSqJE5khIscGZCdIW6Jm5xf7tO9Pytey3ngG26j7R155Sgro6VlPPtS8mytF9Oy5MxmG4ugIzTIMw7dS82+uFtL3FZaeXTxt7s/9zLXSFw+ffmjvSaL+t+ND1MwRIp+vKA87ZN7mx75bVvxG1ddbd3RdzFty7sDAqQ3Nzwws2j5QsnMgEm3bsOvVKz/sX9O0S95y9Ji645TYP2duwZaXthkL2+rQkVOXjlpnz705+HD72l/eTVyd93TftR87Fx189tC9NV9c3lR7rOfRx8H+WRfn1M9/Ge27sIt9rym+pef6pk3z1n1AfVr1115zRVvq7MG+519Z8sK2Zd8OfXXkNbQTtP7Zwu7WpGjynre+rAn2F+V99MSlE/rQOyVb0ebzlXt+7/pw2RlicLCyb6j016u9/Qfe7rvA7F8ixKr/EBs+y599hevf8KTUVJpcsfJ1Rjz904nnmlsepM19p8/sPnh5T90jq2YscD4PXbw+/f1Pnjr0TWXmGP8GMJrsh30TAAA=";
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
      console.log("this is wishlist", wishlist)
      return  fetch(`${apiUrl}/api/Product/mywishlistproducts?id=${wishlist[0].id}`)
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
