/**
 * Mining Data Constants
 * Data tambang untuk ditampilkan di peta Indonesia
 */

export interface MiningInfo {
  provinceName: string;
  provinceId: string; // ID sesuai dengan @react-map/indonesia library
  location: {
    top: string; // Persentase posisi vertikal (0% - 100%)
    left: string; // Persentase posisi horizontal (0% - 100%)
  };
  mines: {
    name: string;
    type: string; // "Coal Mining", "Gold Mining", "Nickel Mining", etc.
    capacity?: string; // Optional capacity information
    status: "Active" | "Development" | "Exploration";
  }[];
}

/**
 * Default mining data untuk Bumi Resources
 * Update data ini sesuai dengan operasi tambang yang sebenarnya
 */
export const BUMI_MINING_DATA: MiningInfo[] = [
  {
    provinceName: "Kalimantan Timur",
    provinceId: "Kalimantan Timur",
    location: {
      top: "43%",
      left: "46%",
    },
    mines: [
      {
        name: "Kaltim Prima Coal (KPC)",
        type: "Coal Mining",
        capacity: "60 million tons/year",
        status: "Active",
      },
      {
        name: "Sangatta Coal Mining",
        type: "Coal Mining",
        capacity: "25 million tons/year",
        status: "Active",
      },
      {
        name: "Bengalon Coal Project",
        type: "Coal Mining",
        capacity: "15 million tons/year",
        status: "Development",
      },
    ],
  },
  {
    provinceName: "Kalimantan Tengah",
    provinceId: "Kalimantan Tengah",
    location: {
      top: "50%",
      left: "43%",
    },
    mines: [
      {
        name: "Borneo Indobara",
        type: "Coal Mining",
        capacity: "15 million tons/year",
        status: "Active",
      },
      {
        name: "Kendilo Coal Project",
        type: "Coal Mining",
        capacity: "8 million tons/year",
        status: "Development",
      },
    ],
  },
  {
    provinceName: "Sulawesi Tengah",
    provinceId: "Sulawesi Tengah",
    location: {
      top: "35%",
      left: "58%",
    },
    mines: [
      {
        name: "Gorontalo Minerals",
        type: "Gold Mining",
        capacity: "2.5 million oz reserves",
        status: "Development",
      },
      {
        name: "Palu Gold Project",
        type: "Gold Mining",
        status: "Exploration",
      },
    ],
  },
  {
    provinceName: "Sulawesi Barat",
    provinceId: "Sulawesi Barat",
    location: {
      top: "52%",
      left: "52.5%",
    },
    mines: [
      {
        name: "Mamuju Gold Exploration",
        type: "Gold Mining",
        status: "Exploration",
      },
    ],
  },
  {
    provinceName: "Aceh",
    provinceId: "Aceh",
    location: {
      top: "25%",
      left: "5.6%",
    },
    mines: [
      {
        name: "Ombilin Coal Mine",
        type: "Coal Mining",
        capacity: "3 million tons/year",
        status: "Active",
      },
    ],
  },
  {
    provinceName: "Bengkulu",
    provinceId: "Bengkulu",
    location: {
      top: "65%",
      left: "17.7%",
    },
    mines: [
      {
        name: "Bengkulu Coal Reserve",
        type: "Coal Mining",
        status: "Exploration",
      },
    ],
  },
];

/**
 * Helper function untuk mendapatkan data tambang berdasarkan province ID
 */
export const getMiningDataByProvince = (
  provinceId: string
): MiningInfo | undefined => {
  return BUMI_MINING_DATA.find((data) => data.provinceId === provinceId);
};

/**
 * Helper function untuk mendapatkan semua provinsi yang memiliki operasi tambang
 */
export const getAllMiningProvinces = (): string[] => {
  return BUMI_MINING_DATA.map((data) => data.provinceId);
};

/**
 * Helper function untuk menghitung total tambang
 */
export const getTotalMines = (): number => {
  return BUMI_MINING_DATA.reduce((total, data) => total + data.mines.length, 0);
};

/**
 * Helper function untuk mendapatkan statistik berdasarkan status
 */
export const getMiningStatistics = () => {
  let active = 0;
  let development = 0;
  let exploration = 0;

  BUMI_MINING_DATA.forEach((data) => {
    data.mines.forEach((mine) => {
      if (mine.status === "Active") active++;
      if (mine.status === "Development") development++;
      if (mine.status === "Exploration") exploration++;
    });
  });

  return { active, development, exploration };
};
