import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
// import { ToastContainer, toast } from "react-toastify";

import { requestForToken, onMessageListener } from "./firebase";

const Notification = () => {
  const [notification, setNotification] = useState({
    title: "",
    body: "",
    image: "",
  });

  // const notifyToast = () => toast(ToastDisplay);
  const notify = () => toast(<ToastDisplay />);
  function ToastDisplay() {
    return (
      <div>
        <img
          src={`http://localhost:3000/${notification?.image}`}
          alt="Notification"
          className="w-12 h-12"
        />
        <p>
          <b>{notification?.title}</b>
        </p>
        <p>{notification?.body}</p>
      </div>
    );
  }
  requestForToken()
    .then((token) => console.log(token))
    .catch((err) => console.log(err));

  useEffect(() => {
    if (notification?.title) {
      notify();
    }
  }, [notification]);

  onMessageListener()
    .then((payload) => {
      console.log(payload, "payload");
      setNotification({
        title: payload?.data?.title,
        body: payload?.data?.body,
        image: payload?.data?.image,
      });
    })
    .catch((err) => console.log("failed: ", err));

  return <Toaster className=" top-5 " />;
};

export default Notification;
