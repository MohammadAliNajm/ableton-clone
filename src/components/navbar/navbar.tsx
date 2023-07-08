
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap'
import {BiLogoGithub} from 'react-icons/bi'
import './navbar.scss'
const Navigationbar = () => {
  return (
    <Navbar expand='lg' className="navbar"  >
    <Container>
        <NavbarBrand><BiLogoGithub size={18}  /></NavbarBrand>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Live</Nav.Link>
            <Nav.Link href="#link">Push</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#link">Shop</Nav.Link>
            <Nav.Link href="#link">Packs</Nav.Link>
            <Nav.Link href="#link">Help</Nav.Link>
            <Nav.Link href="#link">More</Nav.Link>
          </Nav>
        </Navbar.Collapse></Container>
    </Navbar>

  )
}

export default Navigationbar