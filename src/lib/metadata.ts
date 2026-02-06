import { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: {
    default:
      "PT Bumi Resources Tbk - Leading Mining & Energy Company in Indonesia",
    template: "%s | PT Bumi Resources Tbk",
  },
  description:
    "PT Bumi Resources Tbk is a world-class global operator in energy and mining sectors. Leading coal producer in Indonesia with commitment to sustainability and ESG excellence.",
  keywords: [
    "Bumi Resources",
    "PT Bumi Resources Tbk",
    "mining company Indonesia",
    "coal mining",
    "energy sector Indonesia",
    "sustainable mining",
    "ESG mining company",
    "Indonesian coal producer",
    "mining investment",
    "natural resources",
    "Bakrie Group",
    "IDX listed mining",
    "thermal coal",
    "metallurgical coal",
  ],
  authors: [{ name: "PT Bumi Resources Tbk" }],
  creator: "PT Bumi Resources Tbk",
  publisher: "PT Bumi Resources Tbk",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.bumiresources.com"),
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
    url: "https://www.bumiresources.com",
    title: "PT Bumi Resources Tbk - Leading Mining & Energy Company",
    description:
      "World-class global operator in energy and mining sectors. Committed to sustainable practices and ESG excellence.",
    siteName: "PT Bumi Resources Tbk",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PT Bumi Resources Tbk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Bumi Resources Tbk - Leading Mining & Energy Company",
    description:
      "World-class global operator in energy and mining sectors. Committed to sustainable practices.",
    images: ["/twitter-image.jpg"],
    creator: "@bumiresources",
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
      { url: "/img/logo/bumi-logo.png" },
      { url: "/img/logo/bumi-logo.png", sizes: "16x16", type: "image/png" },
      { url: "/img/logo/bumi-logo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/img/logo/bumi-logo.png" }],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  category: "Business",
};
