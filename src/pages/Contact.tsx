import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-ocean-light">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">Contact Us</h1>
          <p className="text-xl font-inter text-muted-foreground max-w-3xl mx-auto">
            We're here to help make your stay unforgettable
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-playfair font-bold mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="first-name" className="font-inter">
                          First Name
                        </Label>
                        <Input id="first-name" placeholder="John" className="mt-2" required />
                      </div>
                      <div>
                        <Label htmlFor="last-name" className="font-inter">
                          Last Name
                        </Label>
                        <Input id="last-name" placeholder="Doe" className="mt-2" required />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="font-inter">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john.doe@example.com"
                        className="mt-2"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="font-inter">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject" className="font-inter">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        placeholder="How can we help you?"
                        className="mt-2"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="font-inter">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        className="mt-2 min-h-[150px]"
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full md:w-auto">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-semibold mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-primary" size={20} />
                      </div>
                      <div>
                        <h4 className="font-inter font-semibold mb-1">Address</h4>
                        <p className="font-inter text-sm text-muted-foreground">
                          123 Ocean Drive
                          <br />
                          Coastal City, CA 90210
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="text-primary" size={20} />
                      </div>
                      <div>
                        <h4 className="font-inter font-semibold mb-1">Phone</h4>
                        <p className="font-inter text-sm text-muted-foreground">
                          Main: (555) 123-4567
                          <br />
                          Reservations: (555) 123-4568
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="text-primary" size={20} />
                      </div>
                      <div>
                        <h4 className="font-inter font-semibold mb-1">Email</h4>
                        <p className="font-inter text-sm text-muted-foreground">
                          info@atlanticblu.com
                          <br />
                          reservations@atlanticblu.com
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="text-primary" size={20} />
                      </div>
                      <div>
                        <h4 className="font-inter font-semibold mb-1">Hours</h4>
                        <p className="font-inter text-sm text-muted-foreground">
                          Front Desk: 24/7
                          <br />
                          Concierge: 7am - 11pm
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card>
                <CardContent className="p-0">
                  <div className="h-64 bg-muted rounded-lg overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center bg-ocean-light">
                      <div className="text-center">
                        <MapPin className="mx-auto mb-2 text-primary" size={32} />
                        <p className="font-inter text-sm text-muted-foreground">
                          Map placeholder
                          <br />
                          Integration available
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
