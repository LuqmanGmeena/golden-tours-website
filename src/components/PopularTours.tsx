import React from 'react';
import { MapPin, Clock, Users } from 'lucide-react';

const PopularTours = () => {
  const tours = [
    {
      title: 'Bagamoyo Beach Trip',
      description: 'Relax on pristine beaches and explore historic coastal town with rich cultural heritage.',
      image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      duration: '2 Days',
      groupSize: '4-12 people',
      location: 'Bagamoyo Coast'
    },
    {
      title: 'Mikumi National Park Safari',
      description: 'Witness incredible wildlife including elephants, lions, and zebras in their natural habitat.',
      image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      duration: '3 Days',
      groupSize: '2-8 people',
      location: 'Mikumi National Park'
    },
    {
      title: 'Camping Adventures',
      description: 'Sleep under the stars and experience authentic Tanzanian wilderness camping.',
      image: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      duration: '2-5 Days',
      groupSize: '4-10 people',
      location: 'Various Locations'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Other Popular <span className="text-amber-600">Tours</span>
          </h2>
          <p className="text-xl text-gray-600">Discover more amazing adventures across Tanzania</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tours.map((tour, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{tour.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{tour.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <MapPin size={16} className="text-amber-600" />
                    <span>{tour.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock size={16} className="text-amber-600" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Users size={16} className="text-amber-600" />
                    <span>{tour.groupSize}</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTours;