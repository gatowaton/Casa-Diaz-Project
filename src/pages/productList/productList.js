import React from "react";
import { Pagination, Stack } from "@mui/material";
import ProductCard from "../../components/productCard/ProductCard";
import "./productList.css";

function ProductList() {
  const productos = [
    { id: 1, title: "Producto 1", price: 100 },
    { id: 2, title: "Producto 2", price: 150 },
  ];

  return (
    <div className="grid-container">
      {productos.map((product) => (
        <ProductCard key={product.id} title={product.title} price={product.price} />
      ))}
      <div className="pagination-bar">
        <Stack spacing={2}>
            <Pagination count={10} />
        </Stack>
      </div>

    </div>
  );
}

export default ProductList;
