import { contacts } from "@/utils/constant";

export const aboutPageData = {
  bannerData: {
    title: "ONE OF A KIND EVERY TIME",
    subTitle: "ONE OFF HOTELS",
    images: ["/about2.png"],
    description:
      "A Switch from the Ordinary. The Hotel You Didn't Expect, But Always Wanted. At One Off Hotels, every stay is designed to surprise, inspire, and delight not just a stay, a ONE OFF experience.",
    videoSrc:
      "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/one-off-hotels/MODEL+REEL+2.mp4",
    thumbNailSrc: "/about1.png",
  },
  aboutStayPage: {
    title: "WELCOME TO ONE OFF HOTELS",
    subTitle: "A WORLD BUILT FOR THE BOLD",
    description:
      "ONE-OFF Hotels celebrates individuality, offering thoughtfully designed spaces that blend seamlessly with their surroundings and reflect a true sense of place. Rooted in sustainability and community, each property encourages guests to rest, connect, and truly be themselves. Inspired by the philosophy of Wabi Sabi, we embrace beauty in authenticity and imperfection creating stays that are not just luxurious, but meaningful and enriching.",
    link: {
      label: "BOOK NOW",
      href: contacts.bookingCta.oneOffDelhi,
    },
  },
  images: [
    { src: "/about-us/Rectangle-4072.png" },
    {
      videoSrc: "/video/ONE-OFF-GK-4.mp4",
    },
    {
      src: "/about-us/Rectangle-4071.png",
    },
    {
      src: "/about-us/Rectangle-4074.png",
    },
    {
      videoSrc:
        "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/one-off-hotels/MODEL+REEL+2.mp4",
    },
    {
      src: "/about-us/Rectangle-4073.png",
    },
    {
      src: "/about-us/Rectangle-4075.png",
    },
    {
      videoSrc:
        "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/one-off-hotels/PropertyReel.mp4",
    },
    {
      src: "/about-us/Rectangle-4098.png",
    },
    {
      src: "/about-us/Rectangle-4078.png",
    },
    {
      videoSrc:
        "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/one-off-hotels/ModelReel1.mp4",
    },
    {
      src: "/about-us/Rectangle-4100.png",
    },
  ],
  destination: {
    cards: [
      {
        image: "/about-us/curated-destinations.png",
        title: "CURATED DESTINATIONS",
        description: [
          "Every destination has a story waiting to be discovered. We curate remarkable stays that immerse you in local culture, timeless landscapes, and authentic experiences, turning every journey into a meaningful memory.",
          "DESTINATIONS COMING SOON: Jaipur, Varanasi.",
        ],
      },
      {
        image: "/about-us/designed.png",
        title: "DESIGNED FOR MODERN TRAVELLERS",
        description: [
          "Every room and shared space is thoughtfully designed with contemporary interiors, premium amenities, high-speed connectivity, and personalized service creating the perfect balance between work, relaxation, and exploration.",
        ],
      },
    ],
  },
  stayAt: {
    title: "OUR FOUNDER",
    subTitle: "ADITYA",
    description: [
      `I’m Aditya, a lawyer turned entrepreneur who traded the courtroom for building brands and experiences that spark curiosity and connection. Guided by the mantra “Stay Foolish, Stay Hungry,” I build ventures that blend global influences with fresh, future focused thinking.`,

      "ONE OFF Hotels is my canvas for reinvention, a place where individuality is celebrated, stories are crafted through design and detail, and every stay feels like a one-of-a-kind experience.",
    ],
    src: "/about-us/founder.png",
    link: {
      label: "Develop with us",
      href: "/develop-with-us/",
    },
  },
  joinUsAt: {
    title: "JOIN US AT ONE-OFF HOTELS",
    description:
      "Where we transform the ordinary into the extraordinary, offering stays that are as unique as you are.",
    link: {
      label: "CONTACT US",
      href: "/contact-us",
    },
    src: "/about-us/join.jpg",
  },
};
