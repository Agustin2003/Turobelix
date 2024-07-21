'use client';

import { useState } from 'react';
import Image from 'next/image';

const ciudadesHome = [
  {
    city: 'Paris',
    src: 'https://cdn.pixabay.com/photo/2020/06/16/20/10/paris-5307087_1280.jpg',
    alt: 'Paris',
    description: 'Last Day is March 13! Up to 50% Discount on Early Booking',
  },
  {
    city: 'Punta Cana',
    src: 'https://www.kayak.com.ar/rimg/himg/57/99/04/leonardo-102264-157610861-209847.jpg?width=1366&height=768&crop=true',
    alt: 'Punta Cana',
    description: 'Last Day is March 13! Extra $200 on Winter Tours coupon gift',
  },
  {
    city: 'Cancún',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBo4ge8UlRXkZ2B6soud7TZAOEBx3whaAGRQ&s',
    alt: 'Cancún',
    description: 'Last Day is March 13! In Hotels Near Cities A Short Break!',
  },
  {
    city: 'La Habana',
    src: 'https://content.r9cdn.net/rimg/dimg/a3/1d/05f2b4a1-city-11020-1700c4dba73.jpg?crop=true&width=1020&height=498',
    alt: 'La Habana',
    description: 'Last Day is March 13! Discover Iceland Kayaking Tours',
  },
  {
    city: 'Miami',
    src: 'https://embed-ssl.wistia.com/deliveries/e3be2eebba0b6c8a9c190c5f617e7236.webp?image_crop_resized=1280x720',
    alt: 'Miami',
    description: 'Last Day is March 13! Up to 50% Discount on Early Booking',
  },
  {
    city: 'Nueva York, USA',
    src: 'https://cdn.pixabay.com/photo/2016/11/29/06/18/architecture-1867726_1280.jpg',
    alt: 'Nueva York',
    description: 'Last Day is March 13! Extra $200 on Winter Tours coupon gift',
  },
  {
    city: 'Rio de Janeiro, Brazil',
    src: 'https://cdn.pixabay.com/photo/2015/04/20/13/25/city-731396_1280.jpg',
    alt: 'Rio de Janeiro',
    description: 'Last Day is March 13! In Hotels Near Cities A Short Break!',
  },
  {
    city: 'Madrid, Spain',
    src: 'https://cdn.pixabay.com/photo/2016/11/29/05/19/madrid-1867692_1280.jpg',
    alt: 'Madrid',
    description: 'Last Day is March 13! Discover Iceland Kayaking Tours',
  },
  {
    city: 'Barcelona, Spain',
    src: 'https://cdn.pixabay.com/photo/2016/11/29/09/32/barcelona-1868202_1280.jpg',
    alt: 'Barcelona',
    description: 'Last Day is March 13! Up to 50% Discount on Early Booking',
  },
  {
    city: 'Londres, UK',
    src: 'https://cdn.pixabay.com/photo/2016/11/18/15/51/big-ben-1839526_1280.jpg',
    alt: 'Londres',
    description: 'Last Day is March 13! Extra $200 on Winter Tours coupon gift',
  },
];

const CiudadesHome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < 7) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };

  const displayedCities = ciudadesHome.slice(currentIndex, currentIndex + 3);

  return (
    <div className="relative flex justify-center items-center mt-5">
      <button
        onClick={handlePrev}
        className={`absolute left-0 z-10 p-2 border-2 border-gray-300 rounded-full ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'bg-gray-300 text-white'}`}
        disabled={currentIndex === 0}
      >
        &lt;
      </button>
      <div className="flex justify-around items-center w-full transition-transform duration-500 transform">
        {displayedCities.map((offer, index) => (
          <div key={index} className="flex items-center mx-2">
            <div className="relative w-24 h-24 rounded-full overflow-hidden mb-2">
              <Image
                src={offer.src}
                alt={offer.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <div className="text-left ml-4">
              <p className="text-orange-500 text-sm leading-tight max-w-xs line-clamp-2">
                {offer.description}
              </p>
              <p className="text-lg font-bold">{offer.city}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleNext}
        className={`absolute right-0 z-10 p-2 border-2 border-gray-300 rounded-full ${currentIndex >= ciudadesHome.length - 3 ? 'opacity-50 cursor-not-allowed' : 'bg-gray-300 text-white'}`}
        disabled={currentIndex >= ciudadesHome.length - 3}
      >
        &gt;
      </button>
    </div>
  );
};

export default CiudadesHome;
