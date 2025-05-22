import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCalendarAlt,
  faArrowRight,
  faTrashAlt,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FaTimesCircle } from "react-icons/fa";

const initialPostulations = [
  {
    id: 1,
    entreprise: "Tech Innov",
    domaine: "Informatique",
    statut: "En attente",
    date: "2025-05-20",
  },
  {
    id: 2,
    entreprise: "Green Solutions",
    domaine: "Environnement",
    statut: "Validée",
    date: "2025-05-15",
  },
  {
    id: 3,
    entreprise: "MarketPro",
    domaine: "Marketing",
    statut: "Rejetée",
    date: "2025-05-10",
  },
  {
    id: 4,
    entreprise: "DigitalWave",
    domaine: "Design",
    statut: "En attente",
    date: "2025-05-22",
  },
];

const getStatusStyles = (statut) => {
  switch (statut) {
    case "Validée":
      return "bg-green-100 text-green-800";
    case "Rejetée":
      return "bg-red-100 text-red-800";
    case "En attente":
    default:
      return "bg-yellow-100 text-yellow-800";
  }
};

export default function MesPostulations() {
  const [postulations, setPostulations] = useState(initialPostulations);
  const [filter, setFilter] = useState("Tous");

  // Filtrage selon le statut
  const filteredPostulations =
    filter === "Tous"
      ? postulations
      : postulations.filter((p) => p.statut === filter);

  // Fonction annuler (supprimer) une postulation par id
  const handleAnnuler = (id) => {
    if (
      window.confirm("Êtes-vous sûr de vouloir annuler cette postulation ?")
    ) {
      setPostulations((prev) => prev.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center bg-gray-100 p-2 max-sm:text-sm">
        Mes Postulations
      </h2>

      {/* Filtre */}
      <div className="mb-8">
        <label
          htmlFor="filter"
          className="block mb-2 font-semibold text-gray-700"
        >
          Filtrer par statut :
        </label>
        <select
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 max-sm:w-full"
        >
          <option value="Tous">Tous</option>
          <option value="En attente">En attente</option>
          <option value="Validée">Validée</option>
          <option value="Rejetée">Rejetée</option>
        </select>
      </div>

      {/* Liste postulations */}
      {filteredPostulations.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          Aucune postulation {filter !== "Tous" ? `(${filter})` : ""}.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          {filteredPostulations.map(
            ({ id, entreprise, domaine, statut, date }) => (
              <div
                key={id}
                className="flex flex-col md:flex-row bg-white rounded-lg shadow-md p-6 transition-transform hover:shadow-xl hover:scale-[1] cursor-pointer"
              >
                {/* Logo placeholder */}
                <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 flex-1">
                  {/* Logo */}
                  <div className="w-16 h-16 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 font-bold text-xl self-center md:self-auto">
                    {entreprise.charAt(0)}
                  </div>

                  {/* Infos */}
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                      {entreprise}
                    </h3>

                    <div className="flex flex-col md:flex-row md:items-center text-gray-600 gap-2 md:gap-6 text-sm md:text-base">
                      <div className="flex items-center justify-center gap-1">
                        <FontAwesomeIcon icon={faBriefcase} />
                        <span>{domaine}</span>
                      </div>
                      <div className="flex items-center justify-center gap-1">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        <span>
                          {new Date(date).toLocaleDateString("fr-FR")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Statut et boutons */}
                <div className="flex flex-col items-end space-y-3 ml-6 max-sm:ml-0">
                  <span
                    className={`inline-block max-sm:m-auto max-sm:mt-3 px-4 py-1 rounded-full font-semibold text-sm md:text-base ${getStatusStyles(
                      statut
                    )}`}
                  >
                    {statut}
                  </span>

                  <button
                    type="button"
                    className="group inline-flex items-center gap-2 text-blue-600 px-4 py-2 rounded-md transition text-nowrap"
                    // Ici tu peux mettre une action pour voir les détails
                  >
                    Voir détails
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="transform transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>

                  {statut === "En attente" ? (
                    <button
                      type="button"
                      onClick={() => handleAnnuler(id)}
                      className="inline-flex items-center gap-2 text-red-600 hover:text-red-800 px-4 py-2 rounded-md transition"
                    >
                      Annuler
                      <FontAwesomeIcon icon={faTimesCircle} />
                    </button>
                  ) : statut === "Rejetée" ? (
                    <button
                      type="button"
                      onClick={() => handleAnnuler(id)}
                      className="inline-flex items-center gap-2 text-red-600 hover:text-red-800 px-4 py-2 rounded-md transition"
                    >
                      Supprimer
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                  ) : null}
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}
