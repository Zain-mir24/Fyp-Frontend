import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

function Body() {
  const [getApi, setApi] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9000/admin/users")
      .then((res) => setApi([...getApi, res]));
  });

  return (
    <div>
      <div>
        {getApi.map((user) => {
          return (
            <tr>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          );
        })}
      </div>
      <Sidebar />
    </div>
  );
}

export default Body;
