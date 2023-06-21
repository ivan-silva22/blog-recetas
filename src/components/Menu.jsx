import { Nav, Container, Navbar, Button } from "react-bootstrap";
import {Link, NavLink, useNavigate} from "react-router-dom";

const Menu = (usuarioLogin, setUsuarioLogin) => {
  const navegacion = useNavigate();

  const logout = ()=>{
    setUsuarioLogin({});
    sessionStorage.removeItem('usuario');
    navegacion('/');
  }
    return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to='/'>Blog de cocina</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end className={'nav-item nav-link'} to='/'>Inicio</NavLink>
            <NavLink end className={'nav-item nav-link'} to='/registro'>Registro</NavLink>
            {
              (usuarioLogin.nombreUsuario)?(
                <>
                  <NavLink end className={'nav-item nav-link'} to='/administrador'>Administrador</NavLink>
                <Button className={'nav-item nav-link'} onClick={logout}>Logout</Button>
                </>
              ):<NavLink end className={'nav-item nav-link'} to='/login'>Login</NavLink>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Menu;