import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vrhaman Events | Campus Innovation Challenge",
  description: "Join the Vrhaman Campus Innovation Challenge. Participate in AI hackathons, content creation challenges, and win exclusive rewards, internships, and free rides.",
  openGraph: {
    title: "Vrhaman Events | Create. Compete. Ride. Win.",
    description: "Building the future of mobility with students & innovation. Join India's coolest student mobility community.",
    images: ["/events-hero.png"],
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
