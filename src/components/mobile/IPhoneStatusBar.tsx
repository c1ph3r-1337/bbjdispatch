import React from 'react';
import { Wifi, Battery } from 'lucide-react';

export const IPhoneStatusBar: React.FC = () => {
  return (
    <div className="w-full px-6 pt-3 pb-2 flex items-center justify-between text-white text-xs select-none">
      {/* Time */}
      <span className="font-semibold tracking-tight text-white/95 text-[13px] pl-1">
        9:09
      </span>

      {/* Dynamic Island */}
      <div className="w-24 h-5 bg-black rounded-full flex items-center justify-end px-2 border border-white/5 shadow-inner">
        <span className="w-2.5 h-2.5 rounded-full bg-[#121c27] border border-white/10"></span>
      </div>

      {/* Icons: Cellular, Wifi, Battery */}
      <div className="flex items-center gap-1.5 pr-1 text-white/90">
        {/* Signal Bars */}
        <div className="flex items-end gap-[1.5px] h-3">
          <span className="w-[2.5px] h-1.5 bg-white rounded-xs"></span>
          <span className="w-[2.5px] h-2 bg-white rounded-xs"></span>
          <span className="w-[2.5px] h-2.5 bg-white rounded-xs"></span>
          <span className="w-[2.5px] h-3 bg-white rounded-xs"></span>
        </div>
        <Wifi className="w-3.5 h-3.5" />
        <Battery className="w-4 h-4 fill-white" />
      </div>
    </div>
  );
};
