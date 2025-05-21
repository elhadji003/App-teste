import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import { motion, AnimatePresence } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../../assets/images/a1.jpg";
import image2 from "../../assets/images/a2.jpg";
import image3 from "../../assets/images/a3.jpg";

function CarouselAccueil() {
  const messages = [
    "Bienvenue sur notre plateforme professionnelle",
    "Collaborez avec des entreprises innovantes",
    "Découvrez des opportunités uniques et ciblées",
    "Postulez rapidement et faites évoluer votre carrière",
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [messages.length]);

  // Variants pour animation du texte
  const textVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <div className="relative h-96 max-sm:h-full">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        className="rounded-lg shadow-lg overflow-hidden h-96 object-center max-sm:h-full max-sm:shadow-none"
      >
        {/* Slides */}
        <div className="relative h-full w-full">
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
          <img
            src={image1}
            alt="Slide 1"
            className="opacity-70 object-cover h-full w-full object-center relative bottom-40 max-sm:bottom-0"
          />
        </div>
        <div className="relative h-full w-full">
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
          <img
            src={image2}
            alt="Slide 2"
            className="opacity-70 object-cover h-full w-full object-center relative bottom-40 max-sm:bottom-0"
          />
        </div>
        <div className="relative h-full w-full">
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
          <img
            src={image3}
            alt="Slide 3"
            className="opacity-70 object-cover h-full w-full object-center relative bottom-40 max-sm:bottom-0"
          />
        </div>
      </Carousel>

      {/* Texte centré animé avec framer-motion */}
      <div className="absolute top-1/2 left-1/2 z-30 transform -translate-x-1/2 -translate-y-1/2">
        <AnimatePresence mode="wait">
          <motion.p
            key={currentMessageIndex}
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6 }}
            className="text-white text-2xl font-bold px-6 py-3 rounded border border-white max-sm:text-nowrap max-sm:text-[10px]"
          >
            {messages[currentMessageIndex]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default CarouselAccueil;
