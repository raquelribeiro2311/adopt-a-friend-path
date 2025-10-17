import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Home, Utensils, Activity, BookOpen, Stethoscope, Shield } from "lucide-react";

const Tips = () => {
  const petTips = [
    {
      icon: <Home className="w-6 h-6" />,
      title: "Adaptação ao Novo Lar",
      description: "Dê tempo ao seu novo amigo para se adaptar. Prepare um espaço confortável e seguro antes da chegada.",
      details: "Nos primeiros dias, mantenha uma rotina consistente e evite mudanças bruscas. Permita que o pet explore a casa gradualmente."
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Alimentação Balanceada",
      description: "Consulte um veterinário para definir a dieta ideal. Água fresca deve estar sempre disponível.",
      details: "Estabeleça horários fixos para as refeições e evite dar comida humana, que pode ser prejudicial à saúde do pet."
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Exercícios Diários",
      description: "Passeios regulares são essenciais para a saúde física e mental do seu pet.",
      details: "A quantidade de exercício varia conforme a raça e idade. Cães ativos podem precisar de até 2 horas de atividade diária."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Treinamento e Socialização",
      description: "Invista tempo em treinamento básico e socialização desde cedo para um pet equilibrado.",
      details: "Use reforço positivo e seja paciente. A socialização deve começar cedo, mas pode ser feita em qualquer idade."
    },
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: "Cuidados Veterinários",
      description: "Mantenha as vacinas em dia e faça check-ups regulares para prevenir problemas de saúde.",
      details: "Consultas anuais são essenciais, além de manter o controle de parasitas e vacinas atualizadas."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Higiene e Limpeza",
      description: "Banhos regulares, escovação e cuidados com unhas e dentes são fundamentais.",
      details: "A frequência de banhos depende da raça. Escove os dentes do pet regularmente para prevenir doenças."
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <Heart className="w-16 h-16 mx-auto mb-4 text-primary" fill="currentColor" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Dicas para Cuidar do Seu Pet
              </h1>
              <p className="text-lg text-muted-foreground">
                Tudo o que você precisa saber para garantir o bem-estar e felicidade do seu amigo de quatro patas
              </p>
            </div>
          </div>
        </section>

        {/* Pet Tips Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Guia Completo de Cuidados</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Seguir essas dicas garantirá uma vida longa, saudável e feliz para seu pet
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {petTips.map((tip, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                      {tip.icon}
                    </div>
                    <CardTitle className="text-xl">{tip.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-3">{tip.description}</CardDescription>
                    <p className="text-sm text-muted-foreground">{tip.details}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Pronto para Adotar?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Agora que você conhece as melhores práticas, conheça os cães disponíveis para adoção e encontre seu novo companheiro.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="/caes"
                className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 py-2 font-medium transition-colors"
              >
                Ver Cães Disponíveis
              </a>
              <a
                href="/historias"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 py-2 font-medium transition-colors"
              >
                Histórias de Sucesso
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Tips;
