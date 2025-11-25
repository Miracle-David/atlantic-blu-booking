import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wine, UtensilsCrossed, Clock, MapPin, Phone, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Restaurant = () => {
  const menuHighlights = [
    {
      category: "Appetizers",
      items: [
        { name: "Seared Scallops", description: "Pan-seared with citrus butter", price: "$24" },
        { name: "Lobster Bisque", description: "Rich and creamy with fresh herbs", price: "$18" },
      ],
    },
    {
      category: "Main Course",
      items: [
        { name: "Prime Ribeye", description: "28-day aged, with truffle butter", price: "$56" },
        { name: "Chilean Sea Bass", description: "Herb-crusted with lemon risotto", price: "$48" },
      ],
    },
    {
      category: "Desserts",
      items: [
        { name: "Crème Brûlée", description: "Classic vanilla with fresh berries", price: "$14" },
        { name: "Chocolate Soufflé", description: "Dark chocolate with espresso cream", price: "$16" },
      ],
    },
  ];

  const features = [
    { icon: Wine, title: "Premium Wine Selection", description: "Over 200 wines from around the world" },
    { icon: UtensilsCrossed, title: "Fine Dining", description: "Michelin-trained chefs" },
    { icon: Clock, title: "Extended Hours", description: "Open for lunch and dinner" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-white mt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-ocean-deep/50"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 animate-fade-in">
            Aaron's Restro & Bar
          </h1>
          <p className="text-xl md:text-2xl font-inter mb-8 text-white/90 animate-fade-in">
            Fine Dining with Ocean Views
          </p>
          <Button size="lg" variant="secondary" asChild className="text-lg animate-fade-in">
            <a href="#reservations">Make a Reservation</a>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
                Culinary Excellence
              </h2>
              <p className="text-lg font-inter text-muted-foreground mb-6">
                Aaron's Restro & Bar offers an unparalleled fine dining experience where coastal elegance meets culinary artistry. Our Michelin-trained chefs craft each dish with precision, using only the finest local and imported ingredients.
              </p>
              <p className="text-lg font-inter text-muted-foreground mb-6">
                Overlooking the pristine Atlantic coastline, our restaurant provides the perfect ambiance for intimate dinners, business meetings, or special celebrations. Complement your meal with selections from our extensive wine cellar, curated by our expert sommeliers.
              </p>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-primary" />
                  <span className="font-inter">Lunch: 12PM - 3PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-primary" />
                  <span className="font-inter">Dinner: 6PM - 11PM</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=600&q=80"
                alt="Fine dining interior"
                className="rounded-lg shadow-lg h-64 w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1564758866174-0643109c7c0a?w=600&q=80"
                alt="Gourmet dish"
                className="rounded-lg shadow-lg h-64 w-full object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-inter font-semibold mb-2">{feature.title}</h3>
                  <p className="font-inter text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
              Menu Highlights
            </h2>
            <p className="text-lg font-inter text-muted-foreground max-w-2xl mx-auto">
              A curated selection of our signature dishes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {menuHighlights.map((section, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-playfair font-bold mb-6 text-primary">{section.category}</h3>
                  <div className="space-y-6">
                    {section.items.map((item, idx) => (
                      <div key={idx} className="border-b border-border pb-4 last:border-0">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-inter font-semibold text-foreground">{item.name}</h4>
                          <span className="font-playfair font-bold text-primary">{item.price}</span>
                        </div>
                        <p className="text-sm font-inter text-muted-foreground">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reservations Section */}
      <section id="reservations" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Reserve Your Table
          </h2>
          <p className="text-xl font-inter mb-8 text-white/90 max-w-2xl mx-auto">
            Experience fine dining at its best. Make your reservation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <div className="flex items-center gap-2 justify-center">
              <Phone size={20} />
              <span className="font-inter">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <MapPin size={20} />
              <span className="font-inter">Atlantic Blu Hotels</span>
            </div>
          </div>
          <Button size="lg" variant="secondary" asChild className="text-lg">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Restaurant;
