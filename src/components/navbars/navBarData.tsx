import { NavLinksProps } from "@/@types/type";

export const navBarData: NavLinksProps[] = [
  {
    label: "Our Hotels",
    href: "",
    subLinks: [
      {
        location: "Delhi",
        label: "The South Delhi Edition",
        href: "/the-south-delhi-edition/",
        sub: "A 13-room design hotel in the vibrant heart of Greater Kailash II.",
      },
      {
        location: "Varanasi",
        label: "One Off Dashashwamedh",
        href: "/one-off-dashashwamedh/",
        sub: "A serene design-led retreat steps from Varanasi's iconic ghats.",
      },
      {
        location: "Varanasi",
        label: "One Off X",
        href: "/one-off-x/",
        sub: "A restored ancestral bungalow inspired by Wabi Sabi living.",
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
