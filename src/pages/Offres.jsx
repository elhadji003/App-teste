import React, { useState } from 'react';
import { FiSearch, FiStar, FiMapPin, FiBriefcase, FiDollarSign, FiClock } from 'react-icons/fi';


const Offres = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('Thiès');
  const [salaireRange, setSalaryRange] = useState(1000000);

  const jobs = [
    {
      id: 1,
      titre: "Ingénieur Cloud",
      entreprise: "Promobile",
      location: "Thiès",
      type: "CDI",
      salaire: "1.5M - 2M FCFA",
      experience: "5+ ans",
      poste: "Nouveau",
      presente: true
    },
    {
      id: 2,
      titre: "gestion de projet",
      entreprise: "Eclosio",
      location: "Grand Dakar",
      type: "stage",
      salaire: "400k FCFA/mois",
      experience: "2 ans",
      poste: "Il y a 3j",
      présenté: false
    },
    {
      id: 3,
      titre: "conseil agricole",
      entreprise: "ISEP THIES",
      location: "Thiès",
      type: "CDD",
      salaire: "400k FCFA/mois",
      experience: "2 ans",
      poste: "Il y a 3j",
      présenté: false
    },
        {
      id: 4,
      titre: "Formation en ui/ux design",
      entreprise: "IBMS",
      location: "Thiès",
      salaire: "400k FCFA/mois",
      experience: "2 ans",
      poste: "Il y a 3j",
      présenté: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 flex items-center w-full bg-gray-100 rounded-lg px-4 py-2">
              <FiSearch className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder ="Rechercher un métier, une compétence..."
                className="w-full bg-transparent outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-2">
              <FiMapPin className="text-gray-400" />
              <select 
                className="bg-transparent outline-none"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
               <option>Thiès</option>
               
               </select>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Barre latérale des filtres */}
          <div className="lg:w-64 space-y-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">Filtres</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-2">Salaire minimum</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="range"
                      min="0"
                      max="3000000"
                      step="100000"
                      value={salaireRange}
                      onChange={(e) => setSalaryRange(e.target.value)}
                      className="w-full"
                    />
                    <span className="text-sm">{Math.floor(salaireRange / 1000)}k FCFA</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2">Type de poste</label>
                  <div className="space-y-2">
                    {['CDI', 'CDD', 'Stage', 'Freelance'].map((type) => (
                      <label key={type} className="flex items-center gap-2 text-sm">
                        <input type="checkbox" className="rounded" />
                        {type}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2">Niveau d'expérience</label>
                  <select className="w-full border rounded p-2 text-sm">
                    <option>Tous</option>
                    <option>Débutant</option>
                    <option>1-3 ans</option>
                    <option>4-6 ans</option>
                    <option>7+ ans</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-3">Conseils de recherche</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Utilisez des mots-clés simples</li>
                <li>• Vérifiez l'orthographe</li>
                <li>• Enregistrez vos recherches</li>
              </ul>
            </div>
          </div>

          {/* listes d'offres */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">
                124 offres trouvées
              </h2>
              <select className="border rounded p-2 text-sm">
                <option>Trier par : Pertinence</option>
                <option>Date de publication</option>
                <option>Salaire décroissant</option>
              </select>
            </div>

            <div className="grid gap-4">
              {jobs.map((job) => (
                <div key={job.id} className={`bg-white rounded-lg shadow-sm p-6 ${job.presente ? 'border-l-4 border-blue-500' : ''}`}>
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <FiBriefcase className="text-gray-400 text-xl" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold">{job.titre}</h3>
                          <p className="text-blue-600 text-sm">{job.entreprise}</p>
                        </div>
                        <button className="text-gray-400 hover:text-blue-500">
                          <FiStar className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <FiMapPin className="text-gray-400" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <FiDollarSign className="text-gray-400" />
                          {job.salaire}
                        </div>
                        <div className="flex items-center gap-1">
                          <FiClock className="text-gray-400" />
                          {job.experience}
                        </div>
                        <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs w-fit">
                          {job.poste}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-between items-center">
              <span className="text-sm text-gray-500">Affichage 1-10 sur 124</span>
              <div className="flex gap-2">
                <button className="px-3 py-1 rounded bg-blue-500 text-white">&lt; Précédent</button>
                <button className="px-3 py-1 rounded hover:bg-gray-100">Suivant &gt;</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offres;