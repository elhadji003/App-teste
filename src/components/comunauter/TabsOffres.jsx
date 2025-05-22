import React, { useState } from "react";
import OffreRemStages from "./OffreRemStages";
import OffresRecom from "../OffresRecom";
import OffreRemFormation from "./OffreRemFormation";
import OffreRemEmploie from "./OffreRemEmploie";

const TabsOffres = () => {
  const [activeTab, setActiveTab] = useState("recom");

  const tabs = [
    { id: "emploie", label: "Emplois" },
    { id: "stage", label: "Stages" },
    { id: "formation", label: "Formations" },
    { id: "recom", label: "Recommandés" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "emploie":
        return <OffreRemEmploie />;
      case "stage":
        return <OffreRemStages />;
      case "recom":
        return <OffresRecom />;
      case "formation":
        return <OffreRemFormation />;
      default:
        return null;
    }
  };

  return (
    <div className="p-4">
      {/* Tabs */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:flex lg:justify-center lg:space-x-4 mb-6 ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-md font-semibold w-full text-center ${
              activeTab === tab.id
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div>{renderTabContent()}</div>
    </div>
  );
};

export default TabsOffres;
