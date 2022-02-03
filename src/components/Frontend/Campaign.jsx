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
                    item.donation +
                    "&campaignid=" +
                    item._id;
                }}
              >
                <Card
                  hoverable
                  style={{ width: "340px", padding: "30px" }}
                  cover={
                    <img
                      style={{ height: "300px" }}
                      alt="example"
<<<<<<< HEAD
=======
<<<<<<< HEAD
                      src={"https://damp-stream-39096.herokuapp.com/uploads/" + item.fileName}
=======
>>>>>>> 91507afdc437ccb850c42f1bdadc7883d4233012
                      src={
                        "https://damp-stream-39096.herokuapp.com/uploads/" +
                        item.fileName
                      }
<<<<<<< HEAD
=======
>>>>>>> e061a86c35a1b1d76f3a15fbcc130831b826826d
>>>>>>> 91507afdc437ccb850c42f1bdadc7883d4233012
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
