import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Menu = () => {
  const menuSections = [
    {
      title: "Indian Classics",
      description: "Traditional curries and tandoor specialties from the heart of India",
      gradient: "bg-gradient-tropical",
      dishes: [
        { name: "Butter Chicken", price: "FJD 28", description: "Creamy tomato curry with tender chicken pieces, aromatic spices" },
        { name: "Lamb Vindaloo", price: "FJD 32", description: "Spicy Goan curry with tender lamb, potatoes, and aromatic spices" },
        { name: "Paneer Makhani", price: "FJD 24", description: "Rich cottage cheese in buttery tomato sauce with cream" },
        { name: "Chicken Tikka Masala", price: "FJD 29", description: "Grilled chicken in creamy spiced tomato sauce" },
        { name: "Dal Makhani", price: "FJD 18", description: "Slow-cooked black lentils with butter and cream" },
        { name: "Palak Paneer", price: "FJD 22", description: "Fresh spinach curry with cottage cheese cubes" },
        { name: "Rogan Josh", price: "FJD 34", description: "Kashmiri lamb curry with yogurt and aromatic spices" },
        { name: "Chana Masala", price: "FJD 19", description: "Spicy chickpea curry with onions and tomatoes" }
      ]
    },
    {
      title: "Tropical Fusion",
      description: "Creative Indo-Fijian fusion dishes combining the best of both worlds",
      gradient: "bg-gradient-sunset",
      dishes: [
        { name: "Kokoda Curry", price: "FJD 35", description: "Fresh fish curry with coconut milk and lime, Fijian style" },
        { name: "Tropical Biryani", price: "FJD 30", description: "Basmati rice with island spices, seafood, and tropical fruits" },
        { name: "Mango Chicken", price: "FJD 29", description: "Sweet and tangy chicken with fresh mango and curry spices" },
        { name: "Coconut Fish Curry", price: "FJD 31", description: "Local catch in rich coconut curry with Fijian herbs" },
        { name: "Pineapple Prawns", price: "FJD 36", description: "Jumbo prawns with pineapple in spiced coconut sauce" },
        { name: "Island Lamb Curry", price: "FJD 33", description: "Tender lamb with tropical fruits and aromatic spices" },
        { name: "Tamarind Fish", price: "FJD 28", description: "Fresh fish in tangy tamarind curry with vegetables" },
        { name: "Fiji Vegetable Curry", price: "FJD 21", description: "Local vegetables in coconut curry with island spices" }
      ]
    },
    {
      title: "Fresh Seafood", 
      description: "Daily catch from Fiji's pristine waters, prepared with Indian expertise",
      gradient: "bg-gradient-ocean",
      dishes: [
        { name: "Grilled Mahi Mahi", price: "FJD 38", description: "Local fish grilled with tropical herbs and spices" },
        { name: "Coconut Prawns", price: "FJD 34", description: "Jumbo prawns in aromatic coconut curry sauce" },
        { name: "Fish Tikka", price: "FJD 32", description: "Marinated fish grilled in tandoor with mint chutney" },
        { name: "Crab Masala", price: "FJD 42", description: "Fresh mud crab in spicy tomato and onion gravy" },
        { name: "Lobster Curry", price: "FJD 48", description: "Whole lobster in rich coconut curry sauce" },
        { name: "Prawn Biryani", price: "FJD 35", description: "Fragrant basmati rice with spiced prawns and herbs" },
        { name: "Fish Amritsari", price: "FJD 30", description: "Beer-battered fish with Indian spices, served crispy" },
        { name: "Seafood Platter", price: "FJD 55", description: "Mixed seafood with various preparations for sharing" }
      ]
    },
    {
      title: "Tandoor Specialties",
      description: "Clay oven masterpieces with smoky flavors and perfect char",
      gradient: "bg-secondary",
      dishes: [
        { name: "Tandoori Chicken", price: "FJD 26", description: "Half chicken marinated in yogurt and spices, cooked in tandoor" },
        { name: "Seekh Kebab", price: "FJD 25", description: "Spiced ground lamb skewers grilled in tandoor" },
        { name: "Chicken Tikka", price: "FJD 24", description: "Boneless chicken pieces marinated and grilled" },
        { name: "Lamb Chops", price: "FJD 38", description: "Tender lamb chops with Indian spices and mint" },
        { name: "Paneer Tikka", price: "FJD 22", description: "Marinated cottage cheese with peppers and onions" },
        { name: "Mixed Grill", price: "FJD 45", description: "Assorted tandoori meats and vegetables for sharing" },
        { name: "Tandoori Prawns", price: "FJD 36", description: "Large prawns marinated in spices and grilled" },
        { name: "Naan Varieties", price: "FJD 6-8", description: "Garlic, butter, cheese, or keema stuffed fresh breads" }
      ]
    },
    {
      title: "Vegetarian Delights",
      description: "Plant-based dishes bursting with flavor and traditional spices",
      gradient: "bg-tropical",
      dishes: [
        { name: "Malai Kofta", price: "FJD 23", description: "Cottage cheese dumplings in rich creamy gravy" },
        { name: "Baingan Bharta", price: "FJD 20", description: "Roasted eggplant mash with onions and spices" },
        { name: "Aloo Gobi", price: "FJD 18", description: "Cauliflower and potatoes with turmeric and spices" },
        { name: "Bhindi Masala", price: "FJD 19", description: "Stir-fried okra with onions and aromatic spices" },
        { name: "Rajma", price: "FJD 17", description: "Red kidney beans in thick tomato and onion gravy" },
        { name: "Mixed Vegetable Curry", price: "FJD 21", description: "Seasonal vegetables in spiced coconut curry" },
        { name: "Stuffed Paratha", price: "FJD 12", description: "Whole wheat bread stuffed with vegetables or paneer" },
        { name: "Vegetable Biryani", price: "FJD 25", description: "Fragrant rice with mixed vegetables and aromatic spices" }
      ]
    },
    {
      title: "Rice & Breads",
      description: "Perfect accompaniments to complete your meal",
      gradient: "bg-golden",
      dishes: [
        { name: "Basmati Rice", price: "FJD 6", description: "Fragrant long-grain rice, steamed to perfection" },
        { name: "Jeera Rice", price: "FJD 8", description: "Cumin-flavored basmati rice with whole spices" },
        { name: "Coconut Rice", price: "FJD 9", description: "Basmati rice cooked with coconut milk and curry leaves" },
        { name: "Plain Naan", price: "FJD 6", description: "Traditional leavened bread baked in tandoor" },
        { name: "Garlic Naan", price: "FJD 7", description: "Naan topped with fresh garlic and herbs" },
        { name: "Cheese Naan", price: "FJD 8", description: "Naan stuffed with melted cheese" },
        { name: "Roti", price: "FJD 4", description: "Whole wheat bread, soft and fresh" },
        { name: "Kulcha", price: "FJD 8", description: "Stuffed bread with onions or potatoes" }
      ]
    },
    {
      title: "Desserts & Beverages",
      description: "Sweet endings and refreshing drinks to complete your meal",
      gradient: "bg-primary",
      dishes: [
        { name: "Gulab Jamun", price: "FJD 8", description: "Soft milk dumplings in sweet cardamom syrup" },
        { name: "Ras Malai", price: "FJD 9", description: "Cottage cheese dumplings in sweetened milk" },
        { name: "Kulfi", price: "FJD 7", description: "Traditional Indian ice cream with pistachios" },
        { name: "Tropical Fruit Salad", price: "FJD 6", description: "Fresh seasonal fruits with mint and lime" },
        { name: "Mango Lassi", price: "FJD 8", description: "Creamy yogurt drink with fresh mango" },
        { name: "Chai", price: "FJD 5", description: "Traditional spiced tea with milk" },
        { name: "Fresh Coconut Water", price: "FJD 6", description: "Straight from young green coconuts" },
        { name: "Lime Soda", price: "FJD 5", description: "Fresh lime with soda water and spices" }
      ]
    }
  ];

  return (
    <div className="min-h-screen font-inter">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
            Our Culinary
            <span className="block">Paradise Menu</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Discover our extensive collection of authentic Indian dishes and tropical fusion creations, 
            each prepared with the finest ingredients and traditional techniques
          </p>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-20">
            {menuSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                {/* Section Header */}
                <div className="text-center mb-12">
                  <div className={`inline-block ${section.gradient} text-white px-8 py-3 rounded-full mb-4`}>
                    <h2 className="font-playfair text-2xl md:text-3xl font-bold">
                      {section.title}
                    </h2>
                  </div>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {section.description}
                  </p>
                </div>

                {/* Dishes Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {section.dishes.map((dish, dishIndex) => (
                    <Card key={dishIndex} className="p-6 hover:shadow-lg transition-all duration-300 group">
                      <div className="space-y-3">
                        <div className="flex justify-between items-start">
                          <h3 className="font-playfair text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {dish.name}
                          </h3>
                          <span className="text-primary font-bold text-lg shrink-0 ml-2">
                            {dish.price}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {dish.description}
                        </p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">
            Ready to Taste Paradise?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Reserve your table now and embark on a culinary journey through the flavors of India and Fiji
          </p>
          <Link to="/booking">
            <Button size="lg" variant="hero" className="px-8 py-3 text-lg font-medium">
              🌺 Book Your Table Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Menu;