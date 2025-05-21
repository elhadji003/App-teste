import React, { useState } from "react";
import Tabs from "../comunauter/Tabs";
import OffreStage from "../comunauter/tabs/OffreStage";
import TousOffres from "../comunauter/tabs/TousOffres";
import Formations from "../comunauter/tabs/Formations";

export default function OffreAccueil() {
  const tabs = ["Les offres d'emploie", "Stage", "Formations"];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [search, setSearch] = useState("");

  const renderContent = () => {
    switch (activeTab) {
      case "Stage":
        return <OffreStage search={search} />;
      case "Les offres d'emploie":
        return <TousOffres search={search} />;
      case "Formations":
        return <Formations search={search} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex justify-center my-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 w-96 border rounded-md outline-none shadow-sm"
          placeholder="Rechercher une offre, entreprise, stage, formation..."
        />
      </div>

      <h2 className="text-2xl font-bold mb-4 text-blue-900 text-center uppercase">
        Les offres
      </h2>

      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="p-6">{renderContent()}</div>
    </div>
  );
}
