
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Ship, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-navy p-2 rounded-lg">
              <Ship className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-navy">JM Global Logistics</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-navy ${
                isActive('/') ? 'text-navy' : 'text-gray-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/container-specs"
              className={`text-sm font-medium transition-colors hover:text-navy ${
                isActive('/container-specs') ? 'text-navy' : 'text-gray-600'
              }`}
            >
              Container Specifications
            </Link>
            <Button className="bg-teal hover:bg-teal/90 text-white">
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  isActive('/') ? 'text-navy bg-gray-50' : 'text-gray-600 hover:text-navy'
                }`}
              >
                Home
              </Link>
              <Link
                to="/container-specs"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  isActive('/container-specs') ? 'text-navy bg-gray-50' : 'text-gray-600 hover:text-navy'
                }`}
              >
                Container Specifications
              </Link>
              <div className="px-3 py-2">
                <Button className="w-full bg-teal hover:bg-teal/90 text-white">
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
