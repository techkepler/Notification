import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="my-6 flex flex-col justify-center items-center">
      <p>
        <Link to="/login/" className="px-5 py-2 rounded-md bg-green-600">
          Login
        </Link>
      </p>
      <h1 className="text-3xl font-semibold text-red-600 text-center my-10">
        Welocme To My Event
      </h1>
    </div>
  );
};

export default LandingPage;
