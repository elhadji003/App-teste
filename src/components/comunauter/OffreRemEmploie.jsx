import React from "react";
import { motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { toast } from "react-toastify";

import image1 from "../../assets/images/eclosio.jpg";
import image2 from "../../assets/images/gomycode.png";
import image3 from "../../assets/images/cmc.jpg";
import image4 from "../../assets/images/bakeli.png";
import image5 from "../../assets/images/isep.png";
import image6 from "../../assets/images/comminucation.png";

import imageOffre1 from "../../assets/images/adapte.png";
import imageOffre2 from "../../assets/images/gomycode.png";
import imageOffre3 from "../../assets/images/cmc.jpg";
import imageOffre4 from "../../assets/images/offre8.jpg";
import imageOffre5 from "../../assets/images/isepp.png";
import imageOffre6 from "../../assets/images/comminucation.png";

// ✅ Export pour que OffreAccueil puisse les combiner
const offres = [
  {
    id: 1,
    titre: "Parcours Jagro",
    entreprise: "Eclosio",
    lieu: "Dakar",
    salaire: "100 000 CFA - 230 000 CFA",
    description:
      "Formation pratique dans le domaine agroécologique destinée aux jeunes pour favoriser leur insertion professionnelle et autonomie alimentaire.",
    logo: image1,
    background: imageOffre1,
    secteur: "Agrome",
  },
  {
    id: 2,
    titre: "Développeur FullStack",
    entreprise: "GomyCode",
    lieu: "Thiès",
    salaire: "90 000 CFA - 150 000 CFA",
    description:
      "Apprenez à maîtriser le développement web en front-end et back-end avec un programme intensif encadré par des experts de GomyCode.",
    logo: image2,
    background: imageOffre2,
    secteur: "Développeur",
  },
  {
    id: 3,
    titre: "Création d'entreprise",
    entreprise: "CMC",
    lieu: "Dakar",
    salaire: "120 000 CFA - 250 000 CFA",
    description:
      "Accompagnement des jeunes dans le développement d’idées entrepreneuriales viables, de la conception au financement de projet.",
    logo: image3,
    background: imageOffre3,
    secteur: "Autre",
  },
  {
    id: 4,
    titre: "Développeur Backend Node.js",
    entreprise: "Dev Solutions",
    lieu: "Dakar",
    salaire: "150 000 CFA - 300 000 CFA",
    description:
      "Participez à la conception d’API robustes et scalables en utilisant Node.js. Expérience souhaitée en Express, MongoDB et Git.",
    logo: image4,
    background: imageOffre4,
    secteur: "Développeur",
  },
  {
    id: 5,
    titre: "Technicien Agricole",
    entreprise: "AgriPlus",
    lieu: "Kaolack",
    salaire: "80 000 CFA - 160 000 CFA",
    description:
      "Soutien technique auprès des agriculteurs, suivi des cultures et application de méthodes agricoles innovantes et durables.",
    logo: image5,
    background: imageOffre5,
    secteur: "Agrome",
  },
  {
    id: 6,
    titre: "Communication",
    entreprise: "Communication",
    lieu: "Saint-Louis",
    salaire: "70 000 CFA - 140 000 CFA",
    description:
      "Formation ou poste en gestion de la communication digitale : rédaction, design, animation des réseaux sociaux et campagnes marketing.",
    logo: image6,
    background: imageOffre6,
    secteur: "Autre",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function OffreRemEmploie({ search = "" }) {
  const handleApply = () => {
    toast.success("Demande envoyée avec succée");
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
                    Postuler
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

export default OffreRemEmploie;
