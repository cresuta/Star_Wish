import React, { useState } from "react";

export const ProductContext = React.createContext();

export const ProductProvider = (props) => {
  const eBayAuthToken = "v^1.1#i^1#f^0#r^0#p^1#I^3#t^H4sIAAAAAAAAAOVYe2wURRjv9YFpoKBExFAIl6USK+ze7t57w124PkhL6QOulnqIZHZ3tl16t7vszLY9IlqKlsQYQ0Qx+I8V+EMxoNGoMTyioIIoRgiERCLyMOAfCFGjEkOMs3ulXCuBlp6xiffPZWe+75vv95vvMTNsz4TiR/pq+v4ocd2T39/D9uS7XNxEtnhC0bzJBfkzivLYLAFXf09ZT2FvwY8LEEglDWEZRIauIejuTiU1JDiDEcoyNUEHSEWCBlIQCVgS4rH6JQLPsIJh6liX9CTlrq2KUIo37FNCsuQDYkDmOZGMajdsNusRSob+oM/LKaxXETkxHCDzCFmwVkMYaDhC8SzP06yP5vhmLix4gwLHMizrT1DuFmgiVdeICMNSUcddwdE1s3y9vasAIWhiYoSK1sYWxRtjtVXVDc0LPFm2ogM8xDHAFhr6VanL0N0Ckha8/TLIkRbiliRBhChPNLPCUKNC7IYzd+G+QzUvAwD8wRCriLyPD8o5oXKRbqYAvr0f9ogq04ojKkANqzh9J0YJG+JqKOGBrwZiorbKbf8ttUBSVVRoRqjqithjsaYmKlpJxk1dW0YTxszlKmqn4xWttF+W/CRmoEIHArIo+kLcwEIZawM0D1upUtdk1SYNuRt0XAGJ13A4N3wWN0SoUWs0Ywq2PcqS47lBDtmEvamZXbRwu2bvK0wRItzO5513YFAbY1MVLQwHLQyfcCiKUMAwVJkaPunE4kD4dKMI1Y6xIXg8XV1dTJeX0c02D8+ynKe1fklcaocpQBFZO9cz8uqdFWjVgSJBoolUAacN4ks3iVXigNZGRb0hH+/zDfA+1K3o8NF/DGRh9gzNiFxlSEjkgciKAHh9UBQlPhcZEh0IUo/tBxRBmk4BswNiIwkkSEskziwSu6oseP0K7w0pkJYDYYX2hRWFFv1ygOYUCFlo+xMO/Z8SZaShHoeSCXFOYj1ncb5ETaBUsLN1abBuUUAKAo/RkAim2mrqKxN1daiuVl7NKYv5cHVF2hcZaTbcEnxlUiXMNJP1c0GAneu5I6FGRxjKY4IXl3QDNulJVUqPrw32mnITMHG6wkqT7zhMJsnfmKDGDKM2NxU7ZyBHWSzuDnfuOtV/1KVuiQrZgTu+UNn6iBgAhsqQPmTnepqR9JRHB+QQYg+vcrx2DxO8pZBHtNJMmwURJp7I5Bw4YiWVFHOGtDR55CqZhklAjFyFXDJkS8J3tZDTmRnCptrWjtGo1uweCymilewYU9Cp5PIwrkKOwM3gVuXMqZ9xwDOoU2JMiHTLJBceptE+BDfrHVAjRwps6skkNFvGVlTsYppKWRiISTjeqmoOqosKRnfeKex1HfnXcXEBXzgY5nkvOyZsknOiWTXeekKue+Eo7jaeoS8t0Tznx/W69rG9ro/yXS42yNLcPLZ8QsGjhQWTKESqCYOAJot6N6MChSGFTAPYMiHTAdMGUM38CS712xPStaw3nv6V7IODrzzFBdzErCcfdubNmSJuyvQSnmd9HM+FvUGOTbBzbs4Wcg8U3u9uFdJney9Ye0t3fXNy/6Sm5Tuur2NLBoVcrqI8EpB5GxfPqjlenH6iL7Lz9LTDZXu+e2t+qGzmmrKdr8c2zp16tFRX/qx/eu+z1cdaXti84/SXW9edT19fvuDKzx1zNk2bfvXA4bqj509Nn/xedMprm2DnwWJjYbB/7eONVbGZV88tPLh1zfEEvPT8Q1fWf1/24W+hmmV8SdNnH8+NvFx8YPsF7mLb7PdfXffX/Dc+qdj963NTC8HUd7dTm3+4SH3VcLm69NL+r1ccWbHh1KG3e4/NOOM/d7Hh0GVZ3Htf0yurzAR885cPZp+IPZ8o3QJKXyw/+/m2aM2szpNz2HtDBeXVe8qfBO72h4NtnTW757/zVPNP256J6elrn+7bdfXM5i0lVB/6felKz/qXNnyxls9s4995AKTRfRMAAA==";
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
  };

  return (
    <ProductContext.Provider value={{products, getAllProducts, searchQuery, setSearchQuery}}>
      {props.children}
    </ProductContext.Provider>
  );
};
