import "./App.css";
// import Nav from "./components/nav/Nav"
// import ProductCard from './components/productCard/ProductCard';
// import ProductCard2 from './components/productCard/ProductCard2';
// import Slider from "./components/slider/Slider"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./pages/home/Home";
import Nav from "./components/nav/Nav";
import Dashboard from "./pages/admin/Dashboard";
import Footer from "./components/footer/Footer";
import ShoppingCart from "./pages/shoppingCart/ShoppingCart";
import Company from "./pages/Company/Company";

function App() {
   return (
      <BrowserRouter>
         <Nav />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrito" element={<ShoppingCart />} />
            <Route path="/empresa" element={<Company />} />
            <Route path="/admin" element={<Dashboard />} />
         </Routes>
         <Footer />
      </BrowserRouter>
   );
}

export default App;
