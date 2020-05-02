import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Includes/Header';
import Footer from '../../components/Includes/Footer';

class InvestmentProcess extends Component{
    render(){
        return(
            <div className="page-wrapper">
            <Header/>
  <section className="page-title">
    <div className="container">
      <div className="row">
        <div className="col col-xs-12">
          <h2>Investment Process</h2>
          <ol className="breadcrumb">
            <li>
              <a href="/">Home</a>
            </li>
            <li>Investment Process</li>
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
        <h2> Our Investment Process</h2>
        <p style={{fontSize:"130%",textAlign:"center"}}>Trustees require a clear understanding of the process used to invest for their portfolios if they are to have confidence that they will achieve their charitable objectives.</p>
          <p>
          Every client is different and our investment process gives us the flexibility to respond to your charity’s specific needs, with strong risk controls built in. The construction of a portfolio should coherently address the investment mandate set by the charity – with attitude to risk being one of the most important factors for consideration.
          </p>
          <p>Using the collective insight of our research teams and investment managers, we aim to protect and grow the capital of each client according to their individual needs.</p>
          
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
        <h2 style={{textAlign:"center"}}>The four strands of our investment process</h2>
      </div>
      <div>
          <div className="col-md-6">
              <h4>Assessment of global economic strategy and outlook</h4>
              <p>Through daily morning meetings, weekly investment meetings and regular strategy presentations, our investment managers review high frequency market and economic data, identify key messages and themes, highlight market issues, share expertise and undertake strategic and tactical analysis of business cycles and risk.</p>
          </div>
          <div className="col-md-6">
              <h4>Monthly asset allocation process</h4>
              <p>Each month we bring together asset class specialists, and through a series of meetings, ascribe rankings to asset classes. This monthly asset allocation process means our investment managers have up-to-date data and expert insight to help them make investment decisions on your behalf.</p>
          </div>
          <div className="col-md-6">
              <h4>Active asset allocation</h4>
              <p>We carefully monitor asset allocation and take account of the ‘investment clock’ discipline to marry our macroeconomic view to a suggested asset allocation blend. This links changes in growth and inflation expectations to asset class rotation.</p>
          </div>
          <div className="col-md-6">
              <h4>Portfolio construction</h4>
              <p>Responsibility for constructing your charity’s portfolio lies with your investment manager. Our sector, stock and fund selection process, as well as risk analysis, play a key part. Your manager’s specific knowledge of your particular circumstances is then overlaid to build a suitable portfolio for your charity.</p>
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
        {/* <h2>We believe in long-term strategic asset allocation</h2> */}
          <p>Our investment process has resulted in medium and long-term investment outperformance for our clients. Based on developing an in-depth understanding of the macroeconomic environment, scrutinising asset class valuations and understanding how and when various fund managers add value, our investment process is ‘top-down’ and value-driven.</p>
          <p>We believe that economic fundamentals and the price paid for an asset are the key determinants of future returns. Our approach starts with building an understanding of the global economic backdrop to gain a detailed insight into developments in economies, industries and financial markets.</p>
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

export default InvestmentProcess;