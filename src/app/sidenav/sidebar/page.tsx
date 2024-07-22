import clsx from "clsx";
import Link from "next/link";

function Sidebar({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) {
  return (
    <div
      className={`sidebar-container  h-full overflow-hidden justify-center bg-white grid pt-[120px] left-0 z-10 sm:invisible ${clsx(
        {
          "transition-all duration-500 h-screen fixed z-10 ": true,
          "-left-80 w-80": !isOpen,
          "left-0 w-80": isOpen,
        }
      )}`}
    >
      <button className="absolute right-0 p-5" onClick={toggle}>
        {/* Close icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
        >
          <path
            fill="black"
            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
          />
        </svg>
      </button>

      <ul className="sidebar-nav text-center  text-xl bg-red-300">
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
          <Link href="/contacts" onClick={toggle}>
            <p>Contacts</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export { Sidebar };
