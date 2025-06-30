import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Instagram } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="text-amber-600" size={24} />,
      title: 'Phone & WhatsApp',
      info: '+255 719 306 070',
      action: () => window.open('tel:+255719306070')
    },
    {
      icon: <Mail className="text-amber-600" size={24} />,
      title: 'Email',
      info: 'goldentourbooking@gmail.com',
      action: () => window.open('mailto:goldentourbooking@gmail.com')
    },
    {
      icon: <MapPin className="text-amber-600" size={24} />,
      title: 'Location',
      info: 'Dar es Salaam, Tanzania',
      action: () => {}
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Get In <span className="text-amber-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-600">Ready to start your Tanzanian adventure?</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div
                    key={index}
                    onClick={contact.action}
                    className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
                  >
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                      {contact.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{contact.title}</p>
                      <p className="text-gray-600">{contact.info}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-white rounded-xl shadow-md">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Follow Our Adventures</h4>
                <button
                  onClick={() => window.open('https://instagram.com/golderntours', '_blank')}
                  className="inline-flex items-center space-x-2 text-pink-600 hover:text-pink-700 transition-colors"
                >
                  <Instagram size={20} />
                  <span>@golderntours</span>
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Quick Actions</h3>
              <div className="space-y-4">
                <button
                  onClick={() => window.open('https://wa.me/255719306070?text=Hello! I would like to book a tour with Golden Tours & Safaris.', '_blank')}
                  className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <MessageCircle size={24} />
                  <span>Book Now on WhatsApp</span>
                </button>

                <button
                  onClick={() => window.open('mailto:goldentourbooking@gmail.com?subject=Tour Inquiry', '_blank')}
                  className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white p-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Mail size={24} />
                  <span>Send Email Inquiry</span>
                </button>

                <button
                  onClick={() => window.open('tel:+255719306070')}
                  className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Phone size={24} />
                  <span>Call Us Now</span>
                </button>
              </div>

              <div className="mt-8 p-6 bg-white rounded-xl shadow-md">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Why Choose Us?</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <span className="text-amber-600">✓</span>
                    <span>Local Tanzanian expertise</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-amber-600">✓</span>
                    <span>Personalized tour experiences</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-amber-600">✓</span>
                    <span>Competitive pricing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-amber-600">✓</span>
                    <span>24/7 customer support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;