import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user?.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
});

export default api;


// ab me ye chah raha ku ki jo home page ha uske hero section me jo explore property button se search page pr jare ha na vese hi niche ek search bar ha uske bhi button click pr search page pr navigate hora ha to us search page ka pura backend banana sikha do 
