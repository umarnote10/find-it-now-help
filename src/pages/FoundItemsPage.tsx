
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ItemGrid from "@/components/items/ItemGrid";
import ItemFilters from "@/components/items/ItemFilters";
import { ItemType, CityOption } from "@/types";
import { Hand } from "lucide-react";

// Sample data for development
const MOCK_CITIES: CityOption[] = [
  { value: "new-york", label: "New York" },
  { value: "los-angeles", label: "Los Angeles" },
  { value: "chicago", label: "Chicago" },
  { value: "houston", label: "Houston" },
  { value: "phoenix", label: "Phoenix" },
  { value: "philadelphia", label: "Philadelphia" },
  { value: "san-antonio", label: "San Antonio" },
  { value: "san-diego", label: "San Diego" }
];

// Sample data for development
const MOCK_ITEMS: ItemType[] = [
  {
    id: "5",
    title: "Found iPhone in Blue Case",
    description: "Found an iPhone with a blue case at Starbucks on 5th Avenue. It was left on a table near the window.",
    status: "found",
    location: "Starbucks, 5th Avenue",
    city: "New York",
    latitude: 40.758896,
    longitude: -73.985130,
    images: ["https://placehold.co/800x600/e2e8f0/94a3b8?text=iPhone"],
    created_at: new Date(Date.now() - 86400000 * 1).toISOString(), // 1 day ago
    user_id: "user5"
  },
  {
    id: "6",
    title: "Found Dog with Red Collar",
    description: "Found a small brown dog with a red collar at Lincoln Park. Very friendly and seems well cared for.",
    status: "found",
    location: "Lincoln Park, near the fountain",
    city: "Chicago",
    latitude: 41.921092,
    longitude: -87.633492,
    whatsapp_number: "+1122334455",
    images: ["https://placehold.co/800x600/e2e8f0/94a3b8?text=Dog"],
    created_at: new Date(Date.now() - 86400000 * 0.2).toISOString(), // ~5 hours ago
    user_id: "user6"
  },
  {
    id: "7",
    title: "Found Keys with Bottle Opener",
    description: "Found a set of keys with a distinctive bottle opener keychain at the bus stop on Main Street.",
    status: "found",
    location: "Bus Stop, Main Street",
    city: "Los Angeles",
    whatsapp_number: "+1567890123",
    images: ["https://placehold.co/800x600/e2e8f0/94a3b8?text=Keys"],
    created_at: new Date(Date.now() - 86400000 * 3).toISOString(), // 3 days ago
    user_id: "user7"
  },
  {
    id: "8",
    title: "Found Gold Ring",
    description: "Found a gold ring with small diamonds in the bathroom at Central Mall. Appears to be a wedding band.",
    status: "found",
    location: "Central Mall, women's bathroom",
    city: "Houston",
    whatsapp_number: "+1098765432",
    images: ["https://placehold.co/800x600/e2e8f0/94a3b8?text=Ring"],
    created_at: new Date(Date.now() - 86400000 * 2).toISOString(), // 2 days ago
    user_id: "user8"
  }
];

const FoundItemsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState<ItemType[]>([]);
  const [activeView, setActiveView] = useState<"list" | "map">("list");

  useEffect(() => {
    // Simulate API call
    const fetchItems = async () => {
      setIsLoading(true);
      try {
        // In a real app, this would be a fetch call to Supabase
        setTimeout(() => {
          setItems(MOCK_ITEMS);
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching found items:", error);
        setIsLoading(false);
      }
    };

    fetchItems();
  }, []);

  const handleFilterChange = (filters: any) => {
    console.log("Filters applied:", filters);
    // In a real app, we would filter the items based on these filters
    // For now, we'll just simulate a loading state
    setIsLoading(true);
    setTimeout(() => {
      // Filter logic would go here
      setIsLoading(false);
    }, 500);
  };

  const handleLoadMore = async () => {
    // In a real app, this would load the next page of items
    console.log("Loading more items...");
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  };

  return (
    <div className="foundit-container py-8">
      <Helmet>
        <title>Found Items | Found It</title>
        <meta name="description" content="Browse and search for found items reported on Found It." />
      </Helmet>

      <div className="flex items-center mb-6">
        <Hand className="h-6 w-6 mr-2 text-green-600" />
        <h1 className="text-3xl font-bold">Found Items</h1>
      </div>

      <ItemFilters onFilterChange={handleFilterChange} cities={MOCK_CITIES} />

      <Tabs defaultValue="list" value={activeView} onValueChange={(v) => setActiveView(v as "list" | "map")}>
        <TabsList className="mb-6">
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="map">Map View</TabsTrigger>
        </TabsList>

        <TabsContent value="list">
          <ItemGrid 
            items={items} 
            isLoading={isLoading} 
            hasMore={items.length >= 4}
            onLoadMore={handleLoadMore}
          />
        </TabsContent>

        <TabsContent value="map">
          <div className="bg-gray-100 rounded-lg h-[60vh] flex items-center justify-center">
            <p className="text-gray-500">
              Map view will be implemented with Google Maps SDK.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FoundItemsPage;
