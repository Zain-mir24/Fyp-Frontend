import { React, useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./LatestNews.css";
import axios from "axios";
import { Carousel } from "antd";
import { Select } from "antd";
import { Card } from "antd";

const { Option } = Select;

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
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <div id="carousel">
      <Carousel>
        <div>
          <div
            className="carousel-parent"
            style={{
              backgroundImage: "url('./Images/PoorChild.jpg')",
            }}
          ></div>
        </div>
        <div>
          <div
            className="carousel-parent"
            style={{
              backgroundImage: "url('./Images/Rescuse.jpg')",
            }}
          ></div>
        </div>
      </Carousel>
      <div id="filter-box">
        {" "}
        <Select
          defaultValue="Select Category"
          style={{
            width: 180,
            borderRadius: "0px",
            backgroundColor: "transparent",
          }}
          onChange={handleChange}
        >
          <Option value="All">All</Option>
          <Option value="Disaster">Disaster</Option>
          <Option value="Orphans">Orphans</Option>
          <Option value="Loan Plans">Loan Plans</Option>
          <Option value="Help Appeals">Help Appeals</Option>
        </Select>
      </div>
    </div>
  );
}
