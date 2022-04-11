import React, { useState } from "react";

export const ProductContext = React.createContext();

export const ProductProvider = (props) => {
  const eBayAuthToken = "v^1.1#i^1#p^1#r^0#f^0#I^3#t^H4sIAAAAAAAAAOVYe2wURRjv9cmjFYPUkqrJuWIC1N3b3dt7bdpLrg9sKfTaXoulia37mG2X3u1udmbbXuKjtgEBwUQRfKDQP3xEG4N/CKYkBIpCogFC1IREJT5CgtFgNIo8Yoyze6VcK4GWnrGJl0s2M/N933zfb77XDD2QP3/lptpNl4pcBdnDA/RAtsvFLKTn5+eV3ZGTXZqXRacRuIYHlg3kDub8UA6FRNzgmwE0dA0Cd38irkHemawgLFPjdQGqkNeEBIA8kvhYZO0anqVo3jB1pEt6nHDXVVcQLBMSOT/+B30g4AM0ntWuyWzRKwhJZkRBESQ6FPD52EAQr0NogToNIkFDmJ9mWZLmSIZpYUI8F+BZL0UzvnbCvQ6YUNU1TELRRNhRl3d4zTRdb66qACEwERZChOsiq2LRSF11TUNLuSdNVngchxgSkAUnj6p0GbjXCXEL3Hwb6FDzMUuSAISEJ5zaYbJQPnJNmdtQ34EaCKziFxWGlWkvTbNiRqBcpZsJAd1cD3tGlUnFIeWBhlSUvBWiGA1xA5DQ+KgBi6irdtufJkuIq4oKzAqipjKyPtLYSISr8Lypa80kRsx8RIXdZKyyjfTJko8RQ0Ah/X5ZFLkgM75RSto4zFN2qtI1WbVBg+4GHVUCrDWYio03DRtMFNWiZkRBtkZpdCwzgSHTbh9q6hQt1K3Z5woSGAi3M7z1CUxwI2SqooXAhISpCw5EFYRgGKpMTF10fHHcffphBdGNkMF7PH19fVSfl9LNLg9L04ynbe2amNQNEgKBae1YT9Grt2YgVccUCWBOqPIoaWBd+rGvYgW0LiLsDXIsx43jPlmt8NTZf0yk2eyZHBGZihAf8Pr93iAtswElBEAgExESHndSj60HEIUkmRDMHoCMuCABUsJ+ZmHfVWXe61NYb1ABpOwPKSQXUhRS9Ml+klEAoAEQRSkU/D8FynRdPQYkE6CM+HrG/HyN2g4Tgd62pkD9Kr8UEDxGQ3sg0VW7tqq9vh7W18kbGGU1G6qpTHIV042GGxpfFVcxMi14/0wAYMd65kCo1SEC8qzMi0m6ARr1uCol59YBe025UTBRstJK4nEMxOP4MytTI4ZRl5mMnTEjZ5gsbs/uzFWq/6hK3dAqaDvu3LLK5odYgGCoFK5DdqwnKUlPeHQBNyH2dKejtXsK4Q2JPKKVpLosABHWRMZ94LSZVJzMKVzS5OmzpAomNmL6LPiSIVsSuq2NnMpMYTTVrm4EZ7Rn/2xAEa14z6ycTsWXhznlctjclN2qnOr6Kcd4CvZKlAmgbpn4wkNF7Sa4Re8BGm4pkKnH48BcN7ukYifTRMJCghgHcy2rZiC7qMLM+p3cQden/7pdjJ8LBWg/x3lnZZvkdDSdc60mZLoWzuBu45n80hLOcn7MoOsQPegazXa56ABNMmX0ivyc1tycQgLibEJBQZNFvZ9SBYXCiUwTkGUCqgckDUE1s/Nd6pdfSJfT3niGH6WXTrzyzM9hFqY9+dD3Xl/JYxaVFLEszTEME+ICrLedfuD6ai5zd+6Sc1FvVc6WwO8fntW/+d7YWHBpZ+t+umiCyOXKy8IOmdVctjly19UfP35uX1/bRcCGn13WssUfTmws7B0tKad33ek/8PzYpYLiUydrS89deOrs/vPPLP/r7ePNW/XOqjeOPrb9s1jp0FjrofMlx17IL/ftCS05eXHbmbNHlOJfzfuDR31bS86P/NS+d97nw3Bn8WJYffjbjt3rnz5xsK1gW+TKB0MLhjoeX7H48vZPsr56dwe3qLBL4ftfLd1Hn7vvybLFvx079c7pkV3ogLayaXnn0JU/j1zoLXkpuqN38+GHfnlllCy456PdW3/eaxVeeA/NO/G6a7SoI9g29mLxWweP9Dwx8t3ShhPb3yx7f9EeuTVx+vjYgZavX2YePran5o/VxEhTx4Nc2Zng1QWvRVPH+Dea1Z/MfRMAAA==";

  const getProduct = (userInput) => {
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
        console.log(data);
        const searchResults = data.itemSummaries;
        // searchResults.map((product) => {
            
        // })
        console.log(searchResults);
    })
  };

  return (
    <ProductContext.Provider value={{getProduct}}>
      {props.children}
    </ProductContext.Provider>
  );
};
