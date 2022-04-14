import React, { useState } from "react";

export const ProductContext = React.createContext();

export const ProductProvider = (props) => {
  
  const eBayAuthToken = "v^1.1#i^1#f^0#I^3#r^0#p^1#t^H4sIAAAAAAAAAOVYbWwURRju9YtUvkIUNEblskiUlt2bvdv7WrmL1xbs9RuuFGiEOrs72257t3vZmaV3EWJTviRgjBF+CEZBSIjGVMVoxNSISAIiGj8aJYhRkB8SSYx/wMQfOHt3lGsl0NIzNvH+XHbmfd95n2fej5kB/eUVlVvrtl6d6ZhWvK8f9Bc7HPx0UFFeVjWrpPj+siKQJ+DY1/9wf+lAya9LMEzEk+IKhJOGjpEzlYjrWMwMhhjL1EUDYg2LOkwgLBJZjEWaGkU3B8SkaRBDNuKMM1obYiTk9agQKh6/X4YQQDqqX7fZZoQYN/CpCvBD6EGAB7yHzmNsoaiOCdSJPe92s0BgeaGN94k8EEGA8/H+DsbZjkysGToV4QATzrgrZnTNPF9v7SrEGJmEGmHC0ciyWEskWru0uW2JK89WOMdDjEBi4dFfNYaCnO0wbqFbL4Mz0mLMkmWEMeMKZ1cYbVSMXHfmDtzPUI0QgLxPoET7VcALUkGoXGaYCUhu7Yc9oimsmhEVkU40kr4do5QNqQfJJPfVTE1Ea53233ILxjVVQ2aIWVodWRNpbWXCNXTcNPQVLGXMXKXhbjZWvZr1KrKXl4JIZX0+RZKEAJ9bKGstR/OYlWoMXdFs0rCz2SDViHqNxnID8rihQi16ixlRie1Rvlwgx6Hg93XYm5rdRYt06/a+ogQlwpn5vP0OjGgTYmqSRdCIhbETGYpCDEwmNYUZO5mJxVz4pHCI6SYkKbpcfX19XJ+HM8wulxsA3rW6qTEmd6METcZUws71rLx2ewVWy0CREdXEmkjSSepLisYqdUDvYsKegOAWhBzvo90Kjx39x0AeZtfojChUhniDQhAE3SAoCQB5ZaEQGRLOBanL9gNJMM0moNmLSDIOZcTKNM4sGruaInq8qtsTUBGr+IIqKwRVlZW8io/lVZq4CEmSHAz8nxJlvKEeQ7KJSEFivWBx3qh14IR//erl/oZlPtkPXcnmDn+iq66ppqOhATdElR5erXcHl1anhdB4s+Gm4GviGmWmja5fCALsXC8cCXUGJkiZFLyYbCRRqxHX5PTU2mCPqbRCk6SrrTT9jqF4nP5NCmokmYwWpmIXDOQEi8Wd4S5cp/qPutRNUWE7cKcWKlsfUwMwqXG0D9m5nuZkI+EyID2E2MOdGa+dYwRvKuSSrDTXZSFMqCcKPQeOW0mjxZyjLU0Zv0q2YVIQ41ehlwzFkskdLZTpzBxlU+vqJnhCa6YmQ4pkxXsnFXQavTxMqZCjcLO4NSV76ucy4Dm8XuZMhA3LpBcersU+BLcZvUinRwpiGvE4MtsnV1TsYppIWARKcTTVqmoBqosGJ3beKR1wnPrXcdGrZTDodftAYFLY5MyJpnOq9YRC98IJ3G1co19awkWZHz/g+AgMOI4UOxzAD1i+CiwqL1lZWjKDwbSacBjqimSkOA2qHC1kOiSWibhelE5CzSwud2hnh+U/89549q0F94288lSU8NPznnzAAzdmyvjZ9850u4HAC7yPByDQARbcmC3l55Xes/nyoHvRYfYlpejkT4/tv3rUuvDOYjBzRMjhKCuiAVlU8uKJA+WHhMvlu9YOvv/Wxt7L267G1/tP7ji+dHvn6SfueqZ29qXfnLsPz18VmvHaiTAzbG2Z17/z1NMpa7N1bW+Pq7J+XuyXSteRsm1DVU+dqSxrmv/xukbmy0ozfOlKKri46u2vH7z289znt0nnD+yeMxjVQu6NG+9+9tjFY4+Un9386vZL9Y/3bSkCL7weOn/md+bgwZVDxvDu93ZdmFE61LDpQ7Lwk2nfReWeyrri4a5DP9Yypw+dmL0jBF5p/9xx9Ju67x9FF/nD9VcW7JmzYU3VlZeLGzb8sXP/pnPP1X677quKH77An86d9W5y657BhV1vHv+gqUR5qJNp7fhs77nGJ99Ap/+q5/aKQzuz2/g3zX/O+H0TAAA=";
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
