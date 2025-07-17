import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, Volume2, Sunrise, Heart } from "lucide-react";

const TelegramSection = () => {
  const features = [
    {
      icon: Heart,
      title: "Conseils bien-être",
      description: "Tips quotidiens pour ton équilibre"
    },
    {
      icon: Sunrise,
      title: "Audio du matin",
      description: "Méditations et affirmations"
    },
    {
      icon: Volume2,
      title: "Petits rituels",
      description: "Pratiques simples à faire chez toi"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Canal Reset & Alignée
            </h2>
            <p className="text-lg text-muted-foreground">
              Rejoins notre communauté Telegram pour des ressources gratuites
            </p>
          </div>
          
          <Card className="card-warm">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Send className="w-8 h-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl">
                Telegram communautaire gratuit
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="text-center space-y-3">
                    <div className="flex justify-center">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-accent" />
                      </div>
                    </div>
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <Button className="btn-primary flex items-center gap-2 mx-auto">
                  <Send className="w-5 h-5" />
                  Rejoindre gratuitement
                </Button>
                <p className="text-xs text-muted-foreground mt-3">
                  Accès immédiat • Communauté bienveillante • Contenu exclusif
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TelegramSection;