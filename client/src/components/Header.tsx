import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-montserrat font-bold text-lg">CS</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-montserrat font-bold text-xl text-foreground">ClarioSocial Studio</h1>
              <p className="text-xs text-muted-foreground">Strategic Social Media Management</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="font-inter font-medium text-foreground hover:text-primary transition-colors"
              data-testid="nav-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="font-inter font-medium text-foreground hover:text-primary transition-colors"
              data-testid="nav-services"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="font-inter font-medium text-foreground hover:text-primary transition-colors"
              data-testid="nav-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('case-studies')} 
              className="font-inter font-medium text-foreground hover:text-primary transition-colors"
              data-testid="nav-case-studies"
            >
              Case Studies
            </button>
            <button 
              onClick={() => scrollToSection('blog')} 
              className="font-inter font-medium text-foreground hover:text-primary transition-colors"
              data-testid="nav-blog"
            >
              Blog
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="font-inter font-medium text-foreground hover:text-primary transition-colors"
              data-testid="nav-contact"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => scrollToSection('contact')} 
              className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-inter font-medium hover:bg-primary/90 transition-colors shadow-sm"
              data-testid="cta-get-free-audit"
            >
              Get Free Audit
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-button"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden" data-testid="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border bg-card">
              <button 
                onClick={() => scrollToSection('home')} 
                className="block px-3 py-2 font-inter font-medium text-foreground hover:text-primary transition-colors w-full text-left"
                data-testid="mobile-nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="block px-3 py-2 font-inter font-medium text-foreground hover:text-primary transition-colors w-full text-left"
                data-testid="mobile-nav-services"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="block px-3 py-2 font-inter font-medium text-foreground hover:text-primary transition-colors w-full text-left"
                data-testid="mobile-nav-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('case-studies')} 
                className="block px-3 py-2 font-inter font-medium text-foreground hover:text-primary transition-colors w-full text-left"
                data-testid="mobile-nav-case-studies"
              >
                Case Studies
              </button>
              <button 
                onClick={() => scrollToSection('blog')} 
                className="block px-3 py-2 font-inter font-medium text-foreground hover:text-primary transition-colors w-full text-left"
                data-testid="mobile-nav-blog"
              >
                Blog
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block px-3 py-2 font-inter font-medium text-foreground hover:text-primary transition-colors w-full text-left"
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>
              <div className="px-3 py-2">
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg font-inter font-medium hover:bg-primary/90 transition-colors shadow-sm text-center"
                  data-testid="mobile-cta-get-free-audit"
                >
                  Get Free Audit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
