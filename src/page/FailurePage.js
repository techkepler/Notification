import React from "react";
import { Link } from "react-router-dom";

const FailurePage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-red-600">Payment Failed</h1>
      <Link to="/">Home </Link>
    </div>
  );
};

export default FailurePage;
