import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/Chart/Chart';
import Header from '../../components/Includes/Header';
import Footer from '../../components/Includes/Footer';

class FinancialServices extends Component{
    render(){
        return(
            <div className="page-wrapper">
            <Header/>
  <section className="page-title">
    <div className="container">
      <div className="row">
        <div className="col col-xs-12">
          <h2>Financial Services</h2>
          <ol className="breadcrumb">
            <li>
              <a href="/">Home</a>
            </li>
            <li>Financial Services</li>
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
            <h3>Financial Services</h3>
            <p>
            Highly qualified and experienced staff give independent advice on such financial services as pensions, inheritance tax, life assurance and protection, health insurance, employee benefits, investments, business protection and wealth planning. We help companies pivot into more profitable directions where they can expand and grow. It is inevitable that individuals and companies will end up making a few mistakes; we help them correct these mistakes.
            </p>
            <p>
            We help companies turnaround their non-profitable ventures into something that benefits them. Our specialty lies in understanding what makes a company special and what makes it tick.
            </p>
            <div className="img-holder">
              <img src="assets/images/service-single/img-5.jpg" alt />
            </div>
            <div className="row" style={{margin:"50px 0px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <div className="col-md-6">
              <h3>Sector Expertise</h3>
              <Chart/>
              <p>
              You can transform your savings, funds or business to a revenue-producing asset that lets you work as much or as little as you want.
              </p>
            </div>
            <div className="col-md-6">
              <h3>Business planning & strategy</h3>
              <p>Our clients are often surprised by the possibilities we present to them; we work with leading institutions in the banking, insurance  and asset management sectors in all major areas, including</p>
              <ul>
                <li>Retail banking</li>
                <li>Private banking and wealth management</li>
                <li>Corporate banking and capital markets</li>
                <li>Transaction banking</li>
                <li>Asset management</li>
                <li>Life and property insurance</li>
                <li>Health insurance</li>
                <li>Reinsurance</li>
                <li>Risk, liquidity and capital management</li>
                <li>Stock markets and financial market infrastructure</li>
              </ul>
            </div>
            </div>
            <div className="row">
              <h3>Business Plan Market</h3>
              <p>
              CSM Wealth has deep expertise in financial services, but we also look beyond the industry and draw upon our capabilities experience. We tailor these offerings to the needs of our financial services clients to help them solve problems or pursue opportunities in many areas, including:
              </p>
              <ul>
                <li>Growth strategy</li>
                <li>Organizational effectiveness</li>
                <li>Operational excellence</li>
                <li>Compliance</li>
                <li>Information technology</li>
                <li>Mergers and acquisitions</li>
                <li>Change management</li>
                <li>Private equity</li>
                <li>Performance improvement</li>
                <li>Customer experience</li>
              </ul>
            </div>
            {/* <div className="discussion-faq">
              <div className="discussion">
                <h4>Risk Management</h4>
                <p>
                  Sed facilisis lorem in orci bibendum ullamcorper. Mauris vitae
                  augue elementum, sodales nulla a, semper ligula.
                </p>
                <ul>
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
                </ul>
              </div>
            </div>{" "} */}
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
                <li className="active">
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

export default FinancialServices;