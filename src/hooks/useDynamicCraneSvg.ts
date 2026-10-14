import { useState, useEffect } from 'react';
import craneSvgRaw from '../assets/crane-lifting-container-route.svg?raw';

/**
 * Replaces the origin city on the yellow container route graphic with the visitor's detected city.
 * Origin label is at x="119" y="93", leading into the highway polyline terminating at Zira Campus.
 */
export function getDynamicCraneSvg(svgRaw: string, originCity: string): string {
  const cleanCity = originCity && originCity.trim() ? originCity.trim() : 'Punjab Region';
  
  // Dynamically scale font size if city name is long so it fits neatly above the origin waypoint
  const fontSize = cleanCity.length > 15 ? '2.2' : cleanCity.length > 10 ? '2.6' : '3.2';
  
  // XML Escape special characters to preserve well-formed SVG structure
  const escapedCity = cleanCity
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

  // Match the Origin Label text node and replace font-size and inner text
  return svgRaw.replace(
    /(<text[^>]*x="119"[^>]*y="93"[\s\S]*?font-size=")[^"]*("[\s\S]*?>)[\s\S]*?(<\/text>)/,
    `$1${fontSize}$2${escapedCity}$3`
  );
}

/**
 * React hook that returns an in-memory Object (Blob) URL for the crane graphic.
 * By using an Object URL directly on a standard <img> tag, we guarantee:
 * 1. 100% identical styling, bounding box, and aspect ratio on both mobile and desktop (zero <div> displacement).
 * 2. Instant synchronous first-frame rendering via Vite ?raw bundling.
 * 3. Preserved GPU pendulum animations inside the SVG.
 */
export function useDynamicCraneSvg(city: string): string {
  const [svgUrl, setSvgUrl] = useState<string>(() => {
    if (typeof window === 'undefined') return './assets/crane-lifting-container-route.svg';
    try {
      const dynamicSvg = getDynamicCraneSvg(craneSvgRaw, city);
      const blob = new Blob([dynamicSvg], { type: 'image/svg+xml' });
      return URL.createObjectURL(blob);
    } catch {
      return './assets/crane-lifting-container-route.svg';
    }
  });

  useEffect(() => {
    let currentUrl = '';
    try {
      const dynamicSvg = getDynamicCraneSvg(craneSvgRaw, city);
      const blob = new Blob([dynamicSvg], { type: 'image/svg+xml' });
      currentUrl = URL.createObjectURL(blob);
      setSvgUrl(currentUrl);
    } catch {
      // Keep existing URL on error
    }

    return () => {
      if (currentUrl && currentUrl.startsWith('blob:')) {
        URL.revokeObjectURL(currentUrl);
      }
    };
  }, [city]);

  return svgUrl;
}
