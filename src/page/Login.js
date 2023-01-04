import React, { useState } from "react";
import axiosPublic from "../api/api";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { requestForToken } from "../firebase/firebase";

const Login = () => {
  const [emailPhone, setEmailPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const notify = (msg) => {
    toast(msg);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = await requestForToken();
      await axiosPublic.post("auth/login/", {
        emailPhone: emailPhone,
        password: password,
        token: token,
      });

      notify("Login Successfully");

      setTimeout(() => {
        navigate("/home/");
      }, 2000);
    } catch (error) {
      console.log(error);
      notify(error.response?.data?.error.msg);
    }
  };
  return (
    <div
      className="flex justify-center items-center my-20
    "
    >
      <form className="w-96 bg-slate-300 px-4 py-4 rounded-md flex flex-col gap-6">
        <div className="emailPhone">
          <label htmlFor="emailPhone">Email</label>
          <input
            type="text"
            id="emailPhone"
            name="emailPhone"
            className="form-input w-full"
            value={emailPhone}
            required
            onChange={(e) => setEmailPhone(e.target.value)}
          />
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            name="password"
            className="password w-full"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="login-btn">
          <button
            className="bg-sky-500 px-4 py-2 rounded-md"
            onClick={handleSubmit}
            disabled={!emailPhone || !password}
          >
            Login
          </button>
        </div>
      </form>{" "}
      <ToastContainer />
    </div>
  );
};

export default Login;
