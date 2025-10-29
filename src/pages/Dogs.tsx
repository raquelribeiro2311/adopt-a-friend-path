import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DogCard from "@/components/DogCard";
import DogRegistrationModal from "@/components/DogRegistrationModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Plus } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import dog1 from "@/assets/dog-1.jpg";
import dog2 from "@/assets/dog-2.jpg";
import dog3 from "@/assets/dog-3.jpg";

const Dogs = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [sizeFilter, setSizeFilter] = useState("all");
  const [ageFilter, setAgeFilter] = useState("all");
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [allDogs, setAllDogs] = useState<any[]>([]);

  // Dados mockados iniciais
  const mockDogs = [
    {
      id: "1",
      name: "Mel",
      image: dog1,
      age: "Filhote (6 meses)",
      size: "Pequeno",
      location: "São Paulo, SP",
      status: "available" as const,
    },
    {
      id: "2",
      name: "Thor",
      image: dog2,
      age: "Adulto (3 anos)",
      size: "Grande",
      location: "Rio de Janeiro, RJ",
      status: "available" as const,
    },
    {
      id: "3",
      name: "Luna",
      image: dog3,
      age: "Filhote (8 meses)",
      size: "Médio",
      location: "Belo Horizonte, MG",
      status: "process" as const,
    },
    {
      id: "4",
      name: "Belinha",
      image: dog1,
      age: "Adulto (5 anos)",
      size: "Pequeno",
      location: "Curitiba, PR",
      status: "available" as const,
    },
    {
      id: "5",
      name: "Max",
      image: dog2,
      age: "Idoso (8 anos)",
      size: "Grande",
      location: "Porto Alegre, RS",
      status: "adopted" as const,
    },
    {
      id: "6",
      name: "Nina",
      image: dog3,
      age: "Filhote (4 meses)",
      size: "Médio",
      location: "Brasília, DF",
      status: "available" as const,
    },
  ];

  useEffect(() => {
    loadDogs();
  }, []);

  const loadDogs = () => {
    const storedDogs = JSON.parse(localStorage.getItem("dogs") || "[]");
    setAllDogs([...mockDogs, ...storedDogs]);
  };

  const handleAddDogClick = () => {
    if (isAuthenticated) {
      setIsRegistrationModalOpen(true);
    } else {
      toast({
        title: "Login necessário",
        description: "Você precisa estar logado para cadastrar um cão.",
        variant: "destructive",
      });
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary/80 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Encontre seu novo melhor amigo
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Explore os perfis dos cães disponíveis para adoção. Use os filtros para encontrar o pet ideal para seu estilo de vida.
            </p>
          </div>
          <div className="flex justify-center">
            <Button
              onClick={handleAddDogClick}
              size="lg"
              variant="secondary"
              className="gap-2"
            >
              <Plus className="w-5 h-5" />
              Cadastrar Cão para Adoção
            </Button>
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Busca */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar por nome ou localização..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filtro Porte */}
            <Select value={sizeFilter} onValueChange={setSizeFilter}>
              <SelectTrigger className="w-full md:w-[200px]">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Porte" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os portes</SelectItem>
                <SelectItem value="small">Pequeno</SelectItem>
                <SelectItem value="medium">Médio</SelectItem>
                <SelectItem value="large">Grande</SelectItem>
              </SelectContent>
            </Select>

            {/* Filtro Idade */}
            <Select value={ageFilter} onValueChange={setAgeFilter}>
              <SelectTrigger className="w-full md:w-[200px]">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Idade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as idades</SelectItem>
                <SelectItem value="puppy">Filhote</SelectItem>
                <SelectItem value="adult">Adulto</SelectItem>
                <SelectItem value="senior">Idoso</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline">Limpar Filtros</Button>
          </div>
        </div>
      </section>

      {/* Grid de Cães */}
      <section className="py-12 flex-1">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              {allDogs.length} cães encontrados
            </h2>
            <p className="text-muted-foreground">
              Clique nos corações para favoritar seus preferidos
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allDogs.map((dog) => (
              <DogCard key={dog.id} id={dog.id} name={dog.name} image={dog.image} age={dog.age} size={dog.size} location={dog.location} status={dog.status} />
            ))}
          </div>

          {/* Paginação futura */}
          <div className="mt-12 flex justify-center">
            <Button variant="outline" className="mr-2">Anterior</Button>
            <Button variant="outline" className="ml-2">Próxima</Button>
          </div>
        </div>
      </section>

      <DogRegistrationModal
        open={isRegistrationModalOpen}
        onOpenChange={setIsRegistrationModalOpen}
        onDogAdded={loadDogs}
      />

      <Footer />
    </div>
  );
};

export default Dogs;
