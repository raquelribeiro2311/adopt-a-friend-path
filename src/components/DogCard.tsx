import { Card, Button, Badge } from "react-bootstrap";
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
  available: { label: "Disponível", bg: "success" },
  process: { label: "Em Processo", bg: "warning" },
  adopted: { label: "Adotado", bg: "secondary" },
};

const DogCard = ({ name, image, age, size, location, status }: DogCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  return (
    <Card className="h-100 card-hover">
      <div className="position-relative">
        <Card.Img
          variant="top"
          src={image}
          alt={name}
          className="dog-card-img"
        />
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className={`favorite-btn ${isFavorite ? "active" : ""}`}
          aria-label="Favoritar"
        >
          <i className={`bi ${isFavorite ? "bi-heart-fill" : "bi-heart"} fs-5`}></i>
        </button>
        <Badge
          bg={statusConfig[status].bg}
          className="status-badge"
        >
          {statusConfig[status].label}
        </Badge>
      </div>
      
      <Card.Body>
        <Card.Title className="fw-bold">{name}</Card.Title>
        <div className="d-flex gap-2 mb-3">
          <Badge bg="light" text="dark">{age}</Badge>
          <Badge bg="light" text="dark">{size}</Badge>
        </div>
        <div className="d-flex align-items-center text-muted">
          <i className="bi bi-geo-alt me-1"></i>
          <small>{location}</small>
        </div>
      </Card.Body>
      
      <Card.Footer className="bg-white border-top-0">
        <div className="d-grid gap-2">
          <Button
            variant="primary"
            disabled={status !== "available"}
          >
            Ver Perfil
          </Button>
          <Button
            variant="outline-primary"
            disabled={status !== "available"}
            onClick={() => navigate("/apadrinhar")}
          >
            Apadrinhar
          </Button>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default DogCard;
