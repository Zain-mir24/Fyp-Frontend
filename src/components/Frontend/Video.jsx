import React, { useEffect, useState } from "react";
import { Table, Button, Input, Upload, Col, Form, Select } from "antd";
import { InstagramGallery } from "instagram-gallery";

import axios from "axios";
import Footer from "../Footer/Footer";
import Header from "../Headers/Header";
import "./insta.css";
import url from "../../config/axios"

export default function Video() {
  const [linkData, setLinkData] = useState([]);

  const getLinkData = async () => {
    try {
      const res = await url.get(
        "/admin/viewYoutubeDetail"
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
      <Header active="social" />
      <div style={{ textAlign: "center", margin: "170px 0 0" }}>
        <h1 style={{ paddingBottom: "50px" }}>Social Videos</h1>
      </div>
      <div className="container">
        <div className="row">
          {linkData.map((res) => {
            console.log(res);
            return (
              <div className="col-lg-6">
                <iframe
                  width="100%"
                  height="300"
                  src={"https://www.youtube.com/embed/" + res.link}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: "center" }}>
          <h1 style={{ padding: "50px 0 20px" }}>Instagram Gallery</h1>
          <InstagramGallery
            accessToken="IGQVJXemFldzlsX1RLejJqNDFUMzZAUdVBxUm5WZA25lcHJ0cU5FN0k5OFJfaElOTWN1R2pwZA3ZAJa1hxaFV6Uklyd2NfQUUyQ1RQajJ1UnZAZAay1pU0w4RG5tMHM5Y0oxU0h1MExzSDF5b2JxdEc1NVVNMAZDZD"
            count={24}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
