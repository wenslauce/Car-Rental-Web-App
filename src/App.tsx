import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandGrid } from './components/BrandGrid';
import { BodyTypeGrid } from './components/BodyTypeGrid';
import { FeaturedCars } from './components/FeaturedCars';
import { HowItWorks } from './components/HowItWorks';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <BrandGrid />
                <BodyTypeGrid />
                <FeaturedCars />
                <HowItWorks />
              </>
            } />
            {/* Additional routes will be added as we develop more features */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;