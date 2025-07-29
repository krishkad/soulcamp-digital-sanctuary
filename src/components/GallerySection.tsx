import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, ZoomIn } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import heroImage from "@/assets/hero-glamping.jpg";
import tentInterior from "@/assets/tent-interior.jpg";
import yogaImage from "@/assets/yoga-lake.jpg";
import bonfireImage from "@/assets/bonfire-night.jpg";

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filters = [
    { id: "all", label: "All" },
    { id: "nature", label: "Nature" },
    { id: "tents", label: "Tents" },
    { id: "experiences", label: "Experiences" },
    { id: "night", label: "Night Sky" }
  ];

  const galleryImages = [
    {
      id: 1,
      src: heroImage,
      alt: "Luxury glamping tents by misty lake",
      category: ["nature", "tents"],
      title: "Lakefront Serenity"
    },
    {
      id: 2,
      src: tentInterior,
      alt: "Luxurious tent interior with natural lighting",
      category: ["tents"],
      title: "Interior Comfort"
    },
    {
      id: 3,
      src: yogaImage,
      alt: "Sunrise yoga by the lake",
      category: ["nature", "experiences"],
      title: "Morning Meditation"
    },
    {
      id: 4,
      src: bonfireImage,
      alt: "Bonfire under starry night sky",
      category: ["night", "experiences"],
      title: "Starlit Evenings"
    },
    {
      id: 5,
      src: heroImage,
      alt: "Forest path through ancient trees",
      category: ["nature"],
      title: "Ancient Trails"
    },
    {
      id: 6,
      src: yogaImage,
      alt: "Meditation deck overlooking mountains",
      category: ["nature", "experiences"],
      title: "Mountain Views"
    },
    {
      id: 7,
      src: bonfireImage,
      alt: "Milky Way over the campsite",
      category: ["night"],
      title: "Cosmic Connection"
    },
    {
      id: 8,
      src: tentInterior,
      alt: "Outdoor shower surrounded by bamboo",
      category: ["tents", "nature"],
      title: "Natural Bathing"
    }
  ];

  const filteredImages = activeFilter === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category.includes(activeFilter));

  return (
    <section id="gallery" className="py-20 bg-nature-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-5xl font-playfair font-bold text-foreground mb-6">
            Through the Eyes of <span className="text-accent">Nature</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every corner of SoulCamp tells a story of peace, beauty, and connection. 
            Discover the moments that await you.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 transition-all duration-300 ${
                activeFilter === filter.id 
                  ? "golden-button" 
                  : "border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredImages.map((image, index) => (
            <Dialog key={image.id}>
              <DialogTrigger asChild>
                <Card 
                  className="group cursor-pointer overflow-hidden nature-card transition-all duration-500 hover:shadow-golden"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-accent/90 rounded-full p-3">
                        <ZoomIn className="h-6 w-6 text-accent-foreground" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-playfair font-bold text-lg">{image.title}</h3>
                    </div>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
                <div className="relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                  />
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <h3 className="text-2xl font-playfair font-bold text-primary-foreground mb-2">
                      {image.title}
                    </h3>
                    <p className="text-primary-foreground/80">{image.alt}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground font-medium">
            "Every picture tells a story of peace found and souls awakened"
          </p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;