import React, { useState } from "react";

export const ProductContext = React.createContext();

export const ProductProvider = (props) => {
  
  const eBayAuthToken = "v^1.1#i^1#r^0#I^3#f^0#p^1#t^H4sIAAAAAAAAAOVYe2wURRjvtddqxUJQUpQonitqsO7e7N3t3d7KnV5bKmefcKVAtZB9zLZL93aXnVnaCyEWElDBR0QCRhN5mBiJEkw0RoKEfzQGhQQFxRDCQ4ypJv5RYwIBCc7elXKtBFp6xibeP5ed+b5vvt9vvsfMgL6y8sfWz1t/vsJzW/H2PtBX7PGwk0B5WWnV5JLiGaVFIE/As71vVp93bUn/HCSmdUtYAJFlGgj6etO6gYTsYIxybEMwRaQhwRDTEAlYFlKJxgYhwADBsk1syqZO+ZK1MYoHQBFhBIaDXBRwbISMGldttpoxKshzMs9HAOBgWI0GAZlHyIFJA2HRwDEqAAIBGoRoNtrKhgXACyDKcCzfTvnaoI000yAiDKDiWXeFrK6d5+uNXRURgjYmRqh4MlGXak4ka+c2tc7x59mKD/KQwiJ20PCvGlOBvjZRd+CNl0FZaSHlyDJEiPLHcysMNyokrjpzC+7nqA6wwWBACXOqxEtRqTBU1pl2WsQ39sMd0RRazYoK0MAaztyMUcKGtBzKePCriZhI1vrcv/mOqGuqBu0YNbc6sSTR0kLFa8i4bRoLaMKYvUhDXXSqejHNKTLHSlGo0uGwIkkhnh1cKGdtkOYRK9WYhqK5pCFfk4mrIfEaDueGE7g8bohQs9FsJ1TsepQvxw9xGGx3NzW3iw7uMtx9hWlChC/7efMdGNLG2NYkB8MhCyMnshTFKNGyNIUaOZmNxcHw6UUxqgtjS/D7e3p6mJ4gY9qd/gAArH9xY0NK7oJpkSKybq7n5LWbK9BaFooMiSbSBJyxiC+9JFaJA0YnFQ/yoUAoNMj7cLfiI0f/MZCH2T88IwqVIWJEgSEJBqSorIY4IBUiQ+KDQep3/YCSmKHTot0NsaWLMqRlEmcOiV1NEYKcGgjyKqSVcFSlQ1FVpSVOCdOsCiGAUJLkKP9/SpTRhnoKyjbEBYn1gsV5g9aO0pGVi+dH6uvCckT0W03tkXTnvMaa9vp6VJ9UlrPqM4Ho3OpMKDbabLgu+BpdI8y0kvULQYCb64UjYZ6JMFTGBS8lmxZsMXVNzkysDQ7aSoto40y1kyHfKajr5G9cUBOWlSxMxS4YyDEWi1vDXbhO9R91qeuiQm7gTixUrj4iBkRLY0gfcnM9w8hm2m+K5BDiDi/Leu0bIXhdIb/kZJhOByJMPFHIOXDUShop5gxpacroVXINk4AYvQq5ZCiOjG9poWxnZgibWmcXRmNas3c8pEiO3j2uoNPI5WFChRyBm8OtKblTP5MFz6CVMmNDZDo2ufAwze4huNXshgY5UmDb1HVot42vqLjFNJ12sCjpcKJV1QJUF00c23nHu9bz9b+Oiw1zgGAL8dFxYZOzJ5plE60nFLoXjuFu4x/+0hIvyv7YtZ79YK1nb7HHAyKAZqvA7LKShd6SOylEqgmDREORzF5GE1WGFDJDxI4NmW6YsUTNLi7zaCeOyRfy3ni2d4B7hl55ykvYSXlPPuC+azOl7JTpFYEACLFRNgx4EG0HD12b9bKV3mlNHadOb3q26uFjHWt+e0BHsSW/ZHaCiiEhj6e0iARkUXHZq7+3r3kUTV71RdE09JyFXxt4m9q2ZeqKd7VH9KivZs5BvOdbrxVaMcU4Gnnn/cOzOt6qu//cwFNHz6CPp/SnP3Q2b9g58+Lr/HtNV059SZ0PrDsc+XF//Zu/Xto1G+7hinb9uTr8/YnWjSX0xZmrpnoaj37uf2Nfx6cDZ7/jw7O2HjhdufnK6b9+uOPJ6q0NSx+8OH/go2+O9A8sKt9aNfV2GPbuvutuoWvGZ4lDTfaO7qU79tUeX9d85kg9/uOrA96GlzY9bi7sKjnQX3mp9t4PJnsuV3RfPsTty5xrORnaWFm05WD82IsXNmw7uabt3E+rk8fP7nji6b3q8wdfLu2d9MKVLaq+e8X0T35+JbeNfwM43U/6fRMAAA==";
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
