import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Includes/Header';
import Footer from '../../components/Includes/Footer';

class MutualFunds extends Component{
    render(){
        return(
            <div className="page-wrapper">
            <Header/>
  <section className="page-title">
    <div className="container">
      <div className="row">
        <div className="col col-xs-12">
          <h2>Mutual Funds</h2>
          <ol className="breadcrumb">
            <li>
              <a href="/">Home</a>
            </li>
            <li>Mutual Funds</li>
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
            <h3>Mutual Funds</h3>
            <p>
            Regardless of your income, achieving your financial goals is
             attainable by investing in mutual funds. We work to understand your
              needs and match your objectives to our various mutual funds.
            </p>
            <p>
            Mutual funds provide you with access to investment markets by pooling your money with the money of several other individuals with similar investment goals. By diversifying your investments, mutual funds assist with minimising the potential risks typically associated with investing. Mutual funds differ to stocks as they are not traded on an exchange and investors can buy and sell through a Fund manager at any time. Units are created and sold to new investors on a continuous basis, so you can either invest a lump sum or save on a regular basis.
            </p>
            <div className="img-holder">
              <img src="assets/images/service-single/img-5.jpg" alt />
            </div>
            <div className="discussion-faq">
              <div className="dicussion">
                {/* <h4>Risk Management</h4> */}
                <p>
                Mutual Funds and Initial Public Offerings (IPOs)offer an opportunity to invest in a diversified, professionally managed basket of securities at a relatively low cost. They are an excellent option for clients who are looking for a diversified investment portfolio offering liquidity and transparency.
                </p>
                <p>
                CSM Wealth provides comprehensive transaction support to its clients for undertaking investments in the primary markets via mutual funds & IPOs.
                </p>
                
              </div>
              
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
                
                <li>
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
                <li className="active">
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
          <h3>THREE ADVANTAGES OF INVESTING IN MUTUAL FUNDS</h3>
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
                  <a href="#">Professional Management</a>
                </h3>
                <p>
                A mutual fund offers investors access to full-time, professional money managers who have the expertise, experience and resources to actively buy, sell, and monitor investments.
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
                  <a href="#"> Affordability</a>
                </h3>
                <p>
                For many people, it would be more costly to purchase directly all of the individual securities held by a single mutual fund. By contrast, the minimum initial investments for most mutual funds are more affordable.
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
                  <a href="#">Liquidity</a>
                </h3>
                <p>
                Most mutual funds allow you to sell your fund shares on any day the stock markets are open, so you have easy access to your shares, when redeemed, may be worth more or less than their original cost.
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
  <Footer/>
  {/* end service-single-section */}
</div>

        )
    }
}

export default MutualFunds;