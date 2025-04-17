
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ItemGrid from "@/components/items/ItemGrid";
import ItemFilters from "@/components/items/ItemFilters";
import { ItemType, CityOption } from "@/types";
import { MapPin } from "lucide-react";

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
    id: "1",
    title: "Lost Black Wallet with ID Cards",
    description: "I lost my black leather wallet at Central Park near the fountain. It has my driver's license and credit cards inside.",
    status: "lost",
    location: "Central Park, near the fountain",
    city: "New York",
    latitude: 40.785091,
    longitude: -73.968285,
    whatsapp_number: "+1234567890",
    reward_note: "$50 reward for safe return",
    images: ["https://placehold.co/800x600/e2e8f0/94a3b8?text=Wallet"],
    created_at: new Date(Date.now() - 86400000 * 2).toISOString(), // 2 days ago
    user_id: "user1"
  },
  {
    id: "2",
    title: "Lost iPhone 15 Pro",
    description: "Lost my iPhone 15 Pro (black) at Starbucks on Main Street. It has a clear case with stickers.",
    status: "lost",
    location: "Starbucks, 123 Main St",
    city: "Los Angeles",
    latitude: 34.052235,
    longitude: -118.243683,
    whatsapp_number: "+1987654321",
    reward_note: "$100 reward, no questions asked",
    images: ["https://placehold.co/800x600/e2e8f0/94a3b8?text=iPhone"],
    created_at: new Date(Date.now() - 86400000 * 1).toISOString(), // 1 day ago
    user_id: "user2"
  },
  {
    id: "3",
    title: "Lost Car Keys with Rabbit Foot Keychain",
    description: "Lost my car keys with a distinctive rabbit foot keychain at the shopping mall food court.",
    status: "lost",
    location: "Westfield Mall, Food Court",
    city: "Chicago",
    latitude: 41.878113,
    longitude: -87.629799,
    whatsapp_number: "+1234509876",
    images: ["https://placehold.co/800x600/e2e8f0/94a3b8?text=Keys"],
    created_at: new Date(Date.now() - 86400000 * 0.5).toISOString(), // 12 hours ago
    user_id: "user3"
  },
  {
    id: "4",
    title: "Lost Prescription Glasses",
    description: "I lost my prescription glasses with tortoise shell frames. They were in a black case.",
    status: "lost",
    location: "Public Library, 2nd floor",
    city: "Houston",
    latitude: 29.760427,
    longitude: -95.369804,
    whatsapp_number: "+1456789012",
    images: ["https://placehold.co/800x600/e2e8f0/94a3b8?text=Glasses"],
    created_at: new Date(Date.now() - 86400000 * 5).toISOString(), // 5 days ago
    user_id: "user4"
  }
];

const LostItemsPage = () => {
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
        console.error("Error fetching lost items:", error);
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
        <title>Lost Items | Found It</title>
        <meta name="description" content="Browse and search for lost items reported on Found It." />
      </Helmet>

      <div className="flex items-center mb-6">
        <MapPin className="h-6 w-6 mr-2 text-foundit-purple" />
        <h1 className="text-3xl font-bold">Lost Items</h1>
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

export default LostItemsPage;
