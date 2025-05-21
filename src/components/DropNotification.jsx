// src/components/ModalNotification.jsx
import React from "react";

export default function DropNotification() {
  const handleAlerte = (notif) => {
    alert(`Notification cliquée ! ${notif.id}`);
  };

  const notifications = [
    {
      id: 1,
      community: "Nom de la communauté",
      message: "Ceci est le contenu de la notification.",
    },
    {
      id: 2,
      community: "Développeurs React",
      message: "Rejoignez notre session live ce soir à 18h !",
    },
    {
      id: 3,
      community: "UI/UX Designers",
      message: "Participez à notre concours de design !",
    },
    {
      id: 4,
      community: "Data Science",
      message: "Nouveau cours sur l'analyse de données disponible.",
    },
    {
      id: 5,
      community: "Marketing Digital",
      message: "Webinaire sur les tendances du marketing digital.",
    },
    {
      id: 6,
      community: "Développeurs Python",
      message: "Rejoignez notre challenge de codage !",
    },
  ];

  return (
    <div className="absolute right-0 mt-5 p-4 w-96 max-w-lg bg-white rounded-md shadow-lg z-50 text-black overflow-y-auto max-h-96">
      {notifications.map((notif, index) => {
        const bgColor = index % 2 === 0 ? "bg-gray-100" : "bg-white shadow-md";
        return (
          <button
            onClick={() => handleAlerte(notif)}
            key={notif.id}
            className={`w-full mb-3 p-3 rounded ${bgColor} hover:bg-blue-50 transition`}
          >
            <span className="font-semibold text-blue-900 block mb-1">
              Communauté : {notif.community}
            </span>
            <p className="text-sm text-gray-600">{notif.message}</p>
          </button>
        );
      })}
    </div>
  );
}
