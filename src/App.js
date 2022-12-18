import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./page/Home";
import BookNow from "./page/BookNow";
import Payment from "./page/Payment";
import SuccessPage from "./page/SuccessPage";
import FailurePage from "./page/FailurePage";
import Login from "./page/Login";
import LandingPage from "./page/LandingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home/" element={<Home />} />
        <Route path="/book/:id" element={<BookNow />} />
        <Route path="/pay-now/" element={<Payment />} />
        <Route path="/success/" element={<SuccessPage />} />
        <Route path="/failure/" element={<FailurePage />} />
        <Route path="/login/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
