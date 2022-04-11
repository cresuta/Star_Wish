import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { UserProfileProvider } from "./providers/UserProfileProvider";
import ApplicationViews from './components/ApplicationViews';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <UserProfileProvider>
        <Header />
        <ApplicationViews />
        <Footer />
      </UserProfileProvider>
    </Router>
  );
}

export default App;
