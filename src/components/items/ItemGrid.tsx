
import { useState } from "react";
import ItemCard from "./ItemCard";
import { ItemType } from "@/types";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface ItemGridProps {
  items: ItemType[];
  isLoading?: boolean;
  hasMore?: boolean;
  onLoadMore?: () => void;
}

const ItemGrid = ({ 
  items, 
  isLoading = false, 
  hasMore = false, 
  onLoadMore 
}: ItemGridProps) => {
  const [loadingMore, setLoadingMore] = useState(false);

  const handleLoadMore = async () => {
    if (onLoadMore) {
      setLoadingMore(true);
      await onLoadMore();
      setLoadingMore(false);
    }
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="item-card animate-pulse">
            <div className="card-img-container bg-gray-200"></div>
            <div className="card-content">
              <div className="h-5 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-3"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded mb-4 w-3/4"></div>
              <div className="flex justify-between items-center">
                <div className="h-8 w-8 rounded-full bg-gray-200"></div>
                <div className="h-3 bg-gray-200 rounded w-1/4"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-gray-600">No items found.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>

      {hasMore && (
        <div className="text-center mt-10 mb-4">
          <Button 
            onClick={handleLoadMore}
            disabled={loadingMore}
            variant="outline"
            className="border-foundit-secondary text-foundit-secondary hover:bg-foundit-secondary hover:text-white px-8"
          >
            {loadingMore ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Loading...
              </>
            ) : (
              'Load More'
            )}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ItemGrid;
