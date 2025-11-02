import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import { BrainCircuit } from "lucide-react";
import DotGrid from "../../components/DotGrid/DotGrid";
// import DotGrid from "../../components/DotGrid/DotGrid";

const LandingPage = () => {
  return (
    <div style={{ height: "100vh" }}>
      <DotGrid
        dotSize={4}
        gap={12}
        baseColor="#2a2631"
        activeColor="#a09daf"
        proximity={70}
        shockRadius={50}
        shockStrength={1}
        resistance={100}
        returnDuration={1.5}
      />

      <div className="landingPage-container">
      <div className="landingPage-content blur-effect">
        <span className="landingPage-heading "> <BrainCircuit style={{height: "60", width:"60"}}/>IntelliNote</span>
        <span className="landingPage-subtext">Your intelligent assistant for making, finding, and summarizing notes. All your knowledge, instantly accessible.</span>
        <div className="login-signup">
        
            <Link to="/auth?" className="login-home">Log In</Link>
          </div>
    </div>
      </div>
    </div>
  );
};

export default LandingPage;
