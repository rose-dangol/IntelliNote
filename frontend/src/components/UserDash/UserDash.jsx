import React from "react";
import { LayoutDashboard, SearchCode, NotebookTabs, ContactRound } from 'lucide-react';
import './UserDash.css'
import { Link } from "react-router-dom";
const UserDash = () => {
    const handleLogout=()=>{
      localStorage.removeItem('authToken')
    }
  return (
    <div className="userDash">
      <div className="top">
        <div className="logo"><img src="/images/logo11.png"/>
        <hr style={{width:"100%", position:"fixed", left:"0", height:"2px",backgroundColor:"#ED5F72"}}/></div>
        <div className="center">
            <div className="dash-links">
                <div className="icon"><Link className="Link" to={'/userDashboard'}><LayoutDashboard/></Link></div>
            </div>
            <div className="dash-links">
                <div className="icon"><SearchCode/></div>
            </div>
            <div className="dash-links">
                <div className="icon"><NotebookTabs/></div>
            </div>
            <div className="dash-links">
                <div className="icon"><ContactRound/></div>
            </div>
        </div>
      </div>
      <div className="bottom">
        <div className="user-avatar"><img src="/images/pfp.jpg" className="userpic"/></div>
        <div className="username-logout">
            <span className="username">Rose</span>
            <span className="logout-btn" onClick={handleLogout}>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default UserDash;
