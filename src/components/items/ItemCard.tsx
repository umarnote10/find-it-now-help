
import { Link } from "react-router-dom";
import { MapPin, Clock, Shield, Award } from "lucide-react";
import { ItemType } from "@/types";
import { formatDistanceToNow } from "date-fns";

interface ItemCardProps {
  item: ItemType;
}

const ItemCard = ({ item }: ItemCardProps) => {
  const timeAgo = formatDistanceToNow(new Date(item.created_at), { addSuffix: true });
  
  // Generate a random profile image if none is provided
  const profileImage = item.user_profile_image || `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`;

  return (
    <div className="item-card group animate-fade">
      <div className="card-img-container">
        <img
          src={item.images.length > 0 ? item.images[0] : "https://placehold.co/800x600/e2e8f0/94a3b8?text=No+Image"}
          alt={item.title}
          className="card-img"
        />
        <div className="absolute top-0 right-0 m-2">
          {item.status === "lost" ? (
            <span className="badge-lost">Lost</span>
          ) : (
            <span className="badge-found">Found</span>
          )}
        </div>
        
        {item.reward_note && (
          <div className="absolute bottom-0 left-0 m-2 bg-foundit-accent/90 text-white px-2 py-1 rounded-md text-xs flex items-center">
            <Award className="h-3 w-3 mr-1" />
            <span>Reward</span>
          </div>
        )}
      </div>
      
      <div className="card-content">
        <h3 className="card-title group-hover:text-foundit-secondary transition-colors">{item.title}</h3>
        
        <div className="card-location">
          <MapPin className="h-3.5 w-3.5 text-foundit-secondary" />
          <span className="font-medium">{item.city}</span>
        </div>
        
        <p className="card-description">{item.description}</p>
        
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full overflow-hidden border-2 border-white shadow-sm">
              <img 
                src={profileImage}
                alt="User" 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex items-center text-xs text-gray-500">
              <Clock className="mr-1 h-3.5 w-3.5" />
              <span>{timeAgo}</span>
            </div>
          </div>
          
          <Link 
            to={`/item/${item.id}`}
            className="text-sm font-medium text-foundit-secondary hover:text-foundit-primary hover:underline transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
