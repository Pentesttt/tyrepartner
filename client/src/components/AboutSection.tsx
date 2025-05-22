import { Target, Eye, Heart } from "lucide-react";

export default function AboutSection() {
  const aboutCards = [
    {
      icon: Target,
      title: "Missão",
      description:
        "Fornecer pneus de alta qualidade com excelência no atendimento, garantindo segurança e satisfação aos nossos clientes em todas as suas jornadas.",
    },
    {
      icon: Eye,
      title: "Visão",
      description:
        "Ser a referência em venda de pneus em Moçambique, reconhecida pela qualidade dos produtos, inovação e compromisso com a sustentabilidade.",
    },
    {
      icon: Heart,
      title: "Valores",
      description:
        "Integridade, qualidade, atendimento excepcional, inovação contínua e responsabilidade social são os pilares que guiam todas as nossas ações.",
    },
  ];

  return (
    <section className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Sobre a TyrePartner
          </h2>
          <p className="text-lg text-gray-600">
            Conheça nossa missão, visão e valores
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {aboutCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-tyrepartner text-center hover:shadow-tyrepartner-hover transition-all duration-300"
              >
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 tyrepartner-red" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
