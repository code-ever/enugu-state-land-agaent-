import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';

interface ImageCarouselProps {
  images: string[];
  title: string;
  status: 'available' | 'sold' | 'pending';
  className?: string;
}

const ImageCarousel = ({ images, title, status, className = '' }: ImageCarouselProps) => {
  const statusConfig = {
    available: { label: "Available", variant: "success" as const },
    sold: { label: "Sold", variant: "destructive" as const },
    pending: { label: "Pending", variant: "warning" as const }
  };

  return (
    <div className={`relative ${className}`}>
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative overflow-hidden rounded-lg bg-muted">
                <img
                  src={image}
                  alt={`${title} - Image ${index + 1}`}
                  className="w-full h-64 md:h-80 lg:h-96 object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
      
      <div className="absolute top-4 left-4">
        <Badge variant={statusConfig[status].variant} className="shadow-sm">
          {statusConfig[status].label}
        </Badge>
      </div>
      
      <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm rounded-md px-2 py-1">
        <span className="text-sm text-foreground">
          1 / {images.length}
        </span>
      </div>
    </div>
  );
};

export default ImageCarousel;