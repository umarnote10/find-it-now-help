
import { Link } from "react-router-dom";
import { MapPin, Clock, Shield, Award } from "lucide-react";
import { ItemType } from "@/types";
import { formatDistanceToNow } from "date-fns";

interface ItemCardProps {
  item: ItemType;
}

const ItemCard = ({ item }: ItemCardProps) => {
  const timeAgo = formatDistanceToNow(new Date(item.created_at), { addSuffix: true });
  
  const profileImage = item.user_profile_image || `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`;

  return (
    <div className="group relative overflow-hidden rounded-xl bg-white border border-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-foundit-secondary/20">
      <Link to={`/item/${item.id}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={item.images.length > 0 ? item.images[0] : "https://placehold.co/800x600/e2e8f0/94a3b8?text=No+Image"}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Status Badge */}
          <div className="absolute top-3 right-3">
            {item.status === "lost" ? (
              <span className="px-3 py-1 text-xs font-medium bg-red-500 text-white rounded-full shadow-lg">
                Lost
              </span>
            ) : (
              <span className="px-3 py-1 text-xs font-medium bg-green-500 text-white rounded-full shadow-lg">
                Found
              </span>
            )}
          </div>
          
          {/* Reward Badge */}
          {item.reward_note && (
            <div className="absolute bottom-3 left-3">
              <div className="flex items-center gap-1 px-3 py-1 bg-foundit-accent text-white rounded-full text-xs font-medium shadow-lg">
                <Award className="h-3.5 w-3.5" />
                <span>Reward</span>
              </div>
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-foundit-dark mb-2 line-clamp-1 group-hover:text-foundit-secondary transition-colors">
            {item.title}
          </h3>
          
          <div className="flex items-center gap-2 text-sm text-foundit-muted mb-3">
            <MapPin className="h-4 w-4 text-foundit-secondary" />
            <span className="font-medium">{item.city}</span>
          </div>
          
          <p className="text-sm text-gray-600 line-clamp-2 mb-4 min-h-[40px]">
            {item.description}
          </p>
          
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img 
                  src={profileImage}
                  alt={item.user_name || "User"} 
                  className="h-8 w-8 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="flex items-center text-xs text-gray-500">
                <Clock className="mr-1 h-3.5 w-3.5" />
                <span>{timeAgo}</span>
              </div>
            </div>
            
            <span className="text-sm font-medium text-foundit-secondary group-hover:text-foundit-primary transition-colors">
              View Details →
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ItemCard;
