import React from "react";
import { useState, useEffect } from "react";
import "./Nav.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PinDropIcon from "@mui/icons-material/PinDrop";
import Logo from "../../img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import MyContext from "../../Context/MyContext";
import TotalItems from "../../pages/shoppingCart/TotalItems";

function Nav() {
   const [isOpen, setIsOpen] = useState(false);
   const [isScrolling, setIsScrolling] = useState(false);
   const { setSearchQuery, lstCategoria, setProductosMostrados, products, cart } = useContext(MyContext);
   const [inputValue, setInputValue] = useState("");
   const navigate = useNavigate();

   const toggleDropdown = () => {
      setIsOpen(!isOpen);
   };

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 0) {
            setIsScrolling(true);
         } else {
            setIsScrolling(false);
         }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

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
      <nav className={`mega-navbar ${isScrolling ? "navbar-main scrolling" : ""}`}>
         <div className="mega-navbar-block-0">
            <div className="container">
               <div className="mega-navbar-block-0-1">
                     <Link to="/admin">
                        <samp>Dashboard</samp>
                     </Link>
                  <div>
                     <PinDropIcon />
                     <samp>Sucursales</samp>
                  </div>
                  <div>
                     <a target="blank" href="https://w.app/CasaDiazSpa">
                        <WhatsAppIcon />
                     </a>
                     <a target="blank" href="https://w.app/CasaDiazSpa">
                        <samp>Contactanos</samp>
                     </a>
                  </div>
               </div>
            </div>
         </div>

         <div className="navbar-main">
            <div className="container">
               <div className="mega-navbar-block-1">
                  <Link to={`/`}>
                     <img src={Logo} alt="Logo" />
                  </Link>
                  <div className="nav-input-container">
                     <form onSubmit={handleSearch}>
                        <input
                           className="nav-input"
                           value={inputValue}
                           type="text"
                           placeholder="¿Que Necesitas?"
                           onChange={getValue}
                        />
                        <SearchIcon id="search-icon" htmlColor="black" onClick={handleSearch} />
                     </form>
                  </div>

                  <div className="mega-navbar-block-1-2">
                     <Link to="/login">
                        <input type="button" value="Ingresar" />
                     </Link>
                     <Link className="seeCarrito" to={"/carrito"}>
                        <ShoppingCartIcon htmlColor="black" fontSize="large" className="cart-icon" />

                        {cart.length > 0 ? <TotalItems /> : null}

                     </Link>
                  </div>
               </div>
            </div>
            <div className="mega-navbar-container">
               <ul className="mega-navbar-menu">
                  <li
                     className={`mega-navbar-dropdown ${isOpen ? "active" : ""}`}
                     onMouseEnter={toggleDropdown}
                     onMouseLeave={toggleDropdown}
                     onSelect={handleSelect}>
                     <Link to={`/productos-filtrados/${lstCategoria[0]}`}>{lstCategoria[0]}</Link>
                     <div className="mega-navbar-dropdown-content">
                        <div className="mega-navbar-dropdown-column">
                           <ul>
                              <li>
                                 <Link to={`/productos-filtrados/${lstCategoria[0]}`}>{lstCategoria[0]}</Link>
                              </li>
                              <li>
                                 <Link to={`/productos-filtrados/${lstCategoria[0]}`}>{lstCategoria[0]}</Link>
                              </li>
                              <li>
                                 <Link to={`/productos-filtrados/${lstCategoria[0]}`}>{lstCategoria[0]}</Link>
                              </li>
                           </ul>
                        </div>
                        <div className="mega-navbar-dropdown-column">
                           <ul>
                              <li>
                                 <Link to={`/productos-filtrados/${lstCategoria[0]}`}>{lstCategoria[0]}</Link>
                              </li>
                              <li>
                                 <Link to={`/productos-filtrados/${lstCategoria[0]}`}>{lstCategoria[0]}</Link>
                              </li>
                              <li>
                                 <Link to={`/productos-filtrados/${lstCategoria[0]}`}>{lstCategoria[0]}</Link>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </li>
                  <li
                     className={`mega-navbar-dropdown ${isOpen ? "active" : ""}`}
                     onMouseEnter={toggleDropdown}
                     onMouseLeave={toggleDropdown}>
                     <Link to={`/productos-filtrados/${lstCategoria[1]}`}>{lstCategoria[1]}</Link>
                     <div className="mega-navbar-dropdown-content">
                        <div className="mega-navbar-dropdown-column">
                           <ul>
                              <li>
                                 <Link to={`/productos-filtrados/${lstCategoria[1]}`}>{lstCategoria[1]}</Link>
                              </li>
                              <li>
                                 <Link to={`/productos-filtrados/${lstCategoria[1]}`}>{lstCategoria[1]}</Link>
                              </li>
                              <li>
                                 <Link to={`/productos-filtrados/${lstCategoria[1]}`}>{lstCategoria[1]}</Link>
                              </li>
                           </ul>
                        </div>
                        <div className="mega-navbar-dropdown-column">
                           <ul>
                              <li>
                                 <Link to={`/productos-filtrados/${lstCategoria[1]}`}>{lstCategoria[1]}</Link>
                              </li>
                              <li>
                                 <Link to={`/productos-filtrados/${lstCategoria[1]}`}>{lstCategoria[1]}</Link>
                              </li>
                              <li>
                                 <Link to={`/productos-filtrados/${lstCategoria[1]}`}>{lstCategoria[1]}</Link>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </li>
                  <li
                     className={`mega-navbar-dropdown ${isOpen ? "active" : ""}`}
                     onMouseEnter={toggleDropdown}
                     onMouseLeave={toggleDropdown}>
                     <Link to={`/productos-filtrados/${lstCategoria[2]}`}>{lstCategoria[2]}</Link>
                     <div className="mega-navbar-dropdown-content">
                        <div className="mega-navbar-dropdown-column">
                           <ul>
                              <li>
                                 <Link to={`/productos-filtrados/${lstCategoria[2]}`}>{lstCategoria[2]}</Link>
                              </li>
                              <li>
                                 <Link to={`/productos-filtrados/${lstCategoria[2]}`}>{lstCategoria[2]}</Link>
                              </li>
                              <li>
                                 <Link to={`/productos-filtrados/${lstCategoria[2]}`}>{lstCategoria[2]}</Link>
                              </li>
                           </ul>
                        </div>
                        <div className="mega-navbar-dropdown-column">
                           <ul>
                              <li>
                                 <Link to={`/productos-filtrados/${lstCategoria[2]}`}>{lstCategoria[2]}</Link>
                              </li>
                              <li>
                                 <Link to={`/productos-filtrados/${lstCategoria[2]}`}>{lstCategoria[2]}</Link>
                              </li>
                              <li>
                                 <Link to={`/productos-filtrados/${lstCategoria[2]}`}>{lstCategoria[2]}</Link>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </li>
                  <li
                     className={`mega-navbar-dropdown ${isOpen ? "active" : ""}`}
                     onMouseEnter={toggleDropdown}
                     onMouseLeave={toggleDropdown}>
                     <Link to={`/productos-filtrados/${lstCategoria[3]}`}>{lstCategoria[3]}</Link>
                     <div className="mega-navbar-dropdown-content">
                        <div className="mega-navbar-dropdown-column">
                           <ul>
                              <li>
                                 <Link to={`/productos-filtrados/${lstCategoria[3]}`}>{lstCategoria[3]}</Link>
                              </li>
                              <li>
                                 <Link to={`/productos-filtrados/${lstCategoria[3]}`}>{lstCategoria[3]}</Link>
                              </li>
                              <li>
                                 <Link to={`/productos-filtrados/${lstCategoria[3]}`}>{lstCategoria[3]}</Link>
                              </li>
                           </ul>
                        </div>
                        <div className="mega-navbar-dropdown-column">
                           <ul>
                              <li>
                                 <Link to={`/productos-filtrados/${lstCategoria[3]}`}>{lstCategoria[3]}</Link>
                              </li>
                              <li>
                                 <Link to={`/productos-filtrados/${lstCategoria[3]}`}>{lstCategoria[3]}</Link>
                              </li>
                              <li>
                                 <Link to={`/productos-filtrados/${lstCategoria[3]}`}>{lstCategoria[3]}</Link>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </li>
                  <li>
                     <a href="/contacto">Contactanos</a>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
}

export default Nav;
