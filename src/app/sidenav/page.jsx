"use client";
import MenuButton from "@/components/menuButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sidebar } from "./sidebar";
import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="font-monts font-bold">
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <MenuButton toggle={toggle} />
      <div className=" flex flex-row justify-between sticky gap-10 items-center  invisible md:visible lg:visible xl:visible   z-10 fixed sm:p-5">
        <button>
          <Image alt="logo" src={"/Logo_Febin.png"} width={100} height={100} />
        </button>
        <div className="flex flex-shrink-0 w-auto  ">
          <Link
            href={"/"}
            className={`${
              pathname === "/" ? "border-yellow-400" : "border-transparent"
            } hover:bg-green-500 px-7 py-2 hover:rounded border-b-2 hover:border-transparent`}
          >
            Home
          </Link>
          {/* <Link
            href={"/recentWorks"}
            className={`${
              pathname === "/recentWorks"
                ? "border-yellow-400"
                : "border-transparent"
            } hover:bg-green-500 px-7 py-2 hover:rounded border-b-2 hover:border-transparent`}
          >
            Recent Works
          </Link> */}
          <Link
            href={"/contactme"}
            className={`${
              pathname === "/contactme"
                ? "border-yellow-400"
                : "border-transparent"
            } hover:bg-green-500 px-7 py-2 hover:rounded border-b-2 hover:border-transparent`}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
