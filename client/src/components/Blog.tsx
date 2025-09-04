import { ShoppingBag, User, Award, BarChart3, TrendingUp } from "lucide-react";

export default function Blog() {
  const blogPosts = [
    {
      icon: ShoppingBag,
      category: "E-commerce Guide",
      title: "The Complete Guide to Social Media for E-commerce in 2025",
      excerpt: "Everything you need to know about leveraging social media to drive e-commerce sales, from platform selection to conversion optimization.",
      readTime: "8 min read",
      date: "January 15, 2025",
      color: "primary"
    },
    {
      icon: User,
      category: "LinkedIn Strategy",
      title: "How SaaS Companies Can Generate 50+ Leads Monthly Through LinkedIn",
      excerpt: "A step-by-step guide to using LinkedIn for B2B SaaS lead generation, including content strategies and outreach tactics.",
      readTime: "12 min read",
      date: "January 10, 2025",
      color: "success"
    },
    {
      icon: Award,
      category: "Personal Branding",
      title: "Building Authority: Personal Branding Strategy for Online Coaches",
      excerpt: "Learn how to establish yourself as a thought leader in your industry and attract premium clients through strategic personal branding.",
      readTime: "10 min read",
      date: "January 5, 2025",
      color: "accent"
    },
    {
      icon: BarChart3,
      category: "Analytics",
      title: "Social Media ROI Tracking: Metrics That Actually Matter for Online Businesses",
      excerpt: "Move beyond vanity metrics and learn which KPIs actually correlate with business growth and revenue generation.",
      readTime: "6 min read",
      date: "December 28, 2023",
      color: "warning"
    },
    {
      icon: TrendingUp,
      category: "Platform Strategy",
      title: "Platform Comparison: Where Should Your Online Business Focus in 2025?",
      excerpt: "A comprehensive analysis of major social media platforms and which ones are most effective for different types of online businesses.",
      readTime: "15 min read",
      date: "December 20, 2023",
      color: "primary"
    }
  ];

  return (
    <section id="blog" className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-foreground mb-4">
            Insights for Online Business Growth
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strategic insights, tips, and trends to help your online business succeed
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className="bg-background rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
              data-testid={`blog-post-${index}`}
            >
              <div className={`h-48 bg-gradient-to-br from-${post.color}/20 to-accent/20 flex items-center justify-center`}>
                <div className="text-center">
                  <div className={`w-16 h-16 bg-${post.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <post.icon className={`w-8 h-8 text-${post.color}-foreground`} />
                  </div>
                  <span className="text-sm text-muted-foreground">{post.category}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-inter font-semibold text-lg mb-2 line-clamp-2" data-testid={`blog-title-${index}`}>
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3" data-testid={`blog-excerpt-${index}`}>
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <span data-testid={`blog-read-time-${index}`}>{post.readTime}</span>
                  <span data-testid={`blog-date-${index}`}>{post.date}</span>
                </div>
                <button 
                  className="text-primary font-inter font-medium hover:text-primary/80 transition-colors"
                  data-testid={`blog-read-more-${index}`}
                >
                  Read Full Article
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-inter font-semibold hover:bg-primary/90 transition-colors"
            data-testid="blog-view-all"
          >
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}
