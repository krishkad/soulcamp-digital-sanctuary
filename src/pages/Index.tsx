import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StaysSection from "@/components/StaysSection";
import ExperienceSection from "@/components/ExperienceSection";
import GallerySection from "@/components/GallerySection";
import BookingSection from "@/components/BookingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Custom cursor trail effect
    let mouseX = 0;
    let mouseY = 0;

    const createTrail = () => {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.left = mouseX + 'px';
      trail.style.top = mouseY + 'px';
      document.body.appendChild(trail);

      setTimeout(() => {
        if (trail.parentNode) {
          trail.parentNode.removeChild(trail);
        }
      }, 1000);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Throttle trail creation
      if (Math.random() < 0.3) {
        createTrail();
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Scroll animations observer
    const observeElements = () => {
      const elements = document.querySelectorAll('.fade-in-up');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).style.animationPlayState = 'running';
            }
          });
        },
        { threshold: 0.1 }
      );

      elements.forEach((el) => observer.observe(el));
    };

    // Wait for DOM to be ready
    setTimeout(observeElements, 100);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <StaysSection />
      <ExperienceSection />
      <GallerySection />
      <BookingSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
