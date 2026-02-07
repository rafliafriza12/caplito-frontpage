import { MainLayout } from "@/components/templates/MainLayout";
import PrivacyPolicyTemplate from "@/components/templates/PrivacyPolicyTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the Terms of Service for Caplito digital wallet. Understand your rights and responsibilities when using our platform.",
};

export default function PrivacyPolicy() {
  return (
    <MainLayout>
      <PrivacyPolicyTemplate />
    </MainLayout>
  );
}
