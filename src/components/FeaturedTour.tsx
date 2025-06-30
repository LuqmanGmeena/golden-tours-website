import React from 'react';
import { MapPin, Users, Clock, Star, MessageCircle } from 'lucide-react';

const FeaturedTour = () => {
  const handleBookNow = () => {
    window.open('https://wa.me/255123456789?text=Hello! I would like to book the Pugu Hills Day Trip.', '_blank');
  };

  const activities = [
    { icon: '🥾', name: 'Hiking', description: 'Scenic trail adventures' },
    { icon: '🛶', name: 'Kayaking', description: 'Peaceful water exploration' },
    { icon: '🐒', name: 'Game Viewing', description: 'Wildlife spotting' },
    { icon: '🎣', name: 'Fishing', description: 'Traditional fishing experience' },
    { icon: '🥤', name: 'Food & Drinks', description: 'Local cuisine & refreshments' },
    { icon: '👨‍🏫', name: 'Expert Guide', description: 'Friendly local expertise' }
  ];

  return (
    <section id="tours" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Featured <span className="text-amber-600">Adventure</span>
          </h2>
          <p className="text-xl text-gray-600">Our most popular day trip experience</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-96 lg:h-full">
                <img
                  src="/hiki1.jpeg"
                  alt="Pugu Hills Adventure"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-amber-500 text-white px-4 py-2 rounded-full font-semibold">
                  ⭐ Most Popular
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-2 mb-4">
                  <MapPin className="text-amber-600" size={20} />
                  <span className="text-amber-600 font-semibold">Pugu Hills, Tanzania</span>
                </div>

                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Pugu Hills Day Trip
                </h3>

                <div className="flex items-center space-x-4 mb-6 text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Clock size={16} />
                    <span>Full Day</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users size={16} />
                    <span>Group Tour</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="text-amber-500" size={16} />
                    <span>4.9/5 Rating</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-8 leading-relaxed">
                  Experience the natural beauty of Pugu Hills with our comprehensive day trip. 
                  Perfect blend of adventure, nature, and relaxation in one unforgettable journey.
                </p>

                {/* Activities Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {activities.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                      <span className="text-2xl">{activity.icon}</span>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">{activity.name}</p>
                        <p className="text-xs text-gray-600">{activity.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Price and Book Button */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold text-amber-600">76,000 TZS</p>
                    <p className="text-gray-600">per person</p>
                  </div>
                  <button
                    onClick={handleBookNow}
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <MessageCircle size={20} />
                    <span>Book Now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTour;