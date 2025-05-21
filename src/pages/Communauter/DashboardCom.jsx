import React, { useState, useEffect } from "react";
import StatsCards from "../../components/comunauter/StatsCards";
import ChartC from "../../components/comunauter/ChartC";
import Calendrier from "../../components/comunauter/Calendrier";
import ComOffre from "../../components/comunauter/ComOfrre";
import ListesCandidatures from "../../components/comunauter/ListesCandidatures";
import logo from "../../assets/images/defaulLogo.png";
import drapeau from "../../assets/images/drapeau-senegal.jpg";
import Messages from "../../components/comunauter/Messages";
import ListesEmployers from "../../components/comunauter/ListesEmployers";
import StatistiquesRapides from "../../components/comunauter/StatistiquesRapides";

const mockOffers = [
  { id: 1, title: "Développeur React", date: "2025-05-01", status: "En ligne" },
  { id: 2, title: "Chef de projet", date: "2025-04-28", status: "Clôturée" },
  { id: 3, title: "Community Manager", date: "2025-04-20", status: "En ligne" },
];

const mockApplications = [
  {
    id: 1,
    candidate: "Moussa Diallo",
    offerId: 1,
    offerTitle: "Développeur React",
    date: "2025-05-10",
  },
  {
    id: 2,
    candidate: "Awa Ndiaye",
    offerId: 3,
    offerTitle: "Community Manager",
    date: "2025-05-12",
  },
  {
    id: 3,
    candidate: "Fatou Sow",
    offerId: 2,
    offerTitle: "Chef de projet",
    date: "2025-05-15",
  },
  {
    id: 4,
    candidate: "Ibrahima Ba",
    offerId: 1,
    offerTitle: "Développeur React",
    date: "2025-05-18",
  },
];

export default function DashboardCom() {
  const [offers, setOffers] = useState([]);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    setOffers(mockOffers);
    setApplications(mockApplications);
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt=""
            className="w-20 h-20 rounded-full object-cover object-center border-2 border-gray-100 shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
          />
          <h1 className="text-3xl font-bold mt-3">Entreprise</h1>
        </div>

        <div>
          <p className="font-extrabold">Un Peuple - Une But - Une Fois</p>
        </div>

        <div>
          <img src={drapeau} alt="" className="w-36 h-32" />
        </div>
      </div>

      <StatsCards offers={offers} applications={applications} />

      <div className="flex gap-6 mb-10">
        <ChartC />
        <StatistiquesRapides />
      </div>

      <div className="flex gap-6 mb-10">
        <Messages />
        <ListesEmployers />
      </div>

      <ComOffre offers={offers} />

      <ListesCandidatures applications={applications} />
    </div>
  );
}
