import React, {useState} from "react";
import ProductCard from "../../components/productCard/ProductCard";
import "./productList.css";
import Filter from "../../components/filter/filter";
import Pagination from "../../components/pagination/pagination"



function ProductList() {

  const initialProducts = [{ProductCard}];

  const [products, setProducts] = useState(initialProducts);
  const [productsPerPage, setProductsPerPage] = useState(16);
  const [currentPage, setCurrentPage] = useState(1);

  return (
  <div>
    
    <div className="product-list-container">
      <div className="product-filter">
        Filtrar por
        <br/>
        <Filter/>
      </div>
      <div className="product-grid-container">
        <div className="grid-row">
          <ProductCard />        
        </div>
       
      </div>

     <div>
      <Pagination
        productsPerPage={productsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalProducts={products.length} 
      />
      </div>
    </div>
  </div>
  );
}

export default ProductList;
