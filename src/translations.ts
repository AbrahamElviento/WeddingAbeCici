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
    countdownTitle: 'Menghitung Hari Bahagia',
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
    sharePersonalLink: 'Buat Link Nama Tamu',

    // Guest Personalization
    dearGuestHeader: 'Kepada Yth. Bapak/Ibu/Saudara/i:',
    defaultGuestName: 'Tamu Undangan',
    guestInvitationText: 'Tanpa mengurangi rasa hormat, kami mengundang Anda untuk hadir dan memberikan doa restu di hari bahagia kami.',
    generatePersonalUrlTitle: 'Buat Link Undangan Nama Tamu',
    enterGuestNamePlaceholder: 'Tulis Nama Tamu (cth: Bapak Budi & Keluarga)',
    copyPersonalLinkBtn: 'Salin Link Undangan',
    personalLinkCopied: 'Link Undangan Tersalin!',

    // Couple
    coupleEyebrow: 'DENGAN PENUH SUKACITA',
    coupleTitle: 'Pasangan Mempelai yang Diberkati',
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
    attireLabel: 'Busana:',
    matrimonyDressCode: 'Bebas & Rapi (Sopan dan sesuai untuk ibadah gereja)',

    receptionTitle: 'Resepsi Pernikahan',
    receptionTime: '12:00 WIB - 13:00 WIB',
    receptionDesc: 'Ramah tamah dan makan siang bersama merayakan kebahagiaan setelah acara ibadah pemberkatan.',

    openMaps: 'Buka Google Maps',
    venueMapLabel: 'Peta Lokasi',
    addToCalendar: 'Tambah ke Kalender',
    venueNotice: 'Catatan: Tamu diundang untuk menghadiri Pemberkatan & Resepsi, atau langsung hadir pada Resepsi pukul 12:00 WIB.',

    // Venue Gallery / Route Map
    galleryEyebrow: 'PETUNJUK RUTE & PETA DENAH',
    galleryTitle: 'Peta Rute & Navigasi Lokasi',
    gallerySubtitle: 'Panduan rute Google Maps dan peta denah lokasi menuju Gereja GIA Jemaat Sindoro.',
    clickToExpand: 'Klik untuk memperbesar',
    photoCount: 'Foto {current} dari {total}',
    lightboxNavNotice: 'Gunakan tombol panah Kiri / Kanan untuk navigasi',

    mapChannelsTab: 'Peta Rute MapChannels',
    googleDirectionsTab: 'Peta Rute Google Maps',
    traditionalMapTab: 'Peta Denah (Traditional Map)',
    routeStepsTitle: 'Panduan Rute Jalan Utama ke Gereja:',
    routeStep1Title: 'Langkah 1: Belokan Jalan Utama',
    routeStep1Desc: 'Dari Jl. Diponegoro (Ungaran), belok masuk ke Jl. Sindoro I (Koordinat -7.117391, 110.412769).',
    routeStep2Title: 'Langkah 2: Menyusuri Jl. Sindoro I',
    routeStep2Desc: 'Ikuti jalan aspal Jl. Sindoro I lurus sejauh kurang lebih 100 meter.',
    routeStep3Title: 'Langkah 3: Tiba di GIA Jemaat Sindoro',
    routeStep3Desc: 'Belok ke gang kompleks gereja GIA Jemaat Sindoro di sebelah kiri (Koordinat -7.117456, 110.411761).',
    openMapChannelsBtn: 'Buka Peta Rute MapChannels',
    openGoogleMapsBtn: 'Buka Rute Google Maps',
    openTraditionalMapBtn: 'Buka Gambar Peta Denah',

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
    countdownTitle: 'Counting Down to Forever',
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
    sharePersonalLink: 'Personal Link Generator',

    // Guest Personalization
    dearGuestHeader: 'Dear Honorable Guest:',
    defaultGuestName: 'Honored Guest',
    guestInvitationText: 'We cordially invite you to share in our joy and celebrate our special day with us.',
    generatePersonalUrlTitle: 'Personalized Guest Link Generator',
    enterGuestNamePlaceholder: 'Enter Guest Name (e.g. Mr. John & Family)',
    copyPersonalLinkBtn: 'Copy Invitation Link',
    personalLinkCopied: 'Invitation Link Copied!',

    // Couple
    coupleEyebrow: 'WITH LOVE & JOY',
    coupleTitle: 'The Blessed Couple',
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
    attireLabel: 'Dress Code:',
    matrimonyDressCode: 'Free & Proper Attire (Anything neat and suitable for church)',

    receptionTitle: 'Wedding Reception',
    receptionTime: '12:00 PM - 01:00 PM',
    receptionDesc: 'Join us for joyous dining, toasts, and celebratory fellowship immediately following the ceremony.',

    openMaps: 'Open Google Maps',
    venueMapLabel: 'Venue Map',
    addToCalendar: 'Add to Calendar',
    venueNotice: 'Note: Guests are welcome to join both the Matrimony and Reception, or attend the Reception directly at 12:00 PM.',

    // Venue Gallery / Route Map
    galleryEyebrow: 'DIRECTIONS & TRADITIONAL MAP',
    galleryTitle: 'Route Map & Navigation',
    gallerySubtitle: 'Google Maps route navigation and traditional venue map to GIA Jemaat Sindoro Church.',
    clickToExpand: 'Click to expand',
    photoCount: 'Photo {current} of {total}',
    lightboxNavNotice: 'Use Left / Right arrow buttons to navigate',

    mapChannelsTab: 'MapChannels Route Map',
    googleDirectionsTab: 'Google Maps Route',
    traditionalMapTab: 'Traditional Map',
    routeStepsTitle: 'Main Street Route Directions:',
    routeStep1Title: 'Step 1: Main Street Turnoff',
    routeStep1Desc: 'From Jl. Diponegoro (Ungaran), turn onto Jl. Sindoro I (Coordinates -7.117391, 110.412769).',
    routeStep2Title: 'Step 2: Along Jl. Sindoro I',
    routeStep2Desc: 'Continue straight along paved Jl. Sindoro I for approx. 100 meters.',
    routeStep3Title: 'Step 3: Arrival at GIA Jemaat Sindoro',
    routeStep3Desc: 'Turn left into GIA Jemaat Sindoro church complex (Coordinates -7.117456, 110.411761).',
    openMapChannelsBtn: 'Open MapChannels Route Map',
    openGoogleMapsBtn: 'Open Google Maps Route',
    openTraditionalMapBtn: 'Open Traditional Map Image',

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
