import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";

function Navigationbar() {
  const navigate = useNavigate();

  //get authToken and loginUser from localstorage
  const authToken = localStorage.getItem("authToken");
  const loginUser = localStorage.getItem("loginUser");

  //handle logout
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("loginUser");
    navigate("/login");
  };
  return (
    <Navbar expand="lg" bg="primary" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">Car-Bay</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/listing">Listing</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/add-car">Add Car</Nav.Link>
            <NavDropdown title="More" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/all-cars">All Cars</NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item href="/register">
                Register
              </NavDropdown.Item>
              {authToken ? (
                  <NavDropdown.Item onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
              ) : (
                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              )}
            </NavDropdown>
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
