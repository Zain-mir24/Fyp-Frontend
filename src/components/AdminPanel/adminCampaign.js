import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { Table, Button } from "antd";
const axios = require("axios");
function Form() {
  const [camp, setCamp] = useState([]);
  const [name, setName] = useState("");
  const [description, setdesc] = useState("");
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };
  useEffect(() => {
    viewCamp();
    
  }, []);
  const postData = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("file", file);
    formData.append("fileName", fileName);

    
    try {
      
      const res = await axios.post(
        "http://localhost:9000/admin/addCampaign",
        formData
      );
      if(!res){
        return console.log("couldnt add")
      }
      alert(`Campaign has been added`);
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
  };
  const viewCamp = async () => {
    try {
      const res = await axios.get("http://localhost:9000/admin/viewCampaigns");
      console.log(res, "Response from the backend");
      setCamp(
        res.data.map(i=>({
             id:i._id,
             name:i.name
        }))
      )
    } catch (e) {
      console.log(e)
    }
  };

  const deleteCamp = async () => {
    try {
      const res = await axios.delete(
        "http://localhost:9000/admin/viewCampaigns"
      );
      console.log(res, "Response from the backend");
    } catch (e) {}
  };
  
  const columns = [
    {
      title: "_id",
      dataIndex: "id",
      key: "id",
      render: (text) => <a>{text}</a>,
    },
    
    {
      title: "Title",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <button      >
          Delete
        </button>
      ),
    },]

  return (
    <div className="row">
      <div className="col-lg-6">
        <form>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Campaign header"
            name="Campaign header"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="description"
            name="description"
            onChange={(e) => {
              setdesc(e.target.value);
            }}
          />
          <TextField
            type="file"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={saveFile}
          />
          <Button onClick={postData}>submit</Button>
        </form>
      </div>
      <div className="col-lg-6">
        <Table title={() => " Delete campaigns"} columns={columns}
        dataSource={camp}
        />
      </div>
    </div>
  );
}

export default Form;
