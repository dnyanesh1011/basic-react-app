import React, { useState } from "react";
import PropTypes from "prop-types";
import ProductDate from "./ProductDate";
import Card from "./Card";
import "./ProductItem.css";

const ProductItem = ({ title: initialTitle, date }) => {
  const [title, setTitle] = useState(initialTitle);

  const clickHandler = () => {
    setTitle("Popcorn");
    console.log("Button clicked");
  };

  return (
    <Card className="product-item">
      <ProductDate date={date} />
      <div className="product-item__description">
        <h2>{title}</h2>
      </div>
      <button onClick={clickHandler}>Add to Cart</button>
    </Card>
  );
};

ProductItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
};

export default ProductItem;
