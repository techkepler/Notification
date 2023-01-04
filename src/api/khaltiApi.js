import axios from "axios";

const khalitApi = axios.create({
  baseURL: "https://a.khalti.com/api/v2/",
  headers: {
    Authorization: "Key <LIVE_SECRET_KEY>",
  },
});

export default khalitApi;
