"use client";
import Link from "next/link";
import { Container } from "@/components/atoms/Container";
import BumiLogo from "@/components/atoms/BumiLogo";
import { HeroBackgroundPattern } from "@/components/molecules/home/HeroBackgroundPattern";

export default function NotFound() {
  return (
    <main className="min-h-svh bg-charcoal-green-dark relative flex items-center justify-center overflow-hidden font-parkinsans z-0">
      <HeroBackgroundPattern position="top-right" />

      <HeroBackgroundPattern position="bottom-left" />
      <Container className="relative z-10">
        <div className="flex flex-col items-center justify-center text-center gap-8 py-20">
          {/* Logo */}
          <div className="w-32 lg:w-40 mb-4 animate-pulse">
            <BumiLogo variant="full" />
          </div>

          {/* 404 Text */}
          <div className="relative">
            <h1 className="text-[120px] sm:text-[180px] lg:text-[240px] font-bold text-moss-stone/20 leading-none select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-light text-white-mineral">
                Page Not Found
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-2xl space-y-4">
            <p className="text-lg sm:text-xl text-earth-craft font-light leading-relaxed">
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href="/"
              className="group relative px-8 py-4 bg-moss-stone text-charcoal-green font-medium rounded-lg overflow-hidden transition-all duration-300 "
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg
                  className="w-5 h-5 transition-transform group-hover:-translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to Home
              </span>
              <div className="absolute inset-0 bg-earth-craft transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </Link>

            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.history.back();
              }}
              className="px-8 py-4 border-2 border-earth-craft text-earth-craft font-medium rounded-lg transition-all duration-300 hover:bg-earth-craft hover:text-charcoal-green "
            >
              Go Back
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
