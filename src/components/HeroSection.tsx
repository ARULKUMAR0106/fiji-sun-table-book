import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import fijiHero from "@/assets/fiji-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${fijiHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-transparent to-secondary/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 text-white">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
          Fiji Paradise
          <span className="block text-3xl md:text-5xl mt-4 text-golden">Restaurant</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-95">
          Experience the authentic taste of Fiji with our exquisite multi-cuisine dining,
          featuring traditional Indian delicacies and tropical island flavors
        </p>

        <div className="flex flex-col sm:flex-row py-12 gap-4 justify-center items-center">
          <Link to="/booking">
            <Button 
              size="lg" 
              variant="hero"
              className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 text-lg font-medium shadow-warm transform hover:scale-105 transition-all duration-300"
            >
              Reserve Your Table
            </Button>
          </Link>
          <Link to="/menu">
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white/80 text-black hover:bg-white/10 px-8 py-4 text-lg font-medium backdrop-blur-sm"
            >
              View Menu
            </Button>
          </Link>
        </div>

        {/* Floating Info Cards */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex py-16 gap-4 text-sm">
          <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-2">
            <span className="text-golden font-medium">Open Daily</span>
            <p>11AM - 11PM</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-2">
            <span className="text-golden font-medium">Location</span>
            <p>Suva, Fiji</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;