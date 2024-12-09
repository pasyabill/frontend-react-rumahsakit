import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header.js';

function Profile() {
  return (
    <div>
      <Header />
    <Container className="my-5">
      <Row className="mb-4">
        <Col>
          <h2 className="text-center">Profil Rumah Sakit Sehat Sejahtera</h2>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <h4 className="text-success">Visi</h4>
          <p>
            Menjadi rumah sakit terkemuka dalam layanan kesehatan spesialis jantung dan saraf yang terpercaya dengan berbasis teknologi modern.
          </p>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <h4 className="text-success">Misi</h4>
          <ol>
            <li>Memberikan pelayanan kesehatan berkualitas tinggi yang berpusat pada kebutuhan pasien.</li>
            <li>Mengembangkan teknologi medis terkini untuk mendukung diagnosa dan perawatan.</li>
            <li>Menyediakan tenaga medis dan paramedis profesional serta berpengalaman.</li>
            <li>Membangun lingkungan yang nyaman dan aman bagi pasien dan keluarga.</li>
          </ol>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <h4 className="text-success">Layanan Unggulan</h4>
          <h5 className="mt-3">1. Spesialis Jantung:</h5>
          <ul>
            <li>Layanan kateterisasi jantung (Cath Lab).</li>
            <li>Pemeriksaan dan perawatan penyakit jantung koroner.</li>
            <li>Rehabilitasi jantung pascaoperasi.</li>
          </ul>
          <h5 className="mt-3">2. Spesialis Saraf:</h5>
          <ul>
            <li>Diagnosa dan pengobatan stroke.</li>
            <li>Layanan neurologi komprehensif, termasuk rehabilitasi saraf.</li>
            <li>Penanganan penyakit neurodegeneratif seperti Parkinson dan Alzheimer.</li>
          </ul>
        </Col>
      </Row>
      <Row className="text-center my-4">
        <Col>
          <h5 className="fst-italic" className="text-success">“Kesehatan Anda, Prioritas Kami.”</h5>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Dengan dedikasi selama 10 tahun dalam memberikan layanan kesehatan, Rumah Sakit Sejahtera terus berkomitmen untuk menjadi pilihan utama dalam layanan spesialis jantung dan saraf.
          </p>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Profile;