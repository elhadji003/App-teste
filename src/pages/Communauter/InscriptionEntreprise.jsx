import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useRegisterMutation } from "../../backend/features/auth/authAPI";
import { toast } from "react-toastify";
import { FaImage } from "react-icons/fa";

function InscriptionEntreprise() {
  const { register, handleSubmit, reset, watch } = useForm();
  const [registerUser, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();
  const [preview, setPreview] = useState(null);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      for (let key in data) {
        formData.append(key, data[key]);
      }

      const res = await registerUser(formData).unwrap();
      if (res) {
        toast.success("Inscription entreprise réussie !");
        navigate("/login");
        reset();
      }
    } catch (error) {
      toast.error("Erreur lors de l'inscription");
      console.error("Erreur : ", error);
    }
  };

  const selectedImage = watch("image");

  useEffect(() => {
    if (selectedImage && selectedImage[0]) {
      const file = selectedImage[0];
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  }, [selectedImage]);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Partie gauche – Texte de bienvenue entreprise */}
      <div className="lg:w-1/2 bg-green-700 text-white p-12 flex items-center">
        <div>
          <h1 className="text-4xl font-bold mb-6 leading-tight">
            Plateforme pour Entreprises & Startups
          </h1>
          <p className="text-lg">
            Enregistrez votre entreprise pour publier des offres d'emploi,
            recruter des talents, et rejoindre notre réseau professionnel
            reconnu.
          </p>
          <p className="mt-4 text-sm text-green-100">
            ⚠️ Votre entreprise doit être reconnue par l'État pour valider
            l'inscription (RCCM, NINEA, etc.).
          </p>
        </div>
      </div>

      {/* Formulaire entreprise */}
      <div className="lg:w-1/2 flex items-center justify-center p-6 bg-gray-100">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-8 rounded-lg w-full max-w-xl"
          encType="multipart/form-data"
        >
          <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
            Inscription
          </h2>
          {/* Première ligne : Nom + Domaine */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Nom de l'entreprise
              </label>
              <input
                type="text"
                {...register("company_name", { required: "Champ requis" })}
                className="w-full border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Domaine d'activité
              </label>
              <select
                {...register("activity_field", { required: "Champ requis" })}
                className="w-full border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Sélectionnez un domaine</option>
                <option value="Informatique">Informatique</option>
                <option value="BTP">BTP</option>
                <option value="Commerce">Commerce</option>
                <option value="Santé">Santé</option>
                <option value="Éducation">Éducation</option>
                <option value="Transport">Transport</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Finance">Finance</option>
                <option value="Autre">Autre</option>
              </select>
            </div>
          </div>
          {/* Deuxième ligne : Email + Mot de passe */}
          {/* Troisième ligne : Confirm password + RCCM */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email professionnel
              </label>
              <input
                type="email"
                {...register("email", { required: "Champ requis" })}
                className="w-full border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Numéro RCCM / NINEA
              </label>
              <input
                type="text"
                {...register("rccm", { required: "Champ requis" })}
                className="w-full border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Mot de passe
              </label>
              <input
                type="password"
                {...register("password", { required: "Champ requis" })}
                className="w-full border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Répéter le mot de passe
              </label>
              <input
                type="password"
                {...register("password2", { required: "Champ requis" })}
                className="w-full border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
          {/* Logo upload */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Url du site de l'entreprise
            </label>
            <input
              type="text"
              {...register("url", { required: "Champ requis" })}
              className="w-full border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Logo de l'entreprise
            </label>
            <div className="border-dashed border-2 border-gray-400 rounded-lg p-4 text-center cursor-pointer bg-gray-50 relative">
              <input
                type="file"
                accept="image/*"
                {...register("image")}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              {preview ? (
                <img
                  src={preview}
                  alt="Aperçu du logo"
                  className="w-28 h-28 object-cover rounded mx-auto"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-gray-500">
                  <FaImage className="text-3xl mb-2" />
                  <span>Choisissez un logo</span>
                </div>
              )}
            </div>
          </div>
          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
          >
            {isLoading ? "Enregistrement..." : "Créer un compte entreprise"}
          </button>
          <p className="mt-6 text-center text-gray-600">
            Déjà inscrit ?
            <Link
              to="/login-entreprise"
              className="text-green-600 font-medium ml-1 hover:underline"
            >
              Connexion
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default InscriptionEntreprise;
