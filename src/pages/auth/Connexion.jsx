import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import logoChrome from "../../assets/images/google.png";
import facebook from "../../assets/images/facebook.png";

function Connexion() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const userSimule = {
    email: "user@gmail.com",
    password: "pass1234",
  };

  const onSubmit = (formData) => {
    if (
      formData.email === userSimule.email &&
      formData.password === userSimule.password
    ) {
      toast.success("Connexion réussie !");
      reset();
      navigate("/dashboard");
    } else {
      toast.error("Email ou mot de passe incorrect !");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      <div className="lg:w-1/2 bg-[url('/src/assets/images/cyton.jpg')] bg-cover bg-center p-8 text-white flex flex-col justify-center relative max-sm:hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-white font-bold bg-black bg-opacity-40 px-6 py-3 rounded animate__animated animate__backInLeft animate__slower">
          <h1 className="text-4xl font-bold mb-4">
            Rejoignez notre communauté
          </h1>
          <p className="text-xl mb-8">
            Connectez-vous pour accéder à toutes nos fonctionnalités exclusives.
          </p>
          <div className="hidden lg:block">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <p className="italic">
                "Une plateforme qui répond à vos besoins."
              </p>
              <p className="font-medium mt-2">- Utilisateur satisfait</p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 flex items-center justify-center p-2 max-sm:min-h-screen">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-8 rounded w-full max-w-md text-black"
        >
          <h1 className="text-3xl font-extrabold mb-4 text-center text-gray-800">
            Connexion
          </h1>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-medium">
              Email
            </label>
            <input
              type="text"
              {...register("email", { required: true })}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-medium">
              Mot de passe
            </label>
            <input
              type="password"
              name="password"
              {...register("password", { required: true })}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>

          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <label htmlFor="remember" className="ml-2 text-gray-700">
                Se souvenir de moi
              </label>
            </div>
            <a
              href="/fwd-pwd"
              className="text-blue-600 hover:underline text-sm"
            >
              Mot de passe oublié ?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Se connecter
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

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Pas encore de compte ?
              <Link
                to="/register"
                className="text-blue-600 hover:underline font-medium"
              >
                S'inscrire
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Connexion;
