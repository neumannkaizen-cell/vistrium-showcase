import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import vistriumLogo from "@/assets/vistrium-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Tools", href: "#tools" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact Me", href: "#contact" },
  ];

  return (
    <header className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-card">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={vistriumLogo} 
              alt="ViSTRIUM Logo" 
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold">ViSTRIUM</span>
            <span className="text-sm text-accent hidden sm:inline">Ecommerce Studio</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-accent transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <Button className="btn-hero hidden sm:inline-flex">
              Let's Talk
            </Button>
            
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-accent/20">
            <div className="flex flex-col space-y-3 mt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium hover:text-accent transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="btn-hero mt-4 self-start">
                Let's Talk
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;