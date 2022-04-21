import React, { useState } from "react";
import styled from "styled-components";
import { FaHandshake, FaLink, FaBus } from "react-icons/fa";
import { tablet } from "./responsive";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Title = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 32px;
  color: #1e1d24;
  line-height: 1.344em;
  text-align: center;
  margin-top: 40px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  /* flex-direction: column; */
`;
const BoxContainer = styled.div`
  display: flex;
`;
const Box1 = styled.div`
  /* width: 172px; */
  /* height: 132px; */
  border: 0.1px solid lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  ${tablet({ padding: "10px" })}
  padding: 30px 50px;
  cursor: pointer;
  background-color: ${(props) => (props.first ? "#62be1e" : "white")};
`;
const Box2 = styled.div`
  /* width: 172px; */
  /* height: 132px; */
  border: 0.1px solid lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 30px 50px;
  ${tablet({ padding: "10px" })}
  cursor: pointer;
  background-color: ${(props) => (props.second ? "#62be1e" : "white")};
`;
const Box3 = styled.div`
  /* width: 172px; */
  /* height: 132px; */
  border: 0.1px solid lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 30px 50px;
  ${tablet({ padding: "10px" })}
  cursor: pointer;
  background-color: ${(props) => (props.third ? "#62be1e" : "white")};
`;
const BoxTitle = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  color: #1e1d24;
  padding-top: 10px;
`;
const TextContainer = styled.div`
  width: 100%;
  width: 75%;
  margin-top: 10px;
  margin-bottom: 65px;
`;
const Text = styled.div`
  color: #79787f;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  text-align: center;

  margin-top: 10px;
`;
const Info = styled.div`
  color: #79787f;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  text-align: center;

  margin-top: 10px;
`;
const LowerContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const LogoContainer = styled.div`
  ${tablet({ display: "none" })}
`;
const textDetails = [
  {
    text: "A huge number of services and works done by high-class experts using the latest technologies. We are here to meet your every demand so you could have no worries about your home!",
    info: "Call us and our manager will answer any of your question and help you to resolve any issue!",
  },
  {
    text: "Quality of work and speed of fulfilment. We always stand for doing our job fast and at the highest level as understand people value their time and money.",
    info: "No worries about delays or unfinished work – it’s our warranty policy!",
  },
  {
    text: "Help with any domestic problem. You can choose the service from our list, or if you need any other maintenance help, we will gladly do even non-standard work!",
    info: "We are here to meet your every demand!",
  },
];

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
    <Container>
      <Title>WHY CHOOSE GLOBAL REACH</Title>
      <Wrapper>
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
      </LowerContainer>
    </Container>
  );
};

export default First;
