
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#08203e] to-[#211f2f] text-white">
      <div className="foundit-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <MapPin className="h-6 w-6 text-[#557c93]" />
              <span className="font-bold text-xl text-white">Found It</span>
            </Link>
            <p className="text-[#918ca9] text-sm leading-relaxed">
              Helping people reunite with their lost items across Pakistan through a secure and efficient platform.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/lost-items" className="text-[#918ca9] hover:text-white transition-colors text-sm">Lost Items</Link>
              </li>
              <li>
                <Link to="/found-items" className="text-[#918ca9] hover:text-white transition-colors text-sm">Found Items</Link>
              </li>
              <li>
                <Link to="/post/lost" className="text-[#918ca9] hover:text-white transition-colors text-sm">Report Lost</Link>
              </li>
              <li>
                <Link to="/post/found" className="text-[#918ca9] hover:text-white transition-colors text-sm">Report Found</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">About</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-[#918ca9] hover:text-white transition-colors text-sm">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#918ca9] hover:text-white transition-colors text-sm">Contact Us</Link>
              </li>
              <li>
                <Link to="/faq" className="text-[#918ca9] hover:text-white transition-colors text-sm">FAQ</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-[#918ca9] hover:text-white transition-colors text-sm">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-[#918ca9] hover:text-white transition-colors text-sm">Terms of Use</Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-[#918ca9] hover:text-white transition-colors text-sm">Disclaimer</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#557c93]/20 mt-12 pt-8 text-center">
          <p className="text-[#918ca9] text-sm">© 2025 Found It. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
