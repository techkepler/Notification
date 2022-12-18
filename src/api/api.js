import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://192.168.1.100:3000/",
  timeout: 600,
});

export default axiosPublic;
