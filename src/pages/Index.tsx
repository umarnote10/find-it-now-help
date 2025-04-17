
import { Link } from "react-router-dom";
import { MapPin, Hand, Search, ArrowRight, Clock, MapPinned, MessageSquare, CheckCircle2, Award, ShieldCheck, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MOCK_ITEMS_PAKISTAN } from "@/data/mockItems";
import ItemCard from "@/components/items/ItemCard";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [featuredItems, setFeaturedItems] = useState(MOCK_ITEMS_PAKISTAN.slice(0, 4));
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };
  
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-foundit-primary/5 via-foundit-secondary/5 to-white pt-12 pb-20 sm:pt-20 sm:pb-24">
        <div className="foundit-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="animate-fade space-y-6">
              <div className="flex items-center gap-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-foundit-accent"></div>
                <div className="h-1.5 w-1.5 rounded-full bg-foundit-secondary"></div>
                <div className="h-1.5 w-1.5 rounded-full bg-foundit-primary"></div>
                <span className="ml-2 text-sm font-medium text-foundit-primary">Pakistan's Lost & Found Platform</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foundit-dark">
                <span className="text-transparent bg-clip-text bg-gradient-main">Lost something?</span><br />
                Let's find it <span className="text-foundit-accent">together.</span>
              </h1>
              
              <p className="text-lg text-gray-700 max-w-2xl">
                The simplest way to report lost items across Pakistan and reunite with your valuables. Direct contact via WhatsApp, no middleman.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link to="/post/lost">
                  <Button className="w-full bg-gradient-main hover:opacity-90">
                    <MapPin className="mr-2 h-5 w-5" />
                    Report Lost Item
                  </Button>
                </Link>
                <Link to="/post/found">
                  <Button variant="outline" className="w-full border-foundit-secondary text-foundit-secondary hover:bg-foundit-secondary hover:text-white">
                    <Hand className="mr-2 h-5 w-5" />
                    Report Found Item
                  </Button>
                </Link>
              </div>
              
              <form onSubmit={handleSearch} className="relative mt-8">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search for lost or found items in Pakistan..."
                  className="input-field pl-12"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-main hover:opacity-90 h-10">
                  Search
                </Button>
              </form>
            </div>
            
            <div className="hidden lg:block">
              <div className="relative">
                <div className="glass-card p-6 z-30 absolute top-14 left-10 w-72 animate-fade" style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-main rounded-full p-3">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Lost in Lahore</h3>
                      <p className="text-sm text-gray-600 mb-3">iPhone 14 Pro lost at Packages Mall food court</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="mr-1 h-4 w-4" /> Posted 12h ago
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-6 z-20 absolute -top-5 right-0 w-72 animate-fade" style={{ animationDelay: '0.4s' }}>
                  <div className="flex items-start gap-4">
                    <div className="bg-green-500 rounded-full p-3">
                      <Hand className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Found in Islamabad</h3>
                      <p className="text-sm text-gray-600 mb-3">CNIC found at F-9 Park</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPinned className="mr-1 h-4 w-4" /> F-9 Park
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-4 absolute bottom-20 left-5 z-30 animate-fade" style={{ animationDelay: '0.6s' }}>
                  <div className="flex items-center gap-3">
                    <div className="bg-[#25D366] rounded-full p-2.5">
                      <MessageSquare className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Direct WhatsApp contact</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-xl p-5 relative z-10 animate-fade" style={{ animationDelay: '0s' }}>
                  <img 
                    src="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Pakistan Map" 
                    className="rounded-lg w-full h-80 object-cover"
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-16 h-16 bg-foundit-accent/30 rounded-full animate-ping absolute"></div>
                      <div className="w-6 h-6 bg-foundit-accent rounded-full absolute left-5 top-5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 bg-white rounded-xl p-5 shadow-card">
            <div className="text-center">
              <div className="text-foundit-primary text-3xl font-bold">2,500+</div>
              <div className="text-gray-600 text-sm">Items Reported</div>
            </div>
            <div className="text-center">
              <div className="text-foundit-accent text-3xl font-bold">1,800+</div>
              <div className="text-gray-600 text-sm">Items Returned</div>
            </div>
            <div className="text-center">
              <div className="text-foundit-secondary text-3xl font-bold">15K+</div>
              <div className="text-gray-600 text-sm">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-green-500 text-3xl font-bold">72%</div>
              <div className="text-gray-600 text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Items */}
      <section className="py-16 bg-white">
        <div className="foundit-container">
          <div className="text-center mb-12">
            <h2 className="section-title">Recently Reported Items</h2>
            <p className="section-subtitle">Browse through the most recent lost and found items across Pakistan</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredItems.map(item => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to={featuredItems[0].status === "lost" ? "/lost-items" : "/found-items"}>
              <Button variant="outline" className="border-foundit-secondary text-foundit-secondary hover:bg-foundit-secondary hover:text-white">
                View All Items <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="foundit-container">
          <div className="text-center mb-12">
            <h2 className="section-title">How Found It Works</h2>
            <p className="section-subtitle">Simple steps to report and recover lost items</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-foundit-primary shadow-card hover:shadow-card-hover transition-all duration-300">
              <CardContent className="pt-6">
                <div className="bg-gradient-main rounded-full w-14 h-14 flex items-center justify-center mb-5 text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">Report</h3>
                <p className="text-gray-600">
                  Report your lost item or something you found with detailed information and photos.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-foundit-secondary shadow-card hover:shadow-card-hover transition-all duration-300">
              <CardContent className="pt-6">
                <div className="bg-gradient-main rounded-full w-14 h-14 flex items-center justify-center mb-5 text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">Connect</h3>
                <p className="text-gray-600">
                  Connect directly via WhatsApp when you find a match - no intermediaries.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-foundit-accent shadow-card hover:shadow-card-hover transition-all duration-300">
              <CardContent className="pt-6">
                <div className="bg-gradient-main rounded-full w-14 h-14 flex items-center justify-center mb-5 text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">Reunite</h3>
                <p className="text-gray-600">
                  Arrange a safe meeting to retrieve your item and mark the report as resolved.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-16 bg-white">
        <div className="foundit-container">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Choose Found It</h2>
            <p className="section-subtitle">The best way to recover lost items across Pakistan</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100">
              <div className="feature-icon">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">Direct Communication</h3>
              <p className="text-sm text-gray-600">
                Connect directly via WhatsApp without any intermediary.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100">
              <div className="feature-icon">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">Secure Platform</h3>
              <p className="text-sm text-gray-600">
                Your data is protected and your privacy is our priority.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100">
              <div className="feature-icon">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">Smart Search</h3>
              <p className="text-sm text-gray-600">
                Quickly find matching items with our filtering system.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100">
              <div className="feature-icon">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">Always Free</h3>
              <p className="text-sm text-gray-600">
                Our service is completely free with no hidden charges.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/about">
              <Button variant="link" className="text-foundit-secondary hover:text-foundit-primary">
                Learn More About Us <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="foundit-container">
          <div className="text-center mb-12">
            <h2 className="section-title">Success Stories</h2>
            <p className="section-subtitle">Hear from people who recovered their lost items</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-card hover:shadow-card-hover transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <img 
                      src="https://i.pravatar.cc/150?img=32" 
                      alt="User" 
                      className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Aisha Mahmood</h4>
                    <p className="text-sm text-gray-500">Lahore</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "I lost my wallet at a restaurant in Lahore. Within 24 hours of posting on Found It, I got a WhatsApp message and recovered it with all my documents intact!"
                </p>
                <div className="flex mt-4">
                  <Heart className="h-5 w-5 text-red-500" />
                  <Heart className="h-5 w-5 text-red-500" />
                  <Heart className="h-5 w-5 text-red-500" />
                  <Heart className="h-5 w-5 text-red-500" />
                  <Heart className="h-5 w-5 text-red-500" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-card hover:shadow-card-hover transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <img 
                      src="https://i.pravatar.cc/150?img=15" 
                      alt="User" 
                      className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Faisal Ahmed</h4>
                    <p className="text-sm text-gray-500">Islamabad</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Found a child's backpack at a park in Islamabad. Posted it on Found It and was able to return it to the relieved parents the same day. This platform is a blessing!"
                </p>
                <div className="flex mt-4">
                  <Heart className="h-5 w-5 text-red-500" />
                  <Heart className="h-5 w-5 text-red-500" />
                  <Heart className="h-5 w-5 text-red-500" />
                  <Heart className="h-5 w-5 text-red-500" />
                  <Heart className="h-5 w-5 text-red-500" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-card hover:shadow-card-hover transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <img 
                      src="https://i.pravatar.cc/150?img=23" 
                      alt="User" 
                      className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Saima Khan</h4>
                    <p className="text-sm text-gray-500">Karachi</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "I lost my family heirloom ring at a wedding in Karachi. Thanks to Found It, an honest person found it and contacted me directly. I'm forever grateful!"
                </p>
                <div className="flex mt-4">
                  <Heart className="h-5 w-5 text-red-500" />
                  <Heart className="h-5 w-5 text-red-500" />
                  <Heart className="h-5 w-5 text-red-500" />
                  <Heart className="h-5 w-5 text-red-500" />
                  <Heart className="h-5 w-5 text-red-500" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-gradient-main py-16">
        <div className="foundit-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to find what's lost?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of people across Pakistan who have successfully recovered their lost items using our platform.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/post/lost">
              <Button size="lg" className="bg-white text-foundit-primary hover:bg-gray-100">
                <MapPin className="mr-2 h-5 w-5" />
                Report Lost Item
              </Button>
            </Link>
            <Link to="/post/found">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-foundit-primary">
                <Hand className="mr-2 h-5 w-5" />
                Report Found Item
              </Button>
            </Link>
          </div>
          
          <div className="mt-10 flex items-center justify-center gap-6">
            <div className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-white mr-2" />
              <span className="text-white">Free to use</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-white mr-2" />
              <span className="text-white">Direct contact</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-white mr-2" />
              <span className="text-white">Safe & secure</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
