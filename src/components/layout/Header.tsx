
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./MobileNav";
import { Search, MapPin, Hand, Menu, User, LogOut } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { currentUser, logOut } = useAuth();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  // Get user initials for the avatar
  const getUserInitials = () => {
    if (!currentUser?.displayName) return "U";
    return currentUser.displayName
      .split(" ")
      .map(n => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="foundit-container flex h-16 items-center justify-between">
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
            
            {currentUser ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={currentUser.photoURL || undefined} />
                      <AvatarFallback className="bg-foundit-purple text-white">
                        {getUserInitials()}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <div className="px-2 py-1.5 text-sm font-medium">
                    {currentUser.displayName || currentUser.email}
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="w-full cursor-pointer">My Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/my-items" className="w-full cursor-pointer">My Items</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-red-500 focus:text-red-500">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Sign Out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/auth">
                <Button size="sm" className="bg-foundit-purple hover:bg-foundit-purpleDark">
                  Sign In
                </Button>
              </Link>
            )}
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
