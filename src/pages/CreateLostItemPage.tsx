
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { 
  MapPin, 
  ArrowLeft,
  Loader2
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
          className="inline-flex items-center text-foundit-purple hover:text-foundit-purpleDark"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </button>
      </div>
      
      <div className="flex items-center mb-6">
        <MapPin className="h-6 w-6 mr-2 text-foundit-purple" />
        <h1 className="text-3xl font-bold">Report Lost Item</h1>
      </div>
      
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Lost Item Details</CardTitle>
          <CardDescription>
            Please provide as much information as possible to help others identify your lost item.
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="e.g., Lost Black Wallet with ID Cards"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Provide details about your lost item, when and where you lost it, and any other relevant information."
                rows={5}
                value={formData.description}
                onChange={handleChange}
                required
              />
              <p className="text-xs text-gray-500">
                Be specific about identifying features, contents, and circumstances.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CitySelector 
                onCitySelect={handleCitySelect} 
                initialCity={formData.city} 
              />
              
              <div className="space-y-2">
                <Label htmlFor="whatsappNumber">WhatsApp Number (Optional)</Label>
                <Input
                  id="whatsappNumber"
                  name="whatsappNumber"
                  placeholder="e.g., +1 (123) 456-7890"
                  value={formData.whatsappNumber}
                  onChange={handleChange}
                  type="tel"
                />
                <p className="text-xs text-gray-500">
                  Include country code for direct WhatsApp contact
                </p>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="rewardNote">Reward Note (Optional)</Label>
              <Input
                id="rewardNote"
                name="rewardNote"
                placeholder="e.g., $50 reward for safe return"
                value={formData.rewardNote}
                onChange={handleChange}
              />
            </div>
            
            <MapPicker onLocationSelect={handleLocationSelect} initialLocation={formData.location} />
            
            <ImageUploader onImagesChange={handleImagesChange} />
            
            <div className="border-t pt-6">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-foundit-purple hover:bg-foundit-purpleDark"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Report Lost Item"
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateLostItemPage;
