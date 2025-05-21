import Accueil from "../pages/Accueil";
import Connexion from "../pages/auth/Connexion";
import Inscription from "../pages/auth/Inscription";
import ForgotPwd from "../pages/auth/ForgotPwd";
import ConnexionEntreprise from "../pages/Communauter/ConnexionEntreprise";
import InscriptionEntreprise from "../pages/Communauter/InscriptionEntreprise";
import MotDePasseOublie from "../pages/Communauter/MotDePasseOublie";

const publicRoutes = [
  { path: "/", element: Accueil },
  { path: "/login", element: Connexion },
  { path: "/register", element: Inscription },
  { path: "/register-entreprise", element: InscriptionEntreprise },
  { path: "/login-entreprise", element: ConnexionEntreprise },
  { path: "/fwd-pwd", element: ForgotPwd },
  { path: "/fwd-entreprise", element: MotDePasseOublie },
];

export default publicRoutes;
