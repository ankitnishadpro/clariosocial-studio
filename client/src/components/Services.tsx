import { Check } from "lucide-react";

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const packages = [
    {
      name: "STARTER DIGITAL",
      price: "₹12,999",
      description: "Perfect for: Solo entrepreneurs, online coaches, new e-commerce stores",
      features: [
        "Instagram + LinkedIn management",
        "16 strategic posts monthly",
        "Daily community engagement",
        "Weekly performance reports",
        "Personal brand development focus"
      ],
      popular: false,
      premium: false
    },
    {
      name: "GROWTH DIGITAL",
      price: "₹24,999",
      description: "Perfect for: Growing e-commerce, established consultants, digital agencies",
      features: [
        "Instagram + Facebook + LinkedIn + Pinterest",
        "32 posts + 4 video content pieces monthly",
        "Advanced community management",
        "Bi-weekly strategy optimization",
        "Lead generation integration"
      ],
      popular: true,
      premium: false
    },
    {
      name: "SCALE DIGITAL",
      price: "₹49,999",
      description: "Perfect for: Established online businesses, SaaS companies, high-growth startups",
      features: [
        "All major platforms + YouTube + Twitter",
        "48 posts + 8 videos + blog promotion",
        "24/7 community management",
        "Weekly strategic consultations",
        "Custom automation and advanced analytics"
      ],
      popular: false,
      premium: false
    },
    {
      name: "ENTERPRISE DIGITAL",
      price: "₹99,999",
      description: "Perfect for: Large online businesses, funded startups, market leaders",
      features: [
        "Complete digital ecosystem management",
        "Dedicated account team",
        "Custom content series and campaigns",
        "Strategic consulting and innovation",
        "White-glove service and priority support"
      ],
      popular: false,
      premium: true
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-foreground mb-4">
            Comprehensive Social Media Solutions for Online Businesses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect package for your business growth stage and objectives
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`
                rounded-2xl p-8 hover:shadow-lg transition-all duration-300 relative
                ${pkg.popular ? 'bg-background border-2 border-accent' : ''}
                ${pkg.premium ? 'bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20' : ''}
                ${!pkg.popular && !pkg.premium ? 'bg-background border border-border' : ''}
              `}
              data-testid={`package-${pkg.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-inter font-semibold">MOST POPULAR</span>
                </div>
              )}
              {pkg.premium && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-inter font-semibold">PREMIUM</span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="font-montserrat font-bold text-xl mb-2">{pkg.name}</h3>
                <div className="text-3xl font-montserrat font-bold text-primary mb-2">
                  {pkg.price}<span className="text-lg font-normal text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground text-sm">{pkg.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-success rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-success-foreground" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={scrollToContact}
                className={`
                  w-full py-3 rounded-lg font-inter font-semibold hover:opacity-90 transition-colors
                  ${pkg.popular ? 'bg-accent text-accent-foreground' : 'bg-primary text-primary-foreground'}
                `}
                data-testid={`button-get-started-${pkg.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {pkg.premium ? 'Contact Us' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            <strong>All packages include:</strong> No long-term contracts • Cancel anytime with 30-day notice • Transparent pricing with no hidden fees
          </p>
        </div>
      </div>
    </section>
  );
}
