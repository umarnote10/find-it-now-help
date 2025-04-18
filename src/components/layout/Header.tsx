
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
    <header className="sticky top-0 z-50 w-full border-b bg-[#08203e] text-white">
      <div className="foundit-container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <MapPin className="h-6 w-6 text-[#557c93]" />
            <span className="font-bold text-xl text-white">Found It</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          <form onSubmit={handleSearch} className="relative mr-4">
            <input 
              type="text" 
              placeholder="Search items..." 
              className="w-80 pl-10 pr-4 py-2 rounded-lg border border-[#557c93] bg-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#557c93] focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#557c93]" />
          </form>
          
          <nav className="flex items-center space-x-2">
            <Link to="/lost-items">
              <Button variant="ghost" className="text-gray-200 hover:text-white hover:bg-[#557c93]">
                Lost Items
              </Button>
            </Link>
            <Link to="/found-items">
              <Button variant="ghost" className="text-gray-200 hover:text-white hover:bg-[#557c93]">
                Found Items
              </Button>
            </Link>
            <Link to="/auth">
              <Button variant="ghost" className="text-gray-200 hover:text-white hover:bg-[#557c93]">
                <User className="mr-2 h-4 w-4" />
                Login
              </Button>
            </Link>
            <Link to="/auth?tab=register">
              <Button className="bg-[#557c93] hover:bg-[#211f2f] text-white">
                Sign Up
              </Button>
            </Link>
          </nav>
        </div>

        {/* Mobile Nav */}
        <div className="flex md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
