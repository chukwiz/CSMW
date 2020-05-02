import React,{Component} from 'react';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Link} from 'react-router-dom';

import './Login.css';
import {login,forgot} from '../UserFunctions/UserFunctions';
import history from '../../../history';

import axios from 'axios';


class Login extends Component{

state = {
  email:"",
  password:"",
  auth:"",
  error:"",
  forgotemail:"",
  forgoterror:"",
  loading:false
}

onChange = (e) => {
  this.setState({[e.target.name]: e.target.value})
}

onforgotSubmit = (e) => {
  e.preventDefault()
  const forgotemail = this.state.forgotemail
  this.setState({loading:true})
  forgot(forgotemail)
  .then((res) => {
    this.setState({loading:false,forgoterror:`A password reset link has been sent to ${this.state.forgotemail}`})
  })
  .catch(err => {
    this.setState({loading:false,forgoterror:"an error occured"})
  })
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
      </button><br /><br />
      <a href="forgotpassword" data-toggle="modal" data-target="#exampleModal">Forgot Password?</a>
    </form>
    <div className="powered">
      {/* copyright <a href="/">csmwealth</a> */}
      Don't have an account? <Link to="/register">Sign Up</Link>
    </div>
    {/* <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Password Recovery</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      {this.state.forgoterror?<p>{this.state.forgoterror}</p>:""}
      A password reset link will be sent to your email<br />
       <label>Email</label>
       <input name="forgotemail" value = {this.state.forgotemail} onChange = {this.onChange} />
      </div>
      <div class="modal-footer">
      <button type="button" class="btn btn-primary" onClick={this.onforgotSubmit}>Submit</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div> */}
  </div>
</div>
        )
    }
}

export default Login;