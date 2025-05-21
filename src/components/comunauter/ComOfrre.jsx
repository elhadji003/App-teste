import { faEye, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FaBriefcase } from "react-icons/fa";

export default function ComOffre({ offers }) {
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getStatusBadge = (status) => {
    const base = "px-2 py-1 text-xs font-semibold rounded-full";
    switch (status.toLowerCase()) {
      case "publiée":
        return `${base} bg-green-100 text-green-700`;
      case "clôturée":
        return `${base} bg-red-100 text-red-700`;
      case "en attente":
        return `${base} bg-yellow-100 text-yellow-700`;
      default:
        return `${base} bg-gray-100 text-gray-700`;
    }
  };

  return (
    <section className="mb-10">
      <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-gray-800">
        <FaBriefcase className="text-blue-600" />
        Dernières offres publiées
      </h3>

      {offers.length === 0 ? (
        <p className="text-gray-500 italic">Aucune offre disponible</p>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow-sm">
          <table className="min-w-full text-sm text-left bg-white border border-gray-200">
            <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
              <tr>
                <th className="px-6 py-3 border-b">Titre</th>
                <th className="px-6 py-3 border-b">Date</th>
                <th className="px-6 py-3 border-b">Statut</th>
                <th className="px-6 py-3 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {offers.map((offer) => (
                <tr
                  key={offer.id}
                  className="hover:bg-blue-50 transition-colors"
                >
                  <td className="px-6 py-4 border-b text-gray-800">
                    {offer.title}
                  </td>
                  <td className="px-6 py-4 border-b text-gray-600">
                    {formatDate(offer.date)}
                  </td>
                  <td className="px-6 py-4 border-b">
                    <span className={getStatusBadge(offer.status)}>
                      {offer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 border-b space-x-3">
                    <button>
                      <FontAwesomeIcon icon={faPencil} color="yellow" />
                    </button>
                    <button>
                      <FontAwesomeIcon icon={faEye} color="skyblue" />
                    </button>
                    <button>
                      <FontAwesomeIcon icon={faTrash} color="red" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
