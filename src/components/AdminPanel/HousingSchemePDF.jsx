import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";
import Pdf from "react-to-pdf";
import url from "../../config/axios"
import "./styles.css";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Image,

} from "@react-pdf/renderer";
const ref = React.createRef();

function HousingSchemePDF(props) {
  const [ProposalNo, setProposalNo] = useState(props.ProposalNo);
  const [needs, setNeeds] = useState(props.needs);
  const [outcomes, setOutcomes] = useState(props.outcomes);
  const [communicationFeedback, setCommunicationFeedback] = useState(props.communicationFeedback);

  console.log(props.data, "data")
  var splitStringList = (string) => { };

  const getData = async () => {
    // const formData = new FormData();
    // formData.append("ProposalNo", ProposalNo);
    // formData.append("needs", needs);
    // formData.append("outcomes", outcomes);
    // formData.append("communicationFeedback", communicationFeedback);
    console.log(ProposalNo, "HELLO");
    try {
      const res = await url.patch(
        "/admin/updatehousingscheme/" + props.data._id,
        {
          ProposalNo: ProposalNo,
          needs: needs,
          outcomes: outcomes,
          communicationFeedback: communicationFeedback,
        }
      );
      console.log(res, "Successfully send");
      alert(`${props.name} \n 
           Your form has been submitted`);
    } catch (ex) {
      alert(`${props.name} \n 
          Your form was not submitted`);
      console.log(ex);
    }
  };

  const styles = StyleSheet.create({
    page: {
      backgroundColor: "#fff",
      color: "white",
      padding: "20px"
    },
    section: {
      margin: 10,
      padding: 10,
    },
    viewer: {
      width: window.innerWidth, //the pdf viewer will take up all of the width and height
      height: window.innerHeight,
    },
    heading: {
      color: "blue"
    },
    content: {
      color: "black"
    },
    headingView: {
      flexDirection: "row",
      padding: "20px 0"
    }
  });
  return (
    <div style={{ height: "600px", overflow: "scroll" }}>
      <h1>Update Form</h1>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item
          label="Proposal No: "
          rules={[
            {
              required: true,
              message: "Please enter Proposal No",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setProposalNo(e.target.value);
            }}
          />
        </Form.Item>
        <span>Seperate String with | symbol to show in list</span>
        <br />
        <br />
        <Form.Item
          label="Needs: "
          rules={[
            {
              required: true,
              message: "Please enter Beneficiary Needs",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setNeeds(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Outcomes: "
          rules={[
            {
              required: true,
              message: "Please enter Project Outcomes",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setOutcomes(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Communication Feedback: "
          rules={[
            {
              required: true,
              message: "Please enter Communication Feedback",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setCommunicationFeedback(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => {
              //   setBid(user.userId);
              getData();
            }}
          >
            Submit proposal
          </Button>
        </Form.Item>
      </Form>
      {/* <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf> */}
      <PDFViewer style={styles.viewer}><Document>
        {/*render a single page*/}
        <Page size="A4" style={styles.page}>
          <View style={{ flexDirection: "row" }}>
            <Image src="/Images/GlobalReach.png" style={{ width: "40%" }} />
            <View style={{ width: "30%" }}></View>
            <Text style={{ color: "black", fontSize: "16px" }}>ISLAMABAD OFFICE: {"\n"}
              House No 15, Block‐3, {"\n"}502 Colony
              Quarters,{"\n"}
              Adyala Road {"\n"}  Rawalpindi, Pakistan. </Text>

          </View>
          <View style={{ padding: "30px" }}></View>
          <View style={styles.headingView}>
            <Text style={styles.heading}>Proposal number: </Text><Text style={styles.content}> {props.data.ProposalNo ? props.data.ProposalNo : "not verified"}</Text>

          </View>
          <View style={styles.headingView}>
            <Text style={styles.heading}>Name: </Text><Text style={styles.content}> {props.data.Deservername}</Text>

          </View>
          <View style={styles.headingView}>
            <Text style={styles.heading}>CNIC: </Text><Text style={styles.content}> {props.data.cnic}</Text>
          </View>
          <View style={styles.headingView}>
            <Text style={styles.heading}>Cell: </Text><Text style={styles.content}> {props.data.cell}</Text>
          </View>
          <View style={styles.headingView}>
            <Text style={styles.heading}>Address: </Text><Text style={styles.content}> {props.data.address}</Text>
          </View>
          <View style={styles.headingView}>
            <Text style={styles.heading}>Guardian: </Text><Text style={styles.content}> {props.data.Guardian}</Text>
          </View>
          <View style={styles.headingView}>
            <Text style={styles.heading}>Status: </Text><Text style={styles.content}> {props.data.Status}</Text>
          </View>
          <View style={styles.headingView}>
            <Text style={styles.heading}>Guardian: </Text><Text style={styles.content}> {props.data.Guardian}</Text>
          </View>
          <View style={styles.headingView}>
            <Text style={styles.heading}>Source Of Income: </Text><Text style={styles.content}> {props.data.Sourceofincome}</Text>
          </View>
          <View style={styles.headingView}>
            <Text style={styles.heading}>Monthly Income: </Text><Text style={styles.content}> {props.data.Monthlyincome}</Text>
          </View>
          <View style={styles.headingView}>
            <Text style={styles.heading}>Estimated Cost: </Text><Text style={styles.content}> {props.data.EstimatedCost}</Text>
          </View>
          <View style={styles.headingView}>
            <Text style={styles.heading}>Plot Dimension: </Text><Text style={styles.content}> {props.data.PlotDimensions}</Text>
          </View>
          <View style={styles.headingView}>
            <Text style={styles.heading}>Family Details</Text>
          </View>
          {props.data?.family.map((item) => {
            return (
              <View style={styles.headingView}>
                <Text style={styles.heading}>Name: {item.name} </Text><Text style={styles.content}> Age | {item.age} </Text>
              </View>
            )
          })}
          <View style={styles.headingView}>
            <Text style={styles.heading}>Construction Details: </Text><Text style={styles.content}> {props.data.constructionDetails}</Text>
          </View>
          <View style={styles.headingView}>
            <Text style={styles.heading}>Estimated Time frame: </Text><Text style={styles.content}> {props.data.EstimatedTimeFrame}</Text>
          </View>
          <View style={styles.headingView}>
            <Text style={styles.heading}>Needs: </Text><Text style={styles.content}> {props.data.needs}</Text>
          </View>
          <View style={styles.headingView}>
            <Text style={styles.heading}>Outcomes: </Text><Text style={styles.content}> {props.data.outcomes}</Text>
          </View>
          <View style={styles.headingView}>
            <Text style={styles.heading}>Communicationfeedback: </Text><Text style={styles.content}> {props.data.communicationFeedback}</Text>
          </View>
          <Image
            src={"http://localhost:9000/uploads/" + props.data.fileName}
            download
          />
          <Image
            src={"http://localhost:9000/uploads/" + props.data.fileName2}
            download
          />
          <Image
            src={"http://localhost:9000/uploads/" + props.data.fileName3}
            download
          />
          <Image
            src={"http://localhost:9000/uploads/" + props.data.fileName4}
            download
          />



        </Page>
      </Document></PDFViewer>
      {/* <div ref={ref} style={{ backgroundColor: "white", padding: "50px" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <Image src="/Images/GlobalReach.png" />
            </div>
            <div className="col-lg-6" style={{ position: "relative" }}>
              <div style={{ position: "absolute", right: "0px" }}>
                <p style={{ color: "black" }}>
                  <b>ISLAMABAD OFFICE:</b> <br />
                  House No 15, Block‐3, 502 Colony <br />
                  Quarters, <br />
                  Adyala Road Rawalpindi, Pakistan.
                  <br />
                  Tel: +92 349 4271027
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#019267",
              marginTop: "25px",
              textAlign: "center",
            }}
          >
            <h1 style={{ color: "white", padding: "10px" }}>
              HOUSE CONSTRUCTION SUPPORT
            </h1>
          </div>
          <div style={{ display: "flex", position: "relative" }}>
            <h3>Beneficiary Details</h3>

            <h3 style={{ position: "absolute", right: "20px" }}>
              Proposal No: {props.data.ProposalNo}
            </h3>
          </div>
          <div style={{ padding: "20px", backgroundColor: "#C0A080" }}></div>

          <br />
          <br />

          <div>
            <div style={{ display: "flex" }}>
              <span className="Pdf-blueheadings">Name</span>{" "}
              <ul className="pdf-list-ul">
                <li className="pdf-list-li">{props.data.Deservername}</li>
              </ul>
            </div>
            <div style={{ display: "flex" }}>
              <span className="Pdf-blueheadings">CNIC</span>{" "}
              <ul className="pdf-list-ul">
                <li className="pdf-list-li">{props.data.cnic}</li>
              </ul>
            </div>
            <div style={{ display: "flex" }}>
              <span className="Pdf-blueheadings">Cell</span>{" "}
              <ul className="pdf-list-ul">
                <li className="pdf-list-li">{props.data.cell}</li>
              </ul>
            </div>
            <div style={{ display: "flex" }}>
              <span className="Pdf-blueheadings">Residential Address</span>{" "}
              <ul className="pdf-list-ul">
                <li className="pdf-list-li">{props.data.address}</li>
              </ul>
            </div>
            <div style={{ display: "flex" }}>
              <span className="Pdf-blueheadings">Guardian Name</span>{" "}
              <ul className="pdf-list-ul">
                <li className="pdf-list-li">{props.data.Guardian}</li>
              </ul>
            </div>
            <div style={{ display: "flex" }}>
              <span className="Pdf-blueheadings">Martial Status</span>{" "}
              <ul className="pdf-list-ul">
                <li className="pdf-list-li">{props.data.Status}</li>
              </ul>
            </div>
            <div style={{ display: "flex" }}>
              <span className="Pdf-blueheadings">Source Of Income</span>{" "}
              <ul className="pdf-list-ul">
                <li className="pdf-list-li">{props.data.Sourceofincome}</li>
              </ul>
            </div>
            <div style={{ display: "flex" }}>
              <span className="Pdf-blueheadings">Monthly Income</span>{" "}
              <ul className="pdf-list-ul">
                <li className="pdf-list-li">{props.data.Monthlyincome}</li>
              </ul>
            </div>
            <div style={{ display: "flex" }}>
              <span className="Pdf-blueheadings">Required Cost</span>{" "}
              <ul className="pdf-list-ul">
                <li className="pdf-list-li">{props.data.EstimatedCost}</li>
              </ul>
            </div>
            <div style={{ display: "flex" }}>
              <span className="Pdf-blueheadings">Plot Dimensions</span>{" "}
              <ul className="pdf-list-ul">
                <li className="pdf-list-li">{props.data.PlotDimensions}</li>
              </ul>
            </div>

            <div style={{ display: "flex" }}>
              <span className="Pdf-blueheadings">Family Details</span>{" "}
              <ul className="pdf-list-ul">
                {props.data.family.map((item) => {
                  return (
                    <li className="pdf-list-li">
                      Name: {item.name} | Age: {item.age} | Studying:{" yes"}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div style={{ display: "flex" }}>
              <span className="Pdf-blueheadings">Construction Details</span>{" "}
              <ul className="pdf-list-ul">
                <li className="pdf-list-li">{props.data.contructionDetail}</li>
              </ul>
            </div>
            <div style={{ display: "flex" }}>
              <span className="Pdf-blueheadings">Estimated Frame</span>{" "}
              <ul className="pdf-list-ul">
                <li className="pdf-list-li">{props.data.EstimatedTimeFrame}</li>
              </ul>
            </div>
            <div style={{ display: "flex" }}>
              <span className="Pdf-blueheadings">Needs</span>{" "}
              <ul className="pdf-list-ul">
                {props.data.needs === null ? (<div>
                  None yet
                </div>)
                  :
                  props.data.needs.split("|").map((item) => {
                    return (
                      < div >
                        <li className="pdf-list-li">{item}</li>
                      </div>
                    );
                  })
                }
              </ul>
            </div>
            <div style={{ display: "flex" }}>
              <span className="Pdf-blueheadings">Outcomes</span>{" "}
              <ul className="pdf-list-ul">
                {props.data.outcomes === null ? (<div>
                  None yet
                </div>)
                  :
                  props.data.outcomes.split("|").map((item) => {
                    return (
                      <div>
                        <li className="pdf-list-li">{item}</li>
                      </div>
                    );
                  })
                }
              </ul>
            </div>
            <div style={{ display: "flex" }}>
              <span className="Pdf-blueheadings">Communication Feedback</span>{" "}
              <ul className="pdf-list-ul">
                {props.data.communicationFeedback === null ? (<div>
                  None yet
                </div>)
                  : props.data.communicationFeedback.split("|").map((item) => {
                    return (
                      <div>
                        <li className="pdf-list-li">{item}</li>
                      </div>
                    );
                  })}
              </ul>
            </div>
            <img
              src={"http://localhost:9000/uploads/" + props.data.fileName}
              download
            />
            <img
              src={"http://localhost:9000/uploads/" + props.data.fileName2}
              download
            />
            <img
              src={"http://localhost:9000/uploads/" + props.data.fileName3}
              download
            />
            <img
              src={"http://localhost:9000/uploads/" + props.data.fileName4}
              download
            />
          </div>
        </div>


      </div > */}
    </div >
  );
}

export default HousingSchemePDF;
