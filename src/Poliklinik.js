import React from "react";
import { Container, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Header.js';

const Poliklinik = () => {
  const titleStyle = {
    color: "green", // Warna hijau untuk judul
    marginBottom: "20px",
  };

  return (
    <div>
      <Header />
    <Container className="my-5">
      {/* Judul Halaman */}
      <h2 className="text-center">Daftar Poliklinik</h2>
      <p className="text-center">
        Kami menyediakan berbagai layanan poliklinik dengan fasilitas terbaik dan jadwal yang fleksibel.
      </p>

      {/* Tabel Poliklinik */}
      <Table bordered hover responsive className="mt-4">
        <thead>
          <tr className="text-center" style={{ backgroundColor: "#f1f1f1" }}>
            <th>No</th>
            <th>Nama Poliklinik</th>
            <th>Jadwal</th>
            <th>Layanan Unggulan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center">1</td>
            <td>Poliklinik Jantung</td>
            <td>
              Senin - Jumat: 08.00 - 16.00 <br />
              Sabtu: 08.00 - 12.00
            </td>
            <td>
              <ul>
                <li>EKG (Elektrokardiogram)</li>
                <li>Ekokardiografi</li>
                <li>Rehabilitasi jantung</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="text-center">2</td>
            <td>Poliklinik Gigi</td>
            <td>
              Senin - Sabtu: 09.00 - 17.00
            </td>
            <td>
              <ul>
                <li>Pembersihan karang gigi</li>
                <li>Penambalan gigi</li>
                <li>Pencabutan gigi</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="text-center">3</td>
            <td>Poliklinik Anak</td>
            <td>
              Senin - Jumat: 08.00 - 16.00 <br />
              Sabtu: 08.00 - 13.00
            </td>
            <td>
              <ul>
                <li>Konsultasi tumbuh kembang anak</li>
                <li>Vaksinasi anak</li>
                <li>Pemeriksaan kesehatan umum</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="text-center">4</td>
            <td>Poliklinik Saraf</td>
            <td>
              Senin - Jumat: 10.00 - 18.00
            </td>
            <td>
              <ul>
                <li>Pemeriksaan MRI</li>
                <li>Diagnosis penyakit stroke</li>
                <li>Terapi fisik saraf</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
    </div>
  );
};

export default Poliklinik;
