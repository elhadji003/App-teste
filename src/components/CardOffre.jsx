import React from "react";

const CardOffre = ({ offer, deleteOffre, onVoirOffre, isAccepted }) => {
  const handleAccept = () => {
    onVoirOffre(offer);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
      <h3 className="text-lg font-bold mb-2 text-blue-900">{offer.title}</h3>
      <p className="text-gray-700">{offer.company}</p>
      <p className="text-gray-500 text-sm">{offer.location}</p>
      <p className="text-gray-400 text-xs">{offer.date}</p>
      <div className="flex items-center justify-between">
        <button
          onClick={handleAccept}
          className="mt-4 px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-md transition duration-300"
          disabled={isAccepted}
        >
          {isAccepted ? "Offre acceptée" : "Voir offre"}
        </button>
        {!isAccepted ? (
          <button
            onClick={() => deleteOffre(offer.id)}
            className="mt-4 px-4 py-2 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded-md transition duration-300"
          >
            Pas interessé
          </button>
        ) : (
          <div className="relative top-1 text-sm text-nowrap">
            <p>En attente d'une réponse...</p>
            <p className="text-gray-500">
              Vous recevrez une notification par email.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardOffre;
