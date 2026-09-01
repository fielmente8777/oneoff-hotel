"use client";
import { useWebContext } from "@/contextApi/WebContext";
import { contacts } from "@/utils/constant";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import LinkButton from "../buttons/LinkButton";
import { Container } from "../sectionComponents";
import MobileNav from "./MobileNav";
import { navBarData } from "./navBarData";
import { useEffect, useState } from "react";

const NavBar = () => {
  const { setIsOpenMobileMenu, isOpenMobileMenu } = useWebContext();

  const pathName = usePathname();
  const paths = [
    "/",
    "/one-off-dashashwamedh/",
    "/one-off-x/",
    "/the-south-delhi-edition/",
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // threshold
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathName ? paths.includes(pathName) || pathName.includes("blog") : false)
    return null;

  return (
    <>
    <div
      className={`fixed flex inset-x-0 items-center justify-center top-0 z-50  transition-all ease-in-out duration-300  ${paths.includes(pathName) ? (isScrolled ? "bg-background backdrop-blur-sm" : "bg-transparent") : "bg-background backdrop-blur-sm"}`}
    >
      <header className={`max_screen border-b border-secondary w-full`}>
        <Container>
          <nav className="flex items-center justify-between py-3">
            <div className="">
              <Link
                href={"/"}
                className="flex relative md:h-[4rem] h-[2.6rem]  md:aspect-[4/1.25] aspect-[3/1]"
              >
                <Image
                  src="/logo1.png"
                  alt="one off hotel"
                  sizes="(max-width: 400px) 100vw, 400px"
                  fill
                />
              </Link>
            </div>
            <ul className="xl:flex hidden item-center gap-10">
              {navBarData.map((link, index) => {
                // const id = index + 1;
                return (
                  <li key={index + "vn"} className="relative nav">
                    <Link
                      href={link.href ? link.href : "#"}
                      className="relative text-nowrap tracking-widest py-2 uppercase font-bold text-sm flex items-center gap-1 text-dark"
                    >
                      {link.label}
                      <span className="span-border"></span>
                      {link.subLinks && (
                        <span className="icon duration-300 transition-all ease-in-out">
                          <FillDropDownIcon />
                        </span>
                      )}
                    </Link>
                    {link.subLinks && (
                      <span className="nav-1 backdrop-blur-md">
                        {link.subLinks.map((subLink, subIndex) => {
                          return (
                            <span
                              className="relative group nav-2 bg-background"
                              key={subIndex + "sub"}
                            >
                              {subLink.location && (
                                <span className="ps-4 py-2 font-semibold block uppercase">
                                  {subLink.location}
                                </span>
                              )}
                              <Link
                                href={subLink.href ? subLink.href : "#"}
                                className={`w-full tracking-wider py-2 px-4 flex flex-col gap-1 group font-bold text-sm text-dark ${pathName === subLink.href ? "bg-secondary !text-white" : ""}`}
                              >
                                <span className="uppercase">
                                  {" "}
                                  {subLink.label}
                                </span>
                                {subLink.sub && (
                                  <span className="text-sm">{subLink.sub}</span>
                                )}
                                {subLink.subLinks && (
                                  <span className="group-hover:rotate-90 -rotate-90 duration-300 transition-all ease-in-out">
                                    <FillDropDownIcon />
                                  </span>
                                )}
                              </Link>

                              {subLink.subLinks && (
                                <span className="nav-link">
                                  {subLink.subLinks?.map(
                                    (nestedSubLink, nestedIndex) => {
                                      return (
                                        <span
                                          className=""
                                          key={nestedIndex + 2}
                                        >
                                          <Link
                                            href={
                                              nestedSubLink.href
                                                ? nestedSubLink.href
                                                : "#"
                                            }
                                            className={`w-full text-nowrap py-2 px-4 flex items-center text-light gap-1 group uppercase font-bold text-sm hover:bg-gray-200 ${pathName === nestedSubLink.href ? "bg-primary !text-white" : ""}`}
                                          >
                                            {nestedSubLink.label}
                                          </Link>
                                        </span>
                                      );
                                    }
                                  )}
                                </span>
                              )}
                            </span>
                          );
                        })}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
            <LinkButton
              hide
              target="_blank"
              rel="noopener noreferrer"
              href={contacts.bookingCta.oneOffDelhi}
              label="Find a Room"
              variant="primary"
            />
            <div className="max-xl:block hidden">
              <button
                className={`xl:hidden text-3xl transition-all ease-in-out duration-300 ${isOpenMobileMenu ? "rotate-90" : ""}`}
                onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
              >
                {!isOpenMobileMenu ? <GiHamburgerMenu /> : <MdClose />}
              </button>

              <MobileNav />
            </div>
          </nav>
        </Container>
      </header>
    </div>

    <div className="xl:h-22 lg:h-20 h-16 bg-amber-200 border-b border-primary"></div>
    </>
  );
};

export default NavBar;

export const ArrowUpRight = () => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.5 4V10.5C12.5 10.6326 12.4473 10.7598 12.3535 10.8536C12.2598 10.9473 12.1326 11 12 11C11.8674 11 11.7402 10.9473 11.6464 10.8536C11.5527 10.7598 11.5 10.6326 11.5 10.5V5.20687L4.35372 12.3538C4.2599 12.4476 4.13265 12.5003 3.99997 12.5003C3.86729 12.5003 3.74004 12.4476 3.64622 12.3538C3.5524 12.2599 3.49969 12.1327 3.49969 12C3.49969 11.8673 3.5524 11.7401 3.64622 11.6462L10.7931 4.5H5.49997C5.36736 4.5 5.24019 4.44732 5.14642 4.35355C5.05265 4.25979 4.99997 4.13261 4.99997 4C4.99997 3.86739 5.05265 3.74021 5.14642 3.64645C5.24019 3.55268 5.36736 3.5 5.49997 3.5H12C12.1326 3.5 12.2598 3.55268 12.3535 3.64645C12.4473 3.74021 12.5 3.86739 12.5 4Z"
      fill="currentColor"
    />
  </svg>
);

export const FillDropDownIcon = () => (
  <svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.5 15L7.5 10H17.5L12.5 15Z" fill="#184B56" />
  </svg>
);
