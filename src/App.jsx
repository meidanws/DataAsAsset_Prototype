import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Login from './Components/LoginComponent/Login'

import ReactDOM from 'react-dom'

class App extends Component{

    render(){
        return (
            <div>
              <Login/>   
           
            </div>         
            
        );
    }
}
export default App;
