import React from 'react';
import { Instagram, MessageCircle, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Book Now', action: () => window.open('https://wa.me/255719306070?text=Hello! I would like to book a tour.', '_blank') },
    { name: 'WhatsApp', action: () => window.open('https://wa.me/255747614051', '_blank') },
    { name: 'Terms', action: () => {} }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/golden.png" alt="Golden Tours" className="h-12 w-12" />
              <div>
                <h3 className="text-2xl font-bold text-amber-400">Golden Tours</h3>
                <p className="text-amber-300">& Safaris</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Experience the magic of Tanzania with our expertly guided tours. 
              From wildlife safaris to cultural adventures, we create unforgettable memories.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => window.open('https://instagram.com/golderntours', '_blank')}
                className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram size={20} />
              </button>
              <button
                onClick={() => window.open('https://wa.me/255719306070', '_blank')}
                className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors"
              >
                <MessageCircle size={20} />
              </button>
              <button
                onClick={() => window.open('tel:+255719306070')}
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
              >
                <Phone size={20} />
              </button>
              <button
                onClick={() => window.open('mailto:goldentourbooking@gmail.com')}
                className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors"
              >
                <Mail size={20} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-amber-400">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={link.action}
                    className="text-gray-300 hover:text-amber-400 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-amber-400">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <p>📞 +255 719 306 070</p>
              <p>📧 goldentourbooking@gmail.com</p>
              <p>📍 Dar es Salaam, Tanzania</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {currentYear} Golden Tour & Safaris. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <button
                onClick={() => window.open('https://wa.me/255123456789?text=Hello! I would like to book a tour.', '_blank')}
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                Book Now
              </button>
              <button
                onClick={() => window.open('https://wa.me/255123456789', '_blank')}
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                WhatsApp
              </button>
              <button className="text-gray-400 hover:text-amber-400 transition-colors">
                Terms
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;