import React from 'react';
import "./Faq.css";
import { Link } from 'react-router-dom';
import Header from '../../components/Includes/Header'; 
import Footer from '../../components/Includes/Footer'; 

const Faq = () => {
    return(
      <div className="page-wrapper">
          <Header/>
          <section className="page-title">
    <div className="container">
      <div className="row">
        <div className="col col-xs-12">
          <h2>Frequently Asked Questions</h2>
          <ol className="breadcrumb">
            <li>
              <a href="/">Home</a>
            </li>
            <li>Frequently Asked Questions</li>
          </ol>
        </div>
      </div>{" "}
      {/* end row */}
    </div>{" "}
    {/* end container */}
  </section>
            <section className="main-container">
              <div className="container">
                <div className="row">
                  {/* main content starts */}
                  {/* <div style={{display:"flex", justifyContent:"center"}}>

                  </div> */}
                  <div className="col-lg-4">
        <div className="nav nav-pills faq-nav" id="faq-tabs" role="tablist" aria-orientation="vertical">
          <a href="#tab1" className="nav-link active" data-toggle="pill" role="tab" aria-controls="tab1" aria-selected="true">
            <i className="mdi mdi-help-circle" /> Frequently Asked Questions
          </a>
          <a href="#tab2" className="nav-link" data-toggle="pill" role="tab" aria-controls="tab2" aria-selected="false">
            <i className="mdi mdi-account" /> Beginners Guide to CSM Wealth
          </a>
          <a href="#tab3" className="nav-link" data-toggle="pill" role="tab" aria-controls="tab3" aria-selected="false">
            <i className="mdi mdi-account-settings" /> Leverage
          </a>
          <a href="#tab4" className="nav-link" data-toggle="pill" role="tab" aria-controls="tab4" aria-selected="false">
            <i className="mdi mdi-heart" /> Liquidation
          </a>
          <a href="#tab5" className="nav-link" data-toggle="pill" role="tab" aria-controls="tab5" aria-selected="false">
            <i className="mdi mdi-coin" /> Fees
          </a>
          {/* <a href="#tab6" className="nav-link" data-toggle="pill" role="tab" aria-controls="tab6" aria-selected="false">
            <i className="mdi mdi-help" /> General help
          </a> */}
        </div>
      </div>

      {/*  */}
      <div className="col-lg-8">
        <div className="tab-content" id="faq-tab-content">
          
          <div className="tab-pane active" id="tab2" role="tabpanel" aria-labelledby="tab2">
            <div className="accordion" id="accordion-tab-2">
              <div className="card">
                <div className="card-header" id="accordion-tab-2-heading-1">
                  <h5>
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-2-content-1" aria-expanded="false" aria-controls="accordion-tab-2-content-1">HOW TO GET STARTED WITH CSM Wealth?</button>
                  </h5>
                </div>
                <div className="collapse " id="accordion-tab-2-content-1" aria-labelledby="accordion-tab-2-heading-1" data-parent="#accordion-tab-2">
                  <div className="card-body">
                    <p>Sign Up, Select an investment plan that suits your investor type,Fund your portfolio and trading kicks off.</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="accordion-tab-2-heading-2">
                  <h5>
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-2-content-2" aria-expanded="false" aria-controls="accordion-tab-2-content-2">HOW LONG DOES IT TAKE TO FUND ACCOUNT?</button>
                  </h5>
                </div>
                <div className="collapse" id="accordion-tab-2-content-2" aria-labelledby="accordion-tab-2-heading-2" data-parent="#accordion-tab-2">
                  <div className="card-body">
                    <p>CSM Wealth offers multiple deposit methods and their processing times differ. Before you 
                    go ahead and fund your account, please make sure that your account is fully activate. Cryptocurrency 
                    payments are credited instantly*. If there is any delay, please contact Customer support.</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="accordion-tab-2-heading-3">
                  <h5>
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-2-content-3" aria-expanded="false" aria-controls="accordion-tab-2-content-3">WHAT IS THE MINIMUM AMOUNT I NEED TO DEPOSIT IN OTHER TO OPEN AN ACCOUNT?</button>
                  </h5>
                </div>
                <div className="collapse" id="accordion-tab-2-content-3" aria-labelledby="accordion-tab-2-heading-3" data-parent="#accordion-tab-2">
                  <div className="card-body">
                    <p>The minimum deposit amount for any investment on CSM Wealth is $20,000 or its equivalent in any currency.</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="accordion-tab-2-heading-4">
                  <h5>
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-2-content-4" aria-expanded="false" aria-controls="accordion-tab-2-content-4">WHERE CAN I VIEW ALL MY TRADE HISTORY?</button>
                  </h5>
                </div>
                <div className="collapse" id="accordion-tab-2-content-4" aria-labelledby="accordion-tab-2-heading-4" data-parent="#accordion-tab-2">
                  <div className="card-body">
                    <p>Duplicates of trade made on your account are reported/provided to your web account/contact email</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="accordion-tab-2-heading-4">
                  <h5>
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-2-content-5" aria-expanded="false" aria-controls="accordion-tab-2-content-4">WHEN AM I DUE TO WITHDRAW?</button>
                  </h5>
                </div>
                <div className="collapse" id="accordion-tab-2-content-5" aria-labelledby="accordion-tab-2-heading-5" data-parent="#accordion-tab-2">
                  <div className="card-body">
                    <p>This depends on the period, as specified on your investment plan. Each package is unique and has specified time limit to access profit.</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="accordion-tab-2-heading-4">
                  <h5>
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-2-content-6" aria-expanded="false" aria-controls="accordion-tab-2-content-4">HOW DO I MAKE WITHDRAWALS/UPGRADE?</button>
                  </h5>
                </div>
                <div className="collapse" id="accordion-tab-2-content-6" aria-labelledby="accordion-tab-2-heading-6" data-parent="#accordion-tab-2">
                  <div className="card-body">
                    <p>After period of trading an accrued interest on your account, you have the choice of withdrawing all your funds including profits made or keep the funds and withdraw the profits. If our profits become enough to a plan you wish to upgrade, notify us with an email so you can decide on when to upgrade.</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="accordion-tab-2-heading-4">
                  <h5>
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-2-content-7" aria-expanded="false" aria-controls="accordion-tab-2-content-4">HOW LONG DOES IT TAKE TO SEND MY PROFITS?</button>
                  </h5>
                </div>
                <div className="collapse" id="accordion-tab-2-content-7" aria-labelledby="accordion-tab-2-heading-7" data-parent="#accordion-tab-2">
                  <div className="card-body">
                    <p>On completion of the withdrawal process, your money will be sent to you with 48 hours with the method you choose, CSM Wealth provides an efficient and guaranteed withdrawals. If withdrawals will take time, clients are informed prior to time.</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="accordion-tab-2-heading-4">
                  <h5>
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-2-content-8" aria-expanded="false" aria-controls="accordion-tab-2-content-4">KNOW YOUR DEPOSIT AND WITHDRAWAL OPTION</button>
                  </h5>
                </div>
                <div className="collapse" id="accordion-tab-2-content-8" aria-labelledby="accordion-tab-2-heading-8" data-parent="#accordion-tab-2">
                  <div className="card-body">
                    <p>It’s swift, convenient and it’s saves time and money. Cryptocurrencies available for funding</p>
                  <ul>
                    <li>Bitcoin</li>
                    <li>Ethereum</li>
                    <li>Litecoin</li>
                    <li>Ripple</li>
                    <p>For Bank Wire, send a message to the customer support to have a financial officer allocate an account for funding your portfolio.</p>
                  </ul>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
           <div className="tab-pane" id="tab3" role="tabpanel" aria-labelledby="tab3" >
            <div className="accordion" id="accordion-tab-3">
              <div className="card">
                <div className="card-header" id="accordion-tab-3-heading-1">
                  <h5>
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-3-content-1" aria-expanded="false" aria-controls="accordion-tab-3-content-1">HOW MUCH LEVERAGE DOES CSM Wealth OFFER?</button>
                  </h5>
                </div>
                <div className="collapse show" id="accordion-tab-3-content-1" aria-labelledby="accordion-tab-3-heading-1" data-parent="#accordion-tab-3">
                  <div className="card-body">
                    <p>The amount of leverage CSM Wealth offers varies from product to product. Leverage is determined by the Initial Margin and Maintenance Margin levels. These levels specify the minimum equity you must hold in your account to enter and maintain positions. Leverage is not a fixed multiplier but rather a minimum equity requirement. You can see the minimum Initial Margin and Maintenance Margin levels for all products here. The highest leverage CSM Wealth offers is up to 100x leverage on its Daily Bitcoin / JPY Futures Contract and the Perpetual Bitcoin / USD Perpetual Contract.</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="accordion-tab-3-heading-2">
                  <h5>
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-3-content-2" aria-expanded="false" aria-controls="accordion-tab-3-content-2">WHAT IS INITIAL MARGIN?</button>
                  </h5>
                </div>
                <div className="collapse" id="accordion-tab-3-content-2" aria-labelledby="accordion-tab-3-heading-2" data-parent="#accordion-tab-3">
                  <div className="card-body">
                    <p>Initial Margin is the minimum amount of Bitcoin you must deposit to open a position.</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="accordion-tab-3-heading-3">
                  <h5>
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-3-content-3" aria-expanded="false" aria-controls="accordion-tab-3-content-3">WHAT IS MAINTENANCE MARGIN?</button>
                  </h5>
                </div>
                <div className="collapse" id="accordion-tab-3-content-3" aria-labelledby="accordion-tab-3-heading-3" data-parent="#accordion-tab-3">
                  <div className="card-body">
                    <p>Maintenance Margin is the minimum amount of Bitcoin you must hold to keep a position open. If your margin balance on CSM Wealth drops below this level your position will be taken over by the Liquidation Engine and be Liquidated.</p>
                    {/* <p><strong>Example: </strong>Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor.</p> */}
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <div className="tab-pane" id="tab4" role="tabpanel" aria-labelledby="tab4">
            <div className="accordion" id="accordion-tab-4">
              <div className="card">
                <div className="card-header" id="accordion-tab-4-heading-1">
                  <h5>
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-4-content-1" aria-expanded="false" aria-controls="accordion-tab-4-content-1">WHY DID I GET LIQUIDATED?</button>
                  </h5>
                </div>
                <div className="collapse show" id="accordion-tab-4-content-1" aria-labelledby="accordion-tab-4-heading-1" data-parent="#accordion-tab-4">
                  <div className="card-body">
                    <p>When the Mark Price of a contract falls below your liquidation price for longs, or rises above your liquidation price for shorts, your Maintenance Margin level has been breached and the Liquidation Engine takes over your position. In your Trade History, the price the liquidated position was closed at is the Bankruptcy Price (equivalent to where your Maintenance Margin is equal to 0).</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="accordion-tab-4-heading-2">
                  <h5>
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-4-content-2" aria-expanded="false" aria-controls="accordion-tab-4-content-2">HOW DOES THE LIQUIDATION ENGINE WORK?</button>
                  </h5>
                </div>
                <div className="collapse" id="accordion-tab-4-content-2" aria-labelledby="accordion-tab-4-heading-2" data-parent="#accordion-tab-4">
                  <div className="card-body">
                    <p>Upon liquidation, the Liquidation Engine attempts to close the position at the prevailing market price. If it is unable to do so then Auto-Deleveraging will occur.</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="accordion-tab-4-heading-3">
                  <h5>
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-4-content-3" aria-expanded="false" aria-controls="accordion-tab-4-content-3">CAN I GO BANKRUPT?</button>
                  </h5>
                </div>
                <div className="collapse" id="accordion-tab-4-content-3" aria-labelledby="accordion-tab-4-heading-3" data-parent="#accordion-tab-4">
                  <div className="card-body">
                    <p>No. We have a sophisticated margin and liquidation process that is designed to prevent any trader’s margin balance on CSM Wealth from ever going below 0.</p>
                    <p><strong>Example: </strong>Oh Leela! You're the only person I could turn to; you're the only person who ever loved me.</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="accordion-tab-4-heading-4">
                  <h5>
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-4-content-4" aria-expanded="false" aria-controls="accordion-tab-4-content-4">DO YOU SOCIALISE LOSSES?</button>
                  </h5>
                </div>
                <div className="collapse" id="accordion-tab-4-content-4" aria-labelledby="accordion-tab-4-heading-4" data-parent="#accordion-tab-4">
                  <div className="card-body">
                    <p>No. CSM Wealth employs an Auto-Deleveraging System that does not need to socialise losses.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab5" role="tabpanel" aria-labelledby="tab5">
            <div className="accordion" id="accordion-tab-5">
              <div className="card">
                <div className="card-header" id="accordion-tab-5-heading-1">
                  <h5>
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion1" aria-expanded="false" aria-controls="accordion1">IS THERE A FEE TO DEPOSIT BITCOIN?</button>
                  </h5>
                </div>
                <div className="collapse show" id="accordion1" aria-labelledby="accordion1" data-parent="#accordion-tab-5">
                  <div className="card-body">
                    <p>No, CSM Wealth does not charge fees on deposits</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="accordion-tab-5-heading-2">
                  <h5>
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-5-content-2" aria-expanded="false" aria-controls="accordion-tab-5-content-2">IS THERE A FEE TO WITHDRAW BITCOIN?</button>
                  </h5>
                </div>
                <div className="collapse" id="accordion-tab-5-content-2" aria-labelledby="accordion-tab-5-heading-2" data-parent="#accordion-tab-5">
                  <div className="card-body">
                    <p>No, CSM Wealth does not charge fees on withdrawals. When withdrawing Bitcoin, the minimum Bitcoin Network fee is set dynamically based on blockchain load and can be viewed on the Withdrawal Page.</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="accordion-tab-5-heading-3">
                  <h5>
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-5-content-3" aria-expanded="false" aria-controls="accordion-tab-5-content-3">ARE THERE FEES TO TRADE?</button>
                  </h5>
                </div>
                <div className="collapse" id="accordion-tab-5-content-3" aria-labelledby="accordion-tab-5-heading-3" data-parent="#accordion-tab-5">
                  <div className="card-body">
                    <p>Yes, CSM Wealth charges a trading fee on every completed trade. Please view the Fees page for more information.</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="accordion-tab-5-heading-4">
                  <h5>
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-5-content-4" aria-expanded="false" aria-controls="accordion-tab-5-content-4">DO YOU SOCIALISE LOSSES?</button>
                  </h5>
                </div>
                <div className="collapse" id="accordion-tab-5-content-4" aria-labelledby="accordion-tab-5-heading-4" data-parent="#accordion-tab-5">
                  <div className="card-body">
                    <p>No. CSM Wealth employs an Auto-Deleveraging System that does not need to socialise losses.</p>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div>
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

export default Faq;