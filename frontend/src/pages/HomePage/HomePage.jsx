import React from 'react'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import { Link } from 'react-router-dom'
import './HomePage.css'
const HomePage = () => {
  return (
    <div>
      <NavbarComponent/>
      <div className="home-container">
        <div className="hero-section">
            <div className="hero-heading">IntelliNote</div>
            {/* <div className="hero-heading"><img src='/images/logo.png'/></div> */}
            <div className="hero-subtitle">Your intelligent assistant for making, finding, and summarizing notes. All your knowledge, instantly accessible.</div>
            <div className="login-signup">
                <Link to="/auth" className="home-signup" >Sign up for free</Link>
                <Link to="/auth?" className="home-login">Log In</Link>
            </div>
        </div>
        <div className="features-container">
            <div className="feature-box">
                <h2>Find Instantly</h2>
                <p>Powerful search through your notes and the web, with a single query.</p>
            </div>
            <div className="feature-box">
                <h2>Summarize it </h2>
                <p>Get TF-IDF powered summaries that give you the most relevant information first.</p>
            </div>
            <div className="feature-box">
                <h2>Save It</h2>
                <p>Keep your thoughts in order with intuitive categories, tags, and favorites.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
