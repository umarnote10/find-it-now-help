import { Link } from "react-router-dom";
import { MapPin, Hand, Search, ArrowRight, Clock, MapPinned, MessageSquare, CheckCircle2, Award, ShieldCheck, Users, Heart, Sparkles, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MOCK_ITEMS_PAKISTAN } from "@/data/mockItems";
import ItemCard from "@/components/items/ItemCard";
import TestimonialCard from "@/components/testimonials/TestimonialCard";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [featuredItems, setFeaturedItems] = useState(MOCK_ITEMS_PAKISTAN.slice(0, 16));
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };
  
  return (
    <div className="flex flex-col">
      {/* Hero Section - Updated height and colors */}
      <section className="bg-[#F8F9FF] pt-16 pb-24 sm:pt-24 sm:pb-32 min-h-[700px] flex items-center relative overflow-hidden">
        <div className="foundit-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="animate-fade space-y-6">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#7C3AED]"></div>
                <div className="h-2 w-2 rounded-full bg-[#F59E0B]"></div>
                <div className="h-2 w-2 rounded-full bg-[#10B981]"></div>
                <span className="ml-2 text-sm font-medium text-[#7C3AED]">Pakistan's Lost & Found Platform</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                <span className="text-[#7C3AED]">Lost something?</span><br />
                Let's find it<br />
                <span className="text-[#F59E0B]">together.</span>
              </h1>
              
              <p className="text-lg text-gray-600 max-w-2xl">
                The simplest way to report lost items across Pakistan and reunite with your valuables. Direct contact via WhatsApp, no middleman.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link to="/post/lost">
                  <Button className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white">
                    <MapPin className="mr-2 h-5 w-5" />
                    Report Lost Item
                  </Button>
                </Link>
                <Link to="/post/found">
                  <Button variant="outline" className="w-full border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white">
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
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white">
                  Search
                </Button>
              </form>
            </div>
            
            <div className="hidden lg:block">
              <div className="relative">
                <div className="glass-card p-6 z-30 absolute -top-5 right-0 w-72 animate-fade backdrop-blur-lg bg-white/80 border border-white/20 rounded-xl shadow-lg" style={{ animationDelay: '0.4s' }}>
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
                
                <div className="glass-card p-6 z-20 absolute top-14 left-10 w-72 animate-fade backdrop-blur-lg bg-white/80 border border-white/20 rounded-xl shadow-lg" style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#7C3AED] rounded-full p-3">
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

                <div className="glass-card p-4 absolute bottom-20 left-5 z-30 animate-fade backdrop-blur-lg bg-white/80 border border-white/20 rounded-xl shadow-lg" style={{ animationDelay: '0.6s' }}>
                  <div className="flex items-center gap-3">
                    <div className="bg-[#25D366] rounded-full p-2.5">
                      <MessageSquare className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Direct WhatsApp contact</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-white/20">
              <div className="text-[#7C3AED] text-3xl font-bold">2,500+</div>
              <div className="text-gray-600 text-sm">Items Reported</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-white/20">
              <div className="text-[#F59E0B] text-3xl font-bold">1,800+</div>
              <div className="text-gray-600 text-sm">Items Returned</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-white/20">
              <div className="text-[#10B981] text-3xl font-bold">15K+</div>
              <div className="text-gray-600 text-sm">Active Users</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-white/20">
              <div className="text-green-500 text-3xl font-bold">72%</div>
              <div className="text-gray-600 text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works - Updated design */}
      <section className="py-20 bg-gradient-to-br from-white to-[#F8F9FF]">
        <div className="foundit-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Found It Works</h2>
            <div className="w-24 h-1 bg-[#7C3AED] mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">Simple steps to report and recover lost items</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300 border border-gray-100">
              <div className="bg-[#7C3AED]/10 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-[#7C3AED]" />
              </div>
              <div className="inline-block px-4 py-1 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-sm font-medium mb-4">Step 1</div>
              <h3 className="text-xl font-semibold mb-4">Report Item</h3>
              <p className="text-gray-600">
                Quickly report your lost item or something you found. Add photos and detailed information to help with identification.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300 border border-gray-100">
              <div className="bg-[#F59E0B]/10 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                <Sparkles className="h-8 w-8 text-[#F59E0B]" />
              </div>
              <div className="inline-block px-4 py-1 rounded-full bg-[#F59E0B]/10 text-[#F59E0B] text-sm font-medium mb-4">Step 2</div>
              <h3 className="text-xl font-semibold mb-4">Connect</h3>
              <p className="text-gray-600">
                Get instant notifications when there's a match. Connect directly through WhatsApp - no intermediaries.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300 border border-gray-100">
              <div className="bg-[#10B981]/10 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-[#10B981]" />
              </div>
              <div className="inline-block px-4 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] text-sm font-medium mb-4">Step 3</div>
              <h3 className="text-xl font-semibold mb-4">Reunite</h3>
              <p className="text-gray-600">
                Meet safely to retrieve your item and mark the report as resolved. Join thousands of successful reunions.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Found It - Updated design */}
      <section className="py-20 bg-[#F8F9FF]">
        <div className="foundit-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Found It</h2>
            <div className="w-24 h-1 bg-[#F59E0B] mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">The best way to recover lost items across Pakistan</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-br from-[#7C3AED] to-[#9F7AEA] rounded-xl w-14 h-14 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-3 text-lg group-hover:text-[#7C3AED] transition-colors">Direct Communication</h3>
              <p className="text-gray-600 text-sm">
                Connect instantly via WhatsApp without any intermediaries.
              </p>
            </div>
            
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-br from-[#F59E0B] to-[#FBBF24] rounded-xl w-14 h-14 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-3 text-lg group-hover:text-[#F59E0B] transition-colors">Secure Platform</h3>
              <p className="text-gray-600 text-sm">
                Your privacy and security are our top priorities.
              </p>
            </div>
            
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-br from-[#10B981] to-[#34D399] rounded-xl w-14 h-14 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <Search className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-3 text-lg group-hover:text-[#10B981] transition-colors">Smart Search</h3>
              <p className="text-gray-600 text-sm">
                Find matching items quickly with our advanced filters.
              </p>
            </div>
            
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-br from-[#6366F1] to-[#818CF8] rounded-xl w-14 h-14 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-3 text-lg group-hover:text-[#6366F1] transition-colors">Always Free</h3>
              <p className="text-gray-600 text-sm">
                No hidden charges, completely free to use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories - New Design */}
      <section className="py-20 bg-gradient-to-br from-white to-[#F8F9FF]">
        <div className="foundit-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <div className="w-24 h-1 bg-[#7C3AED] mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">Hear from people who recovered their lost items</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Muhammad Ahsan"
              city="Lahore"
              image="https://i.pravatar.cc/150?img=32"
              text="Alhamdulillah! Mera khooya hua wallet 24 ghante ke andar mil gaya. Found It ke through ek imaandaar insaan ne mujhe WhatsApp pe contact kiya aur wallet safely wapas kar diya."
              rating={5}
            />
            
            <TestimonialCard
              name="Fatima Zahra"
              city="Islamabad"
              image="https://i.pravatar.cc/150?img=23"
              text="Metro station mein mera laptop bag gir gaya tha. Found It pe post karne ke 2 ghante ke andar hi ek security guard ne mujhe contact kiya. Bohat shukriya Found It team ka!"
              layout="quote"
            />
            
            <TestimonialCard
              name="Abdul Rahman"
              city="Karachi"
              image="https://i.pravatar.cc/150?img=15"
              text="Meri beti ka school bag kisi park mein reh gaya tha. Found It ki madad se usi din bag mil gaya. Ye platform sachme ek nemat hai Pakistani awam ke liye."
              rating={5}
            />
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
              <Button size="lg" className="bg-white text-[#7C3AED] hover:bg-gray-100">
                <MapPin className="mr-2 h-5 w-5" />
                Report Lost Item
              </Button>
            </Link>
            <Link to="/post/found">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#7C3AED]">
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
