import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Navigation />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default Index;