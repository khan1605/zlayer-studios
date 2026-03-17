import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-white text-lg font-bold font-[Poppins] mb-3">Z-LAYER STUDIOS</h3>
            <p className="text-sm">
              Custom 3D printing, social media marketing, and IT services for small businesses.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/3d-printing" className="hover:text-white transition-colors">3D Printing</Link></li>
              <li><Link to="/social-media-marketing" className="hover:text-white transition-colors">Social Media Marketing</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">IT Services</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Shop</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:info@zlayerstudios.com" className="hover:text-white transition-colors">
                  info@zlayerstudios.com
                </a>
              </li>
              <li>
                <a href="tel:+918936054721" className="hover:text-white transition-colors">
                  +91 8936054721
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Z-Layer Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
