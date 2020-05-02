import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Includes/Header';
import Footer from '../../components/Includes/Footer';

class WealthManagement extends Component{
    render(){
        return(
            <div className="page-wrapper">
            <Header/>
  <section className="page-title">
    <div className="container">
      <div className="row">
        <div className="col col-xs-12">
          <h2>Wealth Management</h2>
          <ol className="breadcrumb">
            <li>
              <a href="/">Home</a>
            </li>
            <li>Wealth Management</li>
          </ol>
        </div>
      </div>{" "}
      {/* end row */}
    </div>{" "}
    {/* end container */}
  </section>
  {/* end page-title */}
  {/* start service-single-section */}
  <section className="service-single-section section-padding">
    <div className="container">
      <div className="row">
        <div className="col col-md-8 col-md-push-4">
          <div className="service-single-content">
            <h3>Wealth Management</h3>
            <p>
            We offer wealth management solutions to private and corporate clients that are looking to benefit from expertise and our proprietary access to the market. Through a unique group structure and a strong network of expertise in the sector we have some enviable relationships with banks and Assets managers. This can put clients that would often be regarded as retail clients into a stronger position enhancing the products they are offered.
            </p>
            <p>
            Acquisition of wealth is a very different process to management of wealth and capital preservation. There is usually a very different risk tolerance used for different financial events. Our investment expertise allows us to educate our clients on selecting the appropriate assets and strategies having fully understood their needs. Our access to most leading banks, fund houses and investment management products means we have the ability to offer bespoke portfolios for individual client requirements. Our Wealth Management proposition includes advice on
            </p>
            {/* <div className="img-holder">
              <img src="assets/images/service-single/img-5.jpg" alt />
            </div> */}
            <div className="discussion-faq">
              <div className="discusion">
                <ul>
                  <li>
                    <i className="fa fa-adjust" />Tax Planning Strategies – It is important to act on your expatriate status as quickly as possible to maximize tax savings. We are constantly abreast of legislation that benefits our clients.
                  </li>
                  <li>
                    <i className="fa fa-adjust" /> Discretionary Portfolios – As a group we have strategic alliances with many discretionary managers meaning that we can suit each investor profile.
                  </li>
                  <li>
                    <i className="fa fa-adjust" /> Bespoke Structured Investment Products – With direct links to top tier banks and consistent trading volume we have the ability to secure bespoke products at preferential pricing.
                  </li>
                  <li>
                    <i className="fa fa-adjust" /> Portfolio Management – Never has been so important to review your portfolio regularly and re balance according to the markets. We have a wide range of options that can enhance many existing portfolios. It is worth have a review of your portfolio to see if we can improve it.
                  </li>
                  <li>
                    <i className="fa fa-adjust" /> Trusts and Estate Planning – With access to many types of trusts in many different countries we can often show clients solutions they did not know existed. We will cover trusts as part of an overall review.
                  </li>
                  <li>
                    <i className="fa fa-adjust" /> IHT Provision – We have a variety of instruments and planning ideas to minimize IHT but like all tax strategies time is of the essence here.
                  </li>
                </ul>
              </div>
              <h4>Investment Management</h4>
              <p>
              Whether investing new money or looking for better management of existing portfolios we can help and advise private and corporate clients on their investment and Asset management strategy. Our unique structure allows us to provide bespoke portfolios at institutional rates to a wide range of private and corporate clients. Even if heavily invested elsewhere we can dissect a portfolio and aim to add value to it. We are relentless with our due diligence and quest for the perfect portfolio for our clients.
              </p>
              <p>We have many years of experience providing the right Investment management solutions to a wide range of clients</p>
              {/* <div className="faq">
                <div className="panel-group" id="accordion">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapse-1"
                        aria-expanded="true"
                      >
                        What is financeial risk?{" "}
                      </a>
                    </div>
                    <div id="collapse-1" className="panel-collapse collapse in">
                      <div className="panel-body">
                        <p>
                          Sed facilisis lorem in orci bibendum ullamcorper.
                          Mauris vitae augue elementum, sodales nulla a, semper
                          ligula. Nullam vel enim risus. Integer rhoncus
                          hendrerit.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <a
                        className="collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapse-2"
                      >
                        What is financeial risk?
                      </a>
                    </div>
                    <div id="collapse-2" className="panel-collapse collapse">
                      <div className="panel-body">
                        <p>
                          Sed facilisis lorem in orci bibendum ullamcorper.
                          Mauris vitae augue elementum, sodales nulla a, semper
                          ligula. Nullam vel enim risus. Integer rhoncus
                          hendrerit.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <a
                        className="collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapse-3"
                      >
                        What is financeial risk?
                      </a>
                    </div>
                    <div id="collapse-3" className="panel-collapse collapse">
                      <div className="panel-body">
                        <p>
                          Sed facilisis lorem in orci bibendum ullamcorper.
                          Mauris vitae augue elementum, sodales nulla a, semper
                          ligula. Nullam vel enim risus. Integer rhoncus
                          hendrerit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "} */}
              {/* end faq */}
            </div>{" "}
            {/* end discussion-faq */}
          </div>{" "}
          {/* end service-single-content */}
        </div>{" "}
        {/* end col */}
        <div className="col col-md-4 col-md-pull-8">
          <div className="service-sidebar">
            <div className="widget link-widget">
            <ul>
                <li>
                  <Link to="/services">All Services</Link>
                </li>
                <li>
                <Link to="/structured-finance">Structured Finance</Link>
                </li>
                
                <li className="active">
                  <Link to="/wealth-management">Wealth Management</Link>
                </li>
                <li>
                  <Link to="/portfolio-management">Portfolio Management</Link>
                </li>
                <li>
                  <Link to="/consulting-services">
                    Consulting Services
                  </Link>
                </li>
                <li>
                  <Link to="/financial-services">Financial Services</Link>
                </li>
                <li >
                  <Link to="/mutual-funds">Mutual Funds</Link>
                </li>
                
              </ul>
            </div>
            <div className="widget contact-widget">
              <h3>Contact</h3>
              <ul>
                <li>
                  <i className="fa fa-location-arrow" /> 3111 West Allegheny
                  Avenue Pennsylvania 19132
                </li>
                <li>
                  <i className="fa fa-phone" /> 1-982-782-5297 <br />
                  1-982-125-6378
                </li>
                <li>
                  <i className="fa fa-envelope" /> support@top-finance.com
                </li>
              </ul>
            </div>
            <div className="widget brochures-widget">
              <h3>Brochures</h3>
              <p>
                View our 2017 financial prospectus brochure for an easy to read
                guide on all of the services offer.
              </p>
              <div className="btns">
                <a href="#">
                  <i className="fa fa-download" /> Download Brochure
                </a>
                <a href="#">
                  <i className="fa fa-file-pdf-o" /> Characteristics
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* end row */}
    </div>{" "}
    {/* end container */}
  </section>

  <section className="services-section-s3 section-padding">
  <div className="container">
    <div className="row">
      <div className="col col-md-8 col-md-offset-2">
        <div className="section-title-s3">
          <h4>Our Wealth Management team have many years of combined experience coupled with extensive knowledge and proprietary information. We are focused on giving cost effective, beneficial wealth management solutions. Certain areas we advise on are</h4>
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
                  <a href="#">Managed funds</a>
                </h3>
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
                  <a href="#">Unit trust’s/ Mutual funds</a>
                </h3>
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
                  <a href="#">Discretionary portfolios</a>
                </h3>
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
                  <a href="#">Personal portfolio bonds</a>
                </h3>
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
                  <a href="#">QROPS and SIPP’s portfolios</a>
                </h3>
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
                  <a href="#">Structured products</a>
                </h3>
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
  <Footer/>
  {/* end service-single-section */}
</div>

        )
    }
}

export default WealthManagement;