import React from 'react';
import { Settings, Bell, Clock, ChevronRight } from 'lucide-react';

interface MobileDashboardCardProps {
  onSelectLoad: () => void;
}

export const MobileDashboardCard: React.FC<MobileDashboardCardProps> = ({ onSelectLoad }) => {
  return (
    <div className="w-full flex flex-col justify-between h-full text-white px-5 pb-3 select-none">
      {/* Top Bar: Avatar & Notifications */}
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center gap-2">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
            alt="Student Avatar"
            className="w-10 h-10 rounded-full object-cover border border-white/20"
          />
          <div>
            <p className="text-[10px] text-dispatch-muted uppercase font-mono">
              Student Dispatcher
            </p>
            <p className="text-xs font-bold text-white">Alex Morgan</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="w-8 h-8 rounded-full bg-[#131d28] border border-white/10 flex items-center justify-center text-white/70 hover:text-white">
            <Settings className="w-4 h-4" />
          </button>
          <button className="relative w-8 h-8 rounded-full bg-[#131d28] border border-white/10 flex items-center justify-center text-white/70 hover:text-white">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-dispatch-yellow"></span>
          </button>
        </div>
      </div>

      {/* Headline */}
      <div className="my-2">
        <h2 className="text-2xl font-extrabold tracking-tight text-white leading-tight">
          A Day In Dispatch <br />
          <span className="text-dispatch-yellow">Live Operations</span>
        </h2>
      </div>

      {/* Main Card: Out For Delivery */}
      <div
        onClick={onSelectLoad}
        className="cursor-pointer bg-[#111923] border border-white/10 hover:border-dispatch-yellow/40 rounded-2xl p-4 my-2 transition-all duration-200 shadow-xl"
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-extrabold text-white tracking-wide">
            11:00 AM • Broker Booking
          </span>
          <span className="text-[10px] bg-dispatch-yellow/15 text-dispatch-yellow px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
            Rate Fixed
          </span>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
              alt="Harry Dhillon"
              className="w-7 h-7 rounded-full object-cover"
            />
            <div>
              <p className="text-xs font-bold text-white leading-none">Harry Dhillon</p>
              <p className="text-[10px] text-dispatch-muted">Senior Trainer</p>
            </div>
          </div>

          <div className="text-right">
            <div className="flex items-center gap-1 text-dispatch-yellow text-xs font-bold justify-end">
              <Clock className="w-3 h-3" />
              <span>$3.20 / mi</span>
            </div>
            <p className="text-[10px] text-dispatch-muted font-mono">
              Booked Rate
            </p>
          </div>
        </div>

        {/* 3D Truck Graphic inside the card */}
        <div className="relative w-full h-24 bg-[#091017] rounded-xl flex items-center justify-center overflow-hidden border border-white/5 my-2">
          {/* Subtle Road dashes */}
          <div className="absolute bottom-3 inset-x-0 h-0.5 border-b border-dashed border-white/20"></div>
          <img
            src="./assets/truck-side.svg"
            alt="3D Delivery Truck"
            className="w-44 h-auto object-contain drop-shadow-md transform hover:scale-105 transition-transform"
          />
        </div>

        <div className="flex items-center justify-between text-[11px] text-dispatch-muted pt-1">
          <span>Lane: Chicago → Dallas (53' Dry Van)</span>
          <ChevronRight className="w-3.5 h-3.5 text-dispatch-yellow" />
        </div>
      </div>

      {/* Secondary Card: On The Way */}
      <div
        onClick={onSelectLoad}
        className="cursor-pointer bg-[#0e1620] border border-white/5 hover:border-white/20 rounded-xl p-3 my-1 flex items-center justify-between text-xs"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-semibold text-white">Live DAT Load Board Practice</span>
        </div>
        <span className="text-[10px] bg-white/5 text-dispatch-muted px-2 py-0.5 rounded-full font-mono">
          Mock Call Active
        </span>
      </div>
    </div>
  );
};
