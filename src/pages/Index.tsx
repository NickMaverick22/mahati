import HeroSection from "@/components/HeroSection";
import RecognitionSection from "@/components/RecognitionSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import BookingSection from "@/components/BookingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TelegramSection from "@/components/TelegramSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <RecognitionSection />
      <AboutSection />
      <ServicesSection />
      <BookingSection />
      <TestimonialsSection />
      <TelegramSection />
      <Footer />
    </div>
  );
};

export default Index;
