import React from 'react'
import Button from 'react-bootstrap/Button';
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
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="https://st3.depositphotos.com/4270667/14411/v/450/depositphotos_144112265-stock-illustration-typographic-doctor-logo-design-medical.jpg"
                        width="280"
                        height="150"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Espace privée</Nav.Link>
                        <Nav.Link href="/rdv">Prise de rendez vous{' '}<Badge bg="danger">{rdvList.length}</Badge></Nav.Link>
                        <Nav.Link href="/labo">Laboratoires</Nav.Link>
                        <Nav.Link href="/doctor">
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