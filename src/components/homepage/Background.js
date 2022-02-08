import React from "react";
import "./background.css";
import { Table, Button } from "antd";

// 
function Background() {
  return (
    <div className="containerfluid  rowDiv   ">
      <div className="row" style={{ margin: "10px" }}>
        <div
          className="col-lg-6 wholeDiv"
          style={{
            backgroundImage:` url(${"./Images/home.jpeg"})`  ,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="col-lg-6 wholeDiv">
          <p className=" textDiv">
            is a long established fact that a reader will be distracted by the
            readable content of a page when look ing at its layou t. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content her e, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
            <p>

            1. and a search for 'lorem ipsum' will uncover many web site
            <br />
            2.Various versions have evolved over the years, sometimes by
            accident, sometimes on purpose
            <br />
            3. Various versions have evolved over the years, sometimes by
            accident, sometimes on purpose (injected humour and the like).
          </p>
        </p>
        <Button style={{marginLeft:"25%",backgroundColor:"#98FB98",width:"50%"}} >
          Donate  us 
        </Button>
        
        </div>
      </div>
    </div>
  );
}

export default Background;
