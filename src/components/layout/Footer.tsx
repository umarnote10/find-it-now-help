
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t mt-auto">
      <div className="foundit-container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-foundit-purple" />
              <span className="font-bold text-lg text-foundit-purpleDark">Found It</span>
            </Link>
            <p className="mt-2 text-sm text-gray-600">
              Found It is Pakistan's trusted platform to report, search, and recover lost items quickly through direct WhatsApp contact.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/lost-items" className="text-gray-600 hover:text-foundit-purple">Lost Items</Link>
              </li>
              <li>
                <Link to="/found-items" className="text-gray-600 hover:text-foundit-purple">Found Items</Link>
              </li>
              <li>
                <Link to="/post/lost" className="text-gray-600 hover:text-foundit-purple">Report Lost</Link>
              </li>
              <li>
                <Link to="/post/found" className="text-gray-600 hover:text-foundit-purple">Report Found</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">About</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-foundit-purple">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-foundit-purple">Contact Us</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-foundit-purple">FAQ</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-foundit-purple">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-foundit-purple">Terms of Use</Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-gray-600 hover:text-foundit-purple">Disclaimer</Link>
              </li>
              <li>
                <Link to="/dmca" className="text-gray-600 hover:text-foundit-purple">DMCA Policy</Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-600 hover:text-foundit-purple">Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6 text-center text-sm text-gray-500">
          <p>© 2025 Found It. All rights reserved.</p>
          <p className="mt-1">
            Developed by <span className="font-medium">VnDvx</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
