import { Button } from "@/components/ui/button";
import { Instagram, MapPin, Phone, Calendar, Send } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { label: "Réserver", href: "/booking" },
    { label: "Canal gratuit", href: "#telegram" },
    { label: "Voir les offres", href: "#services" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Main Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-playfair">Mahati Bouaziz</h3>
            <p className="text-primary-foreground/80">
              Praticienne du système nerveux
            </p>
            <p className="text-primary-foreground/80">
              Séances de guérison à Ain Zaghouen
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Liens rapides</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+21620190555" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Phone className="w-5 h-5" />
                <span>+216 20 190 555</span>
              </a>
              <a 
                href="https://maps.app.goo.gl/Pp22VGCSTEKDeb9U6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <MapPin className="w-5 h-5" />
                <span>Ain Zaghouen, Tunisie</span>
              </a>
              <a 
                href="https://instagram.com/mahati_bouaziz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>@mahati_bouaziz</span>
              </a>
            </div>
          </div>
          
          {/* CTA */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Prête à commencer ?</h4>
              <div className="space-y-6">
                <Link to="/booking">
                  <Button 
                    variant="outline" 
                    className="w-full bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Réserver maintenant
                  </Button>
                </Link>
                <a href="#telegram">
                  <Button 
                    variant="outline" 
                    className="w-full bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Canal gratuit
                  </Button>
                </a>
              </div>
            </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Mahati Bouaziz. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;