import React, { useState, useEffect } from "react";
import { Card } from "antd";
import axios from "axios";
import CampaignDetail from "./CampaignDetail";
const { Meta } = Card;

function Campaigndonation() {
  const [data, setData] = useState([]);
  const [content, setContent] = useState("");
  const [Name, setName] = useState("")
  const [description, setDesc] = useState("")
  const [img, setImg] = useState("")
  const [id, setId] = useState("")
  const [donation, setDonation] = useState(0)

  const getData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:9000/admin/viewCampaigns"
      );
      await setData(res.data.campaign);
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
              name={Name}
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
                      setName(item.name)
                      setDesc(item.description)
                      setImg(item.fileName)
                      setId(item._id)
                      setDonation(item.donation)
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
