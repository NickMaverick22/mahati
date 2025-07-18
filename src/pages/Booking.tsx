import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Booking = () => {
  return (
    <div className="min-h-screen bg-primary/5">
      <div className="section-container py-8">
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour à l'accueil
          </Link>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              Réserver une séance
            </h1>
            <p className="text-lg text-muted-foreground">
              Prends rendez-vous pour ton accompagnement personnalisé
            </p>
          </div>
          
          <Card className="card-warm shadow-lg">
            <CardHeader>
              <CardTitle className="text-center">Formulaire de réservation</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="w-full">
                <iframe
                  src="https://2f9f6n.share-eu1.hsforms.com/2E0h3tt_cTBi1APLa4Pynjw"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  className="rounded-lg"
                  title="Formulaire de réservation"
                />
              </div>
              
              <p className="text-xs text-muted-foreground text-center mt-4">
                Tu recevras une confirmation par WhatsApp dans les 24h
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Booking;