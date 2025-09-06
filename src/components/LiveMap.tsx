import React, { useEffect, useRef, useState } from 'react';
import { Property } from '@/data/sampleProperties';
import { Button } from '@/components/ui/button';
import { MapPin, Satellite, Map as MapIcon, Navigation } from 'lucide-react';

// Type declarations for Google Maps
declare global {
  interface Window {
    google: any;
  }
  const google: any;
}

interface LiveMapProps {
  properties: Property[];
  className?: string;
  height?: string;
}

const LiveMap = ({ properties, className = '', height = '500px' }: LiveMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const [mapType, setMapType] = useState<'roadmap' | 'satellite'>('roadmap');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Enugu coordinates
  const enuguCenter = { lat: 6.4481, lng: 7.4948 };

  const initMap = async () => {
    try {
      setIsLoading(true);
      setError(null);

      if (!mapRef.current) return;

      // Initialize Google Maps
      const { Map } = await (window as any).google.maps.importLibrary("maps");
      const { AdvancedMarkerElement } = await (window as any).google.maps.importLibrary("marker");

      // Create map
      const map = new Map(mapRef.current, {
        zoom: 12,
        center: enuguCenter,
        mapId: "ENUGU_MAP_ID",
        mapTypeId: mapType,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: true,
        rotateControl: true,
        fullscreenControl: true,
        gestureHandling: 'cooperative',
        styles: [
          {
            featureType: "all",
            stylers: [
              { brightness: 0.1 },
              { saturation: 10 }
            ]
          }
        ]
      });

      mapInstanceRef.current = map;

      // Clear existing markers
      markersRef.current.forEach(marker => {
        if (marker.setMap) marker.setMap(null);
      });
      markersRef.current = [];

      // Add property markers
      properties.forEach((property) => {
        const markerDiv = document.createElement('div');
        markerDiv.className = 'relative';
        
        const statusColor = property.status === 'available' ? '#22c55e' : 
                           property.status === 'pending' ? '#f59e0b' : '#ef4444';
        
        markerDiv.innerHTML = `
          <div class="relative group cursor-pointer">
            <div class="w-6 h-6 rounded-full border-3 border-white shadow-lg transition-transform hover:scale-110" 
                 style="background-color: ${statusColor}"></div>
            <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white rounded-lg p-3 shadow-lg min-w-64 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
              <div class="text-sm font-semibold text-gray-900 mb-1">${property.title}</div>
              <div class="text-xs text-gray-600 mb-1">${property.location}</div>
              <div class="text-sm font-bold text-green-600 mb-1">₦${property.price.toLocaleString()}</div>
              <div class="text-xs text-gray-500 mb-2">${property.size} • ${property.type}</div>
              <div class="flex items-center gap-1">
                <span class="px-2 py-1 rounded text-white text-xs capitalize" style="background-color: ${statusColor}">
                  ${property.status}
                </span>
              </div>
            </div>
          </div>
        `;

        const marker = new AdvancedMarkerElement({
          map: map,
          position: { lat: property.coordinates.lat, lng: property.coordinates.lng },
          content: markerDiv,
          title: property.title,
        });

        markersRef.current.push(marker);

        // Add click listener
        marker.addListener('click', () => {
          map.setCenter({ lat: property.coordinates.lat, lng: property.coordinates.lng });
          map.setZoom(15);
        });
      });

      // Add city center marker
      const cityMarkerDiv = document.createElement('div');
      cityMarkerDiv.innerHTML = `
        <div class="relative">
          <div class="w-8 h-8 bg-blue-600 rounded-full border-3 border-white shadow-lg flex items-center justify-center">
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <div class="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-white rounded-lg p-2 shadow-lg min-w-max">
            <div class="text-sm font-semibold">Enugu City Center</div>
            <div class="text-xs text-gray-600">Coal City State</div>
          </div>
        </div>
      `;

      const cityMarker = new AdvancedMarkerElement({
        map: map,
        position: enuguCenter,
        content: cityMarkerDiv,
        title: "Enugu City Center",
      });

      markersRef.current.push(cityMarker);
      setIsLoading(false);

    } catch (err) {
      console.error('Error initializing Google Maps:', err);
      
      // Fallback to custom map if Google Maps fails
      if (mapRef.current) {
        mapRef.current.innerHTML = `
          <div class="w-full h-full bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg overflow-hidden relative flex items-center justify-center">
            <div class="absolute inset-0 bg-gradient-to-br from-green-100/50 to-emerald-100/50"></div>
            
            <!-- Enugu State Outline -->
            <div class="absolute inset-4 border-2 border-green-600/30 rounded-lg">
              <div class="w-full h-full relative">
                <!-- Property markers -->
                ${properties.slice(0, 12).map((property, index) => {
                  const x = 15 + (index % 4) * 22;
                  const y = 10 + Math.floor(index / 4) * 25;
                  const statusColor = property.status === 'available' ? '#22c55e' : 
                                    property.status === 'pending' ? '#f59e0b' : '#ef4444';
                  
                  return `
                    <div class="absolute cursor-pointer hover:scale-110 transition-transform group" 
                         style="left: ${x}%; top: ${y}%;">
                      <div class="w-4 h-4 rounded-full border-2 border-white shadow-lg" 
                           style="background-color: ${statusColor}"></div>
                      <div class="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg min-w-max opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                        <div class="text-sm font-semibold">${property.title}</div>
                        <div class="text-xs text-gray-600">${property.location}</div>
                        <div class="text-xs font-medium text-green-600">₦${property.price.toLocaleString()}</div>
                        <div class="text-xs text-gray-500">${property.size}</div>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
            
            <!-- Map Info -->
            <div class="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg z-10">
              <h3 class="font-semibold text-lg flex items-center gap-2">
                <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Enugu State, Nigeria
              </h3>
              <p class="text-sm text-gray-600">Live Property Map</p>
              <div class="mt-2 text-xs text-gray-500">
                ${properties.length} Properties Available
              </div>
            </div>
            
            <!-- Legend -->
            <div class="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
              <div class="text-sm font-semibold mb-2">Property Status</div>
              <div class="space-y-1">
                <div class="flex items-center gap-2 text-xs">
                  <div class="w-3 h-3 rounded-full bg-green-500"></div>
                  <span>Available</span>
                </div>
                <div class="flex items-center gap-2 text-xs">
                  <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <span>Pending</span>
                </div>
                <div class="flex items-center gap-2 text-xs">
                  <div class="w-3 h-3 rounded-full bg-red-500"></div>
                  <span>Sold</span>
                </div>
              </div>
            </div>
            
            <!-- Map Notice -->
            <div class="absolute bottom-4 left-4 bg-emerald-100 border border-emerald-300 text-emerald-800 px-3 py-2 rounded-lg text-sm">
              <div class="flex items-center gap-2">
                <MapPin class="w-4 h-4" />
                <span>Interactive Property Map - Enugu State</span>
              </div>
            </div>
          </div>
        `;
      }
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Try to load Google Maps, fallback to custom map if it fails
    if (typeof (window as any).google !== 'undefined' && (window as any).google.maps) {
      initMap();
    } else {
      // Load Google Maps script
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBk7sJc_mG3-_3gK5oP1h4VH9_d2E2z9aY&libraries=maps,marker&v=beta`;
      script.async = true;
      script.onload = initMap;
      script.onerror = () => {
        console.warn('Google Maps failed to load, using fallback map');
        initMap();
      };
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup markers on unmount
      markersRef.current.forEach(marker => {
        if (marker.setMap) marker.setMap(null);
      });
      markersRef.current = [];
    };
  }, [properties]);

  useEffect(() => {
    if (mapInstanceRef.current && typeof (window as any).google !== 'undefined') {
      mapInstanceRef.current.setMapTypeId(mapType);
    }
  }, [mapType]);

  const toggleMapType = () => {
    const newType = mapType === 'roadmap' ? 'satellite' : 'roadmap';
    setMapType(newType);
  };

  const centerOnEnugu = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.setCenter(enuguCenter);
      mapInstanceRef.current.setZoom(12);
    }
  };

  if (isLoading) {
    return (
      <div className={`${className} flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg`} style={{ height }}>
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-4 border-green-600 border-t-transparent rounded-full mx-auto mb-2"></div>
          <p className="text-sm text-green-700">Loading Live Enugu Map...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <div ref={mapRef} className="w-full rounded-lg border border-green-200 shadow-lg" style={{ height }} />
      
      {/* Map Controls */}
      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden z-10">
        <Button
          variant={mapType === 'roadmap' ? 'default' : 'ghost'}
          size="sm"
          onClick={toggleMapType}
          className="rounded-none"
        >
          <MapIcon className="h-4 w-4" />
        </Button>
        <Button
          variant={mapType === 'satellite' ? 'default' : 'ghost'}
          size="sm"
          onClick={toggleMapType}
          className="rounded-none"
        >
          <Satellite className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={centerOnEnugu}
          className="rounded-none"
        >
          <Navigation className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default LiveMap;