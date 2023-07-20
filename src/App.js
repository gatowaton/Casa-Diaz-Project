import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";


=======
>>>>>>> v2
import "bootstrap-icons/font/bootstrap-icons.css";

import Home from "./pages/home/Home";
import Nav from "./components/nav/Nav";
import Dashboard from "./pages/admin/Dashboard";
import Footer from "./components/footer/Footer";
import ShoppingCart from "./pages/shoppingCart/ShoppingCart";
import Company from "./pages/Company/Company";
import UserInfo from "./pages/user/UserInfo";
import Contact from "./pages/contact/Contact";
import CambiosDevoluciones from "./pages/cambiosYDevoluciones/CambiosDevoluciones";

function App() {
   return (
      <BrowserRouter>
         <Nav />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrito" element={<ShoppingCart />} />
            <Route path="/empresa" element={<Company />} />
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/usuario" element={<UserInfo />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/cambiosdevoluciones" element={<CambiosDevoluciones />} />
         </Routes>
         <Footer />
      </BrowserRouter>
   );
}

export default App;
