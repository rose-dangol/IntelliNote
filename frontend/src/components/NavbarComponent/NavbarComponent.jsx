import {React, useState, useEffect} from "react";
import './NavbarComponent.css'
import { Link } from "react-router-dom";
import { CurrentDateTime } from "../CurrentDateTime";

const NavbarComponent = () => {

  const currentDateTime = CurrentDateTime();
const formattedDate = currentDateTime.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const formattedTime = currentDateTime.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second:'numeric',
    hour12: true,
  });
  return (
    <div className="Navbar-container">
      <div className="IntelliNote-Logo">
        <Link to={'/'}><img src="images/logo.png" /></Link>
      </div>
      <div className="Navbar-center">
        <div className="animatedText">Search It. Save It.</div>
      </div>
              <div className="naavbar-dateTime">
          <span className="date">{formattedDate}</span>
          <span className="time">{formattedTime}</span>
        </div>
    </div>
  );
};

export default NavbarComponent;


 {/*
        <div className="navbar-option">
           <LayoutDashboard /><Link to={'/userDashboard'} style={{textDecoration:"none"}}>Dashboard</Link></div>
         <div className="navbar-option">Search</div>
        <div className="navbar-option">MyNotes</div> 
        */}