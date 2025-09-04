export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-gradient py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="font-montserrat font-bold text-4xl sm:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
              Turn Your Social Media Into a <span className="text-accent">Customer Acquisition Engine</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              We help online businesses increase their social media-driven revenue by 60-80% through strategic content and community management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => scrollToSection('contact')} 
                className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:bg-accent/90 transition-colors shadow-lg"
                data-testid="hero-cta-primary"
              >
                Get Your Free Social Media Audit
              </button>
              <button 
                onClick={() => scrollToSection('case-studies')} 
                className="bg-card/20 backdrop-blur-sm text-primary-foreground border border-primary-foreground/20 px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:bg-card/30 transition-colors"
                data-testid="hero-cta-secondary"
              >
                View Our Case Studies
              </button>
            </div>
          </div>
          
          <div className="relative">
            {/* Professional social media analytics dashboard mockup */}
            <div className="bg-card rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-inter font-semibold text-lg">Social Media Analytics</h3>
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-warning rounded-full"></div>
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                  <div className="w-3 h-3 bg-muted rounded-full"></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-success/10 p-4 rounded-lg">
                  <p className="text-success font-montserrat font-bold text-2xl" data-testid="metric-revenue-growth">+180%</p>
                  <p className="text-muted-foreground text-sm">Revenue Growth</p>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <p className="text-primary font-montserrat font-bold text-2xl" data-testid="metric-engagement-rate">65%</p>
                  <p className="text-muted-foreground text-sm">Engagement Rate</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Instagram</span>
                  <div className="w-24 bg-muted rounded-full h-2">
                    <div className="bg-success h-2 rounded-full w-20"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">LinkedIn</span>
                  <div className="w-24 bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-16"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Facebook</span>
                  <div className="w-24 bg-muted rounded-full h-2">
                    <div className="bg-warning h-2 rounded-full w-12"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
