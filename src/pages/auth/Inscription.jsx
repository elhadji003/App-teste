import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import logoChrome from "../../assets/images/google.png";
import facebook from "../../assets/images/facebook.png";

function Inscription() {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const user = {
    username: "user",
    genre: "man",
    email: "user@gmail.com",
    password: "passer123",
    password2: "passer123",
  };

  const onSubmit = async (data) => {
    try {
      if (
        data.full_name === user.username &&
        data.genre === user.genre &&
        data.email === user.email &&
        data.password === user.password &&
        data.password2 === user.password2
      ) {
        toast.success("Inscription réussie");
        navigate("/dashboard");
      } else {
        toast.error(
          "Échec de l'inscription, veuillez vérifier les informations."
        );
        console.log("erreur :", data);
      }

      // reset(); // Réinitialise le formulaire
    } catch (error) {
      toast.error("Erreur lors de l'inscription");
      console.error("Erreur : ", error);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="lg:w-1/2 bg-[url('/src/assets/images/cyton.jpg')] bg-cover bg-center p-8 text-white flex flex-col justify-center relative max-sm:hidden">
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

      <div className="lg:w-1/2 flex items-center justify-center p-2 max-sm:min-h-screen">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-8 rounded w-full max-w-md text-black"
        >
          <h1 className="text-3xl font-extrabold mb-4 text-center text-gray-800">
            Inscription
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Prenom et Nom
              </label>
              <input
                type="text"
                {...register("full_name", { required: "Ce champ est requis" })}
                className="w-full border px-3 py-2 rounded outline-blue-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Genre
              </label>
              <select
                {...register("genre", { required: "Ce champ est requis" })}
                className="w-full border px-3 py-2 rounded outline-blue-600"
              >
                <option value="">Genre</option>
                <option value="man">Homme</option>
                <option value="woman">Femme</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: "Ce champ est requis" })}
              className="w-full border px-3 py-2 rounded outline-blue-600"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-medium">
              Mot de passe
            </label>
            <input
              type="password"
              {...register("password", { required: "Ce champ est requis" })}
              className="w-full border px-3 py-2 rounded outline-blue-600"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-medium">
              Confirmer le mot de passe
            </label>
            <input
              type="password"
              {...register("password2", {
                required: "Ce champ est requis",
              })}
              className="w-full border px-3 py-2 rounded outline-blue-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            S'inscrire
          </button>

          <div className="mt-6 flex flex-col gap-4 justify-center">
            <button className="px-4 py-2 flex gap-6 items-center justify-center border border-black rounded-md ">
              <img src={logoChrome} alt="" className="w-8 h-8 object-cover" />
              <span>Continuer avec Google</span>
            </button>
            <button className="px-4 py-2 flex gap-6 items-center justify-center border border-black rounded-md ">
              <img src={facebook} alt="" className="w-8 h-8 object-cover" />
              <span>Continuer avec Facebook</span>
            </button>
          </div>

          <div className="mt-4 text-center">
            <p className="text-gray-600">
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

export default Inscription;
