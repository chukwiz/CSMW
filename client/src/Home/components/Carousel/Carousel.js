import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Carousel.module.css';

const Carousels = () => {

    return(
        <div class="carousel-wrapper">
            <Carousel
             transitionTime={1000} 
             infiniteLoop 
             useKeyboardArrows 
             autoPlay 
             showThumbs={false} 
             showStatus={false}
             interval={6000}>
            
                <div style={{height:"85vh",width:"auto",position: "relative",textAlign: "center",background: "black",width: "100vw",overflow: "hidden"}}>
                    <img src="../static/redesign/images/slides/slide10.jpg" style={{objectFit: "cover",opacity:"0.4"}}  />
                    <div style={{position: "absolute",width:"100%",color:"#fff",top: "50%",left:"50%",transform: "translate(-50%, -50%)"}}>
                        <h1 style={{margin:"25px",letterSpacing:"20px",color:"cecece"}}>THE INVESTOR EXCHANGE</h1>
                        <p style={{marginBottom:"50px",fontWeight:"",color:"cecece"}}>The online brokerage that allows sophisticated investors to trade the market and traders to back them.</p>
                        <a className="btn btn-default" href="/signup" style={{fontSize:"150%",color:"#fdfdfd"}}>Create Account</a>
                    </div>
                </div>
                <div style={{height:"85vh",width:"auto"}}>
                    <img src="../static/redesign/images/slides/slide3.jpg" style={{objectFit: "cover",opacity:"0.4"}}  />
                    <div style={{position: "absolute",color:"#fff",top: "50%",left:"50%",transform: "translate(-50%, -50%)"}}>
                        <h1 style={{letterSpacing:"25px",color:"cecece"}}>INVEST</h1>
                        <p style={{letterSpacing:"",color:"cecece"}}>Let's help you secure a future</p>
                        <a className="btn btn-default" href="/signup" style={{fontSize:"150%",color:"#fdfdfd"}}>Create Account</a>
                    </div>
                </div>
                <div style={{height:"85vh",width:"auto"}}>
                    <img src="../static/redesign/images/slides/slide5.jpg" style={{objectFit: "cover",opacity:"0.4"}}  />
                    <div style={{position: "absolute",width:"100%",color:"#fff",top: "50%",left:"50%",transform: "translate(-50%, -50%)"}}>
                        <h1 style={{letterSpacing:"25px",color:"cecece"}}>GROW YOUR WEALTH</h1>
                        <p style={{letterSpacing:"",color:"cecece"}}>Gain financial freedom while taking advantage of our investment options</p>
                        <a className="btn btn-default" href="/signup" style={{fontSize:"150%",color:"#fdfdfd"}}>Create Account</a>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default Carousels;