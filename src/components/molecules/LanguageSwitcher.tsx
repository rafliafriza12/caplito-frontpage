"use client";

import { useState, useRef, useEffect } from "react";

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "id", name: "Indonesia", flag: "🇮🇩" },
];

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<Language>(languages[0]);
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

  const handleLanguageChange = (lang: Language) => {
    setSelectedLang(lang);
    setIsOpen(false);
    // TODO: Implement actual language change logic here
    console.log("Language changed to:", lang.code);
  };

  return (
    <div className="relative font-parkinsans" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-secondary transition-all duration-200 min-w-[120px]"
        aria-label="Select language"
      >
        <span className="text-xs">{selectedLang.flag}</span>
        <span className="text-xs font-normal text-secondary">
          {selectedLang.name}
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
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang)}
              className={`w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-neutral-50 transition-colors duration-150 ${
                selectedLang.code === lang.code ? "bg-charcoal-green/5" : ""
              }`}
            >
              <span className="text-xs">{lang.flag}</span>
              <span className="text-sm font-normal text-secondary">
                {lang.name}
              </span>
              {selectedLang.code === lang.code && (
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
