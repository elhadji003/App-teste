import React from "react";
import { Link } from "react-router-dom";

export const offres = [
  {
    id: 1,
    titre: "Formation en Développement Web",
    organisme: "Bakeli",
    description:
      "Apprenez à créer des sites web modernes avec HTML, CSS, JavaScript et React.",
    lieu: "Dakar / En ligne",
    date: "Du 10 Juin au 10 Juillet 2025",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?fit=crop&w=800&q=80",
    path: "http://localhost:5173/",
  },
  {
    id: 2,
    titre: "Formation sur l'horticulture",
    organisme: "Eclosio",
    description:
      "Initiez-vous aux techniques de culture de plantes, légumes et fleurs.",
    lieu: "En ligne",
    date: "Du 15 Juin au 30 Juillet 2025",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?fit=crop&w=800&q=80",
    path: "https://www.eclosio.ong/news/",
  },
  {
    id: 3,
    titre: "Formation en Cybersécurité",
    organisme: "GoMyCode",
    description:
      "Maîtrisez les bases de la cybersécurité pour protéger les systèmes informatiques.",
    lieu: "Présentiel - Dakar",
    date: "À partir du 1er Juillet 2025",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?fit=crop&w=800&q=80",
    path: "http://localhost:5173/",
  },
];

export default function Formations() {
  return (
    <div className="p-6 max-sm:p-4">
      <h1 className="text-2xl font-bold text-center mb-6">
        Offres de Formations Disponibles
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offres.map((formation) => (
          <div
            key={formation.id}
            className="bg-white shadow rounded-lg border border-gray-200 overflow-hidden group"
          >
            <div className="relative w-full h-40 overflow-hidden">
              <img
                src={formation.image}
                alt={formation.titre}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300 ease-in-out"
              />
              {formation.path !== "#" && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <Link
                    to={formation.path}
                    target="_blank"
                    className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 text-sm font-semibold"
                  >
                    Visiter
                  </Link>
                </div>
              )}
            </div>

            <div className="p-4">
              <h2 className="text-lg font-semibold text-green-700 mb-1">
                {formation.titre}
              </h2>
              <p className="text-sm text-gray-600 mb-1">
                Organisé par :{" "}
                <span className="font-medium">{formation.organisme}</span>
              </p>
              <p className="text-gray-700 text-sm mb-2">
                {formation.description}
              </p>
              <p className="text-sm text-gray-500">📍 {formation.lieu}</p>
              <p className="text-sm text-gray-500">📅 {formation.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
