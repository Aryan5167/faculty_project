import React from 'react'
import { Link } from 'react-router-dom';
// import './Home.css'
const Home = () => {
  return (
    <div className="App">
      <h1>Welcome to Your University</h1>
      <div className="login-options">
        <div className="login-card">
        <h2>Faculty Login</h2>
        
          <Link to="/loginF">
          <button>Login</button>
          </Link>
          
        </div>
        <div className="login-card">
        <h2>Student Login</h2>
         
          <Link to="/loginU">
          <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home;
