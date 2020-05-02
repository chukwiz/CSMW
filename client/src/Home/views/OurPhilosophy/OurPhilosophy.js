import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Includes/Header';
import Footer from '../../components/Includes/Footer';

class OurPhilosophy extends Component{
    render(){
        return(
            <div className="page-wrapper">
            <Header/>
  <section className="page-title">
    <div className="container">
      <div className="row">
        <div className="col col-xs-12">
          <h2>Our Philosophy</h2>
          <ol className="breadcrumb">
            <li>
              <a href="/">Home</a>
            </li>
            <li>Our Philosophy</li>
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
        <h2> Our Investment Philosophy</h2>
          <p>
          Our portfolio managers have a close relation to our clients' investments, and are continuously pursuing investment cases that will deliver the best long term returns.
          </p>
          <p>We will gather information about an entire firm, before investing your funds into it. This underscores our fundamental investment approach, where analysing the company's historic performance and organisational structure is key. We are convinced that such considerations are more important than running after short term market trends.</p>
          
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
        <h2 style={{textAlign:"center"}}>The five pillars of our investment philosophy:</h2>
      </div>
      <div>
          <div className="col-md-4">
              <h4>Active management</h4>
              <p>Our goal is to deliver good risk-adjusted returns. For benchmarked funds this entails a goal of beating the benchmark, which in turn requires independent choices and a high active share.</p>
          </div>
          <div className="col-md-4">
              <h4>Security focus</h4>
              <p>We focus on individual securities in both stock and bond selection. Each security is chosen on our conviction that this particular security will deliver strong returns over time, not because of factors like geography or industry.</p>
          </div>
          <div className="col-md-4">
              <h4>Fundamental</h4>
              <p>We evaluate company specifics like business model, operations, profitability, management and strategic outlook. We prefer to buy reasonably priced securities, yielding a margin of safety, but will not let pricing multiples decide.</p>
          </div>
          <div className="col-md-6">
              <h4>Concentrated</h4>
              <p>We limit risk by gaining thorough knowledge of the companies in which we are invested, and by owning companies that, in total, provide a sensible risk exposure. For fixed income, traditional diversification is more important.</p>
          </div>
          <div className="col-md-6">
              <h4>Long-term perspective</h4>
              <p>We seek long-term returns. In the long run, a company's fundamental value and profitability are more important than the purchase price. We will consider selling, however, if the long-term potential is exhausted in the short run.</p>
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
        <h2>We believe in long-term strategic asset allocation</h2>
          <p>We believe that the central component of successful long-term performance is a well-constructed strategic asset allocation. By selecting the right mix of assets to suit individual risk tolerance, investors are best able to maximize returns relative to risk over the long term.</p>
          <p>Our model portfolios are derived from our estimated risk and return expectations over the coming business cycle, and the interactions between asset classes. The strategic asset allocation portfolios we recommend aim to maximize return, relative to risk, over a time horizon longer than five years. In our view, sticking to a long-term strategy is key to protecting and growing wealth over time.</p>
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
        <h2>Only assume risk when compensated by return</h2>
          <p>We believe that risks should not be taken without compensation. Therefore, every asset in a portfolio should play a role – either in improving returns, reducing portfolio risk, or some combination of the two.</p>
          <p>In our experience, investors tend most often to take unnecessary risks in three areas: single securities, currencies, and commodities. Fundamentally, single securities have higher risk than a diversified portfolio of the asset class in question, but do not necessarily have a higher return. For example, no stock in the S&P 500 has lower volatility than the S&P 500 itself. By definition, the average stock has the same return as the index.</p>
          {/* <h3>Managing wealth originating from cryptocurrencies</h3>
          <p>CSM Wealth accepts wealth originating from cryptocurrencies converted into a fiat money. Invest in a broad range of traditional and innovative financial instruments that match your investor type and preferences. Create a unique diversified portfolio by combining traditional and digital assets.</p> */}
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

export default OurPhilosophy;