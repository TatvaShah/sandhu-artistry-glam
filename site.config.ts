import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Sandhu Artistry Glam",
  tagline: "Mobile makeup and hairstyling in Brampton, Mississauga, and the GTA. Inquire via DM for bookings.",
  category: "Mobile makeup and hair",
  schemaType: "BeautySalon",
  area: "Brampton / Mississauga (GTA), ON",
  siteUrl: "https://sandhu-artistry-glam.vercel.app",

  theme: {
    preset: "salon-chic",
    colors: { accent: "#8a7a6b" },
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Mobile glam in Brampton and the GTA",
    headline: "Soft glam, shimmer, and dreamy waves",
    subhead: "Makeup and hairstyling for parties and special occasions, brought to you. Mobile services only. Send a DM to book your date.",
    images: [
      { src: "/images/glam-2.jpg", alt: "Shimmery glam with a soft nude lip and loose waves" },
      { src: "/images/glam-10.jpg", alt: "Pinky bronzed glam with an updo" },
      { src: "/images/glam-1.jpg", alt: "Long glossy hair waves" },
    ],
    secondaryCta: { label: "See the looks", href: "#gallery" },
  },

  highlights: ["Mobile services only", "Makeup and hair", "Brampton and the GTA", "Book by Instagram DM"],

  about: {
    title: "Welcome to the glam corner",
    body: [
      "Sandhu Artistry Glam is the work of Ekam Sandhu, a mobile makeup artist and hairstylist based in Brampton, Ontario, serving Mississauga and the GTA.",
      "Expect shimmery and soft glam looks with flawless blending, pink toned smoky eyes and glossy lips, plus hairstyles like dreamy waves, messy buns with soft layers, and updos. Every appointment comes to you.",
    ],
    image: { src: "/images/glam-6.jpg", alt: "Soft glam with brushed out curls" },
  },

  menu: {
    label: "Services",
    title: "Makeup and hair",
    variant: "list",
    showPrices: false,
    priceNote: "Send a DM for pricing on your date and look.",
    groups: [
      {
        title: "Makeup",
        items: [
          { name: "Soft glam", description: "Flawless blending for an effortlessly glamorous finish." },
          { name: "Shimmery glam", description: "A touch of shimmer paired with a soft nude lip.", href: "https://www.instagram.com/p/DfApyJpuHLt/" },
          { name: "Party and event makeup", description: "Looks for parties and special occasions." },
        ],
      },
      {
        title: "Hairstyling",
        items: [
          { name: "Waves", description: "Soft, sleek, dreamy waves that go with every look.", href: "https://www.instagram.com/p/DfAqornOIMl/" },
          { name: "Messy bun", description: "Messy bun with soft face framing layers.", href: "https://www.instagram.com/p/Dex1afjun-6/" },
          { name: "Updos" },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent looks",
    items: [
      { src: "/images/glam-2.jpg", width: 1080, height: 1435, alt: "Shimmery glam with soft nude lip", caption: "Shimmery glam, soft nude lip", href: "https://www.instagram.com/p/DfApyJpuHLt/" },
      { src: "/images/glam-1.jpg", width: 1080, height: 1920, alt: "Long hair waves", caption: "These waves never miss", href: "https://www.instagram.com/p/DfAqornOIMl/" },
      { src: "/images/glam-3.jpg", width: 1080, height: 1440, alt: "Shimmery eye look", caption: "A touch of shimmer", href: "https://www.instagram.com/p/DfApp-GmaJN/" },
      { src: "/images/glam-5.jpg", width: 1080, height: 1279, alt: "Pink toned smoky eye glam", caption: "Pink tones and smoky eyes", href: "https://www.instagram.com/p/De3UoNSunsD/" },
      { src: "/images/glam-8.jpg", width: 1080, height: 1334, alt: "Messy bun with soft layers", caption: "Messy bun with soft layers", href: "https://www.instagram.com/p/Dex1afjun-6/" },
      { src: "/images/glam-10.jpg", width: 1080, height: 1393, alt: "Pinky bronzed glam", caption: "Pinky bronzed glam", href: "https://www.instagram.com/p/DcATNMDjvmI/" },
      { src: "/images/glam-4.jpg", width: 1080, height: 1917, alt: "Glam with waves and jewellery", caption: "Glow and elegance", href: "https://www.instagram.com/p/DfApQGiul0k/" },
      { src: "/images/glam-6.jpg", width: 1080, height: 1358, alt: "Soft glam with curls", caption: "Soft and feminine", href: "https://www.instagram.com/p/De3UDVnOAvR/" },
      { src: "/images/glam-9.jpg", width: 1080, height: 1435, alt: "Glam with dupatta and jewellery", caption: "Occasion glam", href: "https://www.instagram.com/p/Depal_SOwvb/" },
    ],
  },

  instagram: {
    handle: "sandhu_artistryglam",
    embeds: [],
  },

  order: {
    label: "How to book",
    title: "Book in a quick DM",
    intro: "Bookings are taken through Instagram. Tap the button to copy a starter message, then paste it into the chat.",
    dmMessage: "Hi Sandhu Artistry Glam! I would like to book.\nDate:\nOccasion:\nMakeup, hair, or both:\nLocation (mobile):",
    links: [],
    note: "Mobile services only.",
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book?", a: "Send a DM on Instagram with your date, occasion, and the look you want." },
    { q: "Do you have a studio?", a: "No. Services are mobile only, in Brampton, Mississauga, and the GTA." },
    { q: "What do you offer?", a: "Soft and shimmery glam makeup, party and event makeup, and hairstyling such as waves, messy buns, and updos." },
  ],

  contact: {
    title: "Contact and booking",
    area: "Brampton and Mississauga, Ontario (mobile only)",
    socials: [],
  },

  seo: {
    title: "Sandhu Artistry Glam | Mobile makeup and hair in Brampton",
    description: "Mobile makeup artist and hairstylist in Brampton, Mississauga, and the GTA. Soft glam, shimmery glam, waves, and updos. Book by Instagram DM.",
    keywords: ["makeup artist Brampton", "mobile makeup artist Mississauga", "GTA hairstylist", "soft glam makeup Brampton"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
