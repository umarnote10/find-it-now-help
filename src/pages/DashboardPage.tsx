
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, MessageSquare, Bell, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  const { currentUser } = useAuth();

  const stats = [
    {
      title: "Lost Items",
      value: "0",
      description: "Items you've reported as lost",
      icon: MapPin,
      link: "/my-items?type=lost",
      gradient: "from-red-500 to-red-600"
    },
    {
      title: "Found Items",
      value: "0",
      description: "Items you've reported as found",
      icon: MapPin,
      link: "/my-items?type=found",
      gradient: "from-green-500 to-green-600"
    },
    {
      title: "Messages",
      value: "0",
      description: "Unread messages",
      icon: MessageSquare,
      link: "/messages",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "Notifications",
      value: "0",
      description: "Unread notifications",
      icon: Bell,
      link: "/notifications",
      gradient: "from-yellow-500 to-yellow-600"
    }
  ];

  return (
    <div className="foundit-container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-[#5046E6] to-[#7B3DEE] text-transparent bg-clip-text">
          Welcome back, {currentUser?.displayName || "User"}!
        </h1>
        <p className="text-muted-foreground">Here's what's happening with your items</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Link key={stat.title} to={stat.link}>
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <div className={`h-8 w-8 rounded-lg bg-gradient-to-r ${stat.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="h-4 w-4 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Card className="hover:shadow-md transition-all duration-300">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-muted-foreground text-center py-8 bg-gray-50 rounded-lg">
              No recent activity to show
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-all duration-300">
          <CardHeader>
            <CardTitle>Upcoming Meetings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-muted-foreground text-center py-8 bg-gray-50 rounded-lg">
              No upcoming meetings scheduled
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 flex gap-4">
        <Link to="/post/lost">
          <Button className="bg-gradient-to-r from-[#5046E6] to-[#7B3DEE] text-white hover:opacity-90 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
            <MapPin className="mr-2 h-4 w-4" />
            Report Lost Item
          </Button>
        </Link>
        <Link to="/post/found">
          <Button className="bg-gradient-to-r from-[#5046E6] to-[#7B3DEE] text-white hover:opacity-90 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
            <MapPin className="mr-2 h-4 w-4" />
            Report Found Item
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DashboardPage;
