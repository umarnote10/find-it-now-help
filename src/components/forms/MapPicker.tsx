
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin } from "lucide-react";

interface MapPickerProps {
  onLocationSelect: (location: string) => void;
  initialLocation?: string;
}

const MapPicker = ({
  onLocationSelect,
  initialLocation = "",
}: MapPickerProps) => {
  const handleLocationInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    onLocationSelect(e.target.value);
  };

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="location">Location</Label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            id="location"
            placeholder="Enter the specific location"
            className="pl-9"
            value={initialLocation}
            onChange={handleLocationInput}
          />
        </div>
        <p className="text-xs text-gray-500 mt-1">
          Enter the specific location where the item was lost/found
        </p>
      </div>
    </div>
  );
};

export default MapPicker;
