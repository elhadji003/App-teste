import React from "react";
import { Link } from "react-router-dom";
import CarouselAccueil from "../components/acceuil/CarouselAccueil";
import SliderCard from "../components/acceuil/SliderCard";
import OffreAccueil from "../components/acceuil/offreAcceuil";
import NosStats from "../components/acceuil/NosStats";
import AnnonceCarousel from "../components/comunauter/AnnonceCarousel";
import logo from "../assets/images/logoSamaAvenir.png";
import TemoignageCard from "./Communauter/TemoignageCard";
import FilActualites from "../components/FilActualites";
import FilActualitessm from "../components/FilActualitessm";
import Footer from "../components/Footer";

function Accueil() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 max-sm:p-0">
      <FilActualitessm />
      <nav className="flex justify-between items-center shadow-md mb-4 p-4">
        <img src={logo} alt="" className="w-20 h-20 object-cover" />
        <FilActualites />
        <button className="bg-blue-600 px-4 py-2 rounded-md text-white text-nowrap">
          Se connecter
        </button>
      </nav>
      <div className="mb-10 relative max-sm:p-4">
        <CarouselAccueil />
      </div>

      <div className="mb-10 relative">
        <OffreAccueil />
      </div>

      <div className="mb-10 relative max-sm:p-4">
        <h2 className="text-2xl text-center font-bold mb-4 text-blue-900">
          <span className="inline-flex items-center">
            Nouvelles annonces
            <span className="relative flex h-3 w-3 ml-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </span>
        </h2>

        <AnnonceCarousel />
      </div>

      <div className="mb-10 relative bg-white p-6">
        <h2 className="text-2xl text-center font-bold mb-4 text-blue-900">
          Nos statistiques
        </h2>
        <NosStats />
      </div>

      <div className="flex flex-col md:flex-row p-6 rounded-lg mb-10 items-center gap-6">
        {/* Image à gauche */}
        <div className="w-full md:w-1/2 object-cover brightness-50">
          <img
            src={logo}
            alt="À propos de nous"
            className="rounded-lg w-full h-72 object-cover"
          />
        </div>

        {/* Texte à droite */}
        <div className="w-full md:w-1/2 shadow-md p-4">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">
            À propos de nous
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Sama Avenir est une plateforme innovante conçue pour faciliter
            l’accès à l’emploi, aux stages, aux formations et aux missions
            ponctuelles. Notre objectif est de lutter contre le chômage en
            connectant efficacement les chercheurs d’emploi avec les
            entreprises, startups et organisations qui recrutent.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Nous croyons que chaque individu mérite une opportunité
            professionnelle, quel que soit son parcours. C’est pourquoi nous
            proposons un espace inclusif, simple d’utilisation, et pensé pour
            répondre aux besoins des jeunes diplômés, des étudiants, des
            travailleurs en reconversion et des professionnels en quête de
            nouvelles opportunités.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            En mettant en relation les talents et les recruteurs à travers des
            annonces ciblées, des formations qualifiantes et un accompagnement
            personnalisé, Sama Avenir s’impose comme un véritable tremplin vers
            l’avenir professionnel.
          </p>
        </div>
      </div>

      <div className="mb-10">
        <TemoignageCard />
      </div>

      <div className="mb-10">
        <SliderCard />
      </div>

      <div className="bg-blue-900 text-white p-6 rounded-lg text-center max-sm:m-4">
        <h2 className="text-2xl font-bold mb-4">Entreprises & Startups</h2>
        <p>
          Vous cherchez des talents ? Créez un compte pour publier vos offres
          d'emploi.
        </p>
        <Link
          to="/register-entreprise"
          className="mt-4 inline-block bg-blue-600 py-2 px-6 rounded-full hover:bg-blue-700"
        >
          Créer un compte entreprise
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default Accueil;
