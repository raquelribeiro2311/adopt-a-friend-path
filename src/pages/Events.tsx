import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import dog1 from "@/assets/dog-1.jpg";
import dog2 from "@/assets/dog-2.jpg";
import dog3 from "@/assets/dog-3.jpg";
import heroImage from "@/assets/hero-dogs.jpg";

const adoptionEvents = [
  {
    id: 1,
    title: "Feira de Adoção de Primavera",
    date: "15 de Março, 2025",
    time: "10:00 - 16:00",
    location: "Parque Municipal Central",
    description: "Grande feira de adoção com mais de 50 cães e gatos procurando um lar. Venha conhecer nossos amigos peludos!",
    image: dog1,
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
    image: dog2,
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
    image: dog3,
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
    image: heroImage,
    status: "past",
    attendees: 250
  }
];

const Events = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <Container className="text-center">
          <h1 className="display-4 fw-bold mb-3">Eventos de Adoção</h1>
          <p className="lead">
            Participe dos nossos eventos e encontre seu novo melhor amigo! 
            Todos os nossos eventos são gratuitos e abertos ao público.
          </p>
        </Container>
      </section>

      {/* Upcoming Events */}
      <section className="py-5">
        <Container>
          <h2 className="h3 fw-bold text-center mb-5">Próximos Eventos</h2>
          
          <Row className="g-4">
            {adoptionEvents
              .filter(event => event.status === "upcoming")
              .map((event) => (
                <Col key={event.id} md={6} lg={4}>
                  <Card className="h-100 card-hover">
                    <Card.Img
                      variant="top"
                      src={event.image}
                      alt={event.title}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <Badge bg="success">Confirmado</Badge>
                        <small className="text-muted">
                          <i className="bi bi-people me-1"></i>
                          {event.attendees} interessados
                        </small>
                      </div>
                      <Card.Title className="h5 fw-bold">{event.title}</Card.Title>
                      <Card.Text className="text-muted">{event.description}</Card.Text>
                      
                      <div className="d-flex flex-column gap-2 mt-3">
                        <div className="d-flex align-items-center">
                          <i className="bi bi-calendar3 text-primary me-2"></i>
                          <small>{event.date}</small>
                        </div>
                        <div className="d-flex align-items-center">
                          <i className="bi bi-clock text-primary me-2"></i>
                          <small>{event.time}</small>
                        </div>
                        <div className="d-flex align-items-center">
                          <i className="bi bi-geo-alt text-primary me-2"></i>
                          <small>{event.location}</small>
                        </div>
                      </div>
                    </Card.Body>
                    <Card.Footer className="bg-white">
                      <Button variant="primary" className="w-100">
                        Confirmar Presença
                      </Button>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
          </Row>
        </Container>
      </section>

      {/* Past Events */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="h3 fw-bold text-center mb-5">Eventos Anteriores</h2>
          
          <Row className="g-4">
            {adoptionEvents
              .filter(event => event.status === "past")
              .map((event) => (
                <Col key={event.id} md={6} lg={4}>
                  <Card className="h-100 opacity-75">
                    <Card.Img
                      variant="top"
                      src={event.image}
                      alt={event.title}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <Badge bg="secondary">Realizado</Badge>
                        <small className="text-muted">
                          <i className="bi bi-people me-1"></i>
                          {event.attendees} participantes
                        </small>
                      </div>
                      <Card.Title className="h5 fw-bold">{event.title}</Card.Title>
                      <Card.Text className="text-muted">{event.description}</Card.Text>
                      
                      <div className="d-flex flex-column gap-2 mt-3">
                        <div className="d-flex align-items-center text-muted">
                          <i className="bi bi-calendar3 me-2"></i>
                          <small>{event.date}</small>
                        </div>
                        <div className="d-flex align-items-center text-muted">
                          <i className="bi bi-geo-alt me-2"></i>
                          <small>{event.location}</small>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white py-5">
        <Container className="text-center">
          <h2 className="h3 fw-bold mb-3">Quer Organizar um Evento?</h2>
          <p className="lead mb-4">
            Se você representa uma instituição ou gostaria de organizar um evento de adoção 
            em sua comunidade, entre em contato conosco!
          </p>
          <Button variant="light" size="lg">
            Entre em Contato
          </Button>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
