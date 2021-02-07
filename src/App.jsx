import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Login from './Components/LoginComponent/Login'
import  Homepage  from './Components/DashboardComponent/HomePage'
import { BrowserRouter as Router, Route ,Switch } from "react-router-dom";

class App extends Component{

    render(){
        return (
            <Router>
            <div>
               <Switch>
                <Route path="/" exact component={Login}/>  
                <Route path="/dashboard" exact component={Homepage}/>
               </Switch>
            </div>     
            </Router>        
        );
    }
}
export default App;
 