import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";

const publicationsInitiales = [
  {
    auteur: "Awa Ndiaye",
    contenu:
      "Quelqu’un connaît une bonne formation en cybersécurité en ligne ?",
    date: "2025-05-20",
  },
  {
    auteur: "StartupGreen",
    contenu:
      "Nous organisons un webinaire sur l’environnement lundi prochain. Gratuit et ouvert à tous !",
    date: "2025-05-19",
  },
];

const acteursConnectes = [
  { nom: "Tech Innov", type: "Entreprise", enLigne: true },
  { nom: "StartupGreen", type: "Startup", enLigne: true },
  { nom: "ONG Solidarité", type: "ONG", enLigne: false },
  { nom: "FormationsPro", type: "Centre de formation", enLigne: true },
];

export default function Communauter() {
  const [publications, setPublications] = useState(publicationsInitiales);
  const [nouveauPost, setNouveauPost] = useState("");

  const handlePublier = () => {
    if (nouveauPost.trim() === "") return;

    const nouvellePublication = {
      auteur: "Moi", // À remplacer par l'utilisateur connecté
      contenu: nouveauPost,
      date: new Date().toISOString().split("T")[0],
    };

    setPublications([nouvellePublication, ...publications]);
    setNouveauPost("");
  };

  return (
    <div className="p-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Contenu principal */}
      <div className="lg:col-span-3">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Communauté</h1>

        {/* Formulaire de publication */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <textarea
            className="w-full border rounded-lg p-3 resize-none"
            rows="3"
            placeholder="Partagez une idée, une opportunité ou posez une question..."
            value={nouveauPost}
            onChange={(e) => setNouveauPost(e.target.value)}
          />
          <div className="text-right">
            <button
              className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={handlePublier}
            >
              Publier
            </button>
          </div>
        </div>

        {/* Liste des publications */}
        <div className="space-y-4">
          {publications.map((post, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-blue-800">
                  {post.auteur}
                </span>
                <span className="text-sm text-gray-500">
                  {new Date(post.date).toLocaleDateString("fr-FR")}
                </span>
              </div>
              <p className="text-gray-700 whitespace-pre-line mb-3">
                {post.contenu}
              </p>
              <button className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                <FontAwesomeIcon icon={faReply} /> Répondre
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <aside className="hidden lg:block bg-white rounded-lg shadow p-4 h-fit">
        <h2 className="text-xl font-bold text-gray-700 mb-4 text-center">
          Acteurs en ligne
        </h2>

        <ul className="space-y-4">
          {acteursConnectes.map((acteur, index) => (
            <li key={index} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-blue-600">
                {acteur.nom.charAt(0)}
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-800">{acteur.nom}</div>
                <div className="text-sm text-gray-500">{acteur.type}</div>
              </div>
              <div
                className={`w-3 h-3 rounded-full self-center ${
                  acteur.enLigne ? "bg-green-500 animate-pulse" : "bg-red-500"
                }`}
              ></div>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
