import React from "react";
import { Container, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Header.js';

const Fasilitas = () => {
  const titleStyle = {
    color: "green",
    marginBottom: "20px",
  };

  const imageStyle = {
    width: "100%",
    height: "150px",
    objectFit: "cover",
  };

  return (
    <div>
      <Header />
    <Container className="my-5">
     
      <h2 className="text-center">Fasilitas Rumah Sakit Sehat Sejahtera</h2>

      
      <h3 style={titleStyle}>Fasilitas</h3>
      <ul>
        <li>Unit Gawat Darurat 24 jam dengan penanganan kasus darurat jantung dan stroke.</li>
        <li>Ruang operasi modern dengan standar internasional.</li>
        <li>Laboratorium diagnostik lengkap.</li>
        <li>Fasilitas rawat inap nyaman dengan berbagai kelas.</li>
        <li>Klinik rawat jalan dengan layanan konsultasi spesialis.</li>
      </ul>

      {}
      <h3 style={titleStyle}>Keunggulan</h3>
      <ul>
        <li>Mengutamakan teknologi medis terkini seperti MRI, CT Scan, dan EKG untuk diagnosa cepat dan akurat.</li>
        <li>Tim dokter spesialis jantung dan saraf berpengalaman lebih dari 10 tahun.</li>
        <li>Program edukasi kesehatan untuk masyarakat seputar pencegahan penyakit jantung dan stroke.</li>
      </ul>

      {}
      <h3 style={titleStyle}>Kamar</h3>
      <Table bordered>
        <thead>
          <tr className="text-center">
            <th>Kelas 1</th>
            <th>Executive</th>
            <th>VIP</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {}
            <td className="text-center">
              <img src="/kelas1.jpg" alt="Kelas 1" style={imageStyle} />
            </td>
            <td className="text-center">
              <img src="/exe.jpeg" alt="Executive" style={imageStyle} />
            </td>
            <td className="text-center">
              <img src="/vip.jpg" alt="VIP" style={imageStyle} />
            </td>
          </tr>
          <tr>
            <td>
              <ul>
                <li>1 tempat tidur pasien dengan kenyamanan premium (1 kamar berisi 2 pasien).</li>
                <li>Ruangan ber-AC.</li>
                <li>Kamar mandi dengan pemanas air.</li>
                <li>TV LED 32 inci.</li>
                <li>Lemari pakaian kecil.</li>
                <li>Makanan sehat 3 kali sehari (sesuai rekomendasi gizi).</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>1 tempat tidur pasien elektrik dengan pengaturan otomatis (1 kamar 1 pasien).</li>
                <li>Ruangan ber-AC.</li>
                <li>Kamar mandi dengan pemanas air.</li>
                <li>TV LED 42 inci dengan saluran kabel.</li>
                <li>Sofa untuk pendamping.</li>
                <li>Wi-Fi gratis.</li>
                <li>Makanan bisa disesuaikan dengan preferensi.</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Kamar luas dengan desain mewah.</li>
                <li>1 tempat tidur pasien elektrik dengan pengaturan otomatis (1 kamar 1 pasien).</li>
                <li>Ruangan ber-AC dengan tata interior modern.</li>
                <li>Kamar mandi dengan pemanas air.</li>
                <li>TV LED 50 inci dengan saluran premium.</li>
                <li>Sofa bed dan kursi tambahan untuk keluarga/pengunjung.</li>
                <li>Lemari pakaian besar dan meja kerja eksklusif.</li>
                <li>Mini kulkas, pantry, dan fasilitas pembuat teh/kopi.</li>
                <li>Makanan premium dengan pilihan menu harian.</li>
                <li>Parkir khusus untuk pasien VIP.</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
    </div>
  );
};

export default Fasilitas;