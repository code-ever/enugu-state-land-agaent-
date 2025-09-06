import emptyLand1 from "@/assets/empty-land-1.jpg";
import emptyLand2 from "@/assets/empty-land-2.jpg";
import bungalowHouse from "@/assets/bungalow-house.jpg";
import commercialLand from "@/assets/commercial-land.jpg";
import luxuryDuplex from "@/assets/luxury-duplex.jpg";
import modernDuplex from "@/assets/modern-duplex.jpg";
import commercialPlot from "@/assets/commercial-plot.jpg";
import modernBungalow from "@/assets/modern-bungalow.jpg";
import residentialLand from "@/assets/residential-land.jpg";

export interface Property {
  id: string;
  title: string;
  type: "land" | "house";
  price: number;
  location: string;
  size: string;
  status: "available" | "sold" | "pending";
  imageUrl: string;
  agent: string;
  coordinates: { lat: number; lng: number };
  description: string;
  features: string[];
  yearBuilt?: number;
  bedrooms?: number;
  bathrooms?: number;
  parkingSpaces?: number;
}

const baseProperties: Property[] = [
  {
    id: "1",
    title: "Prime Residential Land in GRA Enugu",
    type: "land" as const,
    price: 25000000,
    location: "GRA Phase 1, Enugu",
    size: "1000 sqm",
    status: "available" as const,
    imageUrl: emptyLand1,
    agent: "Chike Okonkwo",
    coordinates: { lat: 6.4466, lng: 7.4932 },
    description: "Excellent location for residential development in the prestigious GRA area. The land comes with C of O and is ready for immediate development.",
    features: ["C of O Available", "Residential Area", "Good Road Access", "Electricity Available"]
  },
  {
    id: "2",
    title: "Modern 4-Bedroom Duplex",
    type: "house" as const,
    price: 45000000,
    location: "Independence Layout, Enugu",
    size: "350 sqm",
    status: "available" as const,
    imageUrl: bungalowHouse,
    agent: "Ada Nwankwo",
    coordinates: { lat: 6.4398, lng: 7.4951 },
    description: "Beautifully designed 4-bedroom duplex with modern amenities and spacious compound. Perfect for families.",
    features: ["4 Bedrooms", "3 Bathrooms", "Spacious Compound", "Modern Kitchen", "Generator House"],
    yearBuilt: 2019,
    bedrooms: 4,
    bathrooms: 3,
    parkingSpaces: 2
  },
  {
    id: "3",
    title: "Commercial Plot at New Haven",
    type: "land" as const,
    price: 35000000,
    location: "New Haven, Enugu",
    size: "1500 sqm",
    status: "pending" as const,
    imageUrl: commercialLand,
    agent: "Emeka Okafor",
    coordinates: { lat: 6.4514, lng: 7.5086 },
    description: "Strategic commercial land perfect for shopping complex or office development. Located in busy New Haven area.",
    features: ["Commercial Zone", "Strategic Location", "High Traffic Area", "Good Visibility"]
  },
  {
    id: "4",
    title: "Luxury Villa with Pool",
    type: "house" as const,
    price: 85000000,
    location: "Asokoro, Enugu",
    size: "600 sqm",
    status: "sold" as const,
    imageUrl: luxuryDuplex,
    agent: "Ngozi Eze",
    coordinates: { lat: 6.4531, lng: 7.4876 },
    description: "Luxury villa with swimming pool, modern facilities and premium finishes. Located in exclusive Asokoro district.",
    features: ["Swimming Pool", "5 Bedrooms", "4 Bathrooms", "Gym Room", "Servant Quarters", "Security House"],
    yearBuilt: 2020,
    bedrooms: 5,
    bathrooms: 4,
    parkingSpaces: 3
  },
  {
    id: "5",
    title: "Investment Land in Coal City",
    type: "land" as const,
    price: 15000000,
    location: "Coal City, Enugu",
    size: "800 sqm",
    status: "available" as const,
    imageUrl: emptyLand1,
    agent: "Ikenna Okwu",
    coordinates: { lat: 6.4623, lng: 7.5221 },
    description: "Affordable land for investment or residential development. Great potential for appreciation in growing Coal City area.",
    features: ["Investment Opportunity", "Growing Area", "Affordable Price", "Survey Plan Available"]
  },
  {
    id: "6",
    title: "Family Home in Trans-Ekulu",
    type: "house" as const,
    price: 28000000,
    location: "Trans-Ekulu, Enugu",
    size: "280 sqm",
    status: "available" as const,
    imageUrl: bungalowHouse,
    agent: "Funmi Adebayo",
    coordinates: { lat: 6.4287, lng: 7.5342 },
    description: "Cozy family bungalow in peaceful Trans-Ekulu neighborhood. Perfect for small families starting out.",
    features: ["3 Bedrooms", "2 Bathrooms", "Family Lounge", "Kitchen", "Boys Quarters"],
    yearBuilt: 2018,
    bedrooms: 3,
    bathrooms: 2,
    parkingSpaces: 1
  },
  {
    id: "7",
    title: "Empty Land for Development",
    type: "land" as const,
    price: 18000000,
    location: "Ugwuaji, Enugu",
    size: "1200 sqm",
    status: "available" as const,
    imageUrl: emptyLand2,
    agent: "Chioma Okafor",
    coordinates: { lat: 6.4123, lng: 7.5456 },
    description: "Vacant land ready for development. Flat terrain with good drainage and easy access to main road.",
    features: ["Flat Terrain", "Good Drainage", "Main Road Access", "Survey Available"]
  },
  {
    id: "8",
    title: "Commercial Land - High Traffic",
    type: "land" as const,
    price: 42000000,
    location: "Ogui Road, Enugu",
    size: "2000 sqm",
    status: "available" as const,
    imageUrl: commercialLand,
    agent: "Uchenna Igwe",
    coordinates: { lat: 6.4445, lng: 7.5123 },
    description: "Prime commercial land on busy Ogui Road. Perfect for shopping complex, hotel, or office development.",
    features: ["Commercial Zone", "High Traffic", "Corner Piece", "Dual Frontage"]
  },
  {
    id: "9",
    title: "Executive Duplex - Golf Course",
    type: "house" as const,
    price: 65000000,
    location: "Golf Course, Enugu",
    size: "450 sqm",
    status: "available" as const,
    imageUrl: luxuryDuplex,
    agent: "Patricia Okechukwu",
    coordinates: { lat: 6.4578, lng: 7.4823 },
    description: "Luxury duplex overlooking golf course with premium finishes and modern amenities.",
    features: ["Golf Course View", "4 Bedrooms", "Modern Kitchen", "Swimming Pool", "Gym", "Security"],
    yearBuilt: 2021,
    bedrooms: 4,
    bathrooms: 3,
    parkingSpaces: 2
  },
  {
    id: "10",
    title: "Budget Land for Starter Homes",
    type: "land" as const,
    price: 12000000,
    location: "Emene, Enugu",
    size: "600 sqm",
    status: "available" as const,
    imageUrl: emptyLand1,
    agent: "Joseph Nnaji",
    coordinates: { lat: 6.3987, lng: 7.5234 },
    description: "Affordable land perfect for first-time home builders. Located in developing Emene area with good growth potential.",
    features: ["Affordable Price", "Starter Friendly", "Growing Area", "Easy Payment Plan"]
  },
  {
    id: "11",
    title: "Modern Executive Duplex",
    type: "house" as const,
    price: 85000000,
    location: "GRA Enugu",
    size: "6 bedroom duplex on 1000sqm",
    status: "available" as const,
    imageUrl: modernDuplex,
    agent: "Grace Okoro",
    coordinates: { lat: 6.4531, lng: 7.5248 },
    description: "Modern executive duplex with contemporary design, solar power system, and premium finishes.",
    features: ["Solar Power", "6 Bedrooms", "Contemporary Design", "Premium Finishes", "Spacious Compound"],
    yearBuilt: 2022,
    bedrooms: 6,
    bathrooms: 5,
    parkingSpaces: 3
  },
  {
    id: "12",
    title: "Prime Commercial Development Land",
    type: "land" as const,
    price: 120000000,
    location: "Abakpa Nike, Enugu",
    size: "2000sqm",
    status: "pending" as const,
    imageUrl: commercialPlot,
    agent: "David Eze",
    coordinates: { lat: 6.4298, lng: 7.5563 },
    description: "Strategic commercial land perfect for shopping complex, office buildings, or mixed-use development.",
    features: ["Commercial Zone", "Strategic Location", "Mixed-Use Potential", "High Investment Return"]
  },
  {
    id: "13",
    title: "Contemporary Bungalow Home",
    type: "house" as const,
    price: 45000000,
    location: "New Haven, Enugu",
    size: "4 bedroom bungalow on 800sqm",
    status: "available" as const,
    imageUrl: modernBungalow,
    agent: "Patricia Nwankwo",
    coordinates: { lat: 6.4403, lng: 7.4895 },
    description: "Contemporary bungalow with modern architecture, spacious rooms, and beautiful garden space.",
    features: ["Modern Architecture", "4 Bedrooms", "Garden Space", "Spacious Rooms", "Contemporary Design"],
    yearBuilt: 2021,
    bedrooms: 4,
    bathrooms: 3,
    parkingSpaces: 2
  },
  {
    id: "14",
    title: "Residential Development Plot",
    type: "land" as const,
    price: 18000000,
    location: "Amechi Enugu",
    size: "1200sqm",
    status: "available" as const,
    imageUrl: residentialLand,
    agent: "Joseph Okwu",
    coordinates: { lat: 6.4187, lng: 7.5234 },
    description: "Excellent residential land in developing area with good road access and basic infrastructure.",
    features: ["Good Road Access", "Basic Infrastructure", "Developing Area", "Investment Potential"]
  }
];

