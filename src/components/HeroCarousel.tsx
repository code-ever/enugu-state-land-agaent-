import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, TrendingUp, Shield, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";
import luxuryDuplex from "@/assets/luxury-duplex.jpg";
import modernBungalow from "@/assets/modern-bungalow.jpg";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroImage,
      title: "Find Your Perfect Property in Enugu",
      subtitle: "Verified lands and houses from trusted agents",
      cta: "Browse Properties"
    },
    {
      image: luxuryDuplex,
      title: "Luxury Houses & Duplexes",
      subtitle: "Premium residential properties in prime locations",
      cta: "View Houses"
    },
    {
      image: modernBungalow,
      title: "Commercial & Residential Lands",
      subtitle: "Secure your future with verified land documents",
      cta: "Explore Lands"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-dark">
      {/* Background Images with Overlay */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover brightness-110 contrast-100 saturate-115"
          />
          {/* Black Gradient Overlay from top to transparent */}
          <div className="absolute inset-0 bg-gradient-to-b from-black to-center"></div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="sm"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-background/20 backdrop-blur-sm border border-background/30 hover:bg-background/30"
      >
        <ChevronLeft className="h-6 w-6 text-background" />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-background/20 backdrop-blur-sm border border-background/30 hover:bg-background/30"
      >
        <ChevronRight className="h-6 w-6 text-background" />
      </Button>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <Badge variant="secondary" className="mb-6 bg-background/30 backdrop-blur-sm text-background border-background/40 animate-fade-in">
          <MapPin className="h-3 w-3 mr-1" />
          Enugu Metropolis Properties
        </Badge>

        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {slides[currentSlide].title.split(' ').slice(0, -2).join(' ')}
            <span className="block bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
              {slides[currentSlide].title.split(' ').slice(-2).join(' ')}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            {slides[currentSlide].subtitle}.
            Secure transactions, authentic documents, real-time availability.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
          <Link to="/properties">
            <Button size="lg" variant="hero" className="text-lg px-8 py-4 hover-scale">
              {slides[currentSlide].cta}
            </Button>
          </Link>
          <Link to="/auth">
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-background/20 backdrop-blur-sm border-background/30 text-background hover:bg-background hover:text-foreground hover-scale">
              List Your Property
            </Button>
          </Link>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 mb-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                  ? 'bg-primary-light scale-125'
                  : 'bg-background/50 hover:bg-background/70'
                }`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in">
          <div className="text-center hover-scale">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="h-6 w-6 text-primary-light mr-2" />
              <span className="text-3xl font-bold text-background">500+</span>
            </div>
            <p className="text-background/80">Properties Listed</p>
          </div>
          <div className="text-center hover-scale">
            <div className="flex items-center justify-center mb-2">
              <Shield className="h-6 w-6 text-primary-light mr-2" />
              <span className="text-3xl font-bold text-background">100%</span>
            </div>
            <p className="text-background/80">Verified Documents</p>
          </div>
          <div className="text-center hover-scale">
            <div className="flex items-center justify-center mb-2">
              <Users className="h-6 w-6 text-primary-light mr-2" />
              <span className="text-3xl font-bold text-background">200+</span>
            </div>
            <p className="text-background/80">Trusted Agents</p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroCarousel;

