
import { Link } from "react-router-dom";
import { MapPin, Clock } from "lucide-react";
import { ItemType } from "@/types";
import { formatDistanceToNow } from "date-fns";

interface ItemCardProps {
  item: ItemType;
}

const ItemCard = ({ item }: ItemCardProps) => {
  const timeAgo = formatDistanceToNow(new Date(item.created_at), { addSuffix: true });
  const defaultImage = "https://placehold.co/800x600/e2e8f0/94a3b8?text=No+Image";

  return (
    <div className="item-card">
      <div className="card-img-container">
        <img
          src={item.images.length > 0 ? item.images[0] : defaultImage}
          alt={item.title}
          className="card-img"
        />
        <div className="absolute top-0 right-0 m-2 px-2 py-1 rounded text-xs font-semibold bg-white shadow-sm">
          {item.status === "lost" ? (
            <span className="text-red-500">Lost</span>
          ) : (
            <span className="text-green-600">Found</span>
          )}
        </div>
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{item.title}</h3>
        
        <div className="card-location">
          <MapPin className="h-3.5 w-3.5" />
          <span>{item.city}</span>
        </div>
        
        <p className="card-description">{item.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-xs text-gray-500">
            <Clock className="mr-1 h-3.5 w-3.5" />
            <span>{timeAgo}</span>
          </div>
          
          <Link 
            to={`/item/${item.id}`}
            className="text-sm text-foundit-purple hover:text-foundit-purpleDark hover:underline"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
