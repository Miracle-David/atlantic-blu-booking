import {
  Wifi,
  UtensilsCrossed,
  Dumbbell,
  Waves,
  Wine,
  Sparkles,
  Car,
  Shield,
  Baby,
  Briefcase,
  Coffee,
  Globe,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Amenities = () => {
  const amenityCategories = [
    {
      title: "Essential Services",
      items: [
        { icon: Wifi, name: "Free High-Speed WiFi", description: "Throughout the property" },
        { icon: Car, name: "Free Parking", description: "Valet and self-parking available" },
        { icon: Shield, name: "24/7 Security", description: "Your safety is our priority" },
        {
          icon: Sparkles,
          name: "Room Service",
          description: "Available 24 hours a day",
        },
      ],
    },
    {
      title: "Dining & Drinks",
      items: [
        {
          icon: UtensilsCrossed,
          name: "Signature Restaurant",
          description: "Fine dining with coastal cuisine",
        },
        { icon: Wine, name: "Rooftop Bar", description: "Signature cocktails and sunset views" },
        {
          icon: Coffee,
          name: "Café & Bakery",
          description: "Fresh pastries and artisan coffee",
        },
        {
          icon: Globe,
          name: "International Cuisine",
          description: "Multiple dining options",
        },
      ],
    },
    {
      title: "Recreation & Wellness",
      items: [
        {
          icon: Waves,
          name: "Infinity Pool & Spa",
          description: "Heated pool with stunning views",
        },
        {
          icon: Dumbbell,
          name: "Fitness Center",
          description: "State-of-the-art equipment",
        },
        { icon: Sparkles, name: "Full-Service Spa", description: "Massages and treatments" },
        { icon: Waves, name: "Private Beach Access", description: "Exclusive beachfront area" },
      ],
    },
    {
      title: "Business & Events",
      items: [
        {
          icon: Briefcase,
          name: "Business Center",
          description: "Printing and meeting facilities",
        },
        {
          icon: Globe,
          name: "Conference Rooms",
          description: "Modern AV equipment",
        },
        { icon: Sparkles, name: "Event Planning", description: "Weddings and celebrations" },
        { icon: Baby, name: "Catering Services", description: "Custom menus available" },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-ocean-light">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">Our Amenities</h1>
          <p className="text-xl font-inter text-muted-foreground max-w-3xl mx-auto">
            Everything you need for a perfect stay, thoughtfully curated for your comfort
          </p>
        </div>
      </section>

      {/* Featured Amenity */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="rounded-lg overflow-hidden h-96">
              <img
                src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80"
                alt="Infinity Pool"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-playfair font-bold mb-6">Infinity Pool & Spa</h2>
              <p className="font-inter text-muted-foreground leading-relaxed mb-6">
                Immerse yourself in our stunning infinity pool surrounded by elegant landscapes
                horizon. Our heated pool is complemented by a full-service spa offering massage
                therapy, facials, and body treatments. Relax in the hot tub while watching the
                sunset, or lounge on our comfortable deck chairs with complimentary poolside
                service.
              </p>
              <ul className="space-y-2 font-inter">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Heated year-round</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Poolside bar service</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Private cabanas available</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Spa treatments and massages</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* All Amenities */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="space-y-16 max-w-6xl mx-auto">
            {amenityCategories.map((category, idx) => (
              <div key={idx}>
                <h2 className="text-3xl font-playfair font-bold mb-8 text-center">
                  {category.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.items.map((amenity, index) => (
                    <div
                      key={index}
                      className="bg-card p-6 rounded-lg hover:shadow-lg transition-shadow"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <amenity.icon className="text-primary" size={24} />
                      </div>
                      <h3 className="font-inter font-semibold mb-2">{amenity.name}</h3>
                      <p className="font-inter text-sm text-muted-foreground">
                        {amenity.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-playfair font-bold mb-6">Additional Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-inter font-semibold mb-2">Concierge Services</h3>
                <p className="font-inter text-sm text-muted-foreground">
                  Our dedicated concierge team can help with reservations, tours, transportation,
                  and local recommendations.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-inter font-semibold mb-2">Laundry & Dry Cleaning</h3>
                <p className="font-inter text-sm text-muted-foreground">
                  Same-day service available for your convenience with pickup and delivery to your
                  room.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-inter font-semibold mb-2">Pet-Friendly Options</h3>
                <p className="font-inter text-sm text-muted-foreground">
                  We welcome your furry friends with special pet amenities and designated areas.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-inter font-semibold mb-2">Airport Shuttle</h3>
                <p className="font-inter text-sm text-muted-foreground">
                  Complimentary shuttle service to and from the airport for our guests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Amenities;
