import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function MotDePasseOublie() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simule l'envoi de l'email
    if (email) {
      toast.success("Un lien de réinitialisation a été envoyé !");
      setEmail("");
    } else {
      toast.error("Veuillez entrer une adresse email valide");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Mot de passe oublié ?
        </h2>
        <p className="text-gray-600 text-center mb-4">
          Entrez votre adresse email pour recevoir un lien de réinitialisation.
        </p>

        <form onSubmit={handleSubmit}>
          <label className="block text-gray-700 mb-2 font-medium">
            Adresse Email
          </label>
          <input
            type="email"
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mb-4"
            placeholder="exemple@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Envoyer le lien
          </button>
        </form>

        <div className="text-center mt-6">
          <Link
            to="/login"
            className="text-green-600 hover:underline font-medium"
          >
            Retour à la connexion
          </Link>
        </div>
      </div>
    </div>
  );
}
