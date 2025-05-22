import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome,
  faBriefcase,
  faEnvelope,
  faBell,
  faFileContract,
  faQuestionCircle,
  faUsers,
  faClose,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { icon: faHome, label: "Dashboard", path: "/dashboard" },
    { icon: faBriefcase, label: "Offres de Travail", path: "/offres" },
    {
      icon: faPaperPlane,
      label: "Mes Postulations",
      path: "/mes-postulations",
    },
    { icon: faBell, label: "Notifications", path: "/notifications" },
    { icon: faFileContract, label: "Mes Contrats", path: "/mes-contrats" },
    { icon: faUsers, label: "Communauté", path: "/communauter" },
    // { icon: faQuestionCircle, label: "Aide & Support", path: "/AideSupport" },
  ];

  return (
    <div
      className={`fixed left-0 mt-16 z-50 h-full bg-blue-900 text-gray-100 transition-[width] duration-300 ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      {/* Header */}
      <div className="p-4 flex items-center justify-between border-b border-gray-700">
        {isOpen && <span className="text-xl font-bold ml-4">Fermer</span>}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle sidebar"
          className="text-gray-100 focus:outline-none p-2 rounded-md transition"
        >
          {isOpen ? (
            <FontAwesomeIcon
              icon={faClose}
              size="xl"
              className={`${isOpen ? "" : "mx-1"}`}
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              size="xl"
              className={`${isOpen ? "" : "mx-1"}`}
            />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`flex items-center gap-3 py-4 px-2 pl-2 hover:bg-blue-500 hover:text-white cursor-pointer rounded-md transition ${
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

export default Sidebar;
