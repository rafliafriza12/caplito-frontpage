import { MainLayout } from "@/components/templates/MainLayout";
import TermsOfServiceTemplate from "@/components/templates/TermsOfServiceTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the Terms of Service for Caplito digital wallet. Understand your rights and responsibilities when using our platform.",
};

export default function TermsOfServicePage() {
  return (
    <MainLayout>
      <TermsOfServiceTemplate />
    </MainLayout>
  );
}
