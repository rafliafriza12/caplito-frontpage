"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import BumiLogo from "../atoms/BumiLogo";
import { menuItems, IMenuItem } from "@/constant/MenuItems";
import Image from "next/image";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isNavigating, setIsNavigating] = useState(false);

  // Refs for search inputs
  const searchInputDesktopRef = useRef<HTMLInputElement>(null);
  const searchInputMobileRef = useRef<HTMLInputElement>(null);
  const searchInputMobileMenuRef = useRef<HTMLInputElement>(null);

  // Debounce search query
  useEffect(() => {
    // Skip debounce if user is navigating with keyboard
    if (isNavigating) {
      return;
    }
  }, [searchQuery, isNavigating]);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 200) {
        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }

      // Close search when user scrolls

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY, isSearchOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsSearchOpen(false);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest("[data-search-container]")) {
        if (isSearchOpen) {
          setIsSearchOpen(false);
          setIsNavigating(false);
        }
      }
    };

    if (isSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchOpen]);

  const closeMobileMenu = () => {
    setIsOpen(false);
    setOpenAccordion(null);
  };

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  // Auto-focus search input when search is opened
  useEffect(() => {
    if (isSearchOpen) {
      // Use setTimeout to ensure the input is rendered before focusing
      const timer = setTimeout(() => {
        if (searchInputDesktopRef.current) {
          searchInputDesktopRef.current.focus();
        }
        if (searchInputMobileRef.current) {
          searchInputMobileRef.current.focus();
        }
        if (searchInputMobileMenuRef.current) {
          searchInputMobileMenuRef.current.focus();
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isSearchOpen]);

  return (
    <>
      {/* Overlay for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-90 ipad-horizontal:hidden transition-opacity duration-300"
          onClick={closeMobileMenu}
        />
      )}

      <nav
        className={`fixed z-100 pt-4  px-4 ipad-vertical:px-7.5 ipad-vertical:py-5 lg:py-5  w-full transition-transform duration-500 font-mona-sans ${
          isVisible ? "translate-y-0" : "-translate-y-[40vh]"
        }`}
      >
        <div
          className={`bg-primary border border-[#F7F7F7] w-full max-w-354 mx-auto rounded-2xl px-4 py-3 sm:py-4 sm:px-5 ipad-vertical:px-6 ipad-vertical:py-5 lg:p-5`}
        >
          <div className="flex justify-between items-center">
            {/* Desktop Menu */}
            <Link href={"/"} className="flex items-center gap-5">
              <div className="w-5 h-5 ipad-vertical:w-8.5 ipad-vertical:h-8.5 relative">
                <Image
                  src={"/img/logo/caplito.png"}
                  alt="Caplito"
                  fill
                  className="object-cover"
                />
              </div>
              <h1 className="text-[#1A1A1A] text-[32px] font-bold leading-[100%] hidden ipad-vertical:block">
                Caplito
              </h1>
            </Link>

            <div className=" items-center gap-4 flex">
              <h1 className="font-medium text-xl leading-[150%] text-[#1F1F1F] hidden ipad-vertical:block">
                Start in seconds
              </h1>
              <button className=" py-1 px-5 ipad-vertical:py-3 ipad-vertical:px-8 rounded-full bg-[#6C5CE7] text-primary font-semibold text-sm ipad-vertical:text-lg">
                Sign In Now
              </button>
            </div>

            {/* Mobile Action Buttons & Menu Button */}
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Slide from right */}
      <div
        className={`fixed top-0 right-0 h-full w-70 sm:w-[320px] bg-primary z-100 lg:py-7.5! ipad-horizontal:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex flex-col gap-4 p-4 sm:p-6 border-b border-secondary/20">
            <div className="flex justify-between items-center">
              <Link href="/" className="w-15 sm:w-20" onClick={closeMobileMenu}>
                <BumiLogo />
              </Link>
              <button
                className="text-secondary hover:text-charcoal-green transition-colors p-2"
                onClick={closeMobileMenu}
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Action Buttons & Search - Mobile Header */}
            <div className="flex flex-col gap-3">
              {/* Search Input & Results - Mobile Menu */}
            </div>
          </div>

          {/* Mobile Menu Items */}
          <div
            data-lenis-prevent
            className="flex-1 overflow-y-auto py-6 px-4 sm:px-6"
          >
            <div className="flex flex-col gap-1">
              {menuItems.map((item: IMenuItem, i: number) => {
                const isActive =
                  pathname.includes(item.link) && item.link !== "/";

                // If item has children, render accordion
                if (item.child && item.child.length > 0) {
                  return (
                    <div key={i} className="rounded-md overflow-hidden">
                      {/* Accordion Header with separate link and toggle */}
                      <div className="flex items-center gap-2 hover:bg-secondary/5 rounded-md">
                        <Link
                          href={item.link}
                          className={`flex-1 hover:text-charcoal-green duration-300 transition-all text-xs sm:text-lg py-3 px-4 ${
                            isActive
                              ? "text-charcoal-green font-medium"
                              : "text-secondary font-normal"
                          }`}
                          onClick={closeMobileMenu}
                        >
                          {item.name}
                        </Link>
                        <button
                          onClick={() => toggleAccordion(i)}
                          className={`hover:text-charcoal-green duration-300 transition-all p-3 pr-4 ${
                            isActive ? "text-charcoal-green" : "text-secondary"
                          }`}
                          aria-label={`Toggle ${item.name} submenu`}
                        >
                          <svg
                            className={`w-5 h-5 transition-transform duration-300 ${
                              openAccordion === i ? "rotate-180" : ""
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
                      </div>

                      {/* Accordion Content */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          openAccordion === i
                            ? "max-h-125 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="pl-4 pr-2 py-2 space-y-1">
                          {item.child.map((childItem, childIndex) => (
                            <Link
                              key={childIndex}
                              href={childItem.link}
                              className="block text-secondary/80 hover:text-charcoal-green hover:bg-secondary/5 duration-300 transition-all font-normal text-xs sm:text-base py-2 px-4 rounded-md"
                              onClick={closeMobileMenu}
                            >
                              {childItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                // Regular link without children
                return (
                  <Link
                    key={i}
                    href={item.link}
                    className={`hover:text-charcoal-green hover:bg-secondary/5 duration-300 transition-all text-base sm:text-lg py-3 px-4 rounded-md ${
                      isActive
                        ? "text-charcoal-green font-medium"
                        : "text-secondary font-normal"
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
