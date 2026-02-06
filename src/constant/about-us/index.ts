export const aboutCategory: string[] = ["Vision", "Mission"];

export const philosophyData: string[] = [
  "Increase return on investment and enhance value for shareholders",
  "Improve the welfare of our employee",
  "Enhance public prosperity around our mine sites",
  "Sustainably preserve the environment",
];

export interface IOwnershipItem {
  owner: string;
  ownershipPercentage: number;
  type?: string;
}

export interface IOwnership {
  coals: IOwnershipItem[];
  minerals: IOwnershipItem[];
}

export const ownership: IOwnership = {
  coals: [
    {
      owner: "PT Kaltim Prima Coal",
      ownershipPercentage: 51,
    },
    {
      owner: "PT Arutmin Indonesia",
      ownershipPercentage: 90,
    },
    {
      owner: "PT Darma Henwa Tbk",
      ownershipPercentage: 12.44,
      type: "(contract mining) 1)",
    },
    {
      owner: "PT Pendopo Energi Batubara",
      ownershipPercentage: 84.54,
      type: "(coal) 2)",
    },
  ],
  minerals: [
    {
      owner: "PT Bumi Resources Minerals Tbk",
      ownershipPercentage: 20.09,
    },
    {
      owner: "PT Gorontalo Minerals",
      ownershipPercentage: 16.08,
      type: "(gold & copper mining) 3)",
    },
    {
      owner: "PT Dairi Prima Minerals",
      ownershipPercentage: 9.84,
      type: "(zinc, lead) 3)",
    },
    {
      owner: "PT Citra Palu Minerals",
      ownershipPercentage: 84.54,
      type: "(gold mining) 2)",
    },
    {
      owner: "PT Linge Mineral Resources",
      ownershipPercentage: 19.63,
      type: "(gold mining) 4)",
    },
    {
      owner: "PT Darma Henwa Tbk",
      ownershipPercentage: 22.49,
      type: "(contract mining) 1)",
    },
    {
      owner: "PT Suma Heksa Sinergi",
      ownershipPercentage: 13.83,
      type: "(gold mining) 4)",
    },
  ],
};

export interface IShareHolderItem {
  name: string;
  address: string;
  totalShare: {
    percentage: number;
    amaout: string;
  };
}

export const shareHolderList: IShareHolderItem[] = [
  {
    name: "Mach Energy (Hongkong) Limited",
    address: "PT INA SEKURITAS INDONESIA",
    totalShare: {
      percentage: 45.78,
      amaout: "170,000,000,000",
    },
  },
  {
    name: "HSBC-FUND SVS A/C CHENGDONG INVESTMENT CORP-SELF",
    address: "PT Bank HSBC Indonesia",
    totalShare: {
      percentage: 9.42,
      amaout: "34,970,374,330",
    },
  },
  {
    name: "Treasure Global Investments Limited",
    address: "PT INA SEKURITAS INDONESIA",
    totalShare: {
      percentage: 8.08,
      amaout: "30,000,000,000",
    },
  },
  {
    name: "UBS SWITZERLAND AG-CLIENT ASSETS",
    address: "BUT DEUTSCHE BANK AG",
    totalShare: {
      percentage: 6.37,
      amaout: "23,659,839,397",
    },
  },
  {
    name: "GLAS TRUST (SINGAPORE) LTD",
    address: "PT INDO CAPITAL SEKURITAS",
    totalShare: {
      percentage: 28.27,
      amaout: "104,988,538,787",
    },
  },
];
