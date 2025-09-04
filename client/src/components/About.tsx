import { Check } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-foreground mb-6">
              Meet Ankit Nishad, Your Social Media Strategist
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I founded ClarioSocial Studio with a simple mission: help online businesses unlock their full potential through strategic social media management.
              </p>
              <p>
                Having analyzed hundreds of online businesses, I noticed a clear pattern: incredible products and services struggling with inconsistent social media presence. That's where ClarioSocial Studio comes in.
              </p>
              <p className="font-medium text-foreground">
                We specialize exclusively in online businesses because we understand your unique challenges:
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4 my-8">
              {[
                "Converting social media engagement into actual sales",
                "Building authority in competitive digital markets",
                "Creating content that resonates with online audiences",
                "Scaling social media efforts without losing quality",
                "Measuring real ROI from social media investments"
              ].map((challenge, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <span className="text-sm">{challenge}</span>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground mb-8">
              Our approach combines data-driven strategy with creative execution, ensuring every post, comment, and campaign drives meaningful business results.
            </p>

            <div className="bg-card p-6 rounded-xl border border-border">
              <h4 className="font-inter font-semibold text-lg mb-4">Key Differentiators:</h4>
              <div className="space-y-2">
                {[
                  "Online business specialization and expertise",
                  "ROI-focused strategies, not vanity metrics",
                  "Transparent communication and reporting",
                  "Founder-led service and personal attention",
                  "Continuous optimization based on performance data"
                ].map((differentiator, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">{differentiator}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="relative">
              {/* Main portrait area */}
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 text-center">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-primary to-accent rounded-full mb-6 flex items-center justify-center">
                  <span className="text-6xl font-montserrat font-bold text-primary-foreground" data-testid="founder-initials">AN</span>
                </div>
                <h3 className="font-montserrat font-bold text-xl mb-2" data-testid="founder-name">Ankit Nishad</h3>
                <p className="text-muted-foreground mb-4" data-testid="founder-title">Founder & Social Media Strategist</p>
                <div className="flex justify-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-montserrat font-bold text-primary" data-testid="stat-businesses-analyzed">500+</div>
                    <div className="text-xs text-muted-foreground">Businesses Analyzed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-montserrat font-bold text-success" data-testid="stat-roi-increase">3x</div>
                    <div className="text-xs text-muted-foreground">Average ROI Increase</div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-card rounded-lg p-3 shadow-lg border border-border">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium">Strategy Session</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-card rounded-lg p-3 shadow-lg border border-border">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-medium">ROI Tracking</span>
                  <div className="text-accent text-xs font-bold">+180%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
