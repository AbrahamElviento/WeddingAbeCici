import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Calendar, 
  MapPin, 
  Clock, 
  Music, 
  Gift, 
  Camera, 
  Mail, 
  User, 
  Menu, 
  X, 
  Check, 
  Copy, 
  Moon, 
  Sun, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  Volume2, 
  VolumeX,
  ExternalLink,
  Map,
  Smile
} from 'lucide-react';
import { weddingData } from './data';

export default function App() {
  // Theme Management
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    // Check local storage or system preference
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('wedding-theme');
      if (stored === 'light' || stored === 'dark') return stored;
      
      const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return systemPreference ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('wedding-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // Music Player Management
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(() => {
    // Elegant, copyright-free instrumental piano background music
    const aud = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
    aud.loop = true;
    aud.volume = 0.3;
    return aud;
  });

  useEffect(() => {
    if (isPlaying) {
      audio.play().catch(err => {
        console.log("Audio play prevented by browser autoplay policy. User interaction required.", err);
        setIsPlaying(false);
      });
    } else {
      audio.pause();
    }
    return () => {
      audio.pause();
    };
  }, [isPlaying, audio]);

  // Countdown State
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCompleted: false
  });

  useEffect(() => {
    const targetDate = new Date(weddingData.couple.weddingDate).getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isCompleted: false });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  // Responsive Hamburger Menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Gallery Lightbox State
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  // RSVP Form States
  const [rsvpName, setRsvpName] = useState('');
  const [rsvpEmail, setRsvpEmail] = useState('');
  const [rsvpAttendance, setRsvpAttendance] = useState<'attending' | 'declined' | ''>('');
  const [rsvpGuests, setRsvpGuests] = useState('1');
  const [rsvpNotes, setRsvpNotes] = useState('');
  
  // Custom Validation & Feedback
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [savedRsvp, setSavedRsvp] = useState<any>(() => {
    const saved = localStorage.getItem('wedding-rsvp');
    return saved ? JSON.parse(saved) : null;
  });

  // Copy Clipboard State
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyAccount = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 3000);
  };

  const handleRSVPSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!rsvpName.trim()) newErrors.name = 'Please enter your full name';
    if (!rsvpEmail.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(rsvpEmail)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!rsvpAttendance) newErrors.attendance = 'Please select your attendance status';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Scroll to first error
      const rsvpSection = document.getElementById('rsvp');
      if (rsvpSection) rsvpSection.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate an elegant server submission
    setTimeout(() => {
      const submission = {
        name: rsvpName,
        email: rsvpEmail,
        attendance: rsvpAttendance,
        guests: rsvpAttendance === 'attending' ? rsvpGuests : '0',
        notes: rsvpNotes,
        date: new Date().toLocaleDateString()
      };
      localStorage.setItem('wedding-rsvp', JSON.stringify(submission));
      setSavedRsvp(submission);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const clearRSVP = () => {
    localStorage.removeItem('wedding-rsvp');
    setSavedRsvp(null);
    setIsSubmitted(false);
    // Reset inputs
    setRsvpName('');
    setRsvpEmail('');
    setRsvpAttendance('');
    setRsvpGuests('1');
    setRsvpNotes('');
  };

  const prevPhoto = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex(prev => {
        if (prev === null) return null;
        return prev === 0 ? weddingData.gallery.length - 1 : prev - 1;
      });
    }
  };

  const nextPhoto = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex(prev => {
        if (prev === null) return null;
        return prev === weddingData.gallery.length - 1 ? 0 : prev + 1;
      });
    }
  };

  return (
    <div className="min-h-screen font-sans bg-stone-50 text-stone-800 dark:bg-[#111312] dark:text-stone-200 transition-colors duration-300 relative overflow-hidden">
      
      {/* Dynamic Background Leaf/Flower SVGs for Romantic Touches */}
      <div className="absolute top-20 left-0 w-48 h-48 opacity-10 pointer-events-none select-none dark:opacity-5 animate-float">
        <svg viewBox="0 0 100 100" fill="currentColor" className="text-emerald-800 dark:text-emerald-200">
          <path d="M10,90 Q50,90 90,10 Q50,40 10,90" />
          <path d="M10,90 Q30,60 90,10 Q70,30 10,90" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="90" cy="10" r="4" />
        </svg>
      </div>
      <div className="absolute top-[40%] right-0 w-64 h-64 opacity-5 pointer-events-none select-none dark:opacity-[0.03] animate-float" style={{ animationDelay: '2s' }}>
        <svg viewBox="0 0 100 100" fill="currentColor" className="text-amber-800 dark:text-amber-200">
          <path d="M90,90 Q50,90 10,10 Q50,40 90,90" />
          <path d="M90,90 Q70,60 10,10 Q30,30 90,90" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="10" cy="10" r="4" />
        </svg>
      </div>

      {/* Music Floating Toggle Widget */}
      <button 
        onClick={() => setIsPlaying(!isPlaying)}
        className="fixed bottom-6 right-6 z-40 bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-200 p-3.5 rounded-full shadow-lg border border-stone-200 dark:border-stone-700 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        aria-label="Toggle background music"
        id="bg-music-toggle"
      >
        <span className="absolute right-14 bg-stone-900 text-stone-100 text-xs py-1 px-2.5 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 whitespace-nowrap hidden sm:inline shadow-md">
          {isPlaying ? "Mute Music" : "Play Music"}
        </span>
        {isPlaying ? (
          <div className="relative flex items-center justify-center">
            <Volume2 className="w-5 h-5 animate-bounce" />
            <span className="absolute -top-1.5 -right-1.5 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
          </div>
        ) : (
          <VolumeX className="w-5 h-5 text-stone-400 dark:text-stone-500" />
        )}
      </button>

      {/* Floating Theme / Dark Mode Toggle Widget (Top Level) */}
      <button 
        onClick={toggleTheme}
        className="fixed bottom-6 left-6 z-40 bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-200 p-3.5 rounded-full shadow-lg border border-stone-200 dark:border-stone-700 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        aria-label="Toggle color theme"
        id="theme-toggle"
      >
        <span className="absolute left-14 bg-stone-900 text-stone-100 text-xs py-1 px-2.5 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 whitespace-nowrap hidden sm:inline shadow-md">
          {theme === 'light' ? "Switch to Dark Mode" : "Switch to Light Mode"}
        </span>
        {theme === 'light' ? (
          <Moon className="w-5 h-5 text-stone-600" />
        ) : (
          <Sun className="w-5 h-5 text-amber-300" />
        )}
      </button>

      {/* Sticky Navigation Header */}
      <header className="sticky top-0 z-30 w-full bg-stone-50/90 dark:bg-[#111312]/95 backdrop-blur-md border-b border-stone-200/60 dark:border-stone-800/80 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo / Initials */}
          <a href="#hero" className="flex items-center gap-1.5 font-serif text-lg md:text-xl font-bold tracking-widest text-[#556B2F] dark:text-[#A9DFBF] transition-transform duration-300 hover:scale-105" id="nav-logo">
            <span>A</span>
            <Heart className="w-4 h-4 fill-current text-rose-500 animate-pulse inline-block mx-0.5" />
            <span>C</span>
          </a>

          {/* Desktop Navigation Link Hierarchy */}
          <nav className="hidden md:flex items-center space-x-8 font-sans text-xs uppercase tracking-widest font-semibold" id="desktop-nav">
            <a href="#hero" className="text-stone-600 dark:text-stone-300 hover:text-[#556B2F] dark:hover:text-[#A9DFBF] transition-colors py-1">Home</a>
            <a href="#story" className="text-stone-600 dark:text-stone-300 hover:text-[#556B2F] dark:hover:text-[#A9DFBF] transition-colors py-1">Our Story</a>
            <a href="#events" className="text-stone-600 dark:text-stone-300 hover:text-[#556B2F] dark:hover:text-[#A9DFBF] transition-colors py-1">Events</a>
            <a href="#gallery" className="text-stone-600 dark:text-stone-300 hover:text-[#556B2F] dark:hover:text-[#A9DFBF] transition-colors py-1">Gallery</a>
            <a href="#registry" className="text-stone-600 dark:text-stone-300 hover:text-[#556B2F] dark:hover:text-[#A9DFBF] transition-colors py-1">Registry</a>
          </nav>

          {/* Direct Registry Quick Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="#registry" 
              className="px-5 py-2 rounded-full border border-[#556B2F]/60 hover:border-[#556B2F] dark:border-[#A9DFBF]/60 dark:hover:border-[#A9DFBF] text-[#556B2F] dark:text-[#A9DFBF] hover:bg-[#556B2F]/5 dark:hover:bg-[#A9DFBF]/5 text-xs font-semibold uppercase tracking-widest transition-all duration-300"
              id="registry-quick-btn"
            >
              Registry
            </a>
          </div>

          {/* Hamburger Menu Toggle for Mobile Screen Precision */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-stone-600 dark:text-stone-300 hover:text-[#556B2F] dark:hover:text-[#A9DFBF] p-1.5 focus:outline-none focus:ring-2 focus:ring-stone-400 dark:focus:ring-stone-600 rounded"
            aria-label="Toggle mobile menu"
            id="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Sliding Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <nav 
            className="md:hidden bg-stone-50 dark:bg-[#111312] border-t border-stone-200 dark:border-stone-800 py-4 px-6 flex flex-col space-y-4 animate-fade-in shadow-inner"
            id="mobile-nav"
          >
            <a 
              href="#hero" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-stone-600 dark:text-stone-300 hover:text-[#556B2F] dark:hover:text-[#A9DFBF] font-sans text-sm uppercase tracking-wider font-semibold"
            >
              Home
            </a>
            <a 
              href="#story" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-stone-600 dark:text-stone-300 hover:text-[#556B2F] dark:hover:text-[#A9DFBF] font-sans text-sm uppercase tracking-wider font-semibold"
            >
              Our Story
            </a>
            <a 
              href="#events" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-stone-600 dark:text-stone-300 hover:text-[#556B2F] dark:hover:text-[#A9DFBF] font-sans text-sm uppercase tracking-wider font-semibold"
            >
              Events & Timeline
            </a>
            <a 
              href="#gallery" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-stone-600 dark:text-stone-300 hover:text-[#556B2F] dark:hover:text-[#A9DFBF] font-sans text-sm uppercase tracking-wider font-semibold"
            >
              Photo Gallery
            </a>
            <a 
              href="#registry" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-stone-600 dark:text-stone-300 hover:text-[#556B2F] dark:hover:text-[#A9DFBF] font-sans text-sm uppercase tracking-wider font-semibold"
            >
              Gift Registry
            </a>
            <hr className="border-stone-200 dark:border-stone-800" />
            <a 
              href="#registry" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-center bg-[#556B2F] hover:bg-[#435525] dark:bg-[#A9DFBF] dark:hover:bg-[#8EC5A2] text-white dark:text-stone-950 py-2.5 rounded-full font-semibold uppercase tracking-wider text-xs shadow"
            >
              Gift Registry
            </a>
          </nav>
        )}
      </header>

      {/* Main Container */}
      <main className="w-full">

        {/* 1. HERO HEADER: Romantic Fullscreen Banner */}
        <section 
          id="hero" 
          className="relative min-h-[92vh] flex flex-col justify-between items-center px-4 py-16 text-center overflow-hidden"
        >
          {/* Parallax Background Cover with Dark Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1920" 
              alt="Romantic wedding forest backdrop" 
              className="w-full h-full object-cover select-none scale-105 pointer-events-none"
            />
            {/* Elegant overlay to handle both dark and light modes cleanly */}
            <div className="absolute inset-0 bg-stone-900/60 dark:bg-stone-950/75 backdrop-blur-[1px]" />
          </div>

          {/* Decorative Floral / Border Overlays in Hero */}
          <div className="absolute top-8 left-8 right-8 bottom-8 border border-white/20 pointer-events-none z-10 hidden sm:block" />

          {/* Hero Top Content (Welcome & Aesthetic Subtitle) */}
          <div className="relative z-10 w-full max-w-4xl pt-12 animate-fade-in">
            <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.3em] text-amber-200 font-semibold inline-flex items-center gap-2">
              <Sparkles className="w-3 h-3 fill-current animate-pulse text-amber-300" />
              The Wedding Invitation
              <Sparkles className="w-3 h-3 fill-current animate-pulse text-amber-300" />
            </span>
          </div>

          {/* Hero Main Typography Panel: The Couple Names */}
          <div className="relative z-10 w-full max-w-4xl my-auto py-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white font-normal tracking-wide leading-tight px-2">
              <span className="block sm:inline">{weddingData.couple.groom.nickname}</span>
              <span className="font-serif italic font-light text-amber-200 text-3xl sm:text-5xl md:text-6xl mx-4 sm:mx-6 block sm:inline-block my-2 sm:my-0">&</span>
              <span className="block sm:inline">{weddingData.couple.bride.nickname}</span>
            </h1>
            
            <p className="font-sans text-base sm:text-lg md:text-xl text-stone-200 mt-6 tracking-widest uppercase font-light">
              {weddingData.couple.weddingDateFormatted}
            </p>
            
            <p className="font-sans text-sm md:text-base text-amber-100/90 mt-2 tracking-wide font-medium flex items-center justify-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-200" />
              {weddingData.couple.venueName} • Ungaran, Semarang
            </p>

            {/* Google Map Card below Location right before Countdown */}
            <div className="mt-6 mb-8 max-w-xl mx-auto px-2">
              <div className="bg-white/10 dark:bg-black/40 backdrop-blur-md rounded-2xl p-4 md:p-5 border border-white/15 dark:border-white/10 shadow-xl">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-left mb-3">
                  <div className="text-center sm:text-left">
                    <p className="font-sans text-xs uppercase tracking-widest text-amber-200 font-semibold flex items-center justify-center sm:justify-start gap-1">
                      <MapPin className="w-3.5 h-3.5" /> Venue Map
                    </p>
                    <p className="font-serif text-base text-white font-medium mt-0.5">{weddingData.couple.venueName}</p>
                    <p className="font-sans text-[11px] text-stone-200/90 line-clamp-1">{weddingData.couple.venueAddress}</p>
                  </div>
                  <a 
                    href={weddingData.schedule[0].gmapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-200/90 hover:bg-amber-100 text-stone-900 text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow hover:scale-105 shrink-0"
                  >
                    <Map className="w-3.5 h-3.5" />
                    Open Google Maps
                  </a>
                </div>

                {/* Embedded Map Frame */}
                <div className="w-full h-44 sm:h-52 rounded-xl overflow-hidden border border-white/20 shadow-inner relative bg-stone-900/50">
                  <iframe 
                    title="GIA Jemaat Sindoro Location Map"
                    src="https://maps.google.com/maps?q=GIA+Jemaat+Sindoro+Jl.+Sindoro+I+No.13+A,+Ungaran,+Kabupaten+Semarang&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full grayscale-[0.2] contrast-[1.05]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Hero Bottom: Animated Live Countdown Clock Panel */}
          <div 
            className="relative z-10 w-full max-w-3xl animate-fade-in" 
            style={{ animationDelay: '400ms' }}
          >
            <div className="bg-white/10 dark:bg-black/40 backdrop-blur-md rounded-2xl px-6 py-6 md:px-10 md:py-8 border border-white/15 dark:border-white/5 shadow-2xl max-w-xl mx-auto">
              <h2 className="font-sans text-xs uppercase tracking-widest text-amber-200 mb-5 font-semibold">Counting Down to Forever</h2>
              
              {!timeLeft.isCompleted ? (
                <div className="grid grid-cols-4 gap-3 md:gap-6 text-white" id="countdown-timer">
                  
                  {/* Days */}
                  <div className="flex flex-col items-center">
                    <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-none bg-stone-900/30 dark:bg-black/30 w-full py-3 rounded-xl border border-white/5">
                      {String(timeLeft.days).padStart(2, '0')}
                    </span>
                    <span className="font-sans text-[10px] sm:text-xs uppercase tracking-widest text-stone-300 mt-2.5 font-medium">Days</span>
                  </div>

                  {/* Hours */}
                  <div className="flex flex-col items-center">
                    <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-none bg-stone-900/30 dark:bg-black/30 w-full py-3 rounded-xl border border-white/5">
                      {String(timeLeft.hours).padStart(2, '0')}
                    </span>
                    <span className="font-sans text-[10px] sm:text-xs uppercase tracking-widest text-stone-300 mt-2.5 font-medium">Hours</span>
                  </div>

                  {/* Minutes */}
                  <div className="flex flex-col items-center">
                    <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-none bg-stone-900/30 dark:bg-black/30 w-full py-3 rounded-xl border border-white/5">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </span>
                    <span className="font-sans text-[10px] sm:text-xs uppercase tracking-widest text-stone-300 mt-2.5 font-medium">Mins</span>
                  </div>

                  {/* Seconds */}
                  <div className="flex flex-col items-center">
                    <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-amber-300 tracking-tight leading-none bg-stone-900/30 dark:bg-black/30 w-full py-3 rounded-xl border border-white/5">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </span>
                    <span className="font-sans text-[10px] sm:text-xs uppercase tracking-widest text-stone-300 mt-2.5 font-medium">Secs</span>
                  </div>

                </div>
              ) : (
                <div className="text-center py-2 text-white">
                  <Heart className="w-10 h-10 text-rose-500 fill-current animate-pulse mx-auto mb-2" />
                  <p className="font-serif text-xl sm:text-2xl font-light italic text-amber-200">The Big Day Has Arrived! 🎉</p>
                </div>
              )}
            </div>

            {/* Downward Indicator */}
            <a 
              href="#story" 
              className="inline-block mt-8 text-white/60 hover:text-white transition-colors duration-300 animate-bounce hover:scale-110"
              aria-label="Scroll down to Couple and Story"
              id="scroll-indicator"
            >
              <ChevronLeft className="w-6 h-6 transform -rotate-90" />
            </a>
          </div>
        </section>

        {/* 2. COUPLE & OUR STORY: Minimalist Couple Portraits and Romantic Timeline */}
        <section 
          id="story" 
          className="py-20 md:py-28 px-4 max-w-6xl mx-auto border-b border-stone-200/50 dark:border-stone-800/40"
        >
          {/* Section Eyebrow Header */}
          <div className="text-center mb-16 md:mb-20">
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#556B2F] dark:text-[#A9DFBF] font-semibold">With Love & Delight</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-800 dark:text-stone-100 font-normal mt-2">Meet the Couple</h2>
            <div className="w-12 h-0.5 bg-[#556B2F] dark:bg-[#A9DFBF] mx-auto mt-4 rounded-full opacity-60" />
          </div>

          {/* Couple Cards Layout - Optimized side-by-side display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start max-w-5xl mx-auto mb-24" id="couple-profiles">
            
            {/* Groom Profile */}
            <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-[#181a19] rounded-2xl border border-stone-200/60 dark:border-stone-800 shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-stone-100 dark:border-[#222523] shadow-inner mb-6 transition-transform duration-500 hover:scale-[1.03]">
                <img 
                  src={weddingData.couple.groom.imageUrl} 
                  alt={weddingData.couple.groom.fullName} 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="font-serif text-2xl text-stone-800 dark:text-stone-100 font-medium">{weddingData.couple.groom.fullName}</h3>
              <p className="font-sans text-xs text-amber-600 dark:text-amber-400 uppercase tracking-widest mt-1 font-semibold">The Groom</p>
              
              <p className="font-sans text-xs text-stone-500 dark:text-stone-400 mt-3 italic font-medium px-4">
                {weddingData.couple.groom.parents}
              </p>
              
              <p className="font-sans text-sm text-stone-600 dark:text-stone-300 mt-4 leading-relaxed max-w-sm px-2">
                {weddingData.couple.groom.description}
              </p>
            </div>

            {/* Bride Profile */}
            <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-[#181a19] rounded-2xl border border-stone-200/60 dark:border-stone-800 shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-stone-100 dark:border-[#222523] shadow-inner mb-6 transition-transform duration-500 hover:scale-[1.03]">
                <img 
                  src={weddingData.couple.bride.imageUrl} 
                  alt={weddingData.couple.bride.fullName} 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="font-serif text-2xl text-stone-800 dark:text-stone-100 font-medium">{weddingData.couple.bride.fullName}</h3>
              <p className="font-sans text-xs text-amber-600 dark:text-amber-400 uppercase tracking-widest mt-1 font-semibold">The Bride</p>
              
              <p className="font-sans text-xs text-stone-500 dark:text-stone-400 mt-3 italic font-medium px-4">
                {weddingData.couple.bride.parents}
              </p>
              
              <p className="font-sans text-sm text-stone-600 dark:text-stone-300 mt-4 leading-relaxed max-w-sm px-2">
                {weddingData.couple.bride.description}
              </p>
            </div>

          </div>

          {/* Timeline Layout ("How We Met", "The Proposal", "The Big Day") */}
          <div className="max-w-4xl mx-auto pt-8">
            <div className="text-center mb-12">
              <Heart className="w-5 h-5 text-rose-500 mx-auto fill-current animate-pulse mb-2" />
              <h3 className="font-serif text-xl sm:text-2xl text-stone-800 dark:text-stone-200 italic font-light">Our Beautiful Journey</h3>
            </div>

            <div className="relative border-l border-stone-200 dark:border-stone-800 ml-4 md:mx-auto md:left-1/2 md:translate-x-[-0.5px]" id="story-timeline">
              
              {weddingData.story.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div key={item.id} className={`relative mb-16 md:mb-20 flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-start`}>
                    
                    {/* Centered Timeline Circular Node Indicator */}
                    <div className="absolute -left-4 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-[#EAECE6] dark:bg-[#1E2522] border-2 border-[#556B2F] dark:border-[#A9DFBF] flex items-center justify-center z-10 shadow-sm">
                      <Heart className="w-3.5 h-3.5 text-[#556B2F] dark:text-[#A9DFBF] fill-current" />
                    </div>

                    {/* Left/Right Text Detail Cards */}
                    <div className={`w-full md:w-[45%] pl-8 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 text-left'}`}>
                      <div className="bg-white dark:bg-[#181a19] p-6 rounded-2xl border border-stone-200/60 dark:border-stone-800 shadow-sm transition-all duration-300 hover:shadow-md">
                        <span className="font-sans text-[11px] uppercase tracking-widest font-semibold text-amber-600 dark:text-amber-400">{item.date}</span>
                        <h4 className="font-serif text-xl text-stone-800 dark:text-stone-100 font-medium mt-1 mb-3">{item.title}</h4>
                        
                        {/* Rounded Visual image frame inside story */}
                        <div className="w-full h-40 rounded-xl overflow-hidden mb-4 shadow-sm">
                          <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                        </div>

                        <p className="font-sans text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Empty placeholder for symmetry on larger screens */}
                    <div className="hidden md:block w-[45%]" />
                  </div>
                );
              })}

            </div>
          </div>
        </section>

        {/* 3. EVENT DETAILS & TIMELINE: Coordinates, dress code, addresses, schedule */}
        <section 
          id="events" 
          className="py-20 md:py-28 px-4 bg-stone-100/50 dark:bg-[#141615] border-b border-stone-200/50 dark:border-stone-800/40"
        >
          <div className="max-w-6xl mx-auto">
            
            {/* Section Header */}
            <div className="text-center mb-16">
              <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#556B2F] dark:text-[#A9DFBF] font-semibold">Join Our Celebration</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-800 dark:text-stone-100 font-normal mt-2">Wedding Schedule</h2>
              <div className="w-12 h-0.5 bg-[#556B2F] dark:bg-[#A9DFBF] mx-auto mt-4 rounded-full opacity-60" />
            </div>

            {/* Combined Venue & Schedule Card */}
            <div className="max-w-3xl mx-auto bg-white dark:bg-[#181a19] rounded-2xl border border-stone-200/80 dark:border-stone-800 shadow-md overflow-hidden" id="schedule-grid">
              
              {/* Venue Location Banner */}
              <div className="bg-[#556B2F]/10 dark:bg-[#A9DFBF]/10 p-6 md:p-8 border-b border-stone-200/60 dark:border-stone-800 text-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#556B2F]/15 dark:bg-[#A9DFBF]/15 text-[#556B2F] dark:text-[#A9DFBF] text-xs font-semibold uppercase tracking-wider mb-3">
                  <MapPin className="w-3.5 h-3.5" /> Single Location Venue
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-stone-800 dark:text-stone-100 font-semibold mb-2">
                  {weddingData.couple.venueName}
                </h3>
                <p className="font-sans text-xs md:text-sm text-stone-600 dark:text-stone-300 max-w-xl mx-auto leading-relaxed mb-5">
                  {weddingData.couple.venueAddress}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a 
                    href={weddingData.schedule[0].gmapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#556B2F] hover:bg-[#435525] dark:bg-[#A9DFBF] dark:hover:bg-[#8EC5A2] text-white dark:text-stone-950 text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm hover:scale-105"
                  >
                    <Map className="w-4 h-4" />
                    Open Google Maps Location
                  </a>
                </div>
              </div>

              {/* Combined Event Timelines (Holy Matrimony & Reception) */}
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative">
                  
                  {/* Subtle Divider for desktop */}
                  <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-stone-200 dark:bg-stone-800 -translate-x-1/2" />

                  {/* Holy Matrimony Column */}
                  <div className="flex flex-col justify-between bg-stone-50/60 dark:bg-[#1f2220] p-6 rounded-xl border border-stone-200/50 dark:border-stone-800/60">
                    <div>
                      <div className="w-12 h-12 rounded-full bg-[#556B2F]/15 dark:bg-[#A9DFBF]/15 text-[#556B2F] dark:text-[#A9DFBF] flex items-center justify-center mb-4 shadow-inner">
                        <Heart className="w-5 h-5 fill-current" />
                      </div>

                      <h4 className="font-serif text-xl text-stone-800 dark:text-stone-100 font-semibold mb-2">
                        Holy Matrimony
                      </h4>

                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-300 font-sans text-xs font-bold uppercase tracking-wider mb-4">
                        <Clock className="w-3.5 h-3.5" />
                        <span>10:00 AM - 12:00 PM</span>
                      </div>

                      <p className="font-sans text-xs text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
                        The sacred wedding blessing & matrimonial vow exchange service.
                      </p>

                      <hr className="border-stone-200/60 dark:border-stone-800 my-4" />

                      <p className="font-sans text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                        <span className="font-semibold text-stone-700 dark:text-stone-300 uppercase tracking-widest text-[9px] block mb-1">Dress Code:</span>
                        {weddingData.schedule[0].dressCode}
                      </p>
                    </div>
                  </div>

                  {/* Wedding Reception Column */}
                  <div className="flex flex-col justify-between bg-stone-50/60 dark:bg-[#1f2220] p-6 rounded-xl border border-stone-200/50 dark:border-stone-800/60">
                    <div>
                      <div className="w-12 h-12 rounded-full bg-[#556B2F]/15 dark:bg-[#A9DFBF]/15 text-[#556B2F] dark:text-[#A9DFBF] flex items-center justify-center mb-4 shadow-inner">
                        <Calendar className="w-5 h-5" />
                      </div>

                      <h4 className="font-serif text-xl text-stone-800 dark:text-stone-100 font-semibold mb-2">
                        Wedding Reception
                      </h4>

                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-300 font-sans text-xs font-bold uppercase tracking-wider mb-4">
                        <Clock className="w-3.5 h-3.5" />
                        <span>12:00 PM - 02:30 PM</span>
                      </div>

                      <p className="font-sans text-xs text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
                        Join us for joyous dining, toasts, and celebratory fellowship immediately following the ceremony.
                      </p>

                      <hr className="border-stone-200/60 dark:border-stone-800 my-4" />

                      <p className="font-sans text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                        <span className="font-semibold text-stone-700 dark:text-stone-300 uppercase tracking-widest text-[9px] block mb-1">Dress Code:</span>
                        {weddingData.schedule[1].dressCode}
                      </p>
                    </div>
                  </div>

                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 dark:border-stone-800/80 text-center">
                  <p className="font-sans text-xs text-stone-500 dark:text-stone-400 italic">
                    Note: Guests are welcome to join both the Matrimony and Reception, or attend the Reception directly at 12:00 PM.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 4. PHOTO GALLERY: CSS Grid and Interactive Lightbox Modal */}
        <section 
          id="gallery" 
          className="py-20 md:py-28 px-4 max-w-6xl mx-auto border-b border-stone-200/50 dark:border-stone-800/40"
        >
          <div className="max-w-6xl mx-auto">
            
            {/* Section Header */}
            <div className="text-center mb-16">
              <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#556B2F] dark:text-[#A9DFBF] font-semibold">Memories Captured</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-800 dark:text-stone-100 font-normal mt-2">Love Gallery</h2>
              <div className="w-12 h-0.5 bg-[#556B2F] dark:bg-[#A9DFBF] mx-auto mt-4 rounded-full opacity-60" />
            </div>

            {/* Responsive Photo CSS Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="gallery-grid">
              {weddingData.gallery.map((item, index) => {
                return (
                  <div 
                    key={item.id}
                    onClick={() => setActivePhotoIndex(index)}
                    className="relative group overflow-hidden rounded-2xl border border-stone-200/40 dark:border-stone-800/60 aspect-[4/3] cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    {/* Unsplash Image */}
                    <img 
                      src={item.url} 
                      alt={item.caption} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Dark gradient and caption reveal on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="text-white transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                        <Camera className="w-5 h-5 text-amber-300 mb-1.5" />
                        <p className="font-serif text-lg font-light italic text-stone-100">{item.caption}</p>
                        <span className="font-sans text-[10px] uppercase tracking-wider text-stone-300">Click to expand</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* 5. RSVP FORM (REMOVED) */}
        <section 
          id="rsvp" 
          className="hidden"
        >
          <div className="max-w-4xl mx-auto">
            
            {/* Section Header */}
            <div className="text-center mb-16">
              <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#556B2F] dark:text-[#A9DFBF] font-semibold">Share Your Response</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-800 dark:text-stone-100 font-normal mt-2">RSVP Invitation</h2>
              <div className="w-12 h-0.5 bg-[#556B2F] dark:bg-[#A9DFBF] mx-auto mt-4 rounded-full opacity-60" />
              <p className="font-sans text-sm text-stone-500 dark:text-stone-400 mt-4 max-w-lg mx-auto leading-relaxed">
                Kindly respond by <strong className="text-stone-700 dark:text-stone-300 font-semibold">October 15, 2026</strong> so we can ensure the finest accommodation for all our cherished guests.
              </p>
            </div>

            {/* RSVP Main Control Frame */}
            <div className="bg-white dark:bg-[#181a19] rounded-2xl border border-stone-200/60 dark:border-stone-800 shadow-lg overflow-hidden transition-all duration-300">
              
              {!savedRsvp ? (
                // Form entry state
                <form onSubmit={handleRSVPSubmit} className="p-6 sm:p-10 lg:p-12 space-y-6" id="rsvp-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    {/* Input: Full Name */}
                    <div>
                      <label htmlFor="rsvp-name-input" className="block font-sans text-xs uppercase tracking-widest font-semibold text-stone-600 dark:text-stone-400 mb-2">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-stone-400" />
                        <input 
                          type="text" 
                          id="rsvp-name-input"
                          value={rsvpName}
                          onChange={(e) => setRsvpName(e.target.value)}
                          placeholder="E.g., John Smith"
                          className={`w-full pl-10 pr-4 py-3 bg-stone-50 dark:bg-[#202322] border ${errors.name ? 'border-rose-400 focus:ring-rose-200' : 'border-stone-200 dark:border-stone-800 focus:ring-[#556B2F]/20'} rounded-xl focus:outline-none focus:ring-4 transition-all text-sm text-stone-800 dark:text-stone-100`}
                        />
                      </div>
                      {errors.name && <p className="font-sans text-xs text-rose-500 mt-1.5 font-medium">{errors.name}</p>}
                    </div>

                    {/* Input: Email Address */}
                    <div>
                      <label htmlFor="rsvp-email-input" className="block font-sans text-xs uppercase tracking-widest font-semibold text-stone-600 dark:text-stone-400 mb-2">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-stone-400" />
                        <input 
                          type="email" 
                          id="rsvp-email-input"
                          value={rsvpEmail}
                          onChange={(e) => setRsvpEmail(e.target.value)}
                          placeholder="E.g., john@example.com"
                          className={`w-full pl-10 pr-4 py-3 bg-stone-50 dark:bg-[#202322] border ${errors.email ? 'border-rose-400 focus:ring-rose-200' : 'border-stone-200 dark:border-stone-800 focus:ring-[#556B2F]/20'} rounded-xl focus:outline-none focus:ring-4 transition-all text-sm text-stone-800 dark:text-stone-100`}
                        />
                      </div>
                      {errors.email && <p className="font-sans text-xs text-rose-500 mt-1.5 font-medium">{errors.email}</p>}
                    </div>

                  </div>

                  {/* Radio Selector: Attendance Status */}
                  <div>
                    <label className="block font-sans text-xs uppercase tracking-widest font-semibold text-stone-600 dark:text-stone-400 mb-3">
                      Attendance Status <span className="text-rose-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* Attendance Card 1: Attending */}
                      <label 
                        onClick={() => setRsvpAttendance('attending')}
                        className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                          rsvpAttendance === 'attending' 
                            ? 'border-[#556B2F] bg-[#556B2F]/5 dark:border-[#A9DFBF] dark:bg-[#A9DFBF]/5' 
                            : 'border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-[#202322] hover:bg-stone-100 dark:hover:bg-[#282b2a]'
                        }`}
                        id="status-attending"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${rsvpAttendance === 'attending' ? 'border-[#556B2F] dark:border-[#A9DFBF]' : 'border-stone-400'}`}>
                            {rsvpAttendance === 'attending' && <div className="w-2.5 h-2.5 rounded-full bg-[#556B2F] dark:bg-[#A9DFBF]" />}
                          </div>
                          <span className="font-sans text-sm font-semibold text-stone-800 dark:text-stone-200">Yes, Joyfully Attending</span>
                        </div>
                        <Heart className={`w-4 h-4 ${rsvpAttendance === 'attending' ? 'text-rose-500 fill-current' : 'text-stone-400'}`} />
                      </label>

                      {/* Attendance Card 2: Declined */}
                      <label 
                        onClick={() => setRsvpAttendance('declined')}
                        className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                          rsvpAttendance === 'declined' 
                            ? 'border-[#556B2F] bg-[#556B2F]/5 dark:border-[#A9DFBF] dark:bg-[#A9DFBF]/5' 
                            : 'border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-[#202322] hover:bg-stone-100 dark:hover:bg-[#282b2a]'
                        }`}
                        id="status-declined"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${rsvpAttendance === 'declined' ? 'border-[#556B2F] dark:border-[#A9DFBF]' : 'border-stone-400'}`}>
                            {rsvpAttendance === 'declined' && <div className="w-2.5 h-2.5 rounded-full bg-[#556B2F] dark:bg-[#A9DFBF]" />}
                          </div>
                          <span className="font-sans text-sm font-semibold text-stone-800 dark:text-stone-200">Regretfully Declining</span>
                        </div>
                        <X className="w-4 h-4 text-stone-400" />
                      </label>

                    </div>
                    {errors.attendance && <p className="font-sans text-xs text-rose-500 mt-1.5 font-medium">{errors.attendance}</p>}
                  </div>

                  {/* Input Selector: Plus One Guests (only displays when attending) */}
                  {rsvpAttendance === 'attending' && (
                    <div className="animate-fade-in" id="guests-selector-block">
                      <label htmlFor="rsvp-guests-select" className="block font-sans text-xs uppercase tracking-widest font-semibold text-stone-600 dark:text-stone-400 mb-2">
                        Number of Attending Guests (Including Yourself)
                      </label>
                      <select 
                        id="rsvp-guests-select"
                        value={rsvpGuests}
                        onChange={(e) => setRsvpGuests(e.target.value)}
                        className="w-full px-4 py-3 bg-stone-50 dark:bg-[#202322] border border-stone-200 dark:border-stone-800 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#556B2F]/20 text-sm text-stone-800 dark:text-stone-100"
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 People (Plus One)</option>
                        <option value="3">3 People</option>
                        <option value="4">4 People</option>
                      </select>
                    </div>
                  )}

                  {/* Input: Special Notes / Dietary */}
                  <div>
                    <label htmlFor="rsvp-notes-input" className="block font-sans text-xs uppercase tracking-widest font-semibold text-stone-600 dark:text-stone-400 mb-2">
                      Dietary Restrictions & Special Messages
                    </label>
                    <textarea 
                      id="rsvp-notes-input"
                      rows={4}
                      value={rsvpNotes}
                      onChange={(e) => setRsvpNotes(e.target.value)}
                      placeholder="Please note any allergies, vegetarian options, or high-chair requests here. You can also write a sweet message to us!"
                      className="w-full px-4 py-3 bg-stone-50 dark:bg-[#202322] border border-stone-200 dark:border-stone-800 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#556B2F]/20 text-sm text-stone-800 dark:text-stone-100"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 text-center">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3.5 bg-[#556B2F] hover:bg-[#435525] dark:bg-[#A9DFBF] dark:hover:bg-[#8EC5A2] text-white dark:text-stone-950 font-sans text-xs uppercase tracking-widest font-bold rounded-full transition-all duration-300 shadow-md hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-[#556B2F]/35 disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2 mx-auto"
                      id="rsvp-submit-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                          Submitting Response...
                        </>
                      ) : (
                        <>
                          Send RSVP Response
                          <Check className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                // Thank You Submission Summary view
                <div className="p-8 sm:p-12 text-center animate-fade-in" id="rsvp-summary-block">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-[#1f3024] text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-6 shadow-inner">
                    <Check className="w-8 h-8" />
                  </div>
                  
                  <h3 className="font-serif text-2xl sm:text-3xl text-stone-800 dark:text-stone-100 font-medium mb-2">Thank You, {savedRsvp.name}!</h3>
                  <p className="font-serif text-lg text-[#556B2F] dark:text-[#A9DFBF] italic mb-6">Your response has been lovingly recorded.</p>
                  
                  <div className="bg-stone-50 dark:bg-[#1d201e] p-6 rounded-2xl border border-stone-200/50 dark:border-stone-800 max-w-md mx-auto text-left space-y-3 mb-8">
                    <h4 className="font-sans text-xs uppercase tracking-widest font-bold text-stone-400 border-b border-stone-200 dark:border-stone-800 pb-2 mb-2">Submission Details</h4>
                    <p className="font-sans text-sm text-stone-700 dark:text-stone-300">
                      <strong className="font-semibold text-stone-600 dark:text-stone-400">Status:</strong> {savedRsvp.attendance === 'attending' ? 'Yes, Joyfully Attending 🎉' : 'Regretfully Declining 💔'}
                    </p>
                    {savedRsvp.attendance === 'attending' && (
                      <p className="font-sans text-sm text-stone-700 dark:text-stone-300">
                        <strong className="font-semibold text-stone-600 dark:text-stone-400">Guests:</strong> {savedRsvp.guests} person(s)
                      </p>
                    )}
                    <p className="font-sans text-sm text-stone-700 dark:text-stone-300">
                      <strong className="font-semibold text-stone-600 dark:text-stone-400">Email:</strong> {savedRsvp.email}
                    </p>
                    {savedRsvp.notes && (
                      <p className="font-sans text-sm text-stone-700 dark:text-stone-300 italic">
                        <strong className="font-semibold text-stone-600 dark:text-stone-400 not-italic">Notes:</strong> "{savedRsvp.notes}"
                      </p>
                    )}
                  </div>

                  <p className="font-sans text-sm text-stone-500 dark:text-stone-400 max-w-md mx-auto leading-relaxed mb-6">
                    If you made an error or need to change your plans, you can clear this response and submit a new one.
                  </p>

                  <button 
                    onClick={clearRSVP}
                    className="px-5 py-2 rounded-full border border-stone-200 dark:border-stone-800 text-stone-500 dark:text-stone-400 hover:text-rose-500 dark:hover:text-rose-400 hover:border-rose-200 text-xs font-semibold uppercase tracking-wider transition-colors duration-300"
                    id="rsvp-change-btn"
                  >
                    Change Response
                  </button>
                </div>
              )}

            </div>
          </div>
        </section>

        {/* 6. GIFT REGISTRY: Cards pointing to external bank account transfers, copy utility */}
        <section 
          id="registry" 
          className="py-20 md:py-28 px-4 max-w-6xl mx-auto"
        >
          <div className="max-w-6xl mx-auto">
            
            {/* Section Header */}
            <div className="text-center mb-16">
              <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#556B2F] dark:text-[#A9DFBF] font-semibold">Gifts & Blessings</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-800 dark:text-stone-100 font-normal mt-2">Wedding Registry</h2>
              <div className="w-12 h-0.5 bg-[#556B2F] dark:bg-[#A9DFBF] mx-auto mt-4 rounded-full opacity-60" />
              <p className="font-sans text-sm text-stone-500 dark:text-stone-400 mt-4 max-w-lg mx-auto leading-relaxed">
                Your presence on our big day is the greatest gift of all. However, if you wish to honor us with a token of love, we have provided our digital transfer details below.
              </p>
            </div>

            {/* Registry Card Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto" id="registry-grid">
              {weddingData.registry.map((account) => {
                const isCopied = copiedId === account.id;
                return (
                  <div 
                    key={account.id} 
                    className="bg-white dark:bg-[#181a19] p-6 rounded-2xl border border-stone-200/60 dark:border-stone-800 text-center shadow-sm hover:shadow-md transition-all duration-300 relative flex flex-col justify-between"
                  >
                    <div>
                      {/* Bank logo container */}
                      <div className="w-16 h-10 bg-stone-100 dark:bg-stone-800 rounded-lg flex items-center justify-center font-serif text-sm font-bold text-[#556B2F] dark:text-[#A9DFBF] mx-auto mb-6 uppercase tracking-wider border border-stone-200/40 dark:border-stone-700">
                        {account.bankName.split(' ')[0]}
                      </div>

                      <span className="font-sans text-xs text-stone-400 dark:text-stone-500 uppercase tracking-widest font-semibold block mb-1">Account Number:</span>
                      <p className="font-mono text-xl text-stone-800 dark:text-stone-100 font-bold tracking-wider mb-2">
                        {account.accountNumber}
                      </p>

                      <span className="font-sans text-xs text-stone-400 dark:text-stone-500 uppercase tracking-widest font-semibold block mb-1">Account Holder:</span>
                      <p className="font-sans text-sm text-stone-700 dark:text-stone-300 font-medium mb-6">
                        {account.accountHolder}
                      </p>
                    </div>

                    <div className="pt-2">
                      <button 
                        onClick={() => handleCopyAccount(account.id, account.accountNumber)}
                        className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-sans text-xs font-bold uppercase tracking-widest transition-all duration-300 focus:outline-none focus:ring-2 ${
                          isCopied 
                            ? 'bg-emerald-500 text-white focus:ring-emerald-300' 
                            : 'bg-stone-50 dark:bg-[#202322] border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 hover:text-[#556B2F] dark:hover:text-[#A9DFBF] hover:bg-[#556B2F]/5 dark:hover:bg-[#A9DFBF]/5 focus:ring-[#556B2F]/30'
                        }`}
                        aria-label={`Copy ${account.bankName} account number`}
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-4 h-4" />
                            Account Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            Copy Account
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Additional note for floral or gift mailing */}
            <div className="mt-12 text-center max-w-lg mx-auto">
              <Gift className="w-5 h-5 text-amber-500 mx-auto mb-2 animate-bounce" />
              <p className="font-sans text-xs text-stone-400 dark:text-stone-500 leading-relaxed">
                Need details for physical gifts or wedding souvenirs? <br />
                Feel free to reach us directly or coordinate with the wedding organizers.
              </p>
            </div>

          </div>
        </section>

      </main>

      {/* 7. FOOTER: Beautiful closing and romantic thank you */}
      <footer className="bg-stone-100 dark:bg-[#0c0d0d] py-16 px-4 border-t border-stone-200/60 dark:border-stone-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Animated Heart Motif */}
          <div className="flex items-center justify-center gap-1.5 mb-6 text-rose-500 fill-current">
            <Heart className="w-5 h-5 animate-pulse" />
            <Heart className="w-6 h-6 animate-pulse scale-110" />
            <Heart className="w-5 h-5 animate-pulse" />
          </div>

          <p className="font-serif text-2xl sm:text-3xl text-stone-800 dark:text-stone-100 font-light italic leading-relaxed max-w-2xl mx-auto mb-4">
            "Therefore what God has joined together, let no one separate."
          </p>
          
          <p className="font-sans text-xs uppercase tracking-widest text-stone-400 mb-8 font-semibold">
            - Matthew 19:6
          </p>

          <p className="font-sans text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-6">
            Thank you for being a part of our life story and celebrating our marriage. <br />
            We look forward to sharing this magical day with you.
          </p>

          <p className="font-serif text-2xl text-[#556B2F] dark:text-[#A9DFBF] font-semibold tracking-wider mb-8">
            Abe & Cici
          </p>

          <div className="border-t border-stone-200/50 dark:border-stone-800/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-sans text-[11px] text-stone-400 dark:text-stone-500 uppercase tracking-widest font-semibold">
              © 2026 Abe & Cici. All Rights Reserved.
            </p>
            
            <p className="font-mono text-xs text-amber-600 dark:text-amber-400 font-semibold tracking-wider bg-stone-200/40 dark:bg-stone-800/40 px-3 py-1 rounded-full shadow-inner">
              {weddingData.couple.hashtag}
            </p>
          </div>

        </div>
      </footer>

      {/* GALLERY LIGHTBOX MODAL */}
      {activePhotoIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between items-center px-4 py-6 animate-fade-in"
          id="lightbox-overlay"
        >
          {/* Lightbox Header Close Control */}
          <div className="w-full max-w-6xl flex justify-between items-center text-white/80">
            <span className="font-sans text-xs uppercase tracking-widest font-medium">
              Photo {activePhotoIndex + 1} of {weddingData.gallery.length}
            </span>
            <button 
              onClick={() => setActivePhotoIndex(null)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
              aria-label="Close photo gallery viewer"
              id="lightbox-close-btn"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Main Photo Display Frame */}
          <div className="w-full max-w-4xl flex items-center justify-between gap-4 my-auto relative">
            
            {/* Prev Trigger */}
            <button 
              onClick={prevPhoto}
              className="p-3 bg-white/5 hover:bg-white/15 text-white/80 hover:text-white rounded-full transition-all duration-300 transform active:scale-95 cursor-pointer"
              aria-label="Previous photo"
              id="lightbox-prev-btn"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Photo */}
            <div className="max-w-[85vw] max-h-[70vh] rounded-xl overflow-hidden shadow-2xl relative bg-stone-900 border border-white/5">
              <img 
                src={weddingData.gallery[activePhotoIndex].url} 
                alt={weddingData.gallery[activePhotoIndex].caption}
                className="max-w-full max-h-[70vh] object-contain mx-auto"
              />
            </div>

            {/* Next Trigger */}
            <button 
              onClick={nextPhoto}
              className="p-3 bg-white/5 hover:bg-white/15 text-white/80 hover:text-white rounded-full transition-all duration-300 transform active:scale-95 cursor-pointer"
              aria-label="Next photo"
              id="lightbox-next-btn"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

          </div>

          {/* Lightbox Footer Caption Detail */}
          <div className="w-full max-w-2xl text-center text-stone-300 pb-4">
            <p className="font-serif text-lg italic text-white/95">{weddingData.gallery[activePhotoIndex].caption}</p>
            <p className="font-sans text-[10px] uppercase tracking-widest text-stone-500 mt-1">Use Left / Right arrow buttons to navigate</p>
          </div>

        </div>
      )}

    </div>
  );
}
