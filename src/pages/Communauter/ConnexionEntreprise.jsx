import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FaBuilding } from "react-icons/fa";

function ConnexionEntreprise() {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const user = {
    email: "entreprise@gmail.com",
    password: "pass1234",
  };

  const onSubmit = async (formData) => {
    try {
      if (
        formData.email === user.email &&
        formData.password === user.password
      ) {
        toast.success("Connexion réussie !");
        reset();
        navigate("/dashboard-communaute");
      } else {
        toast.error("Email ou mot de passe incorrect !");
      }
    } catch (err) {
      console.error("Login error: ", err);
      toast.error("Une erreur est survenue, veuillez réessayer.");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Partie gauche – Texte de bienvenue entreprise */}
      <div className="lg:w-1/2 bg-green-700 text-white p-12 flex items-center">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <FaBuilding className="text-5xl text-white" />
            <h1 className="text-4xl font-bold leading-tight">
              Espace Entreprise
            </h1>
          </div>
          <p className="text-lg">
            Connectez-vous pour gérer vos offres d’emploi, suivre les
            candidatures, et entrer en relation avec les meilleurs profils du
            marché.
          </p>
        </div>
      </div>

      {/* Partie droite – Formulaire de connexion */}
      <div className="lg:w-1/2 flex items-center justify-center p-6">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-8 rounded-lg w-full max-w-xl"
        >
          <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
            Connexion
          </h2>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Mot de passe
            </label>
            <input
              type="password"
              {...register("password", { required: true })}
              className="w-full border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
          >
            Se connecter
          </button>

          <div className="flex items-center justify-between mt-6 max-sm:flex-col-reverse gap-4">
            <p className="text-green-600">
              <Link to={"/fwd-entreprise"}>Mot de passe oublié ?</Link>
            </p>
            <p className="text-center text-gray-600">
              Vous n’avez pas encore de compte ?
              <Link
                to="/register-entreprise"
                className="text-green-600 font-medium ml-1 hover:underline"
              >
                S’inscrire
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ConnexionEntreprise;
