import React, { useState } from "react";

export const ProductContext = React.createContext();

export const ProductProvider = (props) => {
  
  const eBayAuthToken = "v^1.1#i^1#I^3#p^1#r^0#f^0#t^H4sIAAAAAAAAAOVYfWwURRTv9Ys0WAgRxSCUy5YEpeze7N7H3m16Z+7aImfpB72jljPa7Mdcu+3d7mZnlvYSjGeboIAYUf/AjyiKH2mMEBINItoQEiTyBzGBYIJgAhiif4jGEEENwdm7Uq6VQEvP2MT9ZzMz7715v9+8eW9mQLayauXmNZuvVDvmlO7Kgmypw8HOBVWVFXXzykoXV5SAAgHHruzybPlQ2Y/1SEynDKEDIkPXEHQOplMaEnKdQcoyNUEXkYoETUxDJGBZiIVb1gocAwTD1LEu6ynKGW0MUrzby/p5r1+RvKwMRJn0ajdsxvUgBYHi5XnZJ0KZ5QNygIwjZMGohrCo4SDFAY6jgYfmQJzlBY9bADzD8b4E5eyEJlJ1jYgwgArl3BVyumaBr7d3VUQImpgYoULR8OpYWzja2NQar3cV2AqN8RDDIrbQxFaDrkBnp5iy4O2nQTlpIWbJMkSIcoXyM0w0KoRvOHMX7ueoZv0BRQrwbo4LyLziE4tC5WrdTIv49n7YPapCJ3OiAtSwijN3YpSwIfVBGY+1WomJaKPT/q2zxJSaVKEZpJoi4Q3h9nYq1ED6TV3roAlj5uMq6qVjkS7aq8heVgrAJO3zKZLk8bNjE+WtjdE8aaYGXVNUmzTkbNVxBBKv4WRu3AXcEKE2rc0MJ7HtUaFcYJxDLmEvan4VLdyr2esK04QIZ6555xUY18bYVCULw3ELkwdyFAUp0TBUhZo8mIvFsfAZREGqF2NDcLkGBgaYATejmz0uDgDW1dWyNib3wjSJkMG0vdfz8uqdFWg1B0WGRBOpAs4YxJdBEqvEAa2HCrn9Hs7jGeN9oluhyb3/6CjA7Jq4I4q1Q/wBL+DZAIkbGGAld1GSTWgsSF22H1ASM3RaNPshNlKiDGmZxJlFYldVBLc3ybn9SUgrvkCS9gSSSVryKj6aTUIIIJQkOeD/P22UqYZ6DMomxEWJ9aLF+Vo1gdL8xq51fPNqn8yLLqM1wad71rQ0JJqbUXNU6WOTj3GBpkjGE5zqbrgl+IaUSpiJk/mLQYC914tHwhodYajMCF5M1g3YrqdUOTO7FthtKu2iiTMRK0PaMZhKkd+MoIYNI1qcjF00kNNMFneHu3iV6j+qUrdEhezAnV2obH1EDIiGypA6ZO/1DCPraZcukkOI3d2d89o5SfCWQi7JyjA9FkSYeKKQc+CUlVSSzBlS0pSpq+QLJgExdRVyyVAsGd/VRLnKzBA21Z5ejKY15+BMSJGsVP+Mgk4ll4dZFXIEbh63quRP/UwOPIM2yowJkW6Z5MLDtNmH4LjeDzVypMCmnkpBs3NmScVOpum0hUUpBWdbVi1CdlHF6Z13yoccx/51XKzPCzy8z+vnZ4RNzp1oumdbTSh2LZzG3cY18aUlVJL72CHHl2DIcaDU4QA8oNk68HBl2frysnsoRLIJg0RNkfRBRhWTDElkmogtEzL9MGOIqlla6VBPn5SvFrzx7HoSPDD+ylNVxs4tePIBS26OVLDzF1VzHPBwgOU9bsAnQO3N0XL2/vKF29844T8zPOf9HQ0j73x96vnhP3+NtIDqcSGHo6KEBGSJ86fast1XVlze2Ak+XtG9/EDb8Z4j7sa3139z3+Ut9+6rOnd1U/y61bVy6aqLoTr/766jI9UXru056d7zSM3ZN7OLar2feEcPx2ufy5afefQjfWnp8LGLw1veGk5c27dz94M/lIycWtW351zNEzs6wslr2w/2aYsbn6pnXv5raddD58GJ3uGfl11Pnpc2PdO8dX/229Gv5nUyc7ZFgwPhw6dfk9HmGg7Cxd2vXwBDvxx8NnIg2jSy9bfRLc174/hQZCcOXFqY/OPFQ/M/r132So1n+0vv7g1tO/pe/QKPUdmx4Ww4m/n+i0t1370Q39G0f0Ei0fbpqx+ca1bZD48fXgBHl5R8tvpQ/3zuyNP5Zfwbm5if630TAAA=";
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
