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
      href: contacts.socialMediaUrls.facebook,
      icon: <FillFaceBook />,
    },
    {
      label: Object.keys(contacts.socialMediaUrls)[1],
      href: contacts.socialMediaUrls.instagram,
      icon: <FillInstagramIcon />,
    },
    {
      label: Object.keys(contacts.socialMediaUrls)[2],
      href: contacts.socialMediaUrls.linkedin,
      icon: <FillLinkedin />,
    },
    {
      label: Object.keys(contacts.socialMediaUrls)[3],
      href: contacts.socialMediaUrls.pinterest,
      icon: <FillPinterest />,
    },
  ],
  listOfLinks: [
    {
      title: "LINKS",
      links: [
        { label: "Culture", href: "/culture/" },
        { label: "Xperiences", href: "/xperiences/" },
        { label: "Contact", href: "/contact-us/" },
        { label: "Blog", href: "/blog/" },
        { label: "Develop with us", href: "/develop-with-us/" },
        { label: "Privacy Policy", href: "/privacy-policy/" },
        { label: "Terms & Conditions", href: "/terms-and-conditions/" },
        { label: "Cancellation Policy", href: "/cancellation-policy/" },
      ],
    },
    {
      title: "our hotels",
      links: [
        { label: "The South Delhi Edition", href: "/the-south-delhi-edition/" },
        { label: "One Off X Assi", href: "/one-off-x/" },
        { label: "One Off Dashashwamedh", href: "/one-off-dashashwamedh/" },
      ],
    },
    {
      title: "social",
      links: [
        {
          label: Object.keys(contacts.socialMediaUrls)[0],
          href: contacts.socialMediaUrls.instagram,
        },
        {
          label: Object.keys(contacts.socialMediaUrls)[1],
          href: contacts.socialMediaUrls.instagram,
        },
        {
          label: Object.keys(contacts.socialMediaUrls)[2],
          href: contacts.socialMediaUrls.linkedin,
        },
        {
          label: Object.keys(contacts.socialMediaUrls)[3],
          href: contacts.socialMediaUrls.pinterest,
        },
      ],
    },
    // {
    //   title: "REACH US AT",
    //   links: [
    //     {
    //       label: contacts.emails[1],
    //       href: "mailto:" + contacts.emails[1],
    //       icon: <FillMailIcon />,
    //     },
    //     {
    //       label: contacts.phoneNumbers[0],
    //       href: "tel:" + contacts.phoneNumbers[0],
    //       icon: <FillCallIcon />,
    //     },
    //     {
    //       label: contacts.addresses[0],
    //       href: contacts.locationsAddress.delhi.link,
    //       icon: <IoLocationSharp />,
    //     },
    //   ],
    // },
  ],
  images: [
    "/Rectangle-17.png",
    "/Rectangle-18.jpg",
    // "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/one-off-hotels/home/img-24.png",
    // "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/one-off-hotels/home/img-23.png",
    // "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/one-off-hotels/home/img-13.png",
    "/Rectangle-20.png",
    "/Rectangle-21.png",
    // "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/one-off-hotels/home/img-14.png",
  ],
};
