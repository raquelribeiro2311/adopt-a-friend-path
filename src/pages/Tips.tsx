import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Home, Utensils, Activity, BookOpen } from "lucide-react";
import dog1 from "@/assets/dog-1.jpg";
import dog2 from "@/assets/dog-2.jpg";
import dog3 from "@/assets/dog-3.jpg";

const Tips = () => {
  const petTips = [
    {
      icon: <Home className="w-6 h-6" />,
      title: "Adaptação ao Novo Lar",
      description: "Dê tempo ao seu novo amigo para se adaptar. Prepare um espaço confortável e seguro antes da chegada.",
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Alimentação Balanceada",
      description: "Consulte um veterinário para definir a dieta ideal. Água fresca deve estar sempre disponível.",
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Exercícios Diários",
      description: "Passeios regulares são essenciais para a saúde física e mental do seu pet.",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Treinamento e Socialização",
      description: "Invista tempo em treinamento básico e socialização desde cedo para um pet equilibrado.",
    },
  ];

  const adoptionStories = [
    {
      petImage: dog1,
      petName: "Max",
      ownerName: "Carlos Silva",
      story: "Adotei o Max há 2 anos e foi a melhor decisão da minha vida. Ele trouxe alegria e companheirismo para nossa família.",
      date: "Janeiro 2023",
    },
    {
      petImage: dog2,
      petName: "Luna",
      ownerName: "Ana Costa",
      story: "Luna estava assustada no abrigo, mas com amor e paciência, ela se tornou a cadela mais afetuosa que conheço.",
      date: "Março 2023",
    },
    {
      petImage: dog3,
      petName: "Thor",
      ownerName: "Pedro Santos",
      story: "Thor mudou completamente a minha rotina. Agora acordo cedo para passear e sou muito mais ativo e feliz.",
      date: "Maio 2023",
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
                Dicas e Histórias de Sucesso
              </h1>
              <p className="text-lg text-muted-foreground">
                Aprenda a cuidar do seu pet e inspire-se com histórias reais de adoção
              </p>
            </div>
          </div>
        </section>

        {/* Pet Tips Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Dicas para Cuidar do Seu Pet</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {petTips.map((tip, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                      {tip.icon}
                    </div>
                    <CardTitle className="text-xl">{tip.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{tip.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Adoption Stories Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Histórias de Adoção</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {adoptionStories.map((story, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={story.petImage}
                      alt={story.petName}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">{story.petName}</CardTitle>
                    <CardDescription className="text-sm font-semibold text-primary">
                      Adotado por {story.ownerName}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{story.story}</p>
                    <p className="text-sm text-muted-foreground font-medium">{story.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Faça Parte Dessa História</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Cada adoção é uma história de amor. Venha conhecer nossos cães disponíveis e encontre seu novo melhor amigo.
            </p>
            <a
              href="/caes"
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 py-2 font-medium transition-colors"
            >
              Ver Cães Disponíveis
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Tips;
