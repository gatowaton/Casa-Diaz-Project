import "./App.css";
// import Nav from "./components/nav/Nav"
// import ProductCard from './components/productCard/ProductCard';
// import ProductCard2 from './components/productCard/ProductCard2';
// import Slider from "./components/slider/Slider"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Home from './pages/home/Home';
import Nav from "./components/nav/Nav"
import Dashboard from "./pages/admin/Dashboard";

function App() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/admin" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
