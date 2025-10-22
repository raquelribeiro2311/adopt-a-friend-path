import { Link, useLocation } from "react-router-dom";
import { Container, Nav, Navbar as BSNavbar } from "react-bootstrap";

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Início" },
    { to: "/caes", label: "Cães" },
    { to: "/apadrinhar", label: "Apadrinhe" },
    { to: "/dicas", label: "Dicas Pet" },
    { to: "/eventos", label: "Eventos" },
    { to: "/historias", label: "Histórias" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <BSNavbar bg="light" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <BSNavbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <i className="bi bi-heart-fill text-primary me-2 fs-4"></i>
          <span className="fw-bold">Lar dos Caramellos</span>
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {navLinks.map((link) => (
              <Nav.Link
                key={link.to}
                as={Link}
                to={link.to}
                className={`mx-2 ${isActive(link.to) ? "text-primary fw-bold" : ""}`}
              >
                {link.label}
              </Nav.Link>
            ))}
            <Link to="/login" className="btn btn-primary ms-3">
              Entrar
            </Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
