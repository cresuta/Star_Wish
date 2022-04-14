import React, { useState } from "react";

export const ProductContext = React.createContext();

export const ProductProvider = (props) => {
  
  const eBayAuthToken = "v^1.1#i^1#f^0#I^3#r^0#p^1#t^H4sIAAAAAAAAAOVYa2wURRzv9doqxRY+AIKiXlYiWLJ7u3t7t3crd3gtLT2uT65UPGzIPmbb7d3tnjuztBe+NK2QGGMgvpBgYlUQEoOJH0xAA4hClBrAB4k8otEECeoHXxSIH9TZu1KulUBLz9jE+3CbmfnPf/6/3/wfM0P3lc2o2ly/+UqF447iwT66r9jhYGbSM8pKl1Y6i+8pLaLzBByDfYv6SvqdF5dBMZVMC6sBTBs6BK7eVFKHQrYzSFimLhgi1KCgiykABSQLsXBjg8BStJA2DWTIRpJwRVYECYnhVV9AZnhe5IFP5nGvfk1nmxEkeFkCqo9TfD6VAX4vwOMQWiCiQyTqKEiwNMuSNEcyXBvjEby8wAYohvHECVc7MKFm6FiEoolQ1lwhO9fMs/XmpooQAhNhJUQoEq6LNYcjK2qb2pa583SFRniIIRFZcGyrxlCAq11MWuDmy8CstBCzZBlASLhDuRXGKhXC14y5DfOzVPv8Es/6eA+nsmzA7/EUhMo6w0yJ6OZ22D2aQqpZUQHoSEOZWzGK2ZC6gYxGWk1YRWSFy/60WmJSUzVgBona6vDj4ZYWIlSD+01DX01ixszHNNhFxqrXkl5F9jJSAKikz6dIEudnRhbKaRuhedxKNYauaDZp0NVkoGqArQbjueHyuMFCzXqzGVaRbVG+nPcah3Qgbm9qbhct1KXb+wpSmAhXtnnrHRidjZCpSRYCoxrGD2QpChJiOq0pxPjBrC+OuE8vDBJdCKUFt7unp4fq8VCG2elmaZpxr21siMldICUSWNaO9Zy8dusJpJaFIuMwxfICyqSxLb3YV7EBeicR8vg5luNGeB9rVmh87z868jC7x0ZEoSJEZuz4CHC8n2Zlr0oXIkJCI07qtu0AkpghU6KZACidFGVAytjPLOy7miJ4vCrr8auAVHwBleQCqkpKXsVHMioANACSJAf8/6dAmairx4BsAlQQXy+YnzdocZjiN6xt5aN1uKiJ7nRTnE911jfWxKNRGI0o3Yy6ig3UVme44ESj4Ybga5IaZqYNr18IAuxYLxwJ9QZEQJkSvJhspEGLkdTkzPTaYI+ptIgmylRbGdyOgWQSf6YENZxORwqTsQsGcpLJ4vZwF65S/UdV6oaooO240wuVPR9iBWJao3AdsmM9Q8lGym2I+BBid6/PWu0aJ3hDIbdkZahOC0CELVHwOXDCkzSczClc0pSJT8kVTAxi4lPwJUOxZHRbC2UrM4XZ1Dq7EJzUmr1TIUWykokpOZ2GLw/TyuUw3BxuTcmd+qkseApukCkTQMMy8YWHarYPwW1GAuj4SIFMI5kEZvvUkoqdTFMpC4lSEky3rFqA7KKJkzvvlPQ7hv51XIyPCwQ4Dv9PCZucPdGsn241odC1cBJ3G/fYl5ZQUfbH9DsO0P2O/cUOB83TJLOUfrjMuabEeRcBcTahoKgrktFLaaJK4USmi8gyAZUAmbSomcVlDu3sKflq3hvPYAc9f/SVZ4aTmZn35EMvvD5Sysy6u4JlaY7hGI+XZwNx+sHroyXMvJI5tf0d63zL3qi6cPi+T7imOQNfXjo0QFeMCjkcpUXYIYuSzqHZG0J7un3Hf/zt3tYl7eamA/f7nnjyvd3OsrkNx+d9VHXpiyV/1kXKE5+7Pxj65uXl0Rd+qfj6tGdvR+vFYweGXwRm/c4Pyxf8RT4w96Wfi5xB8tmFQwM7ql6teejOli17n4keVOInj62Uy386Kp07kahc0BH9YWv8rctvLzr3fB8pLa381IMA8/Gqrbu69ZPDZ8/vX7xg4anoo7UHo9+5j6SP7NsYofed2M3A2uHnrj5yqLFj+PLg+2dWNsZnr9kDB6oryKc/W56I0LtTJ7eFt/86f+Uf+3aWzxbPvHLevDCrZN3pr167culCze/bn+rYXn548Y6ibe9s/H7Nul3vHj3/7ZZd2puvX608vim3jX8DH8rugn0TAAA=";
  const apiUrl = "https://localhost:5001";

  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  let [cartCount, setCartCount] = useState(0);

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

  return (
    <ProductContext.Provider value={{products, getAllProductsFromEbay, searchQuery, setSearchQuery, cartCount, setCartCount, updateCartCount, addProductToCart, getProductById}}>
      {props.children}
    </ProductContext.Provider>
  );
};
