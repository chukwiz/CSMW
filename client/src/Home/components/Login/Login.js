import React,{Component} from 'react';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import './Login.css';
import {login} from '../UserFunctions/UserFunctions';
import history from '../../../history';

import axios from 'axios';


class Login extends Component{

state = {
  email:"",
  password:"",
  auth:"",
  error:"",
  loading:false
}

onChange = (e) => {
  this.setState({[e.target.name]: e.target.value})
}

onSubmit = (e) => {
  e.preventDefault()

  const User = {
    email:this.state.email,
    password:this.state.password
  }
  this.setState({loading:true})

  login(User)
  .then(res => {
    if(res) {
      // console.log(res.data)
      if( res.data.error){
        this.setState({loading:false,error:res.data.error})
      }else{
        if(res.data.admin){
          // history.push('/admin')
          // history.replace('http://localhost:4000/admin')
          axios.get('/admin')
        } else{
          this.setState({loading:false})
      localStorage.setItem('auth', res.headers['x-auth'] )
      this.setState({auth:res.headers['x-auth']})
      history.push('/dashboard')
        }
        
      }
    }
    else{
      this.setState({loading:false,error:'Incorrect Login details'})
    }
  })
  .catch(error => {
    console.log(error)
  })
}


    render(){
        return(
            <div className = "body">
  {/* <div className="background" />
  <div className="background2" /> */}
      <Backdrop style={{zIndex:"10000000", color:"#fff"}} open ={this.state.loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
  <div className="loginForm">
    <hgroup>
      <h1>Please, Login</h1>
    </hgroup>
    <form onSubmit = {this.onSubmit}>
    {this.state.error?<p style={{color:"#fff", backgroundColor:"#df2525",borderRadius:"4px",padding:"10px"}}>{this.state.error}</p>:""}

      <div className="group">
      <label htmlFor = "email" >Email</label>
        <input type="email" className="" name="email" value = {this.state.email} onChange = {this.onChange} />
        <span className="highlight" />
        <span className="bar" />
        
      </div>
      <div className="group">
      <label htmlFor = "password">Password</label>
        <input type="password" name="password" value = {this.state.password} onChange= {this.onChange} />
        <span className="highlight" />
        <span className="bar" />
        
      </div>
      <button type="submit" className="buttonui ">
        {" "}
        <span>Login</span>
        <div className="ripples buttonRipples">
          <span className="ripplesCircle" />
        </div>
      </button>
    </form>
    <div className="powered">
      copyright <a href="/">csmwealth</a>
    </div>
  </div>
</div>
        )
    }
}

export default Login;