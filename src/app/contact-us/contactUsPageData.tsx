import { contacts } from "@/utils/constant";

export const contactUsPageData = {
  bannerData: {
    images: [""],
  },
  contactUsData: {
    title: "CONTACT US TODAY!",
    subTitle: "WE’D LOVE TO HEAR FROM YOU",
    src: "",
    links: [
      {
        title: "Email Address:",
        label: contacts.emails[0],
        href: "mailto:" + contacts.emails[0],
        icon: "",
      },
      {
        title: "Phone",
        label: contacts.phoneNumbers[0],
        href: "tel:" + contacts.phoneNumbers[0],
        icon: "",
      },
      {
        title: "Address:",
        label: contacts.addresses[0],
        href: contacts.addresses[0],
        icon: "",
      },
    ],
  },
};
