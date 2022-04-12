import React, { useState } from "react";

export const ProductContext = React.createContext();

export const ProductProvider = (props) => {
  const eBayAuthToken = "v^1.1#i^1#f^0#p^1#r^0#I^3#t^H4sIAAAAAAAAAOVYa2wURRzv9QVNRU0gQIToZZGChdvb3du9vd1wl1xf9ix9wJVSGgjuY7Zdere72ZmldxrhUiNigh+IfjGRRyIQE6NiTBBiiBg/NAQLKpCGioYQDUJ4RBQVosS5B+VaCbT0jE3cL5uZ+c9//r/f/B8zQ6XKK6q3NG75fYZrWvHuFJUqdrnoSqqivGzJoyXFT5QVUXkCrt2pp1Ol/SU/LYNSPGaJKwG0TAMCdyIeM6CY6QwSjm2IpgR1KBpSHEARKWI03LxcZEhKtGwTmYoZI9yRuiDhZzgBSJzM+AXJ5+MA7jXu6Gw3g0RA0GQ/4FlBkHhOoik8DqEDIgZEkoGCBEMxjIdiPTTTTnMixYhsgOQoXxfh7gA21E0Di5AUEcqYK2bm2nm23t9UCUJgI6yECEXCDdHWcKSuvqV9mTdPVyjHQxRJyIGjW7WmCtwdUswB918GZqTFqKMoAELCG8quMFqpGL5jzEOYn6Wa1hjN59c0huU0meULQmWDaccldH870j266tEyoiIwkI6SD2IUsyFvAArKtVqwikidO/1b4UgxXdOBHSTqa8Jrwm1tRKgW99umsdKDGbNX67DHE63p9HCqwtGyADSP36/KMhugcwtlteVoHrNSrWmoepo06G4xUQ3AVoPR3LAil8cNFmo1Wu2whtIW5cvxOQ5ZIdCV3tTsLjqox0jvK4hjItyZ5oN3YGQ2QrYuOwiMaBg7kKEoSEiWpavE2MGML+bcJwGDRA9Cluj19vX1kX0+0rS7vQxF0d7O5uVRpQfEJQLLpmM9K68/eIJHz0BRcBhjeRElLWxLAvsqNsDoJkK+AMuwbI730WaFxvb+oyMPs3d0RBQqQoCfklhNUARF4v0CV4gACeV81Js2A8hS0hOX7F6ArJikAI+C3czBrquroo/TGF9AAx7VL2geVtA0j8ypfg+tAUABIMuKEPg/xcl4PT0KFBuggrh6wdx8ud4F4/zGzhV8U4Nf4SWv1dLFx7sbm2u7mppgU0TdQGvPMUJ9TZINjjcY7gm+NqZjZtrx+lMv1htNiIA6KXhRxbRAmxnTleTU2mCfrbZJNkrWOEncjoJYDP8mBTVsWZHCJOyCgZxgsng43IUrVP9RkbonKph23KmFKj0fYgWSpZPpOpSOdVIx415TwmeQdPf6jNXusYL3EvLKTpLsdgBE2BIVHwPHPUnHyZzEJU0d/5RswcQgxj8F3zFUR0EPtVCmMpOYTb27B8EJrZmYDCmyE+udlNPp+O4wpVwOw83i1tXsoZ/MgCfhRoW0ATQdG993yNb0Gbjd7AUGPlIg24zFgN0xuaSSTqbxuIMkOQamWlYtQHbRpQmed0r7XUf/bVy0nxV4nuP9gUlhUzInmvVTrSYUuhZO4GrjHf3QEirKfHS/6zDV7zpU7HJRPOWhl1DPlJesKi15hIA4m5BQMlTZTJC6pJE4kRkScmxA9oKkJel2cblLHz6l/JH3xLN7HTV35JGnooSuzHvxoebfHSmjH5szg2EolmZojmLYQBe14O5oKT27dNbF6atenvbesdWRzT/uORN46/ZT/K0hasaIkMtVVoT9sajk7euH+BO/vr83RVVuqjq54+uryeSNSwPz9s8kT5edK7lyUoJ9W9f2/xaes632Wup2WdXApi7KSFjCG+cPHL+5vXGj/DPzzoJtF48UNa08/e3C3s7DZeX7Ih8tvJy4uvPkWnf9Z4OBY+deGdzPHqg+ersBVN1seHb/ml0vHP+q+hbxJn/w+qJFJ2RrnteWhy/VXd87e8WXTy5NVF3780jRq39990nqCPqmff7g4qHBPTOvRGft5L+INcmLD/Zvcc/5fNmuqx/w/WfB2Y99z184NdDz0j7fmbO/bB7YgSordjHe1eHtP9QOXTYudKz9cP2N4ne3BpbQ06uHzw+9+P3SuZ8+vu5KzfDrVVzza9lt/BvQbENOfBMAAA==";
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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
    
    // .then((data) => {
    //     console.log(data);
    //     const searchResults = data.itemSummaries;
    //     searchResults.map((product) => {
            
    //     })
    //     console.log(searchResults);
    // })
  };

  return (
    <ProductContext.Provider value={{products, getAllProducts, searchQuery, setSearchQuery}}>
      {props.children}
    </ProductContext.Provider>
  );
};
