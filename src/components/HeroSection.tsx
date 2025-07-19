import { Button } from "@/components/ui/button";
import { Calendar, Send } from "lucide-react";
import { Link } from "react-router-dom";
import mahatiPortrait from "/lovable-uploads/4eb4d876-ade7-46d4-b68c-9556155cc9da.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-warm opacity-10"></div>
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Mahati Bouaziz
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Soin du système nerveux & pratiques de guérison à Ain Zaghouen
              </p>
              <p className="text-2xl font-medium text-gradient">
                Reconnecte-toi à ton corps. Retrouve ton calme intérieur.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/booking">
                <Button className="btn-primary flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 min-h-[44px] px-6">
                  <Calendar className="w-5 h-5" />
                  📅 Réserver une séance
                </Button>
              </Link>
              <a href="https://t.me/mahati_space369" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="btn-secondary flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 min-h-[44px] px-6">
                  <Send className="w-5 h-5" />
                  📲 Rejoindre le canal Telegram gratuit
                </Button>
              </a>
            </div>
          </div>
          
          {/* Portrait image */}
          <div className="flex justify-center lg:justify-end">
            <div className="space-y-6">
              <div className="relative">
                <div className="w-80 h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={mahatiPortrait} 
                    alt="Cabinet de soin Ain Zaghouan - Mahati Bouaziz praticienne énergétique pour me reconnecter à mon corps"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rounded-full opacity-20"></div>
              </div>
              
              {/* Mahati Info */}
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Thérapeute holistique certifiée, je guide des femmes vers un retour à elles-mêmes 
                  à travers des méthodes douces et profondes dans un espace sûr à Ain Zaghouen.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Certifications Section - Full Width */}
        <div className="mt-16 space-y-6">
          <h2 className="text-2xl font-semibold text-center text-primary">Certifications & Spécialisations</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium shadow-sm">Access Bars Facilitator</span>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium shadow-sm">Access FaceLift Practitioner</span>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium shadow-sm">ThetaHealing</span>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium shadow-sm">Constellation Familiale</span>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium shadow-sm">PNL – Coaching</span>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium shadow-sm">Reiki Master Teacher</span>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium shadow-sm">Hypnose</span>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium shadow-sm">Body Access</span>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium shadow-sm">Soins énergétiques visage</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;