import React from 'react';
import { Heart, Users, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            About <span className="text-amber-600">Golden Tours</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            We are a local Tanzanian travel company offering guided safaris, hiking trips, 
            beach tours, and adventure experiences — all with a personal touch.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-amber-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Touch</h3>
              <p className="text-gray-600">Every tour is crafted with care and attention to your unique preferences.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-amber-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Local Expertise</h3>
              <p className="text-gray-600">Born and raised in Tanzania, we know the hidden gems and best experiences.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-amber-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Adventure Awaits</h3>
              <p className="text-gray-600">From wildlife safaris to beach escapes, we offer unforgettable adventures.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;