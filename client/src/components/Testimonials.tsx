export default function Testimonials() {
  const testimonials = [
    {
      initials: "PS",
      name: "Priya S.",
      title: "Founder, E-commerce Jewelry Brand",
      quote: "Working with Ankit transformed our social media from a time sink into our best marketing channel. We now get 5-8 qualified leads monthly from Instagram alone.",
      result: "400% increase in social media leads",
      color: "success"
    },
    {
      initials: "RK",
      name: "Rajesh K.",
      title: "Business Consultant",
      quote: "The strategic approach to LinkedIn helped establish me as a thought leader in my industry. My consulting rates have increased by 60% since working with ClarioSocial Studio.",
      result: "60% rate increase, 200% more speaking opportunities",
      color: "primary"
    },
    {
      initials: "AM",
      name: "Arjun M.",
      title: "Co-founder, SaaS Startup",
      quote: "Our social media-driven trial signups doubled within 3 months. The ROI is incredible compared to our paid advertising.",
      result: "120% increase in trial signups",
      color: "accent"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real feedback from real business owners who've transformed their social media with us
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300"
              data-testid={`testimonial-${index}`}
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br from-${testimonial.color} to-${testimonial.color}/70 rounded-full flex items-center justify-center mr-4`}>
                  <span className={`text-${testimonial.color}-foreground font-montserrat font-bold`}>
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-foreground" data-testid={`client-name-${index}`}>
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground" data-testid={`client-title-${index}`}>
                    {testimonial.title}
                  </p>
                </div>
              </div>
              <blockquote className="text-foreground mb-4 leading-relaxed" data-testid={`client-quote-${index}`}>
                "{testimonial.quote}"
              </blockquote>
              <div className={`bg-${testimonial.color}/10 p-3 rounded-lg`}>
                <p className={`text-sm font-inter font-semibold text-${testimonial.color}`} data-testid={`client-result-${index}`}>
                  Results: {testimonial.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
