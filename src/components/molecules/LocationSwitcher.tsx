"use client";

import { useState, useRef, useEffect } from "react";

interface Location {
  code: string;
  name: string;
  flag: string;
}

const location: Location[] = [
  { code: "id", name: "Indonesia", flag: "🇮🇩" },
  { code: "en", name: "English", flag: "🇬🇧" },
];

export function LocationSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLoc, setSelectedLoc] = useState<Location>(location[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLocationChange = (loc: Location) => {
    setSelectedLoc(loc);
    setIsOpen(false);
    // TODO: Implement actual location change logic here
    console.log("Location changed to:", loc.code);
  };

  return (
    <div className="relative font-parkinsans" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1 rounded-lg border border-secondary transition-all duration-200 min-w-[120px]"
        aria-label="Select Location"
      >
        <span className="text-sm">{selectedLoc.flag}</span>
        <span className="text-sm font-normal text-secondary">
          {selectedLoc.name}
        </span>
        <svg
          className={`w-4 h-4 text-secondary transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-full min-w-[120px] bg-white border border-neutral-200 rounded-lg shadow-lg overflow-hidden z-50 animate-slide-down">
          {location.map((loc) => (
            <button
              key={loc.code}
              onClick={() => handleLocationChange(loc)}
              className={`w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-neutral-50 transition-colors duration-150 ${
                selectedLoc.code === loc.code ? "bg-charcoal-green/5" : ""
              }`}
            >
              <span className="text-lg">{loc.flag}</span>
              <span className="text-sm font-normal text-secondary">
                {loc.name}
              </span>
              {selectedLoc.code === loc.code && (
                <svg
                  className="w-4 h-4 text-charcoal-green ml-auto"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
