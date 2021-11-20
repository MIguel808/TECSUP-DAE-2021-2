import React, { Component } from 'react';
import {Route,Routes,BrowserRouter,Link} from 'react-router-dom';
import {Navbar,Nav,NavDropdown,FormControl,Form,Button,Container} from 'react-bootstrap'
import About from './About';
import Contactos from './Contactos';
import Home from './Home';

export default class NavbarComponent extends Component{
    render(){
        return(
            <BrowserRouter>
            <div>
                <Navbar bg="dark" variant={"dark"} expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React Router Usando Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to="/Home">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/About">About</Link></Nav.Link>
                        <Nav.Link><Link to="/Contactos">Contactos</Link></Nav.Link>
                        <NavDropdown title="Elegir Opciones" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Home</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">About</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Contactos</NavDropdown.Item>
                        <NavDropdown.Divider />
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
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
            </div>
            <div>
            <Routes>
                <Route exact path="/Home" element={<Home/>}/>
                <Route exact path="/About" element={<About/>}/>
                <Route exact path="/Contactos" element={<Contactos/>}/>
            </Routes>            
            </div>
            </BrowserRouter>
        );
    }
}