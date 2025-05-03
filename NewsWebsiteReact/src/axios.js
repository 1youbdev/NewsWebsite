// axios.js
import axios from "axios";

const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
};
const instance = axios.create({
  baseURL: "http://127.0.0.1:8000", // ou http://localhost:8000
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-XSRF-Token": getCookie("XSRF-TOKEN"),
  },
});

export default instance;
