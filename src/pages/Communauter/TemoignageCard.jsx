import React, { useEffect, useState } from "react";

const temoignages = [
  {
    nom: "Sakura",
    poste: "Développeuse web junior",
    texte: "Grâce à Sama Avenir, j'ai trouvé un stage en moins d’un mois.",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    nom: "John Doe",
    poste: "Étudiant en marketing",
    texte:
      "La plateforme m’a permis de participer à une formation certifiante.",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    nom: "Awa Ba",
    poste: "Graphiste freelance",
    texte: "J'ai trouvé une mission freelance rapidement grâce aux annonces.",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    nom: "Cheikh Sarr",
    poste: "Technicien réseaux",
    texte: "Un outil très utile pour les reconversions professionnelles.",
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

export default function CarouselTemoignages() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prevIndex) =>
          prevIndex + 2 >= temoignages.length ? 0 : prevIndex + 2
        );
        setFade(true);
      }, 400); // temps pour fade-out
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const temoinsAffiches = temoignages.slice(index, index + 2);

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
        Témoignages
      </h2>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {temoinsAffiches.map((t, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4"
          >
            <img
              src={t.photo}
              alt={t.nom}
              className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
            />
            <div>
              <p className="text-gray-600 italic">“{t.texte}”</p>
              <h4 className="text-blue-900 font-semibold mt-2">{t.nom}</h4>
              <span className="text-sm text-gray-500">{t.poste}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
