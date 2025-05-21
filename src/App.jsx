import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import userRoutes from "./routes/userRoutes";
import Layout from "./layouts/Layout";
import NotFound from "../NotFound";
import publicRoutes from "./routes/publicRoutes";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./routes/ProtectRoutes";
import comRoutes from "./routes/comRoutes";
import LayoutCom from "./layouts/Layout.Com";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        {publicRoutes.map(({ path, element: Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}

        {/* User Routes */}
        <Route path="/" element={<Layout />}>
          {userRoutes.map(({ path, element: Element }) => (
            <Route key={path} path={path} element={<Element />} />
          ))}
        </Route>

        {/* communauter router */}
        <Route path="/" element={<LayoutCom />}>
          {comRoutes.map(({ path, element: Element }) => (
            <Route key={path} path={path} element={<Element />} />
          ))}
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}
