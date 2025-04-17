
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { X, Check } from "lucide-react";
import { CityOption } from "@/types";

interface CitySelectorProps {
  onCitySelect: (city: string) => void;
  initialCity?: string;
}

// Sample data for development
const MOCK_CITIES: CityOption[] = [
  { value: "new-york", label: "New York" },
  { value: "los-angeles", label: "Los Angeles" },
  { value: "chicago", label: "Chicago" },
  { value: "houston", label: "Houston" },
  { value: "phoenix", label: "Phoenix" },
  { value: "philadelphia", label: "Philadelphia" },
  { value: "san-antonio", label: "San Antonio" },
  { value: "san-diego", label: "San Diego" },
  { value: "dallas", label: "Dallas" },
  { value: "austin", label: "Austin" },
  { value: "san-jose", label: "San Jose" },
  { value: "boston", label: "Boston" },
  { value: "seattle", label: "Seattle" },
  { value: "denver", label: "Denver" },
  { value: "miami", label: "Miami" },
  { value: "atlanta", label: "Atlanta" },
  { value: "portland", label: "Portland" },
  { value: "washington-dc", label: "Washington D.C." },
];

const CitySelector = ({ onCitySelect, initialCity = "" }: CitySelectorProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState(initialCity);
  const [showDropdown, setShowDropdown] = useState(false);

  const filteredCities = searchQuery
    ? MOCK_CITIES.filter((city) =>
        city.label.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : MOCK_CITIES;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    setShowDropdown(true);
  };

  const handleCitySelect = (city: CityOption) => {
    setSelectedCity(city.label);
    setSearchQuery("");
    setShowDropdown(false);
    onCitySelect(city.label);
  };

  const clearSelection = () => {
    setSelectedCity("");
    setSearchQuery("");
    onCitySelect("");
  };

  return (
    <div className="space-y-2">
      <Label htmlFor="city">City</Label>
      <div className="relative">
        <Input
          id="city"
          placeholder={selectedCity || "Search for a city"}
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={() => setShowDropdown(true)}
          className={selectedCity ? "pl-3 pr-10" : "pl-3"}
        />
        
        {selectedCity && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 text-gray-500"
            onClick={clearSelection}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Clear selection</span>
          </Button>
        )}
        
        {showDropdown && filteredCities.length > 0 && (
          <ul className="absolute z-10 w-full mt-1 bg-white shadow-lg rounded-md border border-gray-200 max-h-60 overflow-auto">
            {filteredCities.map((city) => (
              <li
                key={city.value}
                className={`px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm flex items-center justify-between ${
                  selectedCity === city.label ? "bg-foundit-purple/5" : ""
                }`}
                onClick={() => handleCitySelect(city)}
              >
                <span>{city.label}</span>
                {selectedCity === city.label && (
                  <Check className="h-4 w-4 text-foundit-purple" />
                )}
              </li>
            ))}
          </ul>
        )}
        
        {showDropdown && filteredCities.length === 0 && searchQuery && (
          <div className="absolute z-10 w-full mt-1 bg-white shadow-lg rounded-md border border-gray-200 p-4 text-center">
            <p className="text-sm text-gray-600">No cities found matching "{searchQuery}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CitySelector;
