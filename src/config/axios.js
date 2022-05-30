import axios from "axios";

const customInstance = axios.create({
  baseURL: "https://cryptic-taiga-42129.herokuapp.com/",
  // baseURL: "https://graphql-cannaby-consumer.herokuapp.com/",
  // baseURL: "http://localhost:4000/",
  headers: { Accept: "application/json" },
});

export default customInstance;
