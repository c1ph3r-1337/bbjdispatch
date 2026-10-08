import React, { useState } from 'react';
import { IPhoneStatusBar } from './IPhoneStatusBar';
import { IPhoneBottomDock } from './IPhoneBottomDock';
import { CallerIdCard } from './CallerIdCard';
import { MobileDashboardCard } from './MobileDashboardCard';
import { SlideToActionButton } from './SlideToActionButton';
import { Truck, Menu, Sparkles, X } from 'lucide-react';

interface MobileDispatchViewProps {
  onOpenConsultation: () => void;
  isModalMode?: boolean;
  onCloseModal?: () => void;
}

export const MobileDispatchView: React.FC<MobileDispatchViewProps> = ({
  onOpenConsultation,
  isModalMode = false,
  onCloseModal,
}) => {
  const [activeScreen, setActiveScreen] = useState<'welcome' | 'dashboard' | 'caller'>('welcome');

  return (
    <div className="relative w-full max-w-[390px] mx-auto bg-[#081017] border-2 border-white/15 rounded-[48px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.95)] flex flex-col justify-between aspect-[9/19.5] text-white">
      {/* Screen Mode Indicator / Close Button if inside Modal */}
      {isModalMode && (
        <button
          onClick={onCloseModal}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/60 text-white/80 hover:text-white hover:bg-black/80 transition-colors"
          aria-label="Close Mobile Preview"
        >
          <X className="w-4 h-4" />
        </button>
      )}

      {/* 1. iOS Status Bar */}
      <div className="relative z-30 flex-shrink-0">
        <IPhoneStatusBar />
      </div>

      {/* 2. Main Screen Area */}
      <div className="relative z-20 flex-1 flex flex-col justify-between overflow-y-auto no-scrollbar">
        {/* SCREEN 1: WELCOME & SLIDE TO GET STARTED */}
        {activeScreen === 'welcome' && (
          <div className="flex-1 flex flex-col justify-between px-6 pt-2 pb-4 animate-fadeIn">
            {/* Top Bar: Brand Icon & Menu Button */}
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-dispatch-yellow/15 border border-dispatch-yellow flex items-center justify-center text-dispatch-yellow shadow-md">
                <Truck className="w-5 h-5" />
              </div>
              <button
                onClick={() => setActiveScreen('dashboard')}
                className="w-10 h-10 rounded-full bg-[#131d28] border border-white/10 flex items-center justify-center text-white/80 hover:text-white transition-colors"
                aria-label="Menu"
              >
                <Menu className="w-4 h-4" />
              </button>
            </div>

            {/* Subtitle & Headline */}
            <div className="mt-4 space-y-2">
              <p className="text-xs text-dispatch-muted font-normal max-w-xs leading-relaxed">
                Fast, reliable and high-paying freight dispatch solutions at your fingertips.
              </p>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tightest leading-[1.08] text-white">
                Dispatch <span className="text-dispatch-yellow">Solutions</span> <br />
                For Your Career
              </h1>
            </div>

            {/* 3D Yellow Truck Visual */}
            <div className="my-auto py-4 flex flex-col items-center justify-center relative">
              {/* Subtle radar rings in mobile */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <div className="w-56 h-56 rounded-full border border-white/20"></div>
                <div className="w-40 h-40 rounded-full border border-dispatch-yellow/30"></div>
              </div>

              <img
                src="./assets/truck-side.svg"
                alt="BBJ Dispatch 3D Yellow Freight Truck"
                className="relative z-10 w-full h-auto max-w-[310px] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]"
              />
            </div>

            {/* Bottom Slider: Slide to Get Started */}
            <div className="w-full pt-2">
              <SlideToActionButton
                label="Get Started"
                icon={<Truck className="w-5 h-5 text-dispatch-bg fill-dispatch-bg" />}
                onComplete={() => setActiveScreen('caller')}
                showBackArrow={true}
                onBack={() => setActiveScreen('dashboard')}
              />
            </div>
          </div>
        )}

        {/* SCREEN 2: ACTIVE DISPATCH PIPELINE & DASHBOARD */}
        {activeScreen === 'dashboard' && (
          <div className="flex-1 flex flex-col justify-between pt-1 animate-fadeIn">
            <MobileDashboardCard onSelectLoad={() => setActiveScreen('caller')} />
          </div>
        )}

        {/* SCREEN 3: IPHONE CALLER ID & GPS MAP */}
        {activeScreen === 'caller' && (
          <div className="flex-1 flex flex-col justify-between pt-1 animate-fadeIn">
            <CallerIdCard
              onBack={() => setActiveScreen('welcome')}
              onCallInitiated={onOpenConsultation}
            />
          </div>
        )}
      </div>

      {/* 3. Floating iOS Bottom Navigation Dock (Visible on screens 2 & 3 or all) */}
      <div className="relative z-30 flex-shrink-0">
        <IPhoneBottomDock
          activeTab={activeScreen}
          onTabChange={(tab) => setActiveScreen(tab)}
        />
      </div>
    </div>
  );
};
