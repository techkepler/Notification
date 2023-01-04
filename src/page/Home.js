import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axiosPublic from "../api/api";
import Notification from "../firebase/Notification";

const Home = () => {
  const [eventData, setEventData] = useState([]);

  // requestin permission
  // requestin permission

  // fetching data when component render
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await axiosPublic.get("event/get-events");
        setEventData(res.data?.events?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEvent();
  }, []);

  return (
    <main>
      <Notification />
      <h1 className="text-3xl text-red-600 text-center font-bold my-4">
        Welcome To Home Page
      </h1>

      <div className="flex flex-wrap gap-10 justify-center items-center my-20">
        {eventData?.map((event) => (
          <div key={event.id} className="relative  w-96 pb-8 shadow-lg">
            <img
              src={`http://localhost:3000/${event.image[0]}`}
              alt={event.title}
              className="h-56 w-96"
            />
            <p className="px-4 py-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
              eius labore? Impedit explicabo dolorem omnis quaerat unde vitae
              illum laborum commodi alias praesentium molestiae vel
              necessitatibus, asperiores aliquam saepe dolore.
            </p>
            <p className="px-4 my-2">
              <Link
                to={`/book/${event._id}/`}
                className="rounded-md text-xl px-4 py-2 bg-green-600"
              >
                Book Now
              </Link>
            </p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
