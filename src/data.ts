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
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800&h=1000",
      parents: "Son of Bapak Budi Wibowo (alm) & Ibu Sayekti Nastiti"
    },
    bride: {
      fullName: "Sara Cici Diajeng Suciati",
      nickname: "Cici",
      imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800&h=1000",
      parents: "Daughter of Bapak Rohani & Ibu Rini Rumiyati"
    },
    hashtag: "#AbeCici2026",
    weddingDate: "2026-11-07T10:00:00", // Full ISO date for the countdown
    weddingDateFormatted: "Saturday, 7 November 2026",
    venueName: "GIA Jemaat Sindoro",
    venueAddress: "Jl. Sindoro I No.13 A, Cirebonan, Bandarjo, Kec. Ungaran Bar., Kabupaten Semarang, Jawa Tengah 50517"
  },
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
      url: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=800",
      caption: "Main Street Entrance from Jl. Diponegoro into Jl. Sindoro I (Ungaran)"
    },
    {
      id: "gal-2",
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
      caption: "Street View & Wayfinding Alley leading to GIA Jemaat Sindoro"
    },
    {
      id: "gal-3",
      url: "https://images.unsplash.com/photo-1548625361-183049197c36?auto=format&fit=crop&q=80&w=800",
      caption: "GIA Jemaat Sindoro Front Exterior & Main Building Entrance"
    },
    {
      id: "gal-4",
      url: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&q=80&w=800",
      caption: "Main Sanctuary Hall Interior & Wedding Blessing Altar"
    },
    {
      id: "gal-5",
      url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800",
      caption: "Reception Hall & Fellowship Area"
    },
    {
      id: "gal-6",
      url: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=800",
      caption: "Spacious Guest Parking & Drop-off Area"
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
