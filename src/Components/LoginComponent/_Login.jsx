import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios"

class Login extends Component{
    constructor(){
        super()
            this.state = {
                userName:'',
                password:''
            }   
            this.changeUserName = this.changeUserName.bind(this)
            this.changePassword = this.changePassword.bind(this)
            this.onLogin = this.onLogin.bind(this)
    }

    changeUserName(event){
        this.setState({
            userName:event.target.value
        })
    }

    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }

    onLogin(event){
        event.preventDefault()

        const registered = {
            userName:this.state.userName,
            password:this.state.password
        }

        axios.get('http://localhost:4000/app/login', registered)
        .then(response => console.log(response.data))

        this.setState({
            fullName:'',
            userName:'',
            email:'',
            password:''
        })
    }
   
    render(){
        return (
            <div>
                <div className='container'>
                    <div className='form-div'>
                      <form onSubmit={this.onLogin}>
                        <input type ='text'
                        placeholder='Username'
                        onChange={this.changeUserName}
                        value={this.state.userName}
                        className='form-control form-group'
                        />
                        <input type ='password'
                        placeholder='Password'
                        onChange={this.changePassword}
                        value={this.state.password}
                        className='form-control form-group'
                        />
                        <input type='submit' className='btn btn-danger btn-block' value="Login" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;