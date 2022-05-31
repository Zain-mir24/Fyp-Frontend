import React, { useState } from "react";
import styled from "styled-components";

import { FaHandshake, FaLink, FaBus } from "react-icons/fa";
import { tablet } from "./responsive";
import "./first.css";
import global from "../../Images/globalicon.png";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const First = () => {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [num, setNum] = useState(0);
  const [stylingObject, setStylingObject] = useState({
    aniamtor: {
      animation: "animate 0.5s  forwards",
    },
  });
  const [color1, setColor1] = useState({
    color: {
      color: "white",
      fontSize: "30px",
    },
  });
  const [color2, setColor2] = useState({
    color: {
      color: "#62be1e",
      fontSize: "30px",
    },
  });
  const [color3, setColor3] = useState({
    color: {
      color: "#62be1e",
      fontSize: "30px",
    },
  });
  return (
    <Container style={{ padding: "50px 0" }}>
      <h1 style={{ textAlign: "center" }}>
        <span style={{ fontSize: "50px" }}> Why </span>
        choose global reach
      </h1>
      <br />
      <br />
      <br />
      <div className="row">
        <div className="col-lg-4 col-sm-4 col-xs-4 offerDiv">
          <i
            class="fa fa-dollar"
            style={{ color: "green", fontSize: "60px" }}
          ></i>
          <br />
          <br />
          <h1>We Donate</h1>
          <p style={{ width: "100%", textAlign: "center" }}>
            consectetur adipiscing elit.<br></br> Lectus eget scelerisque augue{" "}
            <br></br>amet blandit id tem
          </p>
        </div>
        <div className="col-lg-4 col-sm-4 col-xs-4 offerDiv">
          <i
            class="fa fa-heart"
            style={{ color: "green", fontSize: "60px" }}
          ></i>
          <br />
          <br />
          <h1>We Care</h1>
          <p style={{ width: "100%", textAlign: "center" }}>
            consectetur adipiscing elit.<br></br> Lectus eget scelerisque augue{" "}
            <br></br>amet blandit id tem
          </p>
        </div>
        <div className="col-lg-4 col-sm-4 col-xs-4 offerDiv">
          <i
            class="fa fa-truck"
            style={{ color: "green", fontSize: "60px" }}
          ></i>
          <br />
          <br />
          <h1>We offer</h1>
          <p style={{ width: "100%", textAlign: "center" }}>
            consectetur adipiscing elit.<br></br> Lectus eget scelerisque augue{" "}
            <br></br>amet blandit id tem
          </p>
        </div>
      </div>
    </Container>
  );
};

export default First;

{
  /* <Wrapper>
        <BoxContainer>
          <Box1
            first={first}
            onClick={() => {
              setFirst(true);
              setSecond(false);
              setThird(false);
              setNum(0);
              setColor1({
                color: {
                  color: "white",
                  fontSize: "30px",
                },
              });
              setColor2({
                color: {
                  color: "#62be1e",
                  fontSize: "30px",
                  fontSize: "30px",
                },
              });
              setColor3({
                color: {
                  color: "#62be1e",
                  fontSize: "30px",
                },
              });
              setStylingObject(stylingObject);
            }}
          >
            <LogoContainer style>
              <FaHandshake style={color1.color} />
            </LogoContainer>
            <BoxTitle>We Offer</BoxTitle>
          </Box1>
          <Box2
            second={second}
            onClick={() => {
              setSecond(true);
              setFirst(false);
              setThird(false);
              setNum(1);
              setStylingObject({
                aniamtor: {
                  transform: "translateY(10px)",
                  animation: "animate 0.5s  forwards",
                },
              });
              setColor2({
                color: {
                  color: "white",
                  fontSize: "30px",
                },
              });
              setColor1({
                color: {
                  color: "#62be1e",
                  fontSize: "30px",
                },
              });
              setColor3({
                color: {
                  color: "#62be1e",
                  fontSize: "30px",
                },
              });
            }}
          >
            <LogoContainer>
              <FaLink style={color2.color} />
            </LogoContainer>
            <BoxTitle>We Guarantee</BoxTitle>
          </Box2>
          <Box3
            third={third}
            onClick={() => {
              setThird(true);
              setFirst(false);
              setSecond(false);
              setNum(2);
              setColor3({
                color: {
                  color: "white",
                  fontSize: "30px",
                },
              });
              setColor2({
                color: {
                  color: "#62be1e",
                  fontSize: "30px",
                },
              });
              setColor1({
                color: {
                  color: "#62be1e",
                  fontSize: "30px",
                },
              });
              setStylingObject({
                aniamtor: {
                  transform: "translateY(10px)",
                  animation: "animate 0.5s ease",
                },
              });
            }}
          >
            <LogoContainer>
              <FaBus style={color3.color} />
            </LogoContainer>
            <BoxTitle>We Provide</BoxTitle>
          </Box3>
        </BoxContainer>
      </Wrapper>
      <LowerContainer>
        <TextContainer style={stylingObject.aniamtor}>
          <Text>
            <p>{textDetails[num].text}</p>
          </Text>
          <Info>{textDetails[num].info}</Info>
        </TextContainer>
      </LowerContainer> */
}
