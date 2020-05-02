import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Includes/Header'; 
import Footer from '../../components/Includes/Footer'; 
import Iframe from 'react-iframe';

const ContactUs = () => {
    return(
      <div className="page-wrapper">
          <Header/>
          <section className="page-title">
    <div className="container">
      <div className="row">
        <div className="col col-xs-12">
          <h2>Contact Us</h2>
          <ol className="breadcrumb">
            <li>
              <a href="/">Home</a>
            </li>
            <li>Contact Us</li>
          </ol>
        </div>
      </div>{" "}
      {/* end row */}
    </div>{" "}
    {/* end container */}
  </section>

  <section className="section-padding about-section-s4">
  <div className="container">
    <div className="row">
    <div className="col col-xs-12">
      <div className="col-md-4" style={{textAlign:"center"}}>
        <i className="fa fa-phone" style={{marginRight:"15px"}}></i>+123 (4567) 890
      </div>
      <div className="col-md-4" style={{textAlign:"center"}}>
        <i className="fa fa-home" style={{marginRight:"15px"}}></i>info@csmwealth.com
      </div>
      <div className="col-md-4" style={{textAlign:"center"}}>
        <i className="fa fa-envelope" style={{marginRight:"15px"}}></i>380 St Ndiala Road, Enugu Trans 6486, Lagos.
      </div>
    </div>
    </div>
    </div>
    </section>
    <section className="section-padding about-section-s4">
  <div className="container">
    <div className="row">
    <div className="mapouter">
  <div className="gmap_canvas">
    <Iframe
      width="100%"
      height={500}
      id="gmap_canvas"
      src="https://maps.google.com/maps?q=1%20Windsor%20Road%2C%20Northam%2C%20Bideford%2C%20Devon%2C%20England%2C%20EX39%201EN&t=&z=17&ie=UTF8&iwloc=&output=embed"
      frameBorder={0}
      scrolling="no"
      marginHeight={0}
      marginWidth={0}
    />
    <a href="https://www.embedgooglemap.net/blog/private-internet-access-coupon/">
      pia coupon
    </a>
  </div>
  <style
    dangerouslySetInnerHTML={{
      __html:
        ".mapouter{position:relative;text-align:right;height:500px;width:100%;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:100%;}"
    }}
  />
</div>
    </div>
    </div>
    </section>

    <section className="contact-section section-padding">
    <div className="container">
      <div className="row">
        <div className="col col-md-6">
          <div className="contact-location-map" id="map" />
        </div>
        <div className="col col-md-6">
          <div className="section-title-s4">
            <h2>Request a call back</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do
              eiusmod tempor incidi dunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="contact-form">
            <form
              method="post"
              id="contact-form"
              className="form row contact-validation-active"
            >
              <div className="col col-sm-6">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                />
              </div>
              <div className="col col-sm-6">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                />
              </div>
              <div className="col col-sm-6">
                <label htmlFor="phone">Phone No</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="phone"
                />
              </div>
              <div className="col col-sm-6">
                <label htmlFor="business">Business Type</label>
                <select name="business" id="business" className="form-control">
                  <option selected disabled>
                    Select one
                  </option>
                  <option>Select number 1</option>
                  <option>Select number 2</option>
                  <option>Select number 3</option>
                </select>
              </div>
              <div className="col col-xs-12 submit-btn">
                <button type="submit">Submit</button>
                <div id="loader">
                  <i className="fa fa-refresh fa-spin fa-3x fa-fw" />
                </div>
              </div>
              <div className="error-handling-messages">
                <div id="success">Thank you</div>
                <div id="error">
                  {" "}
                  Error occurred while sending email. Please try again later.{" "}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>{" "}
      {/* end row */}
    </div>{" "}
    {/* end container */}
  </section>
            
            <Footer/>
            </div>
    )
}

export default ContactUs;