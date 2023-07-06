import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Offers from "./components/Offers.jsx";
import Store from "./components/Store.jsx";
import Products from "./components/Products.jsx";
import ImageSlider from "./components/ImageSlider.jsx";
import Footer from "./components/Footer.jsx";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Offers />
      <Store />
      <Products />
      <ImageSlider />
      <Footer />
    </div>
  );
};

export default App;
