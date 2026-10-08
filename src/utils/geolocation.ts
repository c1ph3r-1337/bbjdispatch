// Geolocation utility to calculate distance and driving duration from BBJ Dispatch Academy campus
// Campus Address: Mallawala Road, Zira, District Ferozepur, Punjab 142047

import { useState, useEffect } from 'react';

export const ACADEMY_LOCATION = {
  name: 'BBJ Dispatch Academy',
  address: 'Mallawala Road, Zira, District Ferozepur, Punjab 142047',
  city: 'Zira',
  district: 'Ferozepur',
  state: 'Punjab',
  pincode: '142047',
  latitude: 30.9768,
  longitude: 74.9877,
};

export const GOOGLE_MAPS_DIRECTIONS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=30.9768,74.9877';

export interface VisitorDistanceInfo {
  city: string;
  region: string;
  country: string;
  distanceKm: number | null;
  roadDistanceKm: number | null;
  drivingTime: string | null;
  recommendation: string;
  laneBadge: string;
  isNearby: boolean;
  isInternational: boolean;
  googleMapsUrl: string;
  isLoading: boolean;
}

/**
 * Calculates Great-Circle spherical distance using Haversine algorithm
 */
export function calculateDistanceKm(
  lat1: number,
  lon1: number,
  lat2: number = ACADEMY_LOCATION.latitude,
  lon2: number = ACADEMY_LOCATION.longitude
): number {
  const R = 6371; // Earth's mean radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c);
}

/**
 * Calculates realistic road driving duration and road distance across Indian / Punjab highway network
 */
export function calculateDrivingTime(
  distanceKm: number,
  isInternational: boolean = false
): {
  durationText: string;
  roadKm: number;
} {
  if (isInternational) {
    return { durationText: 'Flight / Online Live', roadKm: distanceKm };
  }

  // Realistic road factor: road network distance averages ~1.22x straight-line distance
  const roadKm = Math.round(distanceKm * 1.22);

  // Average transit speed: ~52 km/h accounting for town transit and state highway cruising
  const totalMinutes = Math.round((roadKm / 52) * 60);

  if (totalMinutes < 60) {
    const mins = Math.max(10, Math.round(totalMinutes / 5) * 5);
    return { durationText: `${mins} mins drive`, roadKm };
  }

  const hours = Math.floor(totalMinutes / 60);
  const minutes = Math.round((totalMinutes % 60) / 5) * 5;

  const durationText =
    minutes === 0 ? `${hours} hr drive` : `${hours}h ${minutes}m drive`;

  return { durationText, roadKm };
}

const CACHE_KEY = 'bbj_visitor_geo_v3';

// Module-level in-memory cache to guarantee zero redundant network calls
let cachedVisitorInfo: VisitorDistanceInfo | null = null;
let activeFetchPromise: Promise<VisitorDistanceInfo> | null = null;

/**
 * Silent IP-based location resolution with singleton promise and multi-storage persistence
 */
