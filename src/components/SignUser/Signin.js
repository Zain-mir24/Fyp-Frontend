import React, { useState, useEffect } from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect, useDispatch } from "react-redux";
import { ADD_USER, LOGIN_USER } from "../../store/Actions/userAction";
import { withRouter } from "react-router";
import { LoggingUser } from "../../store/reducers/User";
import axios from "axios";
// signin for already registered user
 function SignIn({history, ...props }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");
   const handlesubmit=async(e)=>{
   e.preventDefault();
    await axios
        .request({
          baseURL:"http://localhost:9000/User",
          url:"/login",
          method:"post",
          data:{
            getEmail,
            getPassword
          }
        }).then(res=>{
          if(res.status==200){
            dispatch(LOGIN_USER({
              getEmail,
              getPassword
            }))
            history.push("/userPanel")
          }
        }) .catch(e=>{
       console.log("our error",e)
     })


   }
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
          Global Reach  Sign in
          </Typography>
          <form className={classes.form} onSubmit={(e)=>handlesubmit(e)}>
          <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={getEmail}
                required={true}
                onChange={(e) => setEmail(e.target.value)}
              />
           <TextField
                variant="outlined"
                required
                fullWidth
                placeholder="password"
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={getPassword}
             
                minLength={7}
                required={true}
                onChange={(e) => setPassword(e.target.value)}
              />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/Signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
           
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const mapStateToProps = (state) => ({
  users: state.user.myuser,
});

export default withRouter(connect(mapStateToProps, { LOGIN_USER })(SignIn));