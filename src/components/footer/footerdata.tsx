import { contacts } from "@/utils/constant";
import { JSX } from "react";
import { IoLocationSharp } from "react-icons/io5";
import {
  FillCallIcon,
  FillFaceBook,
  FillInstagramIcon,
  FillLinkedin,
  FillMailIcon,
  FillPinterest,
} from "../../utils/Icons";

interface FooterDataProps {
  logo: string;
  description: string;
  link: {
    label: string;
    href: string;
  };
  socialMediaUrls: {
    label: string;
    href: string;
    icon: JSX.Element;
  }[];
  listOfLinks: {
    title: string;
    links: {
      label: string;
      href: string;
      icon?: JSX.Element;
    }[];
  }[];
  images: string[];
}

export const footerData: FooterDataProps = {
  logo: "/logo2.png",
  description: "Reserve your ultimate holiday!",
  link: {
    label: "BOOK NOW",
    href: contacts.bookingCta.oneOffDelhi,
  },
  socialMediaUrls: [
    {
      label: Object.keys(contacts.socialMediaUrls)[0],
      href: contacts.socialMediaUrls.facebookUrl,
      icon: <FillFaceBook />,
    },
    {
      label: Object.keys(contacts.socialMediaUrls)[1],
      href: contacts.socialMediaUrls.instagramUrl,
      icon: <FillInstagramIcon />,
    },
    {
      label: Object.keys(contacts.socialMediaUrls)[2],
      href: contacts.socialMediaUrls.linkedinUrl,
      icon: <FillLinkedin />,
    },
    {
      label: Object.keys(contacts.socialMediaUrls)[3],
      href: contacts.socialMediaUrls.pinterestUrl,
      icon: <FillPinterest />,
    },
  ],
  listOfLinks: [
    {
      title: "LINKS",
      links: [
        { label: "CULTURE", href: "/culture/" },
        { label: "XPERIENCES", href: "/xperiences/" },
        // { label: "DESTINATION", href: "/destination/" },
        { label: "CONTACT", href: "/contact-us/" },
        { label: "BLOG", href: "/blog/" },
      ],
    },
    {
      title: "USEFUL INFO",
      links: [
        { label: "DEVELOP WITH US", href: "/develop-with-us/" },
        { label: "PRIVACY POLICY", href: "/privacy-policy/" },
        { label: "TERMS & CONDITIONS", href: "/terms-and-conditions/" },
        { label: "CANCELLATION POLICY", href: "/cancellation-policy/" },
      ],
    },
    {
      title: "REACH US AT",
      links: [
        {
          label: contacts.emails[1],
          href: "mailto:" + contacts.emails[1],
          icon: <FillMailIcon />,
        },
        {
          label: contacts.phoneNumbers[0],
          href: "tel:" + contacts.phoneNumbers[0],
          icon: <FillCallIcon />,
        },
        {
          label: contacts.addresses[0],
          href: "",
          icon: <IoLocationSharp />,
        },
      ],
    },
  ],
  images: [
    "/Rectangle-17.png",
    "/Rectangle-18.jpg",
    // "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/one-off-hotels/home/img-24.png",
    // "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/one-off-hotels/home/img-23.png",
    // "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/one-off-hotels/home/img-13.png",
    "/Rectangle-20.png",
    "/Rectangle-21.png"
    // "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/one-off-hotels/home/img-14.png",
  ],
};
