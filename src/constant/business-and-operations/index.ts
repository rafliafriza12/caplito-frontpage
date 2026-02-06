export const subsidiaryCategories: string[] = ["Coal", "Mineral / Non - Coal"];

export interface Subsidiary {
  id: string;
  name: string;
  image: string;
  category: "Coal" | "Mineral / Non - Coal";
  description?: string;
}

export const subsidiaries: Subsidiary[] = [
  // Coal Subsidiaries
  {
    id: "kpc",
    name: "Kaltim Prima Coal",
    image: "/img/business-and-operations/item-carousel.png",
    category: "Coal",
    description: "One of Indonesia's largest coal producers",
  },
  {
    id: "arutmin",
    name: "Arutmin Indonesia",
    image: "/img/business-and-operations/item-carousel.png",
    category: "Coal",
    description: "Leading coal mining company",
  },
  {
    id: "kec",
    name: "Kalimantan Energy Company",
    image: "/img/business-and-operations/item-carousel.png",
    category: "Coal",
    description: "Coal mining operations in Kalimantan",
  },
  {
    id: "kpc",
    name: "Kaltim Prima Coal",
    image: "/img/business-and-operations/item-carousel.png",
    category: "Coal",
    description: "One of Indonesia's largest coal producers",
  },
  {
    id: "arutmin",
    name: "Arutmin Indonesia",
    image: "/img/business-and-operations/item-carousel.png",
    category: "Coal",
    description: "Leading coal mining company",
  },
  {
    id: "kec",
    name: "Kalimantan Energy Company",
    image: "/img/business-and-operations/item-carousel.png",
    category: "Coal",
    description: "Coal mining operations in Kalimantan",
  },

  // Mineral / Non-Coal Subsidiaries
  {
    id: "mineral-1",
    name: "PT Mineral Resources",
    image: "/img/business-and-operations/item-carousel.png",
    category: "Mineral / Non - Coal",
    description: "Mineral exploration and mining",
  },
  {
    id: "mineral-2",
    name: "PT Energy Solutions",
    image: "/img/business-and-operations/item-carousel.png",
    category: "Mineral / Non - Coal",
    description: "Renewable energy initiatives",
  },
];

export interface ICustomer {
  destination: string;
  sales: number;
  percentage: number;
  fill: string;
}

export const customers: ICustomer[] = [
  {
    destination: "Indonesia",
    sales: 23072068,
    percentage: 30.4,
    fill: "#0F1714",
  },
  {
    destination: "China",
    sales: 21257505,
    percentage: 28.1,
    fill: "#334239",
  },
  {
    destination: "India",
    sales: 12767479,
    percentage: 16.8,
    fill: "#225442",
  },
  {
    destination: "Japan",
    sales: 5661526,
    percentage: 7.5,
    fill: "#A0AC67",
  },
  {
    destination: "Philippines",
    sales: 3451413,
    percentage: 4.6,
    fill: "#CAD4BA",
  },
  {
    destination: "Taiwan",
    sales: 2457447,
    percentage: 3.2,
    fill: "#E6E6E6",
  },
  {
    destination: "Malaysia",
    sales: 2266620,
    percentage: 3.0,
    fill: "#CACACA",
  },
  {
    destination: "Korea",
    sales: 1830996,
    percentage: 2.4,
    fill: "#ACACAC",
  },
  {
    destination: "Brunei",
    sales: 1090400,
    percentage: 1.4,
    fill: "#919191",
  },
  {
    destination: "Hongkong",
    sales: 711186,
    percentage: 0.9,
    fill: "#757575",
  },
  {
    destination: "Vietnam",
    sales: 659091,
    percentage: 0.9,
    fill: "#575757",
  },
  {
    destination: "Cambodia",
    sales: 341340,
    percentage: 0.5,
    fill: "#434343",
  },
  {
    destination: "Bangladesh",
    sales: 171700,
    percentage: 0.2,
    fill: "#303030",
  },
  {
    destination: "Thailand",
    sales: 57030,
    percentage: 0.1,
    fill: "#050505",
  },
];

export interface ICoal {
  coal: {
    operatingMines: string;
    subOperatingMines: string[];
    cv: number[];
    totalSulfur: number[];
    totalMoisture: number[];
    ash: number[];
  };
}

export const coalDatas: ICoal[] = [
  {
    coal: {
      operatingMines: "KPC",
      subOperatingMines: [
        "Prima",
        "Pinang 6250 GAR",
        "Pinang 6150 GAR",
        "Pinang 6000 GAR",
        "Pinang 5800 GAR",
        "Pinang 5500 GAR",
        "Melawan",
        "KPC 4700 GAR",
        "KPC 4500 GAR",
        "KPC 4200 GAR",
      ],
      cv: [6976, 6613, 6579, 6275, 6083, 6114, 5636, 5330, 5212, 4613],
      totalSulfur: [0.6, 0.6, 0.6, 0.8, 1.5, 1.3, 1.0, 0.8, 0.6, 0.4],
      totalMoisture: [
        10.0, 13.0, 14.0, 16.0, 18.0, 21.0, 25.0, 28.0, 30.0, 35.0,
      ],
      ash: [6.0, 7.0, 7.0, 7.0, 5.0, 6.0, 7.0, 7.0, 7.0, 4.0],
    },
  },
  {
    coal: {
      operatingMines: "Arutmin",
      subOperatingMines: ["Satui 8", "Satui 10", "Senakin MS", "ECOCOAL"],
      cv: [6902, 6689, 6632, 5177],
      totalSulfur: [0.8, 0.8, 1.2, 0.4],
      totalMoisture: [11.0, 11.0, 10.0, 35.5],
      ash: [8.0, 10.0, 12.0, 5.5],
    },
  },
];

export interface ICoalResource {
  location: string;
  coalResources: number;
  coalReserves: number;
}

export const coalResourceDatas: ICoalResource[] = [
  {
    location: "Sangatta",
    coalResources: 2483,
    coalReserves: 527,
  },
  {
    location: "Bengalon",
    coalResources: 166,
    coalReserves: 86,
  },
];
