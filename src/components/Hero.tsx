
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Transform Your Space",
      subtitle: "Premium Interior Design Solutions"
    },
    {
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Luxury Living Redefined",
      subtitle: "Custom Solutions for Every Style"
    },
    {
      image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Elegant Interiors",
      subtitle: "Where Dreams Meet Design"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-serif font-bold text-gray-800">
              Luxe Interiors
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-amber-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-amber-600 transition-colors">Services</a>
              <a href="#portfolio" className="text-gray-700 hover:text-amber-600 transition-colors">Portfolio</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors">Contact</a>
            </div>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white">
              Get a Quote
            </Button>
          </div>
        </div>
      </nav>

      {/* Slideshow */}
      <div className="relative h-screen">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="h-full w-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center text-center">
                <div className="text-white max-w-4xl px-6">
                  <h1 className="text-5xl md:text-7xl font-serif font-light mb-6 animate-fade-in">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl font-light mb-8 animate-fade-in">
                    {slide.subtitle}
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg animate-fade-in"
                  >
                    Explore Our Work
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
