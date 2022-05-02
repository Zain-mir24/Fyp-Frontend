import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Headers/Header";
import "./Latestnews.css";
import { Card } from "antd";

import world from "../../Images/newWorld.jpeg"
import abouut from "../../Images/abouut.png"
import { Button } from "antd"
import axios from "axios";
const { Meta } = Card;

function News() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [file, setFile] = useState("")
  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:9000/admin/LatestNews");
      await setData(res.data);
      console.log(data, "TESTING");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
      <Header />
      <div style={{ backgroundImage: `url(${world})`, marginTop: "-30px" }} className="mydiv containerFluid">
        <div className="alignNews">
          <h1 className="title">
            <span style={{ fontSize: "90px" }}>
              Know
            </span> Whats Happening </h1>
          <p style={{ color: "#929292" }}>
            We are making  endless efforts to help people <br></br>
            around the world overcome hardships they face,<br></br>
            which could and will not be possible without <br></br>
            your help !
          </p>
          <a href="/Campaign">
            <div style={{ borderColor: "green", border: "1px solid #279040", width: "300px", height: "60px", marginLeft: "13em" }}>
              <h1 style={{ color: "#279040", paddingTop: "0.3em" }}>
                Our Campaign
              </h1>

            </div>
          </a>
        </div>
      </div >

      <div className="container-fluid">
        <div className="row">
          {name == "" ? <h1 style={{ paddingLeft: "1em", fontWeight: "bold" }}>
            Never the same again
          </h1>
            : <h1 style={{ paddingLeft: "1em", fontWeight: "bold" }}>
              {name}
            </h1>}
          <div className="col-lg-8" style={{ flex: 1 }}>
            {file == "" ? <img src={world} style={{ width: "40%", height: "70%", padding: "10px", float: "left" }} /> :
              <Card
                style={{ width: "40%", height: "100%", padding: "10px", float: "left" }}
                cover={
                  <img style={{ height: "250px" }} src={"http://localhost:9000/uploads/" + file} />
                }
              >

              </Card>
            }
            {description == "" ? <p>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Vitae mattis tellus aliqu
              am ac ut viverra viverra pharetra sed.
              Lorem ipsum dolor sit amet, consecte
              tur adipiscing elit. Vitae mattis tellus aliqu
              am ac ut viverra viverra pharetra sed.
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Vitae mattis Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Vitae mattis tellus aliqu
              am ac ut viverra viverra pharetra sed.
              Lorem ipsum dolor sit amet, consecte
              tur adipiscing elit. Vitae mattis tellus aliqu
              am ac ut viverra viverra pharetra sed.
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Vitae mattis Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Vitae mattis tellus aliqu
              am ac ut viverra viverra pharetra sed.
              Lorem ipsum dolor sit amet, consecte
              tur adipiscing elit. Vitae mattis tellus aliqu
              am ac ut viverra viverra pharetra sed.
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Vitae mattis
            </p> :
              <p>
                {description}
              </p>
            }


          </div>
          <div className="col-lg-4" >
            <div style={{ backgroundImage: `url(${abouut})`, width: "100%", height: "100%", backgroundSize: "cover" }}>
              {/* <img src={abouut} style={{ width: "100%", height: "70%" }} /> */}
              <h1 className="Minidetail" style={{ color: "white" }}>
                This world needs your help, Come join us because we care.
              </h1>
            </div>

          </div>
        </div>
        <h1 style={{ textAlign: "center" }}>
          <span style={{ fontSize: "50px" }}> Our</span>News
        </h1>
        <div className="row mainCard">

          {
            data.map((item) => {
              return (
                <div className="col-lg-4">
                  <Card
                    onClick={() => {
                      setName(item.name)
                      setDescription(item.description)
                      setFile(item.file)
                    }}
                    style={{
                      backgroundColor: "#F5F5F5",

                    }}
                    cover={
                      <img
                        style={{ height: "250px" }}
                        src={"http://localhost:9000/uploads/" + item.file} />
                    }
                  >

                    <h1 className="downText">
                      {item.name}

                    </h1>
                  </Card>
                </div>

              )
            })



          }
        </div>
        <div style={{ paddingTop: "20px", width: "100%", textAlign: "center" }}>
          <a href="/News">
            <Button style={{ color: "green", borderColor: "green", }}>
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