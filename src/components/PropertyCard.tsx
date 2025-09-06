import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MapPin, Home, TreePine, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface PropertyCardProps {
  id: string;
  title: string;
  type: "land" | "house";
  price: number;
  location: string;
  size: string;
  status: "available" | "sold" | "pending";
  imageUrl: string;
  agent: string;
}

const PropertyCard = ({ id, title, type, price, location, size, status, imageUrl, agent }: PropertyCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if property is liked from localStorage
    const likedProperties = JSON.parse(localStorage.getItem('likedProperties') || '[]');
    setIsLiked(likedProperties.includes(id));
  }, [id]);

  const handleLike = () => {
    const likedProperties = JSON.parse(localStorage.getItem('likedProperties') || '[]');
    let updatedLikes;
    
    if (isLiked) {
      updatedLikes = likedProperties.filter((propId: string) => propId !== id);
    } else {
      updatedLikes = [...likedProperties, id];
    }
    
    localStorage.setItem('likedProperties', JSON.stringify(updatedLikes));
    setIsLiked(!isLiked);
  };

  const statusConfig = {
    available: { label: "Available", variant: "success" as const },
    sold: { label: "Sold", variant: "destructive" as const },
    pending: { label: "Pending", variant: "warning" as const }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <Card className="group overflow-hidden bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <Badge variant={statusConfig[status].variant} className="shadow-sm">
            {statusConfig[status].label}
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={handleLike}
          >
            <Heart className={`h-4 w-4 ${isLiked ? 'fill-destructive text-destructive' : 'text-foreground'}`} />
          </Button>
        </div>
        <div className="absolute bottom-3 left-3">
          <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
            {type === "land" ? <TreePine className="h-3 w-3 mr-1" /> : <Home className="h-3 w-3 mr-1" />}
            {type === "land" ? "Land" : "House"}
          </Badge>
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-1">{title}</h3>
        <div className="flex items-center text-muted-foreground mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-2xl font-bold text-primary">{formatPrice(price)}</span>
          <span className="text-sm text-muted-foreground">{size}</span>
        </div>
        <p className="text-sm text-muted-foreground">Agent: {agent}</p>
      </CardContent>

      <CardFooter className="p-4 pt-0 space-x-2">
        <Button 
          className="flex-1" 
          variant="outline"
          onClick={() => navigate(`/property/${id}`)}
        >
          View Details
        </Button>
        <Button className="flex-1" disabled={status === "sold"}>
          {status === "sold" ? "Sold" : "Contact Agent"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;