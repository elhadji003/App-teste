import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useRegisterMutation } from "../../backend/features/auth/authAPI";
import { toast } from "react-toastify";

function InscriptionCom() {
  const { register, handleSubmit, reset } = useForm();
  const [registerUser, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await registerUser(data).unwrap();
      console.log("Response: ", res);
      if (res) {
        toast.success("Inscription réussie");
        navigate("/login");
      }
      reset();
    } catch (error) {
      toast.error("Erreur lors de l'inscription");
      console.error("Erreur : ", error);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="lg:w-1/2 bg-[url('/src/assets/images/cyton.jpg')] bg-cover bg-center p-8 text-white flex flex-col justify-center relative">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-white font-bold bg-black bg-opacity-40 px-6 py-3 rounded animate__animated animate__backInLeft animate__slower">
          <h1 className="text-4xl font-bold mb-4">
            Rejoignez notre communauté d’experts
          </h1>
          <p className="text-xl mb-8">
            Créez votre compte dès aujourd’hui et profitez d’un accès exclusif à
            nos services et opportunités.
          </p>
        </div>
      </div>

      <div className="lg:w-1/2 flex items-center justify-center p-2">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-8 rounded w-full max-w-sm text-black"
        >
          <h1 className="text-3xl font-extrabold mb-4 text-center text-gray-800">
            Inscription
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Nom de l'entreprise
              </label>
              <input
                type="text"
                {...register("full_name", { required: "Ce champ est requis" })}
                className="w-full border px-3 py-2 rounded outline-blue-600 text-sm"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Type d'entreprise
              </label>
              <select
                {...register("genre", { required: "Ce champ est requis" })}
                className="w-full border px-3 py-2 rounded outline-blue-600 text-sm"
              >
                <option value="">Sélectionnez un domaine</option>
                <option value="man">Startup</option>
                <option value="woman">Entreprise</option>
                <option value="woman">Freelance</option>
                <option value="other">Autre</option>
                <option value="other">Société</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-medium">
              Numéro NINEA
            </label>
            <input
              type="text"
              {...register("ninea", { required: "Ce champ est requis" })}
              className="w-full border px-3 py-2 rounded outline-blue-600 text-sm"
              placeholder="Entrez votre numéro d'identification"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: "Ce champ est requis" })}
              className="w-full border px-3 py-2 rounded outline-blue-600 text-sm"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Mot de passe
              </label>
              <input
                type="password"
                {...register("password", { required: "Ce champ est requis" })}
                className="w-full border px-3 py-2 rounded outline-blue-600 text-sm"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Confirmation
              </label>
              <input
                type="password"
                {...register("password2", { required: "Ce champ est requis" })}
                className="w-full border px-3 py-2 rounded outline-blue-600 text-sm"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 text-sm"
          >
            {isLoading ? "Chargement..." : "S'inscrire"}
          </button>

          <div className="mt-4 text-center">
            <p className="text-gray-600 text-sm">
              Déjà un compte ?
              <Link
                to="/login"
                className="text-blue-600 hover:underline font-medium ml-2"
              >
                Se connecter
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InscriptionCom;