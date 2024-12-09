import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header.js";

const Lokasi = () => {
  const titleStyle = {
    color: "green", 
    marginBottom: "20px",
  };

  return (
    <div>
      <Header /> 
      <Container className="my-5">
        <h2 className="text-center">Lokasi Rumah Sakit</h2>

        <Row className="mt-4">
          <Col>
            <h3 style={titleStyle}>Alamat</h3>
            <p>
              Rumah Sakit Sehat Sejahtera <br />
              Jl. Kesehatan No. 123, Kecamatan Harmoni, <br />
              Kota Sejahtera, Provinsi Bahagia, 45678
            </p>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <h3 style={titleStyle}>Petunjuk Lokasi</h3>
            <p>
              Rumah sakit terletak di pusat kota, dekat dengan taman kota Harmoni.
              Anda bisa mencapai lokasi ini melalui transportasi umum seperti bus
              atau taksi. Terdapat area parkir luas untuk kendaraan pribadi.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Lokasi;