export async function fetchVisitorDistance(): Promise<VisitorDistanceInfo> {
  // 1. In-memory cache hit
  if (cachedVisitorInfo) {
    return cachedVisitorInfo;
  }

  // 2. Browser storage cache hit (check localStorage and sessionStorage)
  if (typeof window !== 'undefined') {
    try {
      const stored =
        localStorage.getItem(CACHE_KEY) || sessionStorage.getItem(CACHE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && typeof parsed.distanceKm !== 'undefined') {
          const data: VisitorDistanceInfo = { ...parsed, isLoading: false };
          cachedVisitorInfo = data;
          return data;
        }
      }
    } catch {
      // Ignore storage errors
    }
  }

  // 3. Return active in-flight request if already in progress
  if (activeFetchPromise) {
    return activeFetchPromise;
  }

  activeFetchPromise = (async () => {
    let lat: number | null = null;
    let lon: number | null = null;
    let city = 'Punjab Region';
    let region = 'Punjab';
    let country = 'India';

    // Provider 1: ipapi.co (Fast 1500ms timeout)
    try {
      const res = await fetch('https://ipapi.co/json/', {
        headers: { Accept: 'application/json' },
        signal: AbortSignal.timeout(1500),
      });
      if (res.ok) {
        const data = await res.json();
        if (typeof data.latitude === 'number' && typeof data.longitude === 'number') {
          lat = data.latitude;
          lon = data.longitude;
          city = data.city || city;
          region = data.region || region;
          country = data.country_name || country;
        }
      }
    } catch {
      // Fallback
    }

    // Provider 2 Fallback: ipwho.is (Fast 1500ms timeout)
    if (lat === null || lon === null) {
      try {
        const res = await fetch('https://ipwho.is/', {
          signal: AbortSignal.timeout(1500),
        });
        if (res.ok) {
          const data = await res.json();
          if (
            data.success &&
            typeof data.latitude === 'number' &&
            typeof data.longitude === 'number'
          ) {
            lat = data.latitude;
            lon = data.longitude;
            city = data.city || city;
            region = data.region || region;
            country = data.country || country;
          }
        }
      } catch {
        // Both providers failed
      }
    }

    // Default to Zira coordinates if location could not be determined
    const distanceKm =
      lat !== null && lon !== null ? calculateDistanceKm(lat, lon) : 85;
    const isInternational = country.toLowerCase() !== 'india';
    const isNearby = distanceKm <= 85;

    const driveInfo = calculateDrivingTime(distanceKm, isInternational);
    const roadDistanceKm = driveInfo.roadKm;
    const drivingTime = driveInfo.durationText;

    let recommendation = 'Online & Offline Batches Available';
    let laneBadge = `${city} → Zira Campus`;

    if (isNearby) {
      recommendation = `${roadDistanceKm} km road route • ${drivingTime} • Offline Campus Classes`;
      laneBadge = `${city} (${drivingTime}) → Zira, PB`;
    } else if (!isInternational) {
      recommendation = `${roadDistanceKm} km road route • ${drivingTime} • Live Online Interactive Batch`;
      laneBadge = `${city} (${drivingTime}) → Zira, PB`;
    } else {
      recommendation = `${city}, ${country} • US-Timezone Live Evening Batch`;
      laneBadge = `${city}, ${country} → Zira, PB`;
    }

    const result: VisitorDistanceInfo = {
      city,
      region,
      country,
      distanceKm,
      roadDistanceKm,
      drivingTime,
      recommendation,
      laneBadge,
      isNearby,
      isInternational,
      googleMapsUrl: GOOGLE_MAPS_DIRECTIONS_URL,
      isLoading: false,
    };

    cachedVisitorInfo = result;

    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(CACHE_KEY, JSON.stringify(result));
        sessionStorage.setItem(CACHE_KEY, JSON.stringify(result));
      } catch {
        // Ignore storage errors
      }
    }

    activeFetchPromise = null;
    return result;
  })();

  return activeFetchPromise;
}

/**
 * React hook for live visitor distance and travel time calculation
 */
export function useVisitorDistance(): VisitorDistanceInfo {
  const [distanceInfo, setDistanceInfo] = useState<VisitorDistanceInfo>(() => {
    // If cached, initialize synchronously to eliminate any layout shift
    if (cachedVisitorInfo) {
      return cachedVisitorInfo;
    }
    if (typeof window !== 'undefined') {
      try {
        const stored =
          localStorage.getItem(CACHE_KEY) || sessionStorage.getItem(CACHE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed && typeof parsed.distanceKm !== 'undefined') {
            const data: VisitorDistanceInfo = { ...parsed, isLoading: false };
            cachedVisitorInfo = data;
            return data;
          }
        }
      } catch {
        // Ignore
      }
    }
    return {
      city: 'Punjab Region',
      region: 'Punjab',
      country: 'India',
      distanceKm: 85,
      roadDistanceKm: 104,
      drivingTime: '1h 55m drive',
      recommendation: '104 km road route • 1h 55m drive • Offline & Online Batches',
      laneBadge: 'Punjab Region → Zira, PB',
      isNearby: true,
      isInternational: false,
      googleMapsUrl: GOOGLE_MAPS_DIRECTIONS_URL,
      isLoading: false,
    };
  });

  useEffect(() => {
    let isMounted = true;
    fetchVisitorDistance()
      .then((info) => {
        if (isMounted) {
          setDistanceInfo(info);
        }
      })
      .catch(() => {
        // Keep current state
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return distanceInfo;
}
