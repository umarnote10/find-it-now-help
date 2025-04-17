import { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { 
  MapPin, 
  ArrowLeft,
  Loader2,
  CircleHelp,
  Info,
  Upload,
  MapPinned,
  MessageSquare,
  Gift,
  CalendarClock,
  ShieldCheck
} from "lucide-react";
import { 
  Card, 
  CardContent,
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import MapPicker from "@/components/forms/MapPicker";
import ImageUploader from "@/components/forms/ImageUploader";
import CitySelector from "@/components/forms/CitySelector";
import { pakistaniCities } from "@/data/pakistanCities";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const CreateLostItemPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    city: "",
    rewardNote: "",
    whatsappNumber: "",
    images: [] as File[],
    date: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLocationSelect = (location: string) => {
    setFormData((prev) => ({
      ...prev,
      location,
    }));
  };

  const handleCitySelect = (city: string) => {
    setFormData((prev) => ({
      ...prev,
      city,
    }));
  };

  const handleImagesChange = (images: File[]) => {
    setFormData((prev) => ({
      ...prev,
      images,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validation
    if (!formData.title.trim()) {
      toast({
        title: "Title is required",
        description: "Please enter a title for your lost item.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }
    
    if (!formData.location.trim()) {
      toast({
        title: "Location is required",
        description: "Please specify where you lost the item.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }
    
    if (!formData.city.trim()) {
      toast({
        title: "City is required",
        description: "Please select a city.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }
    
    // In a real app, here we would:
    // 1. Upload images to Supabase Storage
    // 2. Create a record in the lost_items table with formData and image URLs
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted with:", formData);
      
      // Success toast
      toast({
        title: "Item reported successfully",
        description: "Your lost item has been reported. You'll be notified if someone finds it.",
      });
      
      setIsSubmitting(false);
      
      // Redirect to lost items page
      navigate("/lost-items");
    }, 1500);
  };
  
  return (
    <div className="foundit-container py-8">
      <Helmet>
        <title>Report Lost Item | Found It</title>
        <meta
          name="description"
          content="Report a lost item on Found It and increase your chances of getting it back."
        />
      </Helmet>
      
      <div className="mb-6">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center text-foundit-secondary hover:text-foundit-primary transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </button>
      </div>
      
      <div className="flex items-center mb-8">
        <div className="bg-red-100 p-2 rounded-lg mr-3">
          <MapPin className="h-6 w-6 text-red-600" />
        </div>
        <h1 className="text-3xl font-bold">Report Lost Item</h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="col-span-2 border-t-4 border-t-red-500 shadow-card">
          <CardHeader>
            <CardTitle>Lost Item Details</CardTitle>
            <CardDescription>
              Please provide as much information as possible to help others identify your lost item.
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="title">Item Title*</Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <CircleHelp className="h-4 w-4 text-gray-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="w-80">Add a short, descriptive title that includes the item type and distinctive features</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Input
                  id="title"
                  name="title"
                  placeholder="e.g., Lost Black Leather Wallet with CNIC"
                  value={formData.title}
                  onChange={handleChange}
                  className="input-field"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="description">Description*</Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <CircleHelp className="h-4 w-4 text-gray-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="w-80">Include detailed item description, when and where you lost it, and any other relevant information</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Provide details about your lost item, when and where you lost it, and any other relevant information."
                  rows={5}
                  value={formData.description}
                  onChange={handleChange}
                  className="input-field resize-none"
                  required
                />
                <p className="text-xs text-gray-500">
                  Be specific about identifying features, contents, and circumstances.
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="date">
                    When did you lose it? <span className="text-gray-500 text-xs">(Optional)</span>
                  </Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <CircleHelp className="h-4 w-4 text-gray-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Specify when you lost the item to help with identification</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="relative">
                  <CalendarClock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="input-field pl-10"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="city">City*</Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <CircleHelp className="h-4 w-4 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Select the city where you lost the item</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <CitySelector 
                    onCitySelect={handleCitySelect} 
                    initialCity={formData.city} 
                    cities={pakistaniCities}
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="location">Specific Location*</Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <CircleHelp className="h-4 w-4 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Enter the specific location where you lost the item (mall, park, restaurant, etc.)</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <div className="relative">
                    <MapPinned className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="location"
                      name="location"
                      placeholder="e.g., Centaurus Mall Food Court"
                      value={formData.location}
                      onChange={(e) => handleLocationSelect(e.target.value)}
                      className="input-field pl-10"
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="whatsappNumber">
                    WhatsApp Number <span className="text-gray-500 text-xs">(Recommended)</span>
                  </Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <CircleHelp className="h-4 w-4 text-gray-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Add your WhatsApp number so people can contact you directly if they find your item</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="whatsappNumber"
                    name="whatsappNumber"
                    placeholder="e.g., +923001234567"
                    value={formData.whatsappNumber}
                    onChange={handleChange}
                    type="tel"
                    className="input-field pl-10"
                  />
                </div>
                <p className="text-xs text-gray-500">
                  Include country code for direct WhatsApp contact
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="rewardNote">
                    Reward Note <span className="text-gray-500 text-xs">(Optional)</span>
                  </Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <CircleHelp className="h-4 w-4 text-gray-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Specify any reward you're willing to offer for the return of your item</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="relative">
                  <Gift className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="rewardNote"
                    name="rewardNote"
                    placeholder="e.g., Rs. 5,000 reward for safe return"
                    value={formData.rewardNote}
                    onChange={handleChange}
                    className="input-field pl-10"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>
                    Upload Photos <span className="text-gray-500 text-xs">(Optional but Recommended)</span>
                  </Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <CircleHelp className="h-4 w-4 text-gray-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Upload clear images of your item to help with identification</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <ImageUploader onImagesChange={handleImagesChange} />
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-main hover:opacity-90 text-base py-6"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Upload className="mr-2 h-5 w-5" />
                      Report Lost Item
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
        
        {/* Tips Section */}
        <div className="col-span-1 space-y-6">
          <Card className="border-t-4 border-t-amber-500 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Info className="mr-2 h-5 w-5 text-amber-500" />
                Tips for Finding Lost Items
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-amber-100 rounded-full p-1 mr-2 mt-0.5">
                    <span className="text-amber-600 text-xs font-bold">1</span>
                  </div>
                  <span className="text-sm">
                    <span className="font-medium">Be specific</span> in your description, including brand, color, and unique features.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-amber-100 rounded-full p-1 mr-2 mt-0.5">
                    <span className="text-amber-600 text-xs font-bold">2</span>
                  </div>
                  <span className="text-sm">
                    <span className="font-medium">Add clear photos</span> from different angles if you have them.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-amber-100 rounded-full p-1 mr-2 mt-0.5">
                    <span className="text-amber-600 text-xs font-bold">3</span>
                  </div>
                  <span className="text-sm">
                    <span className="font-medium">Act quickly</span> - the sooner you report, the higher the chances of recovery.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-amber-100 rounded-full p-1 mr-2 mt-0.5">
                    <span className="text-amber-600 text-xs font-bold">4</span>
                  </div>
                  <span className="text-sm">
                    <span className="font-medium">Include a reward</span> to increase motivation for people to return your item.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-amber-100 rounded-full p-1 mr-2 mt-0.5">
                    <span className="text-amber-600 text-xs font-bold">5</span>
                  </div>
                  <span className="text-sm">
                    <span className="font-medium">Check regularly</span> for new "Found" listings that match your lost item.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-t-4 border-t-green-500 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <ShieldCheck className="mr-2 h-5 w-5 text-green-600" />
                Safety Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-2 mt-0.5">
                    <CheckCircle className="h-3 w-3 text-green-600" />
                  </div>
                  <span>Meet in public places during daylight hours</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-2 mt-0.5">
                    <CheckCircle className="h-3 w-3 text-green-600" />
                  </div>
                  <span>Take a friend with you if possible</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-2 mt-0.5">
                    <CheckCircle className="h-3 w-3 text-green-600" />
                  </div>
                  <span>Verify the item is truly yours before offering payment</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-2 mt-0.5">
                    <CheckCircle className="h-3 w-3 text-green-600" />
                  </div>
                  <span>Report suspicious behavior to authorities</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CreateLostItemPage;

function CheckCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
