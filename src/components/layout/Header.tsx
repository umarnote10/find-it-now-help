
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./MobileNav";
import { Search, MapPin, Hand, User } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="foundit-container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <MapPin className="h-6 w-6 text-foundit-purple" />
            <span className="font-bold text-xl text-foundit-purpleDark">Found It</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          <form onSubmit={handleSearch} className="relative mr-2">
            <input 
              type="text" 
              placeholder="Search items..." 
              className="w-40 lg:w-64 pl-8 pr-2 py-1.5 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-foundit-purple focus:border-transparent text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </form>
          
          <nav className="flex items-center space-x-1">
            <Link to="/lost-items">
              <Button variant="ghost" size="sm" className="text-gray-700 hover:text-foundit-purple">
                Lost Items
              </Button>
            </Link>
            <Link to="/found-items">
              <Button variant="ghost" size="sm" className="text-gray-700 hover:text-foundit-purple">
                Found Items
              </Button>
            </Link>
            <Link to="/post/lost">
              <Button variant="ghost" size="sm" className="flex items-center text-gray-700 hover:text-foundit-purple">
                <MapPin className="mr-1 h-4 w-4" />
                <span>Report Lost</span>
              </Button>
            </Link>
            <Link to="/post/found">
              <Button variant="ghost" size="sm" className="flex items-center text-gray-700 hover:text-foundit-purple">
                <Hand className="mr-1 h-4 w-4" />
                <span>Report Found</span>
              </Button>
            </Link>
            
            {/* Login/Signup Buttons */}
            <Link to="/auth">
              <Button variant="ghost" size="sm" className="flex items-center text-gray-700 hover:text-foundit-purple">
                <User className="mr-1 h-4 w-4" />
                <span>Login</span>
              </Button>
            </Link>
            <Link to="/auth?tab=register">
              <Button size="sm" className="bg-foundit-purple hover:bg-foundit-purpleDark text-white">
                Sign Up
              </Button>
            </Link>
          </nav>
        </div>

        {/* Mobile Nav Trigger */}
        <div className="flex md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
