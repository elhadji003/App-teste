import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  {
    id: 1,
    image: "https://cdn.flyonui.com/fy-assets/components/carousel/image-22.png",
    annoce: "Formation gratuite en gestion de projet ce week-end !",
  },
  {
    id: 2,
    image: "https://cdn.flyonui.com/fy-assets/components/carousel/image-15.png",
    annoce: "Nouvelle annonce : Travailleur demandé pour chantier à Dakar.",
  },
  {
    id: 3,
    image: "https://cdn.flyonui.com/fy-assets/components/carousel/image-16.png",
    annoce: "Postulez dès maintenant pour des missions temporaires à Thiès.",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-2xl overflow-hidden rounded-lg shadow-lg">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        <div className="flex w-full">
          {images.map((img, index) => (
            <div className="w-full flex-shrink-0" key={index}>
              <img
                key={index}
                src={img.image}
                alt={`Slide ${index + 1}`}
                className="w-full object-cover max-sm:h-48"
              />
              <div className="absolute w-full bottom-0 bg-gray-800 bg-opacity-50 text-center text-white p-4">
                <h2 className="text-lg font-semibold">{img.annoce}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
      >
        <FaChevronLeft className="w-6 h-6 max-sm:w-2 max-sm:h-2" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
      >
        <FaChevronRight className="w-6 h-6 max-sm:w-2 max-sm:h-2" />
      </button>
    </div>
  );
};

export default Carousel;
