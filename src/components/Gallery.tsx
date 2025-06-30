import React from 'react';

const Gallery = () => {
  const images = [
    {
      src: '/3.jpeg',
      alt: 'Safari Wildlife'
    },
    {
      src: '/hiki1.jpeg',
      alt: 'Hiking Adventure'
    },
    {
      src: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      alt: 'Beach Paradise'
    },
    {
      src: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      alt: 'Camping Under Stars'
    },
    {
      src: '/hiking.jpeg',
      alt: 'Mountain Views'
    },
    {
      src: 'iii1.jpeg',
      alt: 'Cultural Experience'
    },
    {
      src: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      alt: 'Wildlife Photography'
    },
    {
      src: '/hk1.jpeg',
      alt: 'Adventure Group'
    },
    {
      src: 'https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      alt: 'Sunset Safari'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Adventure <span className="text-amber-600">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600">Memories from our incredible tours</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => window.open('https://instagram.com/golderntours', '_blank')}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <span>📸</span>
            <span>Follow @golderntours on Instagram</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;