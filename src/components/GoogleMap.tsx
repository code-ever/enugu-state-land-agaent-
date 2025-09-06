import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { Property } from '@/data/sampleProperties';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

declare global {
  interface Window {
    google: any;
  }
}

interface GoogleMapProps {
  property: Property;
  className?: string;
}

const GoogleMap = ({ property, className = '' }: GoogleMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  // Use a demo API key for development - replace with proper backend integration
  const apiKey = 'AIzaSyBFw0Qbyq9zTuTlWnVhPjpgLuiCKYZ7abc'; // Demo key
  const [mapLoaded, setMapLoaded] = useState(false);

  const initializeMap = async () => {
    if (!mapRef.current || mapLoaded) return;

    try {
      // For demo purposes, show a static map representation
      // In production, this would connect to your backend API for the Google Maps key
      const mapContainer = mapRef.current;
      mapContainer.innerHTML = `
        <div class="w-full h-full bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-emerald-100 to-blue-100"></div>
          <div class="relative z-10 text-center p-6">
            <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="font-semibold text-lg mb-2">${property.title}</h3>
            <p class="text-sm text-muted-foreground mb-1">${property.location}</p>
            <p class="text-sm font-medium mb-2 px-3 py-1 rounded-full inline-block ${
              property.status === 'available' ? 'bg-emerald-100 text-emerald-800' :
              property.status === 'sold' ? 'bg-red-100 text-red-800' :
              'bg-yellow-100 text-yellow-800'
            }">${property.status.toUpperCase()}</p>
            <p class="text-lg font-bold text-primary">₦${property.price.toLocaleString()}</p>
            <div class="mt-4 text-xs text-muted-foreground">
              <p>Coordinates: ${property.coordinates.lat.toFixed(4)}, ${property.coordinates.lng.toFixed(4)}</p>
              <p class="mt-2">Interactive map will be available with backend integration</p>
            </div>
          </div>
        </div>
      `;
      setMapLoaded(true);

    } catch (error) {
      console.error('Error loading map:', error);
      // Fallback to static representation
      mapRef.current.innerHTML = `
        <div class="w-full h-full bg-muted rounded-lg flex items-center justify-center">
          <div class="text-center p-4">
            <p class="text-muted-foreground mb-2">Map unavailable</p>
            <p class="text-sm">Location: ${property.location}</p>
          </div>
        </div>
      `;
    }
  };

  useEffect(() => {
    initializeMap();
  }, [property]);

  return (
    <div className={`relative ${className}`}>
      <div ref={mapRef} className="w-full h-full rounded-lg" />
    </div>
  );
};

export default GoogleMap;