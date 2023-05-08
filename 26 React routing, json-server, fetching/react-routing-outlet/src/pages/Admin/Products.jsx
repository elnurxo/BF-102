import React, { useEffect, useState } from "react";
import { deleteProductByID, getAllProducts } from "../../api/httprequests";
import { Link } from "react-router-dom";

const Products = () => {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    getAllProducts().then((data) => {
      setProducts(data);
    });
  }, [setProducts,products]);
  return (
    <ul>
      {products &&
        products.map((product) => {
          return (
            <li key={product.id}>
              <Link to={`${product.id}`}>{product.name}</Link>, {product.price}${" "}
              <button onClick={()=>{
                if (window.confirm(`are you sure to delete ${product.name}?`)) {
                  deleteProductByID(product.id); //deleting from API
                  let filteredProducts = products.filter((item)=>item.id!==product.id);
                  setProducts(filteredProducts); // RENDERING STATE
                }
              }}>Delete</button>
              <button><Link to={`/admin/products/edit/${product.id}`}>Edit</Link></button>
            </li>
          );
        })}
    </ul>
  );
};

export default Products;
