import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from '@emailjs/browser';
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Mail, Clock, Info } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      fullName: "",
      businessName: "",
      email: "",
      businessType: "",
      monthlyRevenue: "",
      challenge: "",
      referral: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: InsertContactSubmission) => {
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration - these will be set as environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';
      
      const templateParams = {
        from_name: data.fullName,
        from_email: data.email,
        business_name: data.businessName,
        business_type: data.businessType,
        monthly_revenue: data.monthlyRevenue,
        challenge: data.challenge,
        referral: data.referral || 'Not specified',
        to_email: 'hello@clariosocialstudio.in',
      };
      
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setIsSubmitted(true);
      toast({
        title: "Thank you for your submission!",
        description: "We'll get back to you within 4 hours during business days.",
      });
      form.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Submission failed",
        description: "Please try again later or contact us directly at hello@clariosocialstudio.in",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-card rounded-2xl p-12 border border-border">
              <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-success-foreground" />
              </div>
              <h2 className="font-montserrat font-bold text-2xl text-foreground mb-4">
                Thank You for Your Interest!
              </h2>
              <p className="text-muted-foreground mb-6">
                We've received your submission and will respond within 4 hours during business days.
              </p>
              <Button 
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                data-testid="submit-another-inquiry"
              >
                Submit Another Inquiry
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-foreground mb-4">
            Ready to Transform Your Social Media?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss how we can help your online business achieve its growth goals
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your full name" 
                            {...field} 
                            data-testid="input-full-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="businessName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Name *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your business name" 
                            {...field} 
                            data-testid="input-business-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="Enter your email address" 
                          {...field} 
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="businessType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Type *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-business-type">
                              <SelectValue placeholder="Select business type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="ecommerce">E-commerce</SelectItem>
                            <SelectItem value="saas">SaaS/Tech</SelectItem>
                            <SelectItem value="coaching">Coaching/Consulting</SelectItem>
                            <SelectItem value="agency">Digital Agency</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="monthlyRevenue"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Monthly Revenue *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-monthly-revenue">
                              <SelectValue placeholder="Select revenue range" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="0-25k">₹0 - ₹25,000</SelectItem>
                            <SelectItem value="25k-100k">₹25,000 - ₹1,00,000</SelectItem>
                            <SelectItem value="100k-500k">₹1,00,000 - ₹5,00,000</SelectItem>
                            <SelectItem value="500k-1m">₹5,00,000 - ₹10,00,000</SelectItem>
                            <SelectItem value="1m+">₹10,00,000+</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="challenge"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Social Media Challenge *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe your biggest social media challenge or goal..."
                          className="resize-none"
                          rows={4}
                          {...field} 
                          data-testid="textarea-challenge"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="referral"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>How did you hear about us?</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value || ""}>
                        <FormControl>
                          <SelectTrigger data-testid="select-referral">
                            <SelectValue placeholder="Select option (optional)" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="google">Google Search</SelectItem>
                          <SelectItem value="social">Social Media</SelectItem>
                          <SelectItem value="referral">Referral</SelectItem>
                          <SelectItem value="content">Blog/Content</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-accent text-accent-foreground py-4 text-lg font-semibold hover:bg-accent/90"
                  disabled={isSubmitting}
                  data-testid="submit-contact-form"
                >
                  {isSubmitting ? "Submitting..." : "Request Your Free Strategy Session"}
                </Button>
              </form>
            </Form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="font-montserrat font-bold text-xl mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-inter font-medium">Email</p>
                    <p className="text-muted-foreground" data-testid="contact-email">hello@clariosocialstudio.in</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-inter font-medium">Response Time</p>
                    <p className="text-muted-foreground">Within 4 hours during business days</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                    <Info className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <p className="font-inter font-medium">Free Consultation</p>
                    <p className="text-muted-foreground">Complimentary 30-minute strategy discussion</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="font-montserrat font-bold text-xl mb-6">Office Hours</h3>
              <div className="space-y-2 text-muted-foreground">
                <p><span className="font-medium text-foreground">Monday - Friday:</span> 9:00 AM - 6:00 PM IST</p>
                <p><span className="font-medium text-foreground">Response Guarantee:</span> All inquiries answered within 24 hours</p>
                <p><span className="font-medium text-foreground">Emergency Support:</span> Available for existing clients</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-primary-foreground">
              <h3 className="font-montserrat font-bold text-xl mb-4">What Happens Next?</h3>
              <ol className="space-y-2 text-sm">
                <li className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary-foreground/20 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                  <span>We'll review your business and social media goals</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary-foreground/20 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                  <span>Schedule a free 30-minute strategy session</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary-foreground/20 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                  <span>Receive a customized social media growth plan</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
