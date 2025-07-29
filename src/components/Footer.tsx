import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Leaf, 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  Heart,
  Sunrise
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    "And into the forest I go, to lose my mind and find my soul.",
    "Nature does not hurry, yet everything is accomplished.",
    "In every walk in nature, one receives far more than they seek.",
    "The earth has music for those who listen.",
    "Between every two pines is a doorway to a new world."
  ];

  // Auto-rotate quotes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  const quickLinks = [
    { name: "Our Stays", href: "#stays" },
    { name: "Experience", href: "#experience" },
    { name: "Gallery", href: "#gallery" },
    { name: "Book Now", href: "#booking" },
    { name: "Contact", href: "#contact" }
  ];

  const policies = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cancellation Policy", href: "#" },
    { name: "Sustainability", href: "#" }
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-hero-gradient text-primary-foreground">
      {/* Animated Quote Carousel */}
      <div className="border-b border-primary-foreground/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="relative h-16 flex items-center justify-center">
            <div 
              key={currentQuote}
              className="absolute inset-0 flex items-center justify-center fade-in-up"
            >
              <blockquote className="text-lg md:text-xl font-light italic max-w-2xl">
                "{quotes[currentQuote]}"
              </blockquote>
            </div>
          </div>
          <div className="flex justify-center gap-1 mt-4">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuote(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentQuote 
                    ? 'bg-accent scale-125' 
                    : 'bg-primary-foreground/30 hover:bg-primary-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="h-8 w-8 text-accent" />
              <span className="text-2xl font-playfair font-bold">SoulCamp</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Where souls find peace and hearts find home. Experience the magic of mindful camping 
              in the lap of pristine nature.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Himalayan Foothills, Rishikesh</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-accent" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-accent" />
                <span>hello@soulcamp.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-playfair font-bold text-lg mb-6">Information</h3>
            <ul className="space-y-3">
              {policies.map((policy) => (
                <li key={policy.name}>
                  <a
                    href={policy.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                  >
                    {policy.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="font-playfair font-bold text-lg mb-6">Stay Connected</h3>
            <p className="text-primary-foreground/80 mb-4 text-sm">
              Get updates on new experiences, special offers, and nature wisdom.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                required
              />
              <Button 
                type="submit" 
                className="w-full golden-button"
              >
                <Mail className="mr-2 h-4 w-4" />
                Subscribe
              </Button>
            </form>

            {/* Social Links */}
            <div className="mt-6">
              <p className="text-sm text-primary-foreground/80 mb-3">Follow our journey</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="icon"
                    className="text-primary-foreground/80 hover:text-accent hover:bg-primary-foreground/10"
                    onClick={() => window.open(social.href, '_blank')}
                  >
                    <social.icon className="h-5 w-5" />
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-primary-foreground/20" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/70">
          <div className="flex items-center gap-2">
            <span>© 2024 SoulCamp. Made with</span>
            <Heart className="h-4 w-4 text-accent fill-accent" />
            <span>for nature lovers.</span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Sunrise className="h-4 w-4 text-accent" />
              "Leave Only Footprints"
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;