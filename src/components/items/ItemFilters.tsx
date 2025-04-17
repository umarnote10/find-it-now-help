
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import { Calendar } from "@/components/ui/calendar";
import { CityOption } from "@/types";
import { Search, Calendar as CalendarIcon, SlidersHorizontal, X } from "lucide-react";

interface FilterProps {
  onFilterChange: (filters: any) => void;
  cities: CityOption[];
}

const ItemFilters = ({ onFilterChange, cities }: FilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    search: "",
    city: "",
    dateRange: {
      from: undefined as Date | undefined,
      to: undefined as Date | undefined,
    },
    distance: [10],
  });
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFilters = { ...filters, search: e.target.value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };
  
  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newFilters = { ...filters, city: e.target.value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };
  
  const handleResetFilters = () => {
    const resetFilters = {
      search: "",
      city: "",
      dateRange: {
        from: undefined,
        to: undefined,
      },
      distance: [10],
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange(filters);
  };
  
  return (
    <div className="mb-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center gap-3">
          {/* Search Input */}
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search items..."
              value={filters.search}
              onChange={handleSearchChange}
              className="pl-9"
            />
          </div>
          
          {/* City Select */}
          <div className="w-full md:w-48">
            <select
              value={filters.city}
              onChange={handleCityChange}
              className="w-full h-10 pl-3 pr-8 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-foundit-purple text-sm"
            >
              <option value="">All Locations</option>
              {cities.map((city) => (
                <option key={city.value} value={city.value}>
                  {city.label}
                </option>
              ))}
            </select>
          </div>
          
          {/* Advanced Filters Button */}
          <div className="flex space-x-2">
            <Popover open={isOpen} onOpenChange={setIsOpen}>
              <PopoverTrigger asChild>
                <Button 
                  type="button" 
                  variant="outline" 
                  className="border-foundit-purple text-foundit-purple"
                >
                  <SlidersHorizontal className="mr-2 h-4 w-4" />
                  Filters
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-4" align="end">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Date Range</h4>
                    <div className="flex flex-col space-y-2">
                      <div className="grid gap-2">
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">Select a date range</span>
                        </div>
                        <Calendar
                          mode="range"
                          selected={{
                            from: filters.dateRange.from,
                            to: filters.dateRange.to,
                          }}
                          onSelect={(range) => {
                            setFilters({
                              ...filters,
                              dateRange: {
                                from: range?.from,
                                to: range?.to,
                              },
                            });
                          }}
                          className="rounded-md border"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Distance</h4>
                      <span className="text-sm text-gray-600">
                        {filters.distance[0]} km
                      </span>
                    </div>
                    <Slider
                      value={filters.distance}
                      min={1}
                      max={50}
                      step={1}
                      onValueChange={(value) => {
                        setFilters({ ...filters, distance: value });
                      }}
                    />
                  </div>
                  
                  <div className="flex justify-between pt-2">
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={handleResetFilters}
                      className="text-gray-500"
                    >
                      Reset Filters
                    </Button>
                    <Button
                      type="button"
                      size="sm"
                      onClick={() => {
                        onFilterChange(filters);
                        setIsOpen(false);
                      }}
                      className="bg-foundit-purple hover:bg-foundit-purpleDark"
                    >
                      Apply Filters
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            
            {(filters.search || filters.city || filters.dateRange.from || filters.distance[0] !== 10) && (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={handleResetFilters}
                className="text-gray-500"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Clear filters</span>
              </Button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ItemFilters;
