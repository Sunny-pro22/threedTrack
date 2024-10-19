import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Main from "./Man"; 
import "./App.css";

export default function App() {
  return (
    <Router>
      
        
        <Routes>
          {/* Dashboard Route */}
          <Route path="/" element={
            
            <div className="button-container">
              <header className="header">
          <h1>Game Dashboard</h1>
        </header>
              <Link to="/game">
                <button className="start-button">Start Game</button>
              </Link>
              <button className="nav-button">Cars</button>
              <button className="nav-button">LeaderBoard</button>
            </div>
          } />
          
          {/* Main Game Route */}
          <Route path="/game" element={<Main />} />
        </Routes>
     
    </Router>
  );
}
