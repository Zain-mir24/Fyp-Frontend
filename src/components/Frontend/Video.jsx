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
      <div style={{ textAlign: "center", margin: "170px 0 0" }}>
        <h1 style={{ paddingBottom: "50px" }}>Instagram Gallery</h1>
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





import FCMTokenModal from “../models/FCMTokens”;
import cerdentials from “./serviceAccount”;
import * as admin from “firebase-admin”;
const serviceAccount = cerdentials as admin.ServiceAccount;
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
class SendNotification {
  notification_options = {
    priority: “high”,
    timeToLive: 60 * 60 * 24,
  };
  constructor() {}
  fireNotification = async (CustomerID: any, Title: any, Message: any) => {
    console.log(“Token is working”);
    console.log(CustomerID);
    let token: any = [];
    await FCMTokenModal.find({ CustomerID: CustomerID, Status: true })
      .then(async (data: any) => {
        let data1 = [];
        for (let i = 0; i < data.length; i++) {
          await data1.push(data[i].Token);
        }
        console.log(data1);
        token = await data1;
      })
      .catch((err) => console.log(err));
    let safi = await {
      safi: “Party”,
    };
    const payload = await {
      notification: {
        title: Title,
        body: Message + “|” + Date.now(),
      },
      tokens: token,
      // NOTE: The ‘data’ object is inside payload, not inside notification
    };
    const options = await this.notification_options;
    await console.log(token);
    await admin
      .messaging()
      .sendMulticast(payload)
      .then(async (response) => {
        console.log(“Notification sent successfully”);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
export default SendNotification;