import React from "react";
import PropTypes from "prop-types";
import ProductItem from "./ProductItem";
import Card from "./Card";
import "./Products.css";

const Products = ({ items }) => {
  return (
    <Card className="products">
      {items.map((item, index) => (
        <ProductItem key={index} title={item.title} amount={item.amount} date={item.date} />
      ))}
    </Card>
  );
};

Products.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      amount: PropTypes.number,
      date: PropTypes.instanceOf(Date).isRequired,
    })
  ).isRequired,
};

export default Products;
