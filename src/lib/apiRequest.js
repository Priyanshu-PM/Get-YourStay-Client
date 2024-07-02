import axios from "axios";

const apiRequest = axios.create({
  // baseURL: "http://localhost:8800/api",
  baseURL: "https://get-yourstay.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;