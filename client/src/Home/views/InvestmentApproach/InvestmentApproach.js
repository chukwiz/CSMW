import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Includes/Header';
import Footer from '../../components/Includes/Footer';

class InvestmentApproach extends Component{
    render(){
        return(
            <div className="page-wrapper">
            <Header/>
  <section className="page-title">
    <div className="container">
      <div className="row">
        <div className="col col-xs-12">
          <h2>Investment Approach</h2>
          <ol className="breadcrumb">
            <li>
              <a href="/">Home</a>
            </li>
            <li>Investment Approach</li>
          </ol>
        </div>
      </div>{" "}
      {/* end row */}
    </div>{" "}
    {/* end container */}
  </section>
<section className="section-padding about-section-s4">
  <div className="container">
    <div >
    <div className="col col-md-6">
        <div>
          <img src="assets/images/about-s2/img-2.jpg" alt />
        </div>
      </div>
      <div className="col col-md-6">
        <div className="about-details">
        <h2> Our Investment Approach</h2>
          <p>
          Once we understand your goals and aspirations, we’ll research the whole market to find the investment solutions that are best for you, then negotiate rates and carry out due diligence to ensure everything fits in with your long-term goals.
          </p>
          <p>We’ll then design a portfolio that’s intelligent, personal and perfect for your needs, ensuring you’re kept in the loop about how everything is performing, as the months and years go by.</p>
          <p>At every step of the way, we remind ourselves that being in control of your money and your future happiness is a very big responsibility – and one we take very seriously.</p>
          
        </div>
      </div>
      
    </div>
  </div>{" "}
  {/* end container */}
</section>

<section className="section-padding about-section-s4">
  <div className="container">
    <div >
    <div className="col col-sm-12">
        <h3 style={{textAlign:"center"}}>Responsible Investment focus on high-impact opportunities.</h3>
        <p>We provide local companies with capital and expertise, and work closely with trusted local partners in order to unlock growth, manage expansion and mitigate the inherent risks. In addition to our robust investment and monitoring processes, our support interventions address the specific requirements of our local partners and portfolio companies. With our flexible investment approach, we can tailor portfolios to the needs of our clients while maintaining sufficient diversification and generating maximum impact.</p>
      </div>
      <div>
          <div className="col-md-6">
              <h4>TRULY ACTIVE MANAGEMENT</h4>
              <p>We have a strong belief that active management can deliver returns in excess of the market over the long term. This is why our managers are given the freedom to back their own convictions and make investment decisions that can deviate from the consensus. Performance is driven by pure active management, not hidden index tracking.</p>
          </div>
          <div className="col-md-6">
              <h4>ADDING VALUE THROUGH A PRAGMATIC STYLE</h4>
              <p>Our managers are empowered to adapt their style to the prevailing market conditions. They are not tethered to a house style because we have full confidence in their ability to read their markets and adapt their strategy as needed. This occurs against a backdrop where team-work and open debate is encouraged. We expect our managers to take part in free-ranging discourse with each other where they can share, defend and enhance their ideas.</p>
          </div>
          <div className="col-md-6">
              <h4>TAKING A LONG-TERM PERSPECTIVE</h4>
              <p>Whenever we invest, we focus on the long term with the belief that asset prices are determined by more enduring factors such as changes in interest rates, economic growth and the underlying fundamental strength of a company. Our view is that short-term news and sentiment swings are often just noise and trading on such temporary considerations does not add value.</p>
          </div>
          <div className="col-md-6">
              <h4>A BLENDED APPROACH TO INVESTING</h4>
              <p>We believe it is essential to see the big picture before choosing to invest. In an increasingly globalised market, there is an intrinsic link between macroeconomic factors and the fundamentals of individual companies and securities. Our investment approach integrates the benefits of top-down and bottom-up analysis – and above all, our managers have the freedom to make pragmatic decisions.</p>
          </div>
      </div>
      
    </div>
  </div>{" "}
  {/* end container */}
</section>

<section className="section-padding about-section-s4">
  <div className="container">
    <div >
    
      <div className="col col-md-6">
        <div className="about-details">
        <h2>We Offer A Range Of Investment Solutions</h2>
          <p>We offer a range of investment solutions designed to support financial advisers and their clients in meeting their long-term objectives. Each of our offerings has been built for a purpose, whether it sits at the core of a portfolio to provide long-term growth or offers access to a specific global market.</p>
          <p>We provide local companies with capital and expertise, and work closely with trusted local partners in order to unlock growth, manage expansion and mitigate the inherent risks. In addition to our robust investment and monitoring processes, our support interventions address the specific requirements of our local partners and portfolio companies. With our flexible investment approach, we can tailor portfolios to the needs of our clients while maintaining sufficient diversification and generating maximum impact.</p>
          {/* <h3>Managing wealth originating from cryptocurrencies</h3>
          <p>CSM Wealth accepts wealth originating from cryptocurrencies converted into a fiat money. Invest in a broad range of traditional and innovative financial instruments that match your investor type and preferences. Create a unique diversified portfolio by combining traditional and digital assets.</p> */}
        </div>
      </div>
      <div className="col col-md-6">
        <div>
          <img src="assets/images/about-s2/img-2.jpg" alt />
        </div>
      </div>
    </div>
  </div>{" "}
  {/* end container */}
</section>
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
  <Footer/>
  {/* end service-single-section */}
</div>

        )
    }
}

export default InvestmentApproach;