import { useState } from "react";
import { X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80",
      category: "Exterior",
      alt: "Hotel exterior at sunset",
    },
    {
      url: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&q=80",
      category: "Rooms",
      alt: "Signature suite",
    },
    {
      url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=80",
      category: "Pool",
      alt: "Infinity pool at dusk",
    },
    {
      url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80",
      category: "Rooms",
      alt: "Deluxe king room",
    },
    {
      url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80",
      category: "Dining",
      alt: "Fine dining restaurant",
    },
    {
      url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80",
      category: "Rooms",
      alt: "Beachfront villa",
    },
    {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
      category: "Exterior",
      alt: "Hotel lobby entrance",
    },
    {
      url: "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=1200&q=80",
      category: "Spa",
      alt: "Spa treatment room",
    },
    {
      url: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200&q=80",
      category: "Rooms",
      alt: "Superior double room",
    },
    {
      url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80",
      category: "Beach",
      alt: "Private beach area",
    },
    {
      url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&q=80",
      category: "Dining",
      alt: "Rooftop bar",
    },
    {
      url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80",
      category: "Rooms",
      alt: "Penthouse suite",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-ocean-light">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">Gallery</h1>
          <p className="text-xl font-inter text-muted-foreground max-w-3xl mx-auto">
            Explore the beauty and luxury of Atlantic Blu through our curated collection
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
                onClick={() => setSelectedImage(image.url)}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-ocean-deep/0 group-hover:bg-ocean-deep/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="font-inter text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Image
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ocean-deep/80 to-transparent p-4">
                  <span className="font-inter text-white text-sm">{image.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-ocean-deep/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gold transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
