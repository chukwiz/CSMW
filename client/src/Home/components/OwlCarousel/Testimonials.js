import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

class Testimonials extends Component{
    render(){
        return(
            <div className="testimonials-slider testimonials-grids">
            <OwlCarousel
            className="owl-theme"
            loop
            autoplay={true}
            autoplayHoverPause={true}
            smartSpeed={300}
            dots={false}
            nav={true}
            items={2}
            navText={[<i class="fa fa-chevron-left"></i>,<i class="fa fa-chevron-right"></i>]}
            // navText= [<i class="fa fa-chevron-left"></i>, <i class="fa fa-chevron-right"></i>]
            >
                <div className="grid">
              <div className="client-pic">
                <img src="assets/images/testimonials/img-1.jpg" alt />
              </div>
              <div className="details">
                <h4>Monica Hall</h4>
                <span className="client-post">CEO, Bream-Hall Partners</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et.
                </p>
              </div>
            </div>
            <div className="grid">
              <div className="client-pic">
                <img src="assets/images/testimonials/img-2.jpg" alt />
              </div>
              <div className="details">
                <h4>Jared Dunn</h4>
                <span className="client-post">CEO, Bream-Hall Partners</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et.
                </p>
              </div>
            </div>
            <div className="grid">
              <div className="client-pic">
                <img src="assets/images/testimonials/img-1.jpg" alt />
              </div>
              <div className="details">
                <h4>Monica Hall</h4>
                <span className="client-post">CEO, Bream-Hall Partners</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et.
                </p>
              </div>
            </div>
            </OwlCarousel>
      </div> 
        )
    }
}

export default Testimonials;