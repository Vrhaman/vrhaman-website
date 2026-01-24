import type { Metadata } from "next";
import { Poppins, DM_Sans, Plus_Jakarta_Sans, Urbanist } from 'next/font/google';
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

// Modern Google Fonts Setup
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.vrhaman.com'),
  title: {
    default: "Vrhaman | Premium Bike & Car Rentals",
    template: "%s | Vrhaman"
  },
  description: "Vrhaman offers premium bike and car rentals with 24/7 support, comprehensive insurance, and doorstep delivery. Book your ride today!",
  keywords: ["bike rental", "car rental", "vehicle rental", "premium rental", "vrhaman"],
  authors: [{ name: "Vrhaman Mobitech Pvt Ltd" }],
  creator: "Vrhaman Mobitech Pvt Ltd",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.vrhaman.com",
    title: "Vrhaman | Premium Bike & Car Rentals",
    description: "Experience luxury and comfort with Vrhaman's extensive fleet of verified vehicles. Affordable, convenient, and premium rentals at your doorstep.",
    siteName: "Vrhaman",
    images: [
      {
        url: "/og-image.jpg", // Assuming an OG image exists or will be added, otherwise it falls back to none or default
        width: 1200,
        height: 630,
        alt: "Vrhaman Vehicle Rentals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vrhaman | Premium Bike & Car Rentals",
    description: "Rent premium bikes and cars with ease. 24/7 support and doorstep delivery available.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/app_icon.png",
    apple: "/app_icon.png",
  },
  verification: {
    google: "google-site-verification-code", // Placeholder
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.vrhaman.com/#organization",
      "name": "Vrhaman Mobitech Pvt Ltd",
      "url": "https://www.vrhaman.com",
      "logo": "https://www.vrhaman.com/vrhaman-logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91 8968779413",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": "en"
      },
      "sameAs": [
        "https://www.facebook.com/vrhaman",
        "https://twitter.com/vrhaman",
        "https://www.instagram.com/vrhaman",
        "https://www.linkedin.com/company/vrhaman"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.vrhaman.com/#website",
      "url": "https://www.vrhaman.com",
      "name": "Vrhaman",
      "publisher": {
        "@id": "https://www.vrhaman.com/#organization"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${dmSans.variable} ${jakarta.variable} ${urbanist.variable} antialiased`}>
      <body className="font-primary">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
