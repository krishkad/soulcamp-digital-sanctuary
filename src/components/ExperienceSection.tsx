import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Sunrise, 
  Leaf, 
  Flame, 
  Music,
  Camera,
  Heart
} from "lucide-react";
import yogaImage from "@/assets/yoga-lake.jpg";
import bonfireImage from "@/assets/bonfire-night.jpg";

const ExperienceSection = () => {
  const [visibleExperiences, setVisibleExperiences] = useState<number[]>([]);

  const experiences = [
    {
      id: 1,
      time: "6:00 AM",
      title: "Sunrise Yoga by the Lake",
      description: "Begin your day with gentle movement as nature awakens around you. Our certified instructor guides you through poses inspired by the natural world.",
      icon: Sunrise,
      image: yogaImage,
      color: "from-accent/20 to-transparent"
    },
    {
      id: 2,
      time: "9:00 AM",
      title: "Forest Meditation Walk",
      description: "A mindful journey through ancient trails. Listen to bird songs, feel the earth beneath your feet, and discover inner stillness among the trees.",
      icon: Leaf,
      image: yogaImage,
      color: "from-forest/20 to-transparent"
    },
    {
      id: 3,
      time: "2:00 PM",
      title: "Nature Photography",
      description: "Capture the soul of the wilderness with guidance from professional photographers. Learn to see through nature's eyes.",
      icon: Camera,
      image: yogaImage,
      color: "from-misty/20 to-transparent"
    },
    {
      id: 4,
      time: "6:00 PM",
      title: "Sunset Reflection",
      description: "Find your quiet space as day transitions to night. Journal, sketch, or simply be present with the changing light.",
      icon: Heart,
      image: bonfireImage,
      color: "from-earth/20 to-transparent"
    },
    {
      id: 5,
      time: "8:00 PM",
      title: "Bonfire & Acoustic Stories",
      description: "Gather around the flames for soul-stirring music, storytelling, and deep conversations under a canopy of stars.",
      icon: Music,
      image: bonfireImage,
      color: "from-accent/20 to-transparent"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-id') || '0');
            setVisibleExperiences(prev => [...new Set([...prev, id])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('.experience-card');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-5xl font-playfair font-bold text-foreground mb-6">
            A Day in <span className="text-accent">Stillness</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every moment at SoulCamp is designed to slow time, deepen breath, 
            and awaken your connection to the natural rhythm of life.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-accent/30 hidden lg:block"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                data-id={experience.id}
                className={`experience-card flex flex-col lg:flex-row items-center gap-8 transition-all duration-1000 ${
                  visibleExperiences.includes(experience.id) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                } ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Content */}
                <div className="flex-1 lg:max-w-md">
                  <Card className="nature-card">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-3 rounded-full bg-gradient-to-br ${experience.color}`}>
                          <experience.icon className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <span className="text-sm font-medium text-accent">{experience.time}</span>
                          <h3 className="text-xl font-playfair font-bold text-foreground">
                            {experience.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {experience.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:block relative">
                  <div className="w-4 h-4 bg-accent rounded-full border-4 border-background shadow-soft"></div>
                </div>

                {/* Image */}
                <div className="flex-1 lg:max-w-md">
                  <div className="relative group">
                    <img
                      src={experience.image}
                      alt={experience.title}
                      className="w-full h-64 object-cover rounded-xl shadow-nature group-hover:shadow-golden transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest/50 to-transparent rounded-xl opacity-60"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <Flame className="h-5 w-5 text-accent" />
            <span className="font-medium">Every day flows with intention and peace</span>
            <Flame className="h-5 w-5 text-accent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;