import Image from 'next/image';

const ciudadesHome = [
  {
    city: 'Paris, France',
    src: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/506000/506662-eiffel-tower.jpg',
    alt: 'Paris',
  },
  { city: 'Iceland', src: '/path/to/iceland-image.jpg', alt: 'Iceland' },
  { city: 'Rome, Italy', src: '/path/to/rome-image.jpg', alt: 'Rome' },
  {
    city: 'Bangkok, Thailand',
    src: '/path/to/bangkok-image.jpg',
    alt: 'Bangkok',
  },
];

const CiudadesHome = () => {
  return (
    <div className="special-offers">
      {ciudadesHome.map((offer, index) => (
        <div key={index} className="offer">
          <div className="offer-image">
            <Image
              src={offer.src}
              alt={offer.alt}
              layout="fill"
              objectFit="cover" // Ensures the image covers the container
              className="rounded-full"
            />
          </div>
          <p>{offer.city}</p>
        </div>
      ))}
    </div>
  );
};

export default CiudadesHome;
