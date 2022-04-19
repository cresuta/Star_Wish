import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../providers/ProductProvider";
import { CartProduct } from "./CartProduct";
import { MyWishListContext } from "../../providers/MyWishListProvider";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const CartList = () => {
  const { myWishListProducts, getAllProductsFromWishListId } =
    useContext(ProductContext);
  const { myCurrentCart } = useContext(MyWishListContext);
  const currentUser = JSON.parse(sessionStorage.getItem("userProfile"));

  useEffect(() => {
    getAllProductsFromWishListId(currentUser.id)
  });

  // const [myWishList, setMyWishList] = useState({
  //   name: "MyWishList",
  //   createDateTime: Date().split(" G")[0],
  //   numberOfProducts: "",
  //   totalCost: 0,
  //   userProfileId: currentUser.id,
  // });

  // const handleWishListSave = (e) => {
  //   e.preventDefault();
  //   console.log(myWishListProducts);
  // };

  return (
    <>
      <div className="cart-search-results">
        {myWishListProducts?.map((p) => (
          <CartProduct key={p.id} product={p} />
        ))}
      </div>
      {myWishListProducts.length > 0 ? (
        <Link to={"/mywishlists"}>
          <Button className="save-wishlist">Save Wish List</Button>
        </Link>
      ) : (
        ""
      )}
    </>
  );
};
