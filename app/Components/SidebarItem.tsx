import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

type SidebarItemProps = {
  icon: IconType;
  href: string;
  active?: boolean;
  label: string;
  className?: string;
};

const SidebarItem: React.FC<SidebarItemProps> = (props) => {
  const { icon: Icon, href, active, label, className } = props;
  return (
    <Link
      href={href}
      className={twMerge(
        `flex flex-row items-center h-auto w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1`,
        active && "text-white",
        className
      )}>
      <Icon size={26} />
      <p>{label}</p>
    </Link>
  );
};

export default SidebarItem;
