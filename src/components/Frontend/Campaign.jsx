import { React, useEffect, useState } from "react";
import Header from "../Headers/Header";
import { Card } from "antd";
import axios from "axios";
import CampaignDetails from "./CampaignDetails";
const { Meta } = Card;

export default function Campaign() {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const res = await axios.get(
        "https://damp-stream-39096.herokuapp.com/admin/viewCampaigns"
      );
      await setData(res.data);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(getData, []);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          {data.map((item) => {
            return (
              <div
                className="col-lg-4"
                onClick={() => {
                  window.location.href =
                    "/CampaignDetail?name=" +
                    item.name +
                    "&description=" +
                    item.description +
                    "&img=" +
                    item.fileName +
                    "&donation=" +
                    item.donation;
                }}
              >
                <Card
                  hoverable
                  style={{ width: "340px", padding: "30px" }}
                  cover={
                    <img
                      style={{ height: "300px" }}
                      alt="example"
                      src={"http://localhost:9000/uploads/" + item.fileName}
                    />
                  }
                >
                  <Meta
                    title={item.name}
                    description={item.description.substring(0, 80) + " ..."}
                  />
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
