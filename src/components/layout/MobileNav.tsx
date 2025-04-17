
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Hand, Menu, X, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setOpen(false);
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col h-full w-[80vw] sm:max-w-sm">
        <div className="flex items-center justify-between mb-6">
          <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <MapPin className="h-5 w-5 text-foundit-purple" />
            <span className="font-bold text-lg">Found It</span>
          </Link>
          <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <form onSubmit={handleSearch} className="mb-4">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              type="text" 
              placeholder="Search items..." 
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </form>
        
        <div className="space-y-1">
          <Link
            to="/auth"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 py-3 px-4 rounded-md hover:bg-foundit-purple hover:text-white transition"
          >
            <User className="h-4 w-4" />
            <span>Sign In</span>
          </Link>
          <Link
            to="/lost-items"
            onClick={() => setOpen(false)}
            className="block py-3 px-4 rounded-md hover:bg-gray-100 transition"
          >
            Lost Items
          </Link>
          <Link
            to="/found-items"
            onClick={() => setOpen(false)}
            className="block py-3 px-4 rounded-md hover:bg-gray-100 transition"
          >
            Found Items
          </Link>
          <Link
            to="/post/lost"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 py-3 px-4 rounded-md hover:bg-gray-100 transition"
          >
            <MapPin className="h-4 w-4" />
            <span>Report Lost Item</span>
          </Link>
          <Link
            to="/post/found"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 py-3 px-4 rounded-md hover:bg-gray-100 transition"
          >
            <Hand className="h-4 w-4" />
            <span>Report Found Item</span>
          </Link>
        </div>
        
        <div className="mt-auto pt-6 border-t">
          <div className="grid grid-cols-2 gap-2 mb-2">
            <Link 
              to="/about" 
              onClick={() => setOpen(false)}
              className="text-sm text-gray-600 hover:text-foundit-purple"
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              onClick={() => setOpen(false)}
              className="text-sm text-gray-600 hover:text-foundit-purple"
            >
              Contact Us
            </Link>
            <Link 
              to="/privacy" 
              onClick={() => setOpen(false)}
              className="text-sm text-gray-600 hover:text-foundit-purple"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              onClick={() => setOpen(false)}
              className="text-sm text-gray-600 hover:text-foundit-purple"
            >
              Terms of Use
            </Link>
          </div>
          <div className="text-xs text-center text-gray-500 mt-4">
            © 2025 Found It. All rights reserved.
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
