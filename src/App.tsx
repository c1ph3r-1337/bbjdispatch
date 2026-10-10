import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeatureCallout } from './components/FeatureCallout';
import { ExperienceMetrics } from './components/ExperienceMetrics';
import { GeometricGallery } from './components/GeometricGallery';
import { CoursesAccordion } from './components/CoursesAccordion';
import { MobileCallerIdSection } from './components/MobileCallerIdSection';
import { Testimonials } from './components/Testimonials';
import { SpotlightCTA } from './components/SpotlightCTA';
import { ContactBanners } from './components/ContactBanners';
import { Footer } from './components/Footer';
import { EnrollModal } from './components/EnrollModal';
import { MobileBottomDock } from './components/mobile/MobileBottomDock';
import { SectionPagination, SECTIONS } from './components/SectionPagination';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { openDialer } from './utils/whatsapp';

type Route = 'home' | 'terms' | 'privacy';

function getRouteFromHash(): Route {
  if (typeof window === 'undefined') return 'home';
  const hash = window.location.hash.toLowerCase();
  if (hash === '#terms' || hash.startsWith('#terms')) return 'terms';
  if (hash === '#privacy' || hash.startsWith('#privacy')) return 'privacy';
  return 'home';
}

export const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<Route>(getRouteFromHash());
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('45-Day Truck Dispatch Course');
  const [isSyllabusMode, setIsSyllabusMode] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<number | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
      el.scrollIntoView({
        behavior: 'smooth',
        block: isMobile ? 'start' : 'center',
      });
      setActiveSection(id);
    }
  };

  // Track currently active section in viewport
  useEffect(() => {
    if (currentRoute !== 'home') return;

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: [0.1, 0.4],
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [currentRoute]);

  // Discrete Wheel & Keyboard Section Snapping Controller
  useEffect(() => {
    if (currentRoute !== 'home' || modalOpen) return;

    const getClosestSectionIndex = (): number => {
      const windowCenter = window.scrollY + window.innerHeight / 2;
      let closestIdx = 0;
      let minDistance = Infinity;

      SECTIONS.forEach(({ id }, idx) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const elementCenter = window.scrollY + rect.top + rect.height / 2;
          const dist = Math.abs(windowCenter - elementCenter);
          if (dist < minDistance) {
            minDistance = dist;
            closestIdx = idx;
          }
        }
      });

      return closestIdx;
    };

    const handleWheel = (e: WheelEvent) => {
      if (modalOpen) return;

      // Normalize wheel delta across physical mice (deltaMode === 1 lines) and trackpads (deltaMode === 0 pixels)
      const normalizedDelta =
        e.deltaMode === 1
          ? e.deltaY * 40
          : e.deltaMode === 2
          ? e.deltaY * window.innerHeight
          : e.deltaY;

      // Ignore minuscule jitter/drift
      if (Math.abs(normalizedDelta) < 12) return;

      if (isScrollingRef.current) {
        e.preventDefault();
        return;
      }

      const currentIndex = getClosestSectionIndex();

      if (normalizedDelta > 0 && currentIndex < SECTIONS.length - 1) {
        e.preventDefault();
        isScrollingRef.current = true;
        scrollToSection(SECTIONS[currentIndex + 1].id);
      } else if (normalizedDelta < 0 && currentIndex > 0) {
        e.preventDefault();
        isScrollingRef.current = true;
        scrollToSection(SECTIONS[currentIndex - 1].id);
      }

      if (scrollTimeoutRef.current) window.clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = window.setTimeout(() => {
        isScrollingRef.current = false;
      }, 450);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (modalOpen) return;
      const target = e.target as HTMLElement;
      if (target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) return;

      const currentIndex = getClosestSectionIndex();

      if (['ArrowDown', 'PageDown'].includes(e.key)) {
        if (currentIndex < SECTIONS.length - 1) {
          e.preventDefault();
          scrollToSection(SECTIONS[currentIndex + 1].id);
        }
      } else if (['ArrowUp', 'PageUp'].includes(e.key)) {
        if (currentIndex > 0) {
          e.preventDefault();
          scrollToSection(SECTIONS[currentIndex - 1].id);
        }
      } else if (e.key === 'Home') {
        e.preventDefault();
        scrollToSection(SECTIONS[0].id);
      } else if (e.key === 'End') {
        e.preventDefault();
        scrollToSection(SECTIONS[SECTIONS.length - 1].id);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      if (scrollTimeoutRef.current) window.clearTimeout(scrollTimeoutRef.current);
    };
  }, [currentRoute, modalOpen]);

  // Dynamically activate CSS scroll snap only on home view when modals are closed
  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (currentRoute === 'home' && !modalOpen) {
      document.documentElement.classList.add('scroll-snap-active');
    } else {
      document.documentElement.classList.remove('scroll-snap-active');
    }
    return () => {
      document.documentElement.classList.remove('scroll-snap-active');
    };
  }, [currentRoute, modalOpen]);

  useEffect(() => {
    const handleHashChange = () => {
      const nextRoute = getRouteFromHash();
      setCurrentRoute(nextRoute);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Dynamic SEO metadata updates for browser tabs and crawlers
  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (currentRoute === 'terms') {
      document.title = 'Terms of Service | BBJ Dispatch Academy';
      if (metaDescription) {
        metaDescription.setAttribute('content', 'Terms of Service, curriculum policies, and enrollment guidelines for BBJ Dispatch Academy truck dispatch training.');
      }
    } else if (currentRoute === 'privacy') {
      document.title = 'Privacy Policy | BBJ Dispatch Academy';
      if (metaDescription) {
        metaDescription.setAttribute('content', 'Privacy Policy and student data protection standards for BBJ Dispatch Academy.');
      }
    } else {
      document.title = 'BBJ Dispatch Academy | 45-Day US Truck Dispatch Training';
      if (metaDescription) {
        metaDescription.setAttribute('content', 'Master U.S. freight dispatching in 45 days with BBJ Dispatch Academy. Hands-on training on DAT One, Truckstop, rate negotiations, carrier packets, and job placement assistance. Online & offline classes in Zira, Punjab.');
      }
    }
  }, [currentRoute]);

  const navigateTo = (route: Route) => {
    if (route === 'home') {
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      window.location.hash = `#${route}`;
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
    setCurrentRoute(route);
  };

  const handleOpenEnroll = (courseName?: string) => {
    setSelectedCourse(courseName || '45-Day Truck Dispatch Course');
    setIsSyllabusMode(false);
    setModalOpen(true);
  };

  const handleOpenSyllabus = () => {
    setSelectedCourse('Complete Dispatch Masterclass');
    setIsSyllabusMode(true);
    setModalOpen(true);
  };

  const handleOpenContact = () => {
    setSelectedCourse('Admissions Consultation');
    setIsSyllabusMode(false);
    setModalOpen(true);
  };

  // Dedicated Theme-Based Terms of Service Page
  if (currentRoute === 'terms') {
    return <TermsPage onBack={() => navigateTo('home')} />;
  }

  // Dedicated Theme-Based Privacy Policy Page
  if (currentRoute === 'privacy') {
    return <PrivacyPage onBack={() => navigateTo('home')} />;
  }

  // Main Single-Page Experience
  return (
    <div className="relative min-h-screen bg-[#081017] text-white selection:bg-dispatch-yellow selection:text-[#081017]">
      {/* Navigation */}
      <Navbar
        onOpenEnrollModal={handleOpenEnroll}
        onOpenContactModal={handleOpenContact}
      />

      {/* Desktop Floating Right-Side Section Pagination Dots */}
      <SectionPagination
        activeSection={activeSection}
        onSelectSection={scrollToSection}
      />

      {/* Main Page Flow */}
      <main className="pb-16 md:pb-0">
        {/* 1. Hero Section (Headline, Subtitle, 3D Truck, Concentric Radar, Outlined Typography & Mobile Slide to Get Started) */}
        <Hero onOpenEnrollModal={() => handleOpenEnroll('Comprehensive Dispatch')} />

        {/* 2. Feature Callout (Badge highlight [Solve] and narrative) */}
        <FeatureCallout onOpenEnrollModal={() => handleOpenEnroll('Curriculum Deep Dive')} />

        {/* 3. Experience Metrics (Desktop: 13+ stat & 3/4 truck rear | Mobile: "Out For Delivery" Transit Card) */}
        <ExperienceMetrics onOpenEnrollModal={() => handleOpenEnroll('Industry Placement')} />

        {/* 4. Multi-Shape Geometric Photo Gallery (4 signature cutout frames, outline TRAINING text) */}
        <GeometricGallery onOpenEnrollModal={(topic) => handleOpenEnroll(topic)} />

        {/* 5. Interactive Courses Accordion with 3D Vehicle Hover reveals */}
        <CoursesAccordion onOpenEnrollModal={(course) => handleOpenEnroll(course)} />

        {/* 6. Admissions Hotline & Caller ID Section (Profile Card, Dark GPS Route Map, Make a Call Slider) */}
        <MobileCallerIdSection onOpenConsultation={() => openDialer('+917888825122')} />

        {/* 7. Testimonials & Student Feedback Carousel with Tilted Badge */}
        <Testimonials />

        {/* 8. Spotlight CTA with 3D Yellow Container and Tilted Badge button */}
        <SpotlightCTA onOpenEnrollModal={() => handleOpenEnroll('Spotlight Certification')} />

        {/* 9. Full-Width Interactive Contact & Syllabus Action Banners */}
        <ContactBanners
          onOpenContactModal={handleOpenContact}
          onOpenSyllabusModal={handleOpenSyllabus}
        />
      </main>

      {/* 10. Simple, Practical & Elegant Footer */}
      <Footer
        onOpenEnrollModal={handleOpenEnroll}
        onOpenContactModal={handleOpenContact}
        onNavigate={(route) => navigateTo(route)}
      />

      {/* Lead Capture / Cohort Enrollment Modal */}
      <EnrollModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultCourse={selectedCourse}
        isSyllabusMode={isSyllabusMode}
      />

      {/* Persistent Floating iOS Bottom Navigation Dock on Mobile Viewports */}
      <MobileBottomDock
        onOpenEnrollModal={() => handleOpenEnroll('Admissions Consultation')}
      />
    </div>
  );
};

export default App;
