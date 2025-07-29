import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Wifi, 
  Coffee, 
  Mountain, 
  Utensils, 
  Star, 
  Users,
  Bed,
  Waves
} from "lucide-react";
import tentInterior from "@/assets/tent-interior.jpg";

const StaysSection = () => {
  const [selectedPackage, setSelectedPackage] = useState(0);

  const packages = [
    {
      id: 1,
      name: "Serenity Tent",
      tagline: "Lake View",
      price: "₹8,999",
      duration: "per night",
      image: tentInterior,
      features: [
        { icon: Mountain, text: "Lake View" },
        { icon: Bed, text: "King Bed" },
        { icon: Coffee, text: "Morning Tea" },
        { icon: Wifi, text: "Wi-Fi Available" },
      ],
      highlights: [
        "Private deck overlooking the lake",
        "Premium organic bedding",
        "Guided sunrise meditation"
      ],
      popular: true
    },
    {
      id: 2,
      name: "Forest Whisper",
      tagline: "Deep Woods",
      price: "₹7,499",
      duration: "per night",
      image: tentInterior,
      features: [
        { icon: Mountain, text: "Forest View" },
        { icon: Users, text: "2 Guests" },
        { icon: Utensils, text: "Meals Included" },
        { icon: Star, text: "Stargazing Deck" },
      ],
      highlights: [
        "Surrounded by ancient pines",
        "Private outdoor shower",
        "Bird watching tours included"
      ]
    },
    {
      id: 3,
      name: "Riverside Bliss",
      tagline: "Premium",
      price: "₹12,999",
      duration: "per night",
      image: tentInterior,
      features: [
        { icon: Waves, text: "River Access" },
        { icon: Star, text: "Luxury Suite" },
        { icon: Coffee, text: "Personal Chef" },
        { icon: Mountain, text: "Spa Access" },
      ],
      highlights: [
        "Private riverside location",
        "In-tent spa treatments",
        "Personalized nature experiences"
      ],
      luxury: true
    }
  ];

  return (
    <section id="stays" className="py-20 bg-nature-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-5xl font-playfair font-bold text-foreground mb-6">
            Choose Your <span className="text-accent">Escape</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each stay is crafted to offer a unique connection with nature, 
            from intimate forest hideaways to luxury lakefront retreats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <Card 
              key={pkg.id}
              className={`nature-card cursor-pointer transition-all duration-500 ${
                selectedPackage === index ? 'ring-2 ring-accent shadow-golden' : ''
              }`}
              onClick={() => setSelectedPackage(index)}
            >
              <div className="relative">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {pkg.popular && (
                    <Badge className="bg-accent text-accent-foreground">
                      Most Popular
                    </Badge>
                  )}
                  {pkg.luxury && (
                    <Badge className="bg-primary text-primary-foreground">
                      Luxury
                    </Badge>
                  )}
                  <Badge variant="secondary">{pkg.tagline}</Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-playfair font-bold text-foreground mb-1">
                      {pkg.name}
                    </h3>
                    <p className="text-muted-foreground">{pkg.duration}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-accent">{pkg.price}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <feature.icon className="h-4 w-4" />
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 mb-6">
                  {pkg.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className="w-full golden-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Select This Stay
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            Compare All Packages
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StaysSection;