
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16">
      <div className="text-center">
        <div className="inline-block p-6 bg-foundit-purple/10 rounded-full mb-6">
          <Search className="h-12 w-12 text-foundit-purple" />
        </div>
        
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/">
            <Button className="bg-foundit-purple hover:bg-foundit-purpleDark">
              Back to Home
            </Button>
          </Link>
          
          <Link to="/lost-items">
            <Button variant="outline" className="border-foundit-purple text-foundit-purple hover:bg-foundit-purple hover:text-white">
              Browse Lost Items
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
