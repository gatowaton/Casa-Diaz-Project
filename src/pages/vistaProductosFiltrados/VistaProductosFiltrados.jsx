import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import MyContext from "../../Context/MyContext";
import { Link } from "react-router-dom";
import "../../components/productCard/ProductCard.css";

const VistaProductosFiltrados = () => {
   const { Categoria } = useParams();
   const { productosMostrados, setCart, cart } = useContext(MyContext);

   // Filtra los productos según la categoría seleccionada
   const productosFiltrados = productosMostrados.filter((producto) => producto.Categoria === Categoria);

   const buyProducts = (product) => {
      setCart([...cart, product]);
   };

   return (
      <div className="container .container-margin">
         <p className="pt-2 ruta-page">
            {" "}
            <Link to={`/`} style={{ color: "black", textDecoration: "none" }}>
               Inicio
            </Link>{" "}
            / {Categoria}
         </p>
         <div className="product-card-container">
            {productosFiltrados.map((product) => (
               <div className="product-card" key={product._id}>
                  <img className="card-img-size" src={product.Foto} alt="" />
                  <div className="product-card-content">
                     <span className="sku_marca">SKU {product.CodigoProducto}</span>
                     <h2 className="product-card-title">{product.Titulo}</h2>
                     <span className="sku_marca">Marca</span>
                     <span className="product-card-price">
                        ${product.PrecioVentaBruto}
                        <span className="iva_color ps-1">IVA INCLUIDO</span>
                     </span>
                  </div>
                  <div className="btn-agregar pt-3">
                     <div>
                        <button onClick={() => buyProducts({ ...product, quantity: 1 })} className="product-card-button">
                           Agregar al Carrito
                        </button>
                     </div>
                     <div>
                        <Link to={`/productDetails/${product._id}`}>
                           <button className="product-card-button">Detalles</button>
                        </Link>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default VistaProductosFiltrados;
