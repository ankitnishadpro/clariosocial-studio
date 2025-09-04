import { Search, Edit, Users, BarChart3, ArrowRight } from "lucide-react";

export default function Process() {
  const steps = [
    {
      number: 1,
      title: "STRATEGIC DISCOVERY",
      description: "We analyze your business model, target audience, and competitive landscape to create a customized social media strategy aligned with your revenue goals.",
      icon: Search,
      color: "primary"
    },
    {
      number: 2,
      title: "CONTENT DEVELOPMENT",
      description: "Our team creates high-quality, brand-consistent content designed to engage your audience and drive specific business actions.",
      icon: Edit,
      color: "accent"
    },
    {
      number: 3,
      title: "COMMUNITY BUILDING",
      description: "We actively manage your social media presence, engaging with your audience and building relationships that convert followers into customers.",
      icon: Users,
      color: "success"
    },
    {
      number: 4,
      title: "PERFORMANCE OPTIMIZATION",
      description: "We continuously monitor, analyze, and optimize your social media performance to ensure maximum ROI and business impact.",
      icon: BarChart3,
      color: "warning"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-foreground mb-4">
            Our Proven 4-Step Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A systematic approach that transforms your social media into a business growth engine
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div 
                className="bg-card rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-border"
                data-testid={`process-step-${step.number}`}
              >
                <div className={`w-16 h-16 bg-${step.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <span className={`text-2xl font-montserrat font-bold text-${step.color}-foreground`}>
                    {step.number}
                  </span>
                </div>
                <h3 className={`font-montserrat font-bold text-xl mb-4 text-${step.color}`}>
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Connector Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-8 h-8 text-border" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
