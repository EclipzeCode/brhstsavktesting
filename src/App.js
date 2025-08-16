import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import PillNav from './components/ReactBits/PillNav';
import Home from './pages/Home';
import Team from './pages/Team';
import Resources from './pages/Resources';
import About from './pages/About';
import Meetings from './pages/Meetings';
import Tournament from './pages/Tournament';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <PillNav />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/meetings" element={<Meetings />} />
            <Route path="/tournament" element={<Tournament />} />
          </Routes>
        </main>
        <Analytics />
      </div>
    </Router>
  );
}

export default App;
