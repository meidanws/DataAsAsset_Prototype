import React from "react";
import { BrowserRouter, Route,Switch } from "react-router-dom";
import "./HomePage.css";
import auth from "../LoginComponent/auth";
import { Redirect,Link  } from "react-router-dom";
import { render } from "@testing-library/react";
import { useState } from "react";

function Homepage() {
    const user =  JSON.parse(localStorage.getItem("user"))
    const [loggedOut, setLoggedOut] = useState(false)
    console.log(user)

    const logout = () => {
        auth.logout()
        localStorage.removeItem("user")
        setLoggedOut(true)
    
      };

      if (loggedOut) {
        return <Redirect to="/" push={true} />
      }

    if(auth.authenticated || user != null){  
        
    return <div className="dashboard" >
        <h3 color="white"> Welcome {user.fullName} </h3>
        <button onClick={logout}>Logout</button>
    </div>
    }
    else{
        return <Redirect to={"/"} />
    }

}

export default Homepage;