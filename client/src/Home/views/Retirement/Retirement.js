import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/Chart/Chart';
import Header from '../../components/Includes/Header';
import Footer from '../../components/Includes/Footer';

class Retirement extends Component{
    render(){
        return(
            <div className="page-wrapper">
            <Header/>
  <section className="page-title">
    <div className="container">
      <div className="row">
        <div className="col col-xs-12">
          <h2>Retirement Income</h2>
          <ol className="breadcrumb">
            <li>
              <a href="/">Home</a>
            </li>
            <li>Retirement Income</li>
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

<section className="service-single-section section-padding">
  <div className="container">
    <div className="row">
      <div className="col col-md-8 col-md-push-4">
        <div className="service-single-content">
          <h3>Planning for retirement</h3>
          <p>
          Even if you’ve worked your whole life and always paid contributions, retirement brings with it a drop in income of about one third. By 50 at the latest, you ought to know where you stand. Close the gaps in your retirement income early and receive a guaranteed, regular additional income in retirement.
          </p>
          <div className="img-holder">
            <img src="assets/images/service-single/img-2.jpg" alt />
          </div>
          <div className="discussion-faq">
            <div className="discssion">
              <h4>Retirement Age</h4>
              <p>
              There is not a mandatory retirement age in the United States. Standard retirement age is considered to be 65, but under today’s rules, Social Security defines what they call your full retirement age based on your date of birth, and it is not the same age for everyone. In general, retiring before age 60 would be considered an early retirement.
              </p>
              <h4>Stay financially independent with CSM Wealth retirement planning</h4>
              <p>Our certified retirement planners will discuss your current pension situation with you and explain the opportunities and risks of the different options for financing your retirement. CSM Wealth will assist you in the transition to retirement, lending you advice and support with difficult decisions. To ensure you achieve your objectives, CSM Wealth will reassess your situation at regular intervals and take into account any changes that may have occurred in your life. A consultation can make sense as early as age 50 – because the sooner you start planning for your old age, the more likely you are to be able to achieve your goals and live your dreams after retirement.</p>
              <div>
                <h4>Retirement planning with CSM Wealth – an ongoing consultation process</h4>
                <div className="row">
                  <div className="col-md-6">
                    <h5>Age 50 – start planning early</h5>
                    <p>                     
You’re in the middle of your career and haven’t even thought about your retirement yet? Or you have already considered retiring early? Now is the ideal time to start taking a closer look at your retirement planning. CSM Wealth will explain the different options to you.
                    </p>
                  </div>
                  <div className="col-md-6">
                  <h5>
Age 55 – take the right steps</h5>
                    <p>                     
                    Together with CSM Wealth, you have developed your pension plan. In your mid-fifties it is time to make the decisions to implement that plan. Depending on how much you want to invest in your retirement, you can take various steps to optimize both the security and performance of your portfolio. CSM Wealth will support you.
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <h5>Age 60 – fine-tune your plan</h5>
                    <p>                     
                    A few years before you retire, you get together with CSM Wealth to review your retirement plan. The important thing now is to safeguard your post-retirement income and invest your savings in the right way. In addition, it’s now time to register with OASI for your later pension and to advise your occupational pension fund if you want to exercise your capital option. CSM Wealth will help you to fine-tune and optimize your assets shortly before you retire.
                    </p>
                  </div>
                  <div className="col-md-6">
                  <h5>Age 65 – put your plan into practice</h5>
                    <p>                     
                    You’ve achieved your goal and earned a comfortable retirement. Thanks to excellent planning, you have nothing more to do than sit back and enjoy life. Even after you’ve retired, CSM Wealth is there for you to answer any questions you may have.
                    </p>
                  </div>
                </div>

              </div>
            </div>
            
            {/* end faq */}
          </div>{" "}
          {/* end discussion-faq */}
        </div>{" "}
        {/* end service-single-content */}
      </div>{" "}
      {/* end col */}
      <div className="col col-md-4 col-md-pull-8">
      <div className="faq">
              <div className="panel-group" id="accordion">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <a
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapse-1"
                      aria-expanded="true"
                    >
                      Why do we recommend pension planning at age 50?
{" "}
                    </a>
                  </div>
                  <div id="collapse-1" className="panel-collapse collapse in">
                    <div className="panel-body">
                      <p>
                      At 50 you still have enough time to close any existing gaps in your retirement provision before you retire. If you only realize at 60 that you will retire on too low an income, financial stress is the likely result. In general, the earlier, the better is the right approach.
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
                      
I’ve delayed my pension planning for too long. Now I’ve got just five years in which to close a large gap in retirement provision if I am to maintain my standard of living during my retirement. What investments should I make?

                    </a>
                  </div>
                  <div id="collapse-2" className="panel-collapse collapse">
                    <div className="panel-body">
                      <p>
                      In your situation, it's very tempting to consider a high-risk offer with very high earnings potential. The closer you get to retirement, the more attention you should pay to capital protection. The simplest and safest way to meet your capital goals is still with a pension product.
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
                      
Is there a rule of thumb on how to invest in my retirement provision?
                    </a>
                  </div>
                  <div id="collapse-3" className="panel-collapse collapse">
                    <div className="panel-body">
                      <p>
                      There is only one right solution for your current life situation, budget and plans for the future. As a rule of thumb, you should invest 10% of the household budget consistently into a private pension plan as early as possible.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
      </div>
    </div>{" "}
    {/* end row */}
  </div>{" "}
  {/* end container */}
</section>;

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

export default Retirement;