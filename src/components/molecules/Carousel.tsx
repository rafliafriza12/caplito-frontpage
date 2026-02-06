"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number, isActive: boolean) => React.ReactNode;
  itemsPerView?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  gap?: number;
  showNavigation?: boolean;
  showPagination?: boolean;
  autoplay?: boolean;
  autoplayDelay?: number;
  loop?: boolean;
  className?: string;
  centered?: boolean; // New prop for centered carousel with 3D effect
}

// Navigation Arrow Icons
const ChevronLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

export function Carousel<T>({
  items,
  renderItem,
  itemsPerView = { mobile: 1, tablet: 2, desktop: 3 },
  gap = 16,
  showNavigation = true,
  showPagination = true,
  autoplay = false,
  autoplayDelay = 5000,
  loop = true,
  className = "",
  centered = false,
}: CarouselProps<T>) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(itemsPerView.desktop || 3);

  // Responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(itemsPerView.mobile || 1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(itemsPerView.tablet || 2);
      } else {
        setItemsToShow(itemsPerView.desktop || 3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [itemsPerView]);

  const totalSlides = items.length;

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => {
      if (loop) return (prev + 1) % items.length;
      return Math.min(prev + 1, items.length - 1);
    });
  }, [loop, items.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => {
      if (loop) return prev === 0 ? items.length - 1 : prev - 1;
      return Math.max(prev - 1, 0);
    });
  }, [loop, items.length]);

  const goToSlide = (index: number) => setCurrentIndex(index);

  // Autoplay
  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(goToNext, autoplayDelay);
    return () => clearInterval(interval);
  }, [autoplay, autoplayDelay, goToNext]);

  // =========================
  // 🎯 Centered 3D Carousel
  // =========================
  if (centered) {
    // Responsive card width
    const [cardWidth, setCardWidth] = useState(400);
    const cardGap = 10; // gap between cards
    const [containerWidth, setContainerWidth] = useState(0);
    const containerRef = useRef<HTMLDivElement | null>(null);

    // Update container width and card width on mount and resize
    useEffect(() => {
      const updateWidth = () => {
        if (containerRef.current) {
          setContainerWidth(containerRef.current.offsetWidth);

          // Responsive card width based on screen size
          if (window.innerWidth < 768) {
            // Mobile: card width 85% of container, sisanya 15% untuk peek effect
            setCardWidth(containerRef.current.offsetWidth * 0.85);
          } else {
            // Tablet ke atas: tetap 400px
            setCardWidth(400);
          }
        }
      };

      updateWidth();
      window.addEventListener("resize", updateWidth);
      return () => window.removeEventListener("resize", updateWidth);
    }, []);

    // Calculate translate to center the active item
    // Formula sederhana: tengah container - posisi item aktif
    const centerOffset = containerWidth / 2 - cardWidth / 2;
    // Posisi item = index * (lebar card + gap)
    const itemOffset = currentIndex * (cardWidth + cardGap);
    const translateValue = centerOffset - itemOffset;

    return (
      <div className={`relative w-full ${className}`}>
        {/* Centered Carousel */}
        <div
          ref={containerRef}
          className="relative h-[200px] ipad-vertical:h-[350px] flex items-center "
          style={{ perspective: "2000px" }}
        >
          <div
            className={`flex items-center transition-transform duration-700 ease-out`}
            style={{
              transform: `translateX(${translateValue}px)`,
              transformStyle: "preserve-3d",
            }}
          >
            {items.map((item, index) => {
              const offset = index - currentIndex;
              const isActive = index === currentIndex;

              // 🔥 Konfigurasi 3D efek dengan dynamic shadow
              let rotateY = "0deg";
              let scale = 1;
              let opacity = 1;
              let translateZ = "0px";
              let shadowX = 5; // Default shadow position X

              if (offset === 0) {
                rotateY = "0deg";
                scale = 0.96;
                opacity = 1;
                translateZ = "0px";
                shadowX = 0; // Shadow centered untuk card aktif
              } else if (offset === 1) {
                rotateY = "-25deg";
                scale = 1;
                opacity = 1;
                translateZ = "0px";
                shadowX = 10; // Shadow ke kiri (card miring ke kiri)
              } else if (offset === 2) {
                rotateY = "-35deg";
                scale = 1.113;
                opacity = 1;
                translateZ = "45px";
                shadowX = 15; // Shadow lebih ke kiri
              } else if (offset === -1) {
                rotateY = "25deg";
                scale = 1;
                opacity = 1;
                translateZ = "0px";
                shadowX = -10; // Shadow ke kanan (card miring ke kanan)
              } else if (offset === -2) {
                rotateY = "35deg";
                scale = 1.113;
                opacity = 1;
                translateZ = "-45px";
                shadowX = 15; // Shadow lebih ke kanan
              } else if (offset === -3) {
                rotateY = "45deg";
                scale = 1.25;
                opacity = 1;
                translateZ = "-150px";
                shadowX = -20; // Shadow sangat ke kanan
              } else if (offset === 3) {
                rotateY = "-45deg";
                scale = 1.25;
                opacity = 1;
                translateZ = "150px";
                shadowX = 20; // Shadow sangat ke kiri
              } else if (offset > 3) {
                rotateY = "-55deg";
                scale = 1.4;
                opacity = 1;
                translateZ = "320px";
                shadowX = 25; // Shadow maksimal ke kiri
              } else {
                rotateY = "55deg";
                scale = 1.4;
                opacity = 1;
                translateZ = "-320px";
                shadowX = -25; // Shadow maksimal ke kanan
              }

              return (
                <div
                  key={index}
                  className={`flex-shrink-0 transition-all duration-700 ease-out`}
                  style={{
                    transform: `rotateY(${rotateY}) scale(${scale}) translateX(${translateZ})`,
                    opacity,
                    transformStyle: "preserve-3d",
                    width: `${cardWidth}px`,
                    marginRight: `${cardGap}px`,
                    filter: `drop-shadow(${shadowX}px 5px 7px rgba(0,0,0,0.3))`,
                  }}
                >
                  {renderItem(item, index, isActive)}
                </div>
              );
            })}
          </div>
        </div>

        {/* Active Item Title */}
        <div className="text-center mt-28">
          <h3 className="text-2xl font-light text-secondary ">
            {items[currentIndex] && (items[currentIndex] as any).name}
          </h3>
        </div>

        {/* Navigation & Pagination */}
        <div className="flex items-center justify-center gap-6">
          {/* Prev Button */}
          {showNavigation && (
            <button
              onClick={goToPrev}
              disabled={!loop && currentIndex === 0}
              className="text-charcoal-green hover:text-moss-stone transition-colors duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous slide"
            >
              <ChevronLeft />
            </button>
          )}

          {/* Pagination Dots */}
          {showPagination && (
            <div className="flex justify-center gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    currentIndex === index
                      ? "w-8 h-2 bg-moss-stone"
                      : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Next Button */}
          {showNavigation && (
            <button
              onClick={goToNext}
              disabled={!loop && currentIndex >= items.length - 1}
              className="text-charcoal-green hover:text-moss-stone transition-colors duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next slide"
            >
              <ChevronRight />
            </button>
          )}
        </div>
      </div>
    );
  }

  // ==============================
  // Standard Carousel (non-centered)
  // ==============================
  const totalSlidesStandard = Math.ceil(items.length / itemsToShow);
  const maxIndex = loop ? items.length : totalSlidesStandard - 1;
  const translateValue = -(currentIndex * (100 / itemsToShow));

  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(${translateValue}%)`,
            gap: `${gap}px`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{
                width: `calc(${100 / itemsToShow}% - ${
                  (gap * (itemsToShow - 1)) / itemsToShow
                }px)`,
              }}
            >
              {renderItem(item, index, false)}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      {showNavigation && items.length > itemsToShow && (
        <>
          <button
            onClick={goToPrev}
            disabled={!loop && currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-moss-stone hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous slide"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={goToNext}
            disabled={!loop && currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-moss-stone hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next slide"
          >
            <ChevronRight />
          </button>
        </>
      )}

      {/* Pagination */}
      {showPagination && totalSlidesStandard > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalSlidesStandard }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index * itemsToShow)}
              className={`transition-all duration-300 rounded-full ${
                Math.floor(currentIndex / itemsToShow) === index
                  ? "w-8 h-2 bg-moss-stone"
                  : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
