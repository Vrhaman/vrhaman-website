import { CollegeEvent } from "./types";

export const MOCK_EVENTS: CollegeEvent[] = [
  {
    id: "1",
    title: "Campus Innovation Challenge",
    collegeName: "Chandigarh University",
    slug: "cu-innovation",
    banner: "https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?auto=format&fit=crop&q=80&w=1000",
    description: "The ultimate student innovation challenge for CU students. Build the future of mobility.",
    whatsappLink: "https://chat.whatsapp.com/Jc2XRRO3ldy0TBu0dD3NdIA",
    startDate: "2026-05-10",
    endDate: "2026-05-20",
    status: "active",
    participantsCount: 450,
    submissionsCount: 120,
    theme: "Student Mobility",
    challenges: [
      {
        id: "c1",
        title: "THE AI CREATOR BATTLE",
        tagline: "Create content that makes people want to ride.",
        description: "Create AI-enhanced content for Vrhaman.",
        rewards: {
          winner: ["FREE Ride", "T-Shirt", "Certificate"],
          all: ["10% OFF Coupon"]
        }
      }
    ]
  },
  {
    id: "2",
    title: "Chitkara Tech Spark",
    collegeName: "Chitkara University",
    slug: "chitkara-tech",
    banner: "https://images.unsplash.com/photo-1523050335456-c4664bd040f1?auto=format&fit=crop&q=80&w=1000",
    description: "Join Chitkara's biggest mobility hackathon.",
    whatsappLink: "https://chat.whatsapp.com/Jc2XRRO3ldy0TBu0dD3NdIA",
    startDate: "2026-05-15",
    endDate: "2026-05-25",
    status: "active",
    participantsCount: 320,
    submissionsCount: 85,
    theme: "Smart Transport",
    challenges: []
  },
  {
    id: "3",
    title: "CGC Landran HackFest",
    collegeName: "CGC Landran",
    slug: "cgc-hackfest",
    banner: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000",
    description: "Innovate and build with CGC.",
    whatsappLink: "https://chat.whatsapp.com/Jc2XRRO3ldy0TBu0dD3NdIA",
    startDate: "2026-06-01",
    endDate: "2026-06-10",
    status: "upcoming",
    participantsCount: 0,
    submissionsCount: 0,
    theme: "Future Tech",
    challenges: []
  }
];

export function getEventBySlug(slug: string): CollegeEvent | undefined {
  return MOCK_EVENTS.find(e => e.slug === slug);
}
