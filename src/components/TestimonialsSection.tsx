import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Ananya Sharma",
      location: "Mumbai",
      experience: "Digital Detox Retreat",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "The most peaceful I've felt in years. SoulCamp helped me find the stillness I didn't know I was searching for. Every morning yoga session by the lake felt like a meditation with the universe.",
      favorite: "The sunrise meditation by the lake changed my life."
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Bangalore",
      experience: "Nature Photography Retreat",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "As a photographer, I've seen many beautiful places, but SoulCamp captures something deeper – the soul of nature itself. The guides here understand that we're not just visitors, we're returning home.",
      favorite: "Captured my best shots during the golden hour sessions."
    },
    {
      id: 3,
      name: "Priya Mehta",
      location: "Delhi",
      experience: "Wellness & Mindfulness",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "Three days here reset my entire being. The combination of luxury and wilderness, comfort and challenge, silence and community – everything perfectly balanced. I left feeling like a new person.",
      favorite: "The forest meditation walk opened my heart."
    },
    {
      id: 4,
      name: "Arjun Patel",
      location: "Pune",
      experience: "Solo Soul Journey",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "Came here feeling lost after a major life transition. The bonfire conversations, the morning mist, the genuine care of the staff – everything conspired to heal what I thought was unhealable.",
      favorite: "Found myself in the silence between thoughts."
    },
    {
      id: 5,
      name: "Kavya Nair",
      location: "Chennai",
      experience: "Couple's Retreat",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "My partner and I rediscovered each other here. Away from city noise, we remembered how to listen – to nature, to each other, to our hearts. SoulCamp is magic disguised as camping.",
      favorite: "The candlelit dinner under stars was pure magic."
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-nature-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-5xl font-playfair font-bold text-foreground mb-6">
            Voices From The <span className="text-accent">Wild</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stories of transformation, connection, and peace from souls who found 
            their way home at SoulCamp.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial Display */}
          <div className="relative">
            <Card className="nature-card mb-8">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  {/* Quote Icon */}
                  <div className="flex-shrink-0">
                    <div className="bg-accent/10 p-4 rounded-full">
                      <Quote className="h-8 w-8 text-accent" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6 font-light italic">
                      "{testimonials[currentIndex].text}"
                    </blockquote>

                    {/* Favorite Moment */}
                    <div className="bg-accent/5 rounded-lg p-4 mb-6">
                      <p className="text-accent font-medium text-sm uppercase tracking-wide mb-1">
                        Favorite Moment
                      </p>
                      <p className="text-foreground italic">
                        "{testimonials[currentIndex].favorite}"
                      </p>
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={testimonials[currentIndex].avatar} />
                        <AvatarFallback className="bg-accent text-accent-foreground">
                          {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-playfair font-bold text-lg text-foreground">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-muted-foreground">
                          {testimonials[currentIndex].location} • {testimonials[currentIndex].experience}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Arrows */}
            <div className="flex justify-between items-center">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="h-12 w-12 rounded-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-accent scale-125' 
                        : 'bg-accent/30 hover:bg-accent/50'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="h-12 w-12 rounded-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Additional Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
            <div>
              <h3 className="text-3xl font-playfair font-bold text-accent mb-2">500+</h3>
              <p className="text-muted-foreground">Souls Transformed</p>
            </div>
            <div>
              <h3 className="text-3xl font-playfair font-bold text-accent mb-2">4.9★</h3>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
            <div>
              <h3 className="text-3xl font-playfair font-bold text-accent mb-2">95%</h3>
              <p className="text-muted-foreground">Return Within A Year</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;