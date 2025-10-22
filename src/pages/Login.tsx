import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Card, Form, Button } from "react-bootstrap";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light p-4">
      <Container style={{ maxWidth: '500px' }}>
        {/* Logo */}
        <Link to="/" className="d-flex align-items-center justify-content-center mb-4 text-decoration-none">
          <i className="bi bi-heart-fill text-primary me-2 fs-3"></i>
          <span className="fs-4 fw-bold text-dark">Lar dos Caramellos</span>
        </Link>

        <Card>
          <Card.Body className="p-4">
            <h2 className="text-center mb-2">{isLogin ? "Entrar" : "Criar Conta"}</h2>
            <p className="text-center text-muted mb-4">
              {isLogin
                ? "Entre com sua conta para continuar"
                : "Crie sua conta para adotar um amigo"}
            </p>

            <Form>
              {!isLogin && (
                <Form.Group className="mb-3">
                  <Form.Label>Nome Completo</Form.Label>
                  <Form.Control type="text" placeholder="Seu nome" />
                </Form.Group>
              )}

              <Form.Group className="mb-3">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder="seu@email.com" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="••••••••" />
              </Form.Group>

              {isLogin && (
                <div className="text-end mb-3">
                  <Link to="/recuperar-senha" className="text-primary text-decoration-none small">
                    Esqueci minha senha
                  </Link>
                </div>
              )}

              <Button variant="primary" className="w-100 mb-3" size="lg">
                {isLogin ? "Entrar" : "Criar Conta"}
              </Button>

              <div className="text-center">
                <small className="text-muted">
                  {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}{" "}
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="btn btn-link p-0 text-primary text-decoration-none"
                  >
                    {isLogin ? "Criar conta" : "Entrar"}
                  </button>
                </small>
              </div>
            </Form>
          </Card.Body>
        </Card>

        <p className="text-center text-muted small mt-4">
          Ao continuar, você concorda com nossos Termos de Uso e Política de Privacidade
        </p>
      </Container>
    </div>
  );
};

export default Login;
