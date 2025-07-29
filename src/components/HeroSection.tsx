import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Play, Volume2, VolumeX } from "lucide-react";
import heroImage from "@/assets/hero-glamping.jpg";

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    // Generate floating particle positions
    const generateParticles = () => {
      const newParticles = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 6,
      }));
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  const scrollToExplore = () => {
    const element = document.querySelector('#stays');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury glamping tents by a misty lake"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 bg-accent/20 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
            }}
          >
            <div className="w-full h-full bg-accent/30 rounded-full float"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-4 fade-in-up">
        <h1 className="text-6xl md:text-8xl font-playfair font-bold text-primary-foreground mb-6 text-shadow-soft">
          Nature welcomes
          <br />
          <span className="text-accent">you home</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto font-light">
          Experience soulful camping amidst peace, trees, and stars. 
          Disconnect to reconnect with your inner self.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <Button 
            className="golden-button text-lg px-8 py-4"
            onClick={() => scrollToExplore()}
          >
            Book Your Stay
          </Button>
          
          <Button
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg"
            onClick={() => scrollToExplore()}
          >
            <Play className="mr-2 h-5 w-5" />
            Explore the Retreat
          </Button>
        </div>

        {/* Ambient Audio Toggle */}
        <div className="flex items-center justify-center gap-2 text-primary-foreground/70">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsPlaying(!isPlaying)}
            className="text-primary-foreground/70 hover:text-primary-foreground"
          >
            {isPlaying ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
            <span className="ml-2 text-sm">
              {isPlaying ? "Nature sounds on" : "Click for nature sounds"}
            </span>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={scrollToExplore}
          className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
        >
          <ChevronDown className="h-8 w-8 animate-bounce" />
        </button>
      </div>

      {/* Tagline */}
      <div className="absolute bottom-4 left-4 z-20 text-primary-foreground/60 text-sm font-light">
        Arrive. Unplug. Breathe.
      </div>
    </section>
  );
};

export default HeroSection;