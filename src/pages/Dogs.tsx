import { useState } from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DogCard from "@/components/DogCard";
import dog1 from "@/assets/dog-1.jpg";
import dog2 from "@/assets/dog-2.jpg";
import dog3 from "@/assets/dog-3.jpg";

const Dogs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sizeFilter, setSizeFilter] = useState("all");
  const [ageFilter, setAgeFilter] = useState("all");

  const dogs = [
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

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      
      {/* Header */}
      <section className="bg-primary text-white py-5">
        <Container className="text-center">
          <h1 className="display-4 fw-bold mb-3">
            Encontre seu novo melhor amigo
          </h1>
          <p className="lead">
            Explore os perfis dos cães disponíveis para adoção. Use os filtros para encontrar o pet ideal para seu estilo de vida.
          </p>
        </Container>
      </section>

      {/* Filtros */}
      <section className="py-4 bg-light border-bottom">
        <Container>
          <Row className="g-3">
            <Col md={4}>
              <InputGroup>
                <InputGroup.Text>
                  <i className="bi bi-search"></i>
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Buscar por nome ou localização..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </InputGroup>
            </Col>

            <Col md={3}>
              <Form.Select value={sizeFilter} onChange={(e) => setSizeFilter(e.target.value)}>
                <option value="all">Todos os portes</option>
                <option value="small">Pequeno</option>
                <option value="medium">Médio</option>
                <option value="large">Grande</option>
              </Form.Select>
            </Col>

            <Col md={3}>
              <Form.Select value={ageFilter} onChange={(e) => setAgeFilter(e.target.value)}>
                <option value="all">Todas as idades</option>
                <option value="puppy">Filhote</option>
                <option value="adult">Adulto</option>
                <option value="senior">Idoso</option>
              </Form.Select>
            </Col>

            <Col md={2}>
              <Button variant="outline-secondary" className="w-100">
                Limpar Filtros
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Grid de Cães */}
      <section className="py-5 flex-grow-1">
        <Container>
          <div className="mb-4">
            <h2 className="h4 fw-bold mb-2">{dogs.length} cães encontrados</h2>
            <p className="text-muted">
              Clique nos corações para favoritar seus preferidos
            </p>
          </div>

          <Row className="g-4">
            {dogs.map((dog) => (
              <Col key={dog.id} sm={6} lg={4}>
                <DogCard {...dog} />
              </Col>
            ))}
          </Row>

          <div className="mt-5 d-flex justify-content-center gap-2">
            <Button variant="outline-primary">Anterior</Button>
            <Button variant="outline-primary">Próxima</Button>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default Dogs;
