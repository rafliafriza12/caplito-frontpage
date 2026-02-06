"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/atoms/Container";
import { faqItems } from "@/constant/governance";
import { FAQAccordion } from "@/components/molecules/FAQAccordion";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const FAQ: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(".fade-up-faq");

      elements.forEach((el) => {
        gsap.fromTo(
          el as Element,
          {
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el as Element,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    }, sectionRef);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative z-0">
      <Container className="w-full grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-15 font-mona-sans bg-primary px-4 md:px-6">
        <div className="max-w-full md:max-w-117.5 flex flex-col items-start gap-6 md:gap-12.5 col-span-1 md:col-span-2">
          <div className="flex flex-col items-start gap-4 md:gap-6 fade-up-faq">
            <h1 className="font-medium text-3xl md:text-4xl ipad-horizontal:text-5xl leading-[120%] text-[#0B072C]">
              Have questions? We've got answers!
            </h1>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 w-full col-span-1 md:col-span-3 fade-up-faq">
          <FAQAccordion items={faqItems} />
        </div>
      </Container>
    </div>
  );
};

export default FAQ;
