"use client";

import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import type { AccordionItem } from "@/types";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BodyLargeRegular, BodySmallRegular } from "../atoms/Typography";

gsap.registerPlugin(ScrollTrigger);

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
  allowMultiple?: boolean;
  defaultOpen?: string[];
}

export const FAQAccordion: React.FC<AccordionProps> = ({
  items,
  className,
  allowMultiple = false,
  defaultOpen = [],
}) => {
  const [openItems, setOpenItems] = useState<string[]>(defaultOpen);
  const accordionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cardElements = gsap.utils.toArray(".accordion-item") as HTMLElement[];
    cardElements.forEach((card, index) => {
      const startProgress = `top ${240 - index * 10}%`;
      const endProgress = `top ${180 - index * 10}%`;
      gsap.fromTo(
        card,
        {
          x: 100,
          opacity: 0,
          scale: 0.9,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: startProgress,
            end: endProgress,
            scrub: 2,
          },
        },
      );
    });
  }, []);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
      );
    } else {
      setOpenItems((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  const isOpen = (id: string) => openItems.includes(id);

  return (
    <div
      ref={accordionRef}
      className={cn("w-full flex flex-col gap-6", className)}
    >
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={isOpen(item.id)}
          onToggle={() => toggleItem(item.id)}
          className="accordion-item"
        />
      ))}
    </div>
  );
};

interface AccordionItemProps {
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  item,
  isOpen,
  onToggle,
  className,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [item.content]);

  return (
    <div
      className={cn(
        "bg-[#F5F5F5] overflow-hidden transition-all duration-500 ease-in-out accordion-item py-3 px-4 rounded-2xl font-mona-sans",

        className,
      )}
    >
      {/* Header/Title */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between   text-left  transition-colors duration-200"
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${item.id}`}
      >
        <h1 className="text-black text-xl font-medium leading-[120%]">
          {item.title}
        </h1>
        <svg
          className={cn(
            "w-6 h-6 transition-transform duration-500 ease-in-out text-moss-stone shrink-0",
            isOpen ? "rotate-180" : "rotate-0",
          )}
          fill="none"
          stroke="#6C5CE7"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Content */}
      <div
        id={`accordion-content-${item.id}`}
        style={{
          maxHeight: isOpen ? `${contentHeight}px` : "0px",
        }}
        className={cn(
          "transition-all duration-500 ease-in-out overflow-hidden",
          isOpen ? "opacity-100" : "opacity-0",
        )}
      >
        <div ref={contentRef} className=" pt-2.5 text-[#595959] ">
          <p className="whitespace-pre-line text-base leading-[150%]">
            {item.content}
          </p>
        </div>
      </div>
    </div>
  );
};
