import React from 'react'
import { useState, useEffect } from "react";
import "./Nav.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PinDropIcon from '@mui/icons-material/PinDrop';
import Logo from '../../img/logo.png';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);

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
  
  return (
<nav className={`mega-navbar ${isScrolling ? "navbar-main scrolling" : ""}`}>
  <div className='mega-navbar-block-0'>
    <div className='mega-navbar-block-0-1'>
      <div>
        <PinDropIcon />
        <samp>Sucursales</samp>
      </div>
      <div>
        <WhatsAppIcon />
        <samp>Contactanos</samp>
      </div>
    </div>
  </div>
  <div className='navbar-main'>
    <div className="mega-navbar-block-1">
      <img src={Logo} alt="" />
      <div className='nav-input-container'>
        <input className='nav-input' type="text" placeholder='¿Que Necesitas?' />
        <SearchIcon htmlColor='black' />
      </div>
      <div className='mega-navbar-block-1-2'>
        <input type="button" value="Ingresar" />
        <ShoppingCartIcon htmlColor='black' fontSize='large' className='cart-icon' />
      </div>
    </div>
    <div className="mega-navbar-container">
      <ul className="mega-navbar-menu">
        <li><a href="/">Home</a></li>
        <li><a href="/">Iluminacion</a></li>
        <li
          className={`mega-navbar-dropdown ${isOpen ? "active" : ""}`}
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <a href="/">Electricidad</a>
          <div className="mega-navbar-dropdown-content">
            <div className="mega-navbar-dropdown-column">
              <h3>Category 1</h3>
              <ul>
                <li><a href="/">Service 1</a></li>
                <li><a href="/">Service 2</a></li>
                <li><a href="/">Service 3</a></li>
              </ul>
            </div>
            <div className="mega-navbar-dropdown-column">
              <h3>Transmisión</h3>
              <ul>
                <li><a href="/">Service 4</a></li>
                <li><a href="/">Service 5</a></li>
                <li><a href="/">Service 6</a></li>
              </ul>
            </div>
          </div>
        </li>
        <li><a href="/">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Nav