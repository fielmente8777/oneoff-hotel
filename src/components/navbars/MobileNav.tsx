"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navBarData } from "./navBarData";

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
const MobileNav: React.FC<MobileNavProps> = ({ isOpen, setIsOpen }) => {
  const pathName = usePathname();
  return (
    <header
      className={`fixed top-0 left-0 w-5/6 h-screen bg-secondary z-50 transform transition-transform duration-300 ${isOpen ? "-translate-x-" : "-translate-x-[100%]"}`}
    >
      <nav>
        <ul className="flex flex-col gap-4 p-8">
          {navBarData.map((link, idx) => (
            <li key={idx} className="w-full">
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`w-full block text-white hover:text-tertiary capitalize text-lg transition-all duration-300 ease-in-out ${link.href === pathName ? "text-tertiary" : ""}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MobileNav;
