import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/Chart/Chart';
import Header from '../../components/Includes/Header';
import Footer from '../../components/Includes/Footer';

class Crypto extends Component{
    render(){
        return(
            <div className="page-wrapper">
            <Header/>
  <section className="page-title">
    <div className="container">
      <div className="row">
        <div className="col col-xs-12">
          <h2>Cryptocurrency Investment</h2>
          <ol className="breadcrumb">
            <li>
              <a href="/">Home</a>
            </li>
            <li>Cryptocurrency Investment</li>
          </ol>
        </div>
      </div>{" "}
      {/* end row */}
    </div>{" "}
    {/* end container */}
  </section>
  {/* end page-title */}
  {/* start service-single-section */}
  {/* <section className="section-padding about-section-s4">
  <div className="container">
    <div className="row">
      <div className="col col-lg-8 col-md-10">
        <div className="section-title-s2">
          <h2>Crypto Trading</h2>
        </div>
      </div>
    </div>
    <div className="row" style={{display:"flex",alignItems:"center"}}>
      <div className="col col-md-6">
        <div className="about-details">
          <p>
          At CSM Wealth we try to provide you with the best possible spreads at every opportunity.
           We provide you with the option of choosing how you want to see the pricing. Variable through
            the premium account; fixed through the FIX Account or tight spreads plus commission through
             the Zero Account, we have the ability to give you what you want.
          </p>
          <p>
          Whilst the table below shows you the currency pairs you can trade and the associated trading
           variables such as SWAPs; Margin; in order to see the spreads associated to each of our account
            types use the link below.
          </p>
        </div>
      </div>
      <div className="col col-md-6">
      <div className="table-responsive">
                      <table className="table table-striped align-center table-colored" id="dataTable">
                      <thead>
          <tr role="row">
            <th className="instrument sorting" tabIndex={0} aria-controls="DataTables_Table_3" rowSpan={1} colSpan={1} aria-label="Instrument: activate to sort column ascending" style={{width: 25}}>Instrument</th>
            <th className="leverage sorting" tabIndex={0} aria-controls="DataTables_Table_3" rowSpan={1} colSpan={1} aria-label="Leverage: activate to sort column ascending" style={{width: 25}}>Leverage</th>
            <th className="margin sorting" tabIndex={0} aria-controls="DataTables_Table_3" rowSpan={1} colSpan={1} aria-label="Margin: activate to sort column ascending" style={{width: 25}}>Margin</th>
            <th className="spread sorting" tabIndex={0} aria-controls="DataTables_Table_3" rowSpan={1} colSpan={1} aria-label="Spread: activate to sort column ascending" style={{width: 25}}>Spread</th>
          </tr>
        </thead>
        <tbody>
          <tr role="row" className="odd">
            <td>
              <div className="btn-symbol-popup-wrapper"><a className="btn-symbol-popup" data-index={0} href="/trading-info/financial-instruments-index/fxoptions/eur-usd?i_key=EUR%2FUSD" data-di-id="di-id-352b90c-e6a0d90e">EUR/USD</a></div>
            </td>
            <td>100<i className="lev-col-sort-fix" />1</td>
            <td>1.00%</td>
            <td>0.9</td>
          </tr>
          <tr role="row" className="even">
            <td>
              <div className="btn-symbol-popup-wrapper"><a className="btn-symbol-popup" data-index={1} href="/trading-info/financial-instruments-index/fxoptions/gbp-usd?i_key=GBP%2FUSD" data-di-id="di-id-352b90c-29b7d893">GBP/USD</a></div>
            </td>
            <td>100<i className="lev-col-sort-fix" />1</td>
            <td>1.00%</td>
            <td>1.6</td>
          </tr>
          <tr role="row" className="odd">
            <td>
              <div className="btn-symbol-popup-wrapper"><a className="btn-symbol-popup" data-index={2} href="/trading-info/financial-instruments-index/fxoptions/usd-jpy?i_key=USD%2FJPY" data-di-id="di-id-352b90c-6cfaa492">USD/JPY</a></div>
            </td>
            <td>100<i className="lev-col-sort-fix" />1</td>
            <td>1.00%</td>
            <td>1.1</td>
          </tr>
          <tr role="row" className="even">
            <td>
              <div className="btn-symbol-popup-wrapper"><a className="btn-symbol-popup" data-index={3} href="/trading-info/financial-instruments-index/fxoptions/eur-jpy?i_key=EUR%2FJPY" data-di-id="di-id-352b90c-25b4690">EUR/JPY</a></div>
            </td>
            <td>100<i className="lev-col-sort-fix" />1</td>
            <td>1.00%</td>
            <td>1.8</td>
          </tr>
          <tr role="row" className="odd">
            <td>
              <div className="btn-symbol-popup-wrapper"><a className="btn-symbol-popup" data-index={4} href="/trading-info/financial-instruments-index/fxoptions/aud-usd?i_key=AUD%2FUSD" data-di-id="di-id-352b90c-bf4221f6">AUD/USD</a></div>
            </td>
            <td>100<i className="lev-col-sort-fix" />1</td>
            <td>1.00%</td>
            <td>1.1</td>
          </tr>
          <tr role="row" className="even">
            <td>
              <div className="btn-symbol-popup-wrapper"><a className="btn-symbol-popup" data-index={5} href="/trading-info/financial-instruments-index/fxoptions/eur-chf?i_key=EUR%2FCHF" data-di-id="di-id-352b90c-8d9cbfdc">EUR/CHF</a></div>
            </td>
            <td>100<i className="lev-col-sort-fix" />1</td>
            <td>1.00%</td>
            <td>2</td>
          </tr>
          <tr role="row" className="odd">
            <td>
              <div className="btn-symbol-popup-wrapper"><a className="btn-symbol-popup" data-index={6} href="/trading-info/financial-instruments-index/fxoptions/eur-gbp?i_key=EUR%2FGBP" data-di-id="di-id-352b90c-f0a26ba">EUR/GBP</a></div>
            </td>
            <td>100<i className="lev-col-sort-fix" />1</td>
            <td>1.00%</td>
            <td>1.5</td>
          </tr>
          <tr role="row" className="even">
            <td>
              <div className="btn-symbol-popup-wrapper"><a className="btn-symbol-popup" data-index={7} href="/trading-info/financial-instruments-index/fxoptions/usd-cad?i_key=USD%2FCAD" data-di-id="di-id-352b90c-9db1c63a">USD/CAD</a></div>
            </td>
            <td>100<i className="lev-col-sort-fix" />1</td>
            <td>1.00%</td>
            <td>2</td>
          </tr>
          <tr role="row" className="odd">
            <td>
              <div className="btn-symbol-popup-wrapper"><a className="btn-symbol-popup" data-index={8} href="/trading-info/financial-instruments-index/fxoptions/usd-chf?i_key=USD%2FCHF" data-di-id="di-id-352b90c-e33d5dde">USD/CHF</a></div>
            </td>
            <td>100<i className="lev-col-sort-fix" />1</td>
            <td>1.00%</td>
            <td>1.6</td>
          </tr>
          <tr role="row" className="even">
            <td>
              <div className="btn-symbol-popup-wrapper"><a className="btn-symbol-popup" data-index={9} href="/trading-info/financial-instruments-index/fxoptions/nzd-usd?i_key=NZD%2FUSD" data-di-id="di-id-352b90c-b9dbfc8b">NZD/USD</a></div>
            </td>
            <td>100<i className="lev-col-sort-fix" />1</td>
            <td>1.00%</td>
            <td>1.8</td>
          </tr>
        </tbody>
                      </table>
                    </div>
      </div>
    </div>
  </div>
</section> */}

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
        <h2> Cryptocurrency Investment</h2>
          <p>
          CSM Wealth offers a broad range of transactions with digital assets. Clients can purchase cryptocurrencies via the bank, directly transfer them to and from their segregated Falcon wallets, and convert them into fiat money.
          </p>
          <h3>Direct investment in cryptocurrencies</h3>
          <p>Invest easily and securely in the world’s major cryptocurrencies by buying them via the bank. Open an investment account funded with fiat money conveniently purchase cryptocurrencies via online banking or a relationship manager. Benefit from the support of CSM Wealth’s blockchain specialists.</p>
          
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
        <h2>Direct transfer of Crypto currencies</h2>
          <p>Make your blockchain assets bankable by transferring them to a segregated wallet at Falcon. Buy additional cryptocurrencies via the bank, exchange them for fiat money or transfer them to a personal external wallet. Digital assets are included in portfolio statements like any other asset.</p>
          <h3>Managing wealth originating from cryptocurrencies</h3>
          <p>CSM Wealth accepts wealth originating from cryptocurrencies converted into a fiat money. Invest in a broad range of traditional and innovative financial instruments that match your investor type and preferences. Create a unique diversified portfolio by combining traditional and digital assets.</p>
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

<section className="services-section-s3 section-padding">
  <div className="container">
    <div className="row">
      <div className="col col-md-8 col-md-offset-2">
        <div className="section-title-s3">
          <h2>Your Benefits</h2>
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
                {/* <h3>
                  <a href="#">Insurance</a>
                </h3> */}
                <p>
                Due diligence processes are conducted for cryptocurrencies to ensure that assets are lawful and regulatory compliant
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
                {/* <h3>
                  <a href="#">Entertainment</a>
                </h3> */}
                <p>
                Cryptocurrencies are reflected in official bank statements that can be used for tax reporting.
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
                {/* <h3>
                  <a href="#">Transport & Logistics</a>
                </h3> */}
                <p>
                Cryptocurrencies are booked as segregated assets and governed according to inheritance law
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

export default Crypto;