import React, { useState } from "react";

export const ProductContext = React.createContext();

export const ProductProvider = (props) => {
  const eBayAuthToken = "v^1.1#i^1#p^1#r^0#f^0#I^3#t^H4sIAAAAAAAAAOVYW2wUVRju9qa1VCW1IpXLZiQagZmdy+7O7oTduC0lLaXXbaGuMWQuZ7pDZ2eWOWfo7oNJLRGD4otRI/gASCIRuUOIGwPKg5JIgmKMCFHERMHUGMQHbjHo2dlStpVAS9fYxH3ZzDn//5//+85/OefQA+UV89c1rrtS5bqveMsAPVDscjGVdEV52YIHS4pry4roPAHXloF5A6WDJb8sgmJCTwqdACZNAwJ3KqEbUHAGQ4RtGYIpQg0KhpgAUECyEI20LBNYihaSlolM2dQJd9PiECGLgaDolSSe53xcEATxqHHTZpcZIvwcy4gsz9M+1u/3SzKeh9AGTQZEooFCBEuzLEl7SYbtommBYwUuQPGcP0a4lwMLaqaBRSiaCDvuCo6ulefrnV0VIQQWwkaIcFNkSbQt0rS4obVrkSfPVniYhygSkQ1Hf9WbCnAvF3Ub3HkZ6EgLUVuWAYSEJ5xbYbRRIXLTmXtw36GaUTjZ7/PLQAIqLbN0QahcYloJEd3Zj+yIppCqIyoAA2kofTdGMRvSKiCj4a9WbKJpsTv712GLuqZqwAoRDXWRZyPt7US4Ho9bptFJYsasFRqMk9G6HtKnyD5GCgKV9PsVSfIGmOGFctaGaR6zUr1pKFqWNOhuNVEdwF6DsdywedxgoTajzYqoKOtRvhw7wiETy25qbhdtFDey+woSmAi383n3HRjRRsjSJBuBEQtjJxyKQoSYTGoKMXbSicXh8EnBEBFHKCl4PP39/VQ/R5lWr4elacbT07IsKsdBQiSwbDbXc/La3RVIzYEiA6wJNQGlk9iXFI5V7IDRS4S5gJf1eod5H+1WeOzoPwbyMHtGZ0ShMoTlvGLQT/N8QFElnyIVIkPCw0HqyfoBJDFNJkSrD6CkLsqAlHGc2Th2NUXgfCrLBVRAKv6gSnqDqkpiH/wkowJAAyBJcjDwf0qU8YZ6FMgWQAWJ9YLF+TItBhP8mp4OvnmJX+ZFT7I1xid6G1vqY83NsLlJWcWoS9lgQ13aGxpvNtwWfL2uYWa68PqFICCb64UjodGECCiTgheVzSRoN3VNTk+tDeYspV20ULrOTuPvKNB1/DcpqJFksqkwFbtgICdYLO4Nd+E61X/UpW6LCmYDd2qhyupDbEBMahTuQ9lcT1OymfCYIj6EZIdXOl67xwjeVsgj2Wmq1wYQYU8UfA4ct5KGizmFW5oyfpVcw8Qgxq+CLxmKLaN7WsjpzBRmU+uNIzihNVOTIUWy9b5JBZ2GLw9TKuQw3BxuTcmd+ikHPAXXyJQFoGlb+MJDtWUPwV1mHzDwkQJZpq4Da/nkikq2mCYSNhIlHUy1qlqA6qKJEzvvlA66Pv/XcTF+b5BnOZ8vMClssnOiWTnVekKhe+EE7jae0S8t4SLnxwy6DtODrkyxy0XzNMksoJ8uL+kuLZlGQFxNKCgaimSmKE1UKVzIDBHZFqD6QDopalZxuUs787V8Ne+NZ8vz9GMjrzwVJUxl3pMPPevWTBnz0IwqlqW9DOaPwxeWGP3ErdlS5tHSR5Zuvlr+a/fJS5eWdh/7o3RucU/naxm6akTI5SorwgFZ9MrMb2ZVd5R3rhg4ewi9sH/jzOs70f1mpvrxtxaudddUP3Xg43nHV0feWb/3pfKaTZ+snea9seoQ2XqZONtzNZXZ/2Oa7104uJ0ZOrJ6V2bfe+dPrvk0/nK6a3ZRY3rbppXHz73uPbP3t9p97fHNczYMvfn+roent2Uu/ND26qEPjj7wzOUO8Fx1R8OfR/bEq2paKr8L//zi7tmpj3buSRA75h7YsDHzJT9r97Ui38UT6pXZqe5URfephthXp98+ePRE7Ket9YuOnr4w/dvPXhcDevPQ3muZrdPnnNq+3nvYXRsyjw39XnvDcu/hOi7Pv/jkjuvMhg/n/nX+3R3z31h4fRsRrJG6UpXfz/iCOXcwt41/A0FQ/3B9EwAA";
  const [products, setProducts] = useState([]);

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
    .then((setProducts));
    
    // .then((data) => {
    //     console.log(data);
    //     const searchResults = data.itemSummaries;
    //     searchResults.map((product) => {
            
    //     })
    //     console.log(searchResults);
    // })
  };

  return (
    <ProductContext.Provider value={{products, getAllProducts}}>
      {props.children}
    </ProductContext.Provider>
  );
};
