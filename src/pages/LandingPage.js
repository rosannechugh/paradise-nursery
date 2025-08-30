import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => (
  <div className="landing">
    <h1>Welcome to Paradise Nursery</h1>
    <Link to="/products">
      <button>Shop Now</button>
    </Link>
  </div>
);

export default LandingPage;
