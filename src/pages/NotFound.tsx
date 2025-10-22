import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Container, Button } from "react-bootstrap";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <Container className="text-center">
        <div className="mb-4">
          <i className="bi bi-emoji-frown text-primary" style={{ fontSize: '120px' }}></i>
        </div>
        <h1 className="display-1 fw-bold mb-3">404</h1>
        <h2 className="h3 mb-3">Página Não Encontrada</h2>
        <p className="text-muted mb-4">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
        <Link to="/">
          <Button variant="primary" size="lg">
            <i className="bi bi-house me-2"></i>
            Voltar para Home
          </Button>
        </Link>
      </Container>
    </div>
  );
};

export default NotFound;
