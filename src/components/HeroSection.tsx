import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, TrendingUp, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Enugu Metropolis"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <Badge variant="secondary" className="mb-6 bg-background/20 backdrop-blur-sm text-background border-background/30">
          <MapPin className="h-3 w-3 mr-1" />
          Enugu Metropolis Properties
        </Badge>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-background mb-6 leading-tight">
          Find Your Perfect
          <span className="block bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
            Property in Enugu
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-background/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Discover verified lands and houses from trusted agents in Enugu metropolis. 
          Secure transactions, authentic documents, real-time availability.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link to="/properties">
            <Button size="lg" variant="hero" className="text-lg px-8 py-4">
              Browse Properties
            </Button>
          </Link>
          <Link to="/auth">
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-background/10 backdrop-blur-sm border-background/30 text-background hover:bg-background hover:text-foreground">
              List Your Property
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="h-6 w-6 text-primary-light mr-2" />
              <span className="text-3xl font-bold text-background">500+</span>
            </div>
            <p className="text-background/80">Properties Listed</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Shield className="h-6 w-6 text-primary-light mr-2" />
              <span className="text-3xl font-bold text-background">100%</span>
            </div>
            <p className="text-background/80">Verified Documents</p>
          </div>
          <div className="text-center">
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

export default HeroSection;