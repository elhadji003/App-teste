import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBellSlash } from "@fortawesome/free-solid-svg-icons";

export default function Notification() {
  // Simuler aucune notification
  const notifications = [];

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Mes Notifications
      </h1>

      {notifications.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20 text-center text-gray-500">
          <FontAwesomeIcon
            icon={faBellSlash}
            className="text-6xl mb-4 text-gray-400"
          />
          <p className="text-lg font-medium">
            Vous n'avez aucune notification pour le moment.
          </p>
        </div>
      ) : (
        <div>{/* Affichage des notifications quand il y en aura */}</div>
      )}
    </div>
  );
}
