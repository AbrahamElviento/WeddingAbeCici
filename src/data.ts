export interface StoryEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
}

export interface ScheduleItem {
  id: string;
  title: string;
  time: string;
  venue: string;
  address: string;
  dressCode: string;
  gmapsUrl: string;
  iconName: 'ring' | 'glass' | 'cake' | 'music';
}

export interface GalleryItem {
  id: string;
  url: string;
  caption: string;
}

export interface RegistryAccount {
  id: string;
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  qrCodeUrl?: string;
}

export const weddingData = {
  couple: {
    groom: {
      fullName: "Abraham Elwinas",
      nickname: "Abe",
      description: "An adventurer at heart who found his greatest adventure in Cici. Abe is a creative mind, a lover of nature, and someone who believes every day is a reason to celebrate love.",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800&h=1000",
      parents: "Son of Bapak Budi Wibowo (alm) & Ibu Sayekti Nastiti"
    },
    bride: {
      fullName: "Sara Cici Diajeng Suciati",
      nickname: "Cici",
      description: "A kind soul with a passionate heart for art and storytelling. Cici brings warmth and laughter wherever she goes, and she found her perfect counterpart in Abe's gentle heart.",
      imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800&h=1000",
      parents: "Daughter of Bapak Rohani & Ibu Rini Rumiyati"
    },
    hashtag: "#AbeCici2026",
    weddingDate: "2026-11-07T10:00:00", // Full ISO date for the countdown
    weddingDateFormatted: "Saturday, 7 November 2026",
    venueName: "GIA Jemaat Sindoro",
    venueAddress: "Jl. Sindoro I No.13 A, Cirebonan, Bandarjo, Kec. Ungaran Bar., Kabupaten Semarang, Jawa Tengah 50517"
  },
  story: [
    {
      id: "story-1",
      title: "How We Met",
      date: "August 2021",
      description: "It all started under the misty peaks of Mount Sindoro. A chance meeting on a hiking trail led to an afternoon of sharing stories over warm coffee, and we realized our paths were meant to walk together.",
      imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "story-2",
      title: "The Proposal",
      date: "September 2024",
      description: "On a quiet evening overlooking the same hills where we first met, Abe went down on one knee. With tears in her eyes and a heart full of joy, Cici said 'Yes' as the sun dipped below the golden horizon.",
      imageUrl: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "story-3",
      title: "The Big Day",
      date: "November 2026",
      description: "Now, we are taking our most beautiful step forward. We cannot wait to exchange our vows and begin our forever story, surrounded by the laughter and love of our dearest family and friends.",
      imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800"
    }
  ] as StoryEvent[],
  schedule: [
    {
      id: "sch-1",
      title: "Holy Matrimony",
      time: "10:00 AM - 12:00 PM",
      venue: "GIA Jemaat Sindoro",
      address: "Jl. Sindoro I No.13 A, Cirebonan, Bandarjo, Kec. Ungaran Bar., Kabupaten Semarang, Jawa Tengah 50517",
      dressCode: "Formal Pastel (Sage Green, Cream, Soft Blush)",
      gmapsUrl: "https://maps.app.goo.gl/fj1gmYujvgPh9tTX6",
      iconName: "ring"
    },
    {
      id: "sch-2",
      title: "Wedding Reception",
      time: "12:00 PM - 02:30 PM",
      venue: "GIA Jemaat Sindoro Hall",
      address: "Jl. Sindoro I No.13 A, Cirebonan, Bandarjo, Kec. Ungaran Bar., Kabupaten Semarang, Jawa Tengah 50517",
      dressCode: "Formal / Elegant Evening Wear / Premium Batik",
      gmapsUrl: "https://maps.app.goo.gl/fj1gmYujvgPh9tTX6",
      iconName: "cake"
    }
  ] as ScheduleItem[],
  gallery: [
    {
      id: "gal-1",
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      caption: "The promise of forever"
    },
    {
      id: "gal-2",
      url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800",
      caption: "Moments of laughter"
    },
    {
      id: "gal-3",
      url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=800",
      caption: "Walking hand in hand"
    },
    {
      id: "gal-4",
      url: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=800",
      caption: "The sunset glow"
    },
    {
      id: "gal-5",
      url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=800",
      caption: "A quiet cuddle"
    },
    {
      id: "gal-6",
      url: "https://images.unsplash.com/photo-1519225495810-7512c696505a?auto=format&fit=crop&q=80&w=800",
      caption: "Vows and beautiful dreams"
    }
  ] as GalleryItem[],
  registry: [
    {
      id: "reg-1",
      bankName: "BCA Bank",
      accountNumber: "8492-2342-12",
      accountHolder: "Abraham Elwinas"
    },
    {
      id: "reg-2",
      bankName: "Mandiri Bank",
      accountNumber: "131-00-14892-03",
      accountHolder: "Sara Cici Diajeng Suciati"
    }
  ] as RegistryAccount[]
};
