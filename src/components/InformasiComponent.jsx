import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import TestiComponent from "./TestiComponent";

import AboutImage from '../assets/img/bengkel/bengkel1.jpeg';
import AboutImage2 from '../assets/img/bengkel/bengkel2.jpeg';
import AboutImage3 from '../assets/img/bengkel/bengkel3.jpeg';
const InformasiComponent = () => {
    let navigate = useNavigate();
    return (
        <div className="layanan-page">
            <Container>
                <Row>
                    <Col>
                        <h1 className="fw-bold text-center mb-2">Informasi</h1>
                    </Col>
                </Row>
                <Row className="content my-4">
                    <Col lg={4} className="shadow">
                        <img src={AboutImage} alt="About" className="img-fluid" data-aos="fade-up" data-aos-duration="1000" />
                    </Col>
                    <Col lg={8}>
                        <div className="content-text">
                            <h3 className="fw-bold">Bengkel Mang Uloh</h3>
                            <Row className="header d-flex">
                                <Col lg="2">
                                    <button className="btn btn-outline-dark"> <i className="fas fa-map-marker"></i> 5km</button>
                                </Col>
                                <Col lg="10" >
                                    <h5>Karangpatri,Pebayuran</h5>
                                </Col>
                            </Row>
                            <div className="start d-flex">
                                <i className="fa-solid fa-star"></i>
                                <p>4.7</p>
                            </div>
                        </div>
                        <div>
                            <p className="" data-aos="fade-up" data-aos-duration="1000" >
                                <h4 className="fw-bold">Deskripsi</h4>
                                Bengkel Mang Uloh adalah bengkel motor umum yang berada di wilayah desa Karangpatri Kecamatan Pebayuran Kabupaten Bekasi Jawa Barat. Bengkel ini sudah sangat melegenda, karena sudah ada sejak tahun 1992. Bengkel ini didirikan oleh Mang Uloh sendiri. Bengkel ini sangat banyak diminati oleh kalangan hobiis otomotif, karena para montir atau pekerja di bengkel ini memiliki skill yang di atas rata-rata, maka tak heran bengkel ini selalu ramai pengunjung.
                            </p>
                            <button className="btn btn-danger rounded-4" onClick={() => navigate("/pemesanan")}>Hubungi Bengkel</button>
                        </div>
                    </Col>
                    <Col>
                        <div className="gambar-cadangan mt-3 mb-3">
                            <img src={AboutImage2} alt="" />
                            <img src={AboutImage3} alt="" />
                        </div>
                    </Col>
                </Row>
                <Row className="heading-info-layanan">
                    <Col className="">
                        <h2 className="fw-bold">Info Layanan</h2>
                    </Col>
                </Row>
                <Row className="body-infolayanan">
                    <Col lg="4">
                        <h4>Layanan Servis:</h4>
                        <div className="d-flex">
                            <ul>
                                <li>Servis Mesin</li>
                                <li>Ganti Oli</li>
                                <li>Ban Velg</li>
                            </ul>
                            <ul>
                                <li>Body Repair</li>
                                <li>Ganti Aki</li>
                                <li>Lainnya</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg="4">
                        <h4>Metode Pembayaran</h4>
                        <div>
                            <ul>
                                <li>Cash/Tunai</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg="4">
                        <h4>Jam Operasional</h4>
                        <div className="d-flex">
                            <div className="mx-2">
                                <ul>
                                    <li>Senin - Kamis</li>
                                    <li>Jumat</li>
                                    <li>Sabtu - Mingggu</li>
                                </ul>
                            </div>
                            <div className="mx-2">
                                <h6>08:00 - 17:30 WIB</h6>
                                <h6>Tutup</h6>
                                <h6>08:00 - 17:30 WIB</h6>
                            </div>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <TestiComponent />
                </Row>
            </Container>
        </div>
    )
}

export default InformasiComponent