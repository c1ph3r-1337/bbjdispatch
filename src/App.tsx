import React, { useState, useEffect } from 'react';
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
