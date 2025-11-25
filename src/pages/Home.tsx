import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Waves, Wifi, UtensilsCrossed, Dumbbell, Wine, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Home = () => {
  const featuredRooms = [
    {
      id: 1,
      name: "Ocean View Suite",
      price: 299,
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
      description: "Spacious suite with panoramic ocean views",
    },
    {
      id: 2,
      name: "Deluxe King Room",
      price: 199,
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
      description: "Elegant room with modern amenities",
    },
    {
      id: 3,
      name: "Beachfront Villa",
      price: 499,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
      description: "Private villa steps from the beach",
    },
  ];

  const amenities = [
    { icon: Wifi, name: "Free WiFi", description: "High-speed internet" },
    { icon: UtensilsCrossed, name: "Restaurant", description: "Fine dining" },
    { icon: Dumbbell, name: "Fitness Center", description: "24/7 access" },
    { icon: Waves, name: "Pool & Spa", description: "Heated pool" },
    { icon: Wine, name: "Bar & Lounge", description: "Premium drinks" },
    { icon: Sparkles, name: "Room Service", description: "24-hour service" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/40 via-ocean-deep/40 to-background"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 animate-fade-in">
            Welcome to Atlantic Blu
          </h1>
          <p className="text-xl md:text-2xl font-inter mb-8 text-white/90 animate-fade-in">
            Where Luxury Meets the Ocean
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" asChild className="text-lg">
              <Link to="/rooms">Explore Rooms</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg bg-white/10 border-white text-white hover:bg-white hover:text-ocean-deep">
              <Link to="/booking">Book Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
              Featured Rooms
            </h2>
            <p className="text-lg font-inter text-muted-foreground max-w-2xl mx-auto">
              Discover our handpicked selection of premium accommodations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredRooms.map((room) => (
              <Card key={room.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url('${room.image}')` }}
                ></div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-playfair font-semibold mb-2">{room.name}</h3>
                  <p className="font-inter text-muted-foreground mb-4">{room.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-playfair font-bold text-primary">
                      ${room.price}
                      <span className="text-sm font-inter text-muted-foreground">/night</span>
                    </span>
                    <Button asChild>
                      <Link to={`/rooms/${room.id}`}>View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/rooms">View All Rooms</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Restaurant Section */}
      <section className="py-20 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
                Aaron's Restro & Bar
              </h2>
              <p className="text-lg font-inter text-muted-foreground mb-6">
                Indulge in an exquisite fine dining experience at Aaron's Restro & Bar. Our Michelin-trained chefs create culinary masterpieces using the finest ingredients, paired with breathtaking ocean views.
              </p>
              <p className="text-lg font-inter text-muted-foreground mb-8">
                From fresh seafood to premium cuts, every dish is crafted to perfection. Complement your meal with selections from our extensive wine cellar.
              </p>
              <Button size="lg" asChild>
                <Link to="/restaurant">Explore Restaurant</Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                alt="Aaron's Restro & Bar"
                className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
              World-Class Amenities
            </h2>
            <p className="text-lg font-inter text-muted-foreground max-w-2xl mx-auto">
              Everything you need for a perfect stay
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-card rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <amenity.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-inter font-semibold mb-2">{amenity.name}</h3>
                <p className="font-inter text-muted-foreground">{amenity.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/amenities">Explore All Amenities</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-ocean-deep text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Ready for Your Perfect Getaway?
          </h2>
          <p className="text-xl font-inter mb-8 text-white/90 max-w-2xl mx-auto">
            Book your stay today and experience the ultimate in coastal luxury
          </p>
          <Button size="lg" variant="secondary" asChild className="text-lg">
            <Link to="/booking">Book Your Stay</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
