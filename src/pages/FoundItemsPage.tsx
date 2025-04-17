
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ItemGrid from "@/components/items/ItemGrid";
import ItemFilters from "@/components/items/ItemFilters";
import { ItemType } from "@/types";
import { Hand, Filter, Map } from "lucide-react";
import { pakistaniCities } from "@/data/pakistanCities";
import { MOCK_ITEMS_PAKISTAN } from "@/data/mockItems";
import { Button } from "@/components/ui/button";

const FoundItemsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState<ItemType[]>([]);
  const [activeView, setActiveView] = useState<"list" | "map">("list");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    // Simulate API call
    const fetchItems = async () => {
      setIsLoading(true);
      try {
        // Filter only found items
        const foundItems = MOCK_ITEMS_PAKISTAN.filter(item => item.status === "found");
        
        // In a real app, this would be a fetch call to Supabase
        setTimeout(() => {
          setItems(foundItems);
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
    setIsLoading(true);
    setTimeout(() => {
      // Simple filter implementation for city
      let filteredItems = MOCK_ITEMS_PAKISTAN.filter(item => item.status === "found");
      
      if (filters.city) {
        filteredItems = filteredItems.filter(item => 
          item.city.toLowerCase() === filters.city.toLowerCase()
        );
      }
      
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        filteredItems = filteredItems.filter(item => 
          item.title.toLowerCase().includes(searchLower) || 
          item.description.toLowerCase().includes(searchLower) ||
          item.location.toLowerCase().includes(searchLower)
        );
      }
      
      setItems(filteredItems);
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
        <meta name="description" content="Browse and search for found items reported on Found It across Pakistan." />
      </Helmet>

      <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
        <div className="flex items-center">
          <div className="bg-green-100 p-2 rounded-lg mr-3">
            <Hand className="h-6 w-6 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold">Found Items</h1>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button 
            variant="outline"
            className="border-foundit-muted text-foundit-muted hover:bg-foundit-muted hover:text-white"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
          
          <Tabs value={activeView} onValueChange={(v) => setActiveView(v as "list" | "map")}>
            <TabsList className="grid w-[180px] grid-cols-2">
              <TabsTrigger value="list">List View</TabsTrigger>
              <TabsTrigger value="map">Map View</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isFilterOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="bg-white p-5 rounded-lg shadow-md mb-6">
          <ItemFilters onFilterChange={handleFilterChange} cities={pakistaniCities} />
        </div>
      </div>

      <Tabs value={activeView} onValueChange={(v) => setActiveView(v as "list" | "map")}>
        <TabsContent value="list">
          <ItemGrid 
            items={items} 
            isLoading={isLoading} 
            hasMore={items.length >= 4}
            onLoadMore={handleLoadMore}
          />
        </TabsContent>

        <TabsContent value="map">
          <div className="bg-gray-50 border border-gray-200 rounded-lg h-[70vh] flex items-center justify-center text-center p-6">
            <div>
              <Map className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2">Map View</h3>
              <p className="text-gray-500 max-w-md mx-auto">
                Interactive map view will be implemented with Google Maps SDK integration to show found items across Pakistan.
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FoundItemsPage;
