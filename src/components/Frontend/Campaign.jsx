import { React, useEffect, useState } from "react";
import Header from "../Headers/Header";
import { Card } from "antd";
import axios from "axios";
import Footer from "../Footer/Footer";
import hands from "../../Images/hands.png";

import Campaignrender from "./Campaignrender";
const { Meta } = Card;

export default function Campaign() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:9000/admin/viewCampaigns");
      await setData(res.data.campaign);
      console.log(res.data.campaign);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(getData, []);

  return (
    <div>
      <Header active="campaign" />
      <div
        style={{
          backgroundImage: `url(${hands})`,
          height: "500px",
          width: "100%",
          position: "relative",
          backgroundSize: "contain",
        }}
        className=" containerFluid"
      >
        <div className="alignNews">
          <h1 className="title">
            <span style={{ fontSize: "90px" }}>Your</span> Help Will Mean Alot
          </h1>
          <p style={{ color: "#929292" }}>
            We are making endless efforts to help people <br></br>
            around the world overcome hardships they face,<br></br>
            which could and will not be possible without <br></br>
            your help !
          </p>
          {/* <a href="/Campaign">
            <div style={{ borderColor: "green", border: "1px solid #279040", width: "300px", height: "60px", marginLeft: "13em" }}>
              <h1 style={{ color: "#279040", paddingTop: "0.3em" }}>
                Our Campaign
              </h1>

            </div>
          </a> */}
        </div>
      </div>

      <div className="container">
        <h1 style={{ fontSize: "60px", textAlign: "center" }}>Campaigns</h1>
        {/* <div>
          <p>
            <a style={{ color: "#1B9834" }} href="/">
              Home
            </a>{" "}
            /{" "}
            <a style={{ color: "#1B9834" }} href="/campaign">
              Campaigns
            </a>
          </p>
        </div> */}
        {/* campaign 1 would be here */}

        <div className="row">
          {data == undefined
            ? null
            : data.map((item) => {
                console.log(item.name);
                return (
                  <div
                    className="col-lg-12"
                    onClick={() => {
                      window.location.href =
                        "/CampaignDetail?name=" +
                        item.name +
                        "&description=" +
                        item.description +
                        "&img=" +
                        item.fileName +
                        "&donation=" +
                        item.donation +
                        "&campaignid=" +
                        item._id;
                    }}
                  >
                    <Campaignrender
                      name={item.name}
                      description={item.description}
                      img={item.fileName}
                      donation={item.donation}
                    />
                    {/* <Card
        hoverable
        style={{ width: "340px", padding: "30px" }}
        cover={
          <img
            style={{ height: "300px" }}
            alt="example"
            src={
              "https://damp-stream-39096.herokuapp.com/uploads/" +
              item.fileName
            }
          />
        }
      >
        <Meta
          title={item.name}
          description={item.description.substring(0, 80) + " ..."}
        />
      </Card> */}
                  </div>
                );
              })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
