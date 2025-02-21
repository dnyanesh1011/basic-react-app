import React, { useState } from "react";
import NewProduct from "./components/NewProduct";
import Products from "./components/Products";
import "./App.css";

const App = () => {
  const initialProducts = [
    { id: "p1", title: "Nirma", amount: 100, date: new Date(2021, 8, 10) },
    { id: "p2", title: "Sirf Excel", amount: 200, date: new Date(2021, 2, 2) },
    { id: "p3", title: "Tide", amount: 130, date: new Date(2021, 11, 28) },
    { id: "p4", title: "Maggi", amount: 450, date: new Date(2021, 5, 5) },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [nextId, setNextId] = useState(5);

  const addProduct = (newProductData) => {
    const newProduct = { id: `p${nextId}`, ...newProductData };
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    setNextId((prevId) => prevId + 1);
  };

  return (
    <div className="app">
      <section className="new-product-section">
        <h2>Add New Product</h2>
        {/* Pass `addProduct` function as a prop */}
        <NewProduct onAddProduct={addProduct} />
      </section>
      <section className="products-section">
        <h2>Products List</h2>
        <Products items={products} />
      </section>
    </div>
  );
};

export default App;
