import React, { useState } from "react";

export const ProductContext = React.createContext();

export const ProductProvider = (props) => {
  
  const eBayAuthToken = "v^1.1#i^1#p^1#r^0#f^0#I^3#t^H4sIAAAAAAAAAOVYW2wUVRjubi+kIGiAYFEeNkMhKszszOzOzu6E3WRbWlt7hS0FNyrO5Uw7dHdmmHOm7YqNTQ2NhPAiQUjAQEigBIT4QLgpJCaYCuiDt3BRlHglJEYNiRojiWdml7KtBFq6xibuy2bO+f///N93/ss5h+4vK39qsG7w95mead49/XS/1+NhZtDlZaVLZhV7HystovMEPHv6K/tLBoqvL4NiOmUKKwE0DR0CX286pUPBHYwStqULhgg1KOhiGkAByUIi3tQosBQtmJaBDNlIEb765VFCBpGAEuQVXuIUllPCeFS/bbPNiBISAKrCg0iYV1glwtF4HkIb1OsQiTqKEizNsiQdJJlAG8MJLCdwHBWgmSThawcW1Awdi1A0EXPdFVxdK8/Xe7sqQggshI0Qsfp4baIlXr+8prltmT/PVizHQwKJyIajv6oNBfjaxZQN7r0MdKWFhC3LAELCH8uuMNqoEL/tzAO471LNiyItKxEmJCsyHWSlglBZa1hpEd3bD2dEU0jVFRWAjjSUuR+jmA1pHZBR7qsZm6hf7nP+VthiSlM1YEWJmqr4s/HWViJWjcctQ19JYsas1RrsJBNVa0hOkTlGigCVDIUUSQqGmdxCWWs5msesVG3oiuaQBn3NBqoC2Gswlhsmjxss1KK3WHEVOR7ly/E5DtlIKOlsanYXbdSpO/sK0pgIn/t5/x0Y0UbI0iQbgRELYydciqKEaJqaQoyddGMxFz69MEp0ImQKfn9PTw/VE6AMq8PP0jTjX9PUmJA7QVoksKyT61l57f4KpOZCkQHWhJqAMib2pRfHKnZA7yBigXCQDQZzvI92KzZ29B8DeZj9ozOiUBkSkkIKHVB4npPDfJhhCpEhsVyQ+h0/gCRmyLRodQFkpkQZkDKOMxvHrqYIAU5lA2EVkEooopLBiKqSuCaGSEYFgAZAkuRI+P+UKOMN9QSQLYAKEusFi/NGLQnTfPeaFXxDbUjmRb/ZnOTTHXVN1cmGBthQr6xj1GfYSE1VJhgdbzbcFXx1SsPMtOH1C0GAk+uFI6HOgAgok4KXkA0TtBopTc5MrQ0OWEqraKFMlZ3B3wmQSuG/SUGNm2Z9YSp2wUBOsFg8GO7Cdar/qEvdFRV0AndqoXL0ITYgmhqF+5CT6xlKNtJ+Q8SHEGd4reu1b4zgXYX8kp2hOmwAEfZEwefAcStpuJhTuKUp41fJNkwMYvwq+JKh2DJ6oIXczkxhNrWOTgQntGbvZEiR7FTXpIJOw5eHKRVyGG4Wt6ZkT/2UC56C3TJlAWjYFr7wUC3OIbjN6AI6PlIgy0ilgNU+uaLiFNN02kailAJTraoWoLpo4sTOOyUDnvP/Oi4mFIyEQwGO4yaFTXZPNGunWk8odC+cwN3GP/qlJVbk/pgBz2l6wHPS6/HQPE0yS+gny4pXlRQ/REBcTSgo6opk9FKaqFK4kOkisi1AdYGMKWqWt8yjXflM/iPvjWfP83TFyCtPeTEzI+/Jh15wZ6aUefjRmSxLB5kAw7F4s5P0wjuzJcy8krl7p+8TFt08t/Xq8LscfOTDH1464P2enjki5PGUFuGALKo8ts3frvw6+PPiQ0bfiV3PvXE8OK8vevryxlcvJi9tn58Mh7edOfjxiU1btfaNL+xMrK842/l1b3fFDsW3/+iBj04O3tqnVfy1/cjmDRsq65pbDqenXWjyXlvdkdiy6ytv8EsfLD8+a/26SxSdWfRE+OTQp8YvPw7HbzEzvmAbv726dEFbn3r46W/oF/v4s+yhoSNvLlVjs6/N50NNF1jPuVOD1y9Ri4++Bqe/N8uyTsGXNyPfB0dfP7J7eL/3zOzKjjnU0PDQzne2PL7i8vmFV4b/3D/72Kr3+9puzP3EpHasHF5UezOy+7fu+d8dqNnxyts35rS/tXHTXHHOwYvNWyuDP91YMhTa+7lJZbfxb+Uo9sF9EwAA";
  
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  let [cartCount, setCartCount] = useState(0);

  const updateCartCount = () => {
    let newClicks = ++cartCount;
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
