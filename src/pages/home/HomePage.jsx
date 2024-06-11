import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        <h2 className="text-center">Welcome to React Redux Practices App</h2>
        <div className="col-md-6">
          <div className="text-center">
            <Link to="/counter" className="p-1 m-2">
              Counter App
            </Link>
            <Link to="/todo" className="p-1 m-2">
              Todo App
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
