import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ModalNotif = ({ offer, onClose, accepterOffre }) => {
  if (!offer) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-blue-900">{offer.title}</h2>
          <button onClick={onClose} className="hover:text-red-500">
            <FontAwesomeIcon icon={faClose} size="2x" />
          </button>
        </div>
        <p className="text-gray-700 mb-2">Entreprise : {offer.company}</p>
        <p className="text-gray-500 mb-2">Localisation : {offer.location}</p>
        <p className="text-gray-400 mb-4">Date de publication : {offer.date}</p>

        <div className="flex justify-between">
          <button
            onClick={() => accepterOffre(offer)}
            disabled={offer.accepted}
            className={`mt-4 px-4 py-2 rounded-md text-white transition duration-300 ${
              offer.accepted
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {offer.accepted ? "Offre acceptée" : "Postuler"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalNotif;
