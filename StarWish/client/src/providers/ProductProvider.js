import React, { useState } from "react";

export const ProductContext = React.createContext();

export const ProductProvider = (props) => {
  
  const eBayAuthToken = "v^1.1#i^1#r^0#f^0#p^1#I^3#t^H4sIAAAAAAAAAOVYe2wURRjv9aUNVmIkIAaTcyERwd2b3Xsv3On1JaVPuEprAck+Ztul+2JnlvZApNQEFUwQCWD8QxolgqigQFKREBNjiCEmEmMAMVGJgpIgJGpsjSE6e1fKtRJo6RmbuP9sZub7vvm+33yvGdBdXDJn44KN/aWeO/J7u0F3vsfDTgIlxUVz7y7Iv78oD2QReHq7Z3UX9hT8NB8JumbxiyGyTANBb5euGYhPT8YoxzZ4U0Aq4g1Bh4jHEp9M1NXyHAN4yzaxKZka5a2uiFEipwgCjEgwGPYDQZDJrHFNZpMZo4JyxB8Os1I0oChyGEhkHSEHVhsICwaOURzgOBoEaDbSxAZ5luMBx4S4aCvlXQJtpJoGIWEAFU+ry6d57Sxdb66qgBC0MRFCxasTVcmGRHVFZX3TfF+WrPggDkksYAcNH5WbMvQuETQH3nwblKbmk44kQYQoXzyzw3ChfOKaMrehfhrqYICFQUmG0SDgQNDP5gTKKtPWBXxzPdwZVaaVNCkPDazi1K0QJWiIK6GEB0f1RER1hdf9LXIETVVUaMeoyrLEk4nGRipeTuZt01hME8TsZhW108myFjooS0FWjEKFDoVkUQxE2MGNMtIGYR6xU7lpyKoLGvLWm7gMEq3hSGxAFjaEqMFosBMKdjXKpgsPYRhodQ81c4oObjfcc4U6AcKbHt76BIa4MbZV0cFwSMLIhTREMUqwLFWmRi6mfXHQfbpQjGrH2OJ9vs7OTqbTz5h2m48DgPW11NUmpXaoCxShdWM9Q6/emoFW06ZIkHAilccpi+jSRXyVKGC0UXF/JMAFAoO4D1crPnL2HxNZNvuGR0SuIkQMskoAyCAohyKhSEDJRYTEB53U5+oBRSFF64LdAbGlCRKkJeJnDvFdVeb9QYXzRxRIy6GoQgeiikKLRBGaVSAEEIqiFI38nwJltK6ehJINcU58PWd+Xqu2Ij28umVRuKYqJIUFn1XfGtbbFtSVt9bUoJpqeSWrLOSilWWpQGy00XBD48s1lSDTRPbPBQBurOcOhAUmwlAel3lJybRgo6mpUmpiHbDflhsFG6fKnBQZJ6Gmkd+4TE1YVnVuMnbOjBxjsrg9u3NXqf6jKnVDq5DruBPLKpcfEQGCpTKkDrmxnmIkU/eZAmlC3OkVaa29IwhvSOQTnRTT5kCEiSYy6QNHzaSSZM6QkiaPniVTMIkRo2chlwzZkfBtbZSuzAxBU21rx2hMe3aNBxTR0TrG5XQquTxMKJcj5mbsVuVM18+kjWfQaomxITIdm1x4mAa3CW4yO6BBWgpsm5oG7SXjSypuMtV1BwuiBidaVs1BdlGFsfU7hT2eE/+6XWyI3CujgTDHjcs2Kd3RrJhoNSHXtXAMdxvf8JeWeF76Y3s8x0CP50i+xwPCgGbngoeLC54oLLiLQiSbMEgwZNHsYlRBYUgiMwTs2JDpgClLUO38Yo969ktpIOuNp3c5uG/olaekgJ2U9eQDZlxfKWInTyvlOBBgI2yQJV18K5h5fbWQnVo45eDlljm7PlzbG9lz4PxJ/PIpa1vlDFA6ROTxFOURh8wzPk2uPbtu+4qnm1vXJyLzFk2u2PDuzOlvS1v3P/5K0y740Sb+279g7dZ8e+86fUdkX3x2+7k/LkkvVL65853j5fe+VMqsP3O+a+nqiwl46J55eZcvzJl2+FAU9MWlY20X6/S+yiv7zyyb/8xvJ08XHn9r1priftRfsmdDsu/i8q/VX3/UXt09cOrSpvj33rpH+Q/6nj868NSLLVUnFtZeDZfZ9LZ1PSc/e01YNn3HpaNn+38fODj7zj1XC09Hp5/re6CosnjL0mf/PHL5kR+a3ti7/+f3du3cd5j+/LlVADVP+eLjzqnK6Zn1vVdmxx0cX/PQ8m+ONisXZjR88n5i8279sdcPbPll+1erNojfhR/MHOPfZ8F+w30TAAA=";
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
