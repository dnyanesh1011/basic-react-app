import { useState } from "react";
import "./ProductForm.css";

const ProductForm = ({ onSaveProduct }) => {
  const [newTitle, setTitle] = useState("");
  const [newDate, setDate] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!newTitle || !newDate) {
      alert("Please enter all fields");
      return;
    }

    const productData = {
      title: newTitle,
      date: new Date(newDate),
    };

    if (typeof onSaveProduct === "function") {
      onSaveProduct(productData);
    } else {
      console.error("onSaveProduct is not a function!");
    }

    setTitle("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-product_controls">
        <div className="new-product_control">
          <label>Title</label>
          <input type="text" value={newTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-product_control">
          <label>Date</label>
          <input
            type="date"
            value={newDate}
            onChange={dateChangeHandler}
            min="2023-01-01"
            max="2023-12-12"
          />
        </div>
        <div className="new-product_button">
          <button type="submit">Add Product</button>
        </div>
      </div>
    </form>
  );
};

export default ProductForm;
