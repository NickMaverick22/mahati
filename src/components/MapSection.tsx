import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, MapPin } from "lucide-react";

const MapSection = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <MapPin className="w-8 h-8 text-primary" />
            Où me trouver ?
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/7ea95383-1c11-4582-ab7b-03cabe6216c2.png" 
              alt="Cabinet de soin Ain Zaghouan - Localisation sur Google Maps pour techniques pour calmer l'anxiété et me reconnecter à mon corps"
              className="w-full h-80 object-cover"
            />
          </div>
          
          <div className="text-center mt-6">
            <a 
              href="https://maps.app.goo.gl/Pp22VGCSTEKDeb9U6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="btn-primary inline-flex items-center gap-2">
                <ExternalLink className="w-5 h-5" />
                Voir sur Google Maps
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;