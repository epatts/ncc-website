import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import About from './components/pages/About/About';
import Error from './components/pages/Error/Error';
import PuppyBios from './components/pages/PuppyBios/PuppyBios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer.js/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/puppies' element={<PuppyBios />} />
        <Route path='*' exact={true} element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;