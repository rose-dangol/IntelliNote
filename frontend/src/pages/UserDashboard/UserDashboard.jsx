import React, { useEffect, useState } from "react";
import "./UserDashboard.css";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import UserDash from "../../components/UserDash/UserDash";
import Sidebar from "../../components/Sidebar/Sidebar";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import { NotebookPen, SearchCode, BadgePlus } from 'lucide-react';
import NoteCard from "../../components/NoteCard/NoteCard";
import { getUser } from "../../services/Auth";

const UserDashboard = () => {
  const token = localStorage.getItem("authToken")
  const activeUser=localStorage.getItem('username')

  const user = {
    // name: "Rose Dangol",
    stats: {
      notes: 24,
      searches: 56,
      created: "2024-11-15",
    },
  };

  const notes = [
    {
      id: 1,
      title: "Understanding Python Tuples",
      snippet: "Tuples are immutable sequences in Python...",
      lastModified: "2025-10-20",
    },
    {
      id: 2,
      title: "React State vs Props",
      snippet: "State and props are core concepts in React that...",
      lastModified: "2025-10-18",
    },
    {
      id: 3,
      title: "CSS Grid Basics",
      snippet: "CSS Grid is a layout system for building two-dimensional...",
      lastModified: "2025-10-15",
    },
    {
      id: 4,
      title: "Django Model Relationships",
      snippet: "Django supports OneToOne, ForeignKey, and ManyToMany...",
      lastModified: "2025-10-12",
    },
    {
      id: 5,
      title: "Async/Await in JavaScript",
      snippet: "Async/await makes asynchronous code easier to read...",
      lastModified: "2025-10-10",
    },
    {
      id: 6,
      title: "Git Branching Simplified",
      snippet: "Branches in Git allow you to develop features independently...",
      lastModified: "2025-10-05",
    },
  ];

  const setPage = (page) => {
    alert(`Navigating to ${page} page...`);
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-center">
        <SearchComponent/>
        <div className="dashboard-titles">
          <h2 className="dashboard-heading">
            Welcome back, <span className="heading-username">{activeUser}</span>
          </h2>
          <p className="dashboard-subtext">What will you discover today?</p>
        </div>
        {/* <div className="search-bar-container">
          <input
            type="search"
            placeholder="🔍    Search anything...."
            className="search-input"
            onKeyDown={(e) => e.key === "Enter" && setPage("search")}
          />
          <span className="search-icon">🔍</span>
        </div> */}

        <div className="stats-grid">
          <div className="card">
            <div className="card-detail">
              <h4 className="card-title">Saved Notes</h4>
              <p className="card-value">{user.stats.notes}</p>
            </div>
            <div className="card-icon">
              <NotebookPen size={45} color="#fff"/>
            </div>
          </div>
          <div className="card">
            <div className="card-detail">
              <h4 className="card-title">Recent Searches</h4>
              <p className="card-value">{user.stats.searches}</p>
            </div>
            <div className="card-icon">
              <SearchCode size={45} color="#fff"/>
            </div>
          </div>
          <div className="card">
            <div className="card-detail">
              <h4 className="card-title">Joined On</h4>
              <p className="card-value">{user.stats.created}</p>
            </div>
            <div className="card-icon">
              <BadgePlus size={45} color="#fff"/>
            </div>
          </div>
        </div>
        <div className="recent-notes">
          <div className="title-all">
            <h3 className="recent-heading">Recent Notes</h3>
            <div className="view-all"><button className="view-all-btn" onClick={() => setPage("notes-list")}>View All Notes →</button>
            </div>
          </div>
          <div className="notes-grid">
            {notes.slice(0, 6).map((note) => (
              <div
                key={note.id}
                className="note-card"
                onClick={() => setPage("note-view")}
              >
                <h4 className="note-title">{note.title}</h4>
                <p className="note-snippet">{note.snippet}</p>
                <p className="note-date">{note.lastModified}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
