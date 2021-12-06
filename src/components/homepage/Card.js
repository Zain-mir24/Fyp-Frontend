import React from "react";
import { Card, Row, Col } from "antd";
import "./card.css";

const { Meta } = Card;

export default function Cards() {
  return (
    <div class="container card">
      <Row>
        <Col
          span={8}
          xs={{ order: 4 }}
          sm={{ order: 3 }}
          md={{ order: 1 }}
          lg={{ order: 2 }}
        >
          <Card
            hoverable
            style={{ width: "100%" }}
            cover={
              <img
                alt="example"
                src="./Images/poster.jpg"
                style={{ height: "500px" }}
              />
            }
          >
            <Meta
              title="Plantation Drive"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
          </Card>
        </Col>
        <Col
          span={8}
          xs={{ order: 4 }}
          sm={{ order: 3 }}
          md={{ order: 1 }}
          lg={{ order: 2 }}
        >
          <Card
            hoverable
            style={{ width: "100%" }}
            cover={
              <img
                alt="example"
                src="./Images/Campaign.jpg"
                style={{ height: "500px" }}
              />
            }
          >
            <Meta
              title="Campaigns"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
          </Card>
        </Col>
        <Col
          span={8}
          xs={{ order: 4 }}
          sm={{ order: 3 }}
          md={{ order: 1 }}
          lg={{ order: 2 }}
        >
          <Card
            hoverable
            style={{ width: "100%" }}
            cover={
              <img
                alt="example"
                src="./Images/Charity.png"
                style={{ height: "500px" }}
              />
            }
          >
            <Meta
              title="Our Project"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
