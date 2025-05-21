import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome,
  faBriefcase,
  faUsers,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SidebarC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: faHome, label: "Dashboard", path: "/dashboard-communaute" },
    {
      icon: faBriefcase,
      label: "Publier une Offre",
      path: "/publier-offre",
    },
    { icon: faUsers, label: "Mes Recrutements", path: "/mes-recrutements" },
  ];

  return (
    <div
      className={`fixed left-0 mt-16 z-50 h-full bg-green-700 text-white transition-[width] duration-300 ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      {/* Header */}
      <div className="p-4  flex items-center justify-between border-b border-gray-50">
        {isOpen && <span className="text-xl font-bold ml-4">Menu</span>}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle sidebar"
          className="text-white focus:outline-none p-2 rounded-md transition ms-1"
        >
          <FontAwesomeIcon icon={isOpen ? faClose : faBars} size="xl" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`flex items-center gap-3 py-4 px-2 pl-2 hover:text-white cursor-pointer rounded-md transition hover:bg-green-600 ${
                isOpen ? "" : "justify-center"
              }`}
            >
              <Link to={item.path} className="flex items-center gap-3">
                <FontAwesomeIcon icon={item.icon} size="xl" />
                {isOpen && <span>{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SidebarC;
