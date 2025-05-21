import React from "react";

const CardOffre = ({ offer, deleteOffre, onVoirOffre, isAccepted }) => {
  const handleAccept = () => {
    onVoirOffre(offer);
  };

  return (
    <div className="bg-gray-100 p-4 max-sm:p-3 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 max-w-md w-full mx-auto">
      <h3 className="text-lg max-sm:text-base font-bold mb-2 text-blue-900">
        {offer.title}
      </h3>
      <p className="text-gray-700 max-sm:text-sm">{offer.company}</p>
      <p className="text-gray-500 text-sm max-sm:text-xs">{offer.location}</p>
      <p className="text-gray-400 text-xs max-sm:text-[10px]">{offer.date}</p>

      <div className="flex items-center justify-between max-sm:flex-col max-sm:items-start gap-2">
        <button
          onClick={handleAccept}
          className="mt-4 px-4 py-2 max-sm:px-3 max-sm:py-1 text-sm border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-md transition duration-300"
          disabled={isAccepted}
        >
          {isAccepted ? "En cours ..." : "Voir offre"}
        </button>

        {!isAccepted ? (
          <button
            onClick={() => deleteOffre(offer.id)}
            className="mt-4 px-4 py-2 max-sm:px-3 max-sm:py-1 text-sm border border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded-md transition duration-300"
          >
            Pas intéressé
          </button>
        ) : (
          <div className="relative top-1 text-sm max-sm:text-xs">
            <p>En attente d'une réponse...</p>
            <p className="text-gray-500">Notification par email.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardOffre;
