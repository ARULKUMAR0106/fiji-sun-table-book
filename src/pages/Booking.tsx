import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TableBooking from "@/components/TableBooking";

const Booking = () => {
  return (
    <div className="min-h-screen font-inter">
      <Navigation />

      <TableBooking />
      
      <Footer />
    </div>
  );
};

export default Booking;