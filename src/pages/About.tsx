import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import indianSpices from "@/assets/indian-spices.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen font-inter">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
            Our Story of
            <span className="text-primary block">Tropical Flavors</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the passionate journey behind Fiji Paradise Restaurant, where traditional Indian cuisine meets the exotic flavors of the Pacific Islands
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6">
                  A Culinary Journey Through Paradise
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Founded in 2009 by Chef Rajesh Patel and his wife Priya, Fiji Paradise Restaurant was born from a dream to create an authentic dining experience that celebrates both their Indian heritage and their love for their adopted home in Fiji.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  After moving to Fiji from Mumbai, the Patels were inspired by the incredible abundance of fresh seafood, tropical fruits, and unique flavor combinations that the islands offered. They began experimenting with traditional Indian recipes, incorporating local Fijian ingredients to create something truly special.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                <img 
                  src={indianSpices} 
                  alt="Traditional Indian spices and tropical ingredients" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Philosophy */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">
              Our Values & Philosophy
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every dish tells a story, every meal creates memories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-tropical rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-2xl">🌿</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-foreground">Fresh & Local</h3>
              <p className="text-muted-foreground">
                We source the freshest ingredients from local Fijian farmers and fishermen daily
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-sunset rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-2xl">👨‍🍳</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-foreground">Authentic Recipes</h3>
              <p className="text-muted-foreground">
                Traditional family recipes passed down through generations, perfected over time
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-2xl">💝</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-foreground">Warm Hospitality</h3>
              <p className="text-muted-foreground">
                Every guest is treated like family in true Fijian and Indian tradition
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-2xl">🏝️</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-foreground">Island Spirit</h3>
              <p className="text-muted-foreground">
                Embracing the relaxed, joyful spirit of island life in every experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground">
              The passionate people behind your dining experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-24 h-24 bg-gradient-hero rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-3xl">👨‍🍳</span>
              </div>
              <div>
                <h3 className="font-playfair text-xl font-semibold text-foreground">Chef Rajesh Patel</h3>
                <p className="text-primary font-medium">Head Chef & Owner</p>
                <p className="text-muted-foreground text-sm mt-2">
                  25+ years of culinary expertise, specializing in North Indian cuisine and tropical fusion
                </p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="w-24 h-24 bg-gradient-tropical rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-3xl">👩‍💼</span>
              </div>
              <div>
                <h3 className="font-playfair text-xl font-semibold text-foreground">Priya Patel</h3>
                <p className="text-secondary font-medium">Restaurant Manager & Owner</p>
                <p className="text-muted-foreground text-sm mt-2">
                  Ensures every guest feels at home with her warm hospitality and attention to detail
                </p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="w-24 h-24 bg-gradient-sunset rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-3xl">🧑‍🍳</span>
              </div>
              <div>
                <h3 className="font-playfair text-xl font-semibold text-foreground">Arjun Singh</h3>
                <p className="text-golden font-medium">Sous Chef</p>
                <p className="text-muted-foreground text-sm mt-2">
                  Expert in tandoor cooking and seafood preparation, bringing innovation to traditional dishes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-playfair text-4xl font-bold mb-6">
            Ready to Experience Paradise?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join us for an unforgettable culinary journey through the flavors of India and Fiji
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg font-medium">
                Book Your Table
              </Button>
            </Link>
            <Link to="/menu">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 text-lg font-medium">
                View Our Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;