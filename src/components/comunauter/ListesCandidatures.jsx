import React from "react";
import { FaUserCircle } from "react-icons/fa";

export default function ListesCandidatures({ applications }) {
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <section className="mb-10">
      <h3 className="text-2xl font-semibold mb-6 text-gray-800">
        Dernières candidatures reçues
      </h3>

      {applications.length === 0 ? (
        <p className="text-gray-500 italic">Aucune candidature reçue</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {applications.map((app) => (
            <div
              key={app.id}
              className="flex items-start gap-4 bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition"
            >
              <FaUserCircle className="text-3xl text-blue-600 mt-1" />

              <div className="flex-1">
                <p className="text-gray-700">
                  <strong>{app.candidate}</strong> a postulé à l’offre{" "}
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                    {app.offerTitle}
                  </span>
                </p>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm text-gray-500">
                    Candidature déposée le : {formatDate(app.date)}
                  </p>
                  <button className="text-blue-600 border border-blue-600 px-4 py-2 rounded-md text-sm font-medium">
                    Voir le profil
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
