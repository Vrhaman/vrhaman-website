export interface EventChallenge {
  id: string;
  title: string;
  tagline: string;
  description: string;
  mission?: string;
  theme?: string;
  problemStatement?: string;
  rewards: {
    winner: string[];
    top2?: string[];
    top3?: string[];
    all: string[];
  };
}

export interface CollegeEvent {
  id: string;
  title: string;
  collegeName: string;
  slug: string;
  banner: string;
  description: string;
  whatsappLink: string;
  startDate: string;
  endDate: string;
  status: 'active' | 'inactive' | 'upcoming';
  challenges: EventChallenge[];
  participantsCount: number;
  submissionsCount: number;
  theme: string;
}

export interface Registration {
  id: string;
  fullName: string;
  college: string;
  eventSlug: string;
  challengeType: string;
  phone: string;
  email: string;
  ambassadorCode?: string;
  timestamp: string;
}
