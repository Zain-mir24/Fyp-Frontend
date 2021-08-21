import { TextField } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import React from "react";
function Form() {
    const classes = useStyles();

  return (
    <div className={classes.root}>
      <form className={classes.form} >
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
    
          label="Campaign header"
          name="email"
          autoComplete="email"
          autoFocus
        />

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
         
          label="Campaign Subject"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
        
          label="description"
          name="email"
          autoComplete="email"
          autoFocus
        />
      </form>
    </div>
  );
}
function AdminCampaign() {
  return (
    <div>
      <Form />
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
    root: {
      height: '50vh',
      border:"2px solid black"
    },
    
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

export default AdminCampaign;
