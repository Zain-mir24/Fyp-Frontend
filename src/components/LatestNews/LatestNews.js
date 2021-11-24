import { React, useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./LatestNews.css";
import axios from "axios";

export default function LatestNews() {
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const { data: response } = await axios.get(
  //         "http://localhost:9000/admin/LatestNews"
  //       );
  //       setData(response);
  //       console.log(data);
  //     } catch (error) {
  //       console.error(error.message);
  //     }
  //     setLoading(false);
  //   };

  //   fetchData();
  // }, []);

  return <div></div>;
}
