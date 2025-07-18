import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Booking = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    serviceType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create HubSpot form submission
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = 'https://2f9f6n.share-eu1.hsforms.com/2E0h3tt_cTBi1APLa4Pynjw';
    document.body.appendChild(iframe);
    
    // You would typically handle the form submission here
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      required
                      className="rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nom *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      required
                      className="rounded-lg"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    required
                    className="rounded-lg"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="serviceType">Type de séance *</Label>
                  <Select onValueChange={(value) => handleInputChange('serviceType', value)} required>
                    <SelectTrigger className="rounded-lg">
                      <SelectValue placeholder="Choisir le type de séance" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="access-bars">Access Bars</SelectItem>
                      <SelectItem value="thetahealing">ThetaHealing</SelectItem>
                      <SelectItem value="constellation">Constellation Familiale</SelectItem>
                      <SelectItem value="reiki">Reiki</SelectItem>
                      <SelectItem value="hypnose">Hypnose</SelectItem>
                      <SelectItem value="body-access">Body Access</SelectItem>
                      <SelectItem value="consultation">Consultation découverte</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message (optionnel)</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Partage ce qui t'amène à réserver cette séance..."
                    className="rounded-lg min-h-[100px]"
                  />
                </div>
                
                <Button type="submit" className="btn-primary w-full py-3">
                  Envoyer ma demande de réservation
                </Button>
              </form>
              
              <p className="text-sm text-muted-foreground text-center mt-6">
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