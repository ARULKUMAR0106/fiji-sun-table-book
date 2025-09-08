import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuPreview from "@/components/MenuPreview";
import TableBooking from "@/components/TableBooking";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <HeroSection />
      <AboutSection />
      <MenuPreview />
      <TableBooking />
      <Footer />
    </div>
  );
};

export default Index;