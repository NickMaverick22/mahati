import { Button } from "@/components/ui/button";
import { Instagram, MapPin, Phone, Calendar, Send } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Réserver", href: "#booking" },
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
              Séances de guérison à La Marsa
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
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span className="text-primary-foreground/80">+216 20 190 555</span>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="w-5 h-5" />
                <span className="text-primary-foreground/80">@mahati_bouaziz</span>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Prête à commencer ?</h4>
            <div className="space-y-3">
              <Button 
                variant="outline" 
                className="w-full bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Réserver maintenant
              </Button>
              <Button 
                variant="outline" 
                className="w-full bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Send className="w-4 h-4 mr-2" />
                Canal gratuit
              </Button>
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