import { NavLinksProps } from "@/@types/type";

export const navBarData: NavLinksProps[] = [
  {
    label: "Locations",
    href: "",
    subLinks: [
      {
        label: "Varanasi",
        href: "/varanasi",
      },
      {
        label: "Jaipur (Up coming)",
        href: "#",
      },
      {
        label: "Delhi (Up coming)",
        href: "#",
      },
    ],
  },
  {
    label: "Culture",
    href: "/culture",
  },
  {
    label: "XPERIENCES",
    href: "/xperiences",
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
