import React from "react";
import { Table, Button } from "antd";
export default function MonthlySupportDetail(props) {
  console.log(props);
  return (
    <div>
      <p>Name: {props.data[0].name}</p>
      <p>Phone: {props.data[0].phone}</p>
      <p>CNIC: {props.data[0].cnic}</p>
      <p>Category: {props.data[0].category}</p>
      <p>
        Birth Certificate:{" "}
        <a
          href={"http://localhost:9000/uploads/" + props.data[0].bformname}
          download
        >
          <Button
            style={{
              width: "100%",
              wordWrap: "break-word",
              whiteSpace: "normal",
              height: "100%",
            }}
          >
            Download
          </Button>
        </a>
      </p>
    </div>
  );
}
