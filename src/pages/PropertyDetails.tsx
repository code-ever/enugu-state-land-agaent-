import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Home, TreePine, Heart, Phone, Mail, Calendar, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Navbar from '@/components/Navbar';
import GoogleMap from '@/components/GoogleMap';
import ImageCarousel from '@/components/ImageCarousel';
import Footer from '@/components/Footer';
import { sampleProperties } from '@/data/sampleProperties';
import { useState, useEffect } from 'react';

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  
  const property = sampleProperties.find(p => p.id === id);

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

  if (!property) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
          <Button onClick={() => navigate('/properties')}>
            Back to Properties
          </Button>
        </div>
      </div>
    );
  }

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
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate('/properties')}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Properties
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Property Images */}
          <div className="lg:col-span-1 space-y-6">
            <div className="relative">
              <ImageCarousel 
                images={property.imageUrl ? [property.imageUrl] : []}
                title={property.title}
                status={property.status}
              />
              <div className="absolute top-4 right-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-10 w-10 p-0 bg-background/80 backdrop-blur-sm hover:bg-background"
                  onClick={handleLike}
                >
                  <Heart className={`h-5 w-5 ${isLiked ? 'fill-destructive text-destructive' : 'text-foreground'}`} />
                </Button>
              </div>
            </div>
          </div>

          {/* Map - Big and prominent */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <MapPin className="h-6 w-6 text-primary" />
                  Property Location
                </CardTitle>
                <p className="text-muted-foreground">{property.location}</p>
              </CardHeader>
              <CardContent>
                <GoogleMap property={property} className="h-96 lg:h-[500px]" />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Property Details Section */}
        <div className="grid lg:grid-cols-2 gap-8 mt-12">
          {/* Property Information */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
              <div className="flex items-center text-muted-foreground mb-4">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{property.location}</span>
              </div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-bold text-primary">{formatPrice(property.price)}</span>
                <span className="text-lg text-muted-foreground">{property.size}</span>
              </div>
            </div>

            <Separator />

            {/* Description */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Description</h3>
              <p className="text-muted-foreground leading-relaxed">{property.description}</p>
            </div>

            <Separator />

            {/* Property Details */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Property Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-sm text-muted-foreground">Type</span>
                  <p className="font-medium capitalize">{property.type}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Size</span>
                  <p className="font-medium">{property.size}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Status</span>
                  <p className="font-medium capitalize">{property.status}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Agent</span>
                  <p className="font-medium">{property.agent}</p>
                </div>
                {property.yearBuilt && (
                  <div>
                    <span className="text-sm text-muted-foreground">Year Built</span>
                    <p className="font-medium">{property.yearBuilt}</p>
                  </div>
                )}
                {property.bedrooms && (
                  <div>
                    <span className="text-sm text-muted-foreground">Bedrooms</span>
                    <p className="font-medium">{property.bedrooms}</p>
                  </div>
                )}
                {property.bathrooms && (
                  <div>
                    <span className="text-sm text-muted-foreground">Bathrooms</span>
                    <p className="font-medium">{property.bathrooms}</p>
                  </div>
                )}
                {property.parkingSpaces && (
                  <div>
                    <span className="text-sm text-muted-foreground">Parking</span>
                    <p className="font-medium flex items-center gap-1">
                      <Car className="h-4 w-4" />
                      {property.parkingSpaces} spaces
                    </p>
                  </div>
                )}
              </div>
            </div>

            <Separator />

            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Features</h3>
              <div className="flex flex-wrap gap-2">
                {property.features.map((feature, index) => (
                  <Badge key={index} variant="outline">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator />

            {/* Contact Agent */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Agent</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold text-lg">{property.agent}</p>
                  <p className="text-sm text-muted-foreground">Property Agent</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2"
                    onClick={() => navigate('/contact')}
                  >
                    <Phone className="h-4 w-4" />
                    Contact Agent
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2"
                    onClick={() => navigate('/contact')}
                  >
                    <Mail className="h-4 w-4" />
                    Send Message
                  </Button>
                </div>
                
                <Button 
                  className="w-full" 
                  size="lg"
                  disabled={property.status === "sold"}
                >
                  {property.status === "sold" ? "Property Sold" : "Schedule Viewing"}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PropertyDetails;