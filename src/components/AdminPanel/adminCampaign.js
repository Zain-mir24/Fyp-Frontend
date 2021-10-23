import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
const axios = require("axios");
function Form() {
  const classes = useStyles();
  const [getApi, setApi] = useState([]);
  const[image,setimage]=useState()
  const getData = async () => {
    await axios({
      method: "post",
      url: "http://localhost:9000/admin/addNews",
      data: {
        Name: "Finn",
        desc: "This is our data",
        img:image
      },
    });
  };

  return (
    <div className={classes.root}>
      <form className={classes.form}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Campaign header"
          name="Campaign header"
          autoFocus
        />

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Campaign Subject"
          name="Campaign Subject"
          name="email"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="description"
          name="description"
          autoFocus
        />
        <TextField
          name="upload-photo"
          type="file"
          variant="outlined"
          margin="normal"
          name="file"
          required
          fullWidth
          autoFocus
          onChange={e => setimage(e)}
        />
        <button
          onClick={() => {
            getData();
          }}
        >
          submit
        </button>
      </form>
    </div>
  );
}
function CampaignCard() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Rikshaw Campaign For Chaudhary Zain</h1>
      <h3 style={styles.heading}>
        Chaudhary Zain Naeem Mir Khawaja is very in need of Rikshaw as he cannot
        find suitable job in field of Computer Science. Kindly donate some money
        to help my mazloom friend.
      </h3>
      <button className="btn btn-danger">DONATE NOW</button>
    </div>
  );
}
function AdminCampaign() {
  return (
    <div>
      <Form />
      <CampaignCard />
    </div>
  );
}
const styles = {
  container: {
    backgroundImage: "url('./Hepkursus-header.jpg')",
    backgroundRepeat: "no-repeat",
    height: "300px",
    paddingTop: "50px",
    marginBottom: "30px",
    marginTop: "100px",
    padding: "10px",
  },
  heading: {
    color: "white",
    fontFamily: "Roboto-Mono",
  },
};
const useStyles = makeStyles((theme) => ({
  root: {
    height: "40vh",
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    "@media (max-width: 900px)": {
      color: "blue",
    },
  },
}));

export default AdminCampaign;
