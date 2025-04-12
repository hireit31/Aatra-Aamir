import { Typography } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router";
export function NavList() {
  const isActive = (path) => {
    if (location.pathname == path) {
      return "text-black";
    }
    return "text-blue-gray-700";
  };
  return (
    <ul className=" flex flex-col pt-5 gap-2 lg:mb-0 lg:pt-0 lg:flex-row lg:items-center lg:gap-x-14 font-sans">
      <Typography
        as="li"
        variant="small"
        color="gray"
        className={`w-full p-1 text-base ${isActive("/products")}`}
      >
        <Link
          to="/products"
          className="flex w-full justify-center hover:text-black  transition-colors uppercase text-center"
        >
          PRODUCT
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="gray"
        className={`w-full p-1 text-base ${isActive("/food")}`}
      >
        <Link
          to="/food"
          className="flex justify-center hover:text-black transition-colors uppercase"
        >
          FOOD
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="gray"
        className={`w-full p-1 text-base ${isActive("/ecommerce")}`}
      >
        <Link
          to="/ecommerce"
          className="flex justify-center hover:text-black transition-colors uppercase"
        >
          ECOMMERCE
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="gray"
        className={`w-full p-1 text-base ${isActive("/about")}`}
      >
        <Link
          to="/about"
          className="flex justify-center hover:text-black transition-colors uppercase"
        >
          ABOUT
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="gray"
        className={`w-full p-1 text-base ${isActive("/contact")}`}
      >
        <Link
          to=""
          className="flex justify-center hover:text-black transition-colors uppercase"
        >
          CONTACT
        </Link>
      </Typography>
    </ul>
  );
}
