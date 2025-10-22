import { Container, Row, Col, Card, Button, Form, Badge } from "react-bootstrap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-primary bg-opacity-10 py-5">
        <Container className="text-center">
          <i className="bi bi-heart-fill text-primary display-1"></i>
          <h1 className="display-4 fw-bold mt-3 mb-3">Seja um Padrinho</h1>
          <p className="lead text-muted col-lg-8 mx-auto">
            Não pode adotar mas quer ajudar? Apadrinhe um pet e faça a diferença na vida dele!
            Seu apoio garante alimentação, cuidados veterinários e muito carinho.
          </p>
        </Container>
      </section>

      {/* Como Funciona */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center fw-bold mb-5">Como Funciona o Apadrinhamento</h2>
          <Row className="g-4">
            <Col md={6} lg={3} className="text-center">
              <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                <i className="bi bi-heart text-primary fs-2"></i>
              </div>
              <h5 className="fw-bold">1. Escolha um Pet</h5>
              <p className="text-muted">Selecione o pet que você quer apadrinhar</p>
            </Col>
            <Col md={6} lg={3} className="text-center">
              <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                <i className="bi bi-currency-dollar text-primary fs-2"></i>
              </div>
              <h5 className="fw-bold">2. Escolha o Plano</h5>
              <p className="text-muted">Defina o valor da sua contribuição mensal</p>
            </Col>
            <Col md={6} lg={3} className="text-center">
              <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                <i className="bi bi-calendar3 text-primary fs-2"></i>
              </div>
              <h5 className="fw-bold">3. Acompanhe</h5>
              <p className="text-muted">Receba fotos e atualizações mensais</p>
            </Col>
            <Col md={6} lg={3} className="text-center">
              <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                <i className="bi bi-gift text-primary fs-2"></i>
              </div>
              <h5 className="fw-bold">4. Visite</h5>
              <p className="text-muted">Agende visitas e acompanhe o progresso</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Planos */}
      <section className="py-5">
        <Container>
          <h2 className="text-center fw-bold mb-3">Planos de Apadrinhamento</h2>
          <p className="text-center text-muted mb-5">
            Escolha o plano que melhor se adequa à sua realidade. Qualquer contribuição faz diferença!
          </p>
          <Row className="g-4">
            {sponsorshipPlans.map((plan) => (
              <Col key={plan.id} md={6} lg={4}>
                <Card className={`h-100 position-relative ${plan.featured ? 'border-primary shadow-lg' : ''}`}>
                  {plan.featured && (
                    <Badge bg="primary" className="position-absolute top-0 start-50 translate-middle">
                      Mais Popular
                    </Badge>
                  )}
                  <Card.Body className="text-center">
                    <Card.Title className="fw-bold mb-4">{plan.name}</Card.Title>
                    <div className="display-4 fw-bold text-primary mb-2">
                      {plan.price}
                      <span className="fs-6 text-muted">{plan.period}</span>
                    </div>
                    <hr className="my-4" />
                    <ul className="list-unstyled text-start">
                      {plan.benefits.map((benefit, index) => (
                        <li key={index} className="mb-3">
                          <i className="bi bi-check-circle-fill text-primary me-2"></i>
                          <small>{benefit}</small>
                        </li>
                      ))}
                    </ul>
                    <Button variant={plan.featured ? "primary" : "outline-primary"} className="w-100 mt-3">
                      Escolher Plano
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Pets Disponíveis */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center fw-bold mb-3">Pets Aguardando Padrinhos</h2>
          <p className="text-center text-muted mb-5">
            Conheça alguns pets que precisam do seu apoio
          </p>
          <Row className="g-4">
            {sponsoredDogs.map((dog) => (
              <Col key={dog.id} md={6} lg={4}>
                <Card className="h-100">
                  <Card.Img
                    variant="top"
                    src={dog.image}
                    alt={dog.name}
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title className="fw-bold">{dog.name}</Card.Title>
                    <Card.Text className="text-muted">{dog.description}</Card.Text>
                    <div className="mb-3">
                      <i className="bi bi-heart-fill text-primary me-2"></i>
                      <small className="text-muted">
                        {dog.sponsors} {dog.sponsors === 1 ? 'padrinho' : 'padrinhos'}
                      </small>
                    </div>
                    <Button variant="primary" className="w-100">
                      Apadrinhar {dog.name}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Formulário */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Card>
                <Card.Body className="p-4">
                  <h3 className="text-center fw-bold mb-3">Fale Conosco</h3>
                  <p className="text-center text-muted mb-4">
                    Tem dúvidas sobre o apadrinhamento? Entre em contato!
                  </p>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>Nome Completo</Form.Label>
                      <Form.Control type="text" placeholder="Seu nome" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>E-mail</Form.Label>
                      <Form.Control type="email" placeholder="seu@email.com" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Telefone</Form.Label>
                      <Form.Control type="tel" placeholder="(00) 00000-0000" />
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Label>Mensagem</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Conte-nos como você quer ajudar..."
                      />
                    </Form.Group>
                    <Button type="submit" variant="primary" className="w-100">
                      Enviar Mensagem
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default Sponsorship;
