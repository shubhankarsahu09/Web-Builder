import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

const CURRENCY_SYMBOLS = {
  INR: '₹',
  USD: '$',
  EUR: '€',
  GBP: '£',
  CAD: 'CA$',
  AUD: 'A$',
  AED: 'AED '
};

export default function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroCtaHover, setHeroCtaHover] = useState(false);
  const [aboutCtaHover, setAboutCtaHover] = useState(false);
  const [contactHover, setContactHover] = useState(false);
  const [submitHover, setSubmitHover] = useState(false);
  const [backHover, setBackHover] = useState(false);

  // Page Routing State ('home' or 'build')
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      const path = window.location.pathname;
      if (path === '/build' || hash === '#/build' || hash === '#build') {
        return 'build';
      }
    }
    return 'home';
  });

  // Build Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    pagesNeeded: '',
    websiteDetails: '',
    currency: 'INR',
    plan: 'Basic'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Creator Support & Issue Form State
  const [supportData, setSupportData] = useState({
    creatorName: '',
    email: '',
    issueCategory: 'Technical Issue / Bug on Website',
    priority: 'Normal',
    message: ''
  });
  const [isSupportSubmitted, setIsSupportSubmitted] = useState(false);
  const [supportHover, setSupportHover] = useState(false);

  const heroVideoRef = useRef(null);
  const aboutVideoRef = useRef(null);

  // Mobile resize listener (700px breakpoint)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Sync browser back/forward history
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash;
      const path = window.location.pathname;
      if (path === '/build' || hash === '#/build' || hash === '#build') {
        setCurrentPage('build');
      } else {
        setCurrentPage('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Navigation handler
  const navigateTo = (page, targetSectionId = null) => {
    setCurrentPage(page);
    setMenuOpen(false);
    if (page === 'build') {
      window.history.pushState(null, '', '#/build');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.history.pushState(null, '', window.location.pathname.replace(/\/build\/?$/, '') || '/');
      if (targetSectionId) {
        setTimeout(() => {
          document.getElementById(targetSectionId)?.scrollIntoView({ behavior: 'smooth' });
        }, 60);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  // Robust video autoplay retry logic
  useEffect(() => {
    if (currentPage !== 'home') return;

    const tryPlay = (videoEl) => {
      if (videoEl) {
        videoEl.muted = true;
        videoEl.play().catch(() => {});
      }
    };

    const playAllVideos = () => {
      tryPlay(heroVideoRef.current);
      tryPlay(aboutVideoRef.current);
    };

    playAllVideos();
    const interval = setInterval(playAllVideos, 1000);

    const handleFirstInteraction = () => {
      playAllVideos();
    };

    document.addEventListener('click', handleFirstInteraction, { once: true });
    document.addEventListener('touchstart', handleFirstInteraction, { once: true });

    return () => {
      clearInterval(interval);
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [currentPage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.65 }
    });
    setIsSubmitted(true);
  };

  const handleSupportSubmit = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 75,
      spread: 60,
      origin: { y: 0.85 }
    });
    setIsSupportSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: '#F2F1F0', color: '#6b6f72', minHeight: '100svh', overflowX: 'hidden' }}>
      
      {/* ============================================================ */}
      {/* GLOBAL NAVBAR                                                */}
      {/* ============================================================ */}
      <header
        style={{
          position: 'relative',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'clamp(20px, 5vw, 56px)',
          padding: 'clamp(20px, 3vw, 38px) clamp(20px, 4vw, 48px) 0',
          alignItems: 'center',
          zIndex: 20
        }}
      >
        {/* Brand Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); navigateTo('home'); }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            textDecoration: 'none'
          }}
        >
          {/* 38px dark circle containing a white 20x8px ellipse rotated -25° */}
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: '50%',
              backgroundColor: '#111111',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <div
              style={{
                width: 20,
                height: 8,
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                transform: 'rotate(-25deg)'
              }}
            />
          </div>

          <span
            style={{
              fontSize: 'clamp(22px, 5vw, 30px)',
              fontWeight: 700,
              color: '#111111',
              letterSpacing: '-0.5px'
            }}
          >
            forge creator
          </span>
        </a>

        {/* Desktop Nav Links */}
        {!isMobile ? (
          <>
            <nav
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 34,
                whiteSpace: 'nowrap'
              }}
            >
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); navigateTo('home'); }}
                style={{
                  fontWeight: 700,
                  fontSize: 'clamp(12px, 2.4vw, 15px)',
                  letterSpacing: '0.06em',
                  color: currentPage === 'home' ? '#111111' : '#3a3a3a',
                  textDecoration: 'none'
                }}
              >
                HOME
              </a>
              <a
                href="#about-section"
                onClick={(e) => { e.preventDefault(); navigateTo('home', 'about-section'); }}
                style={{
                  fontWeight: 700,
                  fontSize: 'clamp(12px, 2.4vw, 15px)',
                  letterSpacing: '0.06em',
                  color: '#3a3a3a',
                  textDecoration: 'none'
                }}
              >
                ABOUT
              </a>
              <a
                href="#support-section"
                onClick={(e) => { e.preventDefault(); navigateTo('home', 'support-section'); }}
                style={{
                  fontWeight: 700,
                  fontSize: 'clamp(12px, 2.4vw, 15px)',
                  letterSpacing: '0.06em',
                  color: '#3a3a3a',
                  textDecoration: 'none'
                }}
              >
                SUPPORT
              </a>
              <a
                href="#/build"
                onClick={(e) => { e.preventDefault(); navigateTo('build'); }}
                style={{
                  fontWeight: 700,
                  fontSize: 'clamp(12px, 2.4vw, 15px)',
                  letterSpacing: '0.06em',
                  color: currentPage === 'build' ? '#15BCDF' : '#3a3a3a',
                  textDecoration: 'none'
                }}
              >
                PRICING & PLANS
              </a>
            </nav>

            {/* Right-aligned "Start Build" button (desktop only) */}
            <a
              href="#/build"
              onClick={(e) => { e.preventDefault(); navigateTo('build'); }}
              className="chamfer-contact"
              onMouseEnter={() => setContactHover(true)}
              onMouseLeave={() => setContactHover(false)}
              style={{
                marginLeft: 'auto',
                background: currentPage === 'home'
                  ? (contactHover ? 'rgba(255, 255, 255, 0.22)' : 'rgba(255, 255, 255, 0.08)')
                  : (contactHover ? '#15BCDF' : '#111827'),
                border: 'none',
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                padding: '14px 26px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                fontSize: 'clamp(12px, 2vw, 14px)',
                fontWeight: 700,
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                cursor: 'pointer',
                backdropFilter: currentPage === 'home' ? 'blur(10px)' : 'none'
              }}
            >
              {/* White stroked mail-envelope SVG icon */}
              <svg
                width="17"
                height="13"
                viewBox="0 0 17 13"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="0.7" y="0.7" width="15.6" height="11.6" rx="1.5" />
                <path d="M1.5 2L8.5 7.5L15.5 2" />
              </svg>
              <span>{currentPage === 'build' ? 'Submit Inquiry' : 'Start Build'}</span>
            </a>
          </>
        ) : (
          /* Mobile Hamburger Button */
          <div style={{ marginLeft: 'auto' }}>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
              style={{
                background: 'rgba(17, 17, 17, 0.65)',
                backdropFilter: 'blur(8px)',
                border: 'none',
                padding: '10px 12px',
                borderRadius: 6,
                display: 'flex',
                flexDirection: 'column',
                gap: 5,
                cursor: 'pointer'
              }}
            >
              {/* 3 white 22x2px bars, gap 5px */}
              <span style={{ display: 'block', width: 22, height: 2, backgroundColor: '#ffffff' }} />
              <span style={{ display: 'block', width: 22, height: 2, backgroundColor: '#ffffff' }} />
              <span style={{ display: 'block', width: 22, height: 2, backgroundColor: '#ffffff' }} />
            </button>
          </div>
        )}

        {/* Mobile Stacked Menu */}
        {isMobile && menuOpen && (
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: 18,
              padding: '16px 20px',
              marginTop: 10,
              background: 'rgba(242, 241, 240, 0.96)',
              backdropFilter: 'blur(12px)',
              borderRadius: 8,
              border: '1px solid rgba(0,0,0,0.06)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.06)'
            }}
          >
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); navigateTo('home'); }}
              style={{
                color: '#1a1c1e',
                fontWeight: 700,
                fontSize: 16,
                letterSpacing: '0.06em',
                textDecoration: 'none'
              }}
            >
              HOME
            </a>
            <a
              href="#about-section"
              onClick={(e) => { e.preventDefault(); navigateTo('home', 'about-section'); }}
              style={{
                color: '#1a1c1e',
                fontWeight: 700,
                fontSize: 16,
                letterSpacing: '0.06em',
                textDecoration: 'none'
              }}
            >
              ABOUT
            </a>
            <a
              href="#support-section"
              onClick={(e) => { e.preventDefault(); navigateTo('home', 'support-section'); }}
              style={{
                color: '#1a1c1e',
                fontWeight: 700,
                fontSize: 16,
                letterSpacing: '0.06em',
                textDecoration: 'none'
              }}
            >
              CREATOR SUPPORT
            </a>
            <a
              href="#/build"
              onClick={(e) => { e.preventDefault(); navigateTo('build'); }}
              style={{
                color: '#15BCDF',
                fontWeight: 700,
                fontSize: 16,
                letterSpacing: '0.06em',
                textDecoration: 'none'
              }}
            >
              PRICING & PLANS
            </a>
          </div>
        )}
      </header>

      {/* ============================================================ */}
      {/* VIEW A: LANDING PAGE (Hero + About ONLY, Form NOT below)      */}
      {/* ============================================================ */}
      {currentPage === 'home' && (
        <>
          {/* SECTION 1 — HERO */}
          <section
            style={{
              minHeight: 'calc(100svh - 80px)',
              backgroundColor: '#F2F1F0',
              overflow: 'hidden',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              marginTop: -80
            }}
          >
            {/* Background 3D Sphere Video */}
            <video
              ref={heroVideoRef}
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260823_050407_500d0339-ab28-41c1-9688-132a74a3b5aa.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              style={{
                position: 'absolute',
                pointerEvents: 'none',
                objectFit: 'contain',
                height: 'auto',
                top: 0,
                ...(isMobile
                  ? { left: '-12%', width: '119%' }
                  : { right: '-20%', width: '99%' }),
                zIndex: 1
              }}
            />

            {/* Desktop-only Scrim Overlay on the left 70% */}
            {!isMobile && (
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '70%',
                  height: '100%',
                  background: 'linear-gradient(90deg, #F2F1F0 0%, #F2F1F0 55%, rgba(242,241,240,0.85) 78%, rgba(242,241,240,0) 100%)',
                  pointerEvents: 'none',
                  zIndex: 2
                }}
              />
            )}

            {/* Hero Headline & CTA Area */}
            <div style={{ position: 'relative', zIndex: 3, paddingTop: 80 }}>
              <h1
                style={{
                  margin: 0,
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  letterSpacing: '0.01em',
                  lineHeight: 0.98,
                  color: '#2b3033',
                  ...(isMobile
                    ? {
                        marginTop: 360,
                        padding: '0 20px 28px 20px',
                        fontSize: 'clamp(34px, 10vw, 56px)'
                      }
                    : {
                        padding: 'min(clamp(40px, 9vw, 120px), 9vh) 20px min(clamp(24px, 4vw, 44px), 5vh) clamp(20px, 9vw, 118px)',
                        fontSize: 'min(clamp(34px, 7.6vw, 80px), 9.2vh)'
                      })
                }}
              >
                <div>BUILDING</div>
                <div>THE</div>
                <div>WEBSITES</div>
                <div style={{ marginLeft: 'min(238px, 28vw)' }}>FOR</div>
                <div style={{ marginLeft: 'min(238px, 28vw)' }}>YOUR</div>
                <div style={{ marginLeft: 'min(238px, 28vw)', color: '#15BCDF' }}>BUSINESS</div>
              </h1>

              {/* CTA button "START YOUR BUILD" navigating to dedicated form page */}
              <div
                style={{
                  paddingLeft: isMobile
                    ? 'calc(20px + min(238px, 28vw))'
                    : 'calc(clamp(20px, 9vw, 118px) + min(238px, 28vw))',
                  paddingBottom: 'min(clamp(36px, 6vw, 80px), 7vh)'
                }}
              >
                <button
                  className="chamfer-btn"
                  onMouseEnter={() => setHeroCtaHover(true)}
                  onMouseLeave={() => setHeroCtaHover(false)}
                  onClick={() => navigateTo('build')}
                  style={{
                    background: heroCtaHover ? '#3fd0ef' : '#15BCDF',
                    border: '1px solid #0fa3c2',
                    color: '#1a1c1e',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    padding: '18px 34px',
                    fontSize: 'clamp(13px, 2.2vw, 16px)',
                    boxShadow: heroCtaHover
                      ? '0 0 0 1px rgba(21,188,223,0.5), 0 14px 36px -8px rgba(15,163,194,0.85)'
                      : '0 0 0 1px rgba(21,188,223,0.35), 0 10px 30px -12px rgba(15,163,194,0.6)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 12,
                    cursor: 'pointer',
                    transition: 'background 0.2s ease, box-shadow 0.2s ease',
                    fontFamily: 'inherit'
                  }}
                >
                  <span>START YOUR BUILD</span>
                  <span
                    style={{
                      display: 'inline-block',
                      width: 22,
                      height: 1,
                      backgroundColor: '#1a1c1e',
                      flexShrink: 0
                    }}
                  />
                </button>
              </div>
            </div>
          </section>

          {/* SECTION 2 — ABOUT FORGE CREATOR */}
          <section
            id="about-section"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: 40,
              background: 'linear-gradient(180deg, #F2F1F0 0%, #F7F6F8 18%, #F7F6F8 100%)',
              padding: 'clamp(60px, 10vw, 140px) 0 clamp(30px, 5vw, 70px) clamp(20px, 9vw, 118px)',
              overflow: 'hidden'
            }}
          >
            {/* Left Column */}
            <div
              style={{
                flex: '1 1 420px',
                minWidth: 300,
                paddingRight: isMobile ? 20 : 40
              }}
            >
              <h2
                style={{
                  margin: 0,
                  fontSize: 'clamp(34px, 6.5vw, 72px)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.01em',
                  lineHeight: 0.98,
                  color: '#2b3033'
                }}
              >
                <div>ABOUT</div>
                <div style={{ marginLeft: 'min(160px, 18vw)', color: '#15BCDF' }}>
                  FORGE
                </div>
              </h2>

              <p
                style={{
                  maxWidth: 520,
                  margin: '32px 0 0 min(160px, 18vw)',
                  fontSize: 'clamp(14px, 1.6vw, 17px)',
                  lineHeight: 1.7,
                  color: '#6b6f72'
                }}
              >
                Forge Creator builds the digital presence modern creators and businesses rely on. From custom portfolio websites to automated brand deal media kits, we ensure your brand stands out, closes high-ticket sponsorships, and converts visitors into loyal clients. Fast turnaround, zero coding required.
              </p>

              {/* Capability badges */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 12,
                  margin: '24px 0 0 min(160px, 18vw)'
                }}
              >
                {['⚡ 7-Day Turnaround', '💎 100% Bespoke Design', '📈 Automated Media Kits'].map((badge, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      backgroundColor: 'rgba(21, 188, 223, 0.12)',
                      color: '#0fa3c2',
                      padding: '6px 14px',
                      borderRadius: 4,
                      border: '1px solid rgba(21, 188, 223, 0.25)'
                    }}
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* "VIEW PRICING PLANS" button */}
              <div style={{ margin: '36px 0 0 min(160px, 18vw)' }}>
                <button
                  className="chamfer-btn"
                  onMouseEnter={() => setAboutCtaHover(true)}
                  onMouseLeave={() => setAboutCtaHover(false)}
                  onClick={() => navigateTo('build')}
                  style={{
                    background: aboutCtaHover ? '#3fd0ef' : '#15BCDF',
                    border: '1px solid #0fa3c2',
                    color: '#1a1c1e',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    padding: '18px 34px',
                    fontSize: 'clamp(13px, 2.2vw, 16px)',
                    boxShadow: aboutCtaHover
                      ? '0 0 0 1px rgba(21,188,223,0.5), 0 14px 36px -8px rgba(15,163,194,0.85)'
                      : '0 0 0 1px rgba(21,188,223,0.35), 0 10px 30px -12px rgba(15,163,194,0.6)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 12,
                    cursor: 'pointer',
                    transition: 'background 0.2s ease, box-shadow 0.2s ease',
                    fontFamily: 'inherit'
                  }}
                >
                  <span>VIEW PRICING PLANS</span>
                  <span
                    style={{
                      display: 'inline-block',
                      width: 22,
                      height: 1,
                      backgroundColor: '#1a1c1e',
                      flexShrink: 0
                    }}
                  />
                </button>
              </div>
            </div>

            {/* Right Column Video */}
            <div
              style={{
                flex: '1 1 360px',
                minWidth: 280,
                display: 'flex',
                justifyContent: 'flex-end',
                position: 'relative'
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: 644
                }}
              >
                <video
                  ref={aboutVideoRef}
                  src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260823_063501_2e2c8971-de1e-473a-8611-a0c9ae7ee186.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  style={{
                    width: '100%',
                    maxWidth: 644,
                    height: 'auto',
                    display: 'block'
                  }}
                />

                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '100%',
                    maxWidth: 644,
                    height: '100%',
                    background: '#15BCDF',
                    mixBlendMode: 'hue',
                    pointerEvents: 'none',
                    zIndex: 1
                  }}
                />
              </div>
            </div>
          </section>

          {/* SECTION 3 — CREATOR ISSUE & SUPPORT FORM (AT THE BOTTOM OF THE LANDING PAGE) */}
          <section
            id="support-section"
            style={{
              padding: 'clamp(60px, 8vw, 100px) clamp(20px, 5vw, 48px) clamp(40px, 6vw, 60px)',
              maxWidth: 820,
              margin: '0 auto',
              scrollMarginTop: 60
            }}
          >
            {/* Heading */}
            <div style={{ marginBottom: 32 }}>
              <h2
                style={{
                  margin: 0,
                  fontSize: 'clamp(30px, 5.5vw, 54px)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.01em',
                  lineHeight: 0.98,
                  color: '#2b3033'
                }}
              >
                <div>CREATOR</div>
                <div style={{ marginLeft: 'min(120px, 14vw)', color: '#15BCDF' }}>
                  SUPPORT & CONTACT
                </div>
              </h2>
              <p
                style={{
                  margin: '16px 0 0 min(120px, 14vw)',
                  fontSize: 'clamp(14px, 1.5vw, 16px)',
                  color: '#6b6f72',
                  lineHeight: 1.6
                }}
              >
                Need assistance with your website, want to report an issue, or request custom updates? Submit your request below and our team will get in touch directly.
              </p>
            </div>

            {/* Support Form Card */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: 20,
                border: '1px solid rgba(0, 0, 0, 0.08)',
                boxShadow: '0 18px 48px rgba(0, 0, 0, 0.04)',
                padding: 'clamp(24px, 5vw, 44px)'
              }}
            >
              {isSupportSubmitted ? (
                <div style={{ textAlign: 'center', padding: '36px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: '50%',
                      backgroundColor: 'rgba(21, 188, 223, 0.14)',
                      color: '#15BCDF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 28,
                      fontWeight: 700
                    }}
                  >
                    ✓
                  </div>
                  <div>
                    <h3 style={{ margin: '0 0 8px 0', fontSize: 24, fontWeight: 700, color: '#1a1c1e', textTransform: 'uppercase' }}>
                      Support Ticket Received!
                    </h3>
                    <p style={{ margin: 0, fontSize: 14, color: '#6b6f72', maxWidth: 440, lineHeight: 1.6 }}>
                      Thanks, <strong>{supportData.creatorName || 'there'}</strong>! Your ticket regarding <strong>{supportData.issueCategory}</strong> has been logged. We will reply to <strong>{supportData.email || 'your email'}</strong> within a few hours.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsSupportSubmitted(false)}
                    style={{
                      marginTop: 8,
                      background: 'none',
                      border: 'none',
                      color: '#15BCDF',
                      fontSize: 13,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      cursor: 'pointer',
                      textDecoration: 'underline'
                    }}
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSupportSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  {/* Row: Name + Email */}
                  <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 16 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      <label style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#1a1c1e' }}>
                        Your Name or Handle
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="@yourhandle or Alex"
                        value={supportData.creatorName}
                        onChange={(e) => setSupportData({ ...supportData, creatorName: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: 8,
                          border: '1px solid #e2e8f0',
                          backgroundColor: '#ffffff',
                          fontSize: 14,
                          color: '#1a1c1e',
                          fontFamily: 'inherit',
                          outline: 'none',
                          boxSizing: 'border-box',
                          transition: 'border-color 0.2s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#15BCDF'}
                        onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                      />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      <label style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#1a1c1e' }}>
                        Contact Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="creator@email.com"
                        value={supportData.email}
                        onChange={(e) => setSupportData({ ...supportData, email: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: 8,
                          border: '1px solid #e2e8f0',
                          backgroundColor: '#ffffff',
                          fontSize: 14,
                          color: '#1a1c1e',
                          fontFamily: 'inherit',
                          outline: 'none',
                          boxSizing: 'border-box',
                          transition: 'border-color 0.2s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#15BCDF'}
                        onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                      />
                    </div>
                  </div>

                  {/* Issue Category */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <label style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#1a1c1e' }}>
                      Topic / Issue Category
                    </label>
                    <select
                      value={supportData.issueCategory}
                      onChange={(e) => setSupportData({ ...supportData, issueCategory: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: 8,
                        border: '1px solid #e2e8f0',
                        backgroundColor: '#ffffff',
                        fontSize: 14,
                        color: '#1a1c1e',
                        fontFamily: 'inherit',
                        outline: 'none',
                        cursor: 'pointer',
                        boxSizing: 'border-box'
                      }}
                    >
                      <option value="Technical Issue / Bug on Website">Technical Issue / Bug on Website</option>
                      <option value="Update Media Kit or Brand Sponsors">Update Media Kit or Brand Sponsors</option>
                      <option value="Custom Design or Feature Request">Custom Design or Feature Request</option>
                      <option value="Domain or Hosting Help">Custom Domain or Hosting Help</option>
                      <option value="Urgent Creator Support">Urgent Creator Support</option>
                    </select>
                  </div>

                  {/* Priority Level */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <label style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#1a1c1e' }}>
                      Priority Level
                    </label>
                    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                      {['Normal', 'High', 'Urgent ⚡'].map((lvl) => (
                        <button
                          key={lvl}
                          type="button"
                          onClick={() => setSupportData({ ...supportData, priority: lvl })}
                          style={{
                            padding: '8px 18px',
                            borderRadius: 6,
                            fontSize: 13,
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.04em',
                            border: supportData.priority === lvl ? '2px solid #15BCDF' : '1px solid #e2e8f0',
                            backgroundColor: supportData.priority === lvl ? 'rgba(21, 188, 223, 0.1)' : '#ffffff',
                            color: supportData.priority === lvl ? '#0fa3c2' : '#6b6f72',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            fontFamily: 'inherit'
                          }}
                        >
                          {lvl}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <label style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#1a1c1e' }}>
                      Describe the Issue or Request
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us what you need help with, any specific error messages, or what you'd like updated..."
                      value={supportData.message}
                      onChange={(e) => setSupportData({ ...supportData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: 8,
                        border: '1px solid #e2e8f0',
                        backgroundColor: '#ffffff',
                        fontSize: 14,
                        color: '#1a1c1e',
                        fontFamily: 'inherit',
                        outline: 'none',
                        boxSizing: 'border-box',
                        resize: 'vertical',
                        transition: 'border-color 0.2s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#15BCDF'}
                      onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                    />
                  </div>

                  {/* Submit Button */}
                  <div style={{ marginTop: 8 }}>
                    <button
                      type="submit"
                      className="chamfer-btn"
                      onMouseEnter={() => setSupportHover(true)}
                      onMouseLeave={() => setSupportHover(false)}
                      style={{
                        width: '100%',
                        padding: '16px 24px',
                        background: supportHover ? '#1a1c1e' : '#111827',
                        border: '1px solid #000000',
                        color: '#ffffff',
                        fontSize: 14,
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.14em',
                        boxShadow: supportHover
                          ? '0 10px 28px rgba(0, 0, 0, 0.3)'
                          : '0 4px 16px rgba(0, 0, 0, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 12,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        fontFamily: 'inherit'
                      }}
                    >
                      <span>Send Support Message</span>
                      <span
                        style={{
                          display: 'inline-block',
                          width: 22,
                          height: 1,
                          backgroundColor: '#15BCDF',
                          flexShrink: 0
                        }}
                      />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </section>
        </>
      )}

      {/* ============================================================ */}
      {/* VIEW B: DEDICATED REQUEST FORM PAGE                          */}
      {/* ============================================================ */}
      {currentPage === 'build' && (
        <section
          style={{
            minHeight: 'calc(100svh - 180px)',
            padding: 'clamp(30px, 5vw, 60px) clamp(20px, 5vw, 40px) clamp(60px, 8vw, 100px)',
            maxWidth: 820,
            margin: '0 auto'
          }}
        >
          {/* Back to Home Button */}
          <div style={{ marginBottom: 28 }}>
            <button
              onClick={() => navigateTo('home')}
              onMouseEnter={() => setBackHover(true)}
              onMouseLeave={() => setBackHover(false)}
              style={{
                background: 'none',
                border: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: backHover ? '#111111' : '#6b6f72',
                cursor: 'pointer',
                transition: 'color 0.2s ease',
                fontFamily: 'inherit',
                padding: '8px 0'
              }}
            >
              <span>←</span>
              <span>Back to Home</span>
            </button>
          </div>

          {/* Section Heading */}
          <div style={{ marginBottom: 36 }}>
            <h1
              style={{
                margin: 0,
                fontSize: 'clamp(32px, 6vw, 60px)',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.01em',
                lineHeight: 0.98,
                color: '#2b3033'
              }}
            >
              <div>START</div>
              <div style={{ marginLeft: 'min(120px, 14vw)', color: '#15BCDF' }}>
                YOUR BUILD
              </div>
            </h1>
            <p
              style={{
                margin: '16px 0 0 min(120px, 14vw)',
                fontSize: 'clamp(14px, 1.5vw, 16px)',
                color: '#6b6f72',
                lineHeight: 1.6
              }}
            >
              Select your tier and tell us about your vision. We will review your project and deliver a tailored concept within 24 hours.
            </p>
          </div>

          {/* Dedicated Custom Form Card */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 20,
              border: '1px solid rgba(0, 0, 0, 0.08)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.05)',
              padding: 'clamp(24px, 5vw, 48px)'
            }}
          >
            {isSubmitted ? (
              <div style={{ textAlign: 'center', padding: '48px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(21, 188, 223, 0.14)',
                    color: '#15BCDF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 32,
                    fontWeight: 700
                  }}
                >
                  ✓
                </div>
                <div>
                  <h2 style={{ margin: '0 0 8px 0', fontSize: 26, fontWeight: 700, color: '#1a1c1e', textTransform: 'uppercase' }}>
                    Request Received!
                  </h2>
                  <p style={{ margin: 0, fontSize: 15, color: '#6b6f72', maxWidth: 460, lineHeight: 1.6 }}>
                    Thank you, <strong>{formData.fullName || 'there'}</strong>! We received your request for the <strong>{formData.plan}</strong> plan and will reply to <strong>{formData.email || 'your email'}</strong> within 24 hours.
                  </p>
                </div>

                <div style={{ display: 'flex', gap: 16, marginTop: 12 }}>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#15BCDF',
                      fontSize: 13,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      cursor: 'pointer',
                      textDecoration: 'underline'
                    }}
                  >
                    Submit another request
                  </button>
                  <span style={{ color: '#d2d2d7' }}>•</span>
                  <button
                    type="button"
                    onClick={() => navigateTo('home')}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#1a1c1e',
                      fontSize: 13,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      cursor: 'pointer'
                    }}
                  >
                    Return to Home
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                
                {/* Full Name */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#1a1c1e' }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 8,
                      border: '1px solid #e2e8f0',
                      backgroundColor: '#ffffff',
                      fontSize: 14,
                      color: '#1a1c1e',
                      fontFamily: 'inherit',
                      outline: 'none',
                      boxSizing: 'border-box',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#15BCDF'}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  />
                </div>

                {/* Email Address */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#1a1c1e' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 8,
                      border: '1px solid #e2e8f0',
                      backgroundColor: '#ffffff',
                      fontSize: 14,
                      color: '#1a1c1e',
                      fontFamily: 'inherit',
                      outline: 'none',
                      boxSizing: 'border-box',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#15BCDF'}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  />
                </div>

                {/* Which pages do you need? */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#1a1c1e' }}>
                    Which pages do you need?
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Home, Brand, Media Kit, Links..."
                    value={formData.pagesNeeded}
                    onChange={(e) => setFormData({ ...formData, pagesNeeded: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 8,
                      border: '1px solid #e2e8f0',
                      backgroundColor: '#ffffff',
                      fontSize: 14,
                      color: '#1a1c1e',
                      fontFamily: 'inherit',
                      outline: 'none',
                      boxSizing: 'border-box',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#15BCDF'}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  />
                </div>

                {/* Website Details */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#1a1c1e' }}>
                    Website Details (proper detailing, number of pages, etc.)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your vision..."
                    value={formData.websiteDetails}
                    onChange={(e) => setFormData({ ...formData, websiteDetails: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 8,
                      border: '1px solid #e2e8f0',
                      backgroundColor: '#ffffff',
                      fontSize: 14,
                      color: '#1a1c1e',
                      fontFamily: 'inherit',
                      outline: 'none',
                      boxSizing: 'border-box',
                      resize: 'vertical',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#15BCDF'}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  />
                </div>

                {/* Currency */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#1a1c1e' }}>
                    Currency
                  </label>
                  <select
                    value={formData.currency}
                    onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 8,
                      border: '1px solid #e2e8f0',
                      backgroundColor: '#ffffff',
                      fontSize: 14,
                      color: '#1a1c1e',
                      fontFamily: 'inherit',
                      outline: 'none',
                      cursor: 'pointer',
                      boxSizing: 'border-box'
                    }}
                  >
                    <option value="INR">INR</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="CAD">CAD</option>
                    <option value="AUD">AUD</option>
                    <option value="AED">AED</option>
                  </select>
                </div>

                {/* Select a Plan */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 6 }}>
                  <label style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#1a1c1e' }}>
                    Select a Plan
                  </label>

                  {/* Plan: Basic */}
                  <div
                    onClick={() => setFormData({ ...formData, plan: 'Basic' })}
                    style={{
                      padding: '16px 20px',
                      borderRadius: 12,
                      border: formData.plan === 'Basic' ? '2px solid #15BCDF' : '1px solid #e2e8f0',
                      backgroundColor: formData.plan === 'Basic' ? 'rgba(21, 188, 223, 0.05)' : '#ffffff',
                      boxShadow: formData.plan === 'Basic' ? '0 0 0 1px rgba(21, 188, 223, 0.2)' : 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                      <span style={{ fontWeight: 700, fontSize: 16, color: '#1a1c1e', textTransform: 'uppercase' }}>
                        Basic
                      </span>
                      <span style={{ marginLeft: 'auto', fontWeight: 700, fontSize: 16, color: '#15BCDF' }}>
                        {CURRENCY_SYMBOLS[formData.currency] || '₹'}199
                      </span>
                    </div>
                    <p style={{ margin: '6px 0 0 0', fontSize: 13, color: '#6b6f72', lineHeight: 1.5 }}>
                      2 pages: 1st contact form (customizable), 2nd media kit.
                    </p>
                  </div>

                  {/* Plan: Standard */}
                  <div
                    onClick={() => setFormData({ ...formData, plan: 'Standard' })}
                    style={{
                      padding: '16px 20px',
                      borderRadius: 12,
                      border: formData.plan === 'Standard' ? '2px solid #15BCDF' : '1px solid #e2e8f0',
                      backgroundColor: formData.plan === 'Standard' ? 'rgba(21, 188, 223, 0.05)' : '#ffffff',
                      boxShadow: formData.plan === 'Standard' ? '0 0 0 1px rgba(21, 188, 223, 0.2)' : 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                      <span style={{ fontWeight: 700, fontSize: 16, color: '#1a1c1e', textTransform: 'uppercase' }}>
                        Standard
                      </span>
                      <span style={{ marginLeft: 'auto', fontWeight: 700, fontSize: 16, color: '#15BCDF' }}>
                        {CURRENCY_SYMBOLS[formData.currency] || '₹'}399
                      </span>
                    </div>
                    <p style={{ margin: '6px 0 0 0', fontSize: 13, color: '#6b6f72', lineHeight: 1.5 }}>
                      4 pages: 1st contact form (customizable), 2nd Beacon Media Kit, 3rd & 4th anything you want (customizable).
                    </p>
                  </div>

                  {/* Plan: Premium */}
                  <div
                    onClick={() => setFormData({ ...formData, plan: 'Premium' })}
                    style={{
                      padding: '16px 20px',
                      borderRadius: 12,
                      border: formData.plan === 'Premium' ? '2px solid #15BCDF' : '1px solid #e2e8f0',
                      backgroundColor: formData.plan === 'Premium' ? 'rgba(21, 188, 223, 0.05)' : '#ffffff',
                      boxShadow: formData.plan === 'Premium' ? '0 0 0 1px rgba(21, 188, 223, 0.2)' : 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                      <span style={{ fontWeight: 700, fontSize: 16, color: '#1a1c1e', textTransform: 'uppercase' }}>
                        Premium
                      </span>
                      <span style={{ marginLeft: 'auto', fontWeight: 700, fontSize: 16, color: '#15BCDF' }}>
                        {CURRENCY_SYMBOLS[formData.currency] || '₹'}799
                      </span>
                    </div>
                    <p style={{ margin: '6px 0 0 0', fontSize: 13, color: '#6b6f72', lineHeight: 1.5 }}>
                      Any number of pages: contact page, media kit, and all customizable pages you want.
                    </p>
                  </div>
                </div>

                {/* Submit CTA Button */}
                <div style={{ marginTop: 12 }}>
                  <button
                    type="submit"
                    className="chamfer-btn"
                    onMouseEnter={() => setSubmitHover(true)}
                    onMouseLeave={() => setSubmitHover(false)}
                    style={{
                      width: '100%',
                      padding: '18px 24px',
                      background: submitHover ? '#1a1c1e' : '#111827',
                      border: '1px solid #000000',
                      color: '#ffffff',
                      fontSize: 15,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.14em',
                      boxShadow: submitHover
                        ? '0 10px 28px rgba(0, 0, 0, 0.3)'
                        : '0 4px 16px rgba(0, 0, 0, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 12,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      fontFamily: 'inherit'
                    }}
                  >
                    <span>Send Request</span>
                    <span
                      style={{
                        display: 'inline-block',
                        width: 22,
                        height: 1,
                        backgroundColor: '#15BCDF',
                        flexShrink: 0
                      }}
                    />
                  </button>
                </div>

              </form>
            )}
          </div>
        </section>
      )}

      {/* ============================================================ */}
      {/* GLOBAL FOOTER                                                */}
      {/* ============================================================ */}
      <footer
        style={{
          borderTop: '1px solid rgba(0, 0, 0, 0.08)',
          backgroundColor: '#F2F1F0',
          padding: '36px clamp(20px, 5vw, 48px)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 20,
          fontSize: 13,
          color: '#86868b'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div
            style={{
              width: 24,
              height: 24,
              borderRadius: '50%',
              backgroundColor: '#111111',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div
              style={{
                width: 12,
                height: 5,
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                transform: 'rotate(-25deg)'
              }}
            />
          </div>
          <span style={{ fontWeight: 700, color: '#1a1c1e', textTransform: 'uppercase' }}>
            Forge Creator
          </span>
          <span>• Bespoke Websites & Media Portals</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); navigateTo('home'); }}
            style={{ color: '#6b6f72', textDecoration: 'none', fontWeight: 700 }}
          >
            HOME
          </a>
          <a
            href="#about-section"
            onClick={(e) => { e.preventDefault(); navigateTo('home', 'about-section'); }}
            style={{ color: '#6b6f72', textDecoration: 'none', fontWeight: 700 }}
          >
            ABOUT
          </a>
          <a
            href="#support-section"
            onClick={(e) => { e.preventDefault(); navigateTo('home', 'support-section'); }}
            style={{ color: '#15BCDF', textDecoration: 'none', fontWeight: 700 }}
          >
            CREATOR SUPPORT
          </a>
          <a
            href="#/build"
            onClick={(e) => { e.preventDefault(); navigateTo('build'); }}
            style={{ color: '#6b6f72', textDecoration: 'none', fontWeight: 700 }}
          >
            PRICING
          </a>
        </div>

        <div>
          © {new Date().getFullYear()} Forge Creator Sites. All rights reserved.
        </div>
      </footer>

    </div>
  );
}
