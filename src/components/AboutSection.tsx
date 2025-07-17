import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import therapyRoom from "@/assets/therapy-room.jpg";

const AboutSection = () => {
  return (
    <section className="py-20">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={therapyRoom} 
                  alt="Espace de thérapie à La Marsa"
                  className="w-full h-80 object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                À propos de Mahati
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Je suis Mahati — certifiée en Reiki, Access Bars, ThetaHealing, 
                Constellation familiale, Hypnose, PNL…
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Je guide des femmes vers un retour à elles-mêmes à travers le corps, 
                les sensations et l'espace sûr de mes séances à La Marsa.
              </p>
            </div>
            
            <Button variant="outline" className="btn-secondary flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Découvrir mes certifications
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;