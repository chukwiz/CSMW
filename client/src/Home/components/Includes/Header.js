import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <div>
  {/* end preloader */}
  {/* Start header */}
  <header id="header" className="site-header header-style-2">
  <div className="topbar">
    <div className="upper-topbar">
      <div className="container">
        <div className="row">
          <div className="col col-sm-6">
            <p>Protect your finances, protect your future</p>
          </div>
          {/* <div className="col col-sm-6">
            <div className="language">
              <span>
                <i className="fa fa-globe" /> Lang:
              </span>
              <div className="select-box">
                <select className="selectpicker" id="language-select">
                  <option>Eng</option>
                  <option>Ban</option>
                  <option>Tur</option>
                </select>
              </div>
            </div>
          </div> */}
        </div>
      </div>{" "}
      {/* end container */}
    </div>
    <div className="lower-topbar">
      <div className="container">
        <div className="row">
          <div className="col col-sm-3">
            <div className="site-logo">
              <a href="#">
                <img src="assets/images/logo-2.png" alt />
              </a>
            </div>
          </div>
          <div className="col col-sm-9">
            <div className="contact-info">
              <div>
                <i className="fa fa-phone-square" />
                <div className="details">
                  <p>Call us</p>
                  <span>+123 (4567) 890</span>
                </div>
              </div>
              <div>
                <i className="fa fa-clock-o" />
                <div className="details">
                  <p>Working hours</p>
                  <span>Mon - Fri: 9 am - 7 pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>{" "}
    {/* end lower-topbar */}
  </div>{" "}
  {/* end topbar */}
  <nav className="navigation navbar navbar-default">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="open-btn">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
      </div>
      <div id="navbar" className="navbar-collapse collapse navigation-holder">
        <button className="close-navbar">
          <i className="fa fa-close" />
        </button>
        <ul className="nav navbar-nav">
          <li>
            <a href="/">Home</a>
            {/* <ul className="sub-menu">
              <li>
                <a href="index.html">Home style 1</a>
              </li>
              <li>
                <a href="index-2.html">Home style 2</a>
              </li>
              <li>
                <a href="index-3.html">Home style 3</a>
              </li>
              <li>
                <a href="index-4.html">Home style 4</a>
              </li>
              <li>
                <a href="index-5.html">Home style 5</a>
              </li>
              <li>
                <a href="index-6.html">Home style 6</a>
              </li>
              <li>
                <a href="index-7.html">Home style 7</a>
              </li>
              <li className="menu-item-has-children">
                <a href="#Level3">Third level</a>
                <ul className="sub-menu">
                  <li>
                    <a href="#">Level3</a>
                  </li>
                  <li>
                    <a href="#">Level3</a>
                  </li>
                  <li>
                    <a href="#">Level3</a>
                  </li>
                </ul>
              </li>
            </ul> */}
          </li>
          <li className="menu-item-has-children">
            <a href="#">Services</a>
            <ul className="sub-menu">
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
              <Link to="/consulting-services">Consulting Services</Link>
              </li>
              <li>
              <Link to="/financial-services">Financial Services</Link>
              </li>
              <li>
              <Link to="/mutual-funds">Mutual Funds</Link>
              </li>
            </ul>
          </li>
          <li className="menu-item-has-children">
            <a href="#">Investment</a>
            <ul className="sub-menu">
              <li>
                <Link to="/forex">Forex</Link>
              </li>
              <li>
              <Link to="/cryptocurrency">Cryptocurrency</Link>
              </li>
              <li>
              <Link to="/retirement-income">Retirement</Link>
              </li>
              <li>
              <Link to="/trade-nfp">Trade NFP</Link>
              </li>
            </ul>
          </li>
          <li className="menu-item-has-children">
            <a href="#">About</a>
            <ul className="sub-menu">
              <li>
              <Link to="/our-philosophy">Our Philosophy</Link>
              </li>
              <li>
              <Link to="/investment-approach">Investment Approach</Link>
              </li>
              <li>
              <Link to="/investment-process">Investment Process</Link>
              </li>
              <li>
              <Link to="/our-vision">Our Vision</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/testimonials">Testimonials</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
          
        </ul>
        <ul className=" navbar-nav nav-reg">
        <li><Link to="/register" className="btn btn-reg">Sign Up</Link></li>
        <li><Link to="/login" className="btn btn-login">Login</Link></li>
        </ul>
        
      </div>
      {/* end of nav-collapse */}
      {/* <div className="search-social">
        <div className="header-search-area">
        <ul>
          <li><Link to="/register" className="btn">Sign Up</Link></li>
        </ul>
          <div className="header-search-form">
            <form className="form">
              <div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search here"
                />
              </div>
              <button type="submit" className="btn">
                <i className="fa fa-search" />
              </button>
            </form>
          </div>
          <div>
            <button className="btn open-btn">
              <i className="fa fa-search" />
            </button>
          </div>
          
        </div>
      </div> */}
    </div>
    {/* end of container */}
  </nav>
</header>
            </div>
        )
    }
}

export default Header;