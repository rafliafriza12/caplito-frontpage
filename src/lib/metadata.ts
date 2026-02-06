import { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: {
    default: "Caplito - Your Simple Digital Wallet for Everyday Payments",
    template: "%s | Caplito",
  },
  description:
    "Caplito is a simple, fast, and secure digital wallet. Send money, pay bills, and manage your finances effortlessly. No passwords, no forms - just phone and username.",
  keywords: [
    "Caplito",
    "digital wallet",
    "e-wallet",
    "mobile payment",
    "send money",
    "online payment",
    "fintech",
    "cashless payment",
    "money transfer",
    "digital payment",
    "fast payment",
    "secure wallet",
    "easy payment",
    "financial app",
  ],
  authors: [{ name: "Caplito" }],
  creator: "Caplito",
  publisher: "Caplito",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.caplito.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "id-ID": "/id",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["id_ID"],
    url: "https://www.caplito.com",
    title: "Caplito - Your Simple Digital Wallet",
    description:
      "Send money, pay bills, and manage your finances effortlessly. Fast, secure, and always available.",
    siteName: "Caplito",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Caplito - Digital Wallet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Caplito - Your Simple Digital Wallet",
    description:
      "Send money, pay bills, and manage your finances effortlessly. Fast, secure, and always available.",
    images: ["/twitter-image.jpg"],
    creator: "@caplito",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  category: "Finance",
};
