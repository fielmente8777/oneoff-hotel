import { NavLinksProps } from "@/@types/type";

export const navBarData: NavLinksProps[] = [
  {
    label: "Locations",
    href: "",
    subLinks: [
      {
        location: "Delhi",
        label: "The South Delhi Edition",
        href: "/the-south-delhi-edition/",
        sub: "Boutique stays in the heart of the world’s oldest living city",
      },
      {
        location: "Varanasi",
        label: "One Off Dashashwamedh",
        href: "/one-off-dashashwamedh/",
        sub: "Boutique stays in the heart of the world’s oldest living city",
      },
      {
        label: "One Off X",
        href: "/one-off-x/",
        sub: "Boutique stays in the heart of the world’s oldest living city",
      },

      {
        location: "Upcoming",
        label: "Jaipur (Upcoming)",
        href: "/jaipur/",
        sub: "An upcoming minimalist stay inspired by the Pink City’s heritage",
      },
    ],
  },
  {
    label: "Culture",
    href: "/culture/",
  },
  {
    label: "XPERIENCES",
    href: "/xperiences/",
  },
  {
    label: "Develop With Us",
    href: "/develop-with-us/",
  },
  {
    label: "Contact Us",
    href: "/contact-us/",
  },
];
