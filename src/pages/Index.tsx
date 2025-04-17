
import { Link } from "react-router-dom";
import { MapPin, Hand, Search, ArrowRight, Clock, MapPinned, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };
  
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-foundit-purple/10 via-foundit-lightBg to-white py-16 md:py-24">
        <div className="foundit-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foundit-darkBg mb-4">
                Lost something?<br />Let's find it together.
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                The simplest way to report lost items and reunite with your valuables. Direct contact via WhatsApp, no middleman.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <Link to="/post/lost">
                  <Button variant="default" className="w-full bg-foundit-purple hover:bg-foundit-purpleDark">
                    <MapPin className="mr-2 h-5 w-5" />
                    Report Lost Item
                  </Button>
                </Link>
                <Link to="/post/found">
                  <Button variant="outline" className="w-full border-foundit-purple text-foundit-purple hover:bg-foundit-purple hover:text-white">
                    <Hand className="mr-2 h-5 w-5" />
                    Report Found Item
                  </Button>
                </Link>
              </div>
              
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search for lost or found items..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-foundit-purple focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-foundit-purple hover:bg-foundit-purpleDark h-9">
                  Search
                </Button>
              </form>
            </div>
            
            <div className="hidden lg:block">
              <div className="relative">
                <div className="bg-white rounded-xl shadow-xl p-6 z-10 relative">
                  <div className="flex items-start gap-4">
                    <div className="bg-foundit-purple/10 rounded-full p-3">
                      <MapPin className="h-6 w-6 text-foundit-purple" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Lost item report</h3>
                      <p className="text-sm text-gray-600 mb-3">Black wallet with ID cards lost at Central Park</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="mr-1 h-4 w-4" /> Posted 2h ago
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-xl p-6 absolute top-40 right-20 z-20">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-50 rounded-full p-3">
                      <Hand className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Found an iPhone</h3>
                      <p className="text-sm text-gray-600 mb-3">iPhone 15 found at Coffee House</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPinned className="mr-1 h-4 w-4" /> Downtown
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-xl p-4 absolute bottom-10 left-20 z-20">
                  <div className="flex items-center gap-2">
                    <div className="bg-foundit-purple/10 rounded-full p-2">
                      <MessageSquare className="h-5 w-5 text-foundit-purple" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Direct WhatsApp contact</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="foundit-container">
          <h2 className="text-3xl font-bold text-center mb-12">How Found It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-foundit-purple">
              <CardContent className="pt-6">
                <div className="bg-foundit-purple/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-foundit-purple font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Report</h3>
                <p className="text-gray-600">
                  Report your lost item or something you found with detailed information and photos.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-foundit-purple">
              <CardContent className="pt-6">
                <div className="bg-foundit-purple/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-foundit-purple font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Connect</h3>
                <p className="text-gray-600">
                  Connect directly via WhatsApp when you find a match - no intermediaries.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-foundit-purple">
              <CardContent className="pt-6">
                <div className="bg-foundit-purple/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-foundit-purple font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Reunite</h3>
                <p className="text-gray-600">
                  Arrange a safe meeting to retrieve your item and mark the report as resolved.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="foundit-container">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Found It</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-foundit-purple/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <MessageSquare className="text-foundit-purple h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Direct Communication</h3>
              <p className="text-sm text-gray-600">
                Connect directly via WhatsApp without any intermediary.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-foundit-purple/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <MapPin className="text-foundit-purple h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Precise Location</h3>
              <p className="text-sm text-gray-600">
                Pin the exact location on the map where you lost or found the item.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-foundit-purple/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Search className="text-foundit-purple h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Smart Search</h3>
              <p className="text-sm text-gray-600">
                Quickly find matching items with our filtering system.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-foundit-purple/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <div className="text-foundit-purple font-bold">$0</div>
              </div>
              <h3 className="font-semibold mb-2">Always Free</h3>
              <p className="text-sm text-gray-600">
                Our service is completely free with no hidden charges.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/about">
              <Button variant="link" className="text-foundit-purple hover:text-foundit-purpleDark">
                Learn More About Us <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-foundit-purple py-16">
        <div className="foundit-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to find what's lost?
          </h2>
          <p className="text-white/85 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of people who have successfully found their lost items using our platform.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/post/lost">
              <Button variant="default" size="lg" className="bg-white text-foundit-purple hover:bg-gray-100">
                <MapPin className="mr-2 h-5 w-5" />
                Report Lost Item
              </Button>
            </Link>
            <Link to="/post/found">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-foundit-purple">
                <Hand className="mr-2 h-5 w-5" />
                Report Found Item
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
