import { useState, useCallback } from 'react';

export interface PanchangaLocation {
  lat: number;
  lng: number;
  name: string;
}

const STORAGE_KEY = 'sadhana-panchanga-location';

const DEFAULT_LOCATION: PanchangaLocation = {
  lat: 12.9716,
  lng: 77.5946,
  name: 'Bengaluru',
};

export const PRESET_LOCATIONS: PanchangaLocation[] = [
  { lat: 12.9716, lng: 77.5946, name: 'Bengaluru' },
  { lat: 28.6139, lng: 77.2090, name: 'Delhi' },
  { lat: 19.0760, lng: 72.8777, name: 'Mumbai' },
  { lat: 13.0827, lng: 80.2707, name: 'Chennai' },
  { lat: 22.5726, lng: 88.3639, name: 'Kolkata' },
  { lat: 17.3850, lng: 78.4867, name: 'Hyderabad' },
  { lat: 25.3176, lng: 82.9739, name: 'Varanasi' },
  { lat: 18.5204, lng: 73.8567, name: 'Pune' },
  { lat: 26.9124, lng: 75.7873, name: 'Jaipur' },
  { lat: 9.9312, lng: 76.2673, name: 'Kochi' },
];

function loadLocation(): PanchangaLocation {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {
    // ignore
  }
  return DEFAULT_LOCATION;
}

export function useLocation() {
  const [location, setLocationState] = useState<PanchangaLocation>(loadLocation);

  const setLocation = useCallback((loc: PanchangaLocation) => {
    setLocationState(loc);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(loc));
  }, []);

  const requestBrowserLocation = useCallback((): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation not supported'));
        return;
      }
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          const nearest = PRESET_LOCATIONS.reduce((best, preset) => {
            const d = Math.hypot(preset.lat - latitude, preset.lng - longitude);
            const bestD = Math.hypot(best.lat - latitude, best.lng - longitude);
            return d < bestD ? preset : best;
          });
          const dist = Math.hypot(nearest.lat - latitude, nearest.lng - longitude);
          const loc: PanchangaLocation = dist < 1.0
            ? nearest
            : { lat: latitude, lng: longitude, name: 'My Location' };
          setLocation(loc);
          resolve();
        },
        (err) => reject(err),
        { timeout: 10000 },
      );
    });
  }, [setLocation]);

  const isDefault = location.lat === DEFAULT_LOCATION.lat && location.lng === DEFAULT_LOCATION.lng;

  return { location, setLocation, requestBrowserLocation, presets: PRESET_LOCATIONS, isDefault };
}
