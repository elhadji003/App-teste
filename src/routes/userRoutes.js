import DashboardUser from "../pages/auth/users/DashboardUser";
import ProfileUser from "../pages/auth/users/ProfileUser";
import Offres from "../pages/Offres";

const userRoutes = [
  { path: "/dashboard", element: DashboardUser },
  { path: "/profileUser", element: ProfileUser },
  { path: "/offres", element: Offres },
];

export default userRoutes;
