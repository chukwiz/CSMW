import React from 'react';

const Retirement = () => {
    return (
        <div style={{fontSize:"85%"}}>
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

            <nav className="navbar  navbar-light bg-white">
  {/* <a className="navbar-brand" href="/">Sticky top</a> */}
  <a className="navbar-brand" href="/">
    <img src="../csmwhitelogo.png" alt="logo" />
</a>
  <ul className="list-inline">
<li ><i className="fa fa-phone "></i>International: +44 2035192105</li>
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
          className="nav-link active dropdown-toggle"
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
          <a className="dropdown-item active" href="/retirement">
            Retirement Income
          </a>
          
        </div>
      </li>
      
      <li className="nav-item">
        <a className="nav-link" href="/ourteam">
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

            {/*  */}
            <div className="banner dark-translucent-bg pt-20" style={{paddingTop: '40px !important', height: '85vh', backgroundImage: 'url("../../static/redesign/images/slides/retire1.jpg")', backgroundPosition: '50% 32%'}}>
              
              <div className="container">
                <div className="row" style={{display:"flex",justifyContent:"center"}}>
                  <div className="col-md-5 " style={{color:"#ffffff",textAlign:"center"}}>
                    <h2 className="title object-non-visible animated object-visible fadeIn" style={{color:"#ffffff"}} data-animation-effect="fadeIn" data-effect-delay={100}>Invest for your old age today</h2>
                    <div className="separator-2 object-non-visible mt-10 animated object-visible fadeIn" data-animation-effect="fadeIn" data-effect-delay={100}  />
                    <a href="/signup" className="object-non-visible animated object-visible fadeIn btn btn-sm btn-default btn-ocean-green" data-animation-effect="fadeIn" data-effect-delay={100}>Sign up</a>
                  </div>
                </div>
              </div>
            </div>
            <section className="main-container">
              <div className="container">
                <div className="row">
                  {/* main content starts */}
                  <div style={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                  <h2>What is Retirement</h2>
                  <p>
                  Retirement, according to the dictionary, is to “withdraw from one’s position or occupation or from active working life.” You can achieve retirement when you have sources of income that do not have to be earned by working. Retirement and the term “financial independence” are often used interchangeably. Both are achieved when you have enough savings, investment income, and/or pension income to cover your living expenses. Work becomes optional!
                  </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="main-container">
              <div className="container">
                <div className="row">
                  {/* main content starts */}
                  <div style={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                  <h2>Retirement Age</h2>
                  <p>
                  There is not a mandatory retirement age in the United States. Standard retirement age is considered to be 65, but under today’s rules, Social Security defines what they call your full retirement age based on your date of birth, and it is not the same age for everyone. In general, retiring before age 60 would be considered an early retirement
                  </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="main-container">
              <div className="container">
                <div className="row">
                  {/* main content starts */}
                  <div style={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                  <h2>How to Invest your retirement money</h2>
                  <p>
                  As you get closer to retirement you will want to monitor your retirement investments closely. Take time to learn basic investing concepts so you understand how your retirement investments produce income for you later in life and how much income they might produce.
                  </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="main-container">
              <div className="container">
                <div className="row">
                  {/* main content starts */}
                  <div style={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                  <h2>Where CSM Wealth comes in</h2>
                  <p>
                  In CSM Wealth we help you have a very comfortable retirement. When you invest we us we distribute your investment to our traders and brokers who trade round the clock to make sure you make the required profit on your investment.
                  </p>
                  </div>
                </div>
              </div>
            </section>
            <section className = "main-container" style={{textAlign:"center"}}>
              <div style={{display:"block", margin:"30px"}}>
                {/* <div className="row"> */}
                  {/* main content starts */}
                  {/* <div style={{display:"flex",flexDirection:"column", justifyContent:"center"}}> */}
                  <h3 style={{textAlign:"center", textTransform:"uppercase",fontWeight:"400"}}>Our Retirement Investment Package</h3>
                    {/*  */}
                    <div className="col-sm-12 col-md-12 col-xs-12" style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
                    <div className="col-sm-12 col-md-3 col-xs-12">
            <div className= "card text-center">
              <div className = "card header text-light bg-dark" style = {{padding:"15px 0"}}>CSM Compact</div>
              <div className = "card-body" >
                <p className = "font-bold">$50,000</p>
                <p>Investors:<span className = "text-primary">All type</span></p>
                <p>Contract:<span className = "text-primary">1 year</span></p>
                <p>Low Risk Trade</p>
                <p>Est ROI:<span className = "text-primary">15%</span></p>
                {/* <p>Weeekly:<span className = "text-primary">7% - 15%</span></p> */}
                <a href="/signup" className = "btn btn-primary text-light">Sign Up</a>

              </div>
            </div>
            </div>
          </div>
                    {/*  */}
                  </div>
                {/* </div>
              </div> */}
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
<a href="/"><img src="../static/redesign/images/payment-methods/visa-electron.png" alt="visa-electron" title="visa-electron"/></a>
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
<div className="col-md-3 color-offwhite" style={{paddingTop:"2px"}}>
<i className="fa fa-phone pr-10 color-white"></i> Telephone: +44 2035192105
</div>
<div className="col-md-2 color-offwhite" style = {{paddingTop:"2px",display:"flex", flexDirection:"row"}}>
<i className="fa fa-envelope-o pr-10 color-white"></i>support@csmwealth.com
</div>
<div className="col-md-4 color-offwhite">
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
<p className="color-offwhite" style={{fontSize:"11px"}}>
<b>CSM Wealth Ltd. Reg number 07659758</b>
</p>
<p className="color-offwhite" style={{fontSize:"11px"}}>
<a href="https://beta.companieshouse.gov.uk/company/07659758" target="_blank" rel="noopener noreferrer" style={{color:"#22356d"}}>Registered office address</a> <br />
1 Windsor Road, Northam, Bideford, Devon, England, EX39 1EN
</p>
<p className="color-offwhite" style={{fontSize:"11px"}}>
<b>Risk Warning:</b> Contracts for Difference (‘CFDs’) are complex financial products that are traded on margin. Trading CFDs carries a high level of risk since leverage can work both to your advantage and disadvantage.
<br/>
As a result, CFDs may not be suitable for all investors because you may lose all your invested capital. You should not risk more than you are prepared to lose. Before deciding to trade, you need to ensure that you understand the risks involved taking into account your investment objectives and level of experience. All information on this website is not directed toward soliciting citizens or residents of the United States, United Kingdom, Japan or any other jurisdiction that would be contrary to local law or regulation.
<br/>
Past performance of CFDs is not a reliable indicator of future results. Most CFDs have no set maturity date. Hence, a CFD position matures on the date you choose to close an existing open position. Seek independent advice, if necessary. Please read CSM Wealth’s full ‘Risk Disclosure Statement’.
</p>
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

export default Retirement;