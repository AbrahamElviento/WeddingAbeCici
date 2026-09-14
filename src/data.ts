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
      imageUrl: "./groom-1.jpg",
      parents: "Son of Bapak Budi Wibowo (alm) & Ibu Sayekti Nastiti"
    },
    bride: {
      fullName: "Sara Cici Diajeng Suciati",
      nickname: "Cici",
      imageUrl: "./bride-1.jpg",
      parents: "Daughter of Bapak Rohani & Ibu Rini Rumiyati"
    },
    hashtag: "#CiciAbe2026",
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
      dressCode: "Free & Proper Attire (Anything neat and suitable for church)",
      gmapsUrl: "https://maps.app.goo.gl/fj1gmYujvgPh9tTX6",
      iconName: "ring"
    },
    {
      id: "sch-2",
      title: "Wedding Reception",
      time: "12:00 PM - 01:00 PM",
      venue: "GIA Jemaat Sindoro Hall",
      address: "Jl. Sindoro I No.13 A, Cirebonan, Bandarjo, Kec. Ungaran Bar., Kabupaten Semarang, Jawa Tengah 50517",
      gmapsUrl: "https://maps.app.goo.gl/fj1gmYujvgPh9tTX6",
      iconName: "cake"
    }
  ] as ScheduleItem[],
  route: {
    mapChannelsUrl: "https://www.mapchannels.com/routemaps3/map.htm?route=-7.117391,110.412769,-7.117456,110.411761",
    googleMapsDirectionsUrl: "https://www.google.com/maps/dir/-7.117391,110.412769/-7.117456,110.411761",
    googleMapsEmbedDirectionsUrl: "https://maps.google.com/maps?saddr=-7.117391,110.412769&daddr=-7.117456,110.411761&t=&z=18&ie=UTF8&iwloc=&output=embed",
    googleStreetViewEmbedUrl: "https://maps.google.com/maps?layer=c&cbll=-7.117391,110.412769&cbp=12,270,0,0,0&output=svembed",
    startCoordinates: "-7.117391, 110.412769",
    endCoordinates: "-7.117456, 110.411761"
  },
  gallery: [] as GalleryItem[],
  registry: [
    {
      id: "reg-1",
      bankName: "Mandiri Bank",
      accountNumber: "1360037328108",
      accountHolder: "Cici Diajeng Suciati"
    },
    {
      id: "reg-2",
      bankName: "BCA Bank",
      accountNumber: "2221601981",
      accountHolder: "Abraham Elwinas"
    }
  ] as RegistryAccount[]
};
