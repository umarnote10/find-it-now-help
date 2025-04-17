
import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Search, MapPin } from "lucide-react";

interface MapPickerProps {
  onLocationSelect: (location: string, latitude: number, longitude: number) => void;
  initialLocation?: string;
  initialLat?: number;
  initialLng?: number;
}

const MapPicker = ({
  onLocationSelect,
  initialLocation = "",
  initialLat,
  initialLng,
}: MapPickerProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [location, setLocation] = useState(initialLocation);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    // This is a placeholder for Google Maps JavaScript SDK integration
    // In a real implementation, we would load the Google Maps script here
    // and initialize the map once loaded
    
    const mockMapLoad = setTimeout(() => {
      setMapLoaded(true);
      console.log("Map component loaded (placeholder)");
    }, 1000);

    return () => clearTimeout(mockMapLoad);
  }, []);

  const handleLocationInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocation(value);
    setSearchQuery(value);
    
    // This would be where we'd call the Google Places API
    // For now, we'll just simulate some results
    if (value.length > 2) {
      setShowResults(true);
      setSearchResults([
        { id: '1', description: `${value} near Central Park, New York`, lat: 40.785091, lng: -73.968285 },
        { id: '2', description: `${value} near Downtown, Chicago`, lat: 41.878113, lng: -87.629799 },
        { id: '3', description: `${value} near Hollywood, Los Angeles`, lat: 34.092809, lng: -118.328661 },
      ]);
    } else {
      setShowResults(false);
      setSearchResults([]);
    }
  };

  const selectLocation = (result: any) => {
    setLocation(result.description);
    setShowResults(false);
    
    // Call the callback with the selected location and coordinates
    onLocationSelect(result.description, result.lat, result.lng);
    
    // In a real implementation, we would center the map on these coordinates
    console.log(`Map would center on: ${result.lat}, ${result.lng}`);
  };
  
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      selectLocation(searchResults[0]);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="location">Location</Label>
        <div className="relative">
          <form onSubmit={handleSearchSubmit}>
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              id="location"
              placeholder="Search for location"
              className="pl-9 pr-10"
              value={location}
              onChange={handleLocationInput}
            />
            <Button 
              type="submit"
              variant="ghost" 
              size="icon" 
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8"
            >
              <Search className="h-4 w-4" />
            </Button>
          </form>
          
          {/* Location search results dropdown */}
          {showResults && searchResults.length > 0 && (
            <div className="absolute z-10 w-full mt-1 bg-white shadow-lg rounded-md border border-gray-200 max-h-60 overflow-auto">
              <ul className="py-1">
                {searchResults.map((result) => (
                  <li
                    key={result.id}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm"
                    onClick={() => selectLocation(result)}
                  >
                    <div className="flex items-start">
                      <MapPin className="h-4 w-4 text-gray-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>{result.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <p className="text-xs text-gray-500 mt-1">
          Enter the specific location where the item was lost/found
        </p>
      </div>

      <div className="rounded-lg overflow-hidden border border-gray-200">
        <div className="bg-gray-100 h-[300px] flex items-center justify-center">
          {!mapLoaded ? (
            <div className="animate-pulse flex flex-col items-center">
              <div className="rounded-full bg-gray-200 h-12 w-12 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-32"></div>
            </div>
          ) : (
            <div ref={mapRef} className="w-full h-full flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="h-8 w-8 text-foundit-purple mx-auto mb-2" />
                <p className="text-sm">
                  Google Maps integration will be implemented here.
                </p>
                <p className="text-xs mt-2">
                  You'll be able to drop a pin or search for locations.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MapPicker;
