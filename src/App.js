//import './App.css';
import Contact from './pages/contact/Contact';
import CambiosDevoluciones from './pages/cambiosYDevoluciones/CambiosDevoluciones.js';
//import Nav from "./components/nav/Nav"
// import ProductCard from './components/productCard/ProductCard';
// import ProductCard2 from './components/productCard/ProductCard2';
// import Slider from "./components/slider/Slider"
//import ProductView from './pages/productView/ProductView';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import User_info from './pages/user/User_info';


function App() {
  return (
    <div className="App">
      <CambiosDevoluciones/>
      <Contact/>
      <User_info/>



    </div>
  );
}

export default App;
