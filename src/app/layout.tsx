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
  title: "Vrhaman",
  description: "Vrhaman is a platform for booking vehicles on rent",
  icons: {
    icon: "/app_icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${dmSans.variable} ${jakarta.variable} ${urbanist.variable} antialiased`}>
      <body className="font-primary">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
