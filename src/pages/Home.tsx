import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-dogs.jpg";

const Home = () => {
  const adoptionCount = 1247;

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="hero-section d-flex align-items-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay"></div>
        <Container className="hero-content">
          <Row>
            <Col lg={8}>
              <h1 className="display-3 fw-bold mb-4">
                Adote Amor. <br />
                Ganhe um Amigo <br />
                <span className="text-primary">para a Vida.</span>
              </h1>
              <p className="lead mb-4">
                Bem-vindo ao Amigo de Pata, um espaço dedicado à adoção responsável de cães. 
                Aqui você encontra companheiros leais esperando por um lar cheio de carinho.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link to="/caes" className="btn btn-primary btn-lg px-4">
                  Conheça os cães disponíveis
                </Link>
                <Link to="/apadrinhar" className="btn btn-outline-light btn-lg px-4">
                  Apadrinhe um cão
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="g-4">
            <Col md={6} lg={3}>
              <Card className="text-center h-100">
                <Card.Body>
                  <i className="bi bi-heart-fill text-primary fs-1"></i>
                  <h2 className="display-4 fw-bold mt-3">{adoptionCount}</h2>
                  <p className="text-muted">Cães Adotados</p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={6} lg={3}>
              <Card className="text-center h-100">
                <Card.Body>
                  <i className="bi bi-people-fill text-primary fs-1"></i>
                  <h2 className="display-4 fw-bold mt-3">89</h2>
                  <p className="text-muted">Cães Disponíveis</p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={6} lg={3}>
              <Card className="text-center h-100">
                <Card.Body>
                  <i className="bi bi-house-heart-fill text-primary fs-1"></i>
                  <h2 className="display-4 fw-bold mt-3">450+</h2>
                  <p className="text-muted">Famílias Felizes</p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={6} lg={3}>
              <Card className="text-center h-100">
                <Card.Body>
                  <i className="bi bi-award-fill text-primary fs-1"></i>
                  <h2 className="display-4 fw-bold mt-3">156</h2>
                  <p className="text-muted">Padrinhos Ativos</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Como Funciona Section */}
      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Como Funciona a Adoção</h2>
            <p className="lead text-muted">
              Um processo simples e transparente para conectar você ao seu novo melhor amigo
            </p>
          </div>

          <Row className="g-4">
            <Col md={4}>
              <Card className="text-center h-100 card-hover">
                <Card.Body className="p-4">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
                    <span className="display-4 fw-bold text-primary">1</span>
                  </div>
                  <h3 className="h4 fw-bold mb-3">Encontre seu Pet</h3>
                  <p className="text-muted">
                    Navegue pelos perfis e use filtros para encontrar o cão ideal para sua família
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="text-center h-100 card-hover">
                <Card.Body className="p-4">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
                    <span className="display-4 fw-bold text-primary">2</span>
                  </div>
                  <h3 className="h4 fw-bold mb-3">Faça uma Visita</h3>
                  <p className="text-muted">
                    Agende uma visita para conhecer o cão pessoalmente e ver a conexão acontecer
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="text-center h-100 card-hover">
                <Card.Body className="p-4">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
                    <span className="display-4 fw-bold text-primary">3</span>
                  </div>
                  <h3 className="h4 fw-bold mb-3">Leve para Casa</h3>
                  <p className="text-muted">
                    Complete o processo de adoção e leve seu novo amigo para casa com muito amor
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-5">
        <Container className="text-center">
          <h2 className="display-5 fw-bold mb-3">Pronto para Mudar uma Vida?</h2>
          <p className="lead mb-4">
            Milhares de cães estão esperando por um lar cheio de amor. Seja você a diferença na vida deles.
          </p>
          <div className="d-flex flex-wrap gap-3 justify-content-center">
            <Link to="/caes" className="btn btn-light btn-lg px-4">
              Ver Cães Disponíveis
            </Link>
            <Link to="/historias" className="btn btn-outline-light btn-lg px-4">
              Histórias de Sucesso
            </Link>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
