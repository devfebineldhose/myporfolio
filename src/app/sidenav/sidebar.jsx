"use client";
import MenuButton from "@/components/menuButton";
import clsx from "clsx";
import Link from "next/link";

function Sidebar({ isOpen, toggle = () => {} }) {
  return (
    <div
      className={`overflow-hidden justify-center bg-green-200 grid pt-[120px] lg:invisible xl:invisible : ${clsx(
        {
          "transition-all duration-500 h-screen fixed z-10 ": true,
          "-left-60 w-60": !isOpen,
          "left-0 w-60": isOpen,
        }
      )}`}
    >
      <button className="absolute right-0 p-5" onClick={toggle}>
        {/* Close icon */}
        <MenuButton name="close" />
      </button>

      <ul className="sidebar-nav text-center  text-xl ">
        <li>
          <Link href="/about" onClick={toggle}>
            <p>About Us</p>
          </Link>
        </li>
        <li>
          <Link href="/services" onClick={toggle}>
            <p>Services</p>
          </Link>
        </li>
        <li>
          <Link href="/contactme" onClick={toggle}>
            <p>Contactme</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
export { Sidebar };
