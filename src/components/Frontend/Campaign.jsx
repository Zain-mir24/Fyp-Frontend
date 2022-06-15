import { React, useEffect, useState } from "react";
import Header from "../Headers/Header";
import { Layout, Image, Card, Progress, Button, Input, InputNumber } from "antd";
import axios from "axios";
import Footer from "../Footer/Footer";
import hands from "../../Images/hands.png";
import campaignSection1 from "../../Images/campaignSection1.jpg";
import campaignSection2 from "../../Images/campaignSection2.jpg";
import campaignSection3 from "../../Images/campaignSection3.jpg";
import StripeCheckout from "react-stripe-checkout";
import abouut from "../../Images/abouut.png";
import url from "../../config/axios"
import Campaignrender from "./Campaignrender";
import { borderRadius } from "@mui/material/node_modules/@mui/system";
const { Meta } = Card;

export default function Campaign() {
  const [data, setData] = useState([]);
  const [campaign, setCampaign] = useState({
    name: "",
    description: "",
    img: "",
    donation: 0,
    cid: "",
  });
  const [check, setCheck] = useState(true);
  console.log(campaign.name);
  const [collection, setCollection] = useState(0);
  const [totalamount, setAmount] = useState(0);
  const [file, setFile] = useState();
  var cid = campaign.cid;
  const getData = async () => {
    try {
      const res = await url.get("/admin/viewCampaigns");
      await setData(res.data.campaign);
      console.log(res.data.campaign);
    } catch (e) {
      console.log(e);
    }
  };
  const getAmount = async () => {
    try {
      console.log(cid);
      const result = await url.get(
        `/donation/viewDonation/${cid}`
      );
      if (!result) {
        console.log("error fetching data");
      }

      await setCollection(result.data.totalamount);
      // await setData(result.data.registeredUser);
      console.log(result.data);
    } catch (e) {
      console.log(e);
    }
  };
  const viewTeams = async (cid) => {
    try {
      const res = await url.get(`/User/viewAudit/${cid}`);
      console.log(res.data.fileName, "viewing Teams");
      setFile(res.data.fileName)
      // res.data.view.filter((i) => {
      //   return i.Cid._id === cid ? setFile(i.fileName) : null;
      // });
    } catch (e) {
      console.log(e);
    }
  };
  const sendPayment = (token) => {
    console.log(campaign.cid);
    const body = {
      token,
      name: campaign.name,
      totalamount,
      campaignId: campaign.cid,
      userId: null,
    };

    return url
      .post("/stripe/pay", body)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log("error", e);
      });
  };
  useEffect(getData, []);

  return (
    <div>
      <Header active="campaign" />
      <div
        style={{
          backgroundImage: `url(${hands})`,
          height: "500px",
          width: "100%",
          position: "relative",
          backgroundSize: "contain",
        }}
        className=" containerFluid"
      >
        <div className="alignNews">
          <h1 className="title">
            <span style={{ fontSize: "90px" }}>Your</span> Help Will Mean Alot
          </h1>
          <p style={{ color: "#929292" }}>
            We are making endless efforts to help people <br></br>
            around the world overcome hardships they face,<br></br>
            which could and will not be possible without <br></br>
            your help !
          </p>
        </div>
      </div>

      <div className="container-fluid">
        <h1 style={{ fontSize: "60px", textAlign: "center" }}>Campaigns</h1>

        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              {data == undefined
                ? null
                : data.map((item) => {
                  return (
                    <div className="col-lg-6" style={{ padding: "7px" }}>
                      <Card
                        onClick={() => {
                          console.log(item.name);

                          setCampaign({
                            ...campaign,
                            name: item.name,
                            description: item.description,
                            img: item.fileName,
                            donation: item.donation,
                            cid: item._id,
                          });
                          setCheck(false);

                          getAmount();
                          viewTeams(item._id);
                        }}
                        style={{
                          backgroundColor: "#F5F5F5",
                        }}
                        cover={
                          <img
                            style={{ height: "250px" }}
                            src={
                              "http://localhost:9000/uploads/" + item.fileName
                            }
                          />
                        }
                      >
                        <h2 style={{ height: "100px" }}>{item.name}</h2>
                      </Card>
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="col-lg-6">
            {check ? (
              <div className="container">
                <div className="row">
                  <div
                    style={{
                      backgroundImage: `url(${abouut})`,
                      width: "100%",
                      height: "300px",
                      backgroundSize: "cover",
                    }}
                  >
                    {/* <img src={abouut} style={{ width: "100%", height: "70%" }} /> */}
                    <h1
                      style={{
                        color: "white",
                        textAlign: "center",
                        fontSize: "24px",
                        fontWeight: "20",
                        paddingTop: "60px",
                      }}
                    >
                      This world needs your help, Come join us because we care.
                      psum dolor sit amet, consecte tur adipiscing elit. Vitae
                      mattis tellus aliqu am ac ut viverra viverra pharetra sed.
                      Lorem ipsum dolor sit amet, conse
                    </h1>
                  </div>
                </div>
              </div>
            ) : (
              <div className="container">
                <div className="row">
                  {campaign.donation <= collection ? (
                    <div className="col-lg-6" >
                      <button
                        style={{
                          background: "transparent",
                          border: "2px solid green",
                          padding: "5px 10px",
                        }}
                      >
                        Amount Fully collected for this campaign
                      </button>
                    </div>
                  ) : (
                    <div className="col-lg-6" >
                      <button
                        style={{
                          background: "transparent",
                          border: "2px solid green",
                          padding: "5px 0px",
                        }}
                      >
                        Amount To Be Collected: {campaign.donation - collection}{" "}
                        PKR
                      </button>
                    </div>
                  )}
                </div>

                <section style={{ margin: "40px 0" }}>
                  <div className="row">
                    <div className="col-lg-6">
                      <Image
                        src={"http://localhost:9000/uploads/" + campaign.img}
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="col-lg-6">
                      <h2>{campaign.name}</h2>
                      <p>{campaign.description}</p>
                      {campaign.donation < collection ? null : (
                        <InputNumber
                          formatter={value => ` ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                          parser={value => value.replace(/\$\s?|(,*)/g, '')}
                          style={{ border: "1px solid black", width: "40%" }}
                          placeholder="enter donation amount (pkr)"
                          defaultValue={1000}
                          min={1000}
                          onChange={(e) => {
                            setAmount(e);
                          }}
                        />
                      )}

                      {totalamount < 1000 || totalamount > 999999 ? null : (
                        <StripeCheckout
                          stripeKey="pk_test_51KM9Y3ExITDpmfWazni9PRIx4s0n0fgT5sKt28GG6254mRAvw5Y2f8Ccg2r7lTzMVx5tugDG0io5mcr8OLGbC38K00M6JTFdIE"
                          token={sendPayment}
                          name="Donate to campaign"
                          amount={totalamount * 100}
                        >
                          <br />
                          <br />
                          <Button
                            style={{
                              width: "100%",
                              backgroundColor: "#1B9834",
                              color: "white",
                            }}
                          >
                            You are donating {totalamount}
                          </Button>
                        </StripeCheckout>
                      )}

                      {file ? (
                        <div>
                          <br></br>
                          <h2>Audit for this Campaign</h2>
                          <a
                            href={"http://localhost:9000/uploads/" + file}
                            download
                          >
                            <Button
                              style={{
                                width: "100%",
                                backgroundColor: "#1B9834",
                                color: "white",
                              }}
                            >
                              Download pdf {file}
                            </Button>
                          </a>
                        </div>
                      ) : (
                        <h2>No audit yet</h2>
                      )}
                    </div>
                  </div>
                </section>

                <section style={{ margin: "50px 0" }}>
                  <div style={{ textAlign: "center" }}>
                    <h3>Percentage</h3>
                    <Progress
                      strokeColor={"#1B9834"}
                      percent={Math.floor(
                        (collection / campaign.donation) * 100
                      )}
                    />
                  </div>
                </section>
              </div>
            )}
          </div>
        </div>
        <h1 style={{ textAlign: "center", fontSize: "60px" }}>
          Our achievments
        </h1>
        <div className="row">
          <div className="col-lg-4 col-sm-4 col-md-4">
            <div

              style={{
                // background: `linear-gradient(180deg, rgba(0, 0, 0, 0.3), url(${campaignSection1})`,
                backgroundSize: "cover",
                width: "90%",
                backgroundImage: `url(${campaignSection1})`,

                height: "300px",
                borderRadius: "10px",
                // background: `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url(${campaignSection1})`
              }}
            >
              <h1
                style={{
                  color: "white",
                  textAlign: "center",
                  fontWeight: "40",
                  fontSize: "30px",
                  paddingTop: "80px",
                }}
              >
                We have build for houses for our community
              </h1>
            </div>
            {/* <img src={abouut} style={{ width: "100%", height: "70%" }} /> */}

            <h1
              style={{ color: "green", textAlign: "center", fontSize: "60px" }}
            >
              4000+
            </h1>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4">
            <div
              style={{
                backgroundImage: `url(${campaignSection2})`,
                width: "90%",
                backgroundSize: "cover",
                height: "300px",
                borderRadius: "10px",
              }}
            >
              <h1
                style={{
                  color: "white",
                  textAlign: "center",
                  fontWeight: "20",
                  fontSize: "30px",
                  paddingTop: "80px",
                }}
              >
                We have given interest free loan
              </h1>
            </div>
            {/* <img src={abouut} style={{ width: "100%", height: "70%" }} /> */}

            <h1
              style={{ color: "green", textAlign: "center", fontSize: "60px" }}
            >
              5000+
            </h1>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4">
            <div
              style={{
                backgroundImage: `url(${campaignSection3})`,
                width: "90%",
                backgroundSize: "cover",
                height: "300px",
                borderRadius: "10px",
              }}
            >
              <h1
                style={{
                  color: "white",
                  textAlign: "center",
                  fontWeight: "20",
                  fontSize: "30px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  paddingTop: "80px",
                }}
              >
                We have deievered food rashons to families
              </h1>
            </div>
            {/* <img src={abouut} style={{ width: "100%", height: "70%" }} /> */}

            <h1
              style={{ color: "green", textAlign: "center", fontSize: "60px" }}
            >
              9000+
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

{
  /* <Campaignrender
                        name={item.name}
                        description={item.description}
                        img={item.fileName}
                        donation={item.donation}
                      /> */
}

// onClick={() => {
//   window.location.href =
//     "/CampaignDetail?name=" +
//     item.name +
//     "&description=" +
//     item.description +
//     "&img=" +
//     item.fileName +
//     "&donation=" +
//     item.donation +
//     "&campaignid=" +
//     item._id;
// }}
