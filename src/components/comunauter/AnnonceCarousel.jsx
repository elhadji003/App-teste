import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../../css/animation.css";

import annonce1 from "../../assets/images/eclosioAnnonce.jpg";
import annonce2 from "../../assets/images/auchant.png";

const annonces = [
  {
    id: 1,
    titre: "Recrutement développeur React",
    description:
      "Une startup recherche un développeur junior pour un CDD de 6 mois.",
    type: "Voir plus",
    image: annonce1,
  },
  {
    id: 2,
    titre: "Stage en marketing digital",
    description: "Rejoins une équipe dynamique pour un stage de 3 mois.",
    type: "Voir plus",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    titre: "Formation gratuite en cybersécurité",
    description: "Participez à une formation certifiante 100% financée.",
    type: "Voir plus",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    titre: "Caissière",
    description: "Gerer les factures .....",
    type: "Voir plus",
    image: annonce2,
  },
];

export default function AnnonceCarousel() {
  const [current, setCurrent] = useState(0);
  const length = annonces.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  // ⏱️ Auto-slide toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(interval); // Nettoyage
  }, []);

  if (!Array.isArray(annonces) || length === 0) {
    return null;
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto py-10 h-[400px] overflow-hidden">
      {annonces.map((item, index) => (
        <div
          key={item.id}
          className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100 z-20" : "opacity-0 z-10"
          } bg-cover bg-center rounded-lg`}
          style={{ backgroundImage: `url(${item.image})` }}
        >
          <div className="w-full h-full bg-black bg-opacity-50 rounded-lg flex flex-col items-center justify-center px-6 text-center">
            <h2 className="text-white text-4xl font-bold mb-4 drop-shadow-lg animate__animated animated-fadeInUp">
              {item.titre}
            </h2>
            <p className="text-white text-lg max-w-2xl drop-shadow-md mb-6 animated-fadeInUp">
              {item.description}
            </p>
            <span className="inline-block border border-white bg-opacity-80 text-white px-5 py-2 font-semibold w-fit animated-fadeInUp">
              {item.type}
            </span>
          </div>
        </div>
      ))}

      {/* Boutons navigation - toujours visibles avec z-30 */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-40 hover:bg-opacity-70 text-white p-3 rounded-full transition z-30"
        aria-label="Précédent"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-70 text-white p-3 rounded-full transition z-30"
        aria-label="Suivant"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
