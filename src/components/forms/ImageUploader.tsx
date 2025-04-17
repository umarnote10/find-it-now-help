
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { X, Upload, Image as ImageIcon, Plus } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface ImageUploaderProps {
  onImagesChange: (images: File[]) => void;
  maxImages?: number;
}

const ImageUploader = ({ onImagesChange, maxImages = 5 }: ImageUploaderProps) => {
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    
    if (files.length === 0) return;
    
    if (images.length + files.length > maxImages) {
      toast({
        title: "Too many images",
        description: `You can upload a maximum of ${maxImages} images.`,
        variant: "destructive",
      });
      return;
    }

    // Validate file types
    const validFiles = files.filter((file) => {
      const validTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
      if (!validTypes.includes(file.type)) {
        toast({
          title: "Invalid file type",
          description: `${file.name} is not a valid image file. Please upload JPG, PNG, or WebP files.`,
          variant: "destructive",
        });
        return false;
      }
      
      // Check file size (limit to 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: `${file.name} exceeds the 5MB limit.`,
          variant: "destructive",
        });
        return false;
      }
      
      return true;
    });
    
    if (validFiles.length === 0) return;
    
    // Create image previews
    const newPreviews = validFiles.map((file) => URL.createObjectURL(file));
    
    // Update state
    const updatedImages = [...images, ...validFiles];
    const updatedPreviews = [...previews, ...newPreviews];
    
    setImages(updatedImages);
    setPreviews(updatedPreviews);
    onImagesChange(updatedImages);

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleRemoveImage = (index: number) => {
    // Revoke object URL to avoid memory leaks
    URL.revokeObjectURL(previews[index]);
    
    const updatedPreviews = [...previews];
    updatedPreviews.splice(index, 1);
    
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    
    setPreviews(updatedPreviews);
    setImages(updatedImages);
    onImagesChange(updatedImages);
  };

  const handleAddClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="font-medium text-sm">Photos</span>
          <span className="text-xs text-gray-500">
            {images.length}/{maxImages} images
          </span>
        </div>
        
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/jpeg,image/png,image/jpg,image/webp"
          multiple
          className="hidden"
          data-testid="image-upload-input"
        />
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {/* Upload button */}
          {images.length < maxImages && (
            <div
              onClick={handleAddClick}
              className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-foundit-purple transition-colors"
            >
              <Upload className="h-6 w-6 text-gray-400 mb-2" />
              <span className="text-xs text-center text-gray-500">Add Image</span>
            </div>
          )}
          
          {/* Image previews */}
          {previews.map((preview, index) => (
            <div key={index} className="relative aspect-square rounded-lg overflow-hidden border border-gray-200">
              <img
                src={preview}
                alt={`Preview ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-1 right-1 h-6 w-6 rounded-full"
                onClick={() => handleRemoveImage(index)}
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Remove image</span>
              </Button>
            </div>
          ))}
          
          {/* Empty slots */}
          {images.length === 0 && (
            <div className="aspect-square border border-gray-200 rounded-lg flex flex-col items-center justify-center bg-gray-50">
              <ImageIcon className="h-8 w-8 text-gray-300" />
              <span className="text-xs text-center text-gray-400 mt-2">No images yet</span>
            </div>
          )}
        </div>
        
        <p className="text-xs text-gray-500 mt-2">
          Upload clear photos of the item (max {maxImages} images, 5MB per image)
        </p>
      </div>
    </div>
  );
};

export default ImageUploader;
