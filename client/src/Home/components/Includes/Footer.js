import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component{
    render(){
        return(
            <footer className="site-footer">
    <div className="upper-footer">
      <div className="container">
        <div className="row">
          <div className="col col-md-4 col-sm-6">
            <div className="widget about-widget">
              <div className="footer-logo">
                <img src="assets/images/footer-logo.png" alt />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
              </p>
              <ul className="contact-info">
                <li>
                  <i className="fa fa-phone" /> +123 (4567) 890
                </li>
                <li>
                  <i className="fa fa-envelope" /> info@csmwealth.com
                </li>
                <li>
                  <i className="fa fa-home" /> 380 St Ndiala Road, Enugu Trans
                  6486, Lagos
                </li>
              </ul>
            </div>
          </div>
          <div className="col col-md-2 col-sm-6">
            <div className="widget links-widget">
              <h3>Links</h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <Link to="services">Services</Link>
                </li>
                <li>
                <a href="/">Home</a>
                </li>
                <li>
                <Link to="/testimonials">Testimonials</Link>
                </li>
                <li>
                <a href="/">Home</a>
                </li>
                <li>
                <Link to="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col col-md-3 col-sm-6">
            <div className="widget support-widget">
              <h3>Support</h3>
              <ul>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Submit a Ticket</a>
                </li>
                <li>
                  <a href="#">Visit Knowledge Base</a>
                </li>
                <li>
                  <a href="#">Support System</a>
                </li>
                <li>
                  <a href="#">Refund Policy</a>
                </li>
                <li>
                  <a href="#">Professional Services</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col col-md-3 col-sm-6">
            <div className="widget twitter-feed-widget">
              <h3>Twitter Feed</h3>
              <ul>
                <li>
                  <div className="text">
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit. Ed quia con sequuntur magni dolores.
                    </p>
                  </div>
                  <div className="info-box">
                    <i className="fa fa-twitter" />
                    <strong>
                      <a href="#">@Mark Wahlberg</a>
                    </strong>
                  </div>
                </li>
                <li>
                  <div className="text">
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit. Ed quia con sequuntur magni dolores.
                    </p>
                  </div>
                  <div className="info-box">
                    <i className="fa fa-twitter" />
                    <strong>
                      <a href="#">@Mark Wahlberg</a>
                    </strong>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>{" "}
    {/* end upper-footer */}
    <div className="copyright-info">
      <div className="container">
        <div className="row">
          <div className="col col-xs-6">
            <div className="copyright-area">
              <p>
                2020 © All Rights Reserved by{" "}
                <a href="#">
                  CSMWealth
                </a>
              </p>
            </div>
          </div>
          <div className="col col-xs-6">
            <div className="footer-social">
              <span>Follow us: </span>
              <ul className="social-links">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook-square" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter-square" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin-square" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-google-plus-square" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-rss-square" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
        )
    }
}

export default Footer;