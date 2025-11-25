import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Maximize, Wifi, Coffee, Tv, Wind, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RoomDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);

  const room = {
    id: 1,
    name: "Signature Suite",
    price: 299,
    images: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200&q=80",
    ],
    description:
      "Immerse yourself in luxury with our Signature Suite, featuring floor-to-ceiling windows that frame breathtaking panoramic views. This spacious 650 sq ft suite is designed with coastal elegance in mind, featuring a king-size bed with premium linens, a separate sitting area, and a private balcony where you can relax in comfort.",
    guests: 4,
    size: "650 sq ft",
    bedType: "1 King Bed + Sofa Bed",
    features: [
      "Private balcony with stunning views",
      "King-size bed with premium linens",
      "Separate living area with sofa bed",
      "Marble bathroom with rain shower",
      "Mini bar and coffee maker",
      "Smart TV with streaming services",
      "High-speed WiFi",
      "In-room safe",
      "Iron and ironing board",
      "Hair dryer",
      "Bathrobes and slippers",
      "24-hour room service",
    ],
    amenities: [
      { icon: Wifi, name: "Free WiFi" },
      { icon: Tv, name: "Smart TV" },
      { icon: Coffee, name: "Coffee Maker" },
      { icon: Wind, name: "Air Conditioning" },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="pt-20 pb-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Gallery */}
          <div className="mb-8">
            <div className="mb-4 rounded-lg overflow-hidden h-96 md:h-[500px]">
              <img
                src={room.images[selectedImage]}
                alt={room.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {room.images.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`rounded-lg overflow-hidden h-24 transition-opacity ${
                    selectedImage === idx ? "ring-2 ring-primary" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={image} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Room Details */}
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">{room.name}</h1>

              {/* Quick Info */}
              <div className="flex flex-wrap gap-6 mb-6 text-muted-foreground font-inter">
                <div className="flex items-center gap-2">
                  <Users size={20} />
                  <span>Up to {room.guests} guests</span>
                </div>
                <div className="flex items-center gap-2">
                  <Maximize size={20} />
                  <span>{room.size}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{room.bedType}</span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-playfair font-semibold mb-4">About This Room</h2>
                <p className="font-inter text-muted-foreground leading-relaxed">{room.description}</p>
              </div>

              {/* Amenities Icons */}
              <div className="mb-8">
                <h2 className="text-2xl font-playfair font-semibold mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {room.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <amenity.icon className="text-primary" size={20} />
                      </div>
                      <span className="font-inter text-sm">{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features List */}
              <div>
                <h2 className="text-2xl font-playfair font-semibold mb-4">Room Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {room.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span className="font-inter text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-playfair font-bold text-primary">
                        ${room.price}
                      </span>
                      <span className="font-inter text-muted-foreground">/night</span>
                    </div>
                    <p className="font-inter text-sm text-muted-foreground">
                      Taxes and fees included
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Button asChild className="w-full" size="lg">
                      <Link to="/booking">Book This Room</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full" size="lg">
                      <Link to="/contact">Contact Us</Link>
                    </Button>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="font-inter text-sm text-muted-foreground text-center">
                      Free cancellation up to 48 hours before check-in
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RoomDetail;
