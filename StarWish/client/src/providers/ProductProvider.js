import React, { useState } from "react";

export const ProductContext = React.createContext();

export const ProductProvider = (props) => {
  
  const eBayAuthToken = "v^1.1#i^1#r^0#f^0#p^1#I^3#t^H4sIAAAAAAAAAOVYeWwUVRjvttsCoeUIqITDbsYSKGRnZ2Znd3Yn3dXdQtOl9IAtVwnUOd60Q+dY5r2hu+JR2ojhL7k8Q5p6xCaaqAkaJYKRCMbgUUMIKAn8QfyDxBDBGkCNxre7pWwrgZausYn7z2be+77vfb/f+473HtVVMm3Z7trdN8ocUwr7uqiuQoeDnk5NKylePqOocH5xAZUj4OjrquhydhddroKCriX4tQAmTAMCV1LXDMhnBkOEbRm8KUAV8oagA8gjiY9H6lfzDEnxCctEpmRqhCu2IkT4Bb8oUbIoc5IUFNkgHjVu2Ww2QwQr0KwPyEFKEoLBABDwPIQ2iBkQCQYKEQzFMG6KddOBZprjvQxPcSTr9bYQrvXAgqppYBGSIsIZd/mMrpXj691dFSAEFsJGiHAsUhNvjMRWrGxorvLk2AoP8RBHArLhyK9qUwau9YJmg7svAzPSfNyWJAAh4QlnVxhplI/ccuY+3M9Q7WN8clChOK8s+wHHKnmhssa0dAHd3Y/0iCq7lYwoDwykotS9GMVsiNuAhIa+GrCJ2ApX+m+NLWiqogIrRKyMRjZFmpqIcDUet0xjrRszZm1QYbs7Ht3o9smSjxaDQHH7/bIosgF6aKGstSGaR61UbRqymiYNuhpMFAXYazCaGyaHGyzUaDRaEQWlPcqVC97ikAm0pDc1u4s2ajfS+wp0TIQr83nvHRjWRshSRRuBYQujJzIUhQghkVBlYvRkJhaHwicJQ0Q7Qgne4+ns7CQ7vaRptXkYiqI9G+tXx6V2oONkS+rpXM/Kq/dWcKsZKBLAmlDlUSqBfUniWMUOGG1E2BtgGZYd4n2kW+HRo/8YyMHsGZkR+coQWfRzbCDgF2ivTIlKXopNeChIPWk/gCik3LpgdQCU0AQJuCUcZzaOXVXmvT6F8QYU4Jb9QcXNBhXFLfpkv5tWAKAAEEUpGPg/JcpYQz0OJAugvMR63uJ8tdoCdW7HxjVcXY1f4gRPoqGF09tq66tb6upgXUzeRiurmODKaIoNjTUb7gi+WlMxM814/XwQkM71/JFQa0IE5AnBi0tmAjSZmiqlJtcGey25SbBQKmqn8HccaBr+mxDUSCIRy0/FzhvIcRaL+8Odv071H3WpO6KC6cCdXKjS+hAbEBIqiftQOtdTpGTqHlPAh5D0cGvGa9cowTsKeUQ7RbbZACLsiYzPgWNWUnExJ3FLk8eukm2YGMTYVfAlQ7YldF8LZTozidlU29oRHNeayYmQItpax4SCTsWXh0kVchhuFrcqZ0/9ZAY8CXdIpAWgaVv4wkM2pg/BzWYHMPCRAlmmpgFr/cSKSrqY6rqNBFEDk62q5qG6qML4zjvObsepfx0X7fdRXspLM9yEsEmZE03rZOsJ+e6F47jbeEa+tIQLMj+623GM6nYcKXQ4KI5y08upypKidc6iUgLiakJCwZBFM0mqgkLiQmYIyLYA2QFSCUG1Cksc6vkz0s2cN56+LdS84VeeaUX09JwnH2rh7ZlieuZDZQxDsXSA5rwMxbVQj9yeddIPOud+Te895DzcxPYvObmh55NrL5S3f3+WKhsWcjiKC3BAFuzSfl226cDV5D7Pl1fLd6+aig7AqiuJgfNbZm8/2H+iZD/oaHi4b9aRz27Quy7uevHj6KM91xZRz51++q91VAX3R8WZE6/0lmpbB3pv9m/tLfH26tHSN8t2VvTMGfz5nHOwZ9Fl8u3r/Z0LD1c+G378g+M1j71UP6/h4qyzA+/N2qsv/eaJU8T7pZuL5pf7nnrgUhVYemhJ6/5eM/i8tuet8qNTn/z04OaBwmMfLZlX9fufc02w4McLXww2Hgeb7c9vLv6w0lXd2u3f/sO3l07vPBed2fLyUfvqjCvPxPd1nlg856d1zlcPLLheWXgsefK35W+clTb9smrKV4fWxLD7r5VFX/+ua7Dt3Z49F2a/k93GvwHN5t9jfRMAAA==";
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

  const getAllProductsFromWishListId = (wishListId) => {
    return fetch(`${apiUrl}/api/Product/mywishlistproducts?id=${wishListId}`)
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
