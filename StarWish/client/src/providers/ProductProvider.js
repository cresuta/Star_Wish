import React, { useState } from "react";

export const ProductContext = React.createContext();

export const ProductProvider = (props) => {
  
  const eBayAuthToken = "v^1.1#i^1#f^0#I^3#r^0#p^1#t^H4sIAAAAAAAAAOVYe2wURRjv9YUV6qMSQG3kXFTQZvdm9/audxvu4rWl9ugTrhSsVdjHbLv0bvfcmaU9jbE0BBWTEhAIIsHGg0QxKlETKQloogYxwUSRmJAaY2IIiWkwQERNSJzdK+VaCbT0jE28P24zM9988/1+8z1mBvQVlzy2uW7z5VLXrPzBPtCX73Kxs0FJcVHFHQX59xXlgSwB12DfQ32F/QXnliIxEU8KKyFKGjqC7t5EXEeC0xmiLFMXDBFpSNDFBEQCloVYpLFB4BggJE0DG7IRp9zRmhAVAH4fkHgOAFWE5I/06ld1thohSmRhgGf5AFAlwCqiQsYRsmBUR1jUcYjiAMfRgKdZvpUNCD6/wPNMkOPbKXcbNJFm6ESEAVTYMVdw5ppZtt7YVBEhaGKihApHI7Wx5ki0ZllT61JPlq7wKA8xLGILjW9VGwp0t4lxC954GeRICzFLliFClCecWWG8UiFy1ZhbMN+hWlJElvOqAcJYUAwoMCdU1hpmQsQ3tsPu0RRadUQFqGMNp27GKGFDWg9lPNpqIiqiNW77s8IS45qqQTNELauKPBlpaaHC1aTfNPSVNGHMXK2hLjpWtYb2KbKPlYJQpf1+RZL4ADu6UEbbKM0TVqo2dEWzSUPuJgNXQWI1nMgNn8UNEWrWm82Iim2LsuQ4MMYhaLc3NbOLFu7S7X2FCUKE22nefAfGZmNsapKF4ZiGiQMORSRskklNoSYOOr446j69KER1YZwUPJ6enh6mx8sYZqeHxCHrWdPYEJO7YEKkiKwd6xl57eYTaM2BIhPfIvICTiWJLb3EV4kBeicV9gZ4judHeR9vVnhi7z86sjB7xkdEriLEq3DQxwER+FRW4bxyLiIkPOqkHtsOKIkpOiGa3RAn46IMaZn4mUV8V1MEr0/lvAEV0oo/qNJ8UFVpyaf4aVaFEEAoSXIw8H8KlMm6egzKJsQ58fWc+XmD1o4SlRvWrKisr/XLlaIn2dRemeisa6xur69H9VFlPasu54LLqlJ8aLLRcF3w1XGNMNNK1s8FAXas546EOgNhqEwLXkw2krDFiGtyamZtsNdUWkQTp6qsFGnHYDxOPtOCGkkmo7nJ2DkDOcVkcWu4c1ep/qMqdV1UyHbcmYXKno+IAjGpMaQO2bGeYmQj4TFEcgixu9c6VrsnCF5XyCNZKabTgggTSxRyDpz0JI0kc4aUNGXyUzIFk4CY/BRyyVAsGd/SQk5lZgibWmcXRlNas3c6pEhWvHtaTqeRy8OMcjkCN4NbUzKnfsYBz6ANMmNCZFgmufAwzfYhuNXohjo5UmDTiMeh2Ta9pGIn00TCwqIUhzMtq+Ygu2ji1M47hf2ur/91XKyfDwb9nB9MD5vsnGjWzrSakOtaOIW7jWf8S0s4z/mx/a6joN81lO9ygUpAsxXg0eKCVYUFcyhEsgmDRF2RjF5GE1WGJDJdxJYJmW6YSoqamV/s0s58L/+R9cYz+DRYMPbKU1LAzs568gHl10aK2Dvnl3Ic4FmeDfj8PN8OFl0bLWTnFc497et46tOKHdT+ymE2fbFi9/lY+YugdEzI5SrKIw6Z546trpkj708fkw7xocPHFr78w18J6eTl3f1vfp5e8GXZwcffyt9497sDp3pu+3nWwYGSves294w0nCvRlpSWdfbsSw9FyrsvXAx/d77x6MdD/itu5t7tW3/5Ku/M8fKBFKt+Yr1W99JzOx+evWf5UubE7wfeWX+kPN2xpaouvWHXQuvbjc8s+aDtNLfq9j/vr1m0dce8kS7vT40HL+8+vKBt/uIO6cLe4eW1i66cPPvePcMXV+yal34f8sPRjhdGTt01tCk494kfV3san/9m275Q6fxLi99eiMpPPHDkkV3VewbWnfd/8eCv29OvwLJ9b7x6uLWs+bPFB34benZw5PVY9NKHg3dsO7TlbGHjRzuPz9mU2ca/AXOWM8F9EwAA";
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

  const getProductById = (id) => {
    return fetch(`${apiUrl}/api/Product/${id}`)
    .then((res) => res.json())
  }

  const getAllProductsFromWishListId = (wishListId) => {
    return fetch(`${apiUrl}/api/Product/mywishlistproducts?id=${wishListId}`)
    .then((res) => res.json())
    .then((data) => {
      setMyWishListProducts(data);
    }); 
  }


  return (
    <ProductContext.Provider value={{products, getAllProductsFromEbay, searchQuery, setSearchQuery, cartCount, setCartCount, updateCartCount, addProductToCart, getProductById, getAllProductsFromWishListId, myWishListProducts}}>
      {props.children}
    </ProductContext.Provider>
  );
};
