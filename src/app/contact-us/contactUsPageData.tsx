import { contacts } from "@/utils/constant";
import { EmailIcon } from "@/utils/Icons";
import { PhoneIcon, AddressIcon } from "../../utils/Icons";

export const contactUsPageData = {
  bannerData: {
    images: [
      "/contact-us/bnr/Rectangle-2.webp",
      "/contact-us/bnr/Rectangle-3.webp",
      "/contact-us/bnr/Rectangle-4.webp",
      "/contact-us/bnr/Rectangle-5.webp",
      "/contact-us/bnr/Rectangle-6.webp",
    ],
  },
  contactUsData: {
    title: "CONTACT US TODAY!",
    subTitle: "WE’D LOVE TO HEAR FROM YOU",
    src: "",
    links: [
      {
        title: "Email Address:",
        label: contacts.emails[1],
        href: "mailto:" + contacts.emails[1],
        icon: <EmailIcon />,
      },
      {
        title: "Phone:",
        label: contacts.phoneNumbers[0],
        href: "tel:" + contacts.phoneNumbers[0],
        icon: <PhoneIcon />,
      },
      {
        title: "Address:",
        label: contacts.locationsAddress.delhi.address,
        href: contacts.locationsAddress.delhi.link,
        icon: <AddressIcon />,
      },
    ],
  },
};
