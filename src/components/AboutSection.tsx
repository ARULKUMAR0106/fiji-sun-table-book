import indianSpices from "@/assets/indian-spices.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
                A Culinary Journey Through
                <span className="text-primary block">Paradise</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nestled in the heart of Fiji, our restaurant brings together the vibrant flavors 
                of Indian cuisine with the fresh, tropical essence of the Pacific Islands.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-tropical rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">🌶️</span>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-foreground">
                  Authentic Indian Spices
                </h3>
                <p className="text-muted-foreground">
                  Traditional recipes passed down through generations, using the finest imported spices.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-ocean rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">🐟</span>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-foreground">
                  Fresh Local Seafood
                </h3>
                <p className="text-muted-foreground">
                  Daily catch from Fiji's pristine waters, prepared with tropical flair.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-sunset rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">🥥</span>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-foreground">
                  Tropical Fusion
                </h3>
                <p className="text-muted-foreground">
                  Creative dishes combining Indian techniques with Fijian ingredients.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">🏝️</span>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-foreground">
                  Island Atmosphere
                </h3>
                <p className="text-muted-foreground">
                  Dine in a tropical paradise with stunning ocean views and island vibes.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={indianSpices} 
                alt="Authentic Indian spices and tropical ingredients" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-tropical">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-secondary text-white rounded-xl p-6 shadow-warm">
              <div className="text-center">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm opacity-90">Fresh Ingredients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;