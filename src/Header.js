import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#4d7e3e' }} variant="dark">
      <Container>
        <Navbar.Brand href="#">
          <img
            src={`${process.env.PUBLIC_URL}/logo.jpg`}
            alt="Logo Rumah Sakit Sehat Sejahtera"
            height="50"
            className="d-inline-block align-top"
          />
          <span className="ms-2" style={{ fontWeight: 'bold', color: '#4d7e3e' }}>
            Rumah Sakit Sehat Sejahtera
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link className="text-white px-4 border-end">PROFIL</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/poliklinik">
              <Nav.Link className="text-white px-4 border-end">POLIKLINIK</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/fasilitas">
              <Nav.Link className="text-white px-4 border-end">FASILITAS</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/lokasi">
              <Nav.Link className="text-white px-4 border-end">LOKASI</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/kontak">
              <Nav.Link className="text-white px-4">KONTAK</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;