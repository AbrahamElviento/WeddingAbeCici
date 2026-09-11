export type Language = 'id' | 'en';

export const translations = {
  id: {
    // Nav
    navHome: 'Beranda',
    navCouple: 'Mempelai',
    navEvents: 'Jadwal Acara',
    navGallery: 'Galeri Lokasi',

    // Hero
    weddingInvitation: 'UNDANGAN PERNIKAHAN',
    weddingDateFormatted: 'Sabtu, 7 November 2026',
    venueLocation: 'GIA Jemaat Sindoro • Ungaran, Semarang',
    days: 'Hari',
    hours: 'Jam',
    minutes: 'Menit',
    seconds: 'Detik',
    countdownCompleted: 'Hari Bahagia Telah Tiba!',

    // Floating widgets tooltips
    playMusic: 'Putar Musik',
    muteMusic: 'Matikan Musik',
    switchToDark: 'Mode Gelap',
    switchToLight: 'Mode Terang',
    switchToEn: 'English',
    switchToId: 'Bahasa Indonesia',

    // Couple
    coupleEyebrow: 'DENGAN PENUH SUKACITA',
    coupleTitle: 'Pasangan Mempelai',
    brideRole: 'Mempelai Wanita',
    groomRole: 'Mempelai Pria',
    brideParents: 'Putri dari Bapak Rohani & Ibu Rini Rumiyati',
    groomParents: 'Putra dari Bapak Budi Wibowo (alm) & Ibu Sayekti Nastiti',

    // Events
    eventsEyebrow: 'JADWAL ACARA',
    eventsTitle: 'Waktu & Lokasi',
    eventsSubtitle: 'Kami sangat mengharapkan kehadiran Bapak/Ibu/Saudara/i untuk berbagi kebahagiaan bersama kami.',
    
    matrimonyTitle: 'Pemberkatan Nikah',
    matrimonyTime: '10:00 WIB - 12:00 WIB',
    matrimonyDesc: 'Ibadah sakramen pernikahan dan pemberkatan nikah kudus.',
    attireLabel: 'Busana / Dress Code:',
    matrimonyDressCode: 'Bebas & Rapi (Sopan dan sesuai untuk ibadah gereja)',

    receptionTitle: 'Resepsi Pernikahan',
    receptionTime: '12:00 WIB - 14:00 WIB',
    receptionDesc: 'Ramah tamah dan makan siang bersama merayakan kebahagiaan setelah acara ibadah pemberkatan.',

    openMaps: 'Buka Google Maps',
    addToCalendar: 'Tambah ke Kalender',
    venueNotice: 'Catatan: Tamu diundang untuk menghadiri Pemberkatan & Resepsi, atau langsung hadir pada Resepsi pukul 12:00 WIB.',

    // Venue Gallery
    galleryEyebrow: 'LOKASI & PETUNJUK',
    galleryTitle: 'Galeri Lokasi',
    gallerySubtitle: 'Akses jalan utama, petunjuk belokan dari Jl. Diponegoro / Jl. Sindoro I, serta area gedung GIA Jemaat Sindoro Ungaran, Semarang.',
    clickToExpand: 'Klik untuk memperbesar',
    photoCount: 'Foto {current} dari {total}',
    lightboxNavNotice: 'Gunakan tombol panah Kiri / Kanan untuk navigasi',

    galleryCaptions: [
      'Pintu Masuk Jalan Utama dari Jl. Diponegoro ke Jl. Sindoro I (Ungaran)',
      'Akses Jalan & Gang Petunjuk Arah menuju GIA Jemaat Sindoro',
      'Tampak Depan & Pintu Utama Gedung GIA Jemaat Sindoro',
      'Ruang Utama Gereja & Altar Pemberkatan Nikah',
      'Ruang Resepsi & Area Ramah Tamah',
      'Area Parkir Tamu & Drop-off Luas'
    ],

    // Gift Registry
    registryEyebrow: 'TANDA KASIH',
    registryTitle: 'Amplop Digital',
    registrySubtitle: 'Doa restu Anda adalah hadiah terindah bagi kami. Namun jika Anda ingin memberikan tanda kasih, Anda dapat menyalurkannya melalui rekening di bawah ini:',
    accountNumberLabel: 'Nomor Rekening:',
    accountHolderLabel: 'Atas Nama:',
    copyAccount: 'Salin Nomor Rekening',
    accountCopied: 'Nomor Rekening Tersalin!',
    giftPhysicalNotice: 'Membutuhkan informasi pengiriman kado fisik atau ucapan? Silakan hubungi kami secara langsung.',

    // Footer
    footerBibleVerse: '"Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia."',
    footerBibleRef: '- Matius 19:6',
    footerThankYou: 'Terima kasih atas doa restu dan kasih yang Anda berikan. Kami sangat bersukacita dapat berbagi hari bahagia ini bersama Anda.',
    footerRights: '© 2026 Cici & Abe. Hak Cipta Dilindungi.'
  },
  en: {
    // Nav
    navHome: 'Home',
    navCouple: 'The Couple',
    navEvents: 'Events',
    navGallery: 'Venue Gallery',

    // Hero
    weddingInvitation: 'WEDDING INVITATION',
    weddingDateFormatted: 'Saturday, 7 November 2026',
    venueLocation: 'GIA Jemaat Sindoro • Ungaran, Semarang',
    days: 'Days',
    hours: 'Hours',
    minutes: 'Mins',
    seconds: 'Secs',
    countdownCompleted: 'The Big Day is Here!',

    // Floating widgets tooltips
    playMusic: 'Play Music',
    muteMusic: 'Mute Music',
    switchToDark: 'Switch to Dark Mode',
    switchToLight: 'Switch to Light Mode',
    switchToEn: 'English',
    switchToId: 'Bahasa Indonesia',

    // Couple
    coupleEyebrow: 'WITH LOVE & JOY',
    coupleTitle: 'The Happy Couple',
    brideRole: 'The Bride',
    groomRole: 'The Groom',
    brideParents: 'Daughter of Bapak Rohani & Ibu Rini Rumiyati',
    groomParents: 'Son of Bapak Budi Wibowo (alm) & Ibu Sayekti Nastiti',

    // Events
    eventsEyebrow: 'EVENT SCHEDULE',
    eventsTitle: 'Time & Venue',
    eventsSubtitle: 'We look forward to celebrating this special day together with you.',
    
    matrimonyTitle: 'Holy Matrimony',
    matrimonyTime: '10:00 AM - 12:00 PM',
    matrimonyDesc: 'Sacred wedding ceremony and holy matrimony blessing.',
    attireLabel: 'Attire / Dress Code:',
    matrimonyDressCode: 'Free & Proper Attire (Anything neat and suitable for church)',

    receptionTitle: 'Wedding Reception',
    receptionTime: '12:00 PM - 02:00 PM',
    receptionDesc: 'Join us for joyous dining, toasts, and celebratory fellowship immediately following the ceremony.',

    openMaps: 'Open Google Maps',
    addToCalendar: 'Add to Calendar',
    venueNotice: 'Note: Guests are welcome to join both the Matrimony and Reception, or attend the Reception directly at 12:00 PM.',

    // Venue Gallery
    galleryEyebrow: 'LOCATION & DIRECTIONS',
    galleryTitle: 'Venue Gallery',
    gallerySubtitle: 'Main street access, turnoff guidance from Jl. Diponegoro / Jl. Sindoro I, and GIA Jemaat Sindoro building views in Ungaran, Semarang.',
    clickToExpand: 'Click to expand',
    photoCount: 'Photo {current} of {total}',
    lightboxNavNotice: 'Use Left / Right arrow buttons to navigate',

    galleryCaptions: [
      'Main Street Entrance from Jl. Diponegoro into Jl. Sindoro I (Ungaran)',
      'Street View & Wayfinding Alley leading to GIA Jemaat Sindoro',
      'GIA Jemaat Sindoro Front Exterior & Main Building Entrance',
      'Main Sanctuary Hall Interior & Wedding Blessing Altar',
      'Reception Hall & Fellowship Area',
      'Spacious Guest Parking & Drop-off Area'
    ],

    // Gift Registry
    registryEyebrow: 'GIFTS & BLESSINGS',
    registryTitle: 'Wedding Registry',
    registrySubtitle: 'Your presence on our big day is the greatest gift of all. However, if you wish to honor us with a token of love, we have provided our digital transfer details below:',
    accountNumberLabel: 'Account Number:',
    accountHolderLabel: 'Account Holder:',
    copyAccount: 'Copy Account',
    accountCopied: 'Account Copied!',
    giftPhysicalNotice: 'Need details for physical gifts or wedding souvenirs? Feel free to reach us directly.',

    // Footer
    footerBibleVerse: '"Therefore what God has joined together, let no one separate."',
    footerBibleRef: '- Matthew 19:6',
    footerThankYou: 'Thank you for being a part of our life story and celebrating our marriage. We look forward to sharing this magical day with you.',
    footerRights: '© 2026 Cici & Abe. All Rights Reserved.'
  }
};
