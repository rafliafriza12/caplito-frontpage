"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className={cn("flex items-center justify-center gap-6", className)}>
      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={cn(
          "w-10 h-10 flex items-center justify-center transition-all duration-200",
          currentPage === 1
            ? "opacity-30 cursor-not-allowed"
            : "hover:scale-110 cursor-pointer"
        )}
        aria-label="Previous page"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-charcoal-green-dark"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="flex items-center gap-3">
        {Array.from({ length: totalPages }, (_, index) => {
          const pageNumber = index + 1;
          const isActive = pageNumber === currentPage;

          return (
            <button
              key={pageNumber}
              onClick={() => onPageChange(pageNumber)}
              className={cn(
                "rounded-full transition-all duration-300",
                isActive
                  ? "w-3 h-3 bg-green-primary"
                  : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
              )}
              aria-label={`Go to page ${pageNumber}`}
              aria-current={isActive ? "page" : undefined}
            />
          );
        })}
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={cn(
          "w-10 h-10 flex items-center justify-center transition-all duration-200",
          currentPage === totalPages
            ? "opacity-30 cursor-not-allowed"
            : "hover:scale-110 cursor-pointer"
        )}
        aria-label="Next page"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-charcoal-green-dark"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
};
