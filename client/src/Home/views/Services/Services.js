import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Includes/Header';
import Footer from '../../components/Includes/Footer';

class Services extends Component{
    render(){
        return(
              <div className="page-wrapper">
              <Header/>
                {/* end of header */}
                {/* start page-title */}
                <section className="page-title">
                  <div className="container">
                    <div className="row">
                      <div className="col col-xs-12">
                        <h2>Services</h2>
                        <ol className="breadcrumb">
                          <li>
                            <a href="/">Home</a>
                          </li>
                          <li>Services</li>
                        </ol>
                      </div>
                    </div>{" "}
                    {/* end row */}
                  </div>{" "}
                  {/* end container */}
                </section>
                {/* end page-title */}
                {/* start services-pg-section */}
                <section className="services-pg-section section-padding">
                  <div className="container">
                    <div className="row">
                      <div className="col col-xs-12">
                        <div className="services-grid-s2">
                          <div>
                          <div className="grid">
                            <div className="icon">
                              <i className="fi flaticon-creativity" />
                            </div>
                            <div className="details">
                              <h3>Structured Finance</h3>
                              <p>
                              Our specialists can help you to structure complex financing. This includes cash-flow based acquisition financing, management buyouts or buy-ins.
                              </p>
                              <Link to="/structured-finance" className="read-more">Read More</Link>
                            </div>
                            <div className="hover-grid">
                              <span />
                              <span />
                              <span />
                            </div>
                          </div>
                          <div className="grid">
                            <div className="icon">
                              <i className="fi flaticon-people" />
                            </div>
                            <div className="details">
                              <h3>Wealth Management</h3>
                              <p>
                              We offer a global, independent and customised approach to wealth management, focused on your needs and your long-term financial goals.
                              </p>
                              <Link to="/wealth-management" className="read-more">
                                Read More
                              </Link>
                            </div>
                            <div className="hover-grid">
                              <span />
                              <span />
                              <span />
                            </div>
                          </div>
                          </div>
                          <div className="grid">
                            <div className="icon">
                              <i className="fi flaticon-target" />
                            </div>
                            <div className="details">
                              <h3>Portfolio Management</h3>
                              <p>
                              Whether you wish to manage your assets yourself, as you are already well-informed on market trends, do it in collaboration with our specialists.
                              </p>
                              <Link to="/portfolio-management" className="read-more">
                                Read More
                              </Link>
                            </div>
                            <div className="hover-grid">
                              <span />
                              <span />
                              <span />
                            </div>
                          </div>
                          <div className="grid">
                            <div className="icon">
                              <i className="fi flaticon-idea" />
                            </div>
                            <div className="details">
                              <h3>Consulting Services</h3>
                              <p>
                              Bonds and commodities are much more stable than stocks and trades. We allow our clients to invest in the right bonds & commodities.
                              </p>
                              <Link to="/consulting-services" className="read-more">
                                Read More
                              </Link>
                            </div>
                            <div className="hover-grid">
                              <span />
                              <span />
                              <span />
                            </div>
                          </div>
                          <div className="grid">
                            <div className="icon">
                              <i className="fi flaticon-time" />
                            </div>
                            <div className="details">
                              <h3>Financial Services</h3>
                              <p>
                              Highly qualified and experienced staff give independent advice on such financial services as pensions, wealth planning and investments.
                              </p>
                              <Link to="/financial-services" className="read-more">
                                Read More
                              </Link>
                            </div>
                            <div className="hover-grid">
                              <span />
                              <span />
                              <span />
                            </div>
                          </div>
                          <div className="grid">
                            <div className="icon">
                              <i className="fi flaticon-technology" />
                            </div>
                            <div className="details">
                              <h3>Mutual Funds</h3>
                              <p>
                              Mutual Funds and Initial Public Offerings (IPOs)offer an opportunity to invest in a diversified, professionally managed basket of securities at a relatively low cost.
                              </p>
                              <Link to="/mutual-funds" className="read-more">
                                Read More
                              </Link>
                            </div>
                            <div className="hover-grid">
                              <span />
                              <span />
                              <span />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  {/* end container */}
                </section>
                {/* end services-pg-section */}
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
                            {/* <div className="col col-sm-6">
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
                            </div> */}
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
                {/* start services-section-s3 */}
                <section className="services-section-s3 section-padding">
  <div className="container">
    <div className="row">
      <div className="col col-md-8 col-md-offset-2">
        <div className="section-title-s3">
          <h2>We Offer A Lot More</h2>
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
                {/* end services-section-s3 */}
                <Footer/>
              </div>              
        )
    }
}

export default Services;