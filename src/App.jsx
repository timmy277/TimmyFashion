import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home/Home";
import ShopCategory from "./pages/ShopCategory/ShopCategory";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart.jsx";
import Login from "./pages/Login/Login.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenBanner from "./assets/banner/men_banner.png";
import WomenBanner from "./assets/banner/women_banner.png";
import KidsBanner from "./assets/banner/kids_banner.png";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import About from "./pages/About/About.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Shop from "./pages/Shop/Shop.jsx";

const App = () => {
  // const [orderPopup, setOrderPopup] = React.useState(false);
  // const handleOrderPopup = () => {
  //   setOrderPopup(!orderPopup);
  // };

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
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home active="true" />} />
          <Route
            path="/Men"
            element={<ShopCategory banner={MenBanner} category="Men" />}
          />
          <Route
            path="/Women"
            element={<ShopCategory banner={WomenBanner} category="Women" />}
          />
          <Route
            path="/Kids"
            element={<ShopCategory banner={KidsBanner} category="Kids" />}
          />
          <Route path="/MenProducts" element={<Shop category="Men" />} />
          <Route path="/WomenProducts" element={<Shop category="Women" />} />
          <Route path="/KidsProducts" element={<Shop category="Kids" />} />
          <Route path="/AllProducts" element={<Shop />} />

          <Route path="/Product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Shop" element={<Shop />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
