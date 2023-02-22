import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function NavbarTop() {
  const navigate = useNavigate();

  function handleLogout(e) {
    localStorage.clear();
    navigate("/login");
  }

  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <h4>Books Management</h4>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to={"/"} style={{ textDecoration: "none" }}>
                Books
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/categories"} style={{ textDecoration: "none" }}>
                Categories
              </Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
