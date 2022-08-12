import React from "react";
import { add } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const Product = ({ filterdata }) => {
  const dispatch = useDispatch();
  
  const handleAdd = (product) => {
    dispatch(add(product));

  };
 
return (
    <div className="productsWrapper">
      {filterdata.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="img" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button onClick={() => handleAdd(product)} className="btn">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Product;
