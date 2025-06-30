import React from 'react';
import { MessageCircle } from 'lucide-react';

const Hero = () => {
  const handleBookNow = () => {
    window.open('https://wa.me/255123456789?text=Hello! I would like to book a tour with Golden Tours & Safaris.', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Tanzania Safari Landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Travel Tanzania with
          <span className="block text-amber-400">Golden Tour & Safaris</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light">
          Group Tours | Pugu Hills | Wildlife | Beach | Hiking
        </p>

        <button
          onClick={handleBookNow}
          className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <MessageCircle size={24} />
          <span>Book Now on WhatsApp</span>
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;