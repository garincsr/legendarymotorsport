import { Container, Navbar, Nav } from 'react-bootstrap';
import React from 'react';
const navBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"></Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/service">About Us</Nav.Link>
                    <Nav.Link href="/cars">All Vehicle</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default navBar