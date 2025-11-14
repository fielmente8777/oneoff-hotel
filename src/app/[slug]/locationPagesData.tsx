import { contacts } from "@/utils/constant";
import { IoLocationSharp } from "react-icons/io5";
export const locationPageData = [
  {
    slug: "varanasi",
    metaData: {
      title: "One Off Dashashwamedh",
      description: "One Off Dashashwamedh",
    },
    bannerData: {
      images: ["/Rectangle1.png"],
    },
    aboutLocation: {
      title: "ONE OFF DASHASHWAMEDH",
      description: [
        "Stay in the heart of Varanasi at our beautifully designed 5-room boutique hotel, just steps from the Kashi Vishwanath Temple and Ganga ghats. Each room is a cozy, 300 sqft retreat with minimalist interiors, modern comforts, and hotel-style luxury. Enjoy the charm of the old city with everything within walking distance—temples, aartis, boat rides, and more. The perfect blend of aesthetic design, comfort, and location.",
      ],
      link: {
        label: "VARANASI",
        href: "",
        icon: <IoLocationSharp />,
      },
    },
    rooms: {
      title: "One Off DASHASHWAMEDH",
      description: [
        "Welcome to our 5-room boutique hotel in the spiritual heart of Varanasi—just 2 minutes from Kashi Vishwanath Temple and 5 minutes from the Ganga ghats. Each 300 sqft room offers minimalist design, warm lighting, and handcrafted details for a serene stay amidst the city’s vibrant energy.",
      ],
      links: [
        {
          label:
            "ADDRESS: D-38/26-1NM, Hauz Katora, Varanasi, Next to Baba Thandai, Gadoliya, Varanasi - 221001",
          href: "",
        },
        {
          label: "CONTACT: " + contacts.phoneNumbers[0],
          href: "tel:" + contacts.phoneNumbers[0],
        },
        {
          label: "BOOK NOW",
          href: "",
        },
      ],
      amenities: [""],
      images: [
        "/DSC07476.jpg",
        "/Img/Rectangle 4077.png",
        "/bnr-slide3.webp",
        "/Img/image00020.webp",
        "/Img/Rectangle 4079.png",
        "/Img/Rectangle 4080.png",
      ],
    },

    gallery: {
      title: "EXPLORE",
      subTitle: "OUR GALLERY",
      images: [
        "/gallery1.png",
        "/about2.png",
        "/gallery4.jpg",
        "/gallery5.jpg",
        "/gallery6.jpg",
        "/gallery7.jpg",
        "/gallery8.jpg",
        "/gallery9.jpg",
        "/gallery10.jpg",
        "/gallery11.jpg",
        "/gallery2.png",
        "/gallery12.jpg",
      ],
      button: "VIEW MORE",
    },
  },
  {
    slug: "jaipur",
    metaData: {
      title: "One Off",
      description: "One Off",
    },
    upComingData:{
      location:"JAIPUR",
      title:"SOMETHING EXCITING IS COMING SOON, STAY TUNED!",
      link:{
        label:"FOR RESERVATIONS: " + contacts.phoneNumbers[0],
        href:"tel:" + contacts.phoneNumbers[0]
      },
      images:["/upcoming1.png","/upcoming2.png"]
    }
  },
  {
    slug: "delhi",
    metaData: {
      title: "One Off",
      description: "One Off",
    },
    upComingData:{
      location:"DELHI",
      title:"SOMETHING EXCITING IS COMING SOON, STAY TUNED!",
      link:{
        label:"FOR RESERVATIONS: " + contacts.phoneNumbers[0],
        href:"tel:" + contacts.phoneNumbers[0]
      },
      images:["/upcoming1.png","/upcoming2.png"]
    }
  },
];
