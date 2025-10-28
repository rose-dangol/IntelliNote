import React from "react";
import "./LandingPage.css";
import DotGrid from "../../components/DotGrid/DotGrid";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landingPage-container">
     <div className="landingPage-content">
        <span className="landingPage-heading">IntelliNote</span>
        <span className="landingPage-subtext">Your intelligent assistant for making, finding, and summarizing notes. All your knowledge, instantly accessible.</span>
          <div className="login-signup">
            {/* <Link to="/auth" className="signup-home" >Sign up for free</Link> */}
            <Link to="/auth?" className="login-home">Log In</Link>
          </div>
    </div>

    {/* <div className="landingPage-leftBar"></div>
    <div className="landingPage-container">
    
      {/* <div className="landingPage-rightBar"></div> */}
    {/* </div> */}
    </div>
  );
};

export default LandingPage;
