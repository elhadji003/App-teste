import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCalendarAlt,
  faFileContract,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const contrats = [
  {
    id: 1,
    entreprise: "Tech Innov",
    domaine: "Développement Web",
    type: "CDI",
    statut: "Actif",
    dateDebut: "2025-05-01",
  },
  {
    id: 2,
    entreprise: "Green Solutions",
    domaine: "Environnement",
    type: "Stage",
    statut: "Terminé",
    dateDebut: "2024-11-15",
  },
];

const getStatutStyle = (statut) => {
  switch (statut) {
    case "Actif":
      return "bg-green-100 text-green-800";
    case "Terminé":
      return "bg-gray-200 text-gray-600";
    default:
      return "bg-yellow-100 text-yellow-800";
  }
};

export default function MesContrats() {
  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center max-sm:text-lg">
        Mes Contrats
      </h2>

      {contrats.length === 0 ? (
        <div className="flex flex-col items-center text-center text-gray-500 mt-20">
          <FontAwesomeIcon icon={faFileContract} className="text-6xl mb-4" />
          <p className="text-lg">Aucun contrat trouvé pour le moment.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          {contrats.map(
            ({ id, entreprise, domaine, type, statut, dateDebut }) => (
              <div
                key={id}
                className="flex flex-col md:flex-row bg-white rounded-lg shadow-md p-6 transition-transform hover:shadow-xl hover:scale-[1] cursor-pointer"
              >
                {/* Logo + infos */}
                <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 flex-1 text-center md:text-left">
                  {/* Logo */}
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-800 text-xl mx-auto md:mx-0">
                    {entreprise.charAt(0)}
                  </div>

                  {/* Infos */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {entreprise}
                    </h3>
                    <div className="text-gray-700 text-sm space-y-1">
                      <div className="flex items-center justify-center md:justify-start gap-2">
                        <FontAwesomeIcon icon={faBriefcase} />
                        <span>
                          {domaine} ({type})
                        </span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start gap-2">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        <span>
                          Début :{" "}
                          {new Date(dateDebut).toLocaleDateString("fr-FR")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Statut + bouton */}
                <div className="flex flex-col items-center md:items-end gap-3 mt-4 md:mt-0">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatutStyle(
                      statut
                    )}`}
                  >
                    {statut}
                  </span>
                  <button
                    type="button"
                    className="group inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 px-3 py-1 transition"
                  >
                    Voir détails
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}
