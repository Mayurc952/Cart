import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.cart);
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };
  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {!product.length > 0 ? (
          <div>Please Add Some Products</div>
        ) : (
          product.map((product) => (
            <div key={product.id} className="cartCard">
              <img src={product.image} alt="Pimg" />
              <h5>Name:{product.title}</h5>
              <h5>Price: {product.price}</h5>
              <h5>Qty:01 </h5>
              <button className="btn" onClick={() => handleRemove(product.id)}>
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
