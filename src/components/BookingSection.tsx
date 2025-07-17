import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, CreditCard, Clock } from "lucide-react";

const BookingSection = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Réservation
            </h2>
            <p className="text-lg text-muted-foreground">
              Prends rendez-vous pour ton accompagnement personnalisé
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Booking Info */}
            <div className="space-y-6">
              <Card className="card-warm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    Modalités
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Présentiel à Ain Zaghouen</p>
                      <a 
                        href="https://maps.app.goo.gl/Pp22VGCSTEKDeb9U6" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        Voir sur Google Maps
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CreditCard className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Acompte requis</p>
                      <p className="text-sm text-muted-foreground">Pour valider le rendez-vous</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Places limitées</p>
                      <p className="text-sm text-muted-foreground">2 à 3 séances max / jour</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Booking Form */}
            <Card className="card-warm">
              <CardHeader>
                <CardTitle>Formulaire de réservation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <form action="https://2f9f6n.share-eu1.hsforms.com/2E0h3tt_cTBi1APLa4Pynjw" method="POST">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstname">Prénom *</Label>
                      <Input id="firstname" name="firstname" placeholder="Ton prénom" required />
                    </div>
                    <div>
                      <Label htmlFor="lastname">Nom *</Label>
                      <Input id="lastname" name="lastname" placeholder="Ton nom de famille" required />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Téléphone *</Label>
                    <Input id="phone" name="phone" placeholder="+216 XX XXX XXX" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="service_type">Type de séance *</Label>
                    <Select name="service_type" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Choisis ton accompagnement" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="reset">Reset & Reconnexion</SelectItem>
                        <SelectItem value="guerison">Guérison des Racines</SelectItem>
                        <SelectItem value="confiance">Confiance Active</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      placeholder="Partage-nous ce qui t'amène (optionnel)"
                      rows={4}
                    />
                  </div>
                  
                  <Button type="submit" className="btn-primary w-full">
                    Envoyer ma demande
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    Tu recevras une confirmation par WhatsApp dans les 24h
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;