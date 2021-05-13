import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <div className="container nav-container">
        <Link to="/" className="nav-link">
          Dashboard
        </Link>
        <Link to="/posts" className="nav-link">
          Posts
        </Link>
      </div>
    </nav>
  );
};
