import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useGetMeQuery } from "../backend/features/auth/authAPI";
import SidebarC from "../components/comunauter/SidebarC";
import NavbarC from "../components/comunauter/NavbarC";

const Layout = () => {
  const { data: user } = useGetMeQuery();

  const isCommunity = user?.role === "community";

  return (
    <div className="min-h-screen flex">
      {isCommunity ? <SidebarC /> : <Sidebar />}
      <main className="flex-1 ml-24 max-sm:ml-20">
        {isCommunity ? <NavbarC /> : <Navbar />}
        <div className="mt-16 py-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
