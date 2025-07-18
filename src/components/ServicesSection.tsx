import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Heart, Sparkles, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: Zap,
      title: "Reset & Reconnexion",
      description: "Access Bars, Body Access, ThetaHealing",
      subtitle: "Repose ton mental, recharge ton corps",
      color: "text-primary"
    },
    {
      icon: Heart,
      title: "Guérison des Racines",
      description: "Constellation familiale, hypnose",
      subtitle: "Libère les blocages générationnels",
      color: "text-accent"
    },
    {
      icon: Sparkles,
      title: "Confiance Active",
      description: "Coaching, PNL, soins visage énergétiques",
      subtitle: "Active ton ancrage et ta lumière féminine",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Offres principales
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvre mes accompagnements personnalisés pour ton bien-être et ta guérison
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-warm hover:scale-105 transition-transform duration-300">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="text-center space-y-4">
                <p className="text-primary font-medium italic">
                  {service.subtitle}
                </p>
                <Link to="/booking">
                  <Button className="btn-primary w-full flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Réserver
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;