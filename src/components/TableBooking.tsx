import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const TableBooking = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    specialRequests: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time || !formData.guests) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Simulate booking submission
    toast({
      title: "🌺 Table Reserved Successfully!",
      description: `Your table for ${formData.guests} guests on ${formData.date} at ${formData.time} has been reserved. We'll send a confirmation email shortly.`,
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      specialRequests: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="booking" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Reserve Your
            <span className="text-secondary block">Paradise Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Book your table for an unforgettable dining experience in tropical paradise. 
            No payment required - just pure anticipation!
          </p>
        </div>

        {/* Booking Form */}
        <Card className="relative overflow-hidden shadow-elegant">
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-hero opacity-5" />
          
          <div className="relative z-10 p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="border-border/50 focus:border-primary"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="border-border/50 focus:border-primary"
                    required
                  />
                </div>
              </div>

              {/* Contact & Reservation Details */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground font-medium">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+679 123 4567"
                    className="border-border/50 focus:border-primary"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-foreground font-medium">Preferred Date *</Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="border-border/50 focus:border-primary"
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time" className="text-foreground font-medium">Preferred Time *</Label>
                  <Input
                    id="time"
                    name="time"
                    type="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="border-border/50 focus:border-primary"
                    required
                  />
                </div>
              </div>

              {/* Party Size */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="guests" className="text-foreground font-medium">Number of Guests *</Label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={(e) => setFormData({...formData, guests: e.target.value})}
                    className="w-full px-3 py-2 border border-border/50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-background"
                    required
                  >
                    <option value="">Select party size</option>
                    {[1,2,3,4,5,6,7,8].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                    <option value="9+">9+ Guests (Group Booking)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="specialRequests" className="text-foreground font-medium">Special Requests</Label>
                  <Textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    placeholder="Dietary restrictions, celebrations, seating preferences..."
                    className="border-border/50 focus:border-primary resize-none"
                    rows={3}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <Button 
                  type="submit"
                  size="lg"
                  className="bg-gradient-hero text-white px-12 py-3 text-lg font-medium shadow-elegant hover:shadow-tropical transform hover:scale-105 transition-all duration-300"
                >
                  🌺 Reserve Your Table
                </Button>
                <p className="text-muted-foreground text-sm mt-4">
                  No payment required. We'll confirm your reservation via email within 24 hours.
                </p>
              </div>
            </form>
          </div>
        </Card>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
              📞
            </div>
            <h3 className="font-playfair text-lg font-semibold mb-2">Call Us</h3>
            <p className="text-muted-foreground">+679 123 4567</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4">
              📧
            </div>
            <h3 className="font-playfair text-lg font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground">hello@fijiparadise.com</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-tropical text-white rounded-full flex items-center justify-center mx-auto mb-4">
              📍
            </div>
            <h3 className="font-playfair text-lg font-semibold mb-2">Location</h3>
            <p className="text-muted-foreground">Suva Waterfront, Fiji</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TableBooking;