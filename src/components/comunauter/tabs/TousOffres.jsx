import React from "react";
import { motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import image1 from "../../../assets/images/eclosio.jpg";
import image2 from "../../../assets/images/gomycode.png";
import image3 from "../../../assets/images/cmc.jpg";
import image4 from "../../../assets/images/bakeli.png";
import image5 from "../../../assets/images/isep.png";
import image6 from "../../../assets/images/comminucation.png";

import imageOffre1 from "../../../assets/images/adapte.png";
import imageOffre2 from "../../../assets/images/gomycode.png";
import imageOffre3 from "../../../assets/images/cmc.jpg";
import imageOffre4 from "../../../assets/images/offre8.jpg";
import imageOffre5 from "../../../assets/images/isepp.png";
import imageOffre6 from "../../../assets/images/comminucation.png";

// ✅ Export pour que OffreAccueil puisse les combiner
export const offres = [
  {
    id: 1,
    titre: "Développeur Frontend React",
    entreprise: "Tech Corp",
    lieu: "Dakar",
    salaire: "100 000 CFA - 230 000 CFA",
    description:
      "Rejoignez notre équipe pour développer des interfaces utilisateurs modernes et interactives. Expérience en React requise.",
    logo: image1,
    background: imageOffre1,
  },
  {
    id: 2,
    titre: "Assistant Administratif",
    entreprise: "Global Solutions",
    lieu: "Thiès",
    salaire: "140 000 CFA - 300 000 CFA",
    description:
      "Assistez notre département administratif dans la gestion des tâches quotidiennes. Bonne organisation requise.",
    logo: image2,
    background: imageOffre2,
  },
  {
    id: 3,
    titre: "Community Manager",
    entreprise: "Social Buzz",
    lieu: "Saint-Louis",
    salaire: "70 000 CFA - 140 000 CFA",
    description:
      "Gérez les réseaux sociaux de nos clients et élaborez des stratégies de contenu engageantes.",
    logo: image3,
    background: imageOffre3,
  },
  {
    id: 4,
    titre: "Développeur Backend Node.js",
    entreprise: "Dev Solutions",
    lieu: "Dakar",
    salaire: "150 000 CFA - 300 000 CFA",
    description:
      "Rejoignez notre équipe pour développer des applications backend performantes. Expérience en Node.js requise.",
    logo: image4,
    background: imageOffre4,
  },
  {
    id: 5,
    titre: "Designer Graphique",
    entreprise: "Creative Studio",
    lieu: "Dakar",
    salaire: "80 000 CFA - 200 000 CFA",
    description:
      "Créez des visuels attrayants pour nos clients. Maîtrise de la suite Adobe requise.",
    logo: image5,
    background: imageOffre5,
  },
  {
    id: 6,
    titre: "Chargé de Marketing Digital",
    entreprise: "Marketing Pro",
    lieu: "Dakar",
    salaire: "120 000 CFA - 250 000 CFA",
    description:
      "Développez et mettez en œuvre des stratégies de marketing digital pour nos clients.",
    logo: image6,
    background: imageOffre6,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function TousOffres({ search = "" }) {
  const navigate = useNavigate();

  const handleApply = () => {
    navigate("/login");
  };

  const filteredData = offres.filter((offre) =>
    (
      offre.titre +
      " " +
      offre.entreprise +
      " " +
      offre.lieu +
      " " +
      (offre.description || "")
    )
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-sm:p-0">
      {filteredData.length === 0 ? (
        <p className="col-span-full text-center text-gray-600">
          Aucune offre trouvée.
        </p>
      ) : (
        filteredData.map((offre, index) => (
          <motion.div
            key={offre.id}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl group transform transition duration-300 hover:scale-105">
              <img
                src={offre.background}
                alt="background"
                className="w-full h-64 object-cover brightness-50 group-hover:brightness-50 transition duration-300"
              />

              <div className="absolute inset-0 flex flex-col justify-between p-3">
                <div className="flex items-center justify-between bg-white/90 backdrop-blur-md p-2 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2">
                    <img
                      src={offre.logo}
                      alt="logo"
                      className="w-8 h-8 object-cover rounded"
                    />
                    <div className="font-semibold text-gray-900 text-sm">
                      {offre.titre}
                    </div>
                  </div>
                </div>

                <div className="mt-3 text-white space-y-1 text-xs">
                  <p className="font-semibold">
                    Entreprise : {offre.entreprise}
                  </p>
                  <p>Lieu : {offre.lieu}</p>
                  <p className="flex items-start gap-1 font-bold">
                    <FiAlertCircle className="mt-0.5" />
                    <span>Description : {offre.description}</span>
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out rounded-b-2xl text-xs">
                  <p className="mb-1">Salaire : {offre.salaire}</p>
                  <button
                    onClick={handleApply}
                    className="mt-1 bg-white text-black px-3 py-1 rounded-md font-medium hover:bg-gray-100 transition text-xs"
                  >
                    Voir plus
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))
      )}
    </div>
  );
}

export default TousOffres;
