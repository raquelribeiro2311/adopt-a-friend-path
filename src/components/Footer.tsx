import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer py-5">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <div className="d-flex align-items-center mb-3">
              <i className="bi bi-heart-fill text-primary me-2 fs-4"></i>
              <h5 className="mb-0 fw-bold">Lar dos Caramellos</h5>
            </div>
            <p className="text-white-50">
              Conectando corações e transformando vidas através da adoção responsável de cães.
            </p>
            <div className="d-flex gap-3">
              <a href="https://facebook.com" className="text-white fs-4">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://instagram.com" className="text-white fs-4">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="mailto:contato@amigodepata.com" className="text-white fs-4">
                <i className="bi bi-envelope"></i>
              </a>
            </div>
          </Col>

          <Col md={4} className="mb-4">
            <h5 className="fw-bold mb-3">Links Rápidos</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/caes">Adotar um Cão</Link>
              </li>
              <li className="mb-2">
                <Link to="/apadrinhar">Apadrinhar</Link>
              </li>
              <li className="mb-2">
                <Link to="/eventos">Eventos</Link>
              </li>
              <li className="mb-2">
                <Link to="/dicas">Dicas para Pets</Link>
              </li>
            </ul>
          </Col>

          <Col md={4} className="mb-4">
            <h5 className="fw-bold mb-3">Ajuda</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#denuncia">Denunciar Maus-Tratos</a>
              </li>
              <li className="mb-2">
                <Link to="/historias">Histórias de Adoção</Link>
              </li>
              <li className="mb-2">
                <a href="#contato">Contato</a>
              </li>
            </ul>
          </Col>
        </Row>

        <hr className="bg-white my-4" />

        <Row>
          <Col className="text-center">
            <p className="mb-0 text-white-50">
              &copy; {new Date().getFullYear()} Lar dos Caramellos. Todos os direitos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
