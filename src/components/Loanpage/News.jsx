import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Headers/Header";
import "./Latestnews.css";
import world from "../../Images/newWorld.jpeg"

function News() {
  return (
    <div>
      <Header />
      <div style={{ backgroundImage: `url(${world})` }} className="mydiv containerFluid">
        <div className="alignNews">
          <h1 className="title">
            <span style={{ fontSize: "90px" }}>
              Know
            </span> Whats Happening </h1>
          <p style={{ color: "#929292" }}>
            We are making  endless efforts to help people <br></br>
            around the world overcome hardships they face,<br></br>
            which could and will not be possible without <br></br>
            your help !
          </p>
          <a href="/Campaign">
            <div style={{ borderColor: "green", border: "1px solid #279040", width: "300px", height: "60px", marginLeft: "13em" }}>
              <h1 style={{ color: "#279040", paddingTop: "0.3em" }}>
                Our Campaign
              </h1>

            </div>
          </a>
        </div>
      </div >

      <div className="container-fluid">
        <div className="row">
          <h1 style={{ paddingLeft: "1em", fontWeight: "30px" }}>
            Never the same again
          </h1>
          <div className="col-lg-8" style={{ flex: 1 }}>
            <img src={world} style={{ width: "40%", height: "70%", padding: "10px", float: "left" }} />

            <p>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Vitae mattis tellus aliqu
              am ac ut viverra viverra pharetra sed.
              Lorem ipsum dolor sit amet, consecte
              tur adipiscing elit. Vitae mattis tellus aliqu
              am ac ut viverra viverra pharetra sed.
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Vitae mattis Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Vitae mattis tellus aliqu
              am ac ut viverra viverra pharetra sed.
              Lorem ipsum dolor sit amet, consecte
              tur adipiscing elit. Vitae mattis tellus aliqu
              am ac ut viverra viverra pharetra sed.
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Vitae mattis Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Vitae mattis tellus aliqu
              am ac ut viverra viverra pharetra sed.
              Lorem ipsum dolor sit amet, consecte
              tur adipiscing elit. Vitae mattis tellus aliqu
              am ac ut viverra viverra pharetra sed.
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Vitae mattis
            </p>


          </div>
          <div className="col-lg-4">
            <div>
              <img src={world} style={{ width: "40%", height: "70%" }} />
              <p style={{ width: "40%", height: "70%", background: "#C4C4C4" }}>
                Never the same again
              </p>
            </div>

          </div>
        </div>

      </div>
      <Footer />

    </div>


  );
}

export default News;










// <div className="row">
//           <div className="col-lg-6">

//             <a href="/NewsDetails"><h1>
//               See our Going campaigns
//             </h1></a>

//             <p style={{ fontSize: 25 }}>
//               The campaigns that we have completed. How we help the people and our organization is only for the people
//               and it is to the people.The campaigns that we have completed. How we help the people and our organization is only for the people
//               and it is to the people.The campaigns that we have completed. How we help the people and our organization is only for the people
//               and it is to the people.The campaigns that we have completed. How we help the people and our organization is only for the people
//               and it is to the people.
//             </p>
//             july 21,2021

//           </div>
//           <div className="col-lg-6" style={{ textAlign: "left" }}>
//             <img className="styleImages" src={"./Images/Latest.png"}></img>
//           </div>
//           <div className="col-lg-6">
//             <img className="styleImages" src={"./Images/Ongoing.jpg"}></img>
//           </div>
//           <div className="col-lg-6" style={{ textAlign: "left" }}>
//             <h1>
//               <a style={{ color: "black" }} href="/NewsDetails">
//                 See our  Completed campaigns
//               </a>
//             </h1>

//             <p style={{ fontSize: 25 }}>
//               The campaigns that we have completed. How we help the people and our organization is only for the people
//               and it is to the people.The campaigns that we have completed. How we help the people and our organization is only for the people
//               and it is to the people.The campaigns that we have completed. How we help the people and our organization is only for the people
//               and it is to the people.The campaigns that we have completed. How we help the people and our organization is only for the people
//               and it is to the people.
//             </p>
//             july 21,2021
//           </div>
//           <div className="col-lg-12">
//             <img className="mainImage" src={"./Images/Blog1.jpg"}></img>
//             <div className="centered">
//               <h1 style={{ color: "white" }}>
//                 Click to see our photo gallery
//               </h1>
//             </div>
//           </div>