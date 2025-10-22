import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface DogCardProps {
  id: string;
  name: string;
  image: string;
  age: string;
  size: string;
  location: string;
  status: "available" | "process" | "adopted";
}

const statusConfig = {
  available: { label: "Disponível", className: "bg-accent text-accent-foreground" },
  process: { label: "Em Processo", className: "bg-secondary" },
  adopted: { label: "Adotado", className: "bg-muted" },
};

const DogCard = ({ name, image, age, size, location, status }: DogCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 p-2 rounded-full bg-card/90 backdrop-blur-sm hover:bg-card transition-colors"
          aria-label="Favoritar"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              isFavorite ? "fill-primary text-primary" : "text-muted-foreground"
            }`}
          />
        </button>
        <div className="absolute top-3 left-3">
          <Badge className={statusConfig[status].className}>
            {statusConfig[status].label}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
        <div className="flex gap-2 mb-3">
          <Badge variant="outline" className="text-xs">{age}</Badge>
          <Badge variant="outline" className="text-xs">{size}</Badge>
        </div>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button className="flex-1" disabled={status !== "available"}>
          Ver Perfil
        </Button>
        <Button 
          variant="outline" 
          className="flex-1" 
          disabled={status !== "available"}
          onClick={() => navigate("/apadrinhar")}
        >
          Apadrinhar
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DogCard;
