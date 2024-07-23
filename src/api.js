// src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://petify-backend.onrender.com/api",
});

export default api;
