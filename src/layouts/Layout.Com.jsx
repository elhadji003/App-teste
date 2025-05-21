import React from "react";
import { Outlet } from "react-router-dom";

import SidebarC from "../components/comunauter/SidebarC";
import NavbarC from "../components/comunauter/NavbarC";

const LayoutCom = () => {
  return (
    <div className="min-h-screen flex">
      <SidebarC />
      <main className="flex-1 ml-24 max-sm:ml-20">
        <NavbarC />
        <div className="mt-16 py-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default LayoutCom;
