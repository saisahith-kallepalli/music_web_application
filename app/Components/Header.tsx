"use client";
import { useRouter } from "next/navigation";
import {
  HiHome,
  HiMagnifyingGlass,
  HiMiniChevronLeft,
  HiMiniChevronRight,
} from "react-icons/hi2";
import { twMerge } from "tailwind-merge";
import Button from "./Button";

type HeaderProps = {
  children: React.ReactNode;
  className?: string;
};

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { children, className } = props;

  const router = useRouter();
  return (
    <div
      className={twMerge(
        `h-fit bg-gradient-to-b p-6 from-emerald-800 `,
        className
      )}>
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            onClick={() => router.back()}
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition">
            <HiMiniChevronLeft className="text-white " size={35} />
          </button>
          <button
            onClick={() => router.forward()}
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition">
            <HiMiniChevronRight className="text-white " size={35} />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
            <HiHome className="text-black" size={28} />
          </button>
          <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
            <HiMagnifyingGlass className="text-black" size={28} />
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          <>
            <div>
              <Button className="bg-transparent text-neutral-300 font-medium">
                Sign Up
              </Button>
            </div>
            <div>
              <Button className="bg-white py-2 px-6">Log in</Button>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
