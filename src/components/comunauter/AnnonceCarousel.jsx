import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import annonce1 from "../../assets/images/eclosioAnnonce.jpg";
import annonce2 from "../../assets/images/auchant.png";
import annonce3 from "../../assets/images/marie.jpg";
import annonce4 from "../../assets/images/andicap.png";

const annonces = [
  {
    id: 1,
    titre: "Eclosio : Formation gratuite en agriculture durable",
    description:
      "Participez à une formation certifiante 100% financée pour développer vos compétences en agroécologie.",
    type: "Voir plus",
    image: annonce1,
  },
  {
    id: 2,
    titre: "Auchan : Opportunités de stages en gestion agricole",
    description:
      "Rejoignez une équipe engagée dans l’agriculture responsable pour un stage de 3 mois.",
    type: "Voir plus",
    image: annonce2,
  },
  {
    id: 3,
    titre: "Marie : Projets innovants en agroalimentaire",
    description:
      "Découvrez des solutions durables pour une production alimentaire respectueuse de l’environnement.",
    type: "Voir plus",
    image: annonce3,
  },
  {
    id: 4,
    titre:
      "Andicap : Programme d’insertion pour personnes en situation de handicap",
    description:
      "Un accompagnement personnalisé et des opportunités d’emploi dans le secteur agricole, adaptés et inclusifs.",
    type: "Voir plus",
    image: annonce4,
  },
];

export default function AnnonceCarouselVert() {
  const [current, setCurrent] = useState(0);
  const length = annonces.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  if (!Array.isArray(annonces) || length === 0) return null;

  return (
    <div className="w-full px-4">
      <h2 className="bg-gray-800 text-white w-fit px-6 py-2 rounded-md my-4 mx-auto uppercase font-extrabold tracking-wide shadow-md">
        Annonces Vertes
      </h2>
      <div className="relative max-w-4xl sm:max-w-full max-sm:max-w-[340px] mx-auto py-6 sm:py-8 h-[400px] sm:h-[340px] max-sm:h-[300px] overflow-hidden rounded-xl shadow-xl">
        {annonces.map((item, index) => (
          <div
            key={item.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100 z-20" : "opacity-0 z-10"
            } rounded-xl overflow-hidden`}
          >
            <img
              src={item.image}
              alt={item.titre}
              className="w-full h-full object-cover brightness-90"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 rounded-xl flex flex-col items-center justify-center px-8 text-center backdrop-blur-sm">
              <h2 className="text-white text-3xl sm:text-2xl max-sm:text-xl font-bold mb-3 drop-shadow-lg">
                {item.titre}
              </h2>
              <p className="text-white text-base max-sm:text-sm max-w-xl mb-6 drop-shadow-md">
                {item.description}
              </p>
              <button className="bg-black bg-opacity-80 text-white px-6 py-2 text-sm font-semibold rounded-lg hover:bg-green-600 hover:border-green-400 transition">
                {item.type}
              </button>
            </div>
          </div>
        ))}

        {/* Flèches navigation */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-60 p-3 rounded-full hover:bg-opacity-90 z-30 transition"
          aria-label="Slide précédente"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-60 p-3 rounded-full hover:bg-opacity-90 z-30 transition"
          aria-label="Slide suivante"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
