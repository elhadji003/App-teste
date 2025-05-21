import React from "react";

export default function ListesEmployers() {
  const ListesEmployers = [
    { id: 1, name: "Employeur 1", is_online: true },
    { id: 2, name: "Employeur 2", is_online: false },
    { id: 3, name: "Employeur 3", is_online: true },
    { id: 4, name: "Employeur 4", is_online: false },
    { id: 5, name: "Employeur 5", is_online: true },
    { id: 6, name: "Employeur 6", is_online: false },
    { id: 7, name: "Employeur 7", is_online: true },
  ];

  return (
    <div className="w-4/12 bg-white p-4 rounded shadow">
      <h1 className="text-xl font-semibold mb-4">Liste des Employeurs</h1>

      <div className="overflow-y-auto max-h-64">
        <table className="min-w-full text-sm border border-gray-200">
          <thead className="bg-gray-100 sticky top-0 z-10">
            <tr>
              <th className="px-4 py-2 text-left border-b">Nom</th>
              <th className="px-4 py-2 text-left border-b">Statut</th>
            </tr>
          </thead>
          <tbody>
            {ListesEmployers.map((employer) => (
              <tr key={employer.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">{employer.name}</td>
                <td className="px-4 py-2 border-b flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    {employer.is_online ? (
                      <>
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                      </>
                    ) : (
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    )}
                  </span>
                  <span className="text-gray-600 text-sm">
                    {employer.is_online ? "En ligne" : "Hors ligne"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
