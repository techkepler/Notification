import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axiosPublic from "../api/api";

const SuccessPage = () => {
  const search = useLocation().search;
  const pidx = new URLSearchParams(search).get("pidx");
  const purchase_order_id = new URLSearchParams(search).get(
    "purchase_order_id"
  );
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const sendData = async () => {
      try {
        const res = await axiosPublic.post("payment/web/verification/khalti", {
          pidx: pidx,
          purchase_order_id: purchase_order_id,
        });

        if (res.status === 200) {
          setMsg("Payment Successfull");
        }
        console.log(res.data);
      } catch (error) {
        console.log(error);
        setMsg(error?.response?.data?.error?.msg);
      }
    };
    sendData();
  }, [pidx, purchase_order_id]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-green-600">{msg}</h1>
      <Link to="/">Home </Link>
    </div>
  );
};

export default SuccessPage;
