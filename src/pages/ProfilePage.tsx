
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { User, Phone, Image } from "lucide-react";
import { updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/lib/firebase";

const ProfilePage = () => {
  const { currentUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    displayName: currentUser?.displayName || "",
    whatsappNumber: currentUser?.phoneNumber || "",
    photoURL: currentUser?.photoURL || ""
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>(currentUser?.photoURL || "");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const uploadImage = async (file: File): Promise<string> => {
    const storageRef = ref(storage, `profile_images/${currentUser?.uid}/${file.name}`);
    await uploadBytes(storageRef, file);
    return getDownloadURL(storageRef);
  };

  const handleSave = async () => {
    if (!currentUser) return;
    
    setLoading(true);
    try {
      let photoURL = formData.photoURL;
      
      if (imageFile) {
        photoURL = await uploadImage(imageFile);
      }

      await updateProfile(currentUser, {
        displayName: formData.displayName,
        photoURL: photoURL,
      });
      
      toast.success("Profile updated successfully!");
      setIsEditing(false);
    } catch (error: any) {
      toast.error("Failed to update profile");
      console.error("Error updating profile:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="foundit-container py-8">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Profile Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="h-24 w-24 rounded-full bg-gradient-to-r from-[#5046E6] to-[#7B3DEE] flex items-center justify-center overflow-hidden">
                  {previewUrl ? (
                    <img 
                      src={previewUrl} 
                      alt="Profile" 
                      className="h-24 w-24 rounded-full object-cover"
                    />
                  ) : (
                    <User className="h-12 w-12 text-white" />
                  )}
                </div>
                {isEditing && (
                  <div className="absolute bottom-0 right-0">
                    <label htmlFor="profile-image" className="cursor-pointer">
                      <div className="h-8 w-8 rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-200 hover:bg-gray-50 transition-colors">
                        <Image className="h-4 w-4 text-foundit-purple" />
                      </div>
                      <input
                        type="file"
                        id="profile-image"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </label>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="displayName">Display Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="displayName"
                  value={formData.displayName}
                  onChange={(e) => setFormData(prev => ({ ...prev, displayName: e.target.value }))}
                  disabled={!isEditing || loading}
                  className="pl-10"
                  placeholder="Enter your name"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="whatsappNumber">WhatsApp Number</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="whatsappNumber"
                  value={formData.whatsappNumber}
                  onChange={(e) => setFormData(prev => ({ ...prev, whatsappNumber: e.target.value }))}
                  disabled={!isEditing || loading}
                  className="pl-10"
                  placeholder="+92 300 1234567"
                />
              </div>
            </div>

            <div className="flex justify-end gap-4">
              {isEditing ? (
                <>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsEditing(false);
                      setFormData({
                        displayName: currentUser?.displayName || "",
                        whatsappNumber: currentUser?.phoneNumber || "",
                        photoURL: currentUser?.photoURL || ""
                      });
                      setPreviewUrl(currentUser?.photoURL || "");
                      setImageFile(null);
                    }}
                    disabled={loading}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSave}
                    disabled={loading}
                    className="bg-gradient-to-r from-[#5046E6] to-[#7B3DEE] text-white hover:opacity-90 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                  >
                    Save Changes
                  </Button>
                </>
              ) : (
                <Button
                  onClick={() => setIsEditing(true)}
                  className="bg-gradient-to-r from-[#5046E6] to-[#7B3DEE] text-white hover:opacity-90 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                >
                  Edit Profile
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
