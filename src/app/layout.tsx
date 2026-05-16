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
    default: "Vrhaman | Self-Drive Bike & Car Rentals | Premium Rental Platform",
    template: "%s | Vrhaman"
  },
  description: "Rent premium self-drive bikes, cars, and EVs easily with Vrhaman. India's top platform for self-drive rentals with transparent pricing, instant booking, and nearby vehicle discovery. Perfect for students, tourists, and daily commuters.",
  keywords: [
    "self-drive bike rental", 
    "self-drive car rental", 
    "bike rental app", 
    "car rental app", 
    "monthly car rental India",
    "hourly bike rental",
    "EV rental platform",
    "vehicle rental for students",
    "vehicle rental for tourists",
    "rent bikes in Pune",
    "rent cars in Gurgaon",
    "Vrhaman rentals",
    "nearby vehicle rental service"
  ],
  alternates: {
    canonical: '/',
  },
  authors: [{ name: "Vrhaman Mobitech Pvt Ltd" }],
  creator: "Vrhaman Mobitech Pvt Ltd",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.vrhaman.com",
    title: "Vrhaman | Rent Bikes, Cars & EVs Easily | India's Best Rental Platform",
    description: "Discover nearby vehicles, compare options, and book instantly. Experience freedom with our premium fleet or partner with us to grow your rental business.",
    siteName: "Vrhaman",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vrhaman - India's Premium Self-Drive Rental Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vrhaman | Rent Bikes, Cars & EVs Easily",
    description: "The ultimate destination for self-drive rentals. Book in a few taps and enjoy transparent pricing.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/app_icon.png",
    apple: "/app_icon.png",
  }
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
      "@type": "LocalBusiness",
      "name": "Vrhaman - Self Drive Bike & Car Rental",
      "image": "https://www.vrhaman.com/vrhaman-logo.png",
      "@id": "https://www.vrhaman.com",
      "url": "https://www.vrhaman.com",
      "telephone": "+91 8968779413",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Gurgaon",
        "addressLocality": "Gurgaon",
        "addressRegion": "Haryana",
        "postalCode": "122001",
        "addressCountry": "IN"
      }
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
    <html lang="en" suppressHydrationWarning className={`${poppins.variable} ${dmSans.variable} ${jakarta.variable} ${urbanist.variable} antialiased`}>
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
