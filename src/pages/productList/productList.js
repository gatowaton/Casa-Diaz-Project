import React from "react";
import ProductCard from "../../components/productCard/ProductCard";
import "./productList.css";
import Filter from "../../components/filter/filter";
import { Checkbox, Pagination, Stack } from "@mui/material";



function ProductList() {

  return (
  <div>
    <div className="product-filter">
    Filtrar por
      <br/>
      <Filter/>
      

    </div>
    <div className="grid">
      <ProductCard />
    </div>
  </div>
  );
}

export default ProductList;
