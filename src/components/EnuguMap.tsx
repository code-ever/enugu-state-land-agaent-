import React, { useEffect, useRef } from 'react';
import { Property } from '@/data/sampleProperties';
import { Badge } from '@/components/ui/badge';
import { MapPin, Home, Building2 } from 'lucide-react';

interface EnuguMapProps {
  properties: Property[];
  className?: string;
}

const EnuguMap = ({ properties, className = '' }: EnuguMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  const neighborhoods = [
    { name: "GRA Phase 1", lat: 6.4466, lng: 7.4932, type: "residential" },
    { name: "Independence Layout", lat: 6.4398, lng: 7.4951, type: "residential" },
    { name: "New Haven", lat: 6.4514, lng: 7.5086, type: "commercial" },
    { name: "Asokoro", lat: 6.4531, lng: 7.4876, type: "luxury" },
    { name: "Trans-Ekulu", lat: 6.4281, lng: 7.5138, type: "residential" },
    { name: "Achara Layout", lat: 6.4421, lng: 7.4876, type: "residential" },
    { name: "Coal Camp", lat: 6.4511, lng: 7.4902, type: "commercial" },
    { name: "Uwani", lat: 6.4398, lng: 7.4821, type: "mixed" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return '#22c55e';
      case 'sold': return '#ef4444';
      case 'pending': return '#f59e0b';
      default: return '#6b7280';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'house': return <Home className="h-3 w-3" />;
      case 'land': return <Building2 className="h-3 w-3" />;
      default: return <MapPin className="h-3 w-3" />;
    }
  };

  useEffect(() => {
    if (mapRef.current) {
      // Clear any existing content
      mapRef.current.innerHTML = '';
      
      // Create map container
      const mapContainer = document.createElement('div');
      mapContainer.className = 'relative w-full h-full bg-gradient-to-br from-green-50 to-blue-50 rounded-lg overflow-hidden';
      
      // Add Enugu city outline
      mapContainer.innerHTML = `
        <div class="absolute inset-0 bg-gradient-to-br from-green-100/50 to-blue-100/50"></div>
        <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
          <h3 class="font-semibold text-lg flex items-center gap-2">
            <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Enugu Metropolis
          </h3>
          <p class="text-sm text-gray-600">Coal City State</p>
          <div class="mt-2 text-xs text-gray-500">
            ${properties.length} Properties Available
          </div>
        </div>
      `;

      // Add neighborhood markers
      neighborhoods.forEach((neighborhood, index) => {
        const marker = document.createElement('div');
        marker.className = 'absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform';
        
        // Position based on relative coordinates (scaled for display)
        const x = ((neighborhood.lng - 7.45) * 800) + 250; // Scale longitude
        const y = 400 - ((neighborhood.lat - 6.42) * 600); // Scale latitude (inverted Y)
        
        marker.style.left = `${Math.max(50, Math.min(x, 90))}%`;
        marker.style.top = `${Math.max(10, Math.min(y / 6, 80))}%`;
        
        // Get properties in this neighborhood
        const neighborhoodProperties = properties.filter(p => 
          p.location.toLowerCase().includes(neighborhood.name.toLowerCase())
        );
        
        const statusCounts = neighborhoodProperties.reduce((acc, p) => {
          acc[p.status] = (acc[p.status] || 0) + 1;
          return acc;
        }, {} as Record<string, number>);

        marker.innerHTML = `
          <div class="bg-white rounded-full p-2 shadow-lg border-2 border-primary/20 hover:border-primary/40 transition-colors">
            <div class="w-3 h-3 bg-primary rounded-full"></div>
          </div>
          <div class="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-lg min-w-max opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
            <div class="text-sm font-semibold">${neighborhood.name}</div>
            <div class="text-xs text-gray-600 capitalize">${neighborhood.type}</div>
            ${neighborhoodProperties.length > 0 ? `
              <div class="text-xs mt-1">
                <div class="flex gap-1 flex-wrap">
                  ${Object.entries(statusCounts).map(([status, count]) => `
                    <span class="px-1 py-0.5 rounded text-white text-xs" style="background-color: ${getStatusColor(status)}">
                      ${count} ${status}
                    </span>
                  `).join('')}
                </div>
              </div>
            ` : `<div class="text-xs text-gray-400">No properties</div>`}
          </div>
        `;
        
        mapContainer.appendChild(marker);
      });

      // Add property markers
      properties.forEach((property, index) => {
        const propertyMarker = document.createElement('div');
        propertyMarker.className = 'absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform z-10';
        
        // Position based on property coordinates
        const x = ((property.coordinates.lng - 7.45) * 800) + 250;
        const y = 400 - ((property.coordinates.lat - 6.42) * 600);
        
        propertyMarker.style.left = `${Math.max(45, Math.min(x + (index % 3 - 1) * 20, 95))}%`;
        propertyMarker.style.top = `${Math.max(15, Math.min(y / 6 + (index % 2) * 10, 85))}%`;
        
        propertyMarker.innerHTML = `
          <div class="relative">
            <div class="w-4 h-4 rounded-full border-2 border-white shadow-lg" style="background-color: ${getStatusColor(property.status)}"></div>
            <div class="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg min-w-max opacity-0 hover:opacity-100 transition-opacity pointer-events-none z-20">
              <div class="text-sm font-semibold">${property.title}</div>
              <div class="text-xs text-gray-600">${property.location}</div>
              <div class="text-xs font-medium text-primary">₦${property.price.toLocaleString()}</div>
              <div class="text-xs text-gray-500">${property.size} • ${property.type}</div>
              <div class="flex items-center gap-1 mt-1">
                <span class="px-1.5 py-0.5 rounded text-white text-xs capitalize" style="background-color: ${getStatusColor(property.status)}">
                  ${property.status}
                </span>
              </div>
            </div>
          </div>
        `;
        
        mapContainer.appendChild(propertyMarker);
      });

      // Add legend
      const legend = document.createElement('div');
      legend.className = 'absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg';
      legend.innerHTML = `
        <div class="text-sm font-semibold mb-2">Property Status</div>
        <div class="space-y-1">
          <div class="flex items-center gap-2 text-xs">
            <div class="w-3 h-3 rounded-full" style="background-color: ${getStatusColor('available')}"></div>
            <span>Available</span>
          </div>
          <div class="flex items-center gap-2 text-xs">
            <div class="w-3 h-3 rounded-full" style="background-color: ${getStatusColor('pending')}"></div>
            <span>Pending</span>
          </div>
          <div class="flex items-center gap-2 text-xs">
            <div class="w-3 h-3 rounded-full" style="background-color: ${getStatusColor('sold')}"></div>
            <span>Sold</span>
          </div>
        </div>
      `;
      
      mapContainer.appendChild(legend);
      mapRef.current.appendChild(mapContainer);
    }
  }, [properties]);

  return (
    <div className={`relative ${className}`}>
      <div ref={mapRef} className="w-full h-full min-h-[400px] rounded-lg border" />
    </div>
  );
};

export default EnuguMap;