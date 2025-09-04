import { ShoppingBag, User, TrendingUp } from "lucide-react";

export default function CaseStudies() {
  const caseStudies = [
    {
      icon: ShoppingBag,
      category: "E-commerce Success",
      title: "Fashion E-commerce Store Increases Social Media Sales by 180%",
      challenge: "Low social media conversion rates despite good traffic",
      strategy: "Strategic content calendar focused on lifestyle and user-generated content",
      results: [
        { metric: "+180%", label: "Sales Increase" },
        { metric: "+65%", label: "Engagement" }
      ],
      timeframe: "4 months",
      testimonial: "Our social media now drives 30% of our total revenue",
      color: "success"
    },
    {
      icon: User,
      category: "Authority Building",
      title: "Business Coach Becomes Industry Thought Leader in 90 Days",
      challenge: "Great expertise but limited online authority and visibility",
      strategy: "LinkedIn thought leadership + Instagram personal branding",
      results: [
        { metric: "+300%", label: "Discovery Calls" },
        { metric: "3", label: "Media Features" }
      ],
      timeframe: "3 months",
      testimonial: "I can now charge 3x more because of my established authority",
      color: "primary"
    },
    {
      icon: TrendingUp,
      category: "Lead Generation",
      title: "B2B SaaS Startup Doubles Trial Signups Through Social Media",
      challenge: "Complex product difficult to explain, low awareness in target market",
      strategy: "Educational content series + community building on LinkedIn",
      results: [
        { metric: "+120%", label: "Trial Signups" },
        { metric: "-50%", label: "Acquisition Cost" }
      ],
      timeframe: "6 months",
      testimonial: "Social media is now our most cost-effective acquisition channel",
      color: "accent"
    }
  ];

  return (
    <section id="case-studies" className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-foreground mb-4">
            Real Results from Real Businesses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how we've helped online businesses transform their social media into revenue-generating engines
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="bg-background rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300"
              data-testid={`case-study-${study.category.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br from-${study.color} to-${study.color}/70 rounded-2xl flex items-center justify-center mb-4`}>
                  <study.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-montserrat font-bold text-xl mb-2">{study.category}</h3>
                <h4 className="font-inter font-semibold text-lg text-primary mb-4">{study.title}</h4>
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h5 className="font-inter font-semibold text-sm text-foreground mb-2">Challenge:</h5>
                  <p className="text-sm text-muted-foreground">{study.challenge}</p>
                </div>
                <div>
                  <h5 className="font-inter font-semibold text-sm text-foreground mb-2">Strategy:</h5>
                  <p className="text-sm text-muted-foreground">{study.strategy}</p>
                </div>
                <div>
                  <h5 className="font-inter font-semibold text-sm text-foreground mb-2">Results:</h5>
                  <div className="flex space-x-4 mb-2">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="text-center">
                        <div className={`text-2xl font-montserrat font-bold text-${study.color}`} data-testid={`result-metric-${resultIndex}`}>
                          {result.metric}
                        </div>
                        <div className="text-xs text-muted-foreground">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="font-inter font-semibold text-sm text-foreground mb-2">Timeframe:</h5>
                  <p className="text-sm text-muted-foreground">{study.timeframe}</p>
                </div>
              </div>

              <blockquote className={`bg-muted/30 p-4 rounded-lg border-l-4 border-${study.color}`}>
                <p className="text-sm italic text-foreground" data-testid={`testimonial-${index}`}>"{study.testimonial}"</p>
                <cite className="text-xs text-muted-foreground not-italic">- Client Testimonial</cite>
              </blockquote>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            <strong>Disclaimer:</strong> Results vary by business model, market conditions, and implementation. Past performance does not guarantee future results.
          </p>
        </div>
      </div>
    </section>
  );
}
