import { contacts } from "@/utils/constent";
import {
  FillFacebookIcon,
  FillInstagramIcon,
  FillLocationIcon,
  FillMailIcon,
} from "@/utils/icons";
import { JSX } from "react";

interface FooterData {
  logo: string;
  socialMediaUrls: {
    label: string;
    href: string;
    icon: JSX.Element;
  }[];
  call: {
    label: string;
    href: string;
  }[];
  listOfDataLinks: {
    title: string;
    description?: string;
    links: {
      label: string;
      href: string;
      icon?: JSX.Element;
    }[];
  }[];
}

export const footerData: FooterData = {
  logo: "/logo.webp",
  socialMediaUrls: [
    {
      label: Object.keys(contacts.socialMediaUrls)[0],
      href: contacts.socialMediaUrls.facebookUrl,
      icon: <FillFacebookIcon />,
    },
    {
      label: Object.keys(contacts.socialMediaUrls)[1],
      href: contacts.socialMediaUrls.instagramUrl,
      icon: <FillInstagramIcon />,
    },
  ],
  call: [
    {
      label: contacts.phoneNumbers[0],
      href: "tel: " + contacts.phoneNumbers[0],
    },
    {
      label: contacts.phoneNumbers[1],
      href: "tel: " + contacts.phoneNumbers[1],
    },
  ],
  listOfDataLinks: [
    {
      title: "ABOUT THE RESORT",
      description:
        "Tucked amidst rocks, river trails, and forest whispers, Nature on the Rocks is Shivpuri’s best kept secret for those who seek stillness. Come sit by the fire, under a sky full of stars, and just… be.",
      links: [
        {
          label: "BOOK YOUR STAY",
          href: "",
        },
      ],
    },
    {
      title: "LOCATION",
      links: [
        {
          label: contacts.address,
          href: contacts.addressUrl,
          icon: <FillLocationIcon />,
        },
        {
          label: contacts.emails[0],
          href: "mailto:" + contacts.emails[0],
          icon: <FillMailIcon />,
        },
        {
          label: contacts.emails[1],
          href: "mailto:" + contacts.emails[1],
          icon: <FillMailIcon />,
        },
      ],
    },
  ],
};
