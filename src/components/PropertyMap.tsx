import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Property } from '@/data/sampleProperties';

interface PropertyMapProps {
  property: Property;
  className?: string;
}

const PropertyMap = ({ property, className = '' }: PropertyMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // For demo purposes, we'll show a placeholder until user adds their Mapbox token
    const MAPBOX_TOKEN = 'your-mapbox-token-here';
    
    if (MAPBOX_TOKEN === 'your-mapbox-token-here') {
      // Show placeholder when no token is provided
      return;
    }

    mapboxgl.accessToken = MAPBOX_TOKEN;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [property.coordinates.lng, property.coordinates.lat],
      zoom: 15,
    });

    // Add marker for the property
    const markerColor = property.status === 'available' ? '#22c55e' : 
                       property.status === 'sold' ? '#ef4444' : '#f59e0b';

    new mapboxgl.Marker({ color: markerColor })
      .setLngLat([property.coordinates.lng, property.coordinates.lat])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 })
          .setHTML(`
            <div class="p-2">
              <h3 class="font-semibold">${property.title}</h3>
              <p class="text-sm text-gray-600">${property.location}</p>
              <p class="text-sm font-medium">${property.status.toUpperCase()}</p>
            </div>
          `)
      )
      .addTo(map.current);

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    return () => {
      map.current?.remove();
    };
  }, [property]);

  // Placeholder view when no Mapbox token
  return (
    <div className={`relative ${className}`}>
      <div ref={mapContainer} className="w-full h-full rounded-lg" />
      <div className="absolute inset-0 bg-muted/50 flex items-center justify-center rounded-lg">
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="font-semibold mb-2">Location: {property.location}</h3>
          <p className="text-sm text-muted-foreground mb-2">
            Coordinates: {property.coordinates.lat.toFixed(4)}, {property.coordinates.lng.toFixed(4)}
          </p>
          <p className="text-xs text-muted-foreground">
            Add your Mapbox token to see interactive map
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyMap;