import DashboardUser from "../pages/auth/users/DashboardUser";
import ProfileUser from "../pages/auth/users/ProfileUser";

const userRoutes = [
  { path: "/dashboard", element: DashboardUser },
  { path: "/profileUser", element: ProfileUser },
];

export default userRoutes;
