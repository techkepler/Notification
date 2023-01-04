import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./page/Home";
import BookNow from "./page/BookNow";
import Payment from "./page/Payment";
import SuccessPage from "./page/SuccessPage";
import FailurePage from "./page/FailurePage";
import Login from "./page/Login";
import LandingPage from "./page/LandingPage";
import Pdf from "./page/Pdf";
import EsweaSuccessPage from "./page/EsweaSuccess";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home/" element={<Home />} />
        <Route path="/book/:id" element={<BookNow />} />
        <Route path="/pay-now/" element={<Payment />} />
        <Route path="/success/" element={<SuccessPage />} />
        <Route path="/eswea/success/" element={<EsweaSuccessPage />} />
        <Route path="/failure/" element={<FailurePage />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/pdf/" element={<Pdf />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
