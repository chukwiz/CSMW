import React from 'react';
import {Route, Switch,Redirect} from 'react-router-dom';

import Layout from './components/Layout/Layout';

import Home from './Home/views/Home/Home';
import Services from './Home/views/Services/Services';
import StructuredFinance from './Home/views/StructuredFinance/StructuredFinance';
import WealthManagement from './Home/views/WealthManagement/WealthManagement';
import PortfolioManagement from './Home/views/PortfolioManagement/PortfolioManagement';
import ConsultingServices from './Home/views/ConsultingServices/ConsultingServices';
import FinancialServices from './Home/views/FinancialServices/FinancialServices';
import MutualFunds from './Home/views/MutualFunds/MutualFunds';
import OurPhilosophy from './Home/views/OurPhilosophy/OurPhilosophy';
import InvestmentApproach from './Home/views/InvestmentApproach/InvestmentApproach';
import InvestmentProcess from './Home/views/InvestmentProcess/InvestmentProcess';
// import MutualFunds from './Home/views/MutualFunds/MutualFunds';
import TradingTools from './Home/views/TradingTools/TradingTools'; 
import AboutUs from './Home/views/About/About'; 
import ContactUs from './Home/views/ContactUs/ContactUs'; 
import Faq from './Home/views/Faq/Faq'; 
import Forex from './Home/views/Forex/Forex'; 
import Register from './Home/views/SignUp/SignUp'; 
import Testimony from './Home/views/Testimony/Testimony'; 
import Vision from './Home/views/Vision/Vision';
import Crypto from './Home/views/Crypto/Crypto';
import Nfp from './Home/views/Nfp/Nfp'; 
import Retirement from './Home/views/Retirement/Retirement';
import Login from './Home/views/SignIn/SignIn';
import Team from './Home/views/Team/Team';

function App() {
  return (
    <div>
      <Switch>
        <Route path = "/" exact component= {Home} />
        <Route path = "/login" exact component= {Login} />
        <Route path = "/cryptocurrency" exact component = {Crypto} />
        <Route path = "/tradingtools" exact component = {TradingTools} />
        <Route path = "/aboutus" exact component = {AboutUs} />
        <Route path = "/contact-us" exact component = {ContactUs} />
        <Route path = "/faq" exact component = {Faq} />
        <Route path = "/forex" exact component = {Forex} />
        <Route path = "/wealth-management" exact component = {WealthManagement} />
        <Route path = "/portfolio-management" exact component = {PortfolioManagement} />
        <Route path = "/consulting-services" exact component = {ConsultingServices} />
        <Route path = "/financial-services" exact component = {FinancialServices} />
        <Route path = "/our-philosophy" exact component = {OurPhilosophy} />
        <Route path = "/investment-process" exact component = {InvestmentProcess} />
        <Route path = "/investment-approach" exact component = {InvestmentApproach} />
        <Route path = "/mutual-funds" exact component = {MutualFunds} />
        <Route path = "/services" exact component = {Services} />
        <Route path = "/structured-finance" exact component = {StructuredFinance} />
        <Route path = "/register" exact render={(props) => <Register {...props} />} />
        {/* <Route path = "/signup" exact component = {SignUp} /> */}
        <Route path = "/testimonials" exact component = {Testimony} />
        <Route path = "/our-vision" exact component = {Vision} />
        <Route path = "/trade-nfp" exact component = {Nfp} />
        <Route path = "/retirement-income" exact component = {Retirement} />
        <Route path = "/ourteam" exact component = {Team} />
        <Route path = "/dashboard" children={props => <Layout {...props}/>}/>
      </Switch>
    </div>
  );
}

export default App;