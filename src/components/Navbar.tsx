
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact" },
    { path: "/container-specs", label: "Container Specs" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/lovable-uploads/d7ab430c-f987-4580-bff1-f4e56afe35d4.png"
              alt="JM Global Logistics Logo"
              className="h-10 w-10"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-[#05112F]">JM Global Logistics</span>
              <span className="text-xs text-gray-600 hidden sm:block">Commitment to deliver the world</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-[#05112F] ${
                  isActive(link.path) ? 'text-[#05112F]' : 'text-gray-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
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
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActive(link.path) ? 'text-[#05112F] bg-gray-50' : 'text-gray-600 hover:text-[#05112F]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
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
