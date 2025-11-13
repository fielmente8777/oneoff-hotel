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
        label: "Jaipur (Upcoming)",
        href: "/jaipur",
      },
      {
        label: "Delhi (Upcoming)",
        href: "/delhi",
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
