"use client";

import React, { useState, useRef, useEffect } from "react";
import IndonesiaMap from "@react-map/indonesia";
import type { FC } from "react";
import gsap from "gsap";

interface MiningInfo {
  provinceName: string;
  provinceId: string; // ID sesuai dengan library (misal: "Aceh", "Kalimantan Timur")
  location: {
    top: string;
    left: string;
  };
  mines: {
    name: string;
    type: string; // "Coal", "Gold", "Nickel", etc.
    capacity?: string;
    status: "Active" | "Development" | "Exploration";
  }[];
}

interface MapIndonesiaProps {
  miningData?: MiningInfo[]; // Data tambang untuk tooltip
  onRegionClick?: (regionId: string) => void;
  customProvinceColors?: Record<string, string>;
}

// Default colors untuk provinsi-provinsi tertentu
// Menggunakan palet warna Bumi Resources
const DEFAULT_PROVINCE_COLORS: Record<string, string> = {
  Aceh: "#A0AC67",
  "Sumatera Barat": "#A0AC67",
  Bengkulu: "#A0AC67",
  "Kalimantan Timur": "#A0AC67",
  "Kalimantan Tengah": "#A0AC67",
  "Kalimantan Utara": "#A0AC67",
  "Sulawesi Tengah": "#A0AC67",
  "Sulawesi Barat": "#A0AC67",
  "Sulawesi Selatan": "#A0AC67",
  "Sulawesi Tenggara": "#A0AC67",
};

