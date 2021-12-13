import { React, useState, useEffect } from "react";
import Header from "../Headers/Header";
import { Layout, Image, Card, Progress } from "antd";

const { Footer, Sider, Content } = Layout;

export default function CampaignDetails() {
  const [percentage, setPercentage] = useState();

  const queryParams = new URLSearchParams(window.location.search);

  const name = queryParams.get("name");
  const description = queryParams.get("description");
  const img = queryParams.get("img");
  const donation = queryParams.get("donation");
  const collected = 50000000;

  function percentageFormula() {
    var x = (collected / donation) * 100;
    setPercentage(Math.floor(x));
  }

  useEffect(percentageFormula, []);
  return (
    <div>
      <Header />
      <div className="container">
        <Layout>
          <Layout style={{ backgroundColor: "white" }}>
            <Content>
              <h1>{name}</h1>
              <Image
                src={"http://localhost:9000/uploads/" + img}
                style={{ width: "100%", height: "500px" }}
              />
              <br />
              <br />
              <h3>Description</h3>
              <p>{description}</p>
              <br />
              <br />
            </Content>
            <Sider style={{ backgroundColor: "white" }}>
              {" "}
              <Card
                title={"Donation Amount: " + donation + " PKR"}
                style={{ width: 300 }}
              >
                <p>Amount Collected: {collected}</p>
                Percentage:{" "}
                <Progress
                  style={{ marginLeft: "20px" }}
                  type="circle"
                  percent={percentage}
                />
              </Card>
            </Sider>
          </Layout>
        </Layout>
      </div>
    </div>
  );
}
