import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Login from './Components/LoginComponent/Login'

class App extends Component{

    render(){
        return (
            <div>
                <div className='container'>
                    <div className='row mt-5'>
                        <div className='col-md-6 m-auto'>
                            <Login/>
                        </div> 
                     </div>
                </div>
            </div>
            
        );
    }
}

export default App;