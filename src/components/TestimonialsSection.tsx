import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Je suis sortie plus légère.",
      author: "Sarah M."
    },
    {
      quote: "Une présence rassurante et vraie.",
      author: "Leila K."
    },
    {
      quote: "Enfin un soin qui m'a reconnectée à mon corps.",
      author: "Amina B."
    }
  ];

  return (
    <section className="py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Témoignages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ce que disent les femmes qui ont vécu l'expérience
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-warm relative">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Quote className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg mb-4 italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <p className="text-sm text-muted-foreground font-medium">
                      — {testimonial.author}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;