const IndonesiaMapComponent: FC<MapIndonesiaProps> = ({
  miningData = [],
  onRegionClick,
  customProvinceColors,
}) => {
  const [hoveredProvince, setHoveredProvince] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const connectorRefs = useRef<{ [key: string]: SVGSVGElement | null }>({});
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Gabungkan default colors dengan custom colors (jika ada)
  const provinceColors = {
    ...DEFAULT_PROVINCE_COLORS,
    ...customProvinceColors,
  };

  // Handle mouse movement untuk update posisi tooltip
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  // Get mining info untuk provinsi yang di-hover
  const hoveredMiningInfo = miningData.find(
    (data) => data.provinceId === hoveredProvince,
  );

  // Animasi GSAP untuk tooltip
  useEffect(() => {
    if (hoveredProvince) {
      const connector = connectorRefs.current[hoveredProvince];
      const card = cardRefs.current[hoveredProvince];

      if (connector && card) {
        // Get SVG path element
        const path = connector.querySelector("path");

        if (path) {
          // Reset state awal
          gsap.set(path, { strokeDashoffset: 200 });
          gsap.set(card, { opacity: 0, x: -20, scale: 0.9 });

          // Timeline animasi
          const tl = gsap.timeline();

          // 1. Garis siku-siku muncul dari kiri ke kanan (bertahap)
          tl.to(path, {
            strokeDashoffset: 0,
            duration: 0.6,
            ease: "power2.inOut",
          });

          // 2. Card muncul setelah garis selesai
          tl.to(
            card,
            {
              opacity: 1,
              x: 0,
              scale: 0.8,
              duration: 0.3,
              ease: "back.out(1.5)",
            },
            "-=0.26", // Overlap sedikit dengan animasi garis
          );
        }
      }
    }
  }, [hoveredProvince]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "auto",
        maxHeight: "900px",
      }}
      className="flex justify-center"
      onMouseMove={handleMouseMove}
    >
      <IndonesiaMap
        type="select-multiple"
        size={2000}
        mapColor="#CAD4BA"
        strokeColor="#ffffff"
        strokeWidth={0.2}
        hoverColor="#A0AC67" // Warna hover untuk provinsi dengan data mining
        cityColors={provinceColors}
        disableHover={true} // Enable hover
        onSelect={(id) => {
          console.log("Selected province ID:", id);
          if (onRegionClick && typeof id === "string") {
            onRegionClick(id);
          }

          // Set hovered province saat di-click juga
          if (
            typeof id === "string" &&
            miningData.some((data) => data.provinceId === id)
          ) {
            setHoveredProvince(id);
          }
        }}
      />

      {/* Titik kecil untuk setiap provinsi yang memiliki data tambang */}
      {miningData.map((data) => (
        <div
          key={data.provinceId}
          style={{
            position: "absolute",
            top: data.location.top,
            left: data.location.left,
            transform: "translate(-50%, -50%)",
            zIndex: hoveredProvince === data.provinceId ? 50 : 10,
          }}
          onMouseEnter={() => setHoveredProvince(data.provinceId)}
          onMouseLeave={() => setHoveredProvince(null)}
        >
          {/* Titik kecil */}
          <div
            className={`relative transition-all duration-300 cursor-pointer ${
              hoveredProvince === data.provinceId ? "scale-150" : "scale-100"
            }`}
          >
            <div
              className={`w-1 h-1 ipad-vertical:w-2 ipad-vertical:h-2 rounded-full transition-all bg-charcoal-green duration-300 ${
                hoveredProvince === data.provinceId
                  ? " ipad-vertical:ring-4 ring-moss-stone/50"
                  : " ipad-vertical:ring-2 ring-moss-stone/50"
              }`}
            >
              {/* Pulse animation */}
              <div className="absolute inset-0 rounded-full bg-charcoal-green animate-ping opacity-75"></div>
            </div>

            {/* Garis connector bentuk L - dimulai dari tepi kanan dot */}
            {hoveredProvince === data.provinceId && (
              <svg
                ref={(el) => {
                  connectorRefs.current[data.provinceId] = el;
                }}
                className="absolute pointer-events-none"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: "translate(0, -50%)",
                  transformOrigin: "left center",
                  zIndex: 49,
                }}
              >
                {/* Path bentuk L: start dari tepi dot → atas → kanan ke card */}
                <path
                  d="M 0 30 L 0 8 L 60 8"
                  stroke="#225442"
                  //   strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  style={{
                    strokeDasharray: "200",
                    strokeDashoffset: "200",
                  }}
                />
              </svg>
            )}

            {/* Tooltip Card - muncul saat hover */}
            {hoveredProvince === data.provinceId && (
              <div
                className="absolute top-1/2 w-[260px]"
                style={{
                  left: "50%",
                  marginLeft: "34px", // Panjang garis horizontal + spacing
                  transform: "translateY(-50%)",
                  zIndex: 50,
                }}
                onMouseEnter={() => setHoveredProvince(data.provinceId)}
                onMouseLeave={() => setHoveredProvince(null)}
              >
                {/* Card informasi */}
                <div
                  ref={(el) => {
                    cardRefs.current[data.provinceId] = el;
                  }}
                  className="bg-white rounded-lg shadow-xl p-4 border-l-4 border-moss-stone"
                >
                  {/* Header */}
                  <div className="mb-3 pb-2 border-b border-gray-200">
                    <h3 className="text-base font-semibold text-charcoal-green">
                      {data.provinceName}
                    </h3>
                    <p className="text-[10px] text-gray-500 mt-0.5">
                      Mining Operations
                    </p>
                  </div>

                  {/* Daftar tambang */}
                  <div className="space-y-2 max-h-[240px] overflow-y-auto custom-scrollbar">
                    {data.mines.map((mine, index) => (
                      <div
                        key={index}
                        className="p-2 bg-gray-50 rounded-md hover:bg-moss-stone/10 transition-colors duration-200"
                      >
                        <div className="flex items-start justify-between mb-1.5">
                          <h4 className="font-medium text-xs text-charcoal-green flex-1 leading-tight">
                            {mine.name}
                          </h4>
                          <span
                            className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium whitespace-nowrap ml-1 ${
                              mine.status === "Active"
                                ? "bg-green-100 text-green-700"
                                : mine.status === "Development"
                                  ? "bg-blue-100 text-blue-700"
                                  : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {mine.status}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 text-[10px] text-gray-600">
                          <span className="flex items-center gap-1">
                            <svg
                              className="w-2.5 h-2.5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                            </svg>
                            {mine.type}
                          </span>
                          {mine.capacity && (
                            <>
                              <span className="text-gray-400">•</span>
                              <span className="truncate">{mine.capacity}</span>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="mt-3 pt-2 border-t border-gray-200">
                    <p className="text-[10px] text-gray-500">
                      Total: {data.mines.length} mining site
                      {data.mines.length > 1 ? "s" : ""}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default IndonesiaMapComponent;
