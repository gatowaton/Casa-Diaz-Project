import React from "react";
import { Pagination, Stack } from "@mui/material";
import ProductCard from "../../components/productCard/ProductCard";
import "./productList.css";

function ProductList() {
  const productos = [
    {
      id: 1,
      title: "Producto 1",
      price: 100,
      sku: "ABC123",
      brand: "Marca 1",
      imageUrl: "https://d2mef2yp6u2brg.cloudfront.net/media/catalog/product/cache/72a5c437458c21665dee46f62d259e92/0/0/cable-eco-revi-lh-25mm-h07z1-k-bco-750vlineal-70c-revi.jpg",
    },
    {
      id: 2,
      title: "Producto 2",
      price: 150,
      sku: "DEF456",
      brand: "Marca 2",
      imageUrl: "https://d2mef2yp6u2brg.cloudfront.net/media/catalog/product/cache/72a5c437458c21665dee46f62d259e92/0/0/cable-eco-revi-lh-25mm-h07z1-k-bco-750vlineal-70c-revi.jpg",
    },
    // ...
  ];

  return (
    <div className="grid-container">
      {productos.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          sku={product.sku}
          brand={product.brand}
          imageUrl={product.imageUrl}
        />
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
