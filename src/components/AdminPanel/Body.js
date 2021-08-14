import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { Admin, Resource, ListGuesser } from "react-admin";
import simpleRestProvider from 'ra-data-simple-rest';
import jsonServerProvider from "ra-data-json-server";
import  axios from 'axios'

function Body() {
    const [getApi, setApi] = useState("");
    const Userdata = axios({
        method: "get",
        url: "http://localhost:9000/admin/users"
      }).then((res) =>setApi("res", res));
      
  return (
    <div>
      <Admin dataProvider={simpleRestProvider (("http://localhost:9000/admin/users"))}>
        <Resource name="users" list={getApi} />
      </Admin>
      <Sidebar />
    </div>
  );
}

export default Body;
