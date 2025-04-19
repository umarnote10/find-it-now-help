
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
  Clock,
  Share2,
  Heart,
  AlertTriangle,
  Flag,
  Map,
  Home
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ItemType } from "@/types";
import { formatDistanceToNow, format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { MOCK_ITEMS_PAKISTAN } from "@/data/mockItems";

const ItemDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<ItemType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isSaved, setIsSaved] = useState(false);
  
  useEffect(() => {
    const fetchItem = async () => {
      setIsLoading(true);
      try {
        // In a real app, this would be a fetch call to Supabase
        setTimeout(() => {
          const fetchedItem = MOCK_ITEMS_PAKISTAN.find(item => item.id === id);
          setItem(fetchedItem || null);
          setIsLoading(false);
        }, 800);
      } catch (error) {
        console.error("Error fetching item details:", error);
        setIsLoading(false);
      }
    };

    if (id) {
      fetchItem();
    }
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
            <div className="aspect-[4/3] bg-gray-200 rounded-xl"></div>
            
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
            <Button className="bg-foundit-primary hover:bg-foundit-primary/90">
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
        <Link to={item.status === "lost" ? "/lost-items" : "/found-items"} className="inline-flex items-center text-foundit-secondary hover:text-foundit-primary">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to {item.status === "lost" ? "Lost" : "Found"} Items
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div>
          <div className="relative aspect-[4/3] bg-gray-50 rounded-xl overflow-hidden border border-gray-100 shadow-md">
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
                  className="h-10 w-10 rounded-full bg-black/30 text-white hover:bg-black/50 ml-2"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={handleNextImage}
                  disabled={activeImageIndex === item.images.length - 1}
                  className="h-10 w-10 rounded-full bg-black/30 text-white hover:bg-black/50 mr-2"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            )}
            
            <div className="absolute top-3 right-3 flex space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full bg-white/80 text-gray-700 hover:bg-white shadow-sm"
                onClick={() => setIsSaved(!isSaved)}
              >
                <Heart className={`h-5 w-5 ${isSaved ? "fill-red-500 text-red-500" : ""}`} />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full bg-white/80 text-gray-700 hover:bg-white shadow-sm"
              >
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Thumbnails */}
          {item.images.length > 1 && (
            <div className="flex mt-4 gap-2 overflow-x-auto pb-2">
              {item.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden ${
                    index === activeImageIndex
                      ? "ring-2 ring-foundit-secondary shadow-md"
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
          
          {/* User Information */}
          <div className="mt-6 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center">
              <div className="mr-3">
                <img 
                  src={item.user_profile_image || `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`} 
                  alt={item.user_name || "User"}
                  className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-md"
                />
              </div>
              <div>
                <h4 className="font-medium">{item.user_name || "Anonymous User"}</h4>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="mr-1 h-4 w-4" />
                  <span>Posted {timeAgo}</span>
                </div>
              </div>
            </div>
            
            {/* Report button */}
            <div className="mt-4 border-t pt-4">
              <Button variant="ghost" className="text-gray-600 hover:text-red-600 w-full justify-start">
                <Flag className="h-4 w-4 mr-2" />
                Report this listing
              </Button>
            </div>
          </div>
        </div>
        
        {/* Item Details */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <Badge className={`${
                item.status === "lost" 
                  ? "bg-red-100 text-red-800 hover:bg-red-100" 
                  : "bg-green-100 text-green-800 hover:bg-green-100"
                } px-3 py-1 text-xs font-medium`}
              >
                {item.status === "lost" ? "Lost Item" : "Found Item"}
              </Badge>
              
              <Badge variant="outline" className="px-3 py-1 text-xs font-medium">
                ID: {item.id}
              </Badge>
            </div>
            
            <h1 className="text-2xl md:text-3xl font-bold mb-4">{item.title}</h1>
            
            <div className="flex items-center text-gray-600 mb-5">
              <Calendar className="h-4 w-4 mr-1" />
              <span title={formattedDate}>{timeAgo}</span>
            </div>
            
            <div className="flex items-start mb-5 bg-gray-50 p-4 rounded-lg">
              <MapPin className="h-5 w-5 mr-3 text-foundit-secondary mt-0.5" />
              <div>
                <p className="font-medium text-foundit-dark">{item.location}</p>
                <p className="text-foundit-muted">{item.city}, Pakistan</p>
              </div>
            </div>
            
            {item.reward_note && (
              <div className="flex items-start mb-5 bg-yellow-50 p-4 rounded-lg">
                <Gift className="h-5 w-5 mr-3 text-amber-600 mt-0.5" />
                <div>
                  <p className="font-medium text-amber-800">Reward Offered</p>
                  <p className="text-amber-700">{item.reward_note}</p>
                </div>
              </div>
            )}
          </div>
          
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3">Description</h2>
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
                Opens WhatsApp to start a conversation with {item.user_name || "the user"}
              </p>
            </div>
          )}
          
          {/* Safety Alert */}
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start">
            <AlertTriangle className="h-5 w-5 text-amber-600 mr-3 mt-0.5" />
            <div className="text-sm">
              <p className="font-medium text-amber-800 mb-1">Safety First</p>
              <p className="text-amber-700">
                For your safety, please meet in public places like shopping malls, police stations or cafés during daytime. 
                Don't share personal or financial information unnecessarily.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Map Section */}
      {(item.latitude && item.longitude) && (
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Location</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl h-80 flex items-center justify-center">
            <div className="text-center">
              <Map className="h-12 w-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500 max-w-md mx-auto">
                Interactive map will be displayed here with the location marker for this item.
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Approximate location shown. Contact the user for exact details.
          </p>
        </div>
      )}
      
      <div className="mt-12 text-center">
        <div className="bg-gray-50 rounded-xl p-6 md:p-10 max-w-3xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            {item.status === "lost" ? "Have you found this item?" : "Is this your lost item?"}
          </h3>
          <p className="text-gray-600 mb-6">
            {item.status === "lost" 
              ? "If you've found this item, please contact the owner directly using the WhatsApp button above." 
              : "If this is your lost item, contact the finder immediately using the WhatsApp button above."}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={item.status === "lost" ? "/post/found" : "/post/lost"}>
              <Button className="bg-gradient-main hover:opacity-90 px-6">
                {item.status === "lost" ? "Report a Found Item" : "Report a Lost Item"}
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" className="border-foundit-secondary text-foundit-secondary hover:bg-foundit-secondary hover:text-white px-6">
                <Home className="mr-2 h-4 w-4" />
                Go to Homepage
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailPage;
