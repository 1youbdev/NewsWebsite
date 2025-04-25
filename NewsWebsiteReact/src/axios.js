// axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000", // ou http://localhost:8000
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
});

export default instance;
