import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@material-ui/data-grid";
const style = {
  float: "left",
};
export default function Sidebar() {
  const [getApi, setApi] = useState([]);
  const getData = async () => {
    const response = await axios.get("http://localhost:9000/admin/users");
    const data = await response.data;
    setApi(data);
  };
  useEffect(async () => {
    getData();
  }, []);

  return (
    <div style={{ height: 250, width: "100%" }}>
      {getApi.map((user) => {
        const { _id, name, email } = user;
        const rows = [
          {
            id: _id,
            username: name,
            Email: email,
          },
        ];
        console.log(name);
        return (
          <DataGrid
            columns={[
              { field: "id", width: 200 },
              {
                field: "username",
                width: 200,
              },
              { field: "Email", width: 200 },
            ]}
            rows={rows}
          />
        );
      })}
    </div>
  );
}
