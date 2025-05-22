import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnnonceCarousel from "../../../components/comunauter/AnnonceCarousel";
import OffreVert from "../../../components/comunauter/OffreVert";
import TabsOffres from "../../../components/comunauter/TabsOffres";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faEye,
  faBookmark,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const DashboardUser = () => {
  return (
    <div className="p-6 min-h-screen max-sm:p-0 max-sm:m-2">
      <h2 className="text-2xl font-bold mb-6 text-blue-800">
        Bienvenue sur ton tableau de bord !
      </h2>

      <div className="mb-8 grid grid-cols-1 lg:grid-cols-1 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2 text-blue-900">
            Tes Statistiques
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-blue-100 p-3 rounded-lg shadow-md flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-blue-900">
                  Formations Consultées
                </h2>
                <p className="text-xl font-bold">250</p>
              </div>
              <FontAwesomeIcon
                icon={faBookOpen}
                className="text-blue-500 text-3xl"
              />
            </div>

            <div className="bg-green-100 p-3 rounded-lg shadow-md flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-green-900">
                  Offres Consultées
                </h2>
                <p className="text-xl font-bold">410</p>
              </div>
              <FontAwesomeIcon
                icon={faEye}
                className="text-green-500 text-3xl"
              />
            </div>

            <div className="bg-yellow-100 p-3 rounded-lg shadow-md flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-yellow-900">
                  Offres Sauvegardées
                </h2>
                <p className="text-xl font-bold">65</p>
              </div>
              <FontAwesomeIcon
                icon={faBookmark}
                className="text-yellow-500 text-3xl"
              />
            </div>

            <div className="bg-red-100 p-3 rounded-lg shadow-md flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-red-900">
                  Candidatures Refusées
                </h2>
                <p className="text-xl font-bold">12</p>
              </div>
              <FontAwesomeIcon
                icon={faTimesCircle}
                className="text-red-500 text-3xl"
              />
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-blue-900 text-center bg-gray-100 p-4">
        Annonces
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <AnnonceCarousel />
        <OffreVert />
      </div>

      {/* Offres Recommandées */}
      <h2 className="text-2xl font-bold mb-4 text-blue-900 text-center bg-gray-100 p-4">
        Parcours Professionnel
      </h2>
      <TabsOffres />
    </div>
  );
};

export default DashboardUser;
