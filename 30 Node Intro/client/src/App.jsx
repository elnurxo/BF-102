import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  function handleClick(id) {
    fetch(`http://localhost:8080/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }
  function handleDelete(id) {
    if (window.confirm("are you sure to delete?")) {
      fetch(`http://localhost:8080/products/${id}`, {
        method: "DELETE",
      });
      setProducts(products.filter((product)=>product.id!==id));
    }
  }
  return (
    <>
      <ul>
        {products &&
          products.map((item) => {
            return (
              <li key={item.id}>
                <button onClick={() => handleClick(item.id)}>
                  {item.name}
                </button>
                , {item.price}
                <button onClick={() => handleDelete(item.id)}>delete</button>
              </li>
            );
          })}
      </ul>
      <hr />
      {product && <h1>NAME: {product.name}</h1>}
    </>
  );
}

export default App;
