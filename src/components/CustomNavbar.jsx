import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/netflix_logo.png";
import lent from "../assets/lent.png"
import bell from "../assets/bell.png"
import avatar from "../assets/avatar.png"
const CustomNavbar = () => (
  <Navbar
    expand="lg"
    className="mb-3"
    
    data-bs-theme="dark"
  >
    <Container fluid className="mx-4 ">
      <Navbar.Brand href="#">
        <img src={logo} alt="logo" style={{ height: "70px" }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#" className="fw-bold"> TV Shows </Nav.Link>
          <Nav.Link href="#">Browse</Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          <Nav.Link href="#">
            <img src={lent} alt="lent" style={{ height: "30px" }}
             />
          </Nav.Link>
          <Nav.Link href="#">
            <h4>Kids</h4>
          </Nav.Link>
          <Nav.Link href="#">
            <img src={bell} alt="bell" style={{ height: "30px" }}
             />
          </Nav.Link>
          <Nav.Link href="#">
          <img src={avatar} alt="avatar" style={{ height: "30px" }}
          />
          </Nav.Link>
          <Nav.Link href="#">Browse</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default CustomNavbar;
