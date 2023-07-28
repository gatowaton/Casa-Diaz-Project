import "./App.css";
//import Nav from "./components/nav/Nav"
// import ProductCard from './components/productCard/ProductCard';
// import ProductCard2 from './components/productCard/ProductCard2';
// import Slider from "./components/slider/Slider"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Home from './pages/home/Home';
import Nav from "./components/nav/Nav"
import Dashboard from "./pages/admin/Dashboard";
//import Registro from "./pages/registro/Registro";
import InicioSesion from "./pages/iniciosesion/InicioSesion";
//import DespachoRetiro from "./pages/despachoretiro/DespachoRetiro";

function App() {
  return (
    <BrowserRouter>
    <Nav/>
    {/* <Registro/>  */}
    <InicioSesion/> 
    {/* <DespachoRetiro/>  */}
       <Routes>
        <Route path="/" element={<Home/>} />
         <Route path="/admin" element={<Dashboard/>} />
         {/* <Route path="/registro" element={<Registro/>} /> */}
          

      </Routes> *
    </BrowserRouter>
  );
}

export default App;
