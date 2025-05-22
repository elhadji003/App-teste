import DashboardUser from "../pages/auth/users/DashboardUser";
import ProfileUser from "../pages/auth/users/ProfileUser";
import Communauter from "../pages/Communautes";
import MesContrats from "../pages/MesContrats";
import MesPostulations from "../pages/MesPostulations";
import Notification from "../pages/Notification";
import Offres from "../pages/Offres";

const userRoutes = [
  { path: "/dashboard", element: DashboardUser },
  { path: "/profileUser", element: ProfileUser },
  { path: "/offres", element: Offres },
  { path: "/mes-postulations", element: MesPostulations },
  { path: "/notifications", element: Notification },
  { path: "/mes-contrats", element: MesContrats },
  { path: "/communauter", element: Communauter },
];

export default userRoutes;
