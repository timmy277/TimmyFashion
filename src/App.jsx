import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopRatedProducts from "./components/TopRatedProducts/TopRatedProducts";
import Banner from "./components/Banner/Banner";
import Subcribe from "./components/Subcribe/Subcribe";
const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <TopRatedProducts />
      <Banner />
      <Subcribe />
    </div>
  );
};

export default App;
