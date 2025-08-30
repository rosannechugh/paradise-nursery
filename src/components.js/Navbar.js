import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector(state => state.cart.cartItems);

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart ({cartItems.length})</Link>
    </nav>
  );
};

export default Navbar;
