"use client";

import { Container } from "@/components/atoms/Container";
import {
  termsOfServiceData,
  tableOfContents,
  TermsSection,
} from "@/constant/terms-of-service";
import { useState, useEffect, useRef, ReactNode } from "react";

const TermsOfServiceTemplate: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("introduction");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Use Intersection Observer for better performance with Lenis
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -70% 0px", // Trigger when section is in top 30% of viewport
        threshold: 0,
      },
    );

    // Observe all sections
    termsOfServiceData.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
      setIsSidebarOpen(false);
    }
  };

  const renderContent = (content: ReactNode[]) => {
    return (
      <div className="flex flex-col gap-4 text-[#454545] leading-[170%] text-sm md:text-base ">
        {content.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full bg-primary font-mona-sans">
      {/* Hero Section */}
      <Container className=" w-full ">
        <div className="w-full min-h-50 md:min-h-60 lg:min-h-75 bg-linear-to-b from-[#877AEB] to-[#2F2772] rounded-2xl md:rounded-3xl lg:rounded-4xl mt-18 ipad-vertical:mt-25 ipad-horizontal:mt-30 flex flex-col items-center justify-center gap-4 md:gap-6 px-4 py-8 md:py-10">
          <h1 className="text-primary text-3xl md:text-5xl lg:text-[70px] font-medium leading-[120%] text-center">
            Terms of Service
          </h1>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <h1 className="text-xs md:text-sm leading-[150%] text-[#D1D1D1]">
              Effective date: 02/10/2026
            </h1>
            <h1 className="text-xs md:text-sm leading-[150%] text-[#D1D1D1]">
              Updated date: 02/10/2026
            </h1>
            <h1 className="text-xs md:text-sm leading-[150%] text-[#D1D1D1]">
              Version 2.1
            </h1>
          </div>
        </div>
      </Container>

      {/* Mobile Sidebar Toggle */}
      <div className="md:hidden sticky top-16 z-40 bg-white border-b border-[#E5E5E5]">
        <Container className="py-3 px-4">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="flex items-center gap-2 text-[#1F1F1F] font-medium"
          >
            <svg
              className={`w-5 h-5 transition-transform ${isSidebarOpen ? "rotate-180" : ""}`}
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
            <span>Table of Contents</span>
          </button>
        </Container>

        {/* Mobile Sidebar Dropdown */}
        {isSidebarOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-[#E5E5E5] shadow-lg max-h-[60vh] overflow-y-auto">
            <Container className="">
              <nav className="flex flex-col gap-3 py-3">
                {tableOfContents.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left py-2 px-3 rounded-lg text-sm transition-all ${
                      activeSection === item.id
                        ? "bg-[#6C5CE7]/10 text-[#6C5CE7] font-medium"
                        : "text-[#1F1F1F] hover:bg-[#F5F5F5]"
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </nav>
            </Container>
          </div>
        )}
      </div>

      {/* Main Content */}
      <Container className="w-full ">
        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 items-start">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block md:w-[320px] sticky top-24">
            <nav
              data-lenis-prevent
              className="flex flex-col gap-3 pr-4 max-h-[calc(100vh-120px)] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {tableOfContents.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left py-2.5 px-4 rounded-lg text-base transition-all border ${
                    activeSection === item.id
                      ? " text-[#6C5CE7] font-medium border-[#6C5CE7]"
                      : "text-[#454545] hover:bg-[#F5F5F5] border-[#EFEDFC] hover:border-[#E5E5E5]"
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <main className="col-span-1 md:col-span-2 p-4 md:p-6 lg:p-10 rounded-2xl md:rounded-3xl lg:rounded-4xl border border-[#D1D1D1]">
            <div className="flex flex-col items-start gap-12.5">
              {termsOfServiceData.map((section: TermsSection) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="flex flex-col gap-4 items-start"
                >
                  <h2 className="text-xl md:text-2xl lg:text-[36px] font-medium text-[#0B072C] ">
                    {section.title}
                  </h2>
                  <div className="flex flex-col gap-4 md:gap-4">
                    {renderContent(section.content)}
                  </div>
                </section>
              ))}
            </div>
          </main>
        </div>
      </Container>
    </div>
  );
};

export default TermsOfServiceTemplate;
