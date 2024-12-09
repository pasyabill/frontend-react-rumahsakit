import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Header.js';

const Kontak = () => {
  const titleStyle = {
    color: "green", 
    marginBottom: "20px",
  };

  return (
    <div>
      <Header />
    <Container className="my-5">
      {}
      <h2 className="text-center">Kontak Kami</h2>

      {}
      <Row className="mt-4">
        <Col md={6}>
          <h3 style={titleStyle}>Telepon</h3>
          <ListGroup>
            <ListGroup.Item>Hotline Darurat: 112</ListGroup.Item>
            <ListGroup.Item>Resepsionis: (021) 123-4567</ListGroup.Item>
            <ListGroup.Item>Konsultasi Dokter: (021) 765-4321</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={6}>
          <h3 style={titleStyle}>Email</h3>
          <ListGroup>
            <ListGroup.Item>Informasi Umum: info@sehatsejahtera.com</ListGroup.Item>
            <ListGroup.Item>Konsultasi: konsultasi@sehatsejahtera.com</ListGroup.Item>
            <ListGroup.Item>Layanan Pengaduan: pengaduan@sehatsejahtera.com</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Kontak;