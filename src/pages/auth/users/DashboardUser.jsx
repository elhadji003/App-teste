import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "../../../components/Carousel";
import Chart from "../../../components/Chart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowLeft,
  faCheckCircle,
  faFileAlt,
  faPlus,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import OffresRecom from "../../../components/OffresRecom";
import AnnonceCarousel from "../../../components/comunauter/AnnonceCarousel";

const DashboardUser = () => {
  return (
    <div className="p-6 min-h-screen max-sm:p-0 max-sm:m-2">
      <div className="flex items-center gap-8">
        <AnnonceCarousel />
        <AnnonceCarousel />
      </div>

      <div className="mb-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2 text-blue-900">
            Candidatures Récentes
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="bg-blue-100 p-3 rounded-lg shadow-md flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-blue-900">
                  Candidatures Totales
                </h2>
                <p className="text-xl font-bold">1435</p>
              </div>
              <FontAwesomeIcon
                icon={faFileAlt}
                className="text-blue-500 text-3xl"
              />
            </div>

            <div className="bg-green-100 p-3 rounded-lg shadow-md flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-green-900">
                  Nouvelles Candidatures
                </h2>
                <p className="text-xl font-bold">320</p>
              </div>
              <FontAwesomeIcon
                icon={faPlus}
                className="text-green-500 text-3xl"
              />
            </div>

            <div className="bg-yellow-100 p-3 rounded-lg shadow-md flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-yellow-900">
                  Candidatures Acceptées
                </h2>
                <p className="text-xl font-bold">540</p>
              </div>
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-yellow-500 text-3xl"
              />
            </div>

            <div className="bg-red-100 p-3 rounded-lg shadow-md flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-red-900">
                  Candidatures Rejetées
                </h2>
                <p className="text-xl font-bold">75</p>
              </div>
              <FontAwesomeIcon
                icon={faTimesCircle}
                className="text-red-500 text-3xl"
              />
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md max-sm:hidden">
          <h3 className="text-lg font-semibold mb-2 text-blue-900">
            Nos Statistiques de l'année precedente
          </h3>
          <Chart />
        </div>
      </div>

      {/* Offres Recommandées */}
      <OffresRecom />
    </div>
  );
};

export default DashboardUser;
