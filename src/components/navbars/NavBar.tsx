import Link from "next/link";
import { footerData } from "../footer/footerdata";
import Image from "next/image";
import { FillCallIcon } from "@/utils/icons";

const NavBar = () => {
  return (
    <header className="bg-secondary max_screen_width py-4">
      <nav className="max_width flex items-center justify-between">
        {/* social media links */}
        <ul className="flex items-center gap-4">
          {footerData.socialMediaUrls.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="lg:w-10 w-8 aspect-square  rounded-sm flex items-center justify-center bg-white text-primary transition-all"
              >
                {item.icon}
              </Link>
            </li>
          ))}
        </ul>
        {/* logo */}
        <div className="max-w-[88px] w-full relative aspect-[4/4]  lg:ml-[15rem]">
          <Image src="/logo.webp" alt="logo" fill className="object-contain" />
        </div>
        {/* call contact */}
        <div className="flex items-center gap-2">
          {footerData.call.map((item, index) => (
            <div key={index} className="text-lg flex items-center">
              <Link
                key={index}
                href={`tel:${item.href.replace("tel:", "")}`}
                className="text-white font-semibold flex items-center gap-2"
              >
                {index === 0 && (
                  <span className="">
                    <FillCallIcon />
                  </span>
                )}
                <span className="max-md:hidden">{item.label}</span>
              </Link>
              {index < footerData.call.length - 1 && (
                <span className="text-white max-md:hidden">,</span>
              )}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
