import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosPublic from "../api/api";
import { StateProvider } from "../context/Provider";

const initalData = {
  ticket: 1,
  fullName: "",
  email: "",
  phone: "",
};

const BookNow = () => {
  const { bookedId, setBookedId } = StateProvider();
  const { id } = useParams();
  const navigate = useNavigate();
  const [eventData, setEventData] = useState({});
  const [formData, setFormData] = useState(initalData);
  const [msg, setMsg] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  // fetching booked event data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosPublic.get(`event/get-events/${id}`);
        console.log(res);
        setEventData(res.data?.events);
        setTotalPrice(res.data?.events.price);
        if (res?.status === 201) {
          setMsg("Event Booked Successfully. Please Proceed For Payment.");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  //   handling change data
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //   handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axiosPublic.post("event/add-booked-event/", {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        ticket: formData.ticket,
        totalPrice: totalPrice * parseInt(formData.ticket),
        event: eventData._id,
      });
      setBookedId(res.data?.bookedEvent._id);
      localStorage.setItem("bookedId", res.data?.bookedEvent._id);
      if (res.status === 201) {
        setMsg(res.data.msg);
      }

      setTimeout(() => {
        setMsg("");
        navigate(`/pay-now/`);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("booke Id", bookedId);

  return (
    <>
      {msg && <p className="bg-green-600 text-center py-2">{msg}</p>}
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
                    onChange={handleChange}
                    value={formData.ticket}
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
                    onChange={handleChange}
                    required
                    value={formData.fullName}
                  />
                </div>

                <div className="email w-[48%]">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    required
                    id="email"
                    name="email"
                    className="form-input w-full"
                    onChange={handleChange}
                    value={formData.email}
                  />
                </div>

                <div className="phone w-[48%]">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    required
                    id="phone"
                    name="phone"
                    className="form-input w-full"
                    onChange={handleChange}
                    value={formData.phone}
                  />
                </div>
              </form>

              <h2 className="text-3xl font-semibold my-6">
                Total Price: Rs.{totalPrice * parseInt(formData.ticket)}
              </h2>

              <div>
                <button
                  onClick={handleSubmit}
                  className="px-2 py-2 bg-green-600 font-semibold rounded-md"
                  disabled={
                    !formData.ticket ||
                    !formData.fullName ||
                    !formData.email ||
                    !formData.phone
                  }
                >
                  Book Now
                </button>
              </div>
            </div>

            <div className="w-[40%]">
              <img
                src={`http://localhost:3000/${eventData?.image[0]}`}
                alt={eventData?.title}
              />
              <h1 className="text-3xl font-semibold my-2">{eventData.title}</h1>
              <p className="text-lg font-semibold">
                Locaiton: <span>{eventData.location}</span>
              </p>

              <p className="text-lg font-semibold">
                Date: <span>{new Date(eventData.date).toDateString()}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookNow;
