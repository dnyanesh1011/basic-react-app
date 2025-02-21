import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ className = "", children }) => {
  return <div className={`card ${className}`.trim()}>{children}</div>;
};

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Card;
