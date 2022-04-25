import React from "react";
import "./Home.css";
import { Card, Col, Row } from 'antd';
function Wedo() {
  return (
    <div className="container-fluid weDomaindiv">
      <h1 style={{ marginTop: "50px" }}><span style={{ fontSize: "50px" }}> What </span> we do</h1>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Donation" className="cardStyle" headStyle={{ backgroundColor: "#279040" }} bordered={false}>
            here are many variations of passages of
            Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
            anything embarrassing hidden in the middle of text.
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Volunteer" className="cardStyle" headStyle={{ backgroundColor: "#279040" }} bordered={false}>
            here are many variations of passages of
            Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
            anything embarrassing hidden in the middle of text.
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Adopt" className="cardStyle" headStyle={{ backgroundColor: "#279040" }} bordered={false}>
            here are many variations of passages of
            Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
            anything embarrassing hidden in the middle of text.
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Wedo;
