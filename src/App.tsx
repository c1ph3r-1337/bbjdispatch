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
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
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
      let maxRatio = 0;
      let mostVisibleId = '';

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          mostVisibleId = entry.target.id;
        }
      });

      if (mostVisibleId) {
        setActiveSection(mostVisibleId);
      }
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [currentRoute]);

  // True Section-by-Section Presentation Controller (Wheel, Touch, Keyboard)
  useEffect(() => {
    if (currentRoute !== 'home' || modalOpen) return;

    const isAnimatingRef = { current: false };
    const lastScrollTimeRef = { current: 0 };
    const touchStartYRef = { current: 0 };
    const touchStartTimeRef = { current: 0 };

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

    const triggerSectionTransition = (targetIndex: number) => {
      if (targetIndex < 0 || targetIndex >= SECTIONS.length) return;
      isAnimatingRef.current = true;
      lastScrollTimeRef.current = Date.now();
      setActiveSection(SECTIONS[targetIndex].id);
      scrollToSection(SECTIONS[targetIndex].id);

      // Inertial decay lockout: 850ms absorbs the decaying trackpad momentum tail
      window.setTimeout(() => {
        isAnimatingRef.current = false;
      }, 850);
    };

    // 1. Wheel & Trackpad Interceptor
    const handleWheel = (e: WheelEvent) => {
      if (modalOpen) return;
      
      // Stop native free-scroll
      e.preventDefault();

      const now = Date.now();
      if (isAnimatingRef.current || now - lastScrollTimeRef.current < 850) {
        return;
      }

      // Normalize delta across mice lines and trackpad pixels
      const delta = e.deltaMode === 1 ? e.deltaY * 35 : e.deltaY;
      if (Math.abs(delta) < 30) return; // Disregard micro-drift

      const currentIndex = getClosestSectionIndex();

      if (delta > 0 && currentIndex < SECTIONS.length - 1) {
        triggerSectionTransition(currentIndex + 1);
      } else if (delta < 0 && currentIndex > 0) {
        triggerSectionTransition(currentIndex - 1);
      }
    };

    // 2. Touch Swipe Controller (Mobile & Tablets)
    const handleTouchStart = (e: TouchEvent) => {
      if (modalOpen) return;
      touchStartYRef.current = e.touches[0].clientY;
      touchStartTimeRef.current = Date.now();
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (modalOpen || isAnimatingRef.current) return;
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartYRef.current - touchEndY;
      const duration = Date.now() - touchStartTimeRef.current;

      // Detect deliberate swipe (minimum 50px delta within 600ms)
      if (Math.abs(deltaY) > 50 && duration < 600) {
        const currentIndex = getClosestSectionIndex();
        if (deltaY > 0 && currentIndex < SECTIONS.length - 1) {
          triggerSectionTransition(currentIndex + 1);
        } else if (deltaY < 0 && currentIndex > 0) {
          triggerSectionTransition(currentIndex - 1);
        }
      }
    };

    // 3. Keyboard Controller
    const handleKeyDown = (e: KeyboardEvent) => {
      if (modalOpen) return;
      const target = e.target as HTMLElement;
      if (target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) return;

      const currentIndex = getClosestSectionIndex();

      if (['ArrowDown', 'PageDown'].includes(e.key)) {
        if (currentIndex < SECTIONS.length - 1) {
          e.preventDefault();
          triggerSectionTransition(currentIndex + 1);
        }
      } else if (['ArrowUp', 'PageUp'].includes(e.key)) {
        if (currentIndex > 0) {
          e.preventDefault();
          triggerSectionTransition(currentIndex - 1);
        }
      } else if (e.key === 'Home') {
        e.preventDefault();
        triggerSectionTransition(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        triggerSectionTransition(SECTIONS.length - 1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
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
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenEnrollModal={() => handleOpenEnroll('Admissions Consultation')}
      />
    </div>
  );
};

export default App;
