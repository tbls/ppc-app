import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../store/auth/authSlice';

export const NavBar = () => {
  const dispatch = useDispatch();

  const cerrarSesion = () => {
    dispatch(logout());
  };

  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          PPC
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link eventKey="1" as={Link} to="/pendings">
              Pendientes Por Condición
            </Nav.Link>

            <Nav.Link eventKey="2" as={Link} to="/leaks">
              Emisiones Fugitivas
            </Nav.Link>

            <Nav.Link eventKey="3" as={Link} to="/equipments">
              Equipos Principales
            </Nav.Link>

            {/* <NavDropdown
							title="Pendientes Por Condición"
							id="collasible-nav-dropdown"
						>
							<NavDropdown.Item href="#action/3.1">Pendientes</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Superados</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Cancelados</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">
								Separated link
							</NavDropdown.Item>
						</NavDropdown> */}
          </Nav>
          <Nav className="d-flex align-items-end align-items-lg-center">
            <span className="text-info me-0 me-lg-3 sm">Tommy López</span>
            <Button
              onClick={cerrarSesion}
              variant={'outline-primary'}
              className="mt-2 mt-lg-0"
            >
              Salir
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
