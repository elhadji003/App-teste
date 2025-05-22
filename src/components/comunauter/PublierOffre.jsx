import React, { useState } from "react";
import { FaImage } from "react-icons/fa";

export default function PublierOffre() {
  const [formData, setFormData] = useState({
    image: null,
    title: "",
    description: "",
    price: "",
    status: "publiée",
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vous pouvez ici envoyer `formData` vers votre backend avec un FormData si l’image est incluse
    console.log("Offre soumise :", formData);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow mt-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        Publier une offre
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 font-medium text-gray-700">Titre</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Titre de l'offre"
          />
        </div>
        {/* Image */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Image de l'offre
          </label>
          <div className="border-dashed border-2 border-gray-400 rounded-lg p-4 text-center cursor-pointer bg-gray-50 relative">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            {preview ? (
              <img
                src={preview}
                alt="Aperçu"
                className="w-28 h-28 object-cover rounded mx-auto"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-gray-500">
                <FaImage className="text-3xl mb-2" />
                <span>Choisissez une image</span>
              </div>
            )}
          </div>
        </div>

        {/* Titre */}

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={5}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Décrivez l'offre ici..."
          />
        </div>

        {/* Prix */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Prix / Rémunération (€)
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Montant"
          />
        </div>

        {/* Statut */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Statut</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="publiée">Publiée</option>
            <option value="en attente">En attente</option>
            <option value="clôturée">Clôturée</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition"
        >
          Publier l’offre
        </button>
      </form>
    </div>
  );
}
