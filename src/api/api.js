import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWU3YTAwYTc3MDYxM2I5ZjcyYzRmOSIsIm5hbWUiOiJCaXNoYWwgUmF5YW1hamhpIiwiZW1haWxQaG9uZSI6InJheWFtYWpoaWJpc2hhbEBnbWFpbC5jb20iLCJyb2xlIjoic3VwZXJhZG1pbiIsImlhdCI6MTY3MjczMDEwNiwiZXhwIjoxNjcyODE2NTA2LCJpc3MiOiJsb2NhbGhvc3QifQ.i-gznaMlqZroxSYtriulK_hdki3wcWxypj5tPpC0Uc8",
  },
});

export default axiosPublic;
