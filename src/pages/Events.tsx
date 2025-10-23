import { Calendar, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const adoptionEvents = [
  {
    id: 1,
    title: "Feira de Adoção de Primavera",
    date: "15 de Março, 2025",
    time: "10:00 - 16:00",
    location: "Parque Municipal Central",
    description: "Grande feira de adoção com mais de 50 cães e gatos procurando um lar. Venha conhecer nossos amigos peludos!",
    image: "/src/assets/dog-1.jpg",
    status: "upcoming",
    attendees: 120
  },
  {
    id: 2,
    title: "Domingo de Adoção",
    date: "22 de Março, 2025",
    time: "09:00 - 14:00",
    location: "Centro Comunitário São José",
    description: "Evento especial focado em cães de porte médio e grande. Processo de adoção simplificado no local.",
    image: "/src/assets/dog-2.jpg",
    status: "upcoming",
    attendees: 85
  },
  {
    id: 3,
    title: "Adote um Amigo Senior",
    date: "5 de Abril, 2025",
    time: "11:00 - 17:00",
    location: "Shopping Verde Vale",
    description: "Campanha especial para adoção de pets mais velhos. Inclui consulta veterinária gratuita e kit de boas-vindas.",
    image: "/src/assets/dog-3.jpg",
    status: "upcoming",
    attendees: 60
  },
  {
    id: 4,
    title: "Natal Solidário Pet",
    date: "15 de Dezembro, 2024",
    time: "10:00 - 18:00",
    location: "Praça da Matriz",
    description: "Nosso maior evento do ano! Mais de 100 pets encontraram um lar neste dia especial.",
    image: "/src/assets/hero-dogs.jpg",
    status: "past",
    attendees: 250
  }
];

const Events = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Eventos de Adoção
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Participe dos nossos eventos e encontre seu novo melhor amigo! 
              Todos os nossos eventos são gratuitos e abertos ao público.
            </p>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Próximos Eventos</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {adoptionEvents
                .filter(event => event.status === "upcoming")
                .map((event) => (
                  <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                      <CardDescription>{event.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center text-sm">
                        <Calendar className="w-4 h-4 mr-2 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="w-4 h-4 mr-2 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <MapPin className="w-4 h-4 mr-2 text-primary" />
                        <span>{event.location}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Eventos Anteriores</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {adoptionEvents
                .filter(event => event.status === "past")
                .map((event) => (
                  <Card key={event.id} className="overflow-hidden opacity-80">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                      <CardDescription>{event.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center text-sm">
                        <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
                        <span>{event.location}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
