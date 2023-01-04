import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axiosPublic from "../api/api";

const EsweaSuccessPage = () => {
  const search = useLocation().search;
  const rid = new URLSearchParams(search).get("refId");
  const pid = new URLSearchParams(search).get("oid");

  const amt = new URLSearchParams(search).get("amt");

  const [msg, setMsg] = useState("");

  useEffect(() => {
    const sendData = async () => {
      try {
        const res = await axiosPublic.post("payment/web/verification/eswea", {
          transactionId: rid,
          productId: pid,
          amount: amt,
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
  }, [amt, pid, rid]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-green-600">{msg}</h1>
      <Link to="/">Home </Link>
    </div>
  );
};

export default EsweaSuccessPage;
