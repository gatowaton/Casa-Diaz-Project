import { useState, useContext } from "react";
import React from "react";
import "./NavResponsive.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logoR from "../../../img/logo2.png";
import { Link, useNavigate } from "react-router-dom";
import MyContext from "../../../Context/MyContext";
import TotalItems from "../../../pages/shoppingCart/TotalItems";

const customIconStyle = {
   fontSize: "50px",
};

function NavResponsive() {
   const { setSearchQuery, lstCategoria, setProductosMostrados, products, cart } = useContext(MyContext);
   const [click, setClick] = useState(false);
   const menuClick = () => setClick(!click);
   const [clickSeach, setClickSearch] = useState(false);
   const [inputValue, setInputValue] = useState("");
   const searchClick = () => setClickSearch(!clickSeach);
   const navigate = useNavigate();

   const handleSearch = (event) => {
      event.preventDefault();
      setSearchQuery(inputValue);
      navigate(`/productos`);
   };

   const getValue = (e) => {
      setInputValue(e.target.value);
   };

   const handleSelect = (value) => {
      if (value !== "") {
         const nuevosProductos = products.filter((producto) => producto.CATEGORIA === value);
         setProductosMostrados(nuevosProductos);
      } else {
         setProductosMostrados(products);
      }
   };

   return (
      <div className="nav-padding">
         <nav className="nav-resp-container">
            <div className="nav-resp-bar">
               <div className="nav-resp-bar-btn" onClick={menuClick}>
                  <MenuIcon style={customIconStyle} />
               </div>

               <Link to={"./"} className="nav-resp-bar-img">
                  <img src={logoR} alt={logoR} />
               </Link>

               <Link className="carrito-responsive" to="./carrito">
                  <ShoppingCartIcon style={customIconStyle} />
                  <span>{cart.length > 0 ? <TotalItems /> : null}</span>
               </Link>

               <div onClick={searchClick} className="nav-resp-bar-zoom">
                  <SearchIcon style={customIconStyle} />
               </div>
            </div>
            <div>
               <div className={clickSeach ? "nav-resp-bar-input" : "nav-resp-bar-input clicked"}>
                  <div>
                     <form className="nav-resp-bar-from" onSubmit={handleSearch}>
                        <input type="text" placeholder="¿Que Necesitas?" onChange={getValue} value={inputValue} />
                     </form>
                  </div>
               </div>
            </div>

            <div className={click ? "responsive-categories" : "responsive-categories clicked"}>
               <ul>
                  <li onSelect={handleSelect}>
                     <Link to={`/productos-filtrados/${lstCategoria[0]}`}>{lstCategoria[0]}</Link>
                  </li>
                  <li>
                     <Link to={`/productos-filtrados/${lstCategoria[1]}`}>{lstCategoria[1]}</Link>
                  </li>
                  <li>
                     <Link to={`/productos-filtrados/${lstCategoria[2]}`}>{lstCategoria[2]}</Link>
                  </li>
                  <li>
                     <Link to={`/productos-filtrados/${lstCategoria[3]}`}>{lstCategoria[3]}</Link>
                  </li>
               </ul>
            </div>
         </nav>
      </div>
   );
}

export default NavResponsive;
