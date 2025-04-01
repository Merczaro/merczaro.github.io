import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Games from './components/games';
import Store from './components/assests';
import Contact from './components/contact';
import ContactList from './components/contact-list';
import Navbar from './components/nav-bar';
import Footer from './components/footer';
import MacTheMachine from './components/mac-the-machine';
import './App.css';
import './index.css';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow mx-auto p-4 mt-16 mb-16 overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/games" element={<Games />} />
            <Route path="/games/mac-the-machine" element={<MacTheMachine />} />
            <Route path="/store/farming-world" element={<MacTheMachine />} />
            <Route path="/store/17th-century-ship" element={<MacTheMachine />} />
            <Route path="/store" element={<Store />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact-list" element={<ContactList />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
