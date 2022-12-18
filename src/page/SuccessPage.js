import React from "react";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-green-600">Payment Successfull</h1>
      <Link to="/">Home </Link>
    </div>
  );
};

export default SuccessPage;