// Add more properties for better showcase
const additionalProperties: Property[] = [
  {
    id: "15",
    title: "Executive Estate Land",
    type: "land" as const,
    price: 55000000,
    location: "Victoria Garden City, Enugu",
    size: "2500 sqm",
    status: "available" as const,
    imageUrl: residentialLand,
    agent: "Michael Okoro",
    coordinates: { lat: 6.4234, lng: 7.4987 },
    description: "Premium estate land in exclusive Victoria Garden City. Perfect for luxury home construction.",
    features: ["Estate Development", "Premium Location", "Security", "Infrastructure Ready"]
  },
  {
    id: "16",
    title: "Luxury Penthouse Duplex",
    type: "house" as const,
    price: 120000000,
    location: "Coal City Garden Estate, Enugu",
    size: "500 sqm penthouse",
    status: "available" as const,
    imageUrl: luxuryDuplex,
    agent: "Sarah Johnson",
    coordinates: { lat: 6.4567, lng: 7.5123 },
    description: "Ultra-luxury penthouse with panoramic city views, private elevator, and premium amenities.",
    features: ["Penthouse", "City Views", "Private Elevator", "Premium Finishes", "Smart Home"],
    yearBuilt: 2023,
    bedrooms: 5,
    bathrooms: 6,
    parkingSpaces: 4
  },
  {
    id: "17",
    title: "Investment Commercial Complex Land",
    type: "land" as const,
    price: 200000000,
    location: "Ogbete Main Market Area, Enugu",
    size: "5000 sqm",
    status: "pending" as const,
    imageUrl: commercialPlot,
    agent: "Robert Nnamdi",
    coordinates: { lat: 6.4456, lng: 7.5234 },
    description: "Massive commercial land perfect for shopping complex, hotel, or mixed-use development near main market.",
    features: ["Commercial Hub", "High Traffic", "Market Proximity", "Investment Gold Mine"]
  },
  {
    id: "18",
    title: "Affordable Family Bungalow",
    type: "house" as const,
    price: 22000000,
    location: "Awkunanaw, Enugu",
    size: "3 bedroom bungalow on 600sqm",
    status: "available" as const,
    imageUrl: modernBungalow,
    agent: "Grace Nnenna",
    coordinates: { lat: 6.4123, lng: 7.5345 },
    description: "Well-built family bungalow in peaceful neighborhood, perfect for young families.",
    features: ["Affordable", "Family Friendly", "Peaceful Area", "Good Neighbors"],
    yearBuilt: 2020,
    bedrooms: 3,
    bathrooms: 2,
    parkingSpaces: 1
  }
];

