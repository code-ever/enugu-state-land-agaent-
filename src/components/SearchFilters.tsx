import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, SlidersHorizontal } from "lucide-react";

const SearchFilters = () => {
  return (
    <div className="bg-card rounded-lg shadow-medium p-6 -mt-8 relative z-10 mx-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Search properties in Enugu..." 
              className="pl-10"
            />
          </div>
        </div>
        
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Property Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="land">Land</SelectItem>
            <SelectItem value="house">House</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Price Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Prices</SelectItem>
            <SelectItem value="0-5m">₦0 - ₦5M</SelectItem>
            <SelectItem value="5m-20m">₦5M - ₦20M</SelectItem>
            <SelectItem value="20m-50m">₦20M - ₦50M</SelectItem>
            <SelectItem value="50m+">₦50M+</SelectItem>
          </SelectContent>
        </Select>

        <Button className="flex items-center gap-2">
          <SlidersHorizontal className="h-4 w-4" />
          Filter
        </Button>
      </div>
    </div>
  );
};

export default SearchFilters;