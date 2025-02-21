import React from "react";
import PropTypes from "prop-types";
import "./ProductDate.css";

const ProductDate = ({ date }) => {
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <div className="product-date">
      <div className="product-date__month">{month}</div>
      <div className="product-date__year">{year}</div>
      <div className="product-date__day">{day}</div>
    </div>
  );
};

ProductDate.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};

export default ProductDate;
