import React from "react";
import { AppNavbar } from "../Navbar/AppNavbar";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";

function AppLayout() {
  return (
    <div className="">
      <AppNavbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
