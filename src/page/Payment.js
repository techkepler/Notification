import React, { useEffect, useState } from "react";
import axiosPublic from "../api/api";
import { StateProvider } from "../context/Provider";
import ESwea from "./eSewa";

const Payment = () => {
  const { bookedId } = StateProvider();
  const [eventData, setEventData] = useState({});
  console.log("bookeevent paymemnt", bookedId);

  // fetching booked event data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosPublic.get(
          `event/get-booked-event/${localStorage.getItem("bookedId")}`
        );
        console.log(res);
        setEventData(res.data?.bookedEvent);
        // if (res?.status === 201) {
        //   setMsg("Event Booked Successfully. Please Proceed For Payment.");
        // }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [bookedId]);

  //   //   handling change data
  //   const handleChange = (e) => {
  //     setFormData({ ...formData, [e.target.name]: e.target.value });
  //   };

  //   //   handle form submit
  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     try {
  //       const res = await axiosPublic.post("event/add-booked-event/", {
  //         fullName: formData.fullName,
  //         email: formData.email,
  //         phone: formData.phone,
  //         ticket: formData.ticket,
  //         totalPrice: totalPrice * parseInt(formData.ticket),
  //         event: eventData._id,
  //       });
  //       if (res.status === 201) {
  //         setMsg(res.data.msg);
  //       }

  //       setTimeout(() => {
  //         setMsg("");
  //       }, 2000);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  return (
    <>
      {Object.keys(eventData).length > 0 && (
        <div>
          <div className="flex justify-center items-center my-20 bg-slate-200 py-16 ">
            <div className="  px-10 w-[40%]">
              <form className="flex flex-wrap gap-6">
                <div className="ticket w-[48%]">
                  <label htmlFor="ticket">Ticket</label>
                  <select
                    name="ticket"
                    id="ticket"
                    className="form-select text-black w-full"
                    value={eventData.ticket}
                    disabled
                    required
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
                <div className="fullname w-[48%]">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="form-input w-full"
                    disabled
                    value={eventData.fullName}
                  />
                </div>

                <div className="email w-[48%]">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input w-full"
                    value={eventData.email}
                    disabled
                  />
                </div>

                <div className="phone w-[48%]">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-input w-full"
                    value={eventData.phone}
                    disabled
                  />
                </div>
              </form>

              <h2 className="text-3xl font-semibold my-6">
                Total Price: Rs.{eventData.totalPrice}
              </h2>

              <div>
                <ESwea data={eventData} />
              </div>
            </div>

            <div className="w-[40%]">
              <img
                src={`http://localhost:3000/${eventData?.event?.image[0]}`}
                alt={eventData?.event?.title}
              />
              <h1 className="text-3xl font-semibold my-2">
                {eventData?.event.title}
              </h1>
              <p className="text-lg font-semibold">
                Locaiton: <span>{eventData?.event?.location}</span>
              </p>

              <p className="text-lg font-semibold">
                Date:{" "}
                <span>{new Date(eventData?.event?.date).toDateString()}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Payment;
