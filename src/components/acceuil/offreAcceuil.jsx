import React, { useState } from "react";
import Tabs from "../comunauter/Tabs";
import OffreDeveloppement from "../comunauter/tabs/OffreDeveloppement";
import OffreStage from "../comunauter/tabs/OffreStage";
import OffreInformation from "../comunauter/tabs/OffreInformation";
import TousOffres from "../comunauter/tabs/TousOffres";
import Formations from "../comunauter/tabs/Formations";

// import OffreMacon from "./offres/OffreMacon";

export default function OffreAccueil() {
  const tabs = [
    "Tous les offres",
    "Développement",
    "Stage",
    "Informatique",
    "Maçon",
    "Formations",
  ];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const renderContent = () => {
    switch (activeTab) {
      case "Développement":
        return <OffreDeveloppement />;
      case "Stage":
        return <OffreStage />;
      case "Informatique":
        return <OffreInformation />;
      case "Tous les offres":
        return <TousOffres />;
      case "Formations":
        return <Formations />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-blue-900 text-center uppercase">
        Les offres
      </h2>{" "}
      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="p-6">{renderContent()}</div>
    </div>
  );
}
