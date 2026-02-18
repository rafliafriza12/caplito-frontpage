"use client";
import { ReactNode } from "react";
import { Navbar } from "../organisms/Navbar";
import Footer from "../organisms/Footer";
import FooterVector from "../atoms/FooterVector";
import { usePathname } from "next/navigation";
interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const pathname = usePathname();
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main
        className={`flex-1 select-none lg:select-text ${pathname === "/" ? "overflow-hidden" : ""}`}
      >
        {children}
      </main>
      <Footer variant={pathname === "/" ? "primary" : "secondary"} />
    </div>
  );
}
