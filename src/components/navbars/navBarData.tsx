import { NavLinksProps } from "@/@types/type";

export const navBarData: NavLinksProps[] = [
  {
    label: "Locations",
    href: "/locations",
    subLinks: [
      {
        label: "Varanasi",
        href: "/varanasi",
      },
      {
        label: "Jaipur/Up coming",
        href: "/mumbai",
      },
    ],
  },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Experiences",
    href: "/experiences",
  },
  {
    label: "Develop With Us",
    href: "/develop-with-us",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
];
