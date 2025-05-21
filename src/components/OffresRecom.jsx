import React, { useState } from "react";
import CardOffre from "./CardOffre";
import { toast } from "react-toastify";
import ModalNotif from "./ModalNotif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const OffresRecom = () => {
  const [offers, setOffers] = useState([
    {
      id: 1,
      title: "Développeur Web Full Stack",
      company: "Tech Solutions",
      location: "Dakar, Sénégal",
      date: "Il y a 2 jours",
      accepted: false,
    },
    {
      id: 2,
      title: "Designer UX/UI",
      company: "DesignPro",
      location: "Thiès, Sénégal",
      date: "Il y a 3 jours",
      accepted: false,
    },
    {
      id: 3,
      title: "Community Manager",
      company: "Société Média",
      location: "Saint-Louis, Sénégal",
      date: "Il y a 5 jours",
      accepted: false,
    },
    {
      id: 4,
      title: "Marketing Digital",
      company: "Bakeli School of technology",
      location: "Dakar, Sénégal",
      date: "Il y a 1 jours",
      accepted: false,
    },
  ]);

  const [selectedOffer, setSelectedOffer] = useState(null);

  const deleteOffre = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette offre ?")) {
      toast.success("Offre supprimée avec succès !");
      setOffers(offers.filter((offer) => offer.id !== id));
    }
  };

  const voirOffre = (offer) => {
    setSelectedOffer(offer);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const filteredOffers = offers.filter((offer) =>
    offer.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">
          Offres Recommandées
          <button className="ms-5">
            <FontAwesomeIcon icon={faPlusCircle} />
          </button>
        </h2>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Rechercher une offre"
          className="py-2 px-4 rounded-md outline-none border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredOffers.map((offer) => (
          <CardOffre
            key={offer.id}
            offer={offer}
            deleteOffre={deleteOffre}
            onVoirOffre={voirOffre}
            isAccepted={offer.accepted}
          />
        ))}
        {filteredOffers.length === 0 && (
          <div className="col-span-3 text-center text-gray-500">
            Aucune offre recommandée pour le moment.
          </div>
        )}
      </div>

      <ModalNotif
        offer={selectedOffer}
        onClose={() => setSelectedOffer(null)}
        accepterOffre={(offer) => {
          setOffers((prevOffers) =>
            prevOffers.map((o) =>
              o.id === offer.id ? { ...o, accepted: true } : o
            )
          );
          toast.success(`Vous avez accepté l'offre : ${offer.title}`);
          setSelectedOffer(null);
        }}
      />
    </div>
  );
};

export default OffresRecom;
