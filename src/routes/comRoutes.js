import DashboardCom from "../pages/Communauter/DashboardCom.jsx";
import MesRecrus from "../pages/Communauter/MesRecrus.jsx";
import ProfileC from "../pages/Communauter/ProfileC.jsx";

const comRoutes = [
  { path: "/dashboard-communaute", element: DashboardCom },
  { path: "/profileCom", element: ProfileC },
  { path: "/mes-recrutements", element: MesRecrus },
];

export default comRoutes;
