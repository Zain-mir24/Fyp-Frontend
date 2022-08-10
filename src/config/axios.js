import axios from "axios";

const customInstance = axios.create({
  // baseURL: "http://localhost:9000/",
  baseURL: "https://pacific-refuge-71507.herokuapp.com/",
  // baseURL: "http://localhost:4000/",
  headers: { Accept: "application/json" },
});

export default customInstance;
