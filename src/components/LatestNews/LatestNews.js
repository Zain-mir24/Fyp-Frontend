import { React, useState, useEffect } from "react";

import "./LatestNews.css";
import axios from "axios";
import { Carousel } from "antd";
import { Select } from "antd";
import { Card } from "antd";

const { Option } = Select;

export default function LatestNews() {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:9000/admin/latestnews");
      await setData(res.data);
      console.log(data, "TESTING");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(getData, []);

  return (
    <div id="carousel">
      <Carousel>
        {data.map((item) => {
          return (
            <div>
              <div
                className="carousel-parent"
                style={{
                  backgroundImage:
                    "url('http://localhost:9000/uploads/" + item.file + "')",
                }}
              ></div>
            </div>
          );
        })}
        {/* <div>
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
        </div> */}
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
