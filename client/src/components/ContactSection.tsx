import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear form
    setFormData({ name: "", email: "", message: "" });
    
    // Show success message
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contato em breve.",
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      details: "+258 84 123 4567",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@tyrepartner.co.mz",
    },
    {
      icon: MapPin,
      title: "Endereço",
      details: "Av. Julius Nyerere, 123\nMaputo, Moçambique",
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      details: "Segunda a Sexta: 8:00 - 17:00\nSábado: 8:00 - 12:00",
    },
  ];

  return (
    <section className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-600">
            Estamos aqui para ajudar você
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-tyrepartner">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Envie sua Mensagem
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-gray-700 font-medium">
                  Nome
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 h-12 border-2 focus:border-[hsl(var(--tyrepartner-red))]"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 h-12 border-2 focus:border-[hsl(var(--tyrepartner-red))]"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-gray-700 font-medium">
                  Mensagem
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-1 min-h-[120px] border-2 focus:border-[hsl(var(--tyrepartner-red))] resize-y"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-tyrepartner-red hover:bg-red-700 text-white h-12 font-semibold"
              >
                Enviar Mensagem
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Informações de Contato
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-tyrepartner-red rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <strong className="text-gray-900 block mb-1">
                        {info.title}
                      </strong>
                      <p className="text-gray-600 whitespace-pre-line">
                        {info.details}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
