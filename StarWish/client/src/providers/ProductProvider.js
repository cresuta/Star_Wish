import React, { useState } from "react";

export const ProductContext = React.createContext();

export const ProductProvider = (props) => {
  
  const eBayAuthToken = "v^1.1#i^1#r^0#I^3#f^0#p^1#t^H4sIAAAAAAAAAOVYf2wTVRxv13VjzEnCgBkiprkRySB3fXfttd1Jq93YQtlP6Bxjyo/78W47dr2r996tq8Y5p6KAkOAfGhI0RAwREmNICAoixIQYIZpoQGP0D6IBZVGJwRhRg/G1HaObBDZW4xL7T3Pvfb/f9/183vfHew8MlZQt3bJyy28VztKivUNgqMjpZMtBWYl72d2uooVuB8gTcO4dWjxUPOy6tByJCT0prIEoaRoIegYSuoGE7GCYsi1DMEWkIcEQExAJWBbi0ZZmgWOAkLRMbMqmTnliK8KUT1R8APJ+yHMgKIFaMmpct9lhhimWU0IQqj5FVYHKyiEyj5ANYwbCooHDFAc4jgZ+muU7WJ/ABgUeMBzguylPJ7SQZhpEhAFUJOuukNW18ny9tasiQtDCxAgViUUb423R2IqG1o7l3jxbkVEe4ljENhr/VW8q0NMp6ja89TIoKy3EbVmGCFHeSG6F8UaF6HVn7sD9LNUsYHk2APyKxAJ/QJELQmWjaSVEfGs/MiOaQqtZUQEaWMPp2zFK2JA2QxmPfrUSE7EVnszfalvUNVWDVphqqIuui7a3U5F6Mm6ZxhqaMGat1VAvHa/ronlF5lmpFqp0IKBIkj/Eji6UszZK84SV6k1D0TKkIU+riesg8RpO5AbkcUOE2ow2K6rijEf5cvwYh2x3ZlNzu2jjXiOzrzBBiPBkP2+/A2PaGFuaZGM4ZmHiRJaiMCUmk5pCTZzMxuJo+AygMNWLcVLwelOpFJPyMabV4+UAYL1dLc1xuRcmRIrIZnI9J6/dXoHWslBkSDSRJuB0kvgyQGKVOGD0UBFfyM/5/aO8j3crMnH0HwN5mL3jM6JQGeKTeFXx86rEBUXVJ3GFyJDIaJB6M35ASUzTCdHqgzipizKkZRJnNoldTRF8vMr5QiqklUCtSvtrVZWWeCVAsyqEAEJJkmtD/6dEmWyox6FsQVyQWC9YnDdr3SgR7O9aHWxqDMhB0Zts7Q4mela21Hc3NaGmmLKZVVdxtQ11aX94stlwU/D1ukaY6SDrF4KATK4XjoSVJsJQmRa8uGwmYbupa3J6Zm2wz1LaRQun6+w0+Y5DXSd/04IaTSZjhanYBQM5xWJxZ7gL16n+oy51U1QoE7gzC1VGHxEDYlJjSB/K5Hqakc2E1xTJISQzvDHrtWeC4E2FvJKdZnpsiDDxRCHnwEkraaSYM6SlKZNXyTVMAmLyKuSSodgyvqOFsp2ZIWxqPb0YTWnNgemQItl637SCTiOXhxkVcgRuDrem5E79TBY8g/plxoLItC1y4WHaMofgDrMPGuRIgS1T16HVOb2ikimmiYSNRUmHM62qFqC6aOLUzjvFw84z/zouNsADwIUCQTAtbHL2RLNxpvWEQvfCKdxtvONfWiKO7I8ddr4Php1Hi5xOEAQ0uwzUlLgeLnbdRSFSTRgkGopkDjCaqDKkkBkiti3I9MF0UtSsohKn9tU5+WreG8/e9eCesVeeMhdbnvfkA+69MeNm51RVcBzwszzrY4M86AbVN2aL2QXF8y7vX3zp3P65m/hFlU/og698UFU9sgFUjAk5nW4HCUjHksadW5kjYteSZudI8Rb681Xhprd3/3ry8Zpr15K7S/2PnPjymSPH2vZEu779Ptr5TfnL59946OngZxuORedqXJfn0Wupy/sODC7prapxXL4YKzl+1LVvx1CZG1cxB2oOVN5fXul+680Tr6c/mq0vuhD6Qt3eMnwY/RCdldjz3oOO+0qLgtUONnVuVXxNy66DzSd3ff1J5QuHehqv/iH9PDj/99kHtz172rF+5MJziRJvQ+3Z1+pK/2S3Vz9gzTo7fPrJBadbWw+f+eVj92P9seOvzhv58K+n1s2HCzdcuXLopTlbG3bsHGw4/11qd+rwqf7+Yxc3VXDPL936zo8v1vT7Pz3letfjxa6fImsZd24b/wavUQBzfRMAAA==";
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

  const deleteProductFromCart = (id) => {
    return fetch(`${apiUrl}/api/Product/${id}`, {
      method: "DELETE"
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
    <ProductContext.Provider value={{products, getAllProductsFromEbay, searchQuery, setSearchQuery, cartCount, setCartCount, updateCartCount, addProductToCart, getProductById, getAllProductsFromWishListId, myWishListProducts, deleteProductFromCart}}>
      {props.children}
    </ProductContext.Provider>
  );
};
