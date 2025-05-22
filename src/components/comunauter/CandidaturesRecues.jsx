import React from "react";
import { FaUserCircle } from "react-icons/fa";

export default function CandidaturesRecues({ candidatures = [] }) {
  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        📥 Candidatures reçues
      </h2>

      {candidatures.length === 0 ? (
        <p className="text-gray-500 text-center italic">
          Aucune candidature reçue pour le moment.
        </p>
      ) : (
        <div className="space-y-6">
          {candidatures.map((candidature, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow transition"
            >
              <div className="flex items-center gap-4 mb-3">
                <FaUserCircle className="text-4xl text-blue-600" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {candidature.nom}
                  </h4>
                  <p className="text-gray-600 text-sm">{candidature.email}</p>
                </div>
              </div>

              <p className="text-gray-700 mb-2">
                <strong>Offre :</strong> {candidature.offre}
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Message :</strong> {candidature.message}
              </p>

              <div className="flex gap-4">
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-medium">
                  Accepter
                </button>
                <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-medium">
                  Refuser
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
