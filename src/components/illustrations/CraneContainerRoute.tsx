import React, { useState, useEffect, useMemo } from 'react';

interface CraneContainerRouteProps {
  originCity?: string;
  className?: string;
}

export const CraneContainerRoute: React.FC<CraneContainerRouteProps> = ({
  originCity = 'Punjab Region',
  className = 'w-full h-auto object-contain select-none transform-gpu',
}) => {
  const [svgContent, setSvgContent] = useState<string>('');

  useEffect(() => {
    let isMounted = true;
    fetch('./assets/crane-lifting-container-route.svg')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch SVG');
        return res.text();
      })
      .then((text) => {
        if (!isMounted) return;
        setSvgContent(text);
      })
      .catch((err) => {
        console.warn('CraneContainerRoute fallback to img:', err);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const processedSvg = useMemo(() => {
    if (!svgContent) return null;
    const cleanCity = originCity && originCity.trim() ? originCity.trim() : 'Punjab Region';
    // Dynamically replace hardcoded "Ludhiana" with visitor's detected city on the container
    return svgContent.replace(
      /(<text[^>]*x="119"[^>]*y="93"[^>]*>)([\s\S]*?)(<\/text>)/,
      `$1${cleanCity}$3`
    );
  }, [svgContent, originCity]);

  if (!processedSvg) {
    return (
      <img
        src="./assets/crane-lifting-container-route.svg"
        alt="Industrial Crane Lifting Container with Freight Route"
        className={className}
      />
    );
  }

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: processedSvg }}
    />
  );
};
