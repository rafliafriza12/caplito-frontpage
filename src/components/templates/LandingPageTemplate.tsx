import { Hero } from "../organisms/home/Hero";
import Testimonials from "../organisms/home/Testimonials";
import Benefit from "../organisms/home/Benefit";
import Feature from "../organisms/home/Feature";
import HowToRegister from "../organisms/home/HowToRegister";
import HowToUse from "../organisms/home/HowToUse";
import FAQ from "../organisms/home/FAQ";
export function LandingPageTemplate() {
  return (
    <>
      <Hero />
      <Testimonials />
      <Benefit />
      <Feature />
      <HowToRegister />
      <HowToUse />
      <FAQ />
    </>
  );
}
