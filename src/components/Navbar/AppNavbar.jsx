import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavList } from "./NavList";
import { Link, useLocation } from "react-router";

export function AppNavbar() {
  const location = useLocation();
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl px-6 shadow-none ">
      <div className="flex flex-row lg:flex-col items-center justify-between">
        <header className="flex w-2/3 h-1/3 lg:w-full justify-end lg:justify-center">
          <Link to="/">
            <img
              src="/images/title/title.jpg"
              alt="AATRA AAMIR PHOTOGRAPHY"
              className="object-center cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-95"
            />
          </Link>
        </header>

        <div className="hidden lg:block mt-4">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} color="black" />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} color="black" />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
