
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { 
  Hand, 
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
import ImageUploader from "@/components/forms/ImageUploader";
import CitySelector from "@/components/forms/CitySelector";
import { pakistaniCities } from "@/data/pakistanCities";

const CreateFoundItemPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    city: "",
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
        description: "Please enter a title for the found item.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }
    
    if (!formData.location.trim()) {
      toast({
        title: "Location is required",
        description: "Please specify where you found the item.",
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
    // 2. Create a record in the found_items table with formData and image URLs
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted with:", formData);
      
      // Success toast
      toast({
        title: "Item reported successfully",
        description: "Your found item has been reported. The owner may contact you soon.",
      });
      
      setIsSubmitting(false);
      
      // Redirect to found items page
      navigate("/found-items");
    }, 1500);
  };
  
  return (
    <div className="foundit-container py-8">
      <Helmet>
        <title>Report Found Item | Found It</title>
        <meta
          name="description"
          content="Report a found item on Found It and help reunite it with its owner."
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
        <Hand className="h-6 w-6 mr-2 text-green-600" />
        <h1 className="text-3xl font-bold">Report Found Item</h1>
      </div>
      
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Found Item Details</CardTitle>
          <CardDescription>
            Please provide information about the item you found to help the owner identify it.
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="e.g., Found iPhone in Blue Case"
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
                placeholder="Provide details about the item you found, when and where you found it, and any other relevant information."
                rows={5}
                value={formData.description}
                onChange={handleChange}
                required
              />
              <p className="text-xs text-gray-500">
                Include details that would help the owner identify the item, but omit key identifying features that only the owner would know.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CitySelector 
                onCitySelect={handleCitySelect} 
                initialCity={formData.city} 
                cities={pakistaniCities}
              />
              
              <div className="space-y-2">
                <Label htmlFor="location">Location Found</Label>
                <Input
                  id="location"
                  name="location"
                  placeholder="e.g., Central Park, near the fountain"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
                <p className="text-xs text-gray-500">
                  Specify where you found the item
                </p>
              </div>
            </div>
            
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
            
            <ImageUploader onImagesChange={handleImagesChange} />
            
            <div className="border-t pt-6">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Report Found Item"
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
      
      <div className="mt-8 p-6 bg-blue-50 rounded-lg max-w-3xl mx-auto">
        <h2 className="text-lg font-semibold mb-2 text-blue-800">Important: Safety First</h2>
        <p className="text-sm text-blue-700 mb-4">
          When reporting a found item and connecting with potential owners:
        </p>
        <ul className="list-disc list-inside text-sm text-blue-700 space-y-2">
          <li>Meet in public, well-lit places to return items</li>
          <li>Consider police stations or community centers for high-value items</li>
          <li>Don't reveal all identifying details in your post - keep some information that only the true owner would know</li>
          <li>Trust your instincts and prioritize your safety</li>
        </ul>
      </div>
    </div>
  );
};

export default CreateFoundItemPage;
