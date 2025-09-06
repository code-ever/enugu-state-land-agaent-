import { Building2, Users, Shield, Award, MapPin, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import aboutHero from '@/assets/about-hero.jpg';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aboutHero}
            alt="About LandAgent - Enugu Real Estate"
            className="w-full h-full object-cover brightness-110 contrast-105" 
          />
          {/* Make the overlay light, bright and partially transparent */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 black-transparent to-black/50"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-background">About LandAgent</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto text-background">
            Revolutionizing real estate in Enugu metropolis through technology, transparency, and trust.
            We connect genuine property owners with serious buyers in a secure digital environment.
          </p>
        </div>
      </section>



      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Building2 className="h-8 w-8 text-primary" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To provide a secure, transparent, and efficient platform for real estate transactions 
                  in Enugu metropolis, ensuring every property deal is genuine and every client is satisfied.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Award className="h-8 w-8 text-primary" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To become the leading digital real estate marketplace in Nigeria, setting the standard 
                  for property verification, customer service, and technological innovation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose LandAgent?</h2>
            <p className="text-xl text-muted-foreground">
              We offer unique advantages that set us apart in the real estate market
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Verified Properties</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All properties undergo thorough verification to ensure authenticity and legal compliance.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Interactive Maps</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Explore properties with precise GPS coordinates and detailed location information.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Expert Agents</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Work with experienced and certified real estate professionals.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Secure Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  End-to-end secure payment processing and document management.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-xl text-muted-foreground">
                Founded with a vision to transform real estate in Enugu
              </p>
            </div>

            <div className="prose max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                LandAgent was born out of the need to address the challenges in the Enugu real estate market. 
                Our founders, having experienced firsthand the difficulties of property fraud, lengthy verification 
                processes, and lack of transparency, decided to create a solution.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                Since our inception, we have revolutionized how people buy and sell properties in Enugu metropolis. 
                Our platform combines cutting-edge technology with local expertise to provide unmatched service 
                to our clients.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                Today, we are proud to be the trusted platform for hundreds of successful property transactions, 
                with a growing network of verified agents and satisfied customers across Enugu state.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                Our commitment extends beyond just facilitating transactions. We believe in empowering communities 
                through sustainable development and ethical real estate practices. Every property on our platform 
                undergoes rigorous verification to ensure legal compliance and authenticity.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                We work closely with local government agencies, surveyors, and legal professionals to maintain 
                the highest standards of property documentation. Our advanced mapping technology and GPS 
                verification ensure precise location accuracy for every listed property.
              </p>

              <p className="text-lg text-muted-foreground">
                As we continue to grow, our vision remains clear: to make property ownership accessible, 
                transparent, and secure for everyone in Enugu state and beyond. We are not just a platform; 
                we are your trusted partner in building a better future through real estate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-muted-foreground">
                We maintain the highest ethical standards in all our dealings, ensuring transparency 
                and honesty in every transaction.
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-muted-foreground">
                We believe in building strong communities by connecting people with properties 
                that enhance their quality of life.
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in every aspect of our service, from property verification 
                to customer support and beyond.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Properties Listed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Verified Agents</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-lg opacity-90">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-lg opacity-90">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;