import { Award, Heart, Users, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Hospitality",
      description: "We believe in creating memorable experiences through genuine care and attention.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Our commitment to quality ensures every detail exceeds your expectations.",
    },
    {
      icon: Users,
      title: "Community",
      description: "We're proud to be part of the local community and support sustainable tourism.",
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "We constantly evolve to provide modern amenities while preserving coastal charm.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-ocean-light">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">About Atlantic Blu</h1>
          <p className="text-xl font-inter text-muted-foreground max-w-3xl mx-auto">
            Where coastal elegance meets modern luxury
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-playfair font-bold mb-6">Our Story</h2>
              <div className="space-y-4 font-inter text-muted-foreground leading-relaxed">
                <p>
                  Founded in 1995, Atlantic Blu Hotels began as a dream to create a sanctuary where
                  guests could experience the perfect blend of luxury and coastal tranquility. What
                  started as a small boutique property has grown into a beloved destination for
                  travelers seeking an exceptional oceanfront experience.
                </p>
                <p>
                  Our founders, inspired by the natural beauty of the Atlantic coastline, envisioned
                  a hotel that would harmonize modern comfort with the timeless appeal of the sea.
                  Every detail, from our architectural design to our carefully curated amenities,
                  reflects our commitment to this vision.
                </p>
                <p>
                  Today, Atlantic Blu stands as a testament to thoughtful hospitality, where each
                  guest is treated like family, and every stay becomes a cherished memory. We
                  continue to evolve while staying true to our core values of excellence,
                  sustainability, and genuine care.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden h-96">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
                alt="Atlantic Blu Hotel"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold mb-4">Our Values</h2>
            <p className="text-lg font-inter text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-3">{value.title}</h3>
                <p className="font-inter text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg font-inter text-muted-foreground max-w-2xl mx-auto">
              Dedicated professionals committed to making your stay unforgettable
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Sarah Johnson",
                role: "General Manager",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
              },
              {
                name: "Michael Chen",
                role: "Head Concierge",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
              },
              {
                name: "Emily Rodriguez",
                role: "Executive Chef",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-1">{member.name}</h3>
                <p className="font-inter text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "28+", label: "Years of Excellence" },
              { number: "50K+", label: "Happy Guests" },
              { number: "4.9", label: "Average Rating" },
              { number: "100+", label: "Team Members" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-playfair font-bold mb-2">
                  {stat.number}
                </div>
                <div className="font-inter text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
