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
    {
      id: 5,
      title: "Rédacteur Web",
      company: "Contentify",
      location: "Kaolack, Sénégal",
      date: "Il y a 6 jours",
      accepted: false,
    },
    {
      id: 6,
      title: "Développeur Mobile",
      company: "AppTech",
      location: "Ziguinchor, Sénégal",
      date: "Il y a 4 jours",
      accepted: false,
    },
    {
      id: 7,
      title: "Consultant SEO",
      company: "WebBoost",
      location: "Dakar, Sénégal",
      date: "Il y a 2 jours",
      accepted: false,
    },
    {
      id: 8,
      title: "Assistant administratif",
      company: "Groupe Logistique",
      location: "Dakar, Sénégal",
      date: "Aujourd’hui",
      accepted: false,
    },
  ]);

  const [selectedOffer, setSelectedOffer] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAll, setShowAll] = useState(false);

  const deleteOffre = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette offre ?")) {
      toast.success("Offre supprimée avec succès !");
      setOffers(offers.filter((offer) => offer.id !== id));
    }
  };

  const voirOffre = (offer) => {
    setSelectedOffer(offer);
  };

  const filteredOffers = offers.filter((offer) =>
    offer.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedOffers = showAll ? filteredOffers : filteredOffers.slice(0, 6);

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4 max-sm:flex-col max-sm:p-2 max-sm:gap-3">
        <h2 className="text-xl font-semibold text-blue-900">
          Offres Recommandées
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
        {displayedOffers.map((offer) => (
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

      {filteredOffers.length > 6 && (
        <div className="mt-4 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="hover:underline font-medium bg-blue-600 hover:bg-blue-400 px-4 py-2 rounded-md text-white"
          >
            {showAll ? "Voir moins" : "Voir plus"}
          </button>
        </div>
      )}

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
