import { Linkedin, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-montserrat font-bold text-lg">CS</span>
              </div>
              <div>
                <h3 className="font-montserrat font-bold text-lg text-foreground">ClarioSocial Studio</h3>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-4">Strategic Social Media Management for Online Businesses</p>
            <p className="text-muted-foreground text-xs">Founded 2025 | Based in India | Serving Global Online Businesses</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-inter font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                  data-testid="footer-link-services"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('case-studies')} 
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                  data-testid="footer-link-case-studies"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('blog')} 
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                  data-testid="footer-link-blog"
                >
                  Blog
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                  data-testid="footer-link-about"
                >
                  About Ankit
                </button>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-privacy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-terms">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-inter font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                  data-testid="footer-service-starter"
                >
                  Starter Digital
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                  data-testid="footer-service-growth"
                >
                  Growth Digital
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                  data-testid="footer-service-scale"
                >
                  Scale Digital
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                  data-testid="footer-service-enterprise"
                >
                  Enterprise Digital
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                  data-testid="footer-service-custom"
                >
                  Custom Solutions
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-inter font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p data-testid="footer-email">hello@clariosocialstudio.in</p>
              <p data-testid="footer-website">www.clariosocialstudio.in</p>
            </div>
            <div className="mt-4">
              <h5 className="font-inter font-medium text-foreground mb-2 text-sm">Follow Us</h5>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="w-8 h-8 bg-muted hover:bg-primary transition-colors rounded-lg flex items-center justify-center group"
                  data-testid="social-linkedin"
                >
                  <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 bg-muted hover:bg-primary transition-colors rounded-lg flex items-center justify-center group"
                  data-testid="social-instagram"
                >
                  <Instagram className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 bg-muted hover:bg-primary transition-colors rounded-lg flex items-center justify-center group"
                  data-testid="social-twitter"
                >
                  <Twitter className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="section-divider h-px my-8"></div>

        <div className="text-center text-xs text-muted-foreground">
          <p data-testid="footer-copyright">© 2025 ClarioSocial Studio. All rights reserved.</p>
          <p className="mt-1" data-testid="footer-disclaimer">
            Results may vary based on business model, market conditions, and implementation. We do not guarantee specific outcomes or results.
          </p>
        </div>
      </div>
    </footer>
  );
}
