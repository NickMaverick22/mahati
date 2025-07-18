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
          <Card className="card-warm shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1200&h=600&q=80" 
                  alt="Localisation à Ain Zaghouen - Vue d'ensemble"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                    <p className="text-gray-800 font-medium text-center">
                      Ain Zaghouen, Tunisie
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 text-center">
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
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MapSection;