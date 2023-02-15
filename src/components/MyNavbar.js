import React from 'react'
import '../App.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';

function MyNavbar() {
    const rdvList = useSelector(state => state.rdv)

    return (
        <Navbar>
            <Container >
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src="https://tunisie-medicale.com/images/logo.png"
                        width="210"
                        height="110"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/List">Espace privée</Nav.Link>
                        <Nav.Link href="/rdv">Prise de rendez vous{' '}<Badge bg="danger">{rdvList.length}</Badge></Nav.Link>
                        <Nav.Link href="/labo">Laboratoires</Nav.Link>
                        <Nav.Link href="/doctors">
                            Medecins
                        </Nav.Link>
                        <Nav.Link href="/Pharma">Pharmacies</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default MyNavbar;