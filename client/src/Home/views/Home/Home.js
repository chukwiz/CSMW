import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Partners from '../../components/OwlCarousel/Partners';
import Testimonials from '../../components/OwlCarousel/Testimonials';
import Header from '../../components/Includes/Header';
import Footer from '../../components/Includes/Footer';
import News from  '../../components/Includes/News';


class Home extends Component{
  render(){
    return(
      <div className="page-wrapper">
  {/* start preloader */}
  <div className="preloader">
    <div className="inner">
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
  </div>
  <Header/>
  {/* end of header */}
  {/* start of hero */}
  <div className="hero hero-style-1 hero-slider-wrapper">
    <div className="hero-slider">
      <div className="slide">
        <img src="assets/images/slider/slide-1.jpg" alt className="slider-bg" />
        <div className="container">
          <div className="row">
            <div className="col col-md-8 col-sm-9 slide-caption">
            <h2>Financial expenses <span style={{color:"#cac712"}}>Lifestyle</span>  Planning</h2>
              <p>
               A carefully managed investment strategy can play a crucial role in helping you achieve your future financial lifestyle goals
              </p>
              
              <div className="btns">
                <Link to="#" className="theme-btn">
                  Get Started
                </Link>
                {/* <a href="#" className="theme-btn-s2">
                  Our Services
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slide">
        <img src="assets/images/slider/slide-2.jpg" alt className="slider-bg" />
        <div className="container">
          <div className="row">
            <div className="col col-md-8 col-sm-9 slide-caption">
              <h2>We are <span style={{color:"#cac712"}}>Independent</span> and Unbiased</h2>
              <p>
                Do you want to make your investments work better for you 
              </p>
              <div className="btns">
                <a href="#" className="theme-btn">
                  About us
                </a>
                {/* <a href="#" className="theme-btn-s2">
                  Our Services
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slide">
        <img src="assets/images/slider/slide-3.jpg" alt className="slider-bg" />
        <div className="container">
          <div className="row">
            <div className="col col-md-8 col-sm-9 slide-caption">
            <h2>Unbiased <span style={{color:"#cac712"}}>Advice</span></h2>
              <p>
                We offer independent advice regarding all aspects of corporate finance.
              </p>
              <div className="btns">
                <a href="#" className="theme-btn">
                  About us
                </a>
                {/* <a href="#" className="theme-btn-s2">
                  Our Services
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end of hero slider */}
  {/* start services-section */}

  <section className="services-section section-padding">
    <div className="container">
      <div className="row">
        <div className="col col-xs-12">
          <div className="section-title">
            <h2>Our Services</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col col-xs-12">
          <div className="service-grids">
            <div className="grid">
              <div className="img-details-link">
                <div className="details-link">
                  <a href="#">
                    <i className="fa fa-arrow-right" />
                  </a>
                </div>
                <img src="assets/images/services/img-1.jpg" alt />
              </div>
              <div className="service-details">
                <h3>Financial Services</h3>
                <p>
                Highly qualified and experienced staff give independent advice on such financial services as 
                pensions, wealth planning and investments.
                </p>
              </div>
            </div>
            <div className="grid">
              <div className="img-details-link">
                <div className="details-link">
                  <a href="#">
                    <i className="fa fa-arrow-right" />
                  </a>
                </div>
                <img src="assets/images/services/img-2.jpg" alt />
              </div>
              <div className="service-details">
                <h3>Wealth Management</h3>
                <p>
                We offer a global, independent and customised approach to wealth management, 
                focused on your needs and your long-term financial goals.
                </p>
              </div>
            </div>
            <div className="grid">
              <div className="img-details-link">
                <div className="details-link">
                  <a href="#">
                    <i className="fa fa-arrow-right" />
                  </a>
                </div>
                <img src="assets/images/services/img-3.jpg" alt />
              </div>
              <div className="service-details">
                <h3>Consulting Services</h3>
                <p>
                Bonds and commodities are much more stable than stocks and trades. We allow our clients to invest in the right bonds & commodities.
                </p>
              </div>
            </div>
            <div className="grid">
              <div className="img-details-link">
                <div className="details-link">
                  <a href="#">
                    <i className="fa fa-arrow-right" />
                  </a>
                </div>
                <img src="assets/images/services/img-4.jpg" alt />
              </div>
              <div className="service-details">
                <h3>Mutual Funds</h3>
                <p>
                Mutual Funds and Initial Public Offerings (IPOs)offer an opportunity to invest in a diversified, professionally managed basket of
                 securities at a relatively low cost.
                </p>
              </div>
            </div>
            <div className="grid">
              <div className="img-details-link">
                <div className="details-link">
                  <a href="#">
                    <i className="fa fa-arrow-right" />
                  </a>
                </div>
                <img src="assets/images/services/img-5.jpg" alt />
              </div>
              <div className="service-details">
                <h3>Portfolio Management</h3>
                <p>
                Whether you wish to manage your assets yourself, as you are already well-informed on market trends, do it in collaboration with
                 our specialists, we can provide you with the solution most adapted to your needs, and expectations.
                </p>
              </div>
            </div>
            <div className="grid">
              <div className="img-details-link">
                <div className="details-link">
                  <a href="#">
                    <i className="fa fa-arrow-right" />
                  </a>
                </div>
                <img src="assets/images/services/img-6.jpg" alt />
              </div>
              <div className="service-details">
                <h3>Structured Finance</h3>
                <p>
                Our specialists can help you to structure complex financing. This includes cash-flow based acquisition financing, management buyouts or buy-ins, project or major real estate financing and syndicated loans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>{" "}
    {/* end container */}
  </section>
  {/* end services-section */}


  <section className="section-padding about-section-s4">
  <div className="container">
    <div className="row">
      <div className="col col-lg-8 col-md-10">
        <div className="section-title-s2">
          <h2>We believe in the security<br/> of our Clients</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col col-md-7">
        <div className="about-details">
          <p>
          Providing Wealth management, Investment and Financial services to the holders of substantial private capital, 
          their families, trusts and companies, both in the UK and internationally has been a
           major part of our business since its launch.As life takes its different courses,
            we can help you with a range of services to navigate unpredictable and changing circumstances 
            and, ultimately, support you when you need it most.
          </p>
          <h3>Preparing future finances</h3>
          <p>
          To start planning for the future you need both practicality and vision. We can help navigate today’s 
          regulation and financial markets to build wealth for tomorrow.
          </p>
        </div>
      </div>
      <div className="col col-md-5">
        <div className="about-img">
          <img src="assets/images/about-s3.jpg" alt />
        </div>
      </div>
    </div>
  </div>{" "}
  {/* end container */}
</section>

<section className="services-section-s3 section-padding">
  <div className="container">
    <div className="row">
      <div className="col col-md-8 col-md-offset-2">
        <div className="section-title-s3">
          <h2>Sectors We Advise On</h2>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
          </p> */}
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col col-xs-12">
        <div className="services-s2-grids">
          <div className="grid">
            <div className="inner">
              <div className="icon">
                <i className="fi flaticon-balance" />
              </div>
              <div className="details">
                <h3>
                  <a href="#">Insurance</a>
                </h3>
                <p>
                Leverage agile frameworks to provide a robust anonymous transaction
                </p>
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="inner">
              <div className="icon">
                <i className="fi flaticon-wallet" />
              </div>
              <div className="details">
                <h3>
                  <a href="#">Entertainment</a>
                </h3>
                <p>
                Managing the financial affairs for a wide range of professionals.
                </p>
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="inner">
              <div className="icon">
                <i className="fi flaticon-calculator" />
              </div>
              <div className="details">
                <h3>
                  <a href="#">Transport & Logistics</a>
                </h3>
                <p>
                User generated content in real-time will have multiple touchpoints for offshoring.
                </p>
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="inner">
              <div className="icon">
                <i className="fi flaticon-credit-card" />
              </div>
              <div className="details">
                <h3>
                  <a href="#">Real Estate</a>
                </h3>
                <p>
                Supporting real estate, construction and infrastructure businesses through effective corporate and financial advice.
                </p>
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="inner">
              <div className="icon">
                <i className="fi flaticon-computer" />
              </div>
              <div className="details">
                <h3>
                  <a href="#">Technology</a>
                </h3>
                <p>
                Supporting technology company success through technical expertise, industry insight and valuable strategic advice.


                </p>
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="inner">
              <div className="icon">
                <i className="fi flaticon-diamond" />
              </div>
              <div className="details">
                <h3>
                  <a href="#">Professional Practices</a>
                </h3>
                <p>
                Ambitious or cautious, professional practices need an advisor who understands the complexity and dynamism of their often mature, highly regulated, business environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>{" "}
    {/* end row */}
  </div>{" "}
  {/* end container */}
</section>


<section className="about-section-s2 section-padding">
  <div className="container">
    <div className="row">
      <div className="col col-sm-6">
        <div>
          <img src="assets/images/about-s2/img-2.jpg" alt />
        </div>
      </div>
      <div className="col col-sm-6">
        <div className="about-text">
          <h3>We expose you to a wide range of investment options</h3>
          <p>
          We offer a wide range of private client wealth services to support you. From planning for the future,
           to leaving a legacy, to helping you with changing circumstances such as divorce or later life care,
            we bring together the knowledge and expertise of more than 1,400 people. We think deeply about the right 
            solution for you, taking input from across the business, but with a single, senior point of contact.
             We believe this personal, thoughtful approach sets our business apart.
          </p>
          <Link to="/register" className="theme-btn">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  </div>{" "}
  {/* end container */}
</section>

  {/* start cta */}
  <section className="cta">
    <div className="container">
      <div className="row">
        <div className="col col-xs-12">
          <h2>
            Find out more about <span>what we do</span>
          </h2>
        </div>
      </div>
    </div>{" "}
    {/* end container */}
  </section>
  {/* end cta */}

  {/* start about-section */}
  
  {/* end about-section */}
  {/* start partners-section */}
  <section className="partners-section">
    <h2 className="hidden">Partners</h2>
    <div className="container">
      <div className="row">
        <div className="col col-xs-12">
          {/* <div className="partners-slider">
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
          </div> */}
          <Partners />
        </div>
      </div>
    </div>{" "}
    {/* end container */}
  </section>
  {/* end partners-section */}
  {/* start testimonials-section */}
  <section className="testimonials-section section-padding">
    <div className="container">
      <div className="row">
        <div className="col col-xs-12">
          <div className="section-title">
            <h2>Testimonials</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col col-lg-10 col-lg-offset-1">
        <Testimonials/>
          {/* <div className="testimonials-slider testimonials-grids"> */}
            {/* <div className="grid">
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
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>{" "}
    {/* end container */}
  </section>
  {/* end testimonials-section */}
  {/* start blog-section */}
  <News/>
  {/* end blog-section */}
  {/* start contact-section */}
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
  {/* end contact-section */}
  {/* start site-footer */}
  <Footer/>
  {/* end site-footer */}
</div>
    )
  }
}

export default Home;
// 
