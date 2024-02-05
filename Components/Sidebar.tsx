"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiSearch } from "react-icons/hi";
import { HiHome } from "react-icons/hi2";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import { twMerge } from "tailwind-merge";
import Library from "./Library";
import { Song } from "@/types";

type Props = {
  songs: Song[];
  children: React.ReactNode;
};

const Sidebar: React.FC<Props> = ({ children, songs }) => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        active: pathname !== "/search",
        href: "/",
        label: "Home",
      },
      {
        icon: HiSearch,
        active: pathname === "/search",
        href: "/search",
        label: "Search",
      },
    ],
    [pathname]
  );
  return (
    <div className="flex h-full">
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
        <Box className="flex flex-col gap-y-4 px-5 py-4">
          <div>
            {routes.map((route: any, index: number) => {
              return <SidebarItem key={index} {...route} />;
            })}
          </div>
        </Box>
        <Box className="owerflow-y-auto h-full">
          <Library songs={songs} />
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
    </div>
  );
};

export default Sidebar;
