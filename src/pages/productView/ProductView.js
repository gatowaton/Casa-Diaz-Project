import React from "react";
import Nav from "../../components/nav/Nav";
import Bobina from "../../img/bobina.jpg";
import Interruptor from "../../img/interruptor.png";
import Casadiazlogo from "../../img/casadiazlogo.png";

import "./ProductView.css";

function ProductView() {
  return (
    <div>
      <Nav />
      <div className="productView-block">
      <div
        id="carouselExampleIndicators"
        className="carousel slide productView"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={Bobina}
              className="d-block w-100 img-productView"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={Interruptor}
              className="d-block w-100 img-productView"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={Casadiazlogo}
              className="d-block w-100 img-productView"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="productView-info">
        <div>
            <span>sku: 5456498</span>
            <h1>
            Cable solarflex H1Z2Z2-K 4mm Rojo
            Libre De Halogeno 1800 VDC
            </h1>
        </div>
        <div>
            <button>Add to Cart</button>
        </div>
      </div>
      </div>

    </div>
  );
}

export default ProductView;
