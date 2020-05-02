import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

class Partners extends Component{
    render(){
        return(
            <div className="partners-slider">
            <OwlCarousel
            className="owl-theme"
            loop
            autoplay={true}
            margin={30}
            autoplayHoverPause={true}
            smartSpeed={300}
            dots={false}
            items={6}>
                <div className="grid">
                    <img src="assets/images/partners/img-1.png" alt />
                </div>
                <div className="grid">
                    <img src="assets/images/partners/img-2.png" alt />
                </div>
                <div className="grid">
                    <img src="assets/images/partners/img-3.png" alt />
                </div>
                <div className="grid">
                    <img src="assets/images/partners/img-4.png" alt />
                </div>
                <div className="grid">
                    <img src="assets/images/partners/img-5.png" alt />
                </div>
                <div className="grid">
                    <img src="assets/images/partners/img-3.png" alt />
                </div>
            </OwlCarousel>
      </div> 
        )
    }
}

export default Partners;