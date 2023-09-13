"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { AiFillCalculator } from "react-icons/ai";
import { IoIosCheckboxOutline } from "react-icons/io";
import { FaMoneyCheck } from "react-icons/fa";
import { Box, } from "./Box";
import { SidebarNavItem } from "./SidebarNavItem";



export const SidebarNav = () => {
  const pathname = usePathname();

  const routes = useMemo(() => [
    {
      icon: HiHome,
      label: "Home",
      active: pathname === "/",
      href: "/",
    },
    {
      icon: FaMoneyCheck,
      label: "Finances",
      active: pathname === "/Finances",
      href: "/Finances",
    },
    {
      icon: IoIosCheckboxOutline,
      label: "To-do",
      active: pathname === "/ToDo",
      href: "/ToDo",
    },
    {
      icon: AiFillCalculator,
      label: "Grades",
      active: pathname === "/grades",
      href: "/grades",
    }
  ], [pathname]);

  return (
    <Box>
      <div 
        className="
          flex
          flex-col
          gap-y-4
          px-5
          py-2
        ">
          {routes.map((items) => (
            <SidebarNavItem
              key={items.href}
              {...items}
            />
          ))}
      </div>
    </Box>
  );
}