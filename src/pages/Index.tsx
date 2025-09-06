import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import SearchFilters from "@/components/SearchFilters";
import FeaturedProperties from "@/components/FeaturedProperties";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroCarousel />
      <div className="relative">
        <SearchFilters />
      </div>
      <FeaturedProperties />
      <Footer />
    </div>
  );
};

export default Index;
