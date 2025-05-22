import React from "react";
import { FiAlertCircle } from "react-icons/fi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import logo1 from "../../../assets/images/bakeli.png";
import logo2 from "../../../assets/images/isep.png";

import image1 from "../../../assets/images/stage1.png";
import image2 from "../../../assets/images/isepp.png";
import image3 from "../../../assets/images/bakeliStage.png";

export const offres = [
  {
    id: 1,
    titre: "Stage Développement Web",
    entreprise: "StartUp Web",
    lieu: "Dakar",
    duree: "3 mois",
    description:
      "Participez à la création de sites web modernes avec HTML, CSS, JavaScript et React.",
    logo: "https://img.icons8.com/color/48/000000/source-code.png",
    background: image1,
  },
  {
    id: 2,
    titre: "Stage Community Management",
    entreprise: "Agence Digitale",
    lieu: "Thiès",
    duree: "2 mois",
    description:
      "Aidez à gérer les réseaux sociaux et créez des contenus engageants.",
    logo: logo2,
    background: image2,
  },
  {
    id: 3,
    titre: "Stage Design Graphique",
    entreprise: "Studio Créatif",
    lieu: "Saint-Louis",
    duree: "1 mois renouvelable",
    description:
      "Créez des supports visuels attractifs pour nos campagnes marketing.",
    logo: logo1,
    background: image3,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function OffreStage({ search = "" }) {
  const navigate = useNavigate();

  const handleApply = () => {
    navigate("/login");
  };

  // Filtrage case insensitive sur titre, entreprise, lieu, description
  const filteredData = offres.filter((item) =>
    (
      item.titre +
      " " +
      item.entreprise +
      " " +
      item.lieu +
      " " +
      (item.description || "")
    )
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      <div className="p-6"></div>
      <div className="flex justify-center items-center gap-6 mb-6">
        <h2 className="text-xl font-semibold">Stage Programmation</h2>
      </div>

      {filteredData.length === 0 ? (
        <p className="text-center text-gray-600">Aucun stage trouvé.</p>
      ) : (
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map((stage, index) => (
            <motion.div
              key={stage.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                <img
                  src={stage.background}
                  alt="background"
                  className="w-full h-80 object-cover brightness-75 group-hover:brightness-50 transition duration-300"
                />

                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  <div className="flex items-center justify-between bg-white/90 backdrop-blur-md p-3 rounded-lg shadow-sm">
                    <div className="flex items-center gap-3">
                      <img
                        src={stage.logo}
                        alt="logo"
                        className="w-10 h-10 object-cover rounded"
                      />
                      <div className="font-semibold text-gray-900">
                        {stage.titre}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-white space-y-1">
                    <p className="font-semibold text-sm">
                      Entreprise : {stage.entreprise}
                    </p>
                    <p className="text-sm">Lieu : {stage.lieu}</p>
                    <p className="text-sm">Durée : {stage.duree}</p>
                    <p className="flex items-start text-sm gap-1">
                      <FiAlertCircle className="mt-0.5" />
                      <span>Description : {stage.description}</span>
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out rounded-b-2xl">
                    <button
                      onClick={handleApply}
                      className="mt-2 bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition"
                    >
                      Voir plus
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </>
  );
}
