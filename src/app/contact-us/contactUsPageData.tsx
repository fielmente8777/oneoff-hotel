import { contacts } from "@/utils/constant";
import { EmailIcon } from "@/utils/Icons";
import { PhoneIcon, AddressIcon } from "../../utils/Icons";

export const contactUsPageData = {
  bannerData: {
    // images: [
    //   "/contact-us/bnr/Rectangle-2.webp",
    //   "/contact-us/bnr/Rectangle-3.webp",
    //   "/contact-us/bnr/Rectangle-4.webp",
    //   "/contact-us/bnr/Rectangle-5.webp",
    //   "/contact-us/bnr/Rectangle-6.webp",
    // ],
    title: "CONTACT",
    subTitle: "ONE OFF HOTELS",
    description: "Whether you're planning your next stay or have a question, our team is always here to help. Reach out to us, and we'll ensure every step of your journey is seamless and memorable.",
    svgImg:"/contact-us/bnr/Vector.png",
    images:[
      "/contact-us/bnr/Rectangle-19.png",
      "/contact-us/bnr/Rectangle-4033.png",
      "/contact-us/bnr/DSC03306-1.png",
      "/contact-us/bnr/Rectangle-18.png",
      "/contact-us/bnr/Rectangle-17.png",
      "/contact-us/bnr/Rectangle-20.png",
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
        label2: contacts.phoneNumbers[1],
        href2: "tel:" + contacts.phoneNumbers[1],
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
