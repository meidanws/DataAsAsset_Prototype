import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import axios from "axios"

import { useState } from "react";

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {'Copyright © '}
      <Link color="inherit" >
        DataAsAsset
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    fontSize:'8px',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor:'#ffffffba'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main 
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    fontSize:'8px',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();


const HandleSubmit = async e => {
  e.preventDefault();

  const Myuser = { username, password };
  // send the username and password to the server

//   const requestOptions = {
//     method: 'POST',
//     credentials: 'include',
//     headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://127.0.0.1:3000','Access-Control-Allow-Credentials': 'true','Authorization':"mongodb+srv://Meidan1234:Meidan1234@cluster0.v7dog.mongodb.net/mytable?retryWrites=true&w=majority"},
//     body: Myuser
// };

// fetch('http://localhost:4000/app/login', requestOptions)
//     .then(response => response.json())
//     .then(data => this.setState({ postId: data.id }));

  axios.post('https://dataasasset.herokuapp.com/app/login', Myuser)
  .then(res => {
    console.log(res);
    console.log(res.data);
  }).catch(err => {
    console.log(err);
  })
  
  
 
  // store the user in localStorage

  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>

      
        <Avatar className={classes.avatar}>
      
        </Avatar>

        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={HandleSubmit} className={classes.form} noValidate>
         
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            name="username"
            autoComplete="username"
            autoFocus
            label="User Name"
            placeholder="User Name"
            onChange={({ target }) => setUsername(target.value)}
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlineOutlinedIcon />
                  </InputAdornment>
                 
                ),  }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            placeholder="Password"
            autoComplete="current-password"
            onChange={({ target }) => setPassword(target.value)}
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                   <LockOpenIcon/>
                  </InputAdornment>
                 
                ),  }}
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
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8} color="white">
        <Copyright />
      </Box>
    </Container>
  );
}