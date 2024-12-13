import React from "react";
import { Outlet, Link } from "react-router-dom";

function Products() {
  return (
    <>
      <section className="bg-gray">
        <div className="container">
          <div className="breadcrumb">
            <h1>PRODUCTS</h1>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <p>Welcome to products page</p>
        </div>
      </section>
    </>
  );
}

export default Products;
