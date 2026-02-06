"use client";

import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import type { AccordionItem } from "@/types";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BodySmallRegular, Heading3 } from "../atoms/Typography";

gsap.registerPlugin(ScrollTrigger);

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
  allowMultiple?: boolean;
  defaultOpen?: string[];
}

export const Accordion: React.FC<AccordionProps> = ({
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
        }
      );
    });
  }, []);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenItems((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  const isOpen = (id: string) => openItems.includes(id);

  return (
    <div ref={accordionRef} className={cn("w-full space-y-5", className)}>
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
        "bg-charcoal-green-dark overflow-hidden transition-all duration-500 ease-in-out accordion-item",
        isOpen ? "rounded-sm" : "rounded-sm",
        className
      )}
    >
      {/* Header/Title */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between ipad-vertical:h-32 py-6 ipad-vertical:py-4 px-6 text-left hover:bg-charcoal-green-dark/90 transition-colors duration-200"
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${item.id}`}
      >
        <Heading3 className="text-moss-stone text-lg font-medium ipad-vertical:font-light transition-colors duration-300">
          {item.title}
        </Heading3>
        <svg
          className={cn(
            "w-5 h-5 ipad-vertical:w-6 ipad-vertical:h-6 transition-transform duration-500 ease-in-out text-moss-stone flex-shrink-0",
            isOpen ? "rotate-180" : "rotate-0"
          )}
          fill="none"
          stroke="currentColor"
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
          isOpen ? "opacity-100" : "opacity-0"
        )}
      >
        <div ref={contentRef} className="px-6 pb-6 text-moss-stone ">
          {typeof item.content === "string" ? (
            <BodySmallRegular>{item.content}</BodySmallRegular>
          ) : (
            item.content
          )}
        </div>
      </div>
    </div>
  );
};
