import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const SimpleNavBar = () => {
  return (
    <div className="text-primary">
      <Navbar collapseOnSelect expand="lg" bg="light"  variant="light">
      <Container>
        <Navbar.Brand className="logo">
          siteName
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link>
                <Link to='/' className="text-secondary text-decoration-none">home</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to='/myBook' className="text-secondary text-decoration-none">My Booking</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to='/about' className="text-secondary text-decoration-none">about</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default SimpleNavBar;
