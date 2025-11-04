import { contacts } from "@/utils/constant";

export const DevelopWithUsPageData = {
  bannerData: {
    title: "LOREM IPSUM",
    subTitle: "DEVELOP WITH US",
    images: ["/Develop1.jpg", "/Develop2.jpg", "/Develop3.jpg"],
  },

  whyChooseUs: {
    title: "TRANSFORM SPACES INTO EXPERIENCES!",
    subTitle: "WHY DEVELOP WITH US?",
    description: [
      "Partnering with ONE//OFF Hotels means aligning with a brand that dares to redefine hospitality. We believe in creating spaces that inspire, connect, and leave a lasting impression. As a hotel brand driven by design, individuality, and meaningful experiences, we bring a distinctive identity and proven operational expertise to every collaboration. With ONE//OFF Hotels, you don’t just partner with a brand—you join a movement that turns ordinary stays into extraordinary stories.",
      "Join us for a one-on-one chat with the One Off Hotels team to explore your ideas and opportunities.",
    ],
    src: "/developWithUs.png",
    link: {
      label: "CONTACT: " + contacts.phoneNumbers[1],
      href: "tel:" + contacts.phoneNumbers[1],
    },
  },
};
