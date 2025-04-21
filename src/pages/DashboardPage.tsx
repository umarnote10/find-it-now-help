
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
      link: "/my-items?type=lost"
    },
    {
      title: "Found Items",
      value: "0",
      description: "Items you've reported as found",
      icon: MapPin,
      link: "/my-items?type=found"
    },
    {
      title: "Messages",
      value: "0",
      description: "Unread messages",
      icon: MessageSquare,
      link: "/messages"
    },
    {
      title: "Notifications",
      value: "0",
      description: "Unread notifications",
      icon: Bell,
      link: "/notifications"
    }
  ];

  return (
    <div className="foundit-container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome back, {currentUser?.displayName || "User"}!</h1>
        <p className="text-muted-foreground">Here's what's happening with your items</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Link key={stat.title} to={stat.link}>
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
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
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-muted-foreground text-center py-8">
              No recent activity to show
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Meetings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-muted-foreground text-center py-8">
              No upcoming meetings scheduled
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 flex gap-4">
        <Link to="/post/lost">
          <Button className="bg-foundit-purple hover:bg-foundit-purpleDark">
            <MapPin className="mr-2 h-4 w-4" />
            Report Lost Item
          </Button>
        </Link>
        <Link to="/post/found">
          <Button className="bg-foundit-purple hover:bg-foundit-purpleDark">
            <MapPin className="mr-2 h-4 w-4" />
            Report Found Item
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DashboardPage;
