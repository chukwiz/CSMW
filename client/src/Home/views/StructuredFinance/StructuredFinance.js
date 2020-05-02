import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Includes/Header';
import Footer from '../../components/Includes/Footer';

class StructuredFinance extends Component{
    render(){
        return(
            <div className="page-wrapper">
            <Header/>
  <section className="page-title">
    <div className="container">
      <div className="row">
        <div className="col col-xs-12">
          <h2>Structured Finance</h2>
          <ol className="breadcrumb">
            <li>
              <a href="/">Home</a>
            </li>
            <li>Structured Finance</li>
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
            <h3>Structured Finance</h3>
            <p>
            This is a medium of financing designed to meet the needs of clients on a non-interest basis. 
            It is not a loan given on an interest basis by the bank but rather a sale of an asset or commodity 
            at a profit. This is based on the murabaha contract.
            </p>
            <p>
            Structured finance is designed specifically to
             meet unique capital needs not typically covered by traditional lending. New funding instruments have 
             been designed to transform cash flows and reshape the liquidity structure of balance sheets through
              securitization, allowing our clients to finance projects, receive off–balance sheet treatment or 
              increase short–term liquidity.
            </p>
            <div className="img-holder">
              <img src="assets/images/service-single/img-5.jpg" alt />
            </div>
            <div className="discussion-faq">
              <div className="discssion">
                <h4>Features</h4>
                <p>
                  Sed facilisis lorem in orci bibendum ullamcorper. Mauris vitae
                  augue elementum, sodales nulla a, semper ligula.
                </p>
                <ul>
                  <li>
                    <i className="fa fa-adjust" /> Suitable for manufacturers who need working capital on a relatively short term basis to finance acquisition of raw materials and consumables
                  </li>
                  <li>
                    <i className="fa fa-adjust" /> It is also available to finance LPOs of reputable companies
                  </li>
                  <li>
                    <i className="fa fa-adjust" /> Import and export transactions of permissible goods are also financed
                    
                  </li>
                  <li>
                    <i className="fa fa-adjust" />It can also be used to finance fixed assets such as commodities, stock and inventory, machines and equipment, automobiles, furniture, consumer goods
                  </li>
                  <li>
                    <i className="fa fa-adjust" />Maximum credit 80% of the value of goods
                  </li>
                  <li>
                    <i className="fa fa-adjust" /> Maximum tenure of 180 days
                  </li>
                  <li>
                    <i className="fa fa-adjust" /> No form of interest including compound interest
                  </li>
                  <li>
                    <i className="fa fa-adjust" /> Flexible repayment tenure
                  </li>
                  <li>
                    <i className="fa fa-adjust" /> Fixed profit margin/mark up during the life of the contract
                  </li>
                </ul>
              </div>
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
                <li className="active">
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
                <li >
                  <Link to="/mutual-funds">Mutual Funds</Link>
                </li>
                
              </ul>
            </div>
            <div className="widget contact-widget">
              <h3>Contact</h3>
              <ul>
                <li>
                  <i className="fa fa-location-arrow" /> 399 Alaye street upper Iweka
                </li>
                <li>
                  <i className="fa fa-phone" /> 1-234-567-8910 <br />
                  1-234-567-8910
                </li>
                <li>
                  <i className="fa fa-envelope" /> support@csmwealth.com
                </li>
              </ul>
            </div>
            <div className="widget brochures-widget">
              <h3>Certificates</h3>
              <p>
                Download our Registration details 
              </p>
              <div className="btns">
                <a href="#">
                  <i className="fa fa-download" /> Download Registration
                </a>
                {/* <a href="#">
                  <i className="fa fa-file-pdf-o" /> Characteristics
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="row">
        <div className="col col-xs-12">
          
          {/* end service-single-content */}
        </div>
      </div>
      {/* end row */}
    </div>{" "}
    {/* end container */}
  </section>
  {/*  */}
  <section className="services-section-s3 section-padding">
  <div className="container">
    <div className="row">
      <div className="col col-md-8 col-md-offset-2">
        <div className="section-title-s3">
          <h2>Reliable & safe</h2>
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
                  <a href="#">Financial Regulation</a>
                </h3>
                <p>
                Licensed and registered under the Government of Canada with Business Number (BN): 840439137 and Registry ID: 659839111 in accordance with the Markets and Financial Instruments Directive
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
                  <a href="#">Insured Client Funds</a>
                </h3>
                <p>
                We are a proud member of the Investor Compensation Fund which acts as a guarantor of last resort for our investors. IFC covers the maximum amount of 100.000 EUR for MiFID clients.
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
                  <a href="#">Segregated Accounts</a>
                </h3>
                <p>
                Investor’s money is kept in segregated accounts with top-tier banks that cannot be claimed by creditors or used by us. Account base currencies are available in EUR, GBP, USD, CHF and JPY.
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
                  <a href="#">Negative Balance Protection</a>
                </h3>
                <p>
                Through the use of an automated transaction monitoring and risk management system, a Consulting WP client’s account will never be allowed to reach negative balance.
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
                  <a href="#">Extreme Transparency Policy</a>
                </h3>
                <p>
                Our Extreme Transparency Policy ensures that the client receives a transparent price feed, transparent liquidity, transparent historical data, transparent market information at all times.
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
                  <a href="#">USD 825.000.000 NOP</a>
                </h3>
                <p>
                The total value of all of the client’s open positions combined (net open position) may not surpass USD 825.000.000.
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
  {/*  */}
  <Footer/>
  {/* end service-single-section */}
</div>

        )
    }
}

export default StructuredFinance;