// Add more properties for index page showcase
const indexProperties: Property[] = [
  {
    id: "19",
    title: "Luxury Estate Villa",
    type: "house" as const,
    price: 150000000,
    location: "GRA Phase 2, Enugu",
    size: "700 sqm mansion",
    status: "available" as const,
    imageUrl: luxuryDuplex,
    agent: "Dr. Emmanuel Okoli",
    coordinates: { lat: 6.4523, lng: 7.4876 },
    description: "Magnificent estate villa with world-class amenities, private cinema, wine cellar, and manicured gardens.",
    features: ["Private Cinema", "Wine Cellar", "7 Bedrooms", "Manicured Gardens", "Staff Quarters", "Security Post"],
    yearBuilt: 2023,
    bedrooms: 7,
    bathrooms: 8,
    parkingSpaces: 5
  },
  {
    id: "20",
    title: "Premium Land at Independence Layout",
    type: "land" as const,
    price: 35000000,
    location: "Independence Layout Extension, Enugu",
    size: "1800 sqm",
    status: "available" as const,
    imageUrl: residentialLand,
    agent: "Mrs. Chinelo Okafor",
    coordinates: { lat: 6.4389, lng: 7.4965 },
    description: "Premium residential land in the heart of Independence Layout with excellent infrastructure and security.",
    features: ["Premium Location", "Gated Community", "24/7 Security", "Infrastructure Ready"]
  },
  {
    id: "21",
    title: "Modern Smart Home",
    type: "house" as const,
    price: 95000000,
    location: "World Bank Estate, Enugu",
    size: "480 sqm smart home",
    status: "available" as const,
    imageUrl: modernDuplex,
    agent: "Architect Johnson Eze",
    coordinates: { lat: 6.4445, lng: 7.4823 },
    description: "State-of-the-art smart home with automation, solar power, and contemporary architecture.",
    features: ["Smart Home Technology", "Solar Power", "5 Bedrooms", "Home Automation", "Modern Design"],
    yearBuilt: 2024,
    bedrooms: 5,
    bathrooms: 4,
    parkingSpaces: 3
  },
  {
    id: "22",
    title: "Commercial Hub Development Land",
    type: "land" as const,
    price: 280000000,
    location: "Enugu-Onitsha Express Way",
    size: "8000 sqm",
    status: "pending" as const,
    imageUrl: commercialPlot,
    agent: "Chief Martin Okwu",
    coordinates: { lat: 6.4234, lng: 7.5456 },
    description: "Massive commercial land perfect for shopping mall, hotel complex, or mixed-use development on major highway.",
    features: ["Highway Frontage", "Commercial Zone", "High Visibility", "Investment Opportunity"]
  },
  {
    id: "23",
    title: "Executive Family Duplex",
    type: "house" as const,
    price: 55000000,
    location: "Achara Layout, Enugu",
    size: "4 bedroom duplex on 900sqm",
    status: "available" as const,
    imageUrl: modernBungalow,
    agent: "Engr. Paul Nnamani",
    coordinates: { lat: 6.4456, lng: 7.4765 },
    description: "Beautifully designed family duplex with spacious rooms, modern kitchen, and large compound.",
    features: ["4 Bedrooms", "Modern Kitchen", "Large Compound", "Family Lounge", "Boys Quarters"],
    yearBuilt: 2022,
    bedrooms: 4,
    bathrooms: 3,
    parkingSpaces: 2
  },
  {
    id: "24",
    title: "Investment Land Package",
    type: "land" as const,
    price: 42000000,
    location: "New Artisan Market Area, Enugu",
    size: "3000 sqm",
    status: "available" as const,
    imageUrl: emptyLand2,
    agent: "Mrs. Florence Nnaji",
    coordinates: { lat: 6.4123, lng: 7.5234 },
    description: "Strategic land package near the new artisan market with high commercial potential and growth prospects.",
    features: ["Commercial Potential", "Strategic Location", "High Growth Area", "Investment Package"]
  }
];

export const sampleProperties = [...baseProperties, ...additionalProperties, ...indexProperties];
export const featuredProperties = sampleProperties.slice(0, 12);