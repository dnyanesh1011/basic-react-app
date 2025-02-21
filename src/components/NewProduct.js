import React from "react";
import PropTypes from "prop-types";
import "./NewProduct.css";
import ProductForm from "./ProductForm";

const NewProduct = ({ onAddProduct }) => {
  const saveProduct = (product) => {
    console.log("I am inside NewProduct");
    console.log(product);

    if (typeof onAddProduct === "function") {
      onAddProduct(product);
    } else {
      console.error("onAddProduct is not a function!");
    }
  };

  return (
    <div className="new-product-form">
      <ProductForm onSaveProduct={saveProduct} />
    </div>
  );
};

NewProduct.propTypes = {
  onAddProduct: PropTypes.func.isRequired,
};

export default NewProduct;
