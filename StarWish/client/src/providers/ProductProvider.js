import React, { useState } from "react";

export const ProductContext = React.createContext();

export const ProductProvider = (props) => {
  const eBayAuthToken = "v^1.1#i^1#r^0#f^0#p^1#I^3#t^H4sIAAAAAAAAAOVYW2wUVRju9gZNrQQDSgRlHQiVy8yemb2P7IbeSGvv3VpKE8QzM2fbobMz45wztGsCrOViNGAIJFi8JH0gxOgDGGyUCOHBQAjGoKgPyIMJEi6+cGtETQDP7payrQRausYm7stmzvn///zfd/7LOQckCouWbKvedqvEMS13IAESuQ4HXwyKCguWPpmX+2xBDsgQcAwkFiby+/IuL8cwppliC8KmoWPk7I1pOhZTgyHGtnTRgFjFog5jCItEFiNl9XWiwAHRtAxiyIbGOGsqQ4wfCMgXlHkFumFQ9vroqH7PZqsRYjwQyVHeFw0IUSALfpnOY2yjGh0TqJMQIwBBYIGH5d2tvFsUvCIIcF6vu4NxtiELq4ZORTjAhFPuiildK8PXh7sKMUYWoUaYcE3ZykhjWU1lVUPrcleGrfAwDxECiY1Hf1UYCnK2Qc1GD18Gp6TFiC3LCGPGFU6vMNqoWHbPmcdwP0W1R/L5ZI/klymVEnArWaFypWHFIHm4H8kRVWGjKVER6UQl8UcxStmQ1iGZDH81UBM1lc7kX7MNNTWqIivEVJWXrS5ramLCFXTcMvQWljJmrVJxFxspb2e9iuzlpSCKsj6fIkmeAD+8UNraMM1jVqowdEVNkoadDQYpR9RrNJYbPoMbKtSoN1plUZL0KFPOe49DT6AjuanpXbRJl57cVxSjRDhTn4/egRFtQixVsgkasTB2IkVRiIGmqSrM2MlULA6HTy8OMV2EmKLL1dPTw/W4OcPqdAkA8K72+rqI3IVikKGyyVxPy6uPVmDVFBQZUU2siiRuUl96aaxSB/ROJuwOeASPZ5j30W6Fx47+YyADs2t0RmQrQ3xQAF5P0Ae9KOD3S4FsZEh4OEhdST+QBONsDFrdiJgalBEr0zizaeyqiuj2RgV3IIpYxReMsp5gNMpKXsXH8lGEAEKSJAcD/6dEGW+oR5BsIZKVWM9anNepHTjmX9/e7K9d6ZP90GU2dPhjndX1FR21tbi2RlnHR18WglXlcU9ovNnwQPAVmkqZaaXrZ4OAZK5nj4RqAxOkTApeRDZM1GRoqhyfWhvstpQmaJF4uR2n3xGkafRvUlDLTLMmOxU7ayAnWCweD3f2OtV/1KUeiAonA3dqoUrqY2oAmipH+1Ay1+OcbMRcBqSHkOTw2pTXzjGCDxRySXac67QRJtQThZ4Dx62k0mLO0ZamjF8l3TApiPGr0EuGYsvksRZKdWaOsql2dhE8oTV7J0OKZGvdkwo6lV4eplTIUbhp3KqSPvVzKfAcXi9zFsKGbdELD9eYPAS3Gt1Ip0cKYhmahqy2yRWVZDGNxWwCJQ1Ntaqaheqiwomdd/L7HKf+dVy8zxMMeH1uEJgUNjl1olk71XpCtnvhBO42rtEvLeGc1I/vcxwFfY7DuQ4H8AOWXwoWF+a9kp/3BINpNeEw1BXJ6OVUGOVoIdMhsS3EdaO4CVUrt9Ch/vyj/EfGG8/AGjBn5JWnKI8vznjyAfPuzxTwM54pEQTg4d28W/CCQAdYcH82n386f9bOXSt2aofmTFu6e5F5aKhLAwB9CkpGhByOghwakDnN+ZuPLB/8qFSfdqAlMffLqts768lquKVpWfWdvmPlV+6Etl7/9vqNMzfXbt6xsXOo/+zhBTPO3Hj3yjeLtUvhA63fz9z4edG+7UOr9kvnKpv1ypZl+wdvt93aNO/tAbhhzy/FB14b3DTrUv2OGTOP9t8dbNt7+sgLP1zcuuX5a20ffHzz5MZjJ/Z6wJpd8v66cGn7c+39t0t034XT1wLv/zr0xub+3zadv/TdVWPmkhXvTb916k0kVr6uCO+A41/nbjn50pX5R67NKw23Lnxxtmvu7K+ms8c3/HTZPLdeCfz16tCc/GJUuX1H7EP1YMFF7e6FXXvOJj4pzf3isxNvHdz3p/OtnvDV3+cffOp8Yvei9Db+DcSMuH19EwAA";
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  let [cartCount, setCartCount] = useState(0);

  const updateCartCount = () => {
    let newClicks = ++cartCount;
    debugger
    setCartCount(newClicks);
  };

  const getAllProducts = (userInput) => {
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

  return (
    <ProductContext.Provider value={{products, getAllProducts, searchQuery, setSearchQuery, cartCount, setCartCount, updateCartCount}}>
      {props.children}
    </ProductContext.Provider>
  );
};
