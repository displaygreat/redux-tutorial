import React from "react";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  return (
    <section className="container">
      <h1>Dashboard</h1>
      <p>This is the dashboard</p>
      <Link to="/posts" className="btn">
        View posts
      </Link>
    </section>
  );
};

export default DashboardPage;
