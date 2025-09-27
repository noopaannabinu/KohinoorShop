import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Banner from './components/Navbar/banner/Banner';
import Fproducts from './components/products/fproducts';
import About from './components/about/about';
import Contact from './components/contact/contact';
import ViewProducts from './components/products/viewproducts';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Fproducts />
              <div id="about">
                <About />
              </div>
              <div id="contact">
                <Contact />
              </div>
            </>
          }
        />
        <Route path="/viewproducts" element={<ViewProducts />} />
      </Routes>
    </Router>
  );
}

export default App;
