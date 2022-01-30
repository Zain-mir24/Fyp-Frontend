import React, { useState, useEffect } from "react";
import { Card } from "antd";
import axios from "axios";
import CampaignDetail from "./CampaignDetail";
const { Meta } = Card;

function Campaigndonation() {
  const [data, setData] = useState([]);
  const [content, setContent] = useState("");
  let name, description, img, id, donation;
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
      <div className="container">
        <div className="row">
          {content == "campaign" ? (
            <CampaignDetail
              name={name}
              description={description}
              img={img}
              id={id}
              donation={donation}
            />
          ) : (
            data.map((item) => {
              return (
                <div className="col-lg-4">
                  <Card
                    onClick={() => {
                      name = item.name;
                      description = item.description;
                      img = item.fileName;
                      id = item._id;
                      donation = item.donation;
                      console.log(name, description);
                      setContent("campaign");
                    }}
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
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default Campaigndonation;
