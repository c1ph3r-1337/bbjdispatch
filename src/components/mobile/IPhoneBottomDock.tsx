import React from 'react';
import { Home, Package, MessageSquare, User } from 'lucide-react';

interface IPhoneBottomDockProps {
  activeTab: 'welcome' | 'dashboard' | 'caller';
  onTabChange: (tab: 'welcome' | 'dashboard' | 'caller') => void;
}

export const IPhoneBottomDock: React.FC<IPhoneBottomDockProps> = ({
  activeTab,
  onTabChange,
}) => {
  return (
    <div className="w-full px-5 pt-1 pb-3 flex flex-col items-center">
      {/* Floating Pill Dock */}
      <div className="w-full max-w-[280px] h-14 bg-[#141d27]/90 backdrop-blur-xl border border-white/10 rounded-full px-3 flex items-center justify-between shadow-2xl shadow-black/80">
        {/* Home Tab */}
        <button
          onClick={() => onTabChange('dashboard')}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
            activeTab === 'dashboard'
              ? 'bg-dispatch-yellow text-dispatch-bg shadow-md shadow-dispatch-yellow/30 scale-105'
              : 'text-white/60 hover:text-white'
          }`}
          aria-label="Dashboard"
        >
          <Home className="w-4 h-4 fill-current" />
        </button>

        {/* Welcome / Get Started Tab */}
        <button
          onClick={() => onTabChange('welcome')}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
            activeTab === 'welcome'
              ? 'bg-dispatch-yellow text-dispatch-bg shadow-md shadow-dispatch-yellow/30 scale-105'
              : 'text-white/60 hover:text-white'
          }`}
          aria-label="Get Started"
        >
          <Package className="w-4 h-4" />
        </button>

        {/* Caller ID / Hotline Tab */}
        <button
          onClick={() => onTabChange('caller')}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
            activeTab === 'caller'
              ? 'bg-dispatch-yellow text-dispatch-bg shadow-md shadow-dispatch-yellow/30 scale-105'
              : 'text-white/60 hover:text-white'
          }`}
          aria-label="Caller ID Hotline"
        >
          <MessageSquare className="w-4 h-4" />
        </button>

        {/* Profile Tab */}
        <button
          onClick={() => onTabChange('caller')}
          className="w-10 h-10 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-all"
          aria-label="Profile"
        >
          <User className="w-4 h-4" />
        </button>
      </div>

      {/* iOS Home Bar Indicator */}
      <div className="w-32 h-1 bg-white/40 rounded-full mt-3"></div>
    </div>
  );
};
