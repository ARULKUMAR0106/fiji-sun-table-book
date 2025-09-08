import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TableBooking from "@/components/TableBooking";

const Booking = () => {
  return (
    <div className="min-h-screen font-inter">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
            Reserve Your
            <span className="text-secondary block">Paradise Table</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Secure your spot in tropical paradise. No payment required - just pure anticipation 
            for an unforgettable dining experience.
          </p>
        </div>
      </section>

      {/* Booking Component */}
      <TableBooking />
      
      <Footer />
    </div>
  );
};

export default Booking;