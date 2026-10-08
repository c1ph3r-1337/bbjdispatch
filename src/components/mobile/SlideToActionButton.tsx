import React, { useRef, useEffect, useCallback } from 'react';
import { ChevronRight } from 'lucide-react';

interface SlideToActionButtonProps {
  label: string;
  icon: React.ReactNode;
  onComplete: () => void;
  showBackArrow?: boolean;
  onBack?: () => void;
}

export const SlideToActionButton: React.FC<SlideToActionButtonProps> = ({
  label,
  icon,
  onComplete,
  showBackArrow = true,
  onBack,
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const knobRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const arrowsRef = useRef<HTMLDivElement>(null);

  // Drag physics state held in refs for 120fps hardware acceleration without React re-renders
  const isDraggingRef = useRef(false);
  const startClientXRef = useRef(0);
  const currentTranslateXRef = useRef(0);
  const startTranslateXRef = useRef(0);
  const maxDistanceRef = useRef(240);
  const hasCompletedRef = useRef(false);
  const rafIdRef = useRef<number | null>(null);

  // Measure dynamic travel distance (track width - knob 44px - padding 12px)
  const updateTravelDistance = useCallback(() => {
    if (trackRef.current) {
      const travel = trackRef.current.clientWidth - 56;
      if (travel > 0) {
        maxDistanceRef.current = travel;
      }
    }
  }, []);

  useEffect(() => {
    updateTravelDistance();
    window.addEventListener('resize', updateTravelDistance);
    return () => window.removeEventListener('resize', updateTravelDistance);
  }, [updateTravelDistance]);

  // Apply visual styles directly to DOM elements with GPU compositing
  const applyTransform = useCallback((x: number, animate: boolean = false) => {
    const max = maxDistanceRef.current;
    const progress = Math.max(0, Math.min(1, x / max));

    const transitionValue = animate
      ? 'transform 0.28s cubic-bezier(0.16, 1, 0.3, 1)'
      : 'none';
    const opacityTransition = animate
      ? 'opacity 0.2s ease-out'
      : 'none';

    if (knobRef.current) {
      knobRef.current.style.transition = transitionValue;
      knobRef.current.style.transform = `translate3d(${x}px, 0, 0)`;
    }

    if (labelRef.current) {
      labelRef.current.style.transition = opacityTransition;
      labelRef.current.style.opacity = `${Math.max(0, 1 - progress * 1.8)}`;
    }

    if (arrowsRef.current) {
      arrowsRef.current.style.transition = opacityTransition;
      arrowsRef.current.style.opacity = `${Math.max(0, 1 - progress * 2.2)}`;
    }
  }, []);

  const triggerCompletion = useCallback(() => {
    if (hasCompletedRef.current) return;
    hasCompletedRef.current = true;
    isDraggingRef.current = false;

    // Glide smoothly to 100% end
    applyTransform(maxDistanceRef.current, true);

    try {
      onComplete();
    } catch (err) {
      console.error('Slider action error:', err);
    }

    // Reset after action
    setTimeout(() => {
      applyTransform(0, true);
      currentTranslateXRef.current = 0;
      hasCompletedRef.current = false;
    }, 800);
  }, [applyTransform, onComplete]);

  // Start dragging on knob or track
  const handlePointerDown = (e: React.PointerEvent) => {
    if (hasCompletedRef.current) return;
    updateTravelDistance();
    isDraggingRef.current = true;
    startClientXRef.current = e.clientX;
    startTranslateXRef.current = currentTranslateXRef.current;

    // Remove any animations while actively dragging
    if (knobRef.current) knobRef.current.style.transition = 'none';
    if (labelRef.current) labelRef.current.style.transition = 'none';
    if (arrowsRef.current) arrowsRef.current.style.transition = 'none';

    // Capture pointer if available
    try {
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    } catch {
      // Fallback if not supported
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current || hasCompletedRef.current) return;

    const deltaX = e.clientX - startClientXRef.current;
    const max = maxDistanceRef.current;
    const newX = Math.max(0, Math.min(max, startTranslateXRef.current + deltaX));
    currentTranslateXRef.current = newX;

    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
    }

    rafIdRef.current = requestAnimationFrame(() => {
      applyTransform(newX, false);

      // Instant trigger if dragged to 90%+
      if (newX / max >= 0.90) {
        triggerCompletion();
      }
    });
  };

  const handlePointerUp = () => {
    if (!isDraggingRef.current || hasCompletedRef.current) return;
    isDraggingRef.current = false;

    const max = maxDistanceRef.current;
    const progress = currentTranslateXRef.current / max;

    if (progress >= 0.70) {
      triggerCompletion();
    } else {
      // Snap back smoothly
      currentTranslateXRef.current = 0;
      applyTransform(0, true);
    }
  };

  // Click track to auto-slide to completion
  const handleTrackClick = (e: React.MouseEvent) => {
    if (isDraggingRef.current || hasCompletedRef.current) return;
    // If user clicked the knob itself, don't trigger click
    if (knobRef.current && knobRef.current.contains(e.target as Node)) return;
    updateTravelDistance();
    triggerCompletion();
  };

  return (
    <div className="w-full flex items-center gap-2 select-none touch-none">
      {/* Optional Back Arrow */}
      {showBackArrow && (
        <button
          onClick={onBack}
          className="w-12 h-12 rounded-full bg-[#131d28] border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors flex-shrink-0"
          aria-label="Previous screen"
        >
          <span className="text-sm font-bold">‹</span>
        </button>
      )}

      {/* Slide Track */}
      <div
        ref={trackRef}
        onClick={handleTrackClick}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="relative flex-1 h-14 bg-[#131d28]/90 border border-white/10 rounded-full p-1.5 flex items-center overflow-hidden cursor-pointer backdrop-blur-md shadow-lg touch-none"
      >
        {/* Center Label (Smoothly fades out as knob slides across) */}
        <div
          ref={labelRef}
          className="absolute inset-0 flex items-center justify-center px-12 pointer-events-none will-change-[opacity]"
        >
          <span className="text-xs sm:text-sm font-bold tracking-wide text-white/90">
            {label}
          </span>
        </div>

        {/* Right Arrows >>> (Fade out as knob approaches the end) */}
        <div
          ref={arrowsRef}
          className="absolute right-3.5 flex items-center text-white/40 pointer-events-none will-change-[opacity]"
        >
          <ChevronRight className="w-4 h-4 -mr-2 animate-pulse text-dispatch-yellow/80" />
          <ChevronRight className="w-4 h-4 -mr-2 animate-pulse delay-100 text-dispatch-yellow/60" />
          <ChevronRight className="w-4 h-4 animate-pulse delay-200 text-dispatch-yellow/40" />
        </div>

        {/* Draggable Knob */}
        <div
          ref={knobRef}
          className="relative z-10 w-11 h-11 rounded-full bg-dispatch-yellow hover:bg-dispatch-yellowLight text-dispatch-bg flex items-center justify-center shadow-md shadow-dispatch-yellow/30 cursor-grab active:cursor-grabbing flex-shrink-0 touch-none will-change-transform"
          style={{
            transform: 'translate3d(0, 0, 0)',
          }}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};
