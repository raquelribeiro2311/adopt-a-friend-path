import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Quote } from "lucide-react";
import dog1 from "@/assets/dog-1.jpg";
import dog2 from "@/assets/dog-2.jpg";
import dog3 from "@/assets/dog-3.jpg";

const Stories = () => {
  const adoptionStories = [
    {
      petImage: dog1,
      petName: "Max",
      ownerName: "Carlos Silva",
      story: "Adotei o Max há 2 anos e foi a melhor decisão da minha vida. Ele trouxe alegria e companheirismo para nossa família. Todos os dias ele me espera na porta com aquele olhar amoroso.",
      testimonial: "Max transformou nossa casa em um lar cheio de amor e alegria. Não consigo imaginar nossa vida sem ele!",
      date: "Janeiro 2023",
    },
    {
      petImage: dog2,
      petName: "Luna",
      ownerName: "Ana Costa",
      story: "Luna estava assustada no abrigo, mas com amor e paciência, ela se tornou a cadela mais afetuosa que conheço. Hoje ela é a melhor amiga dos meus filhos.",
      testimonial: "Luna nos ensinou o verdadeiro significado de resiliência e amor incondicional. Ela é parte da família!",
      date: "Março 2023",
    },
    {
      petImage: dog3,
      petName: "Thor",
      ownerName: "Pedro Santos",
      story: "Thor mudou completamente a minha rotina. Agora acordo cedo para passear e sou muito mais ativo e feliz. Ele me tirou do sedentarismo e trouxe propósito para meus dias.",
      testimonial: "Adotar o Thor foi a melhor decisão que já tomei. Ele não só mudou minha saúde física, mas também a mental!",
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
                Histórias de Adoção
              </h1>
              <p className="text-lg text-muted-foreground">
                Histórias reais de amor, transformação e felicidade. Inspire-se e faça parte dessa mudança!
              </p>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-12 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">150+</div>
                <div className="text-muted-foreground">Cães Adotados</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <div className="text-muted-foreground">Famílias Felizes</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">5 Anos</div>
                <div className="text-muted-foreground">Transformando Vidas</div>
              </div>
            </div>
          </div>
        </section>

        {/* Adoption Stories Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Histórias que Inspiram</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Cada adoção é uma história única de amor, superação e companheirismo
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {adoptionStories.map((story, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={story.petImage}
                      alt={`${story.petName} com ${story.ownerName}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">{story.petName}</CardTitle>
                    <CardDescription className="text-sm font-semibold text-primary">
                      Adotado por {story.ownerName} • {story.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{story.story}</p>
                    <div className="bg-muted/50 p-4 rounded-lg relative">
                      <Quote className="w-6 h-6 text-primary/40 absolute top-2 left-2" />
                      <p className="text-sm italic pl-6">{story.testimonial}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Escreva Sua Própria História</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Cada adoção é uma história de amor esperando para ser escrita. Venha conhecer nossos cães disponíveis e encontre seu novo melhor amigo.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="/caes"
                className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 py-2 font-medium transition-colors"
              >
                Conhecer Cães Disponíveis
              </a>
              <a
                href="/dicas"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 py-2 font-medium transition-colors"
              >
                Dicas de Cuidados
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Stories;
