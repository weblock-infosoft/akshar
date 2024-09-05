import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Home } from "./pages/home";

import { Header } from "./component/header";
import { AboutUs } from "./pages/AboutUs";
import OurProducts from "./pages/OurProducts";
import { ContactUs } from "./pages/contact-us";
import { Footer } from "./component/footer";

import ScrollToTop from "./component/ScrollToTop/ScrollToTop";
import GoToTop from "./component/GoToTop";
import Productdetail2 from "./pages/productdetail/Productdetail2";
import ProductDetails1 from "./pages/productdetail/ProductDetails1";



function App() {
  const location = useLocation();
  const noNavFooterPaths = [];

  const hideHeader = noNavFooterPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<AboutUs />} />
        <Route path="/ourproducts" element={<OurProducts />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/productdetail2/:id/" element={<Productdetail2/>} />
        <Route path="/productdetail3/:id/" element={<ProductDetails1/>} />
      </Routes>
      <GoToTop />
      <Footer />
    </>
  );
}

export default App;
