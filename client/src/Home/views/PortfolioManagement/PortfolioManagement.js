import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Includes/Header';
import Footer from '../../components/Includes/Footer';

class PortfolioManagement extends Component{
    render(){
        return(
            <div className="page-wrapper">
            <Header/>
  <section className="page-title">
    <div className="container">
      <div className="row">
        <div className="col col-xs-12">
          <h2>Portfolio Management</h2>
          <ol className="breadcrumb">
            <li>
              <a href="/">Home</a>
            </li>
            <li>Portfolio Management</li>
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
            <h3>Portfolio Management</h3>
            <p style={{fontSize:"150%",textAlign:"center"}}>
            Are you looking for an approach adaptable to your level of involvement in the management of your portfolio? CSM Wealth Wealth Management allows you to choose how much you would like to delegate.
            </p>
            <div className="img-holder">
              <img src="assets/images/service-single/img-5.jpg" alt />
            </div>
            <div className="discussion-faq">
              <div className="disussion">
                {/* <h4>Risk Management</h4> */}
                <p>
                Whether you wish to manage your assets yourself, as you are already well-informed on market trends, do it in collaboration with our specialists, or just eliminate the day-to-day hassle of portfolio management, we can provide you with the solution most adapted to your needs, and expectations. CSM Wealth Management has two portfolio management solutions at your disposal:
                </p>
                <p>
                <strong>Discretionary Portfolio Management (DPM)</strong> allows you to delegate the management of your portfolio to our management teams.
                </p>
                <p>
                Evolving financial markets are complex and require considerable involvement and analysis. Similarly, the opportunities and risks inherent to investments require constant attention. And yet, your time is precious.
                </p>
                <p>
                When you choose to use our Discretionary Portfolio Management, you delegate the analysis, selection of the best investments and constant monitoring of your portfolio to our team of portfolio managers, who leverage not only their own experience and savoir-faire but also the expertise of numerous financial specialists (in investment strategy, asset allocation, etc.). To make the most of every investment opportunity, we implement active management to respond to market changes and to meet your investment objectives and fulfil your wishes in terms of return and risk.
                </p>
                <p>
                We offer you a global service and tailored assistance through our wide range of asset allocation solutions, thematic mandates and our bespoke portfolio management offering, providing you with a whole spectrum of investment styles suitable for your investor profile
                </p>
                {/* <ul>
                  <li>
                    <i className="fa fa-adjust" /> Sed do eiusmod tempor
                    incididunt ut
                  </li>
                  <li>
                    <i className="fa fa-adjust" /> Labore et dolore magna aliqua
                  </li>
                  <li>
                    <i className="fa fa-adjust" /> Ut enim ad minim veniam quis
                    nostrud
                  </li>
                  <li>
                    <i className="fa fa-adjust" /> Integer rhoncus hendrerit sem
                    egestas porttitor
                  </li>
                  <li>
                    <i className="fa fa-adjust" /> Praesent sem libero, luctus
                    et quam iaculis
                  </li>
                  <li>
                    <i className="fa fa-adjust" /> sodales nulla a semper ligula
                  </li>
                </ul> */}
              </div>
              <div className="disussion" style={{marginTop:"20px"}}>
                <p>
                <strong>Advisory Services</strong> will supply you with our specialists’ recommendations for investing in the capital markets, afford you assistance in the management of your portfolio and provide careful monitoring of your positions.
                </p>
                <p>
                You want to play a key role in managing your assets but would like active monitoring of your positions and advice from our specialists? With our Advisory Services, you maintain a privileged relationship with your Private Banker, who takes a hand in managing your portfolio and guides you in your decision-making by providing you with key market information provided by
                </p>
                <ul>
                  <li>A team of buy-side analysts who provide detailed sector analysis, and investment and trading lists of stock</li>
                  <li>An Advisory Desk team which, after a thorough screening process, provides a list of the best picks, investment opportunities and arbitrages as well as recommendation updates</li>
                  <li>A local trading desk providing efficient execution on all instruments.</li>
                </ul>
                <p>
                Our Advisory Desk offers you solutions that vary according to your desired degree of involvement. No matter what you choose, you will benefit from our proprietary portfolio construction method as well as a regular and personalized review of your wealth situation, while at the same time always remaining abreast of market opportunities
                </p>
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
                <li>
                <Link to="/structured-finance">Structured Finance</Link>
                </li>
                
                <li>
                  <Link to="/wealth-management">Wealth Management</Link>
                </li>
                <li className="active">
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
  <Footer/>
  {/* end service-single-section */}
</div>

        )
    }
}

export default PortfolioManagement;