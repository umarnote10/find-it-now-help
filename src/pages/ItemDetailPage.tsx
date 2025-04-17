
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { 
  MapPin, 
  Calendar, 
  MessageSquare, 
  ArrowLeft,
  Gift,
  ImageIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ItemType } from "@/types";
import { formatDistanceToNow, format } from "date-fns";
import { Badge } from "@/components/ui/badge";

// Sample data for development - this would come from Supabase in a real app
const MOCK_ITEMS: Record<string, ItemType> = {
  "1": {
    id: "1",
    title: "Lost Black Wallet with ID Cards",
    description: "I lost my black leather wallet at Central Park near the fountain. It has my driver's license and credit cards inside. The wallet is made of genuine leather with a small scratch on the front. I believe I lost it around 2 PM while sitting on a bench near the fountain. If found, please contact me as soon as possible as I need my ID for travel next week.",
    status: "lost",
    location: "Central Park, near the fountain",
    city: "New York",
    latitude: 40.785091,
    longitude: -73.968285,
    whatsapp_number: "+1234567890",
    reward_note: "$50 reward for safe return",
    images: [
      "https://placehold.co/800x600/e2e8f0/94a3b8?text=Wallet+Front",
      "https://placehold.co/800x600/e2e8f0/94a3b8?text=Wallet+Back"
    ],
    created_at: new Date(Date.now() - 86400000 * 2).toISOString(), // 2 days ago
    user_id: "user1"
  },
  "5": {
    id: "5",
    title: "Found iPhone in Blue Case",
    description: "Found an iPhone with a blue case at Starbucks on 5th Avenue. It was left on a table near the window. The phone is locked but still receiving notifications. I've left my contact info with the Starbucks staff as well, but thought I'd post here too in case the owner is looking online.",
    status: "found",
    location: "Starbucks, 5th Avenue",
    city: "New York",
    latitude: 40.758896,
    longitude: -73.985130,
    whatsapp_number: "+1555666777",
    images: [
      "https://placehold.co/800x600/e2e8f0/94a3b8?text=iPhone+Front",
      "https://placehold.co/800x600/e2e8f0/94a3b8?text=iPhone+Case"
    ],
    created_at: new Date(Date.now() - 86400000 * 1).toISOString(), // 1 day ago
    user_id: "user5"
  }
};

const ItemDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<ItemType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  useEffect(() => {
    const fetchItem = async () => {
      setIsLoading(true);
      try {
        // In a real app, this would be a fetch call to Supabase
        setTimeout(() => {
          const fetchedItem = id ? MOCK_ITEMS[id] : null;
          setItem(fetchedItem || null);
          setIsLoading(false);
        }, 800);
      } catch (error) {
        console.error("Error fetching item details:", error);
        setIsLoading(false);
      }
    };

    fetchItem();
  }, [id]);
  
  const formatWhatsAppNumber = (number: string | undefined): string => {
    if (!number) return "";
    // Remove all non-digit characters
    return number.replace(/\D/g, "");
  };
  
  const getWhatsAppLink = (number: string | undefined): string => {
    const formattedNumber = formatWhatsAppNumber(number);
    return `https://wa.me/${formattedNumber}`;
  };
  
  const handleNextImage = () => {
    if (item && activeImageIndex < item.images.length - 1) {
      setActiveImageIndex(activeImageIndex + 1);
    }
  };
  
  const handlePrevImage = () => {
    if (activeImageIndex > 0) {
      setActiveImageIndex(activeImageIndex - 1);
    }
  };
  
  if (isLoading) {
    return (
      <div className="foundit-container py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 w-1/2 rounded mb-6"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-[4/3] bg-gray-200 rounded-lg"></div>
            
            <div className="space-y-4">
              <div className="h-8 bg-gray-200 w-3/4 rounded"></div>
              <div className="h-4 bg-gray-200 w-1/2 rounded"></div>
              <div className="h-4 bg-gray-200 w-1/3 rounded"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 w-full rounded"></div>
                <div className="h-4 bg-gray-200 w-full rounded"></div>
                <div className="h-4 bg-gray-200 w-3/4 rounded"></div>
              </div>
              <div className="h-10 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (!item) {
    return (
      <div className="foundit-container py-8">
        <div className="text-center py-12">
          <h1 className="text-3xl font-bold mb-4">Item Not Found</h1>
          <p className="text-gray-600 mb-6">Sorry, the item you're looking for doesn't exist or has been removed.</p>
          <Link to="/">
            <Button className="bg-foundit-purple hover:bg-foundit-purpleDark">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  const timeAgo = formatDistanceToNow(new Date(item.created_at), { addSuffix: true });
  const formattedDate = format(new Date(item.created_at), 'PPP');
  
  return (
    <div className="foundit-container py-8">
      <Helmet>
        <title>{item.title} | Found It</title>
        <meta name="description" content={item.description.substring(0, 160)} />
      </Helmet>
      
      <div className="mb-6">
        <Link to={item.status === "lost" ? "/lost-items" : "/found-items"} className="inline-flex items-center text-foundit-purple hover:text-foundit-purpleDark">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to {item.status === "lost" ? "Lost" : "Found"} Items
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div>
          <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
            {item.images.length > 0 ? (
              <img 
                src={item.images[activeImageIndex]} 
                alt={`${item.title} - Image ${activeImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <ImageIcon className="h-16 w-16 text-gray-300" />
              </div>
            )}
            
            {item.images.length > 1 && (
              <div className="absolute inset-0 flex items-center justify-between">
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={handlePrevImage}
                  disabled={activeImageIndex === 0}
                  className="h-10 w-10 rounded-full bg-white/80 text-gray-800 hover:bg-white ml-2"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={handleNextImage}
                  disabled={activeImageIndex === item.images.length - 1}
                  className="h-10 w-10 rounded-full bg-white/80 text-gray-800 hover:bg-white mr-2"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            )}
          </div>
          
          {/* Thumbnails */}
          {item.images.length > 1 && (
            <div className="flex mt-4 gap-2 overflow-x-auto pb-2">
              {item.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`w-20 h-20 flex-shrink-0 rounded overflow-hidden ${
                    index === activeImageIndex
                      ? "ring-2 ring-foundit-purple"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`Thumbnail ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Item Details */}
        <div>
          <div className="mb-4">
            <Badge className={`${
              item.status === "lost" 
                ? "bg-red-100 text-red-800 hover:bg-red-100" 
                : "bg-green-100 text-green-800 hover:bg-green-100"
              } mb-2`}
            >
              {item.status === "lost" ? "Lost Item" : "Found Item"}
            </Badge>
            
            <h1 className="text-3xl font-bold mb-2">{item.title}</h1>
            
            <div className="flex items-center text-gray-600 mb-4">
              <Calendar className="h-4 w-4 mr-1" />
              <span title={formattedDate}>{timeAgo}</span>
            </div>
            
            <div className="flex items-start mb-4">
              <MapPin className="h-5 w-5 mr-2 text-gray-600 mt-0.5" />
              <div>
                <p className="font-medium">{item.location}</p>
                <p className="text-gray-600">{item.city}</p>
              </div>
            </div>
            
            {item.reward_note && (
              <div className="flex items-start mb-4 bg-yellow-50 p-3 rounded-md">
                <Gift className="h-5 w-5 mr-2 text-yellow-600 mt-0.5" />
                <p className="text-yellow-800">{item.reward_note}</p>
              </div>
            )}
          </div>
          
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Description</h2>
            <p className="text-gray-700 whitespace-pre-line">{item.description}</p>
          </div>
          
          {item.whatsapp_number && (
            <div className="mt-8">
              <a 
                href={getWhatsAppLink(item.whatsapp_number)}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
              >
                <MessageSquare className="h-5 w-5" />
                <span>Contact via WhatsApp</span>
              </a>
              <p className="text-xs text-center text-gray-500 mt-2">
                Opens WhatsApp to start a conversation
              </p>
            </div>
          )}
        </div>
      </div>
      
      {/* Map Section - Placeholder for Google Maps integration */}
      {item.latitude && item.longitude && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Location</h2>
          <div className="aspect-[16/9] bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">
              Map will be displayed here using Google Maps SDK integration.
            </p>
          </div>
        </div>
      )}
      
      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">Did you lose something similar?</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/post/lost">
            <Button className="bg-foundit-purple hover:bg-foundit-purpleDark">
              <MapPin className="mr-2 h-4 w-4" />
              Report a Lost Item
            </Button>
          </Link>
          <Link to="/post/found">
            <Button variant="outline" className="border-foundit-purple text-foundit-purple hover:bg-foundit-purple hover:text-white">
              <MessageSquare className="mr-2 h-4 w-4" />
              Report a Found Item
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailPage;
