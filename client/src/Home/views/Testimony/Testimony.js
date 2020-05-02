import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import Header from '../../components/Includes/Header';
import Footer from '../../components/Includes/Footer';


class Testimony extends Component{
  render(){
    return(
      <div className="page-wrapper">
      <Header/>
  <section className="page-title">
    <div className="container">
      <div className="row">
        <div className="col col-xs-12">
          <h2>Testimonials</h2>
          <ol className="breadcrumb">
            <li>
              <a href="/">Home</a>
            </li>
            <li>Testimonials</li>
          </ol>
        </div>
      </div>{" "}
      {/* end row */}
    </div>{" "}
    {/* end container */}
  </section>
  {/* end page-title */}
  {/* start testimonials-pg-content */}
  <section className="testimonials-pg-content section-padding">
    <div className="container">
      <div className="row">
        <div className="col col-lg-10 col-lg-offset-1">
          <div className="testimonials-grids">
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
                <img src="assets/images/testimonials/img-3.jpg" alt />
              </div>
              <div className="details">
                <h4>Richard Hendrics</h4>
                <span className="client-post">CEO, Bream-Hall Partners</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et.
                </p>
              </div>
            </div>
            <div className="grid">
              <div className="client-pic">
                <img src="assets/images/testimonials/img-4.jpg" alt />
              </div>
              <div className="details">
                <h4>Karen Murphy</h4>
                <span className="client-post">CEO, Bream-Hall Partners</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et.
                </p>
              </div>
            </div>
            <div className="grid">
              <div className="client-pic">
                <img src="assets/images/testimonials/img-5.jpg" alt />
              </div>
              <div className="details">
                <h4>Sean Parker</h4>
                <span className="client-post">CEO, Bream-Hall Partners</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et.
                </p>
              </div>
            </div>
            <div className="grid">
              <div className="client-pic">
                <img src="assets/images/testimonials/img-6.jpg" alt />
              </div>
              <div className="details">
                <h4>Elon Mask</h4>
                <span className="client-post">CEO, Bream-Hall Partners</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>{" "}
    {/* end container */}
  </section>
  <Footer/>
</div>
    )
  }

}

export default Testimony;