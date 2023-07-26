import "./App.css";
// import Nav from "./components/nav/Nav"
// import ProductCard from './components/productCard/ProductCard';
// import ProductCard2 from './components/productCard/ProductCard2';
// import Slider from "./components/slider/Slider"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Home from "./pages/home/Home";
import Nav from "./components/nav/Nav";
import Dashboard from "./pages/admin/Dashboard";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import { AuthProvider } from "./Context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="/admin" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
