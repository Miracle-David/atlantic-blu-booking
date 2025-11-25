import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Maximize, Wifi, Coffee } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: "Signature Suite",
      price: 299,
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
      description: "Spacious suite with elegant interiors and private balcony",
      guests: 4,
      size: "650 sq ft",
      amenities: ["Premium View", "King Bed", "Private Balcony", "Mini Bar"],
    },
    {
      id: 2,
      name: "Deluxe King Room",
      price: 199,
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
      description: "Elegant room with modern amenities and city views",
      guests: 2,
      size: "450 sq ft",
      amenities: ["City View", "King Bed", "Work Desk", "Mini Fridge"],
    },
    {
      id: 3,
      name: "Beachfront Villa",
      price: 499,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
      description: "Luxurious private villa with direct beach access",
      guests: 6,
      size: "1200 sq ft",
      amenities: ["Beach Access", "2 Bedrooms", "Private Pool", "Full Kitchen"],
    },
    {
      id: 4,
      name: "Superior Double Room",
      price: 179,
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80",
      description: "Comfortable room with two double beds, perfect for families",
      guests: 4,
      size: "400 sq ft",
      amenities: ["Garden View", "2 Double Beds", "Sofa", "Coffee Maker"],
    },
    {
      id: 5,
      name: "Penthouse Suite",
      price: 699,
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
      description: "Ultimate luxury with 360° views and premium amenities",
      guests: 4,
      size: "1500 sq ft",
      amenities: ["Panoramic Views", "Master Bedroom", "Jacuzzi", "Butler Service"],
    },
    {
      id: 6,
      name: "Standard Queen Room",
      price: 149,
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
      description: "Cozy and affordable room with all essential amenities",
      guests: 2,
      size: "350 sq ft",
      amenities: ["Scenic View", "Queen Bed", "Smart TV", "Work Area"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 bg-ocean-light">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-foreground mb-4">
            Our Rooms
          </h1>
          <p className="text-xl font-inter text-muted-foreground max-w-2xl mx-auto">
            Choose from our selection of beautifully appointed rooms and suites
          </p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <Card key={room.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${room.image}')` }}
                  ></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-playfair font-semibold mb-2">{room.name}</h3>
                  <p className="font-inter text-muted-foreground mb-4 line-clamp-2">
                    {room.description}
                  </p>

                  {/* Room Details */}
                  <div className="flex gap-4 mb-4 text-sm font-inter text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users size={16} />
                      <span>{room.guests} guests</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Maximize size={16} />
                      <span>{room.size}</span>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {room.amenities.slice(0, 3).map((amenity, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-secondary text-xs font-inter rounded-full"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <span className="text-3xl font-playfair font-bold text-primary">
                        ${room.price}
                      </span>
                      <span className="text-sm font-inter text-muted-foreground">/night</span>
                    </div>
                    <Button asChild>
                      <Link to={`/rooms/${room.id}`}>View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rooms;
