import { Check } from "lucide-react";

const RecognitionSection = () => {
  const recognitionPoints = [
    "Tu ressens une tension constante ?",
    "Tu as tout essayé mais rien ne tient ?",
    "Tu veux libérer sans forcément tout raconter ?",
    "Tu cherches à te recentrer en douceur ?"
  ];

  return (
    <section className="py-20 bg-primary/5">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Tu te reconnais ?
            </h2>
          </div>
          
          <div className="gradient-warm rounded-3xl p-8 lg:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-6">
              {recognitionPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mt-1">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;