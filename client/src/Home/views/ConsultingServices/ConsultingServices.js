import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Includes/Header';
import Footer from '../../components/Includes/Footer';

class ConsultingServices extends Component{
    render(){
        return(
            <div className="page-wrapper">
            <Header/>
  <section className="page-title">
    <div className="container">
      <div className="row">
        <div className="col col-xs-12">
          <h2>Consulting Services</h2>
          <ol className="breadcrumb">
            <li>
              <a href="/">Home</a>
            </li>
            <li>Consulting Services</li>
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
            <h3>Consulting Services</h3>
            <p>
            Our management consulting services focus on our clients' most critical issues and opportunities: strategy, marketing, organization, operations, technology, transformation, digital, advanced analytics, corporate finance, mergers & acquisitions and sustainability across all industries and geographies. We bring deep, functional expertise, but are known for our holistic perspective: we capture value across boundaries and between the silos of any organization. We have proven a multiplier effect from optimizing the sum of the parts, not just the individual pieces.
            </p>
            <p>
            Working with us has many benefits for you, your business and your stakeholders. We are known for our creative, yet professional approach, which is based on establishing a unique relationship with each of our clients.
            </p>
            <div className="img-holder">
              <img src="assets/images/service-single/img-5.jpg" alt />
            </div>
            <div className="discussion-faq">
              <div className="disussion">
                <h4>Our Consultancy Services</h4>
                <ul>
                  <li>
                    <i className="fa fa-adjust" /> Business continuity support for companies
                  </li>
                  <li>
                    <i className="fa fa-adjust" /> Consultancy for small, major and superscale events on issues taking place during preparation, in delivery and post event
                  </li>
                  <li>
                    <i className="fa fa-adjust" /> Consulting on HVM, HR planning and counter-terrorism advice for major companies and projects
                  </li>
                  <li>
                    <i className="fa fa-adjust" /> Crowd management plan testing, software testing, security planning and auditing
                  </li>
                  <li>
                    <i className="fa fa-adjust" /> Health & Safety Reports for a range of commercial businesses, local authorities and third sector clients
                  </li>
                  <li>
                    <i className="fa fa-adjust" /> Increasing staff development and engagement.
                  </li>
                  <li>
                    <i className="fa fa-adjust" /> Personnel audits for major companies.
                  </li>
                  <li>
                    <i className="fa fa-adjust" /> Risk assessment documentation.
                  </li>
                </ul>
              </div>

              <div className="disussion">
                <h4>Consultancy Benefits</h4>
                <ul>
                  <li>
                    <i className="fa fa-adjust" /> All of our associates are nationally and internationally renowned in their fields with many years of experience, enabling them to provide expert advice, knowledge, and support for all of our clients. Our outcomes are current, relevant and instantly applicable to our client’s work settings.
                  </li>
                  <li>
                    <i className="fa fa-adjust" /> Through a unique interdisciplinary approach, we can bring a range of innovative possibilities to businesses looking for a change.
                  </li>
                  <li>
                    <i className="fa fa-adjust" /> At the end of each consultancy project, an extensive report is produced providing the client with our findings, conclusions, and recommendations.
                  </li>
                  <li>
                    <i className="fa fa-adjust" /> Our broad range and vast catalogue of work enable us to examine the possibilities for each client from a number of viewpoints.
                  </li>
                  <li>
                    <i className="fa fa-adjust" /> We use creative approaches to consultancy, which combine the latest thinking with both grounded theoretical knowledge and practical experience
                  </li>
                  <li>
                    <i className="fa fa-adjust" /> Our adaptable and quality service provides customers with measured results in a time frame which is individually tailored to each client.
                  </li>
                </ul>
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
                <li className="active">
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

export default ConsultingServices;