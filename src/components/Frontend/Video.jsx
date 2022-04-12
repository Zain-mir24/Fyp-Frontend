import React, { useEffect, useState } from "react";
import { Table, Button, Input, Upload, Col, Form, Select } from "antd";
import { InstagramGallery } from "instagram-gallery";

import axios from "axios";
import Footer from "../Footer/Footer";
import Header from "../Headers/Header";
import "./insta.css";

export default function Video() {
  const [linkData, setLinkData] = useState([]);

  const getLinkData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:9000/admin/viewYoutubeDetail"
      );
      setLinkData(res.data);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(getLinkData, []);
  return (
    <div>
      <Header />
      <div style={{ textAlign: "center" }}>
        <h1>Social Video</h1>
      </div>
      <div className="container">
        <div className="row">
          {linkData.map((item) => {
            var Data = item.link;
            return (
              <div className="col-lg-6">
                <iframe
                  width="100%"
                  height="300"
                  src={"https://www.youtube.com/embed/" + { Data }}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            );
          })}
        </div>
        <InstagramGallery
          accessToken="IGQVJXZA2d2TUVjWklNTVAzSEl2STZA3VnZADR3NINDZAMcks2SkJLekpCSGpFZATRnc0xPRkVSSTM0eWx6cUJGczREbUd6R3gyQzdSRVBQUDVVT3dHb3RvSjFrQWE3bk9qc2xyNV9RRjI3d2pISDhjWjhCOQZDZD"
          count={24}
        />
      </div>

      <Footer />
    </div>
  );
}
