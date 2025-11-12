import {React, useState, useEffect} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Sidebar.css";
import { Home, Search, BookMarked, User, LogOut, Users, PlusCircle, WalletCards } from "lucide-react";

const Sidebar = ({ isAdmin = false }) => {
  const backendUrl = "http://localhost:8000";
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [avatar, setAvatar] = useState(
    userData.profile?.avatar
      ? backendUrl + userData.profile.avatar
      : "/default-profile.png"
  );

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken"); 
    localStorage.removeItem("userData"); 
    navigate("/");
  };

  const userLinks = [
    { path: "/dashboard", icon: Home, label: "Home" },
    { path: "/search", icon: Search, label: "Search" },
    { path: "/savednotes", icon: BookMarked, label: "Saved Notes" },
    { path: "/profile", icon: User, label: "Profile" },
  ];

  const adminLinks = [
    { path: "/admin/users", icon: Users, label: "Manage Users" },
    { path: "/admin/add-data", icon: PlusCircle, label: "Add Data" },
    { path: "/admin/profile", icon: User, label: "Profile" },
    {path:"/admin/knowledgehub", icon: WalletCards, label: "Knowledge-Hub"},
  ];

  const links = isAdmin ? adminLinks : userLinks;

  return (
    <div className="sidebar">
      {/* Logo */}
      <Link
        to={isAdmin ? "/admin/users" : "/dashboard"}
      >
        <img src="/images/logo11.png" alt="IntelliNote Logo" className="sidebar-logo"/>
      </Link>

      {/* Navigation Links */}
      <nav className="sidebar-links">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`sidebar-link ${isActive ? "active" : ""}`}
              title={link.label}
            >
              <span className="sidebar-icon"><Icon /></span>
              <span className="sidebar-tooltip">{link.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Avatar + Logout */}
      <div className="sidebar-footer">
        <div className="sidebar-avatar">
          <img className="avatar-icon" src={avatar}/>
        </div>
        <button className="logout-btn" onClick={handleLogout} title="Logout">
          <LogOut />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
