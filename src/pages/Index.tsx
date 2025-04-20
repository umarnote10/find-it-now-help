import { Link } from "react-router-dom";
import { MapPin, Hand, Search, ArrowRight, Clock, MapPinned, MessageSquare, CheckCircle2, Award, ShieldCheck, Users, Heart, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MOCK_ITEMS_PAKISTAN } from "@/data/mockItems";
import ItemCard from "@/components/items/ItemCard";
import SuccessStories from "@/components/sections/SuccessStories";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [featuredItems, setFeaturedItems] = useState(MOCK_ITEMS_PAKISTAN.slice(0, 4));

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return <div className="flex flex-col">
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
                <input type="text" placeholder="Search for lost or found items in Pakistan..." className="input-field pl-12" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
                <Button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-main hover:opacity-90 h-10">
                  Search
                </Button>
              </form>
            </div>
            
            <div className="hidden lg:block">
              <div className="relative">
                <div className="glass-card p-6 z-30 absolute top-14 left-10 w-72 animate-fade" style={{
                animationDelay: '0.2s'
              }}>
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
                
                <div className="glass-card p-6 z-20 absolute -top-5 right-0 w-72 animate-fade" style={{
                animationDelay: '0.4s'
              }}>
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
                
                <div className="glass-card p-4 absolute bottom-20 left-5 z-30 animate-fade" style={{
                animationDelay: '0.6s'
              }}>
                  <div className="flex items-center gap-3">
                    <div className="bg-[#25D366] rounded-full p-2.5">
                      <MessageSquare className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Direct WhatsApp contact</p>
                    </div>
                  </div>
                </div>
                
                <div style={{
                animationDelay: '0s'
              }} className="bg-white rounded-xl shadow-xl p-5 relative z-10 animate-fade mx-0 my-[47px]">
                  <img src="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Pakistan Map" className="rounded-lg w-full h-80 object-cover" />
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-0">
            {featuredItems.map(item => <ItemCard key={item.id} item={item} />)}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/lost-items">
              <Button variant="outline" className="border-foundit-secondary text-foundit-secondary hover:bg-foundit-secondary hover:text-white">
                View All Items <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(124,58,237,0.05)_0%,rgba(124,58,237,0)_100%)]"></div>
        <div className="absolute -top-24 right-0 w-96 h-96 bg-foundit-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-foundit-primary/5 rounded-full blur-3xl"></div>
        
        <div className="foundit-container relative">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foundit-dark mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foundit-primary to-foundit-secondary">
              How <span className="text-foundit-dark">Found It</span> Works
            </h2>
            <p className="text-lg text-foundit-muted max-w-2xl mx-auto">
              Three simple steps to help you recover your lost items or return found items to their rightful owners
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-32 left-0 w-full h-1 bg-gradient-to-r from-foundit-primary via-foundit-secondary to-foundit-accent opacity-20 -z-10"></div>
            
            {[
              {
                step: 1,
                icon: <MapPin className="w-8 h-8 text-white" />,
                title: "Report Item",
                description: "Report your lost item or something you found with detailed information and photos for better visibility",
                gradient: "from-[#2140B2] to-[#4C45E0]",
                delay: "0.1s"
              },
              {
                step: 2,
                icon: <MessageSquare className="w-8 h-8 text-white" />,
                title: "Connect Directly",
                description: "Connect instantly via WhatsApp when you find a match - no intermediaries or complicated processes",
                gradient: "from-[#2140B2] to-[#4C45E0]",
                delay: "0.2s"
              },
              {
                step: 3,
                icon: <Handshake className="w-8 h-8 text-white" />,
                title: "Safe Return",
                description: "Meet safely to retrieve your item and mark the report as resolved, helping build trust in our community",
                gradient: "from-[#2140B2] to-[#4C45E0]",
                delay: "0.3s"
              }
            ].map(({ step, icon, title, description, gradient, delay }) => (
              <div
                key={step}
                className={`
      group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl 
      transition-all duration-300 border border-gray-200 
      backdrop-blur-sm animate-fade
    `}
                style={{ animationDelay: delay }}
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className={`
        w-12 h-12 bg-gradient-to-r ${gradient} 
        rounded-full flex items-center justify-center 
        text-white font-bold text-xl shadow-lg 
        group-hover:scale-110 transition-transform duration-300
      `}>
                    {step}
                  </div>
                </div>
                
                <div className="text-center pt-8">
                  <div className="mb-6 inline-block">
                    <div className={`
          w-16 h-16 rounded-xl bg-gradient-to-r ${gradient} 
          flex items-center justify-center 
          group-hover:scale-110 transition-transform duration-300
        `}>
                      {icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foundit-dark group-hover:text-foundit-primary transition-colors">
                    {title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {description}
                  </p>
                </div>
                
                <div className={`
      absolute bottom-0 left-0 w-full h-1 
      bg-gradient-to-r ${gradient} 
      transform scale-x-0 group-hover:scale-x-100 
      transition-transform duration-300 rounded-b-xl
    `}></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-16 bg-white">
        <div className="foundit-container">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Choose Found It</h2>
            <p className="section-subtitle">The best way to recover lost items across Pakistan</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6">
            {[
              {
                icon: <MessageSquare className="h-6 w-6" />,
                title: "Direct Communication",
                description: "Connect directly via WhatsApp without any intermediary.",
                gradient: "from-[#2140B2] to-[#4C45E0]",
                delay: "0.1s"
              },
              {
                icon: <ShieldCheck className="h-6 w-6" />,
                title: "Secure Platform",
                description: "Your data is protected and your privacy is our priority.",
                gradient: "from-[#2140B2] to-[#4C45E0]",
                delay: "0.2s"
              },
              {
                icon: <Search className="h-6 w-6" />,
                title: "Smart Search",
                description: "Quickly find matching items with our filtering system.",
                gradient: "from-[#2140B2] to-[#4C45E0]",
                delay: "0.3s"
              },
              {
                icon: <Award className="h-6 w-6" />,
                title: "Always Free",
                description: "Our service is completely free with no hidden charges.",
                gradient: "from-[#2140B2] to-[#4C45E0]",
                delay: "0.4s"
              }
            ].map(({ icon, title, description, gradient, delay }) => (
              <div
                key={title}
                className="group relative bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 animate-fade"
                style={{ animationDelay: delay }}
              >
                <div className="relative z-10">
                  <div className={`
                    w-14 h-14 mb-6 rounded-lg bg-gradient-to-r ${gradient}
                    flex items-center justify-center text-white
                    group-hover:scale-110 transition-transform duration-300
                    shadow-lg
                  `}>
                    {icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-foundit-dark group-hover:text-[#2140B2] transition-colors">
                    {title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {description}
                  </p>
                </div>

                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#2140B2] to-[#4C45E0] opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                
                <div className={`
                  absolute bottom-0 left-0 w-full h-1
                  bg-gradient-to-r ${gradient}
                  transform scale-x-0 group-hover:scale-x-100
                  transition-transform duration-300 rounded-b-xl
                `} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/about">
              <Button variant="link" className="text-[#2140B2] hover:text-[#4C45E0]">
                Learn More About Us <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <SuccessStories />
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
    </div>;
};

export default Index;
