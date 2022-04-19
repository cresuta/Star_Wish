import React, { useState } from "react";

export const ProductContext = React.createContext();

export const ProductProvider = (props) => {
  
  const eBayAuthToken = "v^1.1#i^1#f^0#I^3#r^0#p^1#t^H4sIAAAAAAAAAOVYb2wURRTv9h8QBMRgEcV6WUHEZvdm927vugt34a7QtLa0pVdarBCyf+bapXe7x85s20OIR0mAxBgjIfgnQatEUiL0g0SikJYYDBIixg+YED6AJEb5giaQUEVFZ+9KuVYCLT1jE+8+bGbmvTfv/eb9mwGp4hkv7KzaOTSLmpbfmwKpfIriZoIZxUVlswvynyzKA1kEVG9qUaqwp+DqciTHYwmpEaKEaSDo6o7HDCSlJwO0bRmSKSMdSYYch0jCqhQJra6VeBZICcvEpmrGaFf1ygAt8MAfFXmfqvr9QPSKZNa4I7PJDNAqp4l8FMp8uU/1y7xG1hGyYbWBsGzgAM0DnmeAl+HEJk6UOEHyCKzoBa20qxlaSDcNQsICOphWV0rzWlm63l9VGSFoYSKEDlaHKiP1oeqVq+qalruzZAWHcYhgGdto9KjC1KCrWY7Z8P7boDS1FLFVFSJEu4OZHUYLlUJ3lHkI9dNQq5zC+7yKCDhNANDH5wTKStOKy/j+ejgzusZE06QSNLCOkw9ClKChbIIqHh7VERHVK13OZ40tx/SoDq0AvSoceinU0EAHK8i8ZRqNDEHMatFROxMJr2METRU4RYRRxufTFMVbzg1vlJE2DPOYnSpMQ9Md0JCrzsRhSLSGY7EBWdgQonqj3gpFsaNRFh3P3cHQI7Q6h5o5RRu3G865wjgBwpUePvgERrgxtnTFxnBEwtiFNEQBWk4kdI0eu5j2xWH36UYBuh3jhOR2d3V1sV0e1rTa3DwAnHvd6tqI2g7jMk1onVjP0OsPZmD0tCkqJJxIl3AyQXTpJr5KFDDa6KCn3Mt7vcO4j1YrOHb2HxNZNrtHR0TOIgRC4jMe1SfwoqJyai4iJDjspG5HD6jISSYuWx0QJ2KyChmV+JlNfFfXiKwo7ymPQkbziVHGK0ajjCJoPoaLQgggVBRVLP8/Bcp4XT0CVQvinPh6zvy8Vm9FcX/nujX+mkqnbrkTda3+eFvV6orWmhpUU61t4qIv8uKqcNIbGG803NP4iphOkGki++cCACfWcwdClYkw1CZlXkQ1E7DBjOlqcmodsMfSGmQLJ8N2kowjMBYjn0mZGkokqnOTsXNm5ASTxcPZnbtK9R9VqXtahRzHnVpWOfyICJATOkvqkBPrSVY1425TJk2IM70xrbVrDOE9idyKnWTbbIgw0UQjfeC4mXSSzFlS0rTxs2QKJjFi/CzkkqHZKn6ojdKVmSVo6m3tGE1oz+7JgKLYsY5JOZ1OLg9TyuWIuRm7dS3T9bNp41nUqbIWRKZtkQsPW+80wU1mBzRIS4EtMxaDVvPkkoqTTONxG8tKDE61rJqD7KLLE+t3Cnuos/+6XZxPAB5R8HuESdmmpjuajVOtJuS6Fk7gbuMe/dISzEv/uB5qAPRQn+dTFPADhisDS4sL1hYWPEIjkk1YJBuaYnazuhxlSSIzZGxbkO2AyYSsW/nFlH7xvPpr1htP7wbwxMgrz4wCbmbWkw9YeHeliJszfxbPAy8nkr9AOnbw7N3VQq6kcN5Hnz21rKSye+/sZOuOG+e2LFh04v3jYNYIEUUV5RGHzHOVKODn8P6W5zpeebPqujx05djZAx0NjUfPt2y+UTJ3RekF4cCpp2+8c6k2uP/beb/re9bDfZ5zf9YsPSz9tOWLzZ8eLbVuCUrZsldR5/mvl5Vu2/VHeOvW/sojM28/v3ag73Az9caxy/zcr86cPjFYdulxe8mChXX7TucPKB/2Du4WNp9tOTl3fclj3x3/5L3m7XTq2rSB5Vf3bDhzsuLH2/vXMtdSoelv9VFl/btWLP3lEOi78P38W3jHYOe7u3Yb/dO7zEPbgffm5bepdn56aVf3BQy2ffnXo/2pna8tvjh0as6toeNHnuFW+K+E3H1Leuacus6GX1482PjNwdd/6P3t5sH2vR8cqita/HHmGP8GSOi5FX0TAAA=";
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
