import React, { useState, useContext } from "react";
import ProductCard from "../../components/productCard/ProductCard";
import "./productList.css";
import Filter from "../../components/filter/filter";
import Pagination from "../../components/pagination/pagination";
import MyContext from "../../Context/MyContext";

function ProductList() {
  const { products } = useContext(MyContext);

  const productsPerPage = 16;
  const [currentPage, setCurrentPage] = useState(1);

  // Logic to calculate the index of the first and last products on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div>
      <div className="product-list-container">
        <div className="product-filter">
          Filtrar por
          <br />
          <Filter />
        </div>
        <div className="product-grid-container">
          <div className="grid-row">
            {/* Map over the currentProducts array to render product cards */}
            {currentProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      <div>
        {/* Pass the necessary props to the Pagination component */}
        <Pagination
          productsPerPage={productsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalProducts={products.length} // Use the length of the unfiltered products
        />
      </div>
    </div>
  );
}

export default ProductList;
