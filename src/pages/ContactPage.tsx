
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll respond as soon as possible.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="foundit-container py-8">
      <Helmet>
        <title>Contact Us | Found It</title>
        <meta
          name="description"
          content="Contact the Found It team for support, feedback, or general inquiries."
        />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>
                Fill out the form below to send us a message. We'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What is this regarding?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-foundit-purple hover:bg-foundit-purpleDark"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Reach out to us through the following channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-foundit-purple mt-1" />
                  <div>
                    <h3 className="font-semibold text-sm">Email</h3>
                    <p className="text-sm mt-1">
                      <a
                        href="mailto:support@foundit.help"
                        className="text-foundit-purple hover:underline"
                      >
                        support@foundit.help
                      </a>
                    </p>
                    <p className="text-sm mt-1">
                      <a
                        href="mailto:info@foundit.help"
                        className="text-foundit-purple hover:underline"
                      >
                        info@foundit.help
                      </a>
                    </p>
                    <p className="text-sm mt-1">
                      <a
                        href="mailto:dev@foundit.help"
                        className="text-foundit-purple hover:underline"
                      >
                        dev@foundit.help
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-foundit-purple mt-1" />
                  <div>
                    <h3 className="font-semibold text-sm">Operating Regions</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      We currently serve locations all across the United States and are constantly expanding our support to new regions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-foundit-purple mt-1" />
                  <div>
                    <h3 className="font-semibold text-sm">Response Time</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      We aim to respond to all inquiries within 24-48 hours during business days.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12 bg-gray-50 rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold mb-4">Need Immediate Help?</h2>
          <p className="text-gray-600 mb-4">
            For urgent matters related to lost or found items, we recommend using the platform's direct reporting features.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="default"
              className="bg-foundit-purple hover:bg-foundit-purpleDark w-full sm:w-auto"
              onClick={() => window.location.href = "/post/lost"}
            >
              <MapPin className="mr-2 h-4 w-4" />
              Report Lost Item
            </Button>
            <Button
              variant="outline"
              className="border-foundit-purple text-foundit-purple hover:bg-foundit-purple hover:text-white w-full sm:w-auto"
              onClick={() => window.location.href = "/post/found"}
            >
              <Mail className="mr-2 h-4 w-4" />
              Report Found Item
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
