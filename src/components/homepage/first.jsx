import React, { useState } from "react";
import styled from "styled-components";
import { FaHandshake, FaLink, FaBus } from "react-icons/fa";
import { tablet } from "./responsive";
import "./first.css"

import global from "../../Images/dollar.png"
import Education from "../../Images/Education.png"
import Food from "../../Images/FoodShelter.png"
import Medicine from "../../Images/Medicine.png"
import brush from "../../Images/brush.png"
import World from "../../Images/worldmap.png"
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const First = () => {

  return (
    <Container>
      <div className="row" style={{ backgroundImage: `url(${World})` }}>
        <div className="col-lg-6">
          <div style={{ padding: "30px" }}>


            <h1 style={{ textAlign: "left" }}>
              <span style={{ fontSize: "50px", fontFamily: "Sansation" }}> Why ?</span><br>
              </br>choose global reach
            </h1>
            <p style={{ justifyContent: "left" }}>
              consectetur adipiscing elit. Lectus eget scelerisque augue amet blandit id tem.
              consectetur adipiscing elit. Lectus eget scelerisque augue amet blandit id tem.
              consectetur adipiscing elit. Lectus eget           </p>
            <p style={{ justifyContent: "left" }}>
              scelerisque augue amet blandit id tem.scelerisque augue amet blandit id temscelerisque augue amet blandit id tem

            </p>
          </div>

        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-6" style={{ textAlign: "center" }}>
              <div style={{ padding: "50px" }}>

                <img src={global} />
                <p style={{ fontSize: "20px" }}>
                  Global Funding
                </p>
                <p>
                  consectetur adipiscing elit. Lectus eget sce



                </p>
              </div>

            </div>
            <div className="col-lg-6" style={{ textAlign: "center" }}>
              <div style={{ padding: "50px" }}>

                <img src={Food} />
                <p style={{ fontSize: "20px" }}>
                  Food & Shelter
                </p>
                <p>
                  consectetur adipiscing elit. Lectus eget sce



                </p>
              </div>

            </div>
          </div>
          <div className="row">
            <div className="col-lg-6" style={{ textAlign: "center" }}>
              <div style={{ padding: "50px" }}>

                <img src={Education} />
                <p style={{ fontSize: "20px" }}>
                  Education

                </p>
                <p>
                  consectetur adipiscing elit. Lectus eget sce



                </p>
              </div>

            </div>
            <div className="col-lg-6" style={{ textAlign: "center", backgroundImage: `url(${brush})` }}>
              <div style={{ padding: "50px" }}>
                <img src={Medicine} />
                <p style={{ fontSize: "20px", color: "white" }}>
                  Medical Treatment
                </p>
                <p style={{ color: "white" }}>
                  consectetur adipiscing elit. <br />Lectus eget sce



                </p>
              </div>
            </div>
          </div>
        </div>



      </div>

      {/* <h1 style={{ textAlign: "center" }}>
        <span style={{ fontSize: "50px" }}> Why </span>choose global reach
      </h1>
      <div className="row">
        <div className="col-lg-4 col-sm-4 col-xs-4 offerDiv">
          <img src={global}>
          </img>
          <h1>
            We offer
          </h1>
          <p style={{ width: "100%", textAlign: "center" }}>
            consectetur adipiscing elit.<br></br> Lectus eget scelerisque augue <br></br>amet blandit id tem

          </p>
        </div>
        <div className="col-lg-4 col-sm-4 col-xs-4 offerDiv">
          <img src={global}>
          </img>
          <h1>
            We offer
          </h1>
          <p style={{ width: "100%", textAlign: "center" }}>
            consectetur adipiscing elit.<br></br> Lectus eget scelerisque augue <br></br>amet blandit id tem

          </p>
        </div>
        <div className="col-lg-4 col-sm-4 col-xs-4 offerDiv">
          <img src={global}>
          </img>
          <h1>
            We offer
          </h1>
          <p style={{ width: "100%", textAlign: "center" }}>
            consectetur adipiscing elit.<br></br> Lectus eget scelerisque augue <br></br>amet blandit id tem
          </p>
        </div>
      </div> */}
    </Container>
  );
};

export default First;























{/* <Wrapper>
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
      </LowerContainer> */}