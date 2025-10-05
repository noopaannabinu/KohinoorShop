import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './components/about/about';
import AboutUs from './components/aboutus';
import ViewProducts from './components/products/viewproducts';
import Banner from './components/Navbar/banner/Banner';
import Fproducts from './components/products/fproducts';
import Contact from './components/contact/contact';
import ScrollToTop from './components/ScrollToTop';  // ✅ import

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />  {/* ✅ Add this */}
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
        <Route path="/aboutus" element={<AboutUs />} /> 
        <Route path="/contact" element={<Contact />} /> {/* AboutUs route */}
      </Routes>
    </Router>
  );
}

export default App;
