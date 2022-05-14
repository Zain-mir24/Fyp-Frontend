import { React, useEffect, useState } from "react";
import Header from "../Headers/Header";
import { Layout, Image, Card, Progress, Button, Input } from "antd";
import axios from "axios";
import Footer from "../Footer/Footer";
import hands from "../../Images/hands.png";
import StripeCheckout from "react-stripe-checkout";
import abouut from "../../Images/abouut.png";

import Campaignrender from "./Campaignrender";
const { Meta } = Card;

export default function Campaign() {
  const [data, setData] = useState([]);
  const [campaign, setCampaign] = useState({
    name: '',
    description: '',
    img: '',
    donation: 0,
    cid: ''
  })
  const [check, setCheck] = useState(true)
  console.log(campaign.name)
  const [collection, setCollection] = useState(0);
  const [totalamount, setAmount] = useState(0);
  const [file, setFile] = useState()
  var cid = campaign.cid;
  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:9000/admin/viewCampaigns");
      await setData(res.data.campaign);
      console.log(res.data.campaign);
    } catch (e) {
      console.log(e);
    }
  };
  const getAmount = async () => {
    try {
      console.log(cid)
      const result = await axios.get(
        `http://localhost:9000/donation/viewDonation/${cid}`
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
  const viewTeams = async () => {
    try {
      const res = await axios.get("http://localhost:9000/Admin/viewAudits")
      console.log(res.data.view, "viewing Teams")
      res.data.view.filter((i) => {
        return i.Cid._id === cid ? setFile(i.fileName) : null
      })

    } catch (e) {
      console.log(e)
    }
  }
  const sendPayment = (token) => {
    console.log(campaign.cid)
    const body = {
      token,
      name: campaign.name,
      totalamount,
      campaignId: campaign.cid,
      userId: null,
    };

    return axios
      .post("http://localhost:9000/stripe/pay", body)
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
                    <div className="col-lg-6" style={{ padding: "4px" }}>

                      <Card
                        onClick={() => {
                          console.log(item.name)

                          setCampaign({ ...campaign, name: item.name, description: item.description, img: item.fileName, donation: item.donation, cid: item._id })
                          setCheck(false)


                          getAmount()
                          viewTeams()
                        }}
                        style={{
                          backgroundColor: "#F5F5F5",

                        }}
                        cover={
                          <img
                            style={{ height: "250px" }}
                            src={"http://localhost:9000/uploads/" + item.fileName}
                          />
                        }>
                        <h2 style={{ height: "100px" }}>{item.name}</h2>
                      </Card>
                    </div>


                  );
                })}
            </div>

          </div>

          <div className="col-lg-6">
            {check ? <div className="container">
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
                  <h1 style={{ color: "white", textAlign: "center" }}>
                    This world needs your help, Come join us because we care.
                    psum dolor sit amet, consecte tur adipiscing elit. Vitae mattis
                    tellus aliqu am ac ut viverra viverra pharetra sed. Lorem ipsum
                    dolor sit amet, conse
                  </h1>
                </div>
              </div>

            </div> : <div className="container">
              <div className="row">


                {campaign.donation <= collection ?
                  <div className="col-lg-6" style={{ textAlign: "right" }}>
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
                  : <div className="col-lg-6" style={{ textAlign: "right" }}>
                    <button
                      style={{
                        background: "transparent",
                        border: "2px solid green",
                        padding: "5px 10px",
                      }}
                    >
                      Amount To Be Collected: {campaign.donation - collection} PKR
                    </button>
                  </div>}

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
                    {campaign.donation < collection ? null : <Input style={{ border: "1px solid black", width: "40%" }}
                      placeholder="enter donation amount (pkr)"
                      onChange={(e) => {
                        setAmount(e.target.value);
                      }}
                    />}

                    {
                      totalamount < 1000 || totalamount > 999999 ?
                        null : <StripeCheckout
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
                    }

                    {
                      file ?
                        <div>
                          <h2>
                            Audit for this Campaign
                          </h2>
                          <a
                            href={
                              "http://localhost:9000/uploads/" + file
                            }
                            download>
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
                        : <h2>
                          No audit yet
                        </h2>
                    }



                  </div>
                </div>
              </section>

              <section style={{ margin: "50px 0" }}>
                <div style={{ textAlign: "center" }}>
                  <h3>Percentage</h3>
                  <Progress
                    strokeColor={"#1B9834"}
                    percent={Math.floor((collection / campaign.donation) * 100)}
                  />
                </div>
              </section>

            </div>}


          </div>

        </div>
        <div>
          <h1>
            Static carousel will be here
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}



{/* <Campaignrender
                        name={item.name}
                        description={item.description}
                        img={item.fileName}
                        donation={item.donation}
                      /> */}




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