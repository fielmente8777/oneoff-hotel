import { contacts } from "@/utils/constant";

export const ExperiencePageData = {
  bannerData: {
    images: [
      "/Xperiences/bnr/Rectangle-1.webp",
      "/Xperiences/bnr/Rectangle-2.webp",
      "/Xperiences/bnr/Rectangle-4076.webp",
      "/Xperiences/bnr/Rectangle-4079.webp",
      "/Xperiences/bnr/Rectangle-4080.webp",
      "/Xperiences/bnr/Rectangle-4081.webp",
      "/Xperiences/bnr/Rectangle-4082.webp",
    ],
  },
  experience: [
    {
      location: "VARANASI EXPERIENCES",
      title: "EXPERIENCE",
      subTitle: "VARANASI",
      description:
        "Discover the timeless charm of the world’s oldest living city. From serene sunrise boat rides on the Ganges to the mesmerizing evening Aarti at Dashashwamedh Ghat, every moment in Varanasi is a journey into spirituality and tradition. Stroll through winding lanes, explore ancient temples, savor local delicacies, and witness the soulful rhythm of life along the ghats. Varanasi is not just a destination it’s an experience that stays with you forever.",
      links: [
        {
          label: `Reach us at ${contacts.contactCta.varanasi} or send an enquiry, we’ll connect with you shortly.`,
          href: "tel:" + contacts.contactCta.varanasi,
        },
        {
          label: "enquire now",
          href: contacts.whatsAppCta.varanasi,
        },
      ],
      images: [
        "/exp1.jpg",
        "/exp2.jpg",
        "/exp3.jpg",
        "/exp4.jpg",
        "/exp5.jpg",
        "/exp6.jpg",
        "/exp7.jpg",
      ],
    },

    {
      location: "DELHI EXPERIENCES",
      title: "EXPERIENCE",
      subTitle: "DELHI",
      description:
        "Our Old Delhi's Belly Tour takes you into the heart of this frenetic and vibrant city to discover its rich history, singular flavors, and sprawling markets that house everything from exotic spices to wedding finery. Your guide will introduce you to the best of the city's street food as you stroll the labyrinthine streets and alleys, giving you the best that Delhi has to offer. This tour is available every day and leaves with guaranteed departures.",
      links: [
        {
          label: `Reach us at ${contacts.contactCta.delhi} or send an enquiry, we’ll connect with you shortly.`,
          href: "tel:" + contacts.contactCta.delhi,
        },
        {
          label: "enquire now",
          href: contacts.whatsAppCta.delhi,
        },
      ],
      images: [
        "/Xperiences/delhi/exp-1.png",
        "/Xperiences/delhi/exp-5.png",
        "/Xperiences/delhi/exp-2.png",
        "/Xperiences/delhi/exp-4.png",
        "/Xperiences/delhi/exp-6.png",
        "/Xperiences/delhi/exp-3.png",
        "/Xperiences/delhi/exp-7.png",
      ],
    },
  ],
  tourData: [
    {
      location: "VARANASI EXPERIENCES",
      title: "BOAT TOURS",
      descriptionlist: [
        "Experience Varanasi from the Ganges with our curated boat tours—serene sunrise rides, soulful evening Aarti views, or luxury cruises on the Bajra. Celebrate special moments, capture timeless photos, or simply soak in the city’s spiritual essence from the water. Each journey is guided by local boatmen who share stories of faith and tradition. Discover Varanasi’s timeless charm as the river reflects the rhythm of life itself.",
      ],
      src: "/img.jpg",
      images: ["/img.jpg", "/BoatTour1.jpg", "/exp/one-off-exp13.jpg"],
      popUpData: [
        {
          title: "1. Subah ‘e’ Banaras – Sunrise Boat Tour",
          desc: "Drift along the calm Ganges as the first rays of dawn paint the ghats in gold. Witness the city awaken with chants, bells, and the magic of morning rituals.",
        },
        {
          title: "2. Sham ‘e’ Banaras – Sunset/Evening with Ganga Aarti",
          desc: " Experience the divine glow of lamps and chants during the iconic Ganga Aarti. As the sun sets, the river transforms into a canvas of light and devotion.",
        },
        {
          title: "3. Traditional Row Boat Tours",
          desc: " Sail the old-fashioned way on hand-rowed boats, guided by local oarsmen. A peaceful journey that connects you to Varanasi’s timeless rhythm.",
        },
        {
          title: "4. Luxury Boat Tours",
          desc: " Cruise in comfort and style with our well-appointed luxury boats. Enjoy panoramic views, refreshments, and the serene flow of the sacred river.",
        },
        {
          title: "5. Customised Boat Tours",
          desc: " Create your own Ganges story with tailor-made experiences. From intimate rides to themed tours, every detail is curated to your wish.",
        },
        {
          title: "6. Celebrate Your Special Day",
          desc: " Mark birthdays, anniversaries, or proposals on the tranquil Ganges. A unique, soul-stirring way to make your moments unforgettable.",
        },
        {
          title: "7. Photography Boat Tours",
          desc: " Capture Varanasi’s magic from the best vantage point—the river. Perfect for sunrise hues, ghats’ life, and candid moments of devotion.",
        },
        {
          title: "8. Houseboat/Bajra for Parties",
          desc: " Host gatherings or private celebrations aboard our elegant Bajra. Enjoy music, dining, and the charm of floating under the Varanasi sky.",
        },
      ],
    },
    {
      location: "VARANASI EXPERIENCES",
      title: "WALKING TOURS",
      descriptionlist: [
        "Step into Varanasi’s soul with our guided walking tours. Discover hidden gems in Gupta Kashi, stroll through South City’s vibrant streets, or experience devotion on the Spiritual Walk and Kashi Darshan. Feel the city’s energy after dark on the Night Walk, savor local flavors on the Food Tour, and explore colorful markets on the Shopping Tour, capturing the true essence of Banaras.",
      ],
      src: "/exp4.jpg",
      images: [
        "/exp4.jpg",
        "/exp5.jpg",
        "/exp/one-off-exp9.jpg",
        "/exp/one-off-exp2.jpg",
      ],
      popUpData: [
        {
          title: "1. Gupta Kashi – Ancient and Hidden Varanasi",
          desc: "Uncover the city’s secret temples, forgotten shrines, and ancient alleys that whisper tales of old Kashi. A walk through time and timeless faith.",
        },
        {
          title: "2. South City",
          desc: "Walk Explore the southern stretch of Varanasi, where culture meets calm. Discover local life, serene temples, and the quiet charm beyond the ghats.",
        },
        {
          title: "3. Spiritual Walk",
          desc: "Immerse yourself in the essence of devotion as you walk through sacred sites and experience the rhythm of daily prayers and rituals.",
        },
        {
          title: "4. Kashi Darsan",
          desc: "A guided walk through Varanasi’s most iconic landmarks. Experience the divine energy and cultural pulse of India’s spiritual capital.",
        },
        {
          title: "5. A Walk to Complete Your Trip to Kashi",
          desc: "End your journey with a soulful stroll through the city’s heart. A perfect blend of stories, sights, and moments that stay with you.",
        },
        {
          title: "6. A Walk to Feel the City – Night Walk",
          desc: "Experience Varanasi after dusk—tranquil ghats, glowing lamps, and the mystical charm of the city under starlit skies.",
        },
        {
          title: "7. Food Tour",
          desc: "Taste your way through Varanasi’s vibrant streets with local delicacies and age-old recipes that define its culinary soul.",
        },
        {
          title: "8. Shopping Tour",
          desc: "Wander through bustling markets filled with silks, handicrafts, and souvenirs. A colorful experience of Kashi’s artistry and spirit.",
        },
      ],
    },
    {
      location: "VARANASI EXPERIENCES",
      title: "PHOTOGRAPHY TOUR",
      description:
        "Capture Varanasi’s essence on our photography tours. Explore lively streets and ghats on a Street Photography tour, document traditions with our Documentary Movie experiences, or create lasting memories with a Pre-Wedding Shoot along the sacred Ganges and historic lanes. Each tour is designed to inspire creativity while showcasing the vibrant culture, timeless beauty, and unique spirit of Kashi.",
      src: "/photography-tour.png",
      images: [
        "/photography-tour.png",
        "/exp5.jpg",
        "/exp/one-off-exp9.jpg",
        "/exp/one-off-exp2.jpg",
      ],
      popUpData: [
        {
          title: "1. Street Photography",
          desc: "Capture the heartbeat of Varanasi through its bustling lanes, vibrant ghats, and everyday moments. A paradise for photographers seeking raw emotion and timeless frames.",
        },
        {
          title: "2. Documentary Movies",
          desc: "Bring stories to life amid Varanasi’s spiritual and cultural backdrop. From rituals to river life, every frame here tells a story of faith and humanity.",
        },
        {
          title: "3. Pre-Wedding Shoot",
          desc: "Frame your love story against the soulful charm of the Ganges and ancient ghats. A perfect blend of tradition, romance, and timeless beauty.",
        },
      ],
    },
    {
      location: "VARANASI EXPERIENCES",
      title: "CITY TOURS",
      description:
        "Discover the vibrant spirit of Varanasi with our expertly guided city tours. Explore the city in depth with a Full Day City Tour or experience the local charm on a South City Tour. Venture beyond the city limits with a Sarnath Trip, visiting the sacred site where Lord Buddha gave his first sermon. For a fun and immersive ride through the bustling streets, try our Tuk-Tuk Tours, perfect for seeing the city like a local. Each tour offers a unique perspective, blending history, culture, and everyday life in the holy city of Kashi.",
      src: "/city-tours.png",
      images: [
        "/city-tours.png",
        "/exp/one-off-exp3.jpg",
        "/exp/one-off-exp12.jpg",
      ],
      popUpData: [
        {
          title: "1. Full Day City",
          desc: "Tour Discover Varanasi in its entirety—from sacred temples and lively ghats to hidden alleys and cultural landmarks. A complete immersion into the city’s spirit and soul.",
        },
        {
          title: "2. South City Tour",
          desc: "Journey through the quieter side of Varanasi, where heritage meets serenity. Explore ancient temples, local life, and the city’s southern charm.",
        },
        {
          title: "3. Sarnath Trip",
          desc: "Visit the sacred site where Lord Buddha delivered his first sermon. Explore ancient stupas, monasteries, and the peaceful aura of this historic place.",
        },
        {
          title: "4. Tuk-Tuk Tours",
          desc: "Zip through Varanasi’s narrow lanes and vibrant bazaars in a fun, local way. Perfect for those who want to see more, faster, and with a touch of adventure.",
        },
      ],
    },

    {
      location: "VARANASI EXPERIENCES",
      title: "SPIRITUAL YATRAS",
      description:
        "Embark on a spiritual journey through Varanasi with our curated yatras. Join the Panchkroshi pilgrimage, explore the 12 Jyotirlinga and 12 Aaditya Yatras, or seek blessings at Astha Bhairav, 9 Durga, and Astha Vinayak temples. Each yatra offers a deep connection to Kashi’s sacred heritage, immersing travelers in devotion, tradition, and the timeless spiritual essence of this holy city.",
      src: "/spiritual-yatras.png",
      images: [
        "/spiritual-yatras.png",
        "/exp/one-off-exp7.jpg",
        "/exp/one-off-exp5.jpg",
      ],
      popUpData: [
        {
          title: "1. Panchkroshi Yatra",
          desc: "Embark on the sacred 80 km pilgrimage around Kashi’s divine boundary. Visit ancient temples and experience the city’s spiritual essence in its purest form.",
        },
        {
          title: "2. 12 Jyotirlinga Yatra",
          desc: "A soul-stirring journey to the twelve sacred abodes of Lord Shiva. Experience divine energy and the unity of faith across India’s holiest shrines.",
        },
        {
          title: "3. 12 Aaditya Yatra",
          desc: "Pay homage to the twelve Sun temples dedicated to Lord Surya. A radiant journey symbolizing light, life, and spiritual awakening.",
        },
        {
          title: "4. Astha Bhairav",
          desc: "Visit the eight powerful Bhairav temples that guard the holy city. A path of protection, devotion, and deep spiritual connection.",
        },
        {
          title: "5. 9 Durga",
          desc: "Celebrate feminine divinity with visits to nine revered forms of Goddess Durga. A journey of strength, grace, and divine blessings.",
        },
        {
          title: "6. Astha Vinayak",
          desc: "Seek the blessings of Lord Ganesha at eight sacred temples. A yatra of wisdom, new beginnings, and spiritual fulfillment.",
        },
      ],
    },
    {
      location: "VARANASI EXPERIENCES",
      title: "DAY TRIP",
      description:
        "Extend your journey from Varanasi with our thoughtfully planned day trips. Visit the holy confluence at Prayagraj, explore Bodhgaya’s sacred sites, discover the legendary city of Ayodhya, or feel the divine aura of Vindhyachal. Each trip blends history, culture, and spirituality, offering travelers a seamless way to experience the region’s iconic landmarks and sacred heritage in just one enriching day.",
      src: "/BoatTour1.jpg",
      images: [
        "/BoatTour1.jpg",
        "/exp/one-off-exp11.jpg",
        "/exp/one-off-exp10.jpg",
      ],
      popUpData: [
        {
          title: "1. A Trip to Prayagraj",
          desc: "Visit the holy confluence of the Ganga, Yamuna, and Saraswati at Triveni Sangam. Explore temples and experience the serene spirituality of this sacred city.",
        },
        {
          title: "2. Bodhgaya Trip",
          desc: "Journey to the land of enlightenment where Lord Buddha attained Nirvana. Visit the Mahabodhi Temple and soak in the peace of this timeless pilgrimage site.",
        },
        {
          title: "3. Ayodhya Trip",
          desc: "Explore the birthplace of Lord Ram and witness the grandeur of Ram Mandir. A journey filled with devotion, history, and divine charm.",
        },
        {
          title: "4. Vindhyachal Trip",
          desc: "Pay respects to Goddess Vindhyavasini at her powerful hilltop shrine. Surrounded by scenic beauty, this trip blends devotion with nature’s calm.",
        },
      ],
    },

    {
      location: "VARANASI EXPERIENCES",
      title: "TOUR PACKAGES",
      description:
        "Discover Varanasi with our guided city tours. Enjoy a Full Day City Tour or explore local life on the South City Tour. Visit the sacred Sarnath Trip, where Buddha gave his first sermon, or experience the bustling streets on a fun Tuk-Tuk Tour. Each journey blends history, culture, and the everyday rhythm of Kashi, offering a unique and immersive experience.",
      src: "/tour-packages.png",
      images: [
        "/tour-packages.png",
        "/exp/one-off-exp8.jpg",
        "/exp/one-off-exp6.jpg",
      ],
      popUpData: [
        {
          title: "1. A Day in Varanasi",
          desc: "Experience the best of Varanasi in a single day—from sunrise on the Ganges to evening Aarti and everything in between. Perfect for a short yet soulful visit.",
        },
        {
          title:
            "2. Complete Varanasi – Hinduism, Buddhism, Culture, Wisdom & Liberation",
          desc: "Dive deep into the spiritual and cultural essence of Kashi. Explore sacred temples, ancient monasteries, and the philosophies that define India’s oldest living city.",
        },
        {
          title: "3. 2N / 3D Varanasi",
          desc: "Spend two nights soaking in the mystique of Varanasi. From temple visits to boat rides and local walks, it’s a perfect blend of culture and calm.",
        },
        {
          title: "4. Golden Triangle",
          desc: "Explore India’s most iconic circuit—Delhi, Agra, and Jaipur—where history, architecture, and heritage come alive in royal splendour.",
        },
        {
          title: "5. 2N / 3D Varanasi–Prayagraj Trip",
          desc: "Journey through two sacred cities where faith meets the flow of rivers. Witness the confluence at Triveni Sangam and the divine aura of Kashi.",
        },
        {
          title: "6. 4N / 5D Varanasi–Prayagraj–Ayodhya",
          desc: "A spiritual odyssey through three holy cities—Varanasi, Prayagraj, and Ayodhya. Discover India’s deep-rooted traditions, temples, and timeless tales of devotion.",
        },
      ],
    },

    {
      location: "DELHI EXPERIENCES",
      title: "Old Delhi Sensory & Street Food WALK",
      descriptionlist: [
        "Step into the vibrant heart of Shahjahanabad and discover Delhi through its aromas, flavors, and centuries-old streets. Wander through bustling bazaars, hidden spice markets, and iconic eateries while uncovering stories of the city's Mughal past.",
        "Price: ₹5,000 + Taxes",
      ],
      src: "/Xperiences/delhi/old-delhi-sensory-and-street-food-walk.png",
      images: [
        "/Xperiences/delhi/old-delhi-sensory-and-street-food-walk.png",
        "/Xperiences/delhi/old-delhi-sensory-and-street-food-walk-2.png",
      ],
      popUpData: [
        {
          title: "OLD DELHI SENSORY & STREET FOOD WALK",
          desclist: [
            "Experience Delhi with all five senses on an immersive exploration of Old Delhi's historic lanes. Accompanied by a knowledgeable local guide, navigate through Chandni Chowk's bustling markets, ancient havelis, and legendary food establishments that have served generations of Delhiites.",
          ],
        },
        {
          title: "HIGHLIGHTS INCLUDE:",
          desclist: [
            "• Walking through the historic lanes of Shahjahanabad",
            "• Exploring Khari Baoli, Asia's largest spice market",
            "• Sampling authentic Old Delhi street food",
            "• Discovering hidden architectural gems and heritage buildings",
            "• Learning stories of Mughal Delhi and its evolution through time",
            "• Visiting iconic family-run culinary institutions",
          ],
        },
        {
          title: "DURATION:",
          desclist: [" 3-4 Hours"],
        },
        {
          title: "IDEAL FOR:",
          desclist: [" Food Lovers, Culture Enthusiasts, First-Time Visitors."],
        },
      ],
    },
    {
      location: "DELHI EXPERIENCES",
      title: "LODHI ART DISTRICT & ARCHITECTURE WALK",
      descriptionlist: [
        "Explore India's first open-air public art district where contemporary creativity meets modern urban planning. Discover striking murals, hidden artistic narratives, and the unique architectural character of Lodhi Colony.",

        "Price: ₹5,000 + Taxes",
      ],
      src: "/Xperiences/delhi/lodhi-art-district-and-architecture-walk.png",
      images: [
        "/Xperiences/delhi/lodhi-art-district-and-architecture-walk.png",
        "/Xperiences/delhi/lodhi-art-district-and-architecture-walk-2.png",
      ],
      popUpData: [
        {
          title: "Lodhi Art District & Architecture Walk",
          desc: "",
          desclist: [
            "Uncover a different side of Delhi through a guided exploration of the celebrated Lodhi Art District. Walk among vibrant large-scale murals created by renowned artists from around the world while learning about the transformation of public spaces through art.This experience also examines the architectural significance of Lodhi Colony, one of Delhi's earliest planned residential neighbourhoods",
          ],
        },
        {
          title: "HIGHLIGHTS INCLUDE:",
          desc: "",
          desclist: [
            "• Guided walk through the Lodhi Art District",
            "• Exploration of internationally acclaimed street art",
            "• Insights into urban design and public art initiatives",
            "• Stories behind notable murals and artists",
            "• Understanding Delhi's evolving creative landscape",
            "• Photography opportunities throughout the district",
          ],
        },
        {
          title: "DURATION:",
          desc: "",
          desclist: [" 2-3 Hours"],
        },
        {
          title: "IDEAL FOR:",
          desc: "",
          desclist: ["  Art Lovers, Photographers, Design Enthusiasts."],
        },
        // {
        //   title: "5. A Walk to Complete Your Trip to Kashi",
        //   desc: "End your journey with a soulful stroll through the city’s heart. A perfect blend of stories, sights, and moments that stay with you.",
        // },
        // {
        //   title: "6. A Walk to Feel the City – Night Walk",
        //   desc: "Experience Varanasi after dusk—tranquil ghats, glowing lamps, and the mystical charm of the city under starlit skies.",
        // },
        // {
        //   title: "7. Food Tour",
        //   desc: "Taste your way through Varanasi’s vibrant streets with local delicacies and age-old recipes that define its culinary soul.",
        // },
        // {
        //   title: "8. Shopping Tour",
        //   desc: "Wander through bustling markets filled with silks, handicrafts, and souvenirs. A colorful experience of Kashi’s artistry and spirit.",
        // },
      ],
    },
    {
      location: "DELHI EXPERIENCES",
      title: "The Architectural Heritage of Sunder Nursery & Humayun's Tomb",
      descriptionlist: [
        "Discover one of Delhi's most remarkable heritage restorations. Wander through beautifully landscaped gardens, historic monuments, and the magnificent Humayun's Tomb in a serene cultural setting.",

        "Price: ₹5,000 + Taxes",
      ],
      src: "/Xperiences/delhi/the-architectural-heritage-of-sunder-nursery-and-humayuns-tomb.png",
      images: [
        "/Xperiences/delhi/the-architectural-heritage-of-sunder-nursery-and-humayuns-tomb.png",
        "/Xperiences/delhi/the-architectural-heritage-of-sunder-nursery-and-humayuns-tomb-2.png",
      ],
      popUpData: [
        {
          title:
            "The Architectural Heritage of Sunder Nursery & Humayun's Tomb",
          desc: "",
          desclist: [
            "Begin your morning amid one of Delhi's most celebrated heritage landscapes. This carefully curated walk combines architectural history, conservation success stories, and tranquil green spaces.",

            "Explore the restored monuments and botanical diversity of Sunder Nursery before visiting the UNESCO-listed Humayun's Tomb, a masterpiece of Mughal architecture and precursor to the Taj Mahal.",
          ],
        },
        {
          title: "HIGHLIGHTS INCLUDE:",
          desc: "",
          desclist: [
            "• Guided exploration of Sunder Nursery",
            "• Visit to Humayun's Tomb",
            "• Insights into Mughal architecture and garden design",
            "• Stories of conservation and restoration efforts",
            "• Scenic pathways, water features, and historic structures",
            "• Exceptional photography opportunities",
          ],
        },
        {
          title: "DURATION:",
          desc: "",
          desclist: [" 3-4 Hours"],
        },
        {
          title: "IDEAL FOR:",
          desc: "",
          desclist: [
            " History Enthusiasts, Architecture Lovers, Nature Seekers.",
          ],
        },
      ],
    },
    {
      location: "DELHI EXPERIENCES",
      title: "The Artisans of Shahpur Jat & Hauz Khas VILLAGE",
      descriptionlist: [
        "Discover Delhi's creative pulse through its most vibrant urban villages. Explore independent boutiques, contemporary art spaces, and hidden studios where tradition and modern design converge",

        "Price: ₹5,000 + Taxes",
      ],
      src: "/Xperiences/delhi/the-artisans-of-shahpur-jat-and-hauz-khas-village.png",
      images: [
        "/Xperiences/delhi/the-artisans-of-shahpur-jat-and-hauz-khas-village.png",
        "/Xperiences/delhi/the-artisans-of-shahpur-jat-and-hauz-khas-village-2.png",
      ],
      popUpData: [
        {
          title: "The Artisans of Shahpur Jat & Hauz Khas Village",
          desc: "",
          desclist: [
            "Venture beyond the usual tourist trail into two of Delhi's most dynamic creative neighbourhoods. This curated exploration introduces you to emerging designers, artisan studios, contemporary galleries, and cultural entrepreneurs shaping the city's modern identity.Experience a unique blend of heritage architecture, independent craftsmanship, and contemporary design.",
          ],
        },
        {
          title: "HIGHLIGHTS INCLUDE:",
          desc: "",
          desclist: [
            "• Guided exploration of Shahpur Jat and Hauz Khas Village",
            "• Visits to select design studios and boutiques",
            "• Contemporary art galleries and creative spaces",
            "• Stories of Delhi's evolving artisan community",
            "• Opportunities to interact with local creators",
            "• Insights into modern Indian design trends",
          ],
        },
        {
          title: "DURATION:",
          desc: "",
          desclist: ["3-4 Hours"],
        },
        {
          title: "IDEAL FOR:",
          desc: "",
          desclist: [
            "Fashion Enthusiasts, Designers, Art Collectors, Creative Travelers.",
          ],
        },
      ],
    },

    {
      location: "DELHI EXPERIENCES",
      title: "An Ultra-Premium Day Trip to Agra",
      descriptionlist: [
        "Embark on a seamless luxury journey to Agra and witness India's most iconic monuments. Enjoy private transportation, expert storytelling, and exclusive perspectives on the Taj Mahal and Agra Fort.",

        "Price: ₹10,000 + Taxes",
      ],
      src: "/Xperiences/delhi/an-ultra-premium-day-trip-to-agra.png",
      images: [
        "/Xperiences/delhi/an-ultra-premium-day-trip-to-agra.png",
        "/Xperiences/delhi/an-ultra-premium-day-trip-to-agra-2.png",
      ],
      popUpData: [
        {
          title: "An Ultra-Premium Day Trip to Agra",
          desc: "",
          desclist: [
            "Experience the timeless grandeur of Agra through a thoughtfully curated private excursion. Travel comfortably with a dedicated driver and expert guide who brings the city's rich history to life through captivating storytelling.",
            "Explore the magnificent Taj Mahal and the imposing Agra Fort while enjoying a carefully planned itinerary designed to maximize comfort and cultural immersion.",
          ],
        },
        {
          title: "HIGHLIGHTS INCLUDE:",
          desc: "",
          desclist: [
            "• Private return transportation from Delhi",
            "• Guided visit to the Taj Mahal",
            "• Exploration of Agra Fort",
            "• Expert heritage storyteller throughout the journey",
            "• Access to lesser-known viewpoints and photo locations",
            "• Flexible pace tailored to guest preferences",
          ],
        },
        {
          title: "DURATION:",
          desc: "",
          desclist: ["Full Day"],
        },
        {
          title: "IDEAL FOR:",
          desc: "",
          desclist: [
            "Luxury Travelers, History Enthusiasts, First-Time India Visitors.",
          ],
        },
        // {
        // //   title: "5. 9 Durga",
        // //   desc: "Celebrate feminine divinity with visits to nine revered forms of Goddess Durga. A journey of strength, grace, and divine blessings.",
        // // },
        // // {
        // //   title: "6. Astha Vinayak",
        // //   desc: "Seek the blessings of Lord Ganesha at eight sacred temples. A yatra of wisdom, new beginnings, and spiritual fulfillment.",
        // // },
      ],
    },
  ],
};
