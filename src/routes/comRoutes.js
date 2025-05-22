import CandidaturesRecues from "../components/comunauter/CandidaturesRecues.jsx";
import PublierOffre from "../components/comunauter/PublierOffre.jsx";
import DashboardCom from "../pages/Communauter/DashboardCom.jsx";
import MesRecrus from "../pages/Communauter/MesRecrus.jsx";
import ProfileC from "../pages/Communauter/ProfileC.jsx";

const comRoutes = [
  { path: "/dashboard-communaute", element: DashboardCom },
  { path: "/profileCom", element: ProfileC },
  { path: "/mes-recrutements", element: MesRecrus },
  { path: "/publier-offre", element: PublierOffre },
  { path: "/candidatures-recues", element: CandidaturesRecues },
];

export default comRoutes;
