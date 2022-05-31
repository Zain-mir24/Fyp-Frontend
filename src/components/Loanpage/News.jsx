import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Headers/Header";
import "./Latestnews.css";
import { Card } from "antd";

import world from "../../Images/newWorld.jpeg";
import abouut from "../../Images/abouut.png";
import { Button } from "antd";
import axios from "axios";
import url from "../../config/axios"
// import { Carousel } from 'react-responsive-carousel';
const { Meta } = Card;

function News() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const getData = async () => {
    try {
      const res = await url.get("/admin/LatestNews");
      await setData(res.data);
      console.log(data, "TESTING");

      await setName(res.data[0].name);
      await setDescription(res.data[0].description);
      await setFile(res.data[0].file);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Header active="news" />
      <div
        style={{
          backgroundImage: `url(${world})`,

          backgroundSize: "cover",
        }}
        className="mydiv"
      >
        <div className="alignNews">
          <h1 className="title">
            <span className="newsHeading">Know</span> Whats Happening{" "}
          </h1>
          <p style={{ color: "#929292" }}>
            We are making endless efforts to help people <br></br>
            around the world overcome hardships they face,<br></br>
            which could and will not be possible without <br></br>
            your help !
          </p>
          <a href="/Campaign">
            <button
              style={{
                marginTop: "10px",
                borderColor: "green",
                border: "1px solid #279040",
                padding: "10px",
                textAlign: "center",
                backgroundColor: "transparent",
              }}
            >
              <h1 style={{ color: "#279040" }}>Our Campaign</h1>
            </button>
          </a>
        </div>
      </div>

      <div id="latest" className="container-fluid" style={{ padding: "50px" }}>
        <div style={{ paddingBottom: "30px" }}>
          {name == "" ? (
            <h1
              style={{
                paddingLeft: "1em",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              {/* {data[0].name} */}
            </h1>
          ) : (
            <h1
              style={{
                paddingLeft: "1em",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              {name}
            </h1>
          )}
        </div>
        <div className="row" style={{ padding: "40px 0 70px" }}>
          <div className="col-lg-8 col-md-12 col-xs-12" style={{ flex: 1 }}>
            {file == "" ? (
              <img
                // src={data[0].file}
                style={{
                  width: "40%",
                  height: "70%",
                  padding: "10px",
                  float: "left",
                }}
              />
            ) : (
              <Card
                style={{
                  // width: "40%",
                  // height: "auto",
                  padding: "10px",
                  float: "left",
                }}
                cover={
                  <img
                    style={{ width: "350px", height: "300px" }}
                    src={"http://localhost:9000/uploads/" + file}
                  />
                }
              ></Card>
            )}
            {description == "" ? (
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                mattis tellus aliqu am ac ut viverra viverra pharetra sed. Lorem
                ipsum dolor sit amet, consecte tur adipiscing elit. Vitae mattis
                tellus aliqu am ac ut viverra viverra pharetra sed. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Vitae mattis Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Vitae mattis
                tellus aliqu am ac ut viverra viverra pharetra sed. Lorem ipsum
                dolor sit amet, consecte tur adipiscing elit. Vitae mattis
                tellus aliqu am ac ut viverra viverra pharetra sed. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Vitae mattis Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Vitae mattis
                tellus aliqu am ac ut viverra viverra pharetra sed. Lorem ipsum
                dolor sit amet, consecte tur adipiscing elit. Vitae mattis
                tellus aliqu am ac ut viverra viverra pharetra sed. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Vitae mattis
              </p>
            ) : (
              <p style={{ fontSize: "20px" }}>{description}</p>
            )}
          </div>
          <div className="col-lg-4 col-md-12 col-xs-12">
            <div
              style={{
                backgroundImage: `url(${abouut})`,
                width: "100%",
                height: "300px",
                backgroundSize: "cover",
                position: "relative",
                textAlign: "center",
              }}
            >
              {/* <img src={abouut} style={{ width: "100%", height: "70%" }} /> */}
              <h1
                style={{
                  color: "white",
                  position: "absolute",
                  top: "30%",
                }}
              >
                This world needs your help, Come join us because we care.
              </h1>
            </div>
          </div>
        </div>
        <h1 style={{ textAlign: "center" }}>
          <span style={{ fontSize: "50px" }}> Our</span>News
        </h1>
        <div className="row mainCard">
          {data.map((item) => {
            return (
              <div className="col-lg-4" style={{ padding: "4px" }}>
                <a href="#latest">
                  <Card
                    onClick={() => {
                      setName(item.name);
                      setDescription(item.description);
                      setFile(item.file);
                    }}
                    style={{
                      backgroundColor: "#F5F5F5",
                    }}
                    cover={
                      <img
                        style={{ height: "250px" }}
                        src={"http://localhost:9000/uploads/" + item.file}
                      />
                    }
                  >
                    <h1 className="downText">{item.name}</h1>
                  </Card>
                </a>
              </div>
            );
          })}
        </div>
        <div style={{ paddingTop: "20px", width: "100%", textAlign: "center" }}>
          <a href="/News">
            <Button style={{ color: "green", borderColor: "green" }}>
              News
            </Button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default News;

// <div className="row">
//           <div className="col-lg-6">

//             <a href="/NewsDetails"><h1>
//               See our Going campaigns
//             </h1></a>

//             <p style={{ fontSize: 25 }}>
//               The campaigns that we have completed. How we help the people and our organization is only for the people
//               and it is to the people.The campaigns that we have completed. How we help the people and our organization is only for the people
//               and it is to the people.The campaigns that we have completed. How we help the people and our organization is only for the people
//               and it is to the people.The campaigns that we have completed. How we help the people and our organization is only for the people
//               and it is to the people.
//             </p>
//             july 21,2021

//           </div>
//           <div className="col-lg-6" style={{ textAlign: "left" }}>
//             <img className="styleImages" src={"./Images/Latest.png"}></img>
//           </div>
//           <div className="col-lg-6">
//             <img className="styleImages" src={"./Images/Ongoing.jpg"}></img>
//           </div>
//           <div className="col-lg-6" style={{ textAlign: "left" }}>
//             <h1>
//               <a style={{ color: "black" }} href="/NewsDetails">
//                 See our  Completed campaigns
//               </a>
//             </h1>

//             <p style={{ fontSize: 25 }}>
//               The campaigns that we have completed. How we help the people and our organization is only for the people
//               and it is to the people.The campaigns that we have completed. How we help the people and our organization is only for the people
//               and it is to the people.The campaigns that we have completed. How we help the people and our organization is only for the people
//               and it is to the people.The campaigns that we have completed. How we help the people and our organization is only for the people
//               and it is to the people.
//             </p>
//             july 21,2021
//           </div>
//           <div className="col-lg-12">
//             <img className="mainImage" src={"./Images/Blog1.jpg"}></img>
//             <div className="centered">
//               <h1 style={{ color: "white" }}>
//                 Click to see our photo gallery
//               </h1>
//             </div>
//           </div>
