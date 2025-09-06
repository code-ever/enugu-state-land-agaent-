import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, Map, UserCircle, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-background/95 backdrop-blur-sm shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Building2 className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <span className="text-xl font-bold text-foreground">LandAgent</span>
              <Badge variant="secondary" className="ml-2 text-xs">Enugu</Badge>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-foreground hover:text-primary transition-colors"
            >
             Home
            </Link>
            <Link 
              to="/enugu-map?view=map" 
              className="text-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              <Map className="h-4 w-4" />
              Map View
            </Link>
            <Link 
              to="/about" 
              className={`text-foreground hover:text-primary transition-colors ${location.pathname === '/about' ? 'text-primary font-medium' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`text-foreground hover:text-primary transition-colors ${location.pathname === '/contact' ? 'text-primary font-medium' : ''}`}
            >
              Contact
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/auth">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>
            <Link to="/properties">
              <Button size="sm" className="bg-gradient-primary">
                List Property
              </Button>
            </Link>
            <Button variant="ghost" size="sm" className="p-2">
              <UserCircle className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/enugu-map?view=map" 
                className="text-foreground hover:text-primary transition-colors py-2 flex items-center gap-1"
                onClick={() => setIsMenuOpen(false)}
              >
                <Map className="h-4 w-4" />
                Map View
              </Link>
              <Link 
                to="/about" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-2 space-y-2">
                <Link to="/auth" className="block" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    Sign In
                  </Button>
                </Link>
                <Link to="/properties" onClick={() => setIsMenuOpen(false)}>
                  <Button size="sm" className="w-full bg-gradient-primary">
                    List Property
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;