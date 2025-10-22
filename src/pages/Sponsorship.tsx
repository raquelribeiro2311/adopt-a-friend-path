import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Heart, DollarSign, Calendar, Gift } from "lucide-react";
import dog1 from "@/assets/dog-1.jpg";
import dog2 from "@/assets/dog-2.jpg";
import dog3 from "@/assets/dog-3.jpg";

const Sponsorship = () => {
  const sponsorshipPlans = [
    {
      id: 1,
      name: "Plano Básico",
      price: "R$ 50",
      period: "/mês",
      benefits: [
        "Alimentação adequada",
        "Higiene e banhos",
        "Foto mensal do pet",
        "Certificado de padrinho"
      ]
    },
    {
      id: 2,
      name: "Plano Completo",
      price: "R$ 100",
      period: "/mês",
      benefits: [
        "Todos os benefícios do Plano Básico",
        "Atendimento veterinário",
        "Vacinas e vermífugos",
        "Visitas mensais",
        "Vídeos do pet"
      ],
      featured: true
    },
    {
      id: 3,
      name: "Plano Premium",
      price: "R$ 200",
      period: "/mês",
      benefits: [
        "Todos os benefícios do Plano Completo",
        "Treinamento comportamental",
        "Kit personalizado",
        "Visitas semanais",
        "Prioridade na adoção"
      ]
    }
  ];

  const sponsoredDogs = [
    {
      id: 1,
      name: "Toby",
      image: dog1,
      sponsors: 3,
      description: "Toby está esperando por mais padrinhos para ter uma vida melhor!"
    },
    {
      id: 2,
      name: "Mel",
      image: dog2,
      sponsors: 5,
      description: "Mel adora receber carinho e está precisando de ajuda."
    },
    {
      id: 3,
      name: "Thor",
      image: dog3,
      sponsors: 2,
      description: "Thor é super brincalhão e precisa do seu apoio!"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <Heart className="w-16 h-16 text-primary mx-auto mb-6" fill="currentColor" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Seja um Padrinho
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Não pode adotar mas quer ajudar? Apadrinhe um pet e faça a diferença na vida dele!
                Seu apoio garante alimentação, cuidados veterinários e muito carinho.
              </p>
            </div>
          </div>
        </section>

        {/* Como Funciona */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Como Funciona o Apadrinhamento
            </h2>
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">1. Escolha um Pet</h3>
                <p className="text-sm text-muted-foreground">
                  Selecione o pet que você quer apadrinhar
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">2. Escolha o Plano</h3>
                <p className="text-sm text-muted-foreground">
                  Defina o valor da sua contribuição mensal
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">3. Acompanhe</h3>
                <p className="text-sm text-muted-foreground">
                  Receba fotos e atualizações mensais
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">4. Visite</h3>
                <p className="text-sm text-muted-foreground">
                  Agende visitas e acompanhe o progresso
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Planos de Apadrinhamento */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-4">
              Planos de Apadrinhamento
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Escolha o plano que melhor se adequa à sua realidade. Qualquer contribuição faz diferença!
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {sponsorshipPlans.map((plan) => (
                <Card 
                  key={plan.id} 
                  className={`relative ${plan.featured ? 'border-primary shadow-lg scale-105' : ''}`}
                >
                  {plan.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                        Mais Popular
                      </span>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-center">
                      <div className="mb-2">{plan.name}</div>
                      <div className="text-3xl font-bold text-primary">
                        {plan.price}
                        <span className="text-sm text-muted-foreground font-normal">{plan.period}</span>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Heart className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="currentColor" />
                          <span className="text-sm text-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant={plan.featured ? "default" : "outline"}>
                      Escolher Plano
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pets Disponíveis para Apadrinhamento */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-4">
              Pets Aguardando Padrinhos
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Conheça alguns pets que precisam do seu apoio
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {sponsoredDogs.map((dog) => (
                <Card key={dog.id} className="overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={dog.image} 
                      alt={dog.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{dog.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{dog.description}</p>
                    <div className="flex items-center gap-2 mb-4">
                      <Heart className="w-4 h-4 text-primary" fill="currentColor" />
                      <span className="text-sm text-muted-foreground">
                        {dog.sponsors} {dog.sponsors === 1 ? 'padrinho' : 'padrinhos'}
                      </span>
                    </div>
                    <Button className="w-full">Apadrinhar {dog.name}</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Formulário de Contato */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-foreground mb-4">
                Fale Conosco
              </h2>
              <p className="text-center text-muted-foreground mb-8">
                Tem dúvidas sobre o apadrinhamento? Entre em contato!
              </p>
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input id="name" placeholder="Seu nome" />
                    </div>
                    <div>
                      <Label htmlFor="email">E-mail</Label>
                      <Input id="email" type="email" placeholder="seu@email.com" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefone</Label>
                      <Input id="phone" type="tel" placeholder="(00) 00000-0000" />
                    </div>
                    <div>
                      <Label htmlFor="message">Mensagem</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Conte-nos como você quer ajudar..."
                        rows={5}
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sponsorship;