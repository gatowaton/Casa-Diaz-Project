import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";

import emailjs from "emailjs-com";

import Home from "./pages/home/Home";
import Nav from "./components/nav/Nav";
import Dashboard from "./pages/admin/Dashboard";
import Footer from "./components/footer/Footer";
import ShoppingCart from "./pages/shoppingCart/ShoppingCart";
import Company from "./pages/Company/Company";
import UserInfo from "./pages/user/UserInfo";
import Contact from "./pages/contact/Contact";
import CambiosDevoluciones from "./pages/cambiosYDevoluciones/CambiosDevoluciones";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import { AuthProvider } from "./Context/AuthContext";
import ProductView from "./pages/productView/ProductView";

import VistaProductos from "./pages/VistaProductos/VistaProductos";
import PaginaPago from "./pages/paginaPago/PaginaPago";
import Btnws from "./components/btnws/Btnws";
import VistaProductosFiltrados from "./pages/vistaProductosFiltrados/VistaProductosFiltrados";

emailjs.init("xMUu3Z8O9QKDWSVeO");

function App() {
   return (
      <AuthProvider>
         <BrowserRouter>
            <Nav />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="register" element={<Register />} />
               <Route path="login" element={<Login />} />
               <Route path="/carrito" element={<ShoppingCart />} />
               <Route path="/empresa" element={<Company />} />
               <Route path="/admin" element={<Dashboard />} />
               <Route path="/usuario" element={<UserInfo />} />
               <Route path="/contacto" element={<Contact />} />
               <Route path="/cambiosdevoluciones" element={<CambiosDevoluciones />} />
               <Route path="/productos" element={<VistaProductos />} />
               <Route path="/paginapago" element={<PaginaPago />} />
               <Route path="/productDetails/:id" element={<ProductView />} />
               <Route path="/productos-filtrados/:Categoria" element={<VistaProductosFiltrados />} />
            </Routes>
            <Btnws />
            <Footer />
         </BrowserRouter>
      </AuthProvider>
   );
}

export default App;
