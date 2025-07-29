import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle,
  Clock,
  Star,
  Heart
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-5xl font-playfair font-bold text-foreground mb-6">
            Visit Us & <span className="text-accent">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to begin your journey? We're here to guide you every step of the way. 
            Reach out and let's start planning your soul's retreat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="nature-card">
            <CardHeader>
              <CardTitle className="text-2xl font-playfair text-foreground flex items-center gap-2">
                <MessageCircle className="h-6 w-6 text-accent" />
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What can we help you with?"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your dream retreat experience..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full golden-button text-lg py-6">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Map */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="nature-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-playfair font-bold text-foreground mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground">
                        Himalayan Foothills<br />
                        Near Rishikesh, Uttarakhand<br />
                        India 249192
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-muted-foreground">+91 98765 43210</p>
                      <p className="text-sm text-muted-foreground">Available 24/7 for emergencies</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">hello@soulcamp.com</p>
                      <p className="text-sm text-muted-foreground">We respond within 2 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MessageCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">WhatsApp</p>
                      <Button 
                        variant="outline" 
                        className="mt-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                        onClick={() => window.open('https://wa.me/919876543210', '_blank')}
                      >
                        Chat with us
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Office Hours</p>
                      <p className="text-muted-foreground">
                        Mon-Fri: 9:00 AM - 8:00 PM<br />
                        Sat-Sun: 10:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="nature-card">
              <CardContent className="p-0">
                <div className="bg-misty rounded-lg h-64 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-forest/20 to-accent/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-accent mx-auto mb-2" />
                      <p className="text-foreground font-medium">SoulCamp Location</p>
                      <p className="text-muted-foreground text-sm">Himalayan Foothills, Rishikesh</p>
                      <Button 
                        variant="outline" 
                        className="mt-3 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                        onClick={() => window.open('https://maps.google.com/?q=Rishikesh,Uttarakhand', '_blank')}
                      >
                        View on Google Maps
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reviews Preview */}
            <Card className="nature-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-playfair font-bold text-foreground">
                    What Guests Say
                  </h3>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">4.9/5</span>
                  </div>
                </div>
                <blockquote className="text-muted-foreground italic text-sm leading-relaxed">
                  "The most transformative experience of my life. SoulCamp isn't just a place to stay, 
                  it's a place to find yourself."
                </blockquote>
                <cite className="text-xs text-accent not-italic block mt-2">- Recent Guest</cite>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-muted-foreground mb-4">
            <Heart className="h-5 w-5 text-accent" />
            <span className="font-medium">Ready to disconnect and reconnect?</span>
            <Heart className="h-5 w-5 text-accent" />
          </div>
          <Button 
            className="golden-button text-lg px-8 py-4"
            onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;