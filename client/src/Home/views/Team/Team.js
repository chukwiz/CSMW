import React from 'react';
import './Team.css';

const Team = () => {
    return (
        <div style={{fontSize:"100%"}}>
          {/*[if lt IE 9]>
  <div style="text-align:center; padding: 6px 0; background: #cc0000; font-size: 18px; color: #fff; font-weight: 500;">You are using an old version of Internet Explorer. For a better experience, keep your browser up to date. <a href="http://windows.microsoft.com/ie" target="_blank" class="btn btn-sm btn-info"><i class="fa fa-edge"></i> Get the latest IE</a></div>
  <![endif]*/}
          {/* scrollToTop */}
          {/* ================ */}
          <div className="scrollToTop circle"><i className="icon-up-open-big" /></div>
          {/* page wrapper start */}
          {/* ================ */}
          <div className="page-wrapper">
            {/* header-container start */}
            <nav className="navbar  navbar-light bg-white" style={{fontSize:"100%"}}>
<a className="navbar-brand" href="/">
    <img src="../csmwhitelogo.png" alt="logo" />
</a>
  {/* <a className="navbar-brand" href="/">Sticky top</a> */}
  <ul className="list-inline">
{/* <li ><i className="fa fa-phone "></i>International: +44 2035192105</li> */}
<li className="">&nbsp;|&nbsp;</li>
<li><a href="mailto:support@csmwealth.com" target="_blank" rel = "noopener noreferrer"><i className="fa fa-envelope"></i> support@csmwealth.com</a></li>
<li className="">&nbsp;|&nbsp;</li>
{/* <li><a href="/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-default-login" style={{margin:"0"}}><b>LOGIN</b></a></li> */}
</ul>

<ul className="ml-auto list-inline" style={{marginRight:"40px"}}>
<li className="hidden-xs"><a href="/login" className="btn btn-sm btn-white" style={{margin:"0", padding:"8px 20px 6px 20px"}}><b>CLIENT LOGIN</b></a></li>
<li><a href="/signup" className="btn btn-sm btn-default btn-ocean-green" style={{margin:"0"}}><b>SIGN UP</b></a></li>
</ul>

</nav>
<nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
  
  <a className="navbar-brand" href="/">
    CSM
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNavDropdown"
    aria-controls="navbarNavDropdown"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav ml-auto" style={{marginRight:"40px"}}>
      <li className="nav-item">
        <a className="nav-link" href="/">
          HOME <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="/"
          id="navbarDropdownMenuLink"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          PORTFOLIO
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="/crypto">
            Crypto
          </a>
          <a className="dropdown-item" href="/forex">
            Forex
          </a>
          <a className="dropdown-item" href="/nfp">
            Trade Nfp
          </a>
          <a className="dropdown-item" href="/retirement">
            Retirement Income
          </a>
          
        </div>
      </li>
      
      <li className="nav-item">
        <a className="nav-link active" href="/ourteam">
          OUR TEAM
        </a>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="/"
          id="navbarDropdownMenuLink"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          ABOUT
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="/aboutus">
            About
          </a>
          <a className="dropdown-item" href="/vision">
            Vision
          </a>
          <a className="dropdown-item" href="/contactus">
            Contact us
          </a>
          <a className="dropdown-item" href="/testimony">
            Testimonials
          </a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/faq">
          FAQ
        </a>
      </li>
    </ul>
  </div>
</nav>

<div className="banner video-background-banner pv-40 dark-translucent-bg hovered" style={{paddingTop: '40px !important', height: '65vh',marginBottom:"7%"}}>
            <div style={{position: 'absolute', zIndex: -1, top: '0px', left: '0px', bottom: '0px', right: '0px', overflow: 'hidden', backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url("../../static/redesign/images/inner/about/team.jpg")', backgroundColor: 'transparent', backgroundSize: 'cover', backgroundPosition: '50% 50%', backgroundRepeat: 'no-repeat'}}>

            </div>
            <div className="container">
                <div className="row" style={{display:"flex",justifyContent:"center"}}>
                  <div className="col-md-12 " style={{color:"#272424",textAlign:"center"}}>
                    {/* <h4 className="title object-non-visible animated object-visible fadeIn" style={{color:"#d8d8d8"}} data-animation-effect="fadeIn" data-effect-delay={100}>Investing in non-farm payroll?</h4> */}
                    <h2 className="title object-non-visible animated object-visible fadeIn" style={{color:"#d8d8d8"}} data-animation-effect="fadeIn" data-effect-delay={100} style={{fontSize:"300%"}}>MEET THE TEAM</h2>
                    <div className="separator-2 object-non-visible mt-10 animated object-visible fadeIn" data-animation-effect="fadeIn" data-effect-delay={100}  />
                    <a href="/signup" className="object-non-visible animated object-visible fadeIn btn btn-sm btn-default btn-ocean-green" data-animation-effect="fadeIn" data-effect-delay={100} style={{ fontSize:"100%" }}>Create Account</a>
                  </div>
                </div>
              </div>
            </div>

            {/* header-container end */}
            {/* <div className="breadcrumb-container" style={{borderTop: '2px solid #f1f1f1'}}>
              <div className="container">
                <ol className="breadcrumb">
                  <li><a href="../index.html"><i className="fa fa-home" /></a></li>
                  <li><a href="../trading/premium-account.html">Account Types</a></li>
                  <li className="active">Open Account</li>
                </ol>
              </div>
            </div> */}
            <section className="main-container">
              <div className="container">
                <div className="row">
                  {/* main content starts */}
                  <div style={{display:"flex", justifyContent:"center"}}>
                  {/*  */}

                  <div className="container">
  <h5 className="section-title h1">Our brokers</h5>
  <div className="separator-2 object-non-visible mt-10 animated object-visible fadeIn" data-animation-effect="fadeIn" data-effect-delay={100}  />            
  <p>Jan, David and Lucas had successful careers as a financial consultant, civil engineer and telecommunications engineer respectively. In 2012, they gave it all up to follow their entrepreneurial dream and change financial markets as we know them</p>
  <div className="row">
    {/* Team member */}
    <div className="col-xs-12 col-sm-6 col-md-6">
      <div
        className="image-flip"
        ontouchstart="this.classList.toggle('hover');"
      >
        <div className="mainflip">
          <div className="frontside">
            <div className="card">
              <div className="card-body text-center">
                <p>
                  <img
                    className=" img-fluid"
                    src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png"
                    alt="card imag"
                  />
                </p>
                <h4 className="card-title">David Pence</h4>
                <p className="card-text">
                Chief Investment Officer
                </p>
                <a href="/" className="btn btn-primary btn-sm">
                  <i className="fa fa-plus" />
                </a>
              </div>
            </div>
          </div>
          <div className="backside">
            <div className="card">
              <div className="card-body text-center mt-4">
                <h4 className="card-title">CSM Wealth</h4>
                <p className="card-text" style={{fontSize:"70%"}}>
                David Pence serves as Chief Investment Officer for CSM Wealth Management/Csm Capital, overseeing the management of all client assets. David obtained his degree in Economics from Harvard University in 1982. In that same year, he was commissioned in the US Army as a Military Intelligence Officer through the ROTC program at Massachusetts Institute of Technology (MIT).
Formally trained as an economist, David Pence is CIO of CSM Wealth Management, he oversees over $300million in brokerage and advisory client assets.
David Pence combines his formal training and knowledge as an Economist with his years of experience in psychological warfare to bring a unique understanding of human behavior and how it affects the economy and the markets. David Pence is a frequent speaker at regional and national events.
                </p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a
                      className="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i className="fa fa-google" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* ./Team member */}
    {/* Team member */}
    <div className="col-xs-12 col-sm-6 col-md-6">
      <div
        className="image-flip"
        ontouchstart="this.classList.toggle('hover');"
      >
        <div className="mainflip">
          <div className="frontside">
            <div className="card">
              <div className="card-body text-center">
                <p>
                  <img
                    className=" img-fluid"
                    src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_02.png"
                    alt="card image"
                  />
                </p>
                <h4 className="card-title">Lucas D. Prottsman</h4>
                <p className="card-text">
                Investment Advisory Representative
                </p>
                <a href="#" className="btn btn-primary btn-sm">
                  <i className="fa fa-plus" />
                </a>
              </div>
            </div>
          </div>
          <div className="backside">
            <div className="card">
              <div className="card-body text-center mt-4">
                <h4 className="card-title">CSM Wealth</h4>
                <p className="card-text" style={{fontSize:"70%"}}>
                Lucas D. Prottsman graduated from Brigham Young University in 1984 with his degree from the top rated, nationally recognized, Marriott School of Business and Finance. With over 32 years experience in Tax, Financial Planning and Estate Planning, he is an excellent financial consultant and is recognized as a leading specialist in values-based planning for families. In order to serve his clients’ needs and help address both their financial and life goals. Mr. prottsman created the Stewardship Estate Plan*. He is the President and founder of First Crypto Strategies, Inc.* a company with a focus on Wealth Management and Advanced crypto trading Techniques for high net worth families. He also assists non-profits in creating and establishing charitable estate planning programs that work towards building and preserving endowment assets while striving to protect their future. Mr. prottsman Financial Planning Practice concentrates on the core values of financial planning including Retirement, Tax, Insurance,Crypto Management and Advanced forex trading techniques. Mr. prottsman is an Investment Advisory Representative with CSM Capital/Ameriprise Financial
                </p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a
                      className="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i className="fa fa-google" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* ./Team member */}
    {/* Team member */}
    <div className="col-xs-12 col-sm-6 col-md-6">
      <div
        className="image-flip"
        ontouchstart="this.classList.toggle('hover');"
      >
        <div className="mainflip">
          <div className="frontside">
            <div className="card">
              <div className="card-body text-center">
                <p>
                  <img
                    className=" img-fluid"
                    src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_03.png"
                    alt="card image"
                  />
                </p>
                <h4 className="card-title">jan kohler</h4>
                <p className="card-text">
                Financial Planner
                </p>
                <a href="#" className="btn btn-primary btn-sm">
                  <i className="fa fa-plus" />
                </a>
              </div>
            </div>
          </div>
          <div className="backside">
            <div className="card">
              <div className="card-body text-center mt-4">
                <h4 className="card-title">CSM Wealth</h4>
                <p className="card-text" style={{fontSize:"70%"}}>
                Jan specializes in the areas of retirement income distribution strategies, taxation strategies, and college planning. He has a strong knowledge of and understanding of veterans’ benefits after serving over 21 years in the Marine Corps and the Navy.
A graduate of the University of San Diego, He is a CERTIFIED FINANCIAL PLANNER™ Professional, and a Retirement Income Certified Professional. He has served on the board of the Financial Planning Association (FPA), spent two years on the Membership and Programs Committees of the Association for Corporate Growth (ACG), and was a founding board member of Support the Enlisted Project (STEP), an organization providing emergency financial grants and transition assistance to junior enlisted military members and their families.
In addition to his CFP® Certificate, and RICP® designation, jan holds his Series 7, Series 66,  and Series 24 with CSM Financial and CA Life Insurance licenses, but his Commercial Pilot License is the one he prefers to use the most.
                </p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a
                      className="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i className="fa fa-google" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* ./Team member */}
    {/* Team member */}
    <div className="col-xs-12 col-sm-6 col-md-6">
      <div
        className="image-flip"
        ontouchstart="this.classList.toggle('hover');"
      >
        <div className="mainflip">
          <div className="frontside">
            <div className="card">
              <div className="card-body text-center">
                <p>
                  <img
                    className=" img-fluid"
                    src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_04.jpg"
                    alt="card image"
                  />
                </p>
                <h4 className="card-title">Andreas zweig</h4>
                <p className="card-text">
                investment advisor
                </p>
                <a href="#" className="btn btn-primary btn-sm">
                  <i className="fa fa-plus" />
                </a>
              </div>
            </div>
          </div>
          <div className="backside">
            <div className="card">
              <div className="card-body text-center mt-4">
                <h4 className="card-title">CSM Wealth</h4>
                <p className="card-text" style={{fontSize:"70%"}}>
                Andreas zweig is a member of our team of diversified investment advisors and a CERTIFIED FINANCIAL PLANNER™ Professional. With over 20 years of experience in the financial planning field, he has extensive experience in asset management, financial planning, insurance, retirement planning and assessments of 401(k) plans.
He received his undergraduate business degree from University of manchester with an emphasis on Finance. Additionally, he is a graduate of the UC Irvine Personal Financial Planning program.
zweig is one of CSM’s longest tenured advisors and fully embraces the Csm Process of seeking to provide solid, professional advice on ways to work toward a client’s financial goals. He takes an active role in educating clients and his goal is to deliver professional wealth management through sound advice, helping create value, focus, and understanding.
                </p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a
                      className="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i className="fa fa-google" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* ./Team member */}
    {/* Team member */}
    <div className="col-xs-12 col-sm-6 col-md-6">
      <div
        className="image-flip"
        ontouchstart="this.classList.toggle('hover');"
      >
        <div className="mainflip">
          <div className="frontside">
            <div className="card">
              <div className="card-body text-center">
                <p>
                  <img
                    className=" img-fluid"
                    src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_05.png"
                    alt="card image"
                  />
                </p>
                <h4 className="card-title">David Ackland</h4>
                <p className="card-text" >
                Investment strategist
                </p>
                <a href="#" className="btn btn-primary btn-sm">
                  <i className="fa fa-plus" />
                </a>
              </div>
            </div>
          </div>
          <div className="backside">
            <div className="card">
              <div className="card-body text-center mt-4">
                <h4 className="card-title">CSM Wealth</h4>
                <p className="card-text" style={{fontSize:"70%"}}>
                David Ackland joined CSM Wealth Management (CWM) in 2011. He serves on CWM Investment Committee and shares responsibility for investment strategy, risk management, and portfolio construction.
David is also Head of Research, serving as an economist, earnings analyst and investment strategist, delivering insights on global and US investment issues for the CWM team and advisors. He oversees CSM fundamental investment portfolio, individual stock selection, creation of UITs, and funds selection.
David research covers topics in macroeconomics, financial markets, and behavioral finance. His main focus of study is to analyze changes in consumer behavior and government policies.
Prior to joining CSM, Mr. David was a research analyst at MarketPsy Group, where he specialized in quantitative strategies. Dr. David holds a Ph.D. degree in economics from Claremont Graduate University and a master’s degree in Economics from University of California at Davis.
                </p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a
                      className="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i className="fa fa-google" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* ./Team member */}
    {/* Team member */}
    <div className="col-xs-12 col-sm-6 col-md-6">
      <div
        className="image-flip"
        ontouchstart="this.classList.toggle('hover');"
      >
        <div className="mainflip">
          <div className="frontside">
            <div className="card">
              <div className="card-body text-center">
                <p>
                  <img
                    className=" img-fluid"
                    src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_05.png"
                    alt="card image"
                  />
                </p>
                <h4 className="card-title">Ms.kathrine Bushong</h4>
                <p className="card-text" >
                Wealth management
                </p>
                <a href="#" className="btn btn-primary btn-sm">
                  <i className="fa fa-plus" />
                </a>
              </div>
            </div>
          </div>
          <div className="backside">
            <div className="card">
              <div className="card-body text-center mt-4">
                <h4 className="card-title">CSM Wealth</h4>
                <p className="card-text" style={{fontSize:"70%"}}>
                Ms.kathrine Bushong began her career in the financial services industry in 2001. She graduated from Occidental College in Los Angeles, CA with a BA in Diplomacy and World Affairs.
Katherine assist David Pence in all facets including wealth management, investment accounts, estate planning, multi-generational legacy creation, charitable giving, life and disability insurance, annuities, long-term care planning, and corporate investment management. Katherine holds FINRA Series 7 and 66 registrations through LPL Financial.
Ms. Bushong supports March of Dimes and the Seal Beach Animal Care Center. She lived in Parma, Italy, and speaks Italian, Spanish, French, and some Russian. In her spare time, Emily enjoys collecting classic and antique automobiles, car shows, travelling, and restoring antique pianos. Currently she lives in Huntington Harbour and is the proud mother of Elizabeth.
                </p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a
                      className="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i className="fa fa-google" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="col-xs-12 col-sm-6 col-md-6">
      <div
        className="image-flip"
        ontouchstart="this.classList.toggle('hover');"
      >
        <div className="mainflip">
          <div className="frontside">
            <div className="card">
              <div className="card-body text-center">
                <p>
                  <img
                    className=" img-fluid"
                    src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_06.jpg"
                    alt="card image"
                  />
                </p>
                <h4 className="card-title">CSM Wealth</h4>
                <p className="card-text" style={{fontSize:"70%"}}>
                  This is basic card with image on top, title, description and
                  button.
                </p>
                <a href="#" className="btn btn-primary btn-sm">
                  <i className="fa fa-plus" />
                </a>
              </div>
            </div>
          </div>
          <div className="backside">
            <div className="card">
              <div className="card-body text-center mt-4">
                <h4 className="card-title">CSM Wealth</h4>
                <p className="card-text" style={{fontSize:"70%"}}>
                  This is basic card with image on top, title, description and
                  button.This is basic card with image on top, title,
                  description and button.This is basic card with image on top,
                  title, description and button.
                </p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a
                      className="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i className="fa fa-google" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    {/* ./Team member */}
  </div>
</div>;


                  {/*  */}
                  </div>
                  {/* sidebar starts */}
                  {/* <div className="col-md-3 col-sm-12 col-xs-12">
                    <div className="sidebar" style={{marginTop: '0px'}}>
                      <div style={{background: '#131c28', float: 'left', width: '100%', padding: '10px 20px 20px 20px'}} className="mb-30 clearfix">
                        <h4 className="color-white">Join LMFX</h4>
                        <div className="separator-2 custom-separator-2" />
                        <a href="open-account.html" className="btn btn-sm btn-default btn-ocean-green full-width"><b>OPEN LIVE ACCOUNT</b></a>
                        <a href="demo-account.html" className="btn btn-sm btn-default full-width"><b>OPEN DEMO ACCOUNT</b></a>
                      </div>
                      <a href="../funding/bonus-offerings.html"><img className="img-responsive" src="../../static/redesign/images/sidebar-pamm.jpg" alt = "" /></a>
                      <div className="pv-30 clearfix">
                        <h4 className="title">Account Types</h4>
                        <div className="separator-2" />
                        <nav>
                          <ul className="nav nav-pills nav-stacked list-style-icons">
                            <li><a href="premium-account.html"><i className="fa fa-angle-double-right" />Premium Account</a></li>
                            <li><a href="fixed-account.html"><i className="fa fa-angle-double-right" />Fixed Account</a></li>
                            <li><a href="zero-account.html"><i className="fa fa-angle-double-right" />Zero Account</a></li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div> */}
                  {/* sidebar ends */}
                </div>
              </div>
            </section>
            {/*================== FOOTER starts here =======================*/}
            <section className="clearfix pv-20 hidden-sm hidden-xs" id="paymen-methods" style = {{backgroundColor:"#42ce7a"}}>
<div className="container">
<div className="row" style={{display:"flex",justifyContent:"space-around"}}>
<div className="owl-clients-v1" style={{display:"flex",justifyContent:"space-around",margin:"10px 0px"}}>
<div className="item col-md-3">
<a href="/"><img src="../static/redesign/images/payment-methods/wire-transfer.png" alt="wire-transfer" title="wire-transfer"/></a>
</div>
<div className="item col-md-3">
<a href="/"><img src="../static/redesign/images/payment-methods/visa.png" alt="visa" title="visa" /></a>
</div>
<div className="item col-md-3">
<a href="/"><img src="../static/redesign/images/payment-methods/btc.png" alt="mastercard" title="mastercard"/></a>
</div>
<div className="item col-md-3">
<a href="/"><img src="../static/redesign/images/payment-methods/mastercard.png" alt="mastercard" title="mastercard"/></a>
</div>
{/* <div className="item">
<a href="/"><img src="../static/redesign/images/payment-methods/maestro.png" alt="maestro" title="maestro"/></a>
</div> */}
{/* <div className="item">
<a href="/"><img src="../static/redesign/images/payment-methods/skrill.png" alt="skrill" title="skrill"/></a>
</div>
<div className="item">
<a href="/"><img src="../static/redesign/images/payment-methods/neteller.png" alt="neteller" title="neteller"/></a>
</div>
<div className="item">
<a href="/"><img src="../static/redesign/images/payment-methods/fasapay.png" alt="fasapay" title="fasapay" style={{border: "1px solid #ddd"}} /></a>
</div>
<div className="item">
<a href="/"><img src="../static/redesign/images/payment-methods/vload1.png" alt="vload" title="vload" style={{border: "1px solid #ddd"}}/></a>
</div> */}
</div>
</div>
</div>
</section>
<footer id="footer" className="clearfix dark">
<div className="footer">
<div className="container">
<div className="footer-inner">
<div className="row">

</div>
<div className="row">
<div className="col-md-12">
<div className="footer-content" style={{padding:"0px"}}>
<div className="separator-2"></div>
<div className="row">
<div className="col-md-3 color-offwhite" style={{paddingTop:"2px"}}>
<i className="fa fa-lock pr-10 color-white"></i> Secured by: GeoTrust Inc
</div>
{/* <div className="col-md-3 color-offwhite" style={{paddingTop:"2px"}}>
<i className="fa fa-phone pr-10 color-white"></i> Telephone: +44 2035192105
</div> */}
<div className="col-md-6 color-offwhite" style = {{paddingTop:"2px"}}>
<i className="fa fa-envelope-o pr-10 color-white"></i>support@csmwealth.com
</div>
<div className="col-md-3 color-offwhite">
<ul className="social-links circle animated-effect-1" style={{marginTop:"0px",marginBottom:"2px",float:"right"}}>
<li className="facebook"><a target="_blank" rel="noopener noreferrer" href="/"><i className="fa fa-facebook"></i></a></li>
<li className="twitter"><a target="_blank" rel="noopener noreferrer" href="/"><i className="fa fa-twitter"></i></a></li>
<li className="googleplus"><a target="_blank" rel="noopener noreferrer" href="/"><i className="fa fa-google-plus"></i></a></li>
<li className="linkedin"><a target="_blank" rel="noopener noreferrer" href="/"><i className="fa fa-linkedin"></i></a></li>
</ul>
</div>
</div>
</div>
</div>
</div>
<div className="row">
<div className="col-md-12">
<div className="separator-2"></div>
<p className="color-offwhite" style={{fontSize:"12px"}}>
<b></b>
</p>
<p className="color-offwhite" style={{fontSize:"12px"}}>
<a href="https://beta.companieshouse.gov.uk/company/07659758" target="_blank" rel="noopener noreferrer" style={{color:"#22356d"}}>Registered office address</a> <br />
1 Windsor Road, Northam, Bideford, Devon, England, EX39 1EN
</p>
<p className="color-offwhite" style={{fontSize:"12px"}}>
CSM Wealth holds a Financial Services Licence which authorizes us to issue and act as a responsible entity to <a href="https://beta.companieshouse.gov.uk/company/07659758" target="_blank" rel="noopener noreferrer" style={{color:"#22356d"}}>registered </a> managed investment schemes and to act as trustee to wholesale unregistered investment schemes worldwide.
<p><b>Risk Warning:</b> Contracts for Difference (‘CFDs’) are complex financial products that are traded on margin. Trading CFDs carries a high level of risk since leverage can work both to your advantage and disadvantage.
<br/>
As a result, CFDs may not be suitable for all investors because you may lose all your invested capital. You should not risk more than you are prepared to lose. Before deciding to trade, you need to ensure that you understand the risks involved taking into account your investment objectives and level of experience. All information on this website is not directed toward soliciting citizens or residents of the United States, United Kingdom, Japan or any other jurisdiction that would be contrary to local law or regulation.
<br/>
Past performance of CFDs is not a reliable indicator of future results. Most CFDs have no set maturity date. Hence, a CFD position matures on the date you choose to close an existing open position. Seek independent advice, if necessary. Please read CSM Wealth’s full ‘Risk Disclosure Statement’.
</p>
<br/></p>
</div>
</div>
</div>
</div>
</div>
</footer>
            {/* footer end */}
          </div>
        </div>
      );
}

export default Team;