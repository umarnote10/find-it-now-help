
import { Link } from "react-router-dom";
import { MapPin, Clock, Shield, Award } from "lucide-react";
import { ItemType } from "@/types";
import { formatDistanceToNow } from "date-fns";
import { cn } from "@/lib/utils";

interface ItemCardProps {
  item: ItemType;
}

const ItemCard = ({ item }: ItemCardProps) => {
  const timeAgo = formatDistanceToNow(new Date(item.created_at), { addSuffix: true });
  const profileImage = item.user_profile_image || `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`;

  return (
    <div className="item-card group animate-fade">
      <div className="relative overflow-hidden rounded-xl">
        <div className="card-img-container aspect-[4/3] overflow-hidden">
          <img
            src={item.images[0]}
            alt={item.title}
            className="card-img w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        
        <div className="absolute top-0 right-0 m-2">
          {item.status === "lost" ? (
            <span className="badge-lost bg-red-500 text-white px-2 py-1 rounded-md text-xs font-medium">
              Lost
            </span>
          ) : (
            <span className="badge-found bg-green-500 text-white px-2 py-1 rounded-md text-xs font-medium">
              Found
            </span>
          )}
        </div>
        
        {item.reward_note && (
          <div className="absolute bottom-0 left-0 m-2 bg-foundit-accent/90 text-white px-2 py-1 rounded-md text-xs flex items-center">
            <Award className="h-3 w-3 mr-1" />
            <span>Reward</span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className={cn(
          "text-lg font-semibold mb-2 line-clamp-2 group-hover:text-foundit-secondary transition-colors",
          item.language === 'ur' ? "font-urdu text-right" : ""
        )}>
          {item.title}
        </h3>
        
        <div className={cn(
          "flex items-start space-x-1 mb-2",
          item.language === 'ur' ? "flex-row-reverse space-x-reverse" : ""
        )}>
          <MapPin className="h-4 w-4 mt-1 text-foundit-secondary flex-shrink-0" />
          <span className={cn(
            "text-sm text-gray-600",
            item.language === 'ur' ? "font-urdu" : ""
          )}>
            {item.city}, {item.location}
          </span>
        </div>
        
        <p className={cn(
          "text-sm text-gray-500 mb-4 line-clamp-2",
          item.language === 'ur' ? "font-urdu text-right" : ""
        )}>
          {item.description}
        </p>
        
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full overflow-hidden border-2 border-white shadow-sm">
              <img 
                src={profileImage}
                alt={item.user_name || "User"} 
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
            {item.language === 'ur' ? "تفصیلات دیکھیں" : "View Details"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
