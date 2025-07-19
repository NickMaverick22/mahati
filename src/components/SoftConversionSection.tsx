import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

const SoftConversionSection = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            🌿 Tu ne sais pas par où commencer ?
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p className="text-xl font-medium text-foreground">
              Voici comment mes accompagnements peuvent t'aider…
            </p>
            <p>
              Même si tu ne sais pas ce que tu ressens, ton corps le sait.
            </p>
            <p>
              Pas besoin de tout raconter ou d'y croire à 100%. Viens comme tu es.
            </p>
          </div>
          
          <Button 
            onClick={scrollToServices}
            className="btn-primary text-lg px-8 py-3"
          >
            → Découvre les accompagnements
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SoftConversionSection;