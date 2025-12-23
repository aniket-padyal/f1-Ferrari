const navLinks = [
  {
    id: "cocktails",
    title: "Cocktails",
  },
  {
    id: "about",
    title: "About Us",
  },
  {
    id: "work",
    title: "The Art",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const cocktailLists = [
  {
    name: "Chapel Hill Shiraz",
    country: "AU",
    detail: "Battle",
    price: "$10",
  },
  {
    name: "Caten Malbee",
    country: "AU",
    detail: "Battle",
    price: "$49",
  },
  {
    name: "Rhino Pale Ale",
    country: "CA",
    detail: "750 ml",
    price: "$20",
  },
  {
    name: "Irish Guinness",
    country: "IE",
    detail: "600 ml",
    price: "$29",
  },
];

const mockTailLists = [
  {
    name: "Tropical Bloom",
    country: "US",
    detail: "Battle",
    price: "$10",
  },
  {
    name: "Passionfruit Mint",
    country: "US",
    detail: "Battle",
    price: "$49",
  },
  {
    name: "Citrus Glow",
    country: "CA",
    detail: "750 ml",
    price: "$20",
  },
  {
    name: "Lavender Fizz",
    country: "IE",
    detail: "600 ml",
    price: "$29",
  },
];

const profileLists = [
  {
    imgPath: "/images/profile1.png",
  },
  {
    imgPath: "/images/profile2.png",
  },
  {
    imgPath: "/images/profile3.png",
  },
  {
    imgPath: "/images/profile4.png",
  },
];

const performanceLists = [
  {
    id: 1,
    key: "Power Unit",
    value: "1.6L Turbo Hybrid V6",
  },
  {
    id: 2,
    key: "Total Power Output",
    value: "~1000 HP",
  },
  {
    id: 3,
    key: "Top Speed",
    value: "350+ km/h",
  },
  {
    id: 4,
    key: "Acceleration",
    value: "0–100 km/h in ~2.4s",
  },
  {
    id: 5,
    key: "Energy Recovery System (ERS)",
    value: "Kinetic + Thermal",
  },
  {
    id: 6,
    key: "Fuel Flow Limit",
    value: "100 kg/hour (FIA regulated)",
  },
  {
    id: 7,
    key: "Rev Limit",
    value: "15,000 RPM",
  },
];

const chasisLists = [
  {
    id: 1,
    key: "Chassis",
    value: "Carbon Fiber Monocoque",
  },
  {
    id: 2,
    key: "Transmission",
    value: "8-Speed Semi-Automatic Gearbox",
  },
  {
    id: 3,
    key: "Weight",
    value: "798 kg (Including Driver, FIA Spec)",
  },
  {
    id: 4,
    key: "Suspension",
    value: "Push-Rod Front & Rear",
  },
  {
    id: 5,
    key: "Braking System",
    value: "Carbon-Carbon Disc Brakes",
  },
  {
    id: 6,
    key: "Aero Concept",
    value: "High-Downforce Package",
  },
  {
    id: 7,
    key: "Steering System",
    value: "Power-Assisted Rack & Pinion",
  },
];

const storeInfo = {
  heading: "Where to Find Us",
  address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
  contact: {
    phone: "(555) 987-6543",
    email: "hello@jsmcocktail.com",
  },
};

const openingHours = [
  { day: "Mon–Thu", time: "11:00am – 12am" },
  { day: "Fri", time: "11:00am – 2am" },
  { day: "Sat", time: "9:00am – 2am" },
  { day: "Sun", time: "9:00am – 1am" },
];

const socials = [
  {
    name: "Instagram",
    icon: "/images/insta.png",
    url: "#",
  },
  {
    name: "X (Twitter)",
    icon: "/images/x.png",
    url: "#",
  },
  {
    name: "Facebook",
    icon: "/images/fb.png",
    url: "#",
  },
];

const driverLists = [
  {
    id: 1,
    name: "Charles Leclerc",
    image: "/images/leclerc.png",
    title: "Ferrari’s Rising Force",
    description:
      "Raised in the Ferrari ecosystem, Charles Leclerc represents raw speed, precision, and fearless racing. He embodies the future of Scuderia Ferrari.",
   
  },
  {
    id: 2,
    name: "Lewis Hamilton",
    image: "/images/hamilton.png",
    title: "Seven-Time World Champion",
    description:
      "One of the greatest drivers in Formula 1 history, Lewis Hamilton brings unmatched experience, racecraft, and championship mentality to Scuderia Ferrari.",
   
  },
];

export {
  navLinks,
  cocktailLists,
  mockTailLists,
  profileLists,
  performanceLists,
  chasisLists,
  openingHours,
  storeInfo,
  socials,
  driverLists,
};
