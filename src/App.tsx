import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedTour from './components/FeaturedTour';
import PopularTours from './components/PopularTours';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <FeaturedTour />
      <PopularTours />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;