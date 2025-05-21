import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../../css/animation.css";

import annonce1 from "../../assets/images/eclosioAnnonce.jpg";
import annonce2 from "../../assets/images/gettaz.png";
import annonce3 from "../../assets/images/adapdme.png";
import annonce4 from "../../assets/images/adapte.png";

const annonces = [
  {
    id: 1,
    titre: "Agent de culture maraîchère",
    description:
      "Recherchons un agent passionné pour travail sur culture bio en plein champ.",
    type: "Postuler",
    image: annonce1,
  },
  {
    id: 2,
    titre: "Technicien en agroalimentaire",
    description:
      "Stage de 6 mois dans une coopérative de transformation bio locale.",
    type: "Voir plus",
    image: annonce2,
  },
  {
    id: 3,
    titre: "Conseiller agricole",
    description:
      "Accompagnez les agriculteurs dans la transition vers des pratiques durables.",
    type: "Postuler",
    image: annonce3,
  },
  {
    id: 4,
    titre: "Formation permaculture",
    description:
      "Apprenez les techniques de permaculture lors d'une formation intensive.",
    type: "S'inscrire",
    image: annonce4,
  },
];

export default function OffreVertAgro() {
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
      <h2 className="bg-green-800 text-green-100 w-fit px-6 py-2 rounded-md my-4 mx-auto uppercase font-extrabold tracking-wide shadow-md">
        Offres Vertes Agriculture & Agroalimentaire
      </h2>

      <div className="relative max-w-4xl sm:max-w-2xl max-sm:max-w-[340px] mx-auto max-sm:mx-0 py-6 sm:py-8 h-[400px] sm:h-[340px] max-sm:h-[300px] overflow-hidden rounded-xl shadow-xl border-2 border-green-300">
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
            <div className="absolute inset-0 bg-green-900 bg-opacity-40 rounded-xl flex flex-col items-center justify-center px-8 text-center backdrop-blur-sm">
              <h2 className="text-green-100 text-3xl sm:text-2xl max-sm:text-xl font-bold mb-3 drop-shadow-lg animate-fadeInUp">
                {item.titre}
              </h2>
              <p className="text-green-200 text-base max-sm:text-sm max-w-xl mb-6 drop-shadow-md animate-fadeInUp">
                {item.description}
              </p>
              <button className="border border-green-300 bg-green-700 bg-opacity-80 text-green-100 px-6 py-2 text-sm font-semibold rounded-lg hover:bg-green-600 hover:border-green-400 transition animate-fadeInUp">
                {item.type}
              </button>
            </div>
          </div>
        ))}

        {/* Flèches navigation */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-green-200 text-3xl bg-green-800 bg-opacity-60 p-3 rounded-full hover:bg-opacity-90 z-30 transition"
          aria-label="Slide précédente"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-green-200 text-3xl bg-green-800 bg-opacity-60 p-3 rounded-full hover:bg-opacity-90 z-30 transition"
          aria-label="Slide suivante"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
