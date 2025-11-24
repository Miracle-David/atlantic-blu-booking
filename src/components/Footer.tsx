import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-ocean-deep text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-4">Atlantic Blu</h3>
            <p className="font-inter text-sm text-white/80">
              Experience luxury coastal living at its finest.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-inter font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 font-inter text-sm">
              <li>
                <Link to="/rooms" className="text-white/80 hover:text-white transition-colors">
                  Rooms
                </Link>
              </li>
              <li>
                <Link to="/amenities" className="text-white/80 hover:text-white transition-colors">
                  Amenities
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-inter font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 font-inter text-sm">
              <li className="flex items-start gap-2 text-white/80">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>123 Ocean Drive, Coastal City, CA 90210</span>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Phone size={18} className="flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Mail size={18} className="flex-shrink-0" />
                <span>info@atlanticblu.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-inter font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center font-inter text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Atlantic Blu Hotels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
