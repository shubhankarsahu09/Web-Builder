import React, { useState, useEffect, useRef } from 'react';

export default function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroCtaHover, setHeroCtaHover] = useState(false);
  const [aboutCtaHover, setAboutCtaHover] = useState(false);
  const [contactHover, setContactHover] = useState(false);

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

  // Robust video autoplay retry logic
  useEffect(() => {
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
  }, []);

  const scrollToAbout = (e) => {
    e?.preventDefault();
    setMenuOpen(false);
    document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHero = (e) => {
    e?.preventDefault();
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ backgroundColor: '#F2F1F0', color: '#6b6f72', minHeight: '100svh', overflowX: 'hidden' }}>
      
      {/* ============================================================ */}
      {/* SECTION 1 — HERO                                             */}
      {/* ============================================================ */}
      <section
        style={{
          minHeight: '100svh',
          backgroundColor: '#F2F1F0',
          overflow: 'hidden',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        {/* Background Video */}
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

        {/* Desktop-only scrim overlay on the left 70% */}
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

        {/* Navbar */}
        <header
          style={{
            position: 'relative',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'clamp(20px, 5vw, 56px)',
            padding: 'clamp(20px, 3vw, 38px) clamp(20px, 4vw, 48px) 0',
            alignItems: 'center',
            zIndex: 10
          }}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={scrollToHero}
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

            {/* lowercase word "targo" */}
            <span
              style={{
                fontSize: 'clamp(22px, 5vw, 30px)',
                fontWeight: 400,
                color: '#111111',
                letterSpacing: '-0.5px'
              }}
            >
              targo
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
                  onClick={scrollToHero}
                  style={{
                    fontWeight: 700,
                    fontSize: 'clamp(12px, 2.4vw, 15px)',
                    letterSpacing: '0.06em',
                    color: '#3a3a3a',
                    textDecoration: 'none'
                  }}
                >
                  HOME
                </a>
                <a
                  href="#about-section"
                  onClick={scrollToAbout}
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
                  href="#contact"
                  style={{
                    fontWeight: 700,
                    fontSize: 'clamp(12px, 2.4vw, 15px)',
                    letterSpacing: '0.06em',
                    color: '#3a3a3a',
                    textDecoration: 'none'
                  }}
                >
                  CONTACT US
                </a>
              </nav>

              {/* Right-aligned "Contact us" button (desktop only) */}
              <a
                href="#contact"
                className="chamfer-contact"
                onMouseEnter={() => setContactHover(true)}
                onMouseLeave={() => setContactHover(false)}
                style={{
                  marginLeft: 'auto',
                  background: contactHover ? 'rgba(255, 255, 255, 0.14)' : 'transparent',
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
                  transition: 'background 0.2s ease',
                  cursor: 'pointer'
                }}
              >
                {/* White stroked mail-envelope SVG icon (17x13, stroke-width 1.4) */}
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
                <span>Contact us</span>
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
                background: 'rgba(242, 241, 240, 0.95)',
                backdropFilter: 'blur(12px)',
                borderRadius: 8,
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.06)'
              }}
            >
              <a
                href="#"
                onClick={scrollToHero}
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
                onClick={scrollToAbout}
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
                href="#contact"
                onClick={() => setMenuOpen(false)}
                style={{
                  color: '#1a1c1e',
                  fontWeight: 700,
                  fontSize: 16,
                  letterSpacing: '0.06em',
                  textDecoration: 'none'
                }}
              >
                CONTACT US
              </a>
            </div>
          )}
        </header>

        {/* Hero Headline & CTA Area */}
        <div style={{ position: 'relative', zIndex: 3 }}>
          {/* Headline (h1, 6 staircase lines, uppercase, weight 700) */}
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
            <div>SCALING</div>
            <div>THE</div>
            <div>PLATFORM</div>
            <div style={{ marginLeft: 'min(238px, 28vw)' }}>FOR</div>
            <div style={{ marginLeft: 'min(238px, 28vw)' }}>YOUR</div>
            <div style={{ marginLeft: 'min(238px, 28vw)', color: '#15BCDF' }}>BUSINESS</div>
          </h1>

          {/* CTA button "GET STARTED" aligned with FOR/YOUR/BUSINESS indent */}
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
              onClick={scrollToAbout}
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
              <span>GET STARTED</span>
              {/* Trailing 22x1px dark line */}
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

      {/* ============================================================ */}
      {/* SECTION 2 — ABOUT                                            */}
      {/* ============================================================ */}
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
        {/* Left Column (flex 1 1 420px, min-width 300px) */}
        <div
          style={{
            flex: '1 1 420px',
            minWidth: 300,
            paddingRight: isMobile ? 20 : 40
          }}
        >
          {/* h2, two staircase lines: "ABOUT" then "BUSINESS" in #15BCDF indented by min(160px, 18vw) */}
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
              BUSINESS
            </div>
          </h2>

          {/* Paragraph (max-width 520px, margin 32px 0 0 min(160px, 18vw)) */}
          <p
            style={{
              maxWidth: 520,
              margin: '32px 0 0 min(160px, 18vw)',
              fontSize: 'clamp(14px, 1.6vw, 17px)',
              lineHeight: 1.7,
              color: '#6b6f72'
            }}
          >
            Targo builds the testing infrastructure modern teams rely on. From automated pipelines to full-scale QA audits, we make sure your software ships fast and breaks nothing. Hundreds of releases, zero surprises.
          </p>

          {/* "LEARN MORE" button, identical style to the hero CTA */}
          <div style={{ margin: '36px 0 0 min(160px, 18vw)' }}>
            <button
              className="chamfer-btn"
              onMouseEnter={() => setAboutCtaHover(true)}
              onMouseLeave={() => setAboutCtaHover(false)}
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
              <span>LEARN MORE</span>
              {/* Trailing 22x1px dark line */}
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

        {/* Right Column (flex 1 1 360px, min-width 280px, justify-content flex-end, position relative) */}
        <div
          style={{
            flex: '1 1 360px',
            minWidth: 280,
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'relative'
          }}
        >
          {/* Video Container flush to right screen edge */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: 644
            }}
          >
            {/* Video */}
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

            {/* Overlay rectangle exactly covering the video (#15BCDF with mix-blend-mode: hue) */}
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

    </div>
  );
}
