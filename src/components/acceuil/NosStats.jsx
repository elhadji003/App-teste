function NosStats() {
  const stats = [
    { id: 1, label: "Entreprises qui recrutent", value: 120 },
    { id: 2, label: "Utilisateurs inscrits", value: 3500 },
    { id: 3, label: "Candidatures envoyées", value: 5000 },
  ];

  return (
    <div className="flex justify-center items-center gap-10 my-10 max-sm:flex-col">
      <h1></h1>
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex flex-col items-center justify-center w-44 h-44 rounded-full bg-white shadow-lg"
        >
          <span className="text-3xl font-bold opacity-20">
            +{stat.value.toLocaleString()}
          </span>
          <span className="text-center text-gray-500 font-bold mt-2 text-[0.8rem]">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default NosStats;
