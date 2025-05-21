import React from "react";
import "../css/animation.css";

const annonces = [
  "📢 Recrutement développeur React en cours !",
  "🎓 Formation gratuite en cybersécurité ouverte aux inscriptions.",
  "🚀 Stage en marketing digital – Postulez maintenant !",
  "📌 Mission ponctuelle à Dakar pour un événement tech.",
];

export default function FilActualites() {
  return (
    <div className="w-full py-2 overflow-hidden max-sm:hidden">
      <div className="flex items-center gap-4">
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            {annonces.map((texte, index) => (
              <span key={index} className="mx-8 text-blue-700 font-medium">
                {texte}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
