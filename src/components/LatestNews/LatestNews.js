import { React, useState, useEffect } from "react";

import "./LatestNews.css";
import axios from "axios";
import { Carousel } from "antd";
import { Select } from "antd";
import { Card } from "antd";
const dotenv = require("dotenv");

dotenv.config();

const { Option } = Select;

export default function LatestNews() {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  const [categoryData, setCategoryData] = useState([]);
  const [assignCategory, setAssignCategory] = useState("");
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:9000/admin/LatestNews/");
      await setData(res.data);
      console.log(data, "TESTING");
    } catch (err) {
      console.log(err);
    }
  };

  async function handleChange(value) {
    console.log(`selected ${value}`);
    setAssignCategory(value);
    const res = await axios.get(
      "http://localhost:9000/admin/LatestNews/" + value
    );
    console.log(res.data);
    await setData(res.data);
  }
  const getCategory = async () => {
    try {
      const res = await axios.get("http://localhost:9000/admin/sendcategory");
      await setCategoryData(res.data);
      console.log(res, "HELOW");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
    getCategory();
  }, []);

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
                  position: "relative",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                  }}
                >
                  <h1 style={{ color: "white" }}>
                    {item.name} <br />
                    {item.description}
                  </h1>
                  <button>Need to Check Services ?</button>
                </div>
              </div>
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
          {categoryData.map((item) => {
            return (
              <Option value={item._id} style={{ color: "black" }}>
                <p style={{ color: "black" }}> {item.name} </p>
              </Option>
            );
          })}
        </Select>
      </div>
    </div>
  );
}
