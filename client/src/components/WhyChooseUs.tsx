import { ShoppingBag, TrendingUp, MessageSquare, Award, CheckCircle } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: ShoppingBag,
      title: "ONLINE BUSINESS EXPERTISE",
      description: "We exclusively serve online businesses, so we understand your unique challenges, customer journey, and conversion requirements.",
      color: "primary"
    },
    {
      icon: TrendingUp,
      title: "RESULTS-FOCUSED APPROACH",
      description: "Every strategy, post, and campaign is designed with one goal: increasing your business revenue and growth through social media.",
      color: "success"
    },
    {
      icon: MessageSquare,
      title: "TRANSPARENT COMMUNICATION",
      description: "Regular reports, clear metrics, and open communication ensure you always know how your social media is impacting your bottom line.",
      color: "accent"
    },
    {
      icon: Award,
      title: "SCALABLE SOLUTIONS",
      description: "Our services grow with your business, from startup to scale-up, ensuring your social media strategy evolves with your needs.",
      color: "warning"
    },
    {
      icon: CheckCircle,
      title: "NO LONG-TERM COMMITMENTS",
      description: "We earn your business every month through results and service quality, not through lengthy contracts or commitments.",
      color: "primary"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-foreground mb-4">
            Why Online Businesses Choose ClarioSocial Studio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just another social media agency – we're your strategic growth partners
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="text-center"
              data-testid={`reason-${reason.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className={`w-20 h-20 bg-${reason.color}/10 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <reason.icon className={`w-10 h-10 text-${reason.color}`} />
              </div>
              <h3 className="font-montserrat font-bold text-xl mb-4">{reason.title}</h3>
              <p className="text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
