import React,{Component} from 'react';
import Login from '../../components/Login/Login'
import './SignIn.css';
import Header from '../../components/Includes/Header';
import Footer from '../../components/Includes/Footer';


class SignIn extends Component{
    render(){
        return(
            <div>
              <Header/>
              <div className="formbody">
              <Login/>
              </div>
              
              <Footer/>
            </div>
        )
    }
}

const styles= {
  body: {
    height:"100vh",
    padding:"5%",
    background:"linear-gradient(90deg, rgba(16,65,5,1) 0%, rgba(97,155,23,1) 100%)",
  },
}

export default SignIn;