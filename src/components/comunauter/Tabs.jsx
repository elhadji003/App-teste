import React from "react";

export default function Tabs({ tabs, activeTab, onTabChange }) {
  return (
    <div className="flex flex-wrap gap-3 p-4 justify-center">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`px-4 py-2 rounded-full text-sm font-semibold border ${
            activeTab === tab
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-800 hover:bg-blue-100"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
