import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProfileProvider } from "./providers/UserProfileProvider";
import ApplicationViews from "./components/ApplicationViews";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ProductProvider } from "./providers/ProductProvider";

function App() {
  return (
    <Router>
      <ProductProvider>
        <UserProfileProvider>
          <Header />
          <ApplicationViews />
          <Footer />
        </UserProfileProvider>
      </ProductProvider>
    </Router>
  );
}

export default App;
