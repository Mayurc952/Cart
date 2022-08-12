import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiTwotoneFunnelPlot } from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";

const Navbar = ({ priceData, handleFilter }) => {
  const items = useSelector((state) => state.cart);

  return (
    <div className="navMain">
      <span style={{ color: "white", background: "blue" }}>Ecommerse</span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          {" "}
          Cart
          <BsFillCartPlusFill />
          {items.length}
        </Link>
        <Link className="navLink" to="/">
          {" "}
          Filter
          <AiTwotoneFunnelPlot />
        </Link>

        <select onChange={(e) => handleFilter(e.target.value)}>
          {priceData.map((item) => (
            
            <option value={item.value}>{item.value}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Navbar;
