import React from 'react';
import SignupForm from '../../components/SignUp/UserForm';
import './SignUp.css';
import Header from '../../components/Includes/Header';
import Footer from '../../components/Includes/Footer';

const SignUp = () => {
    return (
        <div>
        <Header/>
        <div className="formbodyy">
          <SignupForm />
        </div>
        <Footer/>
        </div>
      );
}

const styles= {
  body: {
    height:"100vh",
    padding:"10% 30%",
    background:"linear-gradient(90deg, rgba(16,65,5,1) 0%, rgba(97,155,23,1) 100%)",
  },
}

export default SignUp;