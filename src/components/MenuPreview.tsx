import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MenuPreview = () => {
  const menuCategories = [
    {
      title: "Indian Classics",
      description: "Traditional curries and tandoor specialties",
      dishes: [
        { name: "Butter Chicken", price: "FJD 28", description: "Creamy tomato curry with tender chicken" },
        { name: "Lamb Vindaloo", price: "FJD 32", description: "Spicy Goan curry with aromatic spices" },
        { name: "Paneer Makhani", price: "FJD 24", description: "Rich cottage cheese in buttery tomato sauce" }
      ],
      gradient: "bg-gradient-tropical"
    },
    {
      title: "Tropical Fusion",
      description: "Indo-Fijian fusion creations",
      dishes: [
        { name: "Kokoda Curry", price: "FJD 35", description: "Fresh fish curry with coconut milk" },
        { name: "Tropical Biryani", price: "FJD 30", description: "Basmati rice with island spices and seafood" },
        { name: "Mango Chicken", price: "FJD 29", description: "Sweet and tangy chicken with fresh mango" }
      ],
      gradient: "bg-gradient-sunset"
    },
    {
      title: "Fresh Seafood",
      description: "Daily catch from Fijian waters",
      dishes: [
        { name: "Grilled Mahi Mahi", price: "FJD 38", description: "Local fish with tropical herbs" },
        { name: "Coconut Prawns", price: "FJD 34", description: "Jumbo prawns in coconut curry" },
        { name: "Fish Tamarind", price: "FJD 33", description: "Fresh catch in tangy tamarind sauce" }
      ],
      gradient: "bg-gradient-ocean"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Signature
            <span className="text-primary block">Culinary Delights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully crafted menu featuring the best of Indian cuisine 
            with a tropical Fijian twist
          </p>
        </div>

        {/* Menu Categories */}
        <div className="grid lg:grid-cols-3 gap-8">
          {menuCategories.map((category, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-elegant transition-all duration-300">
              {/* Category Header */}
              <div className={`${category.gradient} p-6 text-white relative`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10">
                  <h3 className="font-playfair text-2xl font-bold mb-2">{category.title}</h3>
                  <p className="text-white/90">{category.description}</p>
                </div>
              </div>

              {/* Dishes */}
              <div className="p-6 space-y-6">
                {category.dishes.map((dish, dishIndex) => (
                  <div key={dishIndex} className="border-b border-border/50 pb-4 last:border-b-0">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-inter font-semibold text-foreground">{dish.name}</h4>
                      <span className="text-primary font-semibold">{dish.price}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{dish.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-medium shadow-tropical"
          >
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;