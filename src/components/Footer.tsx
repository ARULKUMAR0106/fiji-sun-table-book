const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-playfair text-3xl font-bold mb-4">
              Fiji Paradise <span className="text-golden">Restaurant</span>
            </h3>
            <p className="text-background/80 leading-relaxed mb-6 max-w-md">
              Experience the authentic taste of Fiji with our exquisite multi-cuisine dining,
              featuring traditional Indian delicacies and tropical island flavors.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors cursor-pointer">
                <span className="text-white">📘</span>
              </div>
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary/80 transition-colors cursor-pointer">
                <span className="text-white">📷</span>
              </div>
              <div className="w-10 h-10 bg-tropical rounded-full flex items-center justify-center hover:bg-tropical/80 transition-colors cursor-pointer">
                <span className="text-white">🐦</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#menu" className="text-background/80 hover:text-golden transition-colors">Menu</a></li>
              <li><a href="#booking" className="text-background/80 hover:text-golden transition-colors">Reservations</a></li>
              <li><a href="#about" className="text-background/80 hover:text-golden transition-colors">About Us</a></li>
              <li><a href="#events" className="text-background/80 hover:text-golden transition-colors">Private Events</a></li>
              <li><a href="#catering" className="text-background/80 hover:text-golden transition-colors">Catering</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair text-xl font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-golden mt-1">📍</span>
                <div>
                  <p className="text-background/80">Suva Waterfront</p>
                  <p className="text-background/80">Suva, Fiji Islands</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-golden">📞</span>
                <p className="text-background/80">+679 123 4567</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-golden">📧</span>
                <p className="text-background/80">hello@fijiparadise.com</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-golden">🕒</span>
                <div>
                  <p className="text-background/80">Daily: 11AM - 11PM</p>
                  <p className="text-background/60 text-sm">Kitchen closes at 10:30PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60">
            © 2024 Fiji Paradise Restaurant. All rights reserved. | Crafted with 💙 in Paradise
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;