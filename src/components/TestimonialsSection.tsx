import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            🎥 Ce que disent les femmes après leur séance
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="card-warm shadow-lg overflow-hidden">
            <CardContent className="p-8">
              <div className="relative aspect-video bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <Play className="w-10 h-10 text-primary ml-1" />
                  </div>
                  <p className="text-lg font-medium text-primary">
                    Témoignages vidéo
                  </p>
                  <p className="text-muted-foreground">
                    Vidéo à venir - Espace réservé pour les témoignages
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;