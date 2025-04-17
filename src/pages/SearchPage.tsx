
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ItemGrid from "@/components/items/ItemGrid";
import ItemFilters from "@/components/items/ItemFilters";
import { ItemType, CityOption } from "@/types";
import { Search } from "lucide-react";

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

// Sample data for development - merge from the other mock data
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
    user_id: "user1",
    language: "en"
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
    user_id: "user2",
    language: "en"
  },
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
    user_id: "user5",
    language: "en"
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
    user_id: "user6",
    language: "en"
  }
];

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState<ItemType[]>([]);
  const [filteredItems, setFilteredItems] = useState<ItemType[]>([]);
  const [activeTab, setActiveTab] = useState<"all" | "lost" | "found">("all");

  useEffect(() => {
    // Simulate API call
    const fetchSearchResults = async () => {
      setIsLoading(true);
      try {
        // In a real app, this would be a fetch call to Supabase
        setTimeout(() => {
          // Simple search implementation for mock data
          const results = MOCK_ITEMS.filter(item => 
            item.title.toLowerCase().includes(query.toLowerCase()) || 
            item.description.toLowerCase().includes(query.toLowerCase()) ||
            item.location.toLowerCase().includes(query.toLowerCase()) ||
            item.city.toLowerCase().includes(query.toLowerCase())
          );
          setItems(results);
          setFilteredItems(results);
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error searching items:", error);
        setIsLoading(false);
      }
    };

    if (query) {
      fetchSearchResults();
    } else {
      setItems([]);
      setFilteredItems([]);
      setIsLoading(false);
    }
  }, [query]);

  useEffect(() => {
    // Filter based on active tab
    if (activeTab === "all") {
      setFilteredItems(items);
    } else {
      setFilteredItems(items.filter(item => item.status === activeTab));
    }
  }, [activeTab, items]);

  const handleFilterChange = (filters: any) => {
    console.log("Filters applied:", filters);
    // In a real app, we would filter the items based on these filters
    // For now, we'll just simulate a loading state
    setIsLoading(true);
    setTimeout(() => {
      // Simple filter implementation for city
      let results = [...items];
      
      if (filters.search) {
        results = results.filter(item => 
          item.title.toLowerCase().includes(filters.search.toLowerCase()) || 
          item.description.toLowerCase().includes(filters.search.toLowerCase())
        );
      }
      
      if (filters.city) {
        results = results.filter(item => item.city.toLowerCase() === filters.city.toLowerCase());
      }
      
      setFilteredItems(results);
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
        <title>{query ? `Search results for "${query}"` : "Search"} | Found It</title>
        <meta name="description" content={`Search results for ${query} on Found It lost and found platform.`} />
      </Helmet>

      <div className="flex items-center mb-6">
        <Search className="h-6 w-6 mr-2 text-foundit-purple" />
        <h1 className="text-3xl font-bold">Search Results</h1>
      </div>

      {query && (
        <p className="text-lg text-gray-700 mb-6">
          Showing results for "<span className="font-semibold">{query}</span>"
        </p>
      )}

      <ItemFilters onFilterChange={handleFilterChange} cities={MOCK_CITIES} />

      <Tabs defaultValue="all" value={activeTab} onValueChange={(v) => setActiveTab(v as "all" | "lost" | "found")}>
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Items</TabsTrigger>
          <TabsTrigger value="lost">Lost Items</TabsTrigger>
          <TabsTrigger value="found">Found Items</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <ItemGrid 
            items={filteredItems} 
            isLoading={isLoading} 
            hasMore={filteredItems.length >= 10}
            onLoadMore={handleLoadMore}
          />
        </TabsContent>

        <TabsContent value="lost">
          <ItemGrid 
            items={filteredItems} 
            isLoading={isLoading} 
            hasMore={filteredItems.filter(i => i.status === "lost").length >= 10}
            onLoadMore={handleLoadMore}
          />
        </TabsContent>

        <TabsContent value="found">
          <ItemGrid 
            items={filteredItems} 
            isLoading={isLoading} 
            hasMore={filteredItems.filter(i => i.status === "found").length >= 10}
            onLoadMore={handleLoadMore}
          />
        </TabsContent>
      </Tabs>

      {!isLoading && filteredItems.length === 0 && (
        <div className="text-center py-12">
          <div className="inline-block p-6 bg-gray-100 rounded-full mb-6">
            <Search className="h-10 w-10 text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold mb-2">No results found</h2>
          <p className="text-gray-600">
            {query 
              ? `We couldn't find any matches for "${query}". Try another search or filters.` 
              : "Enter a search query to find lost or found items."}
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
