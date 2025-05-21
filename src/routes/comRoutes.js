import DashboardCom from "../pages/Communauter/DashboardCom.jsx";
import InscriptionCom from "../pages/Communauter/InscriptionCom.jsx";
import MesRecrus from "../pages/Communauter/MesRecrus.jsx";
import ProfileC from "../pages/Communauter/ProfileC.jsx";
import Offres from "../pages/Offres.jsx";

const comRoutes = [
  { path: "/dashboard-communaute", element: DashboardCom },
  { path: "/profileCom", element: ProfileC },
  { path: "/mes-recrutements", element: MesRecrus },
  { path: "/offres", element: Offres },
];

export default comRoutes;
