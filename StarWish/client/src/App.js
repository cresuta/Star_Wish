import React, {useContext} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProfileProvider, UserProfileContext } from "./providers/UserProfileProvider";
import ApplicationViews from "./components/ApplicationViews";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ProductProvider } from "./providers/ProductProvider";
import { MyWishListProvider } from "./providers/MyWishListProvider";

function App() {
  const {isLoggedIn } = useContext(UserProfileContext);

  return (
    <Router>
      <ProductProvider>
          <MyWishListProvider>
            {isLoggedIn ? <Header /> : ""}
            <ApplicationViews />
            <Footer />
          </MyWishListProvider>
      </ProductProvider>
    </Router>
  );
}

export default App;
