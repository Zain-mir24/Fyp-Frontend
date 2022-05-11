import React, { useState, useEffect } from "react";
import { Button } from "antd"
import styled from "styled-components";
import { FaFileArchive } from "react-icons/fa";
import { laptop, tablet } from "./responsive";
import { Card } from "antd";
import axios from "axios";
import uncle from "../../Images/uncle.png"
import "./Second.css"
import { height } from "@mui/material/node_modules/@mui/system";

const { Meta } = Card;

const Second = () => {
  const [archiveObject, setArchiveObject] = useState({
    style: {
      fontSize: "10px",
      color: "white",
    },
  });
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:9000/admin/LatestNews");
      await setData(res.data);
      console.log(data, "TESTING");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData()
  }, [])
  return (
    <div style={{ height: "auto", marginTop: "40px" }}>
      <h1 style={{ textAlign: "center" }}>
        <span style={{ fontSize: "50px" }}> Latest </span>News
      </h1>
      <div className="row mainCard">

        {
          data.map((item) => {
            return (
              <div className="col-lg-4">
                <a href="/News">
                  <Card
                    style={{
                      backgroundColor: "#F5F5F5",

                    }}
                    cover={
                      <img
                        style={{ height: "250px" }}
                        src={"http://localhost:9000/uploads/" + item.file} />
                    }
                  >

                    <h1 className="downText">
                      {item.name}

                    </h1>
                  </Card>
                </a>
              </div>

            )
          })



        }
      </div>

      <div style={{ paddingTop: "20px", width: "100%", textAlign: "center" }}>
        <a href="/News">
          <Button style={{ color: "green", borderColor: "green", }}>
            News
          </Button>
        </a>

      </div>

    </div>
  );
};

export default Second;








{/* <div className="col-lg-4">
          <div className="cardImage">
          </div>
          <h1 className="downText">
            Refugee Camps setup
            in Czek Republic

          </h1>
        </div>
        <div className="col-lg-4">
          <div className="cardImage">
          </div>
          <h1 className="downText">
            Refugee Camps setup
            in Czek Republic
          </h1>
        </div> */}










// background-image: url("https://ld-wp73.template-help.com/wordpress/prod_11363/v2/wp-content/uploads/2019/08/home-7.jpg");

// <Wrapper>
// <UpperText>
//   ARE YOU TIRED OF SPENDING HOURS MOWING YOUR LAWN EVERY WEEKEND?
// </UpperText>
// <LowerText>
//   TAKE BACK YOUR FREE TIME BY HAVING US TAKE CARE OF YOUR GARDEN
// </LowerText>
// <Btn
//   onMouseEnter={() =>
//     setArchiveObject({
//       style: {
//         fontSize: "10px",
//         color: "black",
//       },
//     })
//   }
//   onMouseLeave={() =>
//     setArchiveObject({
//       style: {
//         fontSize: "10px",
//         color: "white",
//       },
//     })
//   }
// >
//   <FaFileArchive style={archiveObject.style} />
//   MAKE AN APPOINTMENT
// </Btn>
// </Wrapper>











// const Container = styled.div`
//   width: 100vw;
//   height: 400px;

//   background-position: top left;
//   background-size: cover;
//   position: relative;
//   ${laptop({ backgroundPosition: " center" })}
//   display: flex;
//   justify-content: right;
//   margin-top: 50px;
//   ${tablet({ justifyContent: "center" })}
//   transition: all 0.2s ease;
// `;
// const Wrapper = styled.div`
//   position: absolute;
//   width: 50%;
//   margin-right: 10%;
//   margin-top: 60px;
//   ${tablet({ width: "90vw", marginRight: "0px" })}
//   font-family: "Montserrat", sans-serif;
// `;
// const UpperText = styled.div`
//   color: #ffffff;
//   font-family: "Montserrat", Sans-serif;
//   font-size: 32px;
//   font-weight: 500;
//   text-transform: uppercase;
//   line-height: 1.344em;
//   ${laptop({ fontSize: "25px" })}
// `;
// const LowerText = styled.div`
//   color: #ffffff;
//   font-family: "Montserrat", Sans-serif;
//   font-size: 18px;
//   ${laptop({ fontSize: "13px" })}
//   font-weight: 500;
//   text-transform: uppercase;
//   line-height: 1.344em;
//   margin-top: 20px;
// `;
// const Btn = styled.button`
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   background-color: #fe8a01;
//   width: 230px;
//   height: 50px;
//   font-family: "Montserrat", Sans-serif;
//   font-size: 12px;
//   font-weight: 500;
//   text-transform: uppercase;
//   line-height: 24px;
//   letter-spacing: 0.48px;
//   fill: #ffffff;
//   color: #ffffff;
//   border-radius: 2px 2px 2px 2px;
//   padding: 13px 21px 13px 21px;
//   margin-top: 30px;
//   border: none;
//   cursor: pointer;
//   &:hover {
//     background-color: white;
//     color: black;
//   }
// `;