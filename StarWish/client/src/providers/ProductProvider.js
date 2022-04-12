import React, { useState } from "react";

export const ProductContext = React.createContext();

export const ProductProvider = (props) => {
  const eBayAuthToken = "v^1.1#i^1#f^0#r^0#p^1#I^3#t^H4sIAAAAAAAAAOVYa2wUVRTu9oWFogRUBNRsBowWnNmZ2e3OzsBu3D6w2+2LboW2RmAed9qhszPD3Dtt94emDymYYEKi8IMQbSQ+EhNiwJBgREI0BBITCFR+KIkPMBgNQvgjkGi8My1lWwm0dI1N3B87ufeec+453z2ve+m+4pKVQzVDf8z3zckf7qP78n0+Zh5dUly06uGC/KVFeXQWgW+4b0Vf4UDBL2ugmNYtoRlAyzQg8PemdQMK3mSUcGxDMEWoQcEQ0wAKSBZS8fo6gaVowbJNZMqmTvgTVVGC5YMSLUfkYBj/MXw5njVuy2wxowTHcXyIk1WVFiMAcBxeh9ABCQMi0UCYn2ZZkg6RDNvCcAIbERiW4ni6nfCvBzbUTAOTUDQR89QVPF47S9d7qypCCGyEhRCxRHxtqjGeqKpuaFkTyJIVG8MhhUTkwImjSlMB/vWi7oB7bwM9aiHlyDKAkAjERneYKFSI31bmAdT3oI6UM5GQJAdVnlM5Rs4JkmtNOy2ie6vhzmgKqXqkAjCQhjL3AxSDIW0BMhobNWARiSq/+1nniLqmasCOEtUV8bZ4UxMRq8Tztmk0kxgwe4MGO8lURStZrsjljMQDlQyHFUkKRZixjUaljaE8aadK01A0FzPobzBRBcBag8nYMFnYYKJGo9GOq8jVKJuOv41hJNzununoITqo03CPFaQxEH5veP8TGOdGyNYkB4FxCZMXPIiihGhZmkJMXvRcccx7emGU6ETIEgKBnp4eqidImXZHgKVpJtBaX5eSO0FaJFxaN9Y9eu3+DKTmmSIDzAk1AWUsrEsvdlWsgNFBxIKREBsKjeE+Ua3Y5Nl/TGTZHJgYELkKELk8hHNQkFFllVcYkc9FhMTGnDTg6gEkMUOmRbsLIEsXZUDK2M8c7LuaIgTLVTYYUQGphHmVDPGqSkrlSphkVABoACRJ5iP/p0CZqqungGwDlBtfz5Wf12ntMM11t67jkmvDMicGrIZ2Lt1RU1/ZnkzCZELZwqi1LF9dkQlFpxoNdzW+UtcwMi14/5wA4MZ6zkCoMSECyozMS8mmBZpMXZMzs+uAg7bSJNooU+Fk8DgFdB1/ZmRq3LISOcrYuTJymsniwezOYaX6b6rUXa2CruPOLqtcfogFiJZGuXXIjXVKNtMBU8RNiDu9ydPaP5nwbkQByclQHQ6ACGui4D5wykwaTuYULmnK1FlGCyY2Yuos+I6hODJ6oI28ykxhNLWOTgSntWfvTECRHL1rRk6n4bvDrHI5bO6o3Zoy2vVTnvEU7JYpG0DTsfF9h2p0m+AWswsYuKVAtqnrwF4/s6TiJtN02kGipIPZllVzkF00cZr9TuGA79S/bRcTDvFcJBTi2RnZJnsdzabZVhNyXQuncbcJTHxoieV5P2bAd5Qe8B3J9/lojiaZVXRZccFLhQWlBMTZhIKioUhmL6WJKoUTmSEixwZUF8hYombnF/u0b0fkG1lPPMOv0E+MP/KUFDDzsl586CfvrBQxjyyez7J0iGEZjo0wbDu9/M5qIfN44aO/HatqOTU8cGZz/q7BWJTsOle23aLnjxP5fEV52B/zYOuKDcltzMWOHQVbW1cOxpTBshORzNa3vvvh5SM3vspf9U31gZN0/a3iwdJzbQd3v5co3dGdXuTsLL5Q/+PrS4/1P7f7+KHryt4lZwJPzY2agf3RlTuXb79yqe3qiWesk2XJOaU63b5n2dcHbnxw4OCCV7/IDO1bOPfP/gsZe+Oijcs2N7x4OKw8vLv2uHT1tVP2pyP9p4/Cyp2Nu27ueej83s8+f7776aHmfXUjL1z/+Fk49/zZm2/Xkg1NA+/L3y8+dGnb6o7F20eM/acv/dz/7pWFfVU7arY1NdcuGNxyEb7x5mXJf/HsO18eL9WW/E5XfRJNPna59nBx6tqHfX99VFK38NdbP61updqusYOjx/g3qJOe+nwTAAA=";
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
