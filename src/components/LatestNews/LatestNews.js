import { React, useState, useEffect, useRef } from "react";

import "./LatestNews.css";
import axios from "axios";
import { Carousel } from "antd";
import { Select } from "antd";
import { Card } from "antd";
import { Store } from 'react-notifications-component';
import { io } from "socket.io-client";

const dotenv = require("dotenv");

dotenv.config();

const { Option } = Select;

export default function LatestNews() {
  const socket = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:4000");
    socket.current.on("getnotification", (data) => {
      Store.addNotification({
        title: `Campaign is made Global Reach`,
        message: `The name of campaign is ${data.name}`,
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });
    })
    socket.current.on("getDonation", (data) => {
      Store.addNotification({
        title: `Donation is made by ${data.userName}`,
        message: `Donation is recieved for${data.campaignname}`,
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });
    })
  }, [])
  const [notif, setNotification] = useState()

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
    // viewData()
    getCategory();
  }, []);

  return (
    <div className="row" id="carousel">
      <div className="col-lg-6 col-sm-6 col-xs-6 left" >
        <div className="align">
          <h1 style={{ verticalAlign: "center", color: "white", textAlign: "left" }}>
            <span
              style={{ fontSize: 50, paddingRight: "4px" }}>Support</span>
            Your <br></br> Community
          </h1>

          <p className="textofMain">
            We are making  endless efforts to help people
            around the world overcome hardships they face,
            which could and will not be possible without
            your help !
          </p>
          <a href="/Campaign">
            <div style={{ borderColor: "green", border: "1px solid #279040", width: "300px", height: "60px" }}>
              <h1 style={{ color: "#279040", paddingTop: "0.3em" }}>
                Our Campaign
              </h1>
            </div>
          </a>
        </div>


      </div>
      <div className="col-lg-6  col-sm-6 col-xs-6 right" >

      </div>
    </div>
  );
}




{/* <Carousel>
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
        })} */}
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
{/* </Carousel>
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
      </div